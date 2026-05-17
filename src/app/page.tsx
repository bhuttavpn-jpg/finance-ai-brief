import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const PILLAR_BLURBS: Record<string, { headline: string; copy: string }> = {
  Budget: {
    headline: "See where your money goes",
    copy: "Use the 50/30/20 calculator to right-size your spending and build the savings habit.",
  },
  Invest: {
    headline: "Start investing without the jargon",
    copy: "Find the right brokerage, max your 401(k) match, and pick between a Roth or Traditional IRA.",
  },
  "Save tax": {
    headline: "Keep more of what you earn",
    copy: "Understand your bracket, claim the deductions you're owed, and use tax-advantaged accounts.",
  },
  "Borrow smart": {
    headline: "Use credit as a tool, not a trap",
    copy: "Compare cards, improve your score, and know when to refinance.",
  },
  Protect: {
    headline: "Right-size your coverage",
    copy: "Calculate the life insurance you actually need and skip the upsells.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="container-wide pb-12 pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
            Plain-language personal finance
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight text-brand-700 sm:text-5xl">
            Budget what you earn. Invest what&apos;s left. Save on taxes.
          </h1>
          <p className="mt-5 text-lg text-ink-muted">
            Tools that give you a personalized answer in a minute, paired with research that
            actually fits your situation. No upsells. No condescension.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/tools" className="btn-primary">Open the tools</Link>
            <Link href="/learn" className="btn-secondary">Read the guides</Link>
          </div>
        </div>
      </section>

      <section className="container-wide pb-20">
        <h2 className="text-2xl font-medium text-brand-700">Pick a topic</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.pillars.map((p) => {
            const blurb = PILLAR_BLURBS[p.label];
            return (
              <Link
                key={p.slug}
                href={`/learn?pillar=${p.slug}`}
                className="card group block no-underline transition hover:border-brand-600"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                  {p.label}
                </p>
                <p className="mt-2 text-lg font-medium text-brand-700">{blurb?.headline}</p>
                <p className="mt-2 text-sm text-ink-muted">{blurb?.copy}</p>
                <p className="mt-4 text-sm font-medium text-brand-700 group-hover:underline">
                  Explore →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-wide pb-24">
        <h2 className="text-2xl font-medium text-brand-700">Free tools</h2>
        <p className="mt-2 text-ink-muted">
          Get a personalized answer in under a minute.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.tools.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="card block no-underline transition hover:border-brand-600"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
                {t.pillar}
              </p>
              <p className="mt-2 text-lg font-medium text-brand-700">{t.label}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
