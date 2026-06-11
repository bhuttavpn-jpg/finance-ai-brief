// Auto-generated "More from <Pillar>" footer. Drops into every article
// page just before </article>. Reads siteConfig.articles, filters by
// matching pillar label, excludes the current article, and renders up
// to 3 spoke cards plus a CTA back to the pillar hub.
//
// Deterministic ordering (siteConfig array order) — no randomness, so
// static prerender stays stable across deploys.

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface Props {
  /** Pillar label exactly as it appears in siteConfig.articles[].pillar */
  pillar: string;
  /** Current article slug — excluded from the related list */
  currentSlug: string;
  /** Optional override for how many cards to show (default 3) */
  count?: number;
}

export function RelatedByPillar({ pillar, currentSlug, count = 3 }: Props) {
  const pillarEntry = siteConfig.pillars.find((p) => p.label === pillar);
  const related = siteConfig.articles
    .filter((a) => a.pillar === pillar && a.slug !== currentSlug)
    .slice(0, count);

  if (related.length === 0) return null;

  return (
    <section className="not-prose mt-14">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-medium text-brand-700">More from {pillar}</h2>
        {pillarEntry && (
          <Link
            href={`/learn/${pillarEntry.slug}`}
            className="text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            See all {pillar} guides →
          </Link>
        )}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/learn/${a.slug}`}
            className="card block no-underline transition hover:border-brand-600"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
              {a.pillar}
            </p>
            <p className="mt-2 text-base font-medium text-brand-700">{a.title}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">Read the guide →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
