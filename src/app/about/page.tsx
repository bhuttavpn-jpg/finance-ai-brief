import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAuthor } from "@/lib/authors";

const founder = getAuthor("jahanzeb-nawaz");

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `${founder.name}, founder of ${siteConfig.name}, on why the site exists and how it covers personal finance.`,
};

export default function AboutPage() {
  return (
    <article className="container-prose py-16">
      <h1 className="text-3xl font-medium text-brand-700">About {siteConfig.name}</h1>

      {/* Founder card */}
      <div className="mt-8 flex flex-col items-start gap-5 rounded-lg border border-brand-100 bg-brand-50/40 p-6 sm:flex-row sm:items-center">
        <Image
          src={founder.photoUrl}
          alt={`${founder.name} — ${founder.title}`}
          width={96}
          height={96}
          className="h-24 w-24 flex-shrink-0 rounded-full border border-brand-100 object-cover"
        />
        <div>
          <p className="text-xs uppercase tracking-wide text-brand-600">{founder.title}</p>
          <p className="mt-1 text-xl font-medium text-brand-700">
            <Link href={founder.url} className="hover:underline">
              {founder.name}
            </Link>
          </p>
          <p className="mt-1 text-sm text-ink-muted">{founder.shortBio}</p>
        </div>
      </div>

      <p className="mt-8 text-lg text-ink-muted">
        I started {siteConfig.name} because I was tired of financial content that was either
        written for Wall Street insiders or dumbed down to the point of being useless.
      </p>
      <p className="mt-4">
        Most personal finance advice online falls into one of two traps — it&apos;s either too
        complex for anyone without a finance degree to follow, or it&apos;s so simplified it
        leaves you no better off than before you clicked. {siteConfig.name} exists to fix that.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">My background</h2>
      <p className="mt-3">
        I&apos;ve spent years studying financial markets, investment strategy, and personal
        finance — not from a classroom, but from the kind of deep independent research that
        comes from genuinely wanting to understand how money works.
      </p>
      <p className="mt-3">
        I&apos;m a self-directed investor and have navigated multiple market cycles firsthand —
        including the 2020 COVID crash and the 2022 inflation surge — making real decisions
        with real money. That experience shapes everything I write.
      </p>
      <p className="mt-3">
        I founded {siteConfig.name} to build the resource I always wished existed: honest,
        research-backed financial content written for people who are serious about their
        financial future but don&apos;t have a finance degree on their wall.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Why trust {siteConfig.name}</h2>
      <p className="mt-3">Every piece of content on {siteConfig.name} is:</p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
        <li>Thoroughly researched using primary sources</li>
        <li>
          Cross-referenced against official data from institutions like the Federal Reserve,
          SEC, ECB, and IMF
        </li>
        <li>Written with one goal: to leave you more informed and more capable than before you arrived</li>
        <li>
          Reviewed by the{" "}
          <Link href="/editorial-standards" className="text-brand-600 hover:underline">
            {siteConfig.name} Editorial Team
          </Link>{" "}
          before publishing
        </li>
      </ul>
      <p className="mt-3">
        I don&apos;t take advertiser direction on editorial content. What you read here is what
        I genuinely believe is accurate, useful, and worth your time.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">What I cover</h2>
      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 pl-6 text-ink sm:grid-cols-2 list-disc">
        {founder.expertise.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-medium text-brand-700">My philosophy</h2>
      <p className="mt-3">
        Financial freedom isn&apos;t reserved for people born into wealth or those with finance
        degrees. The information exists. Most people just need it presented clearly, honestly,
        and without an agenda.
      </p>
      <p className="mt-3">That&apos;s what {siteConfig.name} is for.</p>
      <p className="mt-6 text-sm text-ink-muted">
        — {founder.name}, {founder.title}
      </p>

      <h2 id="disclosure" className="mt-12 text-xl font-medium text-brand-700">Affiliate disclosure</h2>
      <p className="mt-3">
        Some of the financial products we recommend pay us a commission when you open an
        account through our link. That revenue funds our independent research. It does not
        influence which products we rank highest. We publish our methodology for every
        roundup so you can see exactly how we score products, and we routinely rank
        lower-paying partners above higher-paying ones when the product is the better fit.
      </p>
      <p className="mt-3">
        Affiliate links on our site are routed through{" "}
        <code className="rounded bg-brand-50 px-1 py-0.5 text-xs">/go/[partner]</code> so we
        can log clicks and confirm attribution, even if a reader&apos;s browser blocks
        third-party cookies. We never sell your personal data.
      </p>

      <h2 id="privacy" className="mt-12 text-xl font-medium text-brand-700">Privacy</h2>
      <p className="mt-3">
        We collect the minimum analytics needed to improve the site — page views, anonymous
        click events, and aggregate device information. We do not sell or share personal
        data with third parties for advertising purposes.
      </p>

      <h2 id="terms" className="mt-12 text-xl font-medium text-brand-700">Terms of use</h2>
      <p className="mt-3">
        Content on {siteConfig.name} is for educational purposes only. We are not a
        registered investment advisor, broker-dealer, tax preparer, or insurance agency.
        Nothing on this site is a personal recommendation. Always verify information and
        consult a qualified professional before making financial decisions.
      </p>
    </article>
  );
}
