// Personal-finance glossary v1. Terms link back to cornerstone articles
// where they're explained in depth — driving internal linking and topical
// authority. Definitions are plain-language, ≤2 sentences, neutral tone.

export type GlossaryPillar = "Budget" | "Invest" | "Save tax" | "Borrow smart" | "Protect" | "General";

export type GlossaryTerm = {
  term: string;
  short?: string; // disambiguating acronym/alias
  pillar: GlossaryPillar;
  definition: string;
  related?: string[]; // article slugs (must exist in siteConfig.articles)
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "401(k)",
    pillar: "Invest",
    definition:
      "An employer-sponsored retirement account that lets you contribute pre-tax (traditional) or after-tax (Roth) dollars, often with an employer match. 2026 employee limit is $24,500 ($8,000 catch-up at 50+).",
    related: ["401k-vs-ira-which-first", "how-much-to-contribute-to-401k"],
  },
  {
    term: "APR",
    short: "Annual percentage rate",
    pillar: "Borrow smart",
    definition:
      "The yearly cost of borrowing, including interest plus most fees. APR makes loans comparable; the higher it is, the more the loan costs you per year.",
    related: ["how-credit-cards-work", "personal-loan-vs-credit-card"],
  },
  {
    term: "APY",
    short: "Annual percentage yield",
    pillar: "Budget",
    definition:
      "The yearly return on a savings account or CD, accounting for compounding. APY makes savings products comparable; the higher it is, the more interest you earn.",
    related: ["best-hysa-2026"],
  },
  {
    term: "Asset allocation",
    pillar: "Invest",
    definition:
      "The mix of stocks, bonds, and cash in your portfolio. A common starting rule: hold a stock percentage roughly equal to 120 minus your age.",
    related: ["asset-allocation-by-age", "how-to-invest-1000-beginners"],
  },
  {
    term: "Backdoor Roth IRA",
    pillar: "Save tax",
    definition:
      "A two-step move — contribute to a traditional IRA, then convert it to a Roth — used by high earners to bypass the Roth income limit. Watch for the pro-rata rule if you have pre-tax IRA money.",
    related: ["backdoor-roth-ira-guide", "mega-backdoor-roth-guide"],
  },
  {
    term: "Capital gains tax",
    pillar: "Save tax",
    definition:
      "Tax on the profit from selling an investment. Held over a year, long-term rates are 0%, 15%, or 20% in 2026; held a year or less, ordinary income rates apply.",
    related: ["capital-gains-tax-2026", "short-vs-long-term-capital-gains"],
  },
  {
    term: "CD",
    short: "Certificate of deposit",
    pillar: "Budget",
    definition:
      "A bank deposit that locks in a fixed interest rate for a set term (3 months to 5+ years). You earn more than a savings account, but pay an early-withdrawal penalty if you cash out early.",
    related: ["best-hysa-2026"],
  },
  {
    term: "Compound interest",
    pillar: "Invest",
    definition:
      "Interest earned on both your original deposit and on previously earned interest. Over decades, compounding is what makes small, consistent contributions grow into large balances.",
    related: ["how-to-invest-1000-beginners"],
  },
  {
    term: "Credit utilization",
    pillar: "Borrow smart",
    definition:
      "The percent of your credit-card limit you're currently using. Keeping it under 30% (under 10% is better) is one of the biggest levers on your credit score.",
    related: ["credit-utilization-ratio", "what-affects-your-credit-score"],
  },
  {
    term: "Debt avalanche",
    pillar: "Budget",
    definition:
      "A debt-payoff method that targets the highest-interest balance first while making minimums on the rest. Saves the most interest mathematically.",
    related: ["debt-snowball-vs-avalanche", "how-to-pay-off-debt"],
  },
  {
    term: "Debt snowball",
    pillar: "Budget",
    definition:
      "A debt-payoff method that targets the smallest balance first regardless of interest rate. Costs slightly more in interest but builds momentum through quick wins.",
    related: ["debt-snowball-vs-avalanche", "how-to-pay-off-debt"],
  },
  {
    term: "DIME method",
    pillar: "Protect",
    definition:
      "A life-insurance sizing rule: add Debt + Income (replaced for ~10 years) + Mortgage + Education costs to estimate how much coverage you need.",
    related: ["how-much-life-insurance-do-i-need"],
  },
  {
    term: "Dollar-cost averaging",
    pillar: "Invest",
    definition:
      "Investing a fixed amount on a regular schedule rather than all at once. Reduces the risk of investing right before a downturn at the cost of slightly lower long-run expected returns.",
    related: ["dollar-cost-averaging-vs-lump-sum"],
  },
  {
    term: "E-E-A-T",
    short: "Experience, Expertise, Authoritativeness, Trustworthiness",
    pillar: "General",
    definition:
      "Google's quality rubric for YMYL content. Sites covering money, health, or safety topics must show real expertise and credentials to rank well.",
  },
  {
    term: "Emergency fund",
    pillar: "Budget",
    definition:
      "Liquid savings held in a high-yield account to cover 3–6 months of essential expenses. Keep it separate from your spending account so you don't dip into it.",
    related: ["how-to-build-emergency-fund", "how-much-should-emergency-fund-be"],
  },
  {
    term: "ESPP",
    short: "Employee stock purchase plan",
    pillar: "Save tax",
    definition:
      "A workplace benefit that lets you buy company stock at a 5–15% discount via payroll deduction. The discount alone is usually a strong guaranteed return.",
    related: ["espp-guide"],
  },
  {
    term: "ETF",
    short: "Exchange-traded fund",
    pillar: "Invest",
    definition:
      "A basket of stocks or bonds that trades on an exchange like a single stock. Most ETFs are index funds with very low expense ratios.",
    related: ["mutual-funds-vs-etfs"],
  },
  {
    term: "FICO score",
    pillar: "Borrow smart",
    definition:
      "The credit score most U.S. lenders use, ranging 300–850. Payment history (35%) and credit utilization (30%) are the two biggest inputs.",
    related: ["what-affects-your-credit-score", "how-to-check-credit-score-for-free"],
  },
  {
    term: "FIRE",
    short: "Financial Independence, Retire Early",
    pillar: "Invest",
    definition:
      "A movement built around saving 50–70% of income to reach a portfolio that funds your life via the 4% rule. Variants include LeanFIRE, FatFIRE, and CoastFIRE.",
    related: ["fire-movement-guide"],
  },
  {
    term: "FSA",
    short: "Flexible spending account",
    pillar: "Save tax",
    definition:
      "An employer-sponsored account funded with pre-tax dollars for medical or dependent-care expenses. Use-it-or-lose-it: most balances forfeit at year end.",
    related: ["fsa-explainer", "hsa-vs-fsa"],
  },
  {
    term: "HDHP",
    short: "High-deductible health plan",
    pillar: "Protect",
    definition:
      "A health-insurance plan with a higher deductible and lower premium. In 2026, an HDHP requires a minimum deductible of $1,700 (self) / $3,400 (family) — the threshold to qualify for an HSA.",
    related: ["hmo-vs-ppo-vs-hdhp"],
  },
  {
    term: "HSA",
    short: "Health savings account",
    pillar: "Save tax",
    definition:
      "A triple-tax-advantaged account paired with an HDHP: pre-tax contributions, tax-free growth, tax-free withdrawals for qualified medical expenses. 2026 limit is $4,400 self / $8,750 family.",
    related: ["hsa-vs-fsa", "hsa-as-retirement-account", "best-hsa-providers"],
  },
  {
    term: "HYSA",
    short: "High-yield savings account",
    pillar: "Budget",
    definition:
      "A savings account at an online or fintech bank paying 5–20× the APY of a traditional bank. Standard place to park your emergency fund.",
    related: ["best-hysa-2026", "how-to-build-emergency-fund"],
  },
  {
    term: "Index fund",
    pillar: "Invest",
    definition:
      "A mutual fund or ETF that tracks a market index (S&P 500, Total Stock Market, etc.) instead of trying to beat it. Low fees + broad diversification — the default for most long-term investors.",
    related: ["how-to-invest-in-stocks", "mutual-funds-vs-etfs"],
  },
  {
    term: "IRA",
    short: "Individual retirement account",
    pillar: "Invest",
    definition:
      "A retirement account you open yourself, not through an employer. 2026 limit is $7,500 ($1,100 catch-up at 50+); Roth IRA contributions are after-tax with tax-free withdrawals in retirement.",
    related: ["401k-vs-ira-which-first", "roth-ira-vs-traditional-ira"],
  },
  {
    term: "Marginal tax rate",
    pillar: "Save tax",
    definition:
      "The federal tax rate on your next dollar of income — not your average rate. Used to compare Roth vs. Traditional contributions and to estimate the value of a deduction.",
    related: ["tax-brackets-2026"],
  },
  {
    term: "Mega-backdoor Roth",
    pillar: "Save tax",
    definition:
      "A workplace strategy that uses after-tax 401(k) contributions plus in-plan Roth conversions to move up to $46,000 of extra savings into Roth in 2026. Only works if your plan allows both steps.",
    related: ["mega-backdoor-roth-guide"],
  },
  {
    term: "Mortgage refinance",
    pillar: "Borrow smart",
    definition:
      "Replacing your existing mortgage with a new one — usually for a lower rate, a shorter term, or to pull out equity. Pencils out when your break-even (closing costs / monthly savings) is under your remaining hold time.",
    related: ["when-to-refinance-mortgage"],
  },
  {
    term: "Mutual fund",
    pillar: "Invest",
    definition:
      "A pooled investment that's priced once per day at market close. Most low-cost index mutual funds are functionally equivalent to their ETF counterparts.",
    related: ["mutual-funds-vs-etfs"],
  },
  {
    term: "Net worth",
    pillar: "Budget",
    definition:
      "Everything you own (assets) minus everything you owe (debts). The single best one-number metric of financial progress over time.",
  },
  {
    term: "Pro-rata rule",
    pillar: "Save tax",
    definition:
      "An IRS rule that taxes Roth conversions proportionally to the pre-tax balance across all your traditional IRAs. The reason backdoor Roths are messy if you already have pre-tax IRA money.",
    related: ["backdoor-roth-ira-guide"],
  },
  {
    term: "RMD",
    short: "Required minimum distribution",
    pillar: "Save tax",
    definition:
      "The minimum amount you must withdraw from a traditional IRA or 401(k) each year starting at age 73 (rising to 75 in 2033). Roth IRAs have no RMDs during your lifetime.",
    related: ["ira-rmd-rules", "secure-2-0-changes-2026"],
  },
  {
    term: "Roth conversion",
    pillar: "Save tax",
    definition:
      "Moving pre-tax retirement money into a Roth account, paying income tax on the converted amount today in exchange for tax-free withdrawals later. Best in low-income years.",
    related: ["roth-conversion-ladder", "roth-ira-5-year-rules"],
  },
  {
    term: "Roth IRA",
    pillar: "Invest",
    definition:
      "An IRA funded with after-tax dollars. Qualified withdrawals — including all growth — are tax-free in retirement. 2026 contribution limit is $7,500 / $1,100 catch-up.",
    related: ["roth-ira-vs-traditional-ira", "roth-ira-contribution-limits-2026"],
  },
  {
    term: "SECURE 2.0",
    pillar: "Save tax",
    definition:
      "The 2022 federal law that raised the RMD age, increased catch-up limits, and added a super catch-up for ages 60–63 starting in 2025. Key 2026 figures flow from it.",
    related: ["secure-2-0-changes-2026"],
  },
  {
    term: "Sequence-of-returns risk",
    pillar: "Invest",
    definition:
      "The danger of a market crash early in retirement when you're withdrawing rather than contributing — bad sequencing can shorten a portfolio's lifespan even with the same average return.",
    related: ["sequence-of-returns-risk", "how-much-do-i-need-to-retire"],
  },
  {
    term: "Standard deduction",
    pillar: "Save tax",
    definition:
      "A flat amount you can subtract from taxable income without itemizing. 2026: $16,100 single, $32,200 MFJ, $24,150 head of household.",
    related: ["standard-vs-itemized-deduction", "tax-brackets-2026"],
  },
  {
    term: "Tax-loss harvesting",
    pillar: "Save tax",
    definition:
      "Selling investments at a loss to offset capital gains or up to $3,000 of ordinary income, then reinvesting in a similar (not substantially identical) holding. Watch the wash-sale rule.",
    related: ["tax-loss-harvesting-guide", "tax-loss-harvesting-wash-sale-rule"],
  },
  {
    term: "Term life insurance",
    pillar: "Protect",
    definition:
      "Life insurance that covers a fixed period (10–30 years) for a low premium. Right answer for nearly everyone with dependents; whole life is almost always wrong for them.",
    related: ["term-vs-whole-life-insurance", "best-term-life-insurance-young-professionals"],
  },
  {
    term: "Total-return investing",
    pillar: "Invest",
    definition:
      "An approach that focuses on total portfolio growth (capital gains plus dividends) rather than chasing high-yield stocks for income. Standard for accumulation-phase investors.",
  },
  {
    term: "Umbrella insurance",
    pillar: "Protect",
    definition:
      "A liability policy that sits on top of your auto and homeowners coverage, kicking in after their limits are exhausted. Cheap for the protection: $1M coverage typically runs $150–$300/year.",
    related: ["umbrella-insurance-guide"],
  },
  {
    term: "Vesting",
    pillar: "Invest",
    definition:
      "The schedule on which employer-contributed money (401(k) match, RSUs, ESPP shares) becomes legally yours. Leave before you vest and you forfeit the unvested portion.",
  },
  {
    term: "W-4",
    pillar: "Save tax",
    definition:
      "The IRS form you give your employer to set tax withholding from your paycheck. Update it after marriage, a new job, or any year you owe a large refund or surprise tax bill.",
  },
  {
    term: "Wash-sale rule",
    pillar: "Save tax",
    definition:
      "An IRS rule that disallows the tax loss if you buy a substantially identical security within 30 days before or after selling. The main constraint when tax-loss harvesting.",
    related: ["tax-loss-harvesting-wash-sale-rule"],
  },
  {
    term: "YMYL",
    short: "Your Money or Your Life",
    pillar: "General",
    definition:
      "Google's label for high-stakes content categories (finance, medical, legal). YMYL pages are held to a higher quality bar — they need real expertise, citations, and trust signals.",
  },
];

// Group by leading letter, A-Z.
export function groupByLetter(): Array<{ letter: string; terms: GlossaryTerm[] }> {
  const byLetter = new Map<string, GlossaryTerm[]>();
  for (const t of glossaryTerms) {
    const letter = t.term[0].toUpperCase();
    const arr = byLetter.get(letter) ?? [];
    arr.push(t);
    byLetter.set(letter, arr);
  }
  return Array.from(byLetter.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, terms]) => ({
      letter,
      terms: terms.sort((a, b) => a.term.localeCompare(b.term)),
    }));
}

export function termSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
