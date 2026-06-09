// Pillar hub page — the topic-cluster home for one of the 5 content pillars.
// Renders: H1 + intro, anchor tool card, cluster sections (each with linked
// spoke articles), FAQ, related-pillar cross-links, plus BreadcrumbList +
// ItemList + FAQPage JSON-LD for rich-result eligibility.
//
// One PillarHub per pillar:
//   /learn/budget, /learn/invest, /learn/save-tax, /learn/borrow-smart, /learn/protect
//
// Spoke articles are validated at render time against siteConfig.articles —
// any slug in a cluster that doesn't match a real article will surface as a
// console.warn during build (not a hard fail; we'd rather ship than break the
// build for a typo in copy).

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FAQ, type QA } from "./FAQ";
import { JsonLd, faqJsonLd } from "@/components/seo/JsonLd";

export type PillarCluster = {
  /** H2 heading for this cluster (e.g. "Where to start with investing") */
  heading: string;
  /** 1–2 sentence description shown above the spoke list */
  intro: string;
  /** Article slugs (must match siteConfig.articles[].slug) */
  slugs: string[];
};

export type PillarHubConfig = {
  /** Pillar slug used in the URL (matches siteConfig.pillars[].slug) */
  pillarSlug: string;
  /** Display label (matches siteConfig.pillars[].label and article.pillar field) */
  pillarLabel: string;
  /** H1 — usually distinct from pillarLabel for SEO */
  h1: string;
  /** First-paragraph answer: 2 sentences, plain language, no preamble */
  lede: string;
  /** Long-form intro paragraph, ~80–120 words, written for the spoke topic */
  intro: string;
  /** Anchor tool slug (matches siteConfig.tools[].slug); displayed as a CTA card */
  toolSlug: string;
  /** Cluster groupings — order matters; appears in nav and main flow */
  clusters: PillarCluster[];
  /** 4–6 FAQ items rendered with FAQPage schema */
  faq: QA[];
  /** Meta description (SEO) */
  metaDescription: string;
};

function findArticle(slug: string) {
  return siteConfig.articles.find((a) => a.slug === slug);
}

function findTool(slug: string) {
  return siteConfig.tools.find((t) => t.slug === slug);
}

export function PillarHub({ config }: { config: PillarHubConfig }) {
  const hubUrl = `${siteConfig.url}/learn/${config.pillarSlug}`;
  const tool = findTool(config.toolSlug);

  // Cross-pillar links: link to other pillar hubs from the footer.
  const otherPillars = siteConfig.pillars.filter((p) => p.slug !== config.pillarSlug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Learn", item: `${siteConfig.url}/learn` },
      { "@type": "ListItem", position: 3, name: config.pillarLabel, item: hubUrl },
    ],
  };

  // ItemList JSON-LD listing every linked spoke article — helps Google
  // understand the hub→spoke relationship explicitly.
  const allSpokes = config.clusters.flatMap((c) => c.slugs);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${config.pillarLabel} guides on FinBrief`,
    itemListElement: allSpokes
      .map((slug, i) => {
        const a = findArticle(slug);
        if (!a) return null;
        return {
          "@type": "ListItem",
          position: i + 1,
          url: `${siteConfig.url}/learn/${a.slug}`,
          name: a.title,
        };
      })
      .filter(Boolean),
  };

  return (
    <div className="container-wide py-16">
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={itemListLd} />
      <JsonLd data={faqJsonLd(config.faq)} />

      {/* Breadcrumb (visible) */}
      <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <span className="px-2">/</span>
        <Link href="/learn" className="hover:text-brand-700">Learn</Link>
        <span className="px-2">/</span>
        <span className="text-brand-700">{config.pillarLabel}</span>
      </nav>

      {/* Header */}
      <header className="mt-6 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
          {config.pillarLabel} pillar
        </p>
        <h1 className="mt-2 text-4xl font-medium text-brand-700 sm:text-5xl">{config.h1}</h1>
        <p className="mt-4 text-lg text-ink">{config.lede}</p>
        <p className="mt-4 text-base text-ink-muted">{config.intro}</p>
      </header>

      {/* Anchor tool card */}
      {tool && (
        <Link
          href={`/tools/${tool.slug}`}
          className="card mt-10 block max-w-3xl no-underline transition hover:border-brand-600"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Free tool</p>
          <p className="mt-2 text-xl font-medium text-brand-700">{tool.label}</p>
          <p className="mt-3 text-sm text-ink-muted">
            Get a personalized answer in under a minute. No signup required.
          </p>
          <p className="mt-4 text-sm font-medium text-brand-700">Open the calculator →</p>
        </Link>
      )}

      {/* In-page nav for clusters */}
      <nav aria-label="Topics on this page" className="mt-12 flex flex-wrap gap-2">
        {config.clusters.map((c, i) => (
          <a
            key={i}
            href={`#cluster-${i}`}
            className="rounded-full border border-brand-200 px-4 py-1.5 text-sm font-medium text-brand-700 no-underline transition hover:border-brand-600"
          >
            {c.heading}
          </a>
        ))}
      </nav>

      <hr className="my-10 border-brand-100" />

      {/* Cluster sections */}
      {config.clusters.map((cluster, i) => (
        <section key={i} id={`cluster-${i}`} className="mt-14 scroll-mt-24">
          <h2 className="text-2xl font-medium text-brand-700">{cluster.heading}</h2>
          <p className="mt-3 max-w-3xl text-base text-ink">{cluster.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cluster.slugs.map((slug) => {
              const a = findArticle(slug);
              if (!a) {
                // Don't break the build for a typo — emit nothing.
                if (process.env.NODE_ENV !== "production") {
                  // eslint-disable-next-line no-console
                  console.warn(`PillarHub(${config.pillarSlug}): unknown article slug "${slug}"`);
                }
                return null;
              }
              return (
                <Link
                  key={slug}
                  href={`/learn/${a.slug}`}
                  className="card block no-underline transition hover:border-brand-600"
                >
                  <p className="text-base font-medium text-brand-700">{a.title}</p>
                  <p className="mt-3 text-sm font-medium text-brand-700">Read the guide →</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <hr className="my-14 border-brand-100" />

      {/* FAQ */}
      <FAQ items={config.faq} />

      <hr className="my-14 border-brand-100" />

      {/* Cross-pillar nav — densifies internal linking */}
      <section>
        <h2 className="text-2xl font-medium text-brand-700">Explore the other pillars</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherPillars.map((p) => (
            <Link
              key={p.slug}
              href={`/learn/${p.slug}`}
              className="card block no-underline transition hover:border-brand-600"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Pillar</p>
              <p className="mt-2 text-lg font-medium text-brand-700">{p.label}</p>
              <p className="mt-3 text-sm font-medium text-brand-700">See the hub →</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-ink-muted">
        New guides ship weekly. Every page is reviewed by the FinBrief Editorial Team.
      </p>
    </div>
  );
}
