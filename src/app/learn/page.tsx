import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Learn",
  description: "Plain-language guides to budgeting, investing, taxes, credit, and insurance.",
};

export default async function LearnIndex({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string }>;
}) {
  const { pillar } = await searchParams;

  // Query param is a pillar slug (e.g. "save-tax"); articles store the display
  // label (e.g. "Save tax"). Resolve the slug to its label before filtering.
  const activePillar = siteConfig.pillars.find((p) => p.slug === pillar) ?? null;
  const articles = activePillar
    ? siteConfig.articles.filter((a) => a.pillar === activePillar.label)
    : siteConfig.articles;

  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Learn</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Guides without the jargon</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Every guide is written by a credentialed financial writer and reviewed by a CFP,
        CPA, or licensed insurance professional.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filter guides by category">
        <FilterChip href="/learn" label="All" active={activePillar === null} />
        {siteConfig.pillars.map((p) => (
          <FilterChip
            key={p.slug}
            href={`/learn?pillar=${p.slug}`}
            label={p.label}
            active={activePillar?.slug === p.slug}
          />
        ))}
      </nav>

      {articles.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/learn/${a.slug}`}
              className="card block no-underline transition hover:border-brand-600"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-brand-600">{a.pillar}</p>
              <p className="mt-2 text-xl font-medium text-brand-700">{a.title}</p>
              <p className="mt-4 text-sm font-medium text-brand-700">Read the guide →</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-ink-muted">
          No guides in this category yet — <Link href="/learn" className="text-brand-700 underline">view all guides</Link>.
        </p>
      )}

      <p className="mt-12 text-sm text-ink-muted">
        More guides shipping weekly — see our 26-week editorial calendar in the strategy doc.
      </p>
    </div>
  );
}

function FilterChip({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium uppercase tracking-wide no-underline transition ${
        active
          ? "border-brand-600 bg-brand-600 text-white"
          : "border-brand-200 text-brand-700 hover:border-brand-600"
      }`}
    >
      {label}
    </Link>
  );
}
