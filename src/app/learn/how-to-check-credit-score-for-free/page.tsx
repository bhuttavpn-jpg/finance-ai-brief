import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-check-credit-score-for-free";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to check your credit score for free (6 legitimate ways)";
const description =
  "You never need to pay to see your credit score. Credit Karma (TransUnion + Equifax VantageScore), Experian (Experian FICO), Discover Credit Scorecard (FICO 8, no Discover card needed), and AnnualCreditReport.com (the federally mandated source) are all free. Here's what each shows, what the limitations are, and how to read your report.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is it true I can check my credit for free?",
    a: "Yes — federal law (the FCRA, updated in 2003 and again post-COVID) guarantees you free weekly access to all three bureau reports at AnnualCreditReport.com. Several third-party services (Credit Karma, Experian, Discover Credit Scorecard) also offer free scores and monitoring. You should never pay for credit monitoring as a standalone service.",
  },
  {
    q: "Why do my scores look different on different sites?",
    a: "Because they're different scores from different bureaus using different models. Credit Karma shows VantageScore from TransUnion and Equifax. Experian shows FICO 8 from Experian. Your mortgage lender will pull FICO 2/4/5 (different generations). Scores from different sources can vary by 20–40 points and still all be 'correct.'",
  },
  {
    q: "Does checking my own credit hurt my score?",
    a: "No — checking your own credit is a 'soft pull' and never affects your score. Only 'hard pulls' from lenders during applications affect your score (typically 5–10 points). You can check your own credit weekly without any impact.",
  },
  {
    q: "What's the difference between a credit score and a credit report?",
    a: "The credit report is the underlying data — your accounts, balances, payment history, public records, inquiries. The score is a calculated number (FICO, VantageScore, etc.) summarizing that data. Different scoring models produce different numbers from the same report. Both matter — the score is the headline, the report is the diagnosis.",
  },
  {
    q: "How often should I check?",
    a: "Score: monthly is plenty. Report: at least once per year (or before any major application — mortgage, auto loan). Once per bureau per year used to be the limit; since the COVID-era policy change, you can pull weekly from all three bureaus at AnnualCreditReport.com.",
  },
  {
    q: "What if I find an error on my credit report?",
    a: "Dispute it directly with the bureau (Equifax, Experian, or TransUnion) — by law they must investigate within 30 days. Same dispute can be filed simultaneously with all three bureaus and with the creditor that reported the item. Errors are common; ~25% of consumer reports have at least one mistake.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          url,
          title,
          description,
          publishedAt: PUBLISHED,
          updatedAt: PUBLISHED,
          author: "Jahanzeb Nawaz",
        })}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Six legitimate free sources. The paid 'credit monitoring' services are selling something you can already get for $0."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>You never need to pay to see your credit score or report.</strong> Federal law
            mandates free access to your full credit reports from all three bureaus weekly, and
            multiple legitimate services provide free scores from FICO and VantageScore. The paid
            "credit monitoring" services are mostly upselling features you can get free elsewhere.
          </p>

          <p>
            Here's where to look, what each source shows, and how to read the data.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The six free sources at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Source</th>
                  <th className="py-3 pr-4">Score type</th>
                  <th className="py-3 pr-4">Bureaus</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Credit Karma</td><td className="py-3 pr-4">VantageScore 3.0</td><td className="py-3 pr-4">TransUnion + Equifax</td><td className="py-3 pr-4">Day-to-day monitoring</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Experian (free account)</td><td className="py-3 pr-4">FICO 8</td><td className="py-3 pr-4">Experian only</td><td className="py-3 pr-4">Real FICO from Experian</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Discover Credit Scorecard</td><td className="py-3 pr-4">FICO 8</td><td className="py-3 pr-4">Experian</td><td className="py-3 pr-4">Real FICO — no Discover card needed</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Your card issuer</td><td className="py-3 pr-4">FICO 8 or VantageScore</td><td className="py-3 pr-4">Varies</td><td className="py-3 pr-4">Already have access</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">AnnualCreditReport.com</td><td className="py-3 pr-4">No score — full reports</td><td className="py-3 pr-4">All three</td><td className="py-3 pr-4">Annual deep dive, error checking</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">myFICO Free</td><td className="py-3 pr-4">FICO 8</td><td className="py-3 pr-4">Experian</td><td className="py-3 pr-4">Direct from FICO source</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>1. Credit Karma — the best day-to-day monitor</h2>

          <p>
            <strong>Free VantageScore 3.0 from TransUnion and Equifax, updated weekly.</strong>{" "}
            Credit Karma shows your full reports from both bureaus, breaks down each account, flags
            new accounts and inquiries, and offers a "what-if" tool that estimates score impact of
            actions.
          </p>

          <ul>
            <li>Free forever — funded by lender-matching offers.</li>
            <li>Updates weekly.</li>
            <li>Shows VantageScore — directionally accurate but not exactly your FICO.</li>
            <li>Identity monitoring included.</li>
            <li>Soft pull only — never affects your score.</li>
          </ul>

          <p>
            <strong>Limitation:</strong> doesn't show your Experian report or any FICO score. Pair
            with one of the FICO sources below for completeness.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Open Credit Karma free →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2. Experian (free account) — real FICO from Experian</h2>

          <p>
            <strong>Free FICO 8 score from Experian, updated every 30 days.</strong> Experian's free
            tier includes their bureau report, an Experian FICO score, dark-web monitoring, and
            CreditLock for the Experian file. The free tier is genuinely free — the paid
            "IdentityWorks" tier is the upsell.
          </p>

          <ul>
            <li>FICO 8 — the actual model most lenders use.</li>
            <li>Experian bureau only.</li>
            <li>Includes Experian Boost (lets you add utility/streaming payments to your report).</li>
            <li>Updates monthly.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>3. Discover Credit Scorecard — free FICO without a Discover card</h2>

          <p>
            <strong>Free FICO 8 score from Experian, no Discover card or account required.</strong>{" "}
            Just create a free Discover account. Updated monthly. Probably the least-known free
            FICO source.
          </p>

          <ul>
            <li>Real FICO 8.</li>
            <li>No card needed — anyone can sign up.</li>
            <li>Updates monthly.</li>
            <li>Shows key factors moving your score.</li>
          </ul>

          <p>
            If you'd also like a Discover credit card (no fee, real cashback), see our{" "}
            <Link href="/learn/best-credit-cards-for-beginners">best credit cards for beginners</Link>{" "}
            roundup.
          </p>

          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              See Discover cards →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>4. Your existing credit card issuer</h2>

          <p>
            <strong>Most major issuers now provide free credit scores to cardholders.</strong>{" "}
            Examples:
          </p>

          <ul>
            <li><strong>Chase Credit Journey</strong> — VantageScore from Experian, free monthly.</li>
            <li><strong>Capital One CreditWise</strong> — VantageScore from TransUnion, free monthly. Available to anyone (not just cardholders).</li>
            <li><strong>Citi</strong> — FICO 8 from Equifax for many cardholders.</li>
            <li><strong>Bank of America</strong> — FICO 8 from TransUnion.</li>
            <li><strong>Wells Fargo</strong> — FICO 9 from Experian.</li>
          </ul>

          <p>
            <strong>Check the issuer apps you already use.</strong> Most have a "Free Credit Score"
            tab tucked somewhere.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>5. AnnualCreditReport.com — the federally mandated source</h2>

          <p>
            <strong>The official site set up under the Fair and Accurate Credit Transactions Act
            (FACTA).</strong> No score, but full credit reports from all three bureaus —
            historically once per year per bureau, expanded to weekly access during COVID-19 and
            made permanent in 2023.
          </p>

          <ul>
            <li>Free, weekly access to Equifax, Experian, and TransUnion reports.</li>
            <li>No score included.</li>
            <li>No card required.</li>
            <li>Best source for error-checking and dispute prep.</li>
          </ul>

          <p>
            <strong>This is the source to use before any major application</strong> (mortgage, auto
            loan, refinance). The score sites only show one bureau's view; lenders pull all three.
          </p>

          <p>
            URL:{" "}
            <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer">
              AnnualCreditReport.com
            </a>{" "}
            (the only official site — beware lookalikes).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>6. myFICO Free Account</h2>

          <p>
            <strong>FICO's own free tier — FICO 8 from Experian, updated monthly.</strong> The paid
            myFICO Premier tier ($29.95/month) shows all FICO model versions across all three
            bureaus, useful for mortgage prep but rarely justified for casual monitoring.
          </p>

          <p>
            For most users, the free tier covers what they need.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why your scores look different across sources</h2>

          <p>
            <strong>Two reasons:</strong>
          </p>

          <ol>
            <li><strong>Different bureaus.</strong> Each bureau has slightly different data; not all lenders report to all three.</li>
            <li><strong>Different scoring models.</strong> VantageScore 3.0, FICO 8, FICO 9, FICO 2/4/5 (legacy mortgage models), and industry-specific FICO models (FICO Auto, FICO Bankcard) all use different math.</li>
          </ol>

          <p>
            A 740 VantageScore might be a 720 FICO 8 — both correct. The trends matter more than the
            absolute number. If your score is rising across all sources, you're doing it right.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to read your credit report</h2>

          <p>Each bureau report has the same major sections:</p>

          <ul>
            <li><strong>Personal information</strong> — name, address history, employer history, Social Security number (partial).</li>
            <li><strong>Accounts</strong> — every credit account, current balance, payment history, account opening date.</li>
            <li><strong>Public records</strong> — bankruptcies (most other public record types are no longer reported).</li>
            <li><strong>Inquiries</strong> — hard pulls (from applications) and soft pulls (from your own checks and pre-approved offers).</li>
            <li><strong>Collections</strong> — accounts sent to collection agencies.</li>
          </ul>

          <p>
            <strong>Check for:</strong>
          </p>

          <ul>
            <li>Accounts you don't recognize (could be fraud).</li>
            <li>Late payments you actually paid on time (dispute).</li>
            <li>Wrong balances (dispute).</li>
            <li>Collections from accounts you've paid off (dispute or request pay-for-delete).</li>
            <li>Hard inquiries you didn't authorize (could be fraud).</li>
            <li>Old addresses still showing (cosmetic, not score-affecting, but useful to clean up).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>If you find an error</h2>

          <ol>
            <li><strong>File a dispute with the bureau</strong> reporting the error (Equifax, Experian, or TransUnion) online.</li>
            <li><strong>By law, they have 30 days to investigate</strong> (FCRA §611).</li>
            <li>If the creditor doesn't verify, the item must be removed.</li>
            <li><strong>File the same dispute with the other two bureaus</strong> if the error appears on multiple reports.</li>
            <li><strong>Also notify the creditor directly</strong> — they have their own dispute process.</li>
          </ol>

          <p>
            <strong>~25% of consumer reports have at least one error.</strong> Don't assume the data
            is right.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What to ignore</h2>

          <ul>
            <li><strong>"Credit repair" companies</strong> charging $50–$150/month. They do exactly what you can do yourself for free.</li>
            <li><strong>Paid credit monitoring with "score simulator" features</strong> — Credit Karma's free version has the same simulator.</li>
            <li><strong>"Boost my score" offers</strong> that ask for your bank login. Experian Boost is legitimate; most copycats aren't.</li>
            <li><strong>Anything that asks you to pay to "remove" accurate negative information.</strong> Accurate negatives stay 7 years by law. Nobody can remove them faster.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For most people: Credit Karma + Experian (free account) covers ongoing
            monitoring across all three bureaus, plus both a VantageScore and a real FICO.</strong>{" "}
            Pull a full report from AnnualCreditReport.com once a year (or before any major loan
            application) to catch errors.
          </p>

          <p>
            That stack costs $0/year and gives you visibility 95% as good as any paid monitoring
            service.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/best-credit-cards-for-fair-credit">Best credit cards for fair credit</Link></li>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/how-credit-cards-work">How credit cards work</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
