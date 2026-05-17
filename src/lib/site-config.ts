export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Finbrief",
  shortName: "FB",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Plain-language guidance, tools, and personalized recommendations to help you budget, invest, and save smarter.",
  tagline: "Budget. Invest. Save smarter.",
  twitter: "@finbrief",
  pillars: [
    { slug: "budget", label: "Budget" },
    { slug: "invest", label: "Invest" },
    { slug: "save-tax", label: "Save tax" },
    { slug: "borrow-smart", label: "Borrow smart" },
    { slug: "protect", label: "Protect" },
  ] as const,
  tools: [
    { slug: "budget-50-30-20", label: "50/30/20 budget", pillar: "Budget" },
    { slug: "401k-match", label: "401(k) match", pillar: "Invest" },
    { slug: "tax-bracket", label: "Marginal tax rate", pillar: "Save tax" },
    { slug: "roth-vs-traditional", label: "Roth vs. Traditional IRA", pillar: "Invest" },
    { slug: "life-insurance", label: "Life insurance need", pillar: "Protect" },
  ] as const,
  articles: [
    {
      slug: "how-to-budget-50-30-20",
      title: "How to Budget Using the 50/30/20 Rule",
      pillar: "Budget",
      tool: "budget-50-30-20",
      keyword: "50/30/20 budget",
      publishedAt: "2026-05-17",
      updatedAt: "2026-05-17",
    },
    {
      slug: "roth-ira-vs-traditional-ira",
      title: "Roth IRA vs. Traditional IRA: Which Should You Choose?",
      pillar: "Invest",
      tool: "roth-vs-traditional",
      keyword: "roth ira vs traditional ira",
      publishedAt: "2026-05-17",
      updatedAt: "2026-05-17",
    },
  ] as const,
};
