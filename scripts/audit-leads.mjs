// Audit script — for each article, extract title + lead paragraph and
// flag those that fail the "answer the title in ≤ 2 sentences" rule.
// Heuristic checks (no LLM):
//   - lead exists at all (looks for first <p className="lead"> or first <p>)
//   - lead is ≤ 2 sentences (period count)
//   - lead is ≤ 250 chars (otherwise it's a wall, not a lead)
//   - lead contains at least one number OR a strong claim verb (signals
//     concreteness — "is", "costs", "earns", "takes", "saves", etc.)
//
// Outputs a markdown report to LEAD_AUDIT.md ranked worst→best.

import { promises as fs } from "node:fs";
import path from "node:path";

const learnDir = path.resolve("src/app/learn");
const dirents = await fs.readdir(learnDir, { withFileTypes: true });
const slugs = dirents
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((s) => !["budget", "invest", "save-tax", "borrow-smart", "protect"].includes(s));

// Strip JSX tags + curly-brace expressions to get human-readable text.
function stripJsx(s) {
  return s
    .replace(/<\/?[A-Za-z][^>]*>/g, "") // tags
    .replace(/\{[^{}]*?\}/g, "") // simple curly expressions like {" "}
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

function countSentences(s) {
  // Simple: count . ! ? followed by space or end. Avoid double-counting "U.S."
  // by collapsing patterns of <Letter>.<Letter>. first.
  const collapsed = s.replace(/\b([A-Z])\.([A-Z])\.?/g, "$1$2");
  return (collapsed.match(/[.!?](?=\s|$)/g) || []).length;
}

const STRONG_VERBS = /\b(is|are|costs?|earns?|takes?|saves?|cuts?|pays?|adds?|drops?|gives?|covers?|needs?|owes?|qualif(y|ies)|loses?|gains?|beats?|requires?|means?|gets?)\b/i;

function score(lead) {
  if (!lead) return { rank: 0, reasons: ["no lead paragraph found"] };
  const reasons = [];
  let r = 100;

  const sentences = countSentences(lead);
  if (sentences === 0) {
    reasons.push("no terminal punctuation (likely truncated extract)");
    r -= 20;
  } else if (sentences > 2) {
    reasons.push(`${sentences} sentences (target ≤ 2)`);
    r -= 15 * (sentences - 2);
  }

  if (lead.length > 350) {
    reasons.push(`${lead.length} chars (target ≤ 350)`);
    r -= 10;
  }
  if (lead.length > 500) r -= 10;

  if (!/\d/.test(lead) && !STRONG_VERBS.test(lead)) {
    reasons.push("no number or strong verb");
    r -= 20;
  }

  // Preamble red flags
  if (/^(in this article|in this guide|today,|let's talk|let's start|welcome|hi |hello)/i.test(lead)) {
    reasons.push("preamble phrase");
    r -= 25;
  }

  return { rank: r, reasons };
}

const rows = [];

for (const slug of slugs) {
  const file = path.join(learnDir, slug, "page.tsx");
  let src;
  try {
    src = await fs.readFile(file, "utf8");
  } catch {
    continue;
  }

  const titleMatch = src.match(/^const title = "(.+?)";$/m);
  const title = titleMatch?.[1] ?? "(no title)";

  // Prefer <p className="lead">...</p>, else fall back to the first <p> inside
  // <div className="prose ...">.
  let lead = null;
  const leadMatch = src.match(/<p\s+className="lead"[^>]*>([\s\S]*?)<\/p>/);
  if (leadMatch) {
    lead = stripJsx(leadMatch[1]);
  } else {
    const proseMatch = src.match(/<div\s+className="prose[^"]*"[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/);
    if (proseMatch) lead = stripJsx(proseMatch[1]);
  }

  const { rank, reasons } = score(lead);
  rows.push({ slug, title, lead, rank, reasons });
}

rows.sort((a, b) => a.rank - b.rank);

let out = `# Article lead audit\n\nGenerated ${new Date().toISOString().slice(0, 10)} by \`scripts/audit-leads.mjs\`.\n\nRanked worst → best. "Lead" = first \`<p className="lead">\` (or first \`<p>\` inside the prose block if no lead class). Heuristic only — no LLM. Flags are signals to review, not definitive.\n\n`;

out += `## Summary\n\n`;
const fails = rows.filter((r) => r.rank < 70);
const warns = rows.filter((r) => r.rank >= 70 && r.rank < 100);
const passes = rows.filter((r) => r.rank === 100);
out += `- 🟥 **${fails.length}** rewrite candidates (score < 70)\n`;
out += `- 🟧 **${warns.length}** minor issues (70 ≤ score < 100)\n`;
out += `- 🟩 **${passes.length}** clean (score = 100)\n\n`;

out += `## Rewrite candidates\n\n`;
for (const r of fails) {
  out += `### ${r.slug} (score ${r.rank})\n`;
  out += `**Title:** ${r.title}\n\n`;
  out += `**Flags:** ${r.reasons.join("; ")}\n\n`;
  out += `**Current lead:**\n\n> ${r.lead ?? "(none)"}\n\n---\n\n`;
}

out += `## Minor issues\n\n`;
for (const r of warns) {
  out += `- **${r.slug}** (${r.rank}) — ${r.reasons.join("; ")}\n`;
}

await fs.writeFile("LEAD_AUDIT.md", out);
console.log(`✓ wrote LEAD_AUDIT.md`);
console.log(`  🟥 rewrite candidates: ${fails.length}`);
console.log(`  🟧 minor issues:        ${warns.length}`);
console.log(`  🟩 clean:               ${passes.length}`);
