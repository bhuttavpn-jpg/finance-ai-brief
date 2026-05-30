import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Editorial standards",
  description: `How ${siteConfig.name} researches, writes, reviews, and updates its financial content.`,
};

export default function EditorialStandardsPage() {
  return (
    <article className="container-prose py-16">
      <h1 className="text-3xl font-medium text-brand-700">Editorial standards</h1>
      <p className="mt-4 text-lg text-ink-muted">
        {siteConfig.name} publishes financial content that people use to make real decisions
        with real money. The standards on this page describe how we research, write, review,
        and update every article so you can judge whether to trust what we say.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Our commitment to accuracy</h2>
      <p className="mt-3">
        Financial information that&apos;s out of date or wrong can cost readers money. Every
        article on {siteConfig.name} is:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
        <li>
          Built on <strong>primary sources</strong> — IRS publications, SEC filings, FDIC data,
          Federal Reserve releases, ECB statistics, and official company disclosures. We do
          not rely on aggregator blogs as a source of fact.
        </li>
        <li>
          <strong>Dated.</strong> Every article shows a &ldquo;Last updated&rdquo; date in the
          header. Tax, contribution, and rate figures cite the specific IRS news release or
          revenue procedure they come from.
        </li>
        <li>
          <strong>Honest about uncertainty.</strong> Where a figure is a projection, an
          estimate, or has not yet been officially released, we say so in the article.
        </li>
      </ul>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Our review process</h2>
      <p className="mt-3">
        Before an article goes live, it goes through three checks performed by the
        {" "}{siteConfig.name} Editorial Team:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-ink">
        <li>
          <strong>Source check.</strong> Every number, date, and statutory rule in the article
          is matched against a primary source linked from our internal source register.
        </li>
        <li>
          <strong>Clarity check.</strong> Does the article actually answer the question a
          reader is asking? Are jargon terms defined the first time they appear? Could a
          reader without a finance background follow the recommendation?
        </li>
        <li>
          <strong>Affiliate-independence check.</strong> If the article recommends a product,
          we confirm the ranking reflects the product&apos;s actual fit for the use case — not
          the size of the affiliate payout. We routinely rank lower-paying partners above
          higher-paying ones when the product is the better fit.
        </li>
      </ol>

      <h2 className="mt-12 text-xl font-medium text-brand-700">How we fact-check</h2>
      <p className="mt-3">
        Our fact-checking process is built on a small number of strict rules:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
        <li>
          <strong>Two-source rule for current rates.</strong> APYs, credit-card sign-up bonuses,
          and similar quickly-changing figures are verified against the institution&apos;s own
          website plus one third-party tracker before we publish or refresh.
        </li>
        <li>
          <strong>IRS-direct for tax figures.</strong> Contribution limits, brackets, standard
          deductions, and phase-outs are quoted directly from the relevant IRS news release or
          revenue procedure. The release number appears in the article.
        </li>
        <li>
          <strong>SEC and FINRA filings for investment products.</strong> Fund expense ratios,
          composition, and historical returns are pulled from the fund&apos;s own prospectus or
          annual report, not third-party scrapers.
        </li>
        <li>
          <strong>No anonymous claims.</strong> We do not publish &ldquo;experts say&rdquo; or
          &ldquo;studies show&rdquo; without a linked source you can verify yourself.
        </li>
      </ul>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Update cadence</h2>
      <p className="mt-3">
        Different content has different freshness needs. Our refresh schedule:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
        <li><strong>HYSA roundups</strong> — monthly</li>
        <li><strong>Credit card terms and bonuses</strong> — monthly</li>
        <li><strong>Brokerage and robo-advisor reviews</strong> — quarterly</li>
        <li><strong>Tax-year content</strong> — annually after the IRS publishes inflation adjustments (typically October–November)</li>
        <li><strong>Insurance and evergreen explainers</strong> — at least once a year</li>
      </ul>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Corrections policy</h2>
      <p className="mt-3">
        If we publish something inaccurate, we fix it, update the &ldquo;Last updated&rdquo;
        date, and — for material errors that could affect a reader&apos;s decision — add a
        visible correction note at the top of the article describing what was wrong and when
        it was fixed.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Editorial independence</h2>
      <p className="mt-3">
        {siteConfig.name} earns affiliate commissions when readers open accounts or apply for
        products through links on the site. We disclose that on every monetized page, and the
        full disclosure is in our{" "}
        <Link href="/about#disclosure" className="text-brand-600 hover:underline">
          affiliate disclosure
        </Link>
        . Editorial decisions — what we cover, how we rank products, what we recommend — are
        made independently of those relationships.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Contact</h2>
      <p className="mt-3">
        Spot an error, have a source we should be citing, or want to flag content that needs
        an update? Reach the editorial team at{" "}
        <a href="mailto:editorial@finbrief.space" className="text-brand-600 hover:underline">
          editorial@finbrief.space
        </a>
        . We read every message and respond within five business days.
      </p>
    </article>
  );
}
