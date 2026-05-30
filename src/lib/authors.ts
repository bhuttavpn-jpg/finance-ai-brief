// Author registry. Add a new entry here and reference by slug.
// Every author page is generated automatically at /author/<slug>.

export type Author = {
  slug: string;
  name: string;
  title: string;
  shortBio: string;        // One-line bio used in the inline author box.
  longBio: string[];       // Paragraphs for the /author/<slug> page.
  expertise: readonly string[];
  photoUrl: string;        // Path under /public.
  url: string;             // Absolute /author/<slug> path.
};

export const authors = {
  "jahanzeb-nawaz": {
    slug: "jahanzeb-nawaz",
    name: "Jahanzeb Nawaz",
    title: "Founder, FinBrief",
    shortBio:
      "Founder of FinBrief. Self-directed investor focused on making financial topics genuinely useful for everyday readers.",
    longBio: [
      "I started FinBrief because I was tired of financial content that was either written for Wall Street insiders or dumbed down to the point of being useless.",
      "Most personal finance advice online falls into one of two traps — it's either too complex for anyone without a finance degree to follow, or it's so simplified it leaves you no better off than before you clicked. FinBrief exists to fix that.",
      "I've spent years studying financial markets, investment strategy, and personal finance — not from a classroom, but from the kind of deep independent research that comes from genuinely wanting to understand how money works.",
      "I'm a self-directed investor and have navigated multiple market cycles firsthand — including the 2020 COVID crash and the 2022 inflation surge — making real decisions with real money. That experience shapes everything I write.",
      "I founded FinBrief to build the resource I always wished existed: honest, research-backed financial content written for people who are serious about their financial future but don't have a finance degree on their wall.",
    ],
    expertise: [
      "Personal Finance & Budgeting",
      "Stock Market Investing",
      "ETF & Index Fund Strategy",
      "Retirement Planning",
      "Macroeconomics & Market Trends",
      "Financial Independence",
      "Tax Strategy Basics",
      "Small Business Finance",
    ] as const,
    photoUrl: "/authors/jahanzeb-nawaz.jpg",
    url: "/author/jahanzeb-nawaz",
  },
} as const satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;

export const DEFAULT_AUTHOR: AuthorSlug = "jahanzeb-nawaz";

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find((a) => a.name === name);
}

export function getAuthor(slug: AuthorSlug): Author {
  return authors[slug];
}

// Reviewer is an organization (the editorial team), not a person.
export const REVIEWER = {
  name: "the FinBrief Editorial Team",
  displayName: "FinBrief Editorial Team",
  url: "/editorial-standards",
} as const;
