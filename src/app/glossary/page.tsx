import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { glossaryTerms, groupByLetter, termSlug } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Personal finance glossary: 45 essential terms",
  description:
    "Plain-language definitions of the personal-finance terms that matter — 401(k), HSA, APR, FIRE, backdoor Roth, and more.",
  alternates: { canonical: `${siteConfig.url}/glossary` },
};

type ArticleEntry = (typeof siteConfig.articles)[number];
const articleBySlug = new Map<string, ArticleEntry>(
  siteConfig.articles.map((a) => [a.slug, a]),
);

function definedTermSetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Finbrief personal finance glossary",
    url: `${siteConfig.url}/glossary`,
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${siteConfig.url}/glossary#${termSlug(t.term)}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${siteConfig.url}/glossary`,
    })),
  };
}

export default function Page() {
  const sections = groupByLetter();

  return (
    <div className="container-wide py-16">
      <JsonLd data={definedTermSetJsonLd()} />
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Reference</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Personal finance glossary</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Plain-language definitions of the money terms that come up most often, with links to
        the cornerstone articles that explain each one in depth.
      </p>

      <nav className="mt-8 flex flex-wrap gap-1.5" aria-label="Jump to letter">
        {sections.map((s) => (
          <a
            key={s.letter}
            href={`#letter-${s.letter}`}
            className="inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-md border border-brand-200 bg-white px-2 text-sm font-medium text-brand-700 hover:border-brand-600 hover:bg-brand-50"
          >
            {s.letter}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {sections.map((s) => (
          <section key={s.letter} id={`letter-${s.letter}`} className="scroll-mt-20">
            <h2 className="text-2xl font-medium text-brand-700">{s.letter}</h2>
            <hr className="my-4 border-brand-100" />
            <dl className="space-y-7">
              {s.terms.map((t) => {
                const slug = termSlug(t.term);
                return (
                  <div key={t.term} id={slug} className="scroll-mt-20">
                    <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-lg font-medium text-brand-700">{t.term}</span>
                      {t.short && (
                        <span className="text-sm text-ink-muted">({t.short})</span>
                      )}
                      <span className="text-xs uppercase tracking-wide text-brand-600">
                        {t.pillar}
                      </span>
                    </dt>
                    <dd className="mt-2 max-w-3xl text-ink">{t.definition}</dd>
                    {t.related && t.related.length > 0 && (
                      <p className="mt-2 text-sm text-ink-muted">
                        Read more:{" "}
                        {t.related.map((slug, i) => {
                          const article = articleBySlug.get(slug);
                          if (!article) return null;
                          return (
                            <span key={slug}>
                              {i > 0 && " · "}
                              <Link
                                href={`/learn/${slug}`}
                                className="text-brand-600 underline-offset-2 hover:underline"
                              >
                                {article.title}
                              </Link>
                            </span>
                          );
                        })}
                      </p>
                    )}
                  </div>
                );
              })}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
