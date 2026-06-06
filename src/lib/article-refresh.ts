// Weekly article-refresh scanner.
//
// Picks a rotating slice of articles from siteConfig.articles deterministically
// per ISO week (full catalog sweeps roughly quarterly), reads each article's
// raw .tsx source from disk, and asks Claude Haiku to flag anything that looks
// stale: outdated tax-year references, rate citations that may no longer be
// accurate, IRS contribution-limit numbers that should track the current year,
// "Last updated" dates that look ancient, or external claims that need a fresh
// primary-source check.
//
// Output is a structured list of findings the cron route renders into an HTML
// digest emailed to the editor. We never write to article files — humans
// review and edit. This is a diff-proposer, not a diff-applier.

import Anthropic from "@anthropic-ai/sdk";
import { promises as fs } from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

export type Finding = {
  category: "stale-rate" | "stale-date" | "stale-limit" | "stale-claim" | "other";
  severity: "high" | "medium" | "low";
  excerpt: string;
  issue: string;
  suggestion: string;
};

export type ArticleScan = {
  slug: string;
  title: string;
  pillar: string;
  findings: Finding[];
  // Set when the model returns malformed JSON or the read fails; lets the
  // email surface partial results instead of throwing the whole batch out.
  error?: string;
};

export type RefreshReport = {
  generatedAt: string;
  isoWeek: number;
  articlesScanned: number;
  totalFindings: number;
  scans: ArticleScan[];
};

const ARTICLES_PER_WEEK = 6;

// ISO week number, 1–53. Same helper as newsletter.ts — duplicated rather
// than imported to keep these two modules independently relocatable.
function isoWeek(d: Date): number {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

type ArticleEntry = (typeof siteConfig.articles)[number];

function pickArticlesForWeek(now: Date): { articles: ArticleEntry[]; week: number } {
  const all = siteConfig.articles;
  const week = isoWeek(now);
  // Rotation key combines week + year so re-runs in the same week return the
  // same slice, but year boundaries don't re-scan identical articles.
  const start = ((week + now.getUTCFullYear() * 53) * ARTICLES_PER_WEEK) % all.length;
  const picked: ArticleEntry[] = [];
  for (let i = 0; i < ARTICLES_PER_WEEK; i++) {
    picked.push(all[(start + i) % all.length]);
  }
  return { articles: picked, week };
}

async function readArticleSource(slug: string): Promise<string> {
  // Article .tsx files ship as part of the build under src/app/learn/<slug>/page.tsx.
  // process.cwd() inside a Vercel function is the project root.
  const filePath = path.join(process.cwd(), "src", "app", "learn", slug, "page.tsx");
  return fs.readFile(filePath, "utf8");
}

const SYSTEM_PROMPT = `You audit U.S. personal-finance articles for staleness. The current year is ${new Date().getUTCFullYear()}. Your job is to flag specific passages that look out-of-date or need a fresh primary-source check.

Look for, in priority order:
1. Tax-year references that no longer match the current year (e.g. an article calls "2025 brackets" current when it's now 2026).
2. IRS contribution limits, standard deductions, HSA limits, or bracket thresholds that may have been updated by a more recent IRS revenue procedure or IR-press release.
3. APY / interest rate / mortgage rate citations that name a specific number — these change weekly and almost certainly need re-verification.
4. "Last updated" dates older than 6 months on rate-sensitive content (HYSA, credit cards, mortgages).
5. External claims attributed to specific sources where the source link or figure should be reverified.

Do NOT flag:
- Evergreen explanations of how a concept works.
- Methodology, formulas, or definitions.
- Style/voice/grammar issues.
- Anything you can't point to with a specific excerpt from the source.

Return ONLY a JSON array. No prose, no markdown fences. Each element:
{
  "category": "stale-rate" | "stale-date" | "stale-limit" | "stale-claim" | "other",
  "severity": "high" | "medium" | "low",
  "excerpt": "<exact short quote from the source, ≤120 chars>",
  "issue": "<what's potentially stale, ≤180 chars>",
  "suggestion": "<concrete next step for the editor, ≤180 chars>"
}

If nothing looks stale, return [].`;

async function scanOne(client: Anthropic, article: ArticleEntry): Promise<ArticleScan> {
  const base: Omit<ArticleScan, "findings" | "error"> = {
    slug: article.slug,
    title: article.title,
    pillar: article.pillar,
  };

  let source: string;
  try {
    source = await readArticleSource(article.slug);
  } catch (err) {
    return {
      ...base,
      findings: [],
      error: `read failed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  // Trim ridiculously long files to keep token cost predictable.
  const MAX = 24_000;
  const trimmed = source.length > MAX ? source.slice(0, MAX) + "\n\n[…source truncated for length]" : source;

  const userPrompt = [
    `Article slug: ${article.slug}`,
    `Title: ${article.title}`,
    `Pillar: ${article.pillar}`,
    `Published: ${article.publishedAt}`,
    `Last updated (in site-config): ${article.updatedAt}`,
    ``,
    `--- Source (TSX) ---`,
    trimmed,
    `--- End source ---`,
    ``,
    `Return the JSON array of findings.`,
  ].join("\n");

  let resp: Anthropic.Message;
  try {
    resp = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    });
  } catch (err) {
    return {
      ...base,
      findings: [],
      error: `model call failed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const raw = resp.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();

  // Strip code-fence wrappers in case the model ignored "no markdown fences".
  const stripped = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(stripped || "[]");
  } catch (err) {
    return {
      ...base,
      findings: [],
      error: `JSON parse failed: ${err instanceof Error ? err.message : String(err)}; raw="${raw.slice(0, 200)}"`,
    };
  }

  if (!Array.isArray(parsed)) {
    return { ...base, findings: [], error: "model output was not a JSON array" };
  }

  const findings: Finding[] = [];
  for (const item of parsed) {
    if (!item || typeof item !== "object") continue;
    const o = item as Record<string, unknown>;
    const category = String(o.category ?? "other");
    const severity = String(o.severity ?? "medium");
    findings.push({
      category: (["stale-rate", "stale-date", "stale-limit", "stale-claim", "other"] as const).includes(
        category as Finding["category"]
      )
        ? (category as Finding["category"])
        : "other",
      severity: (["high", "medium", "low"] as const).includes(severity as Finding["severity"])
        ? (severity as Finding["severity"])
        : "medium",
      excerpt: String(o.excerpt ?? "").slice(0, 240),
      issue: String(o.issue ?? "").slice(0, 240),
      suggestion: String(o.suggestion ?? "").slice(0, 240),
    });
  }

  return { ...base, findings };
}

export async function generateRefreshReport(opts: {
  now?: Date;
  client?: Anthropic;
}): Promise<RefreshReport> {
  const now = opts.now ?? new Date();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey && !opts.client) {
    throw new Error("ANTHROPIC_API_KEY is not set.");
  }
  const client = opts.client ?? new Anthropic({ apiKey });

  const { articles, week } = pickArticlesForWeek(now);

  // Sequential — 6 articles is cheap and Haiku is quick. Parallelizing
  // would risk hitting rate limits and complicates error rollup.
  const scans: ArticleScan[] = [];
  for (const article of articles) {
    scans.push(await scanOne(client, article));
  }

  const totalFindings = scans.reduce((n, s) => n + s.findings.length, 0);

  return {
    generatedAt: now.toISOString(),
    isoWeek: week,
    articlesScanned: scans.length,
    totalFindings,
    scans,
  };
}
