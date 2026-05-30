import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { authors, type AuthorSlug } from "@/lib/authors";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const author = (authors as Record<string, (typeof authors)[AuthorSlug]>)[slug];
  if (!author) return { title: "Author not found" };
  return {
    title: `${author.name} — ${author.title}`,
    description: author.shortBio,
    alternates: { canonical: `${siteConfig.url}${author.url}` },
  };
}

export default async function AuthorPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const author = (authors as Record<string, (typeof authors)[AuthorSlug]>)[slug];
  if (!author) notFound();

  const articles = siteConfig.articles; // All articles currently authored by Jahanzeb.

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    image: `${siteConfig.url}${author.photoUrl}`,
    url: `${siteConfig.url}${author.url}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: author.expertise,
  };

  return (
    <article className="container-prose py-16">
      <JsonLd data={personJsonLd} />

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={author.photoUrl}
          alt={`${author.name} — ${author.title}`}
          width={144}
          height={144}
          className="h-32 w-32 flex-shrink-0 rounded-full border border-brand-100 object-cover sm:h-36 sm:w-36"
          priority
        />
        <div>
          <p className="text-xs uppercase tracking-wide text-brand-600">{author.title}</p>
          <h1 className="mt-1 text-3xl font-medium text-brand-700 sm:text-4xl">{author.name}</h1>
          <p className="mt-2 text-ink-muted">{author.shortBio}</p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-medium text-brand-700">Bio</h2>
        {author.longBio.map((para, i) => (
          <p key={i} className="mt-3 text-ink">
            {para}
          </p>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium text-brand-700">Areas of focus</h2>
        <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 pl-6 text-ink sm:grid-cols-2 list-disc">
          {author.expertise.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium text-brand-700">
          Articles by {author.name.split(" ")[0]}
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          {articles.length} articles across budget, invest, save tax, borrow smart, and protect.
        </p>
        <ul className="mt-5 divide-y divide-brand-100 border-y border-brand-100">
          {articles.map((a) => (
            <li key={a.slug} className="py-3">
              <Link
                href={`/learn/${a.slug}`}
                className="block hover:bg-brand-50/40 -mx-2 px-2 py-1 rounded"
              >
                <p className="text-xs uppercase tracking-wide text-brand-600">{a.pillar}</p>
                <p className="mt-0.5 text-base font-medium text-ink">{a.title}</p>
                <p className="mt-0.5 text-xs text-ink-subtle">Updated {a.updatedAt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-lg border border-brand-100 bg-brand-50/40 p-5 text-sm text-ink-muted">
        <p>
          Every article {author.name.split(" ")[0]} writes is reviewed by the{" "}
          <Link href="/editorial-standards" className="text-brand-600 hover:underline">
            {siteConfig.name} Editorial Team
          </Link>{" "}
          before publishing. See our editorial standards for how we research, fact-check, and
          update content.
        </p>
      </section>
    </article>
  );
}
