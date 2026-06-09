import type { Metadata } from "next";
import { PillarHub, type PillarHubConfig } from "@/components/content/PillarHub";

const config: PillarHubConfig = {
  pillarSlug: "save-tax",
  pillarLabel: "Save tax",
  h1: "U.S. tax guides — brackets, accounts, and the moves that move the needle",
  lede:
    "Most American households can cut their lifetime tax bill more by maxing tax-advantaged accounts (401(k), IRA, HSA) and harvesting losses than by chasing deductions. Pick the right account, file once with the right software, and revisit your bracket each November.",
  intro:
    "FinBrief's Save tax pillar covers the 2026 federal tax brackets (IR-2025-103), Roth and HSA strategies, filing software comparisons, and retirement-tax rules including SECURE 2.0 changes and RMDs. All limits are pulled from the primary IRS revenue procedures — see the citations on each article for source documents.",
  toolSlug: "tax-bracket",
  metaDescription:
    "2026 U.S. tax guides — federal brackets, Roth and HSA strategy, tax-loss harvesting, filing software comparisons, and retirement-tax rules. Cited to IRS primary sources.",
  clusters: [
    {
      heading: "2026 tax brackets and deductions",
      intro:
        "For 2026 returns filed in 2027: standard deduction $16,100 single / $32,200 MFJ / $24,150 HoH (Rev. Proc. 2025-32). The top marginal rate is still 37%. Understand your marginal vs. effective rate before deciding between Roth and Traditional contributions.",
      slugs: [
        "tax-brackets-2026",
        "standard-vs-itemized-deduction",
        "tax-deductions-checklist",
        "short-vs-long-term-capital-gains",
        "capital-gains-tax-2026",
        "qualified-vs-ordinary-dividends",
      ],
    },
    {
      heading: "Tax software and filing",
      intro:
        "Most filers under $79,000 AGI qualify for IRS Free File. Above that, FreeTaxUSA is the value pick at $0 federal. TurboTax and H&R Block cost more but handle edge cases (RSUs, K-1s, multi-state) more smoothly.",
      slugs: [
        "best-tax-software-2026",
        "how-to-file-taxes-for-free",
        "turbotax-vs-taxact",
        "freetaxusa-review",
        "when-to-hire-a-cpa",
      ],
    },
    {
      heading: "Roth IRA and conversion strategies",
      intro:
        "The 2026 Roth IRA limit is $7,500 ($1,100 catch-up at 50+) per IR-2025-111. High earners can use backdoor Roth (after-tax to Roth) and mega backdoor Roth (after-tax 401(k) to Roth) to contribute well beyond the standard limit.",
      slugs: [
        "roth-ira-contribution-limits-2026",
        "backdoor-roth-ira-guide",
        "mega-backdoor-roth-guide",
        "roth-conversion-ladder",
        "roth-ira-5-year-rules",
      ],
    },
    {
      heading: "HSA, FSA, and 529 plans",
      intro:
        "The HSA is the only triple-tax-advantaged account: deductible going in, tax-free growth, tax-free withdrawal for medical. 2026 limits: $4,400 self / $8,750 family / +$1,000 catch-up at 55+ (Rev. Proc. 2025-19). FSAs forfeit unused balances; HSAs roll over forever.",
      slugs: [
        "hsa-vs-fsa",
        "hsa-as-retirement-account",
        "best-hsa-providers",
        "fsa-explainer",
        "529-plan-guide",
      ],
    },
    {
      heading: "Retirement tax rules and SECURE 2.0",
      intro:
        "SECURE 2.0 raised the RMD age to 73 (75 starting 2033) and created a super catch-up for ages 60–63 of $11,250 in 2026. Up to 85% of Social Security can be taxable depending on combined income.",
      slugs: [
        "ira-rmd-rules",
        "secure-2-0-changes-2026",
        "taxes-on-social-security-benefits",
      ],
    },
    {
      heading: "Tax-loss harvesting",
      intro:
        "Sell losing positions to offset realized gains, then use up to $3,000/year against ordinary income (carryover thereafter). Watch the 30-day wash-sale rule — buying back the same or substantially identical security disallows the loss.",
      slugs: [
        "tax-loss-harvesting-guide",
        "tax-loss-harvesting-wash-sale-rule",
      ],
    },
  ],
  faq: [
    {
      q: "What are the 2026 federal tax brackets?",
      a: "Seven brackets ranging from 10% to 37%, with bracket thresholds adjusted annually for inflation under Rev. Proc. 2025-32 (IR-2025-103). Standard deduction is $16,100 single / $32,200 MFJ / $24,150 HoH.",
    },
    {
      q: "What's the 2026 401(k) contribution limit?",
      a: "$24,500 elective deferral, $8,000 catch-up at 50+, and a SECURE 2.0 super catch-up of $11,250 for ages 60–63 (IR-2025-111). The IRA limit is separately $7,500 / $1,100 catch-up.",
    },
    {
      q: "Is the HSA really triple-tax-advantaged?",
      a: "Yes — contributions are pre-tax (or above-the-line deductible), growth is tax-free, and withdrawals for qualified medical expenses are tax-free at any age. After 65 you can withdraw for any reason at ordinary-income rates, like a Traditional IRA.",
    },
    {
      q: "Do I need to file taxes if I made under the standard deduction?",
      a: "Often no, but you should file anyway if any income tax was withheld (to get the refund), if you qualify for refundable credits like EITC, or if you had self-employment income above $400.",
    },
    {
      q: "What's the difference between FSA and HSA?",
      a: "An FSA is use-it-or-lose-it (or roll over $660 max in 2026) and tied to your employer. An HSA rolls over forever, can be invested, and follows you between jobs — but requires a high-deductible health plan to contribute.",
    },
    {
      q: "When should I hire a CPA instead of using software?",
      a: "When you have RSUs vesting, K-1s from a partnership or LLC, rental property income, multi-state filings, a Roth conversion, or you sold a business. Software handles W-2 + 1099 + standard deduction filings well.",
    },
  ],
};

export const metadata: Metadata = {
  title: `${config.h1} | FinBrief`,
  description: config.metaDescription,
  alternates: { canonical: `/learn/${config.pillarSlug}` },
  openGraph: {
    title: config.h1,
    description: config.metaDescription,
    type: "website",
    url: `/learn/${config.pillarSlug}`,
  },
};

export default function SaveTaxHubPage() {
  return <PillarHub config={config} />;
}
