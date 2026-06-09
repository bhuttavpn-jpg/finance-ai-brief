import type { Metadata } from "next";
import { PillarHub, type PillarHubConfig } from "@/components/content/PillarHub";

const config: PillarHubConfig = {
  pillarSlug: "borrow-smart",
  pillarLabel: "Borrow smart",
  h1: "Credit, cards, and loans — how to borrow without getting burned",
  lede:
    "A 760+ FICO score saves the average homeowner $50,000+ over a 30-year mortgage. The fastest way to get there: keep credit-card utilization under 10%, never miss a payment, and let your oldest accounts age. Everything else is detail.",
  intro:
    "FinBrief's Borrow Smart pillar covers the U.S. credit system: how scores are calculated, which cards make sense by life stage, when to refinance a mortgage, and how personal loans stack up against balance-transfer cards. We review the major cards with real reward math and flag the gotchas (annual fees, low signup-bonus thresholds, foreign transaction fees) most reviews skip.",
  toolSlug: "tax-bracket",
  metaDescription:
    "Credit, credit card, loan, and mortgage guides — how credit scores work, which cards to pick, when to refinance, and how to compare personal loans. Reviewed by the FinBrief Editorial Team.",
  clusters: [
    {
      heading: "How credit and credit scores work",
      intro:
        "Your FICO score is 35% payment history, 30% utilization, 15% age of accounts, 10% credit mix, 10% new credit. Two free score-check services (Credit Karma, your card issuer) keep you informed without dings.",
      slugs: [
        "how-credit-cards-work",
        "what-affects-your-credit-score",
        "credit-utilization-ratio",
        "how-to-check-credit-score-for-free",
        "how-to-build-credit-from-scratch",
      ],
    },
    {
      heading: "Best credit cards by life stage",
      intro:
        "First card: a secured card or student card. Building credit: a flat 2% cashback card. Optimizing rewards: pair a cashback card with a category-bonus card. Travel: a points-transfer card like Sapphire Preferred earns 30%+ more value per point.",
      slugs: [
        "best-credit-cards-for-beginners",
        "best-credit-cards-for-fair-credit",
        "best-student-credit-cards",
        "best-cashback-credit-cards-2026",
        "best-travel-credit-cards-2026",
        "best-business-credit-cards",
      ],
    },
    {
      heading: "Credit card reviews",
      intro:
        "The Sapphire Preferred and Amex Gold are the two most-recommended cards for new optimizers — different strengths (travel transfer partners vs. dining and grocery multipliers) and different fees ($95 vs. $325).",
      slugs: [
        "chase-sapphire-preferred-review",
        "amex-gold-card-review",
      ],
    },
    {
      heading: "Personal loans and debt consolidation",
      intro:
        "A personal loan at 9% beats credit-card debt at 24%. If you can qualify for a 0% APR balance-transfer card and pay it off during the promo, that beats both. Avoid loans with prepayment penalties or origination fees above 5%.",
      slugs: [
        "best-personal-loans-2026",
        "sofi-personal-loan-review",
        "personal-loan-vs-credit-card",
        "debt-consolidation-loan",
        "student-loan-refinance",
      ],
    },
    {
      heading: "Mortgages",
      intro:
        "Refinance when current rates are at least 0.75% below your existing rate AND you'll stay in the home long enough to recoup the ~$3,000–$6,000 in closing costs. A 760+ FICO unlocks the best rate tier.",
      slugs: [
        "how-to-get-a-mortgage",
        "when-to-refinance-mortgage",
      ],
    },
  ],
  faq: [
    {
      q: "What's the most important factor in my credit score?",
      a: "Payment history — 35% of your FICO score. One 30-day late payment can drop a 780 score by 80–110 points. Set every minimum payment on autopay even if you pay the full balance manually.",
    },
    {
      q: "What credit utilization is ideal?",
      a: "Under 10% across all your cards combined gets you the best score. Under 30% avoids active penalty. Pay your statement balance before the statement date if you carry a high balance and want a quick score bump.",
    },
    {
      q: "Is a 720 credit score good?",
      a: "Yes — 720 qualifies for most prime rates on cards, auto loans, and mortgages. The next jump (to 760+) typically saves another 0.125–0.25% on a mortgage rate, which is meaningful over 30 years.",
    },
    {
      q: "Should I pay off my credit card or build savings first?",
      a: "Keep a $1,000 starter emergency fund, then attack credit-card debt above ~12% APR before any further savings. Math says credit-card APR > expected market return on savings, every time.",
    },
    {
      q: "When does refinancing a mortgage make sense?",
      a: "When you can drop your rate by at least 0.75% AND you'll keep the loan long enough to recoup the closing costs (usually 3,000–6,000). Cash-out refis are a separate analysis tied to what you'll do with the cash.",
    },
    {
      q: "Personal loan or balance-transfer credit card for paying off debt?",
      a: "If your credit score qualifies for a 0% APR balance-transfer offer and you can pay the debt off during the promo window (usually 12–21 months), the card wins. Otherwise a personal loan at 9–14% beats a credit card at 22%+.",
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

export default function BorrowSmartHubPage() {
  return <PillarHub config={config} />;
}
