import type { Metadata } from "next";
import { PillarHub, type PillarHubConfig } from "@/components/content/PillarHub";

const config: PillarHubConfig = {
  pillarSlug: "protect",
  pillarLabel: "Protect",
  h1: "Insurance and estate planning — protect what you've built",
  lede:
    "Insurance is the part of personal finance most people overpay for and underbuy. Term life and disability cover the biggest catastrophic risks. Auto and renters are required. Umbrella, identity, and long-term care fill the gaps once your net worth crosses six figures.",
  intro:
    "FinBrief's Protect pillar covers the U.S. insurance and estate-planning decisions every adult eventually faces: how much life insurance you actually need, when term beats whole life, what health-plan tier (HMO/PPO/HDHP) fits your situation, and the auto, renters, and umbrella coverage levels that actually map to your risk. Plus the basics of wills, beneficiaries, and identity-theft protection that close out a real financial plan.",
  toolSlug: "life-insurance",
  metaDescription:
    "U.S. insurance and estate-planning guides — life, health, auto, renters, disability, umbrella, long-term care, identity theft. DIME-formula life insurance calculator included.",
  clusters: [
    {
      heading: "Life insurance",
      intro:
        "Most working-age adults with dependents need term life insurance — never whole life. The DIME formula (Debt + Income × years + Mortgage + Education) gets you to a reasonable face value in under 5 minutes.",
      slugs: [
        "best-life-insurance-companies-2026",
        "best-term-life-insurance-young-professionals",
        "term-vs-whole-life-insurance",
        "how-much-life-insurance-do-i-need",
      ],
    },
    {
      heading: "Health insurance and Medicare",
      intro:
        "HMO vs. PPO vs. HDHP depends on whether you value network flexibility, low premiums, or HSA eligibility. Medicare Parts A and B start at 65; D (drug) and supplements are critical add-ons. Penalty for late enrollment is permanent.",
      slugs: [
        "hmo-vs-ppo-vs-hdhp",
        "medicare-basics-2026",
      ],
    },
    {
      heading: "Auto and home insurance",
      intro:
        "State minimums almost never cover a serious accident — carry 100/300/100 liability or higher. Renters insurance is the cheapest insurance you'll ever buy ($15–$25/month) and covers theft, fire, and liability.",
      slugs: [
        "best-car-insurance-companies-2026",
        "how-much-car-insurance-do-i-need",
        "how-to-lower-car-insurance",
        "renters-vs-homeowners-insurance",
      ],
    },
    {
      heading: "Disability, umbrella, and long-term care",
      intro:
        "Disability insurance protects your single biggest asset — your future earning power. Umbrella adds a $1M+ liability layer for cheap once you have assets to protect. Long-term care decisions get more expensive every year you delay.",
      slugs: [
        "disability-insurance-guide",
        "umbrella-insurance-guide",
        "long-term-care-insurance",
      ],
    },
    {
      heading: "Estate planning and identity protection",
      intro:
        "Every adult needs a will, durable power of attorney, healthcare proxy, and named beneficiaries on every retirement and life-insurance account. Identity theft is now the most common financial crime in the U.S. — freeze your credit at all three bureaus.",
      slugs: [
        "estate-planning-basics",
        "identity-theft-protection",
      ],
    },
  ],
  faq: [
    {
      q: "How much life insurance do I need?",
      a: "Use the DIME formula: Debt + (Income × years until kids are independent) + Mortgage + Education costs. A 35-year-old with $400K mortgage, $80K income, and 2 young kids typically needs $1–1.5M of term coverage.",
    },
    {
      q: "Is term or whole life insurance better?",
      a: "Term, for almost everyone. Whole life costs 8–12× more per dollar of coverage, and the 'investment' component returns 1–4% per year — far worse than a Roth IRA invested in index funds. Whole life makes sense only for specific estate-tax cases above $13M net worth.",
    },
    {
      q: "Do I need life insurance if I'm single with no kids?",
      a: "Usually no. Exceptions: you have co-signed debt (parents on student loans), you support aging parents financially, or you want to lock in low rates before a health event makes you uninsurable later.",
    },
    {
      q: "HMO, PPO, or HDHP — which should I pick?",
      a: "HDHP if you're healthy, want HSA access, and can afford a higher deductible. PPO if you see specialists or want out-of-network flexibility. HMO if premium savings matter most and you're fine with in-network only.",
    },
    {
      q: "When should I get umbrella insurance?",
      a: "When your net worth exceeds your auto + home liability limits, typically $300K–$500K. A $1M umbrella policy runs $200–$400/year and covers what your auto and home liability won't.",
    },
    {
      q: "Do renters need insurance?",
      a: "Yes — and many landlords require it. Renters insurance covers your stuff (theft, fire, water damage), liability if a guest is injured, and additional living expenses if you're displaced. Costs $15–$25/month for $30K of coverage.",
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

export default function ProtectHubPage() {
  return <PillarHub config={config} />;
}
