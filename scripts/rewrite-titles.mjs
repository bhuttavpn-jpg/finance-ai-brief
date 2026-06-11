// One-shot: rewrite the `const title = "..."` line for 16 priority
// articles to apply the CTR pattern documented in
// FINBRIEF_SEO_PLAYBOOK.md — primary keyword, year, specific
// hook/number/benefit. House style: sentence case.
//
// Idempotent: replaces only if the file's current title exactly
// matches the expected "before" string. Drift is logged, not forced.
//
// Usage: node scripts/rewrite-titles.mjs

import { promises as fs } from "node:fs";
import path from "node:path";

const REWRITES = [
  {
    slug: "best-hysa-2026",
    before: "Best high-yield savings accounts 2026",
    after: "Best high-yield savings accounts (2026): top 10 APYs compared",
  },
  {
    slug: "tax-brackets-2026",
    before: "Federal income tax brackets 2026: Complete IRS tables",
    after: "2026 federal income tax brackets (for returns filed in 2027)",
  },
  {
    slug: "roth-ira-vs-traditional-ira",
    before: "Roth IRA vs. Traditional IRA: Which Should You Choose?",
    after: "Roth IRA vs traditional IRA: which should you choose in 2026?",
  },
  {
    slug: "how-to-budget-50-30-20",
    before: "How to Budget Using the 50/30/20 Rule",
    after: "50/30/20 budget rule: a realistic example with calculator",
  },
  {
    slug: "how-much-life-insurance-do-i-need",
    before: "How much life insurance do I need?",
    after: "How much life insurance do I need? DIME formula + calculator",
  },
  {
    slug: "best-cashback-credit-cards-2026",
    before: "Best cashback credit cards 2026",
    after: "Best cashback credit cards 2026: 2%, 5%, and category-bonus picks",
  },
  {
    slug: "best-travel-credit-cards-2026",
    before: "Best travel credit cards 2026",
    after: "Best travel credit cards 2026: points, miles, and lounge access",
  },
  {
    slug: "best-brokerage-accounts-beginners",
    before: "Best brokerage accounts for beginners (2026)",
    after: "Best brokerage accounts for beginners (2026): Fidelity, Schwab, Vanguard compared",
  },
  {
    slug: "best-life-insurance-companies-2026",
    before: "Best life insurance companies 2026: Honest comparison",
    after: "Best life insurance companies 2026: term, whole, and no-exam picks",
  },
  {
    slug: "best-credit-cards-for-beginners",
    before: "Best credit cards for beginners (2026)",
    after: "Best credit cards for beginners (2026): build credit without an annual fee",
  },
  {
    slug: "401k-vs-ira-which-first",
    before: "401(k) vs. IRA: Which should you fund first?",
    after: "401(k) or IRA: which should you fund first in 2026?",
  },
  {
    slug: "how-to-invest-1000-beginners",
    before: "How to invest $1,000 for beginners",
    after: "How to invest $1,000 for beginners: a 4-step starter plan",
  },
  {
    slug: "how-much-do-i-need-to-retire",
    before: "How much do I need to retire? (2026)",
    after: "How much do I need to retire? The 25× rule with a real example",
  },
  {
    slug: "fire-movement-guide",
    before: "The FIRE movement explained: How early retirement actually works",
    after: "FIRE movement guide: how to retire by 45 (and the math behind it)",
  },
  {
    slug: "how-to-build-credit-from-scratch",
    before: "How to build credit from scratch",
    after: "How to build credit from scratch: a 12-month plan that actually works",
  },
  {
    slug: "how-to-get-a-mortgage",
    before: "How to get a mortgage (2026 step-by-step guide)",
    after: "How to get a mortgage in 2026: a step-by-step buyer's checklist",
  },
];

let updated = 0;
let alreadyDone = 0;
let drift = [];

for (const r of REWRITES) {
  const file = path.resolve("src/app/learn", r.slug, "page.tsx");
  let src = await fs.readFile(file, "utf8");

  const beforeLine = `const title = "${r.before}";`;
  const afterLine = `const title = ${JSON.stringify(r.after)};`;

  if (src.includes(afterLine)) {
    alreadyDone++;
    continue;
  }
  if (!src.includes(beforeLine)) {
    drift.push({ slug: r.slug, expected: r.before });
    continue;
  }

  src = src.replace(beforeLine, afterLine);
  await fs.writeFile(file, src);
  console.log(`✓ ${r.slug}`);
  updated++;
}

console.log(`\n✓ updated: ${updated}`);
console.log(`= already done: ${alreadyDone}`);
if (drift.length) {
  console.log(`! drift (current title differs from expected): ${drift.length}`);
  for (const d of drift) console.log(`  - ${d.slug}: expected "${d.expected}"`);
}
