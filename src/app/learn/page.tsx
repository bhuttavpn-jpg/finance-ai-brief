import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Learn",
  description: "Plain-language guides to budgeting, investing, taxes, credit, and insurance.",
};

export default function LearnIndex() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Learn</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Guides without the jargon</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Every guide is written by a credentialed financial writer and reviewed by a CFP,
        CPA, or licensed insurance professional.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {siteConfig.articles.map((a) => (
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

      <p className="mt-12 text-sm text-ink-muted">
        More guides shipping weekly — see our 26-week editorial calendar in the strategy doc.
      </p>
    </div>
  );
}
