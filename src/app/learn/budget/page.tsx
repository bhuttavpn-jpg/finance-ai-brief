import type { Metadata } from "next";
import { PillarHub, type PillarHubConfig } from "@/components/content/PillarHub";

const config: PillarHubConfig = {
  pillarSlug: "budget",
  pillarLabel: "Budget",
  h1: "Budgeting and saving — guides that actually fit a real paycheck",
  lede:
    "A budget is just a plan for the money you already have. The best one is the one you'll actually follow — start with the 50/30/20 split, build a small emergency fund, and aim debt at the highest-rate balance first.",
  intro:
    "FinBrief's Budget pillar covers the foundation of every money decision: where your paycheck goes, how much to set aside before investing, and how to climb out of high-interest debt without austerity. Every guide assumes a real American income, real expenses, and limited time — no spreadsheets you'll abandon in a month.",
  toolSlug: "budget-50-30-20",
  metaDescription:
    "Plain-language budgeting and savings guides — 50/30/20 rule, emergency fund targets, debt payoff order, and the best high-yield savings accounts. Reviewed by the FinBrief Editorial Team.",
  clusters: [
    {
      heading: "Budgeting methods that work in real life",
      intro:
        "Pick a method you can sustain. Most people do best with a simple percentage split (50/30/20) and one shared system when budgeting as a couple. Apps help but aren't required.",
      slugs: [
        "how-to-budget",
        "how-to-budget-50-30-20",
        "couples-budgeting-guide",
        "best-budgeting-apps-2026",
      ],
    },
    {
      heading: "Emergency fund and high-yield savings",
      intro:
        "Three to six months of essential expenses, parked in a high-yield savings account (HYSA) earning 4%+ APY. Build it before you tackle anything beyond the 401(k) match.",
      slugs: [
        "how-much-should-emergency-fund-be",
        "how-to-build-emergency-fund",
        "best-hysa-2026",
        "how-to-save-money-fast",
      ],
    },
    {
      heading: "Debt payoff strategies",
      intro:
        "High-interest debt — credit cards above 18% APR — is the highest-guaranteed-return investment you'll find. Choose snowball (smallest first) for momentum or avalanche (highest rate first) for math.",
      slugs: [
        "how-to-pay-off-debt",
        "how-to-pay-off-credit-card-debt",
        "debt-snowball-vs-avalanche",
        "how-to-stop-living-paycheck-to-paycheck",
      ],
    },
  ],
  faq: [
    {
      q: "What is the 50/30/20 budget rule in one sentence?",
      a: "Spend 50% of your take-home pay on needs (rent, groceries, transport), 30% on wants, and 20% on saving and debt payoff above any minimums.",
    },
    {
      q: "How big should my emergency fund be?",
      a: "Three months of essential expenses if you have stable W-2 income, six months if your income is variable (1099, commission, freelance) or you support dependents on one paycheck.",
    },
    {
      q: "Should I pay off debt or build savings first?",
      a: "Build a $1,000 starter emergency fund first, then attack any debt with an APR above ~8%, then finish the 3–6 month emergency fund, then invest beyond the 401(k) match.",
    },
    {
      q: "Are budgeting apps worth paying for?",
      a: "If you'll actually open the app twice a week, yes — Monarch and Copilot cost $99–$150/year and pay for themselves in caught mistakes. If you won't, a free spreadsheet beats an unused $150 app.",
    },
    {
      q: "What's the difference between needs and wants in 50/30/20?",
      a: "Needs are expenses you'd struggle to cut on 30 days' notice: rent, utilities, groceries, insurance, minimum debt payments, basic transport. Everything else — streaming, restaurants, hobbies, upgrades — is a want.",
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

export default function BudgetHubPage() {
  return <PillarHub config={config} />;
}
