// Renders structured data as a script tag. Use one of the helpers below
// or pass a custom object.

import { siteConfig } from "@/lib/site-config";
import { getAuthorByName, getAuthor, DEFAULT_AUTHOR, REVIEWER } from "@/lib/authors";

// Schema.org expects ISO 8601 datetimes with a timezone. Articles store dates
// as YYYY-MM-DD; append midnight UTC so Google's parser is happy.
function toIsoDateTime(date: string): string {
  if (date.includes("T")) return date;
  return `${date}T00:00:00+00:00`;
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Google's Article rich result prefers multiple aspect ratios at >=1200px wide.
// For /learn/<slug> URLs we emit 16x9, 4x3, and 1x1 — all rendered dynamically
// by src/app/og/[slug]/[ratio]/route.tsx. For non-article URLs (or if no slug
// can be parsed) we fall back to the site-wide opengraph-image.
function articleImageUrls(url: string): string[] {
  const match = url.match(/\/learn\/([^/?#]+)/);
  if (!match) return [`${siteConfig.url}/opengraph-image`];
  const slug = match[1];
  return [
    `${siteConfig.url}/og/${slug}/16x9`,
    `${siteConfig.url}/og/${slug}/4x3`,
    `${siteConfig.url}/og/${slug}/1x1`,
  ];
}

export function articleJsonLd(args: {
  url: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  const author = getAuthorByName(args.author) ?? getAuthor(DEFAULT_AUTHOR);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": args.url },
    datePublished: toIsoDateTime(args.publishedAt),
    dateModified: toIsoDateTime(args.updatedAt),
    image: articleImageUrls(args.url),
    author: {
      "@type": "Person",
      name: author.name,
      url: `${siteConfig.url}${author.url}`,
      jobTitle: author.title,
      image: `${siteConfig.url}${author.photoUrl}`,
    },
    reviewedBy: {
      "@type": "Organization",
      name: REVIEWER.displayName,
      url: `${siteConfig.url}${REVIEWER.url}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon`,
      },
    },
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
  };
}

export function howToJsonLd(args: { name: string; steps: Array<{ name: string; text: string }> }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
