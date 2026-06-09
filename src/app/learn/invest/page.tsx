import type { Metadata } from "next";
import { PillarHub, type PillarHubConfig } from "@/components/content/PillarHub";

const config: PillarHubConfig = {
  pillarSlug: "invest",
  pillarLabel: "Invest",
  h1: "Investing — from the first $1,000 to a retirement plan",
  lede:
    "Most people don't need a financial advisor to start investing. A low-cost index fund inside a 401(k) up to the employer match, then a Roth IRA, then a taxable brokerage account — that order beats 90% of strategies.",
  intro:
    "FinBrief's Invest pillar walks through the order of operations for U.S. investors: capture the 401(k) match, fund an IRA, decide between Roth and Traditional, pick a brokerage, and choose funds. We compare the major brokerages by real fees and features, explain retirement math without jargon, and cover FIRE strategies for readers who want to retire early.",
  toolSlug: "401k-match",
  metaDescription:
    "Investing guides for U.S. savers — how to start with $1,000, choose between Roth and Traditional IRAs, compare brokerages, and plan for retirement or FIRE. Reviewed by the FinBrief Editorial Team.",
  clusters: [
    {
      heading: "Where to start with investing",
      intro:
        "If you have a steady paycheck and a small emergency fund, you're ready. Open the right account, pick a target-date or index fund, automate contributions, then ignore the news for 30 years.",
      slugs: [
        "how-to-invest-1000-beginners",
        "how-to-invest-in-stocks",
        "best-brokerage-accounts-beginners",
        "dollar-cost-averaging-vs-lump-sum",
      ],
    },
    {
      heading: "401(k)s, IRAs, and Roth strategy",
      intro:
        "The 2026 401(k) limit is $24,500 ($8,000 catch-up at 50+). The IRA limit is $7,500 ($1,100 catch-up). Hit the employer match first, then choose between Roth and Traditional based on your current vs. expected future tax bracket.",
      slugs: [
        "401k-vs-ira-which-first",
        "how-much-to-contribute-to-401k",
        "roth-ira-vs-traditional-ira",
        "asset-allocation-by-age",
      ],
    },
    {
      heading: "Brokerage and fund comparisons",
      intro:
        "Fidelity, Schwab, and Vanguard are the gold-standard low-cost brokerages. Robinhood and Webull have niche use cases. The fund choice matters more than the brokerage — pick a broad index ETF or target-date fund.",
      slugs: [
        "fidelity-vs-schwab",
        "vanguard-vs-fidelity",
        "robinhood-review",
        "webull-review",
        "mutual-funds-vs-etfs",
        "espp-guide",
      ],
    },
    {
      heading: "Retirement planning and FIRE",
      intro:
        "The classic rule: save 25× your annual expenses to retire safely. Sequence-of-returns risk matters most in the five years before and after you stop working. Social Security claiming age is the single most underrated retirement decision.",
      slugs: [
        "how-much-do-i-need-to-retire",
        "fire-movement-guide",
        "sequence-of-returns-risk",
        "when-to-take-social-security",
        "how-to-choose-a-financial-advisor",
      ],
    },
  ],
  faq: [
    {
      q: "What should I invest in first?",
      a: "Contribute to your 401(k) up to the full employer match. That's an immediate guaranteed return of 50–100% on those dollars. Then open a Roth IRA and contribute up to the $7,500 limit (2026).",
    },
    {
      q: "Roth or Traditional IRA — which is better?",
      a: "Choose Roth if you expect to be in a higher tax bracket in retirement than you are now. Choose Traditional if you expect to be in a lower one. Most people under 35 should choose Roth.",
    },
    {
      q: "How much do I need to retire?",
      a: "A common benchmark is 25× your expected annual retirement expenses (the 4% rule). For $60,000/year of spending, that's $1.5M. The number rises if you retire before 60 because of sequence-of-returns risk.",
    },
    {
      q: "Fidelity vs. Schwab vs. Vanguard — does it matter?",
      a: "Not much for most investors. All three offer commission-free trades, zero-fee index funds, and excellent customer service. Vanguard is mutual-fund native, Fidelity has the slickest app, Schwab has the best banking integration.",
    },
    {
      q: "Should I dollar-cost average or invest a lump sum?",
      a: "Lump sum wins ~70% of the time historically because markets trend up. Dollar-cost averaging wins on regret minimization if you'd panic-sell after a 20% drop the week after investing.",
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

export default function InvestHubPage() {
  return <PillarHub config={config} />;
}
