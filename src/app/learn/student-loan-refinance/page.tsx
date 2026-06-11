import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "student-loan-refinance";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Student loan refinance: When it makes sense (and when it doesn't)";
const description =
  "Refinancing private student loans into a lower rate is almost always smart. Refinancing federal student loans is a one-way door — you give up income-driven repayment, PSLF, and forbearance protections forever. Here's the honest framework and when to pull the trigger.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the difference between refinancing and consolidation?",
    a: "Refinancing replaces your existing loans with a new private loan from a private lender at a (hopefully) lower rate. Consolidation (the federal version) combines multiple federal loans into one Direct Consolidation Loan at a weighted-average rate — no rate reduction. They're often confused but do different things.",
  },
  {
    q: "Should I refinance my federal student loans?",
    a: "Usually no, even if the rate is lower. Refinancing federal into private permanently gives up: income-driven repayment plans (SAVE, PAYE, IBR), Public Service Loan Forgiveness (PSLF), generous deferment and forbearance, and disability/death discharge protections. That's a lot of optionality to trade for a 1–2% rate cut.",
  },
  {
    q: "When does refinancing federal loans make sense?",
    a: "Three cases: (1) you have stable high income and no chance of PSLF or income-driven forgiveness, (2) you'd save meaningfully more in interest than the value of the protections you'd lose, and (3) you have an emergency fund big enough to handle 6 months of payments without forbearance. Most borrowers don't clear all three.",
  },
  {
    q: "What rate should I look for?",
    a: "Variable rates currently start around 4–5% for top-tier credit; fixed rates start around 4.5–6%. Anything above your current federal rate is a no. For private loan refinances, save 1%+ to justify the application friction; for federal, save 2%+ to compensate for the loss of protections.",
  },
  {
    q: "Will refinancing hurt my credit score?",
    a: "Small temporary hit — 5–10 points from the hard inquiry, recovering in 3–6 months. Most lenders let you pre-qualify with a soft pull first so you can compare rates before committing. Multiple lender pre-qualifications inside a 14–45 day window count as a single inquiry for FICO purposes.",
  },
  {
    q: "What's a cosigner release option?",
    a: "Most refinance lenders let you remove a cosigner after 12–48 months of on-time payments. Important if you originally needed a parent or guardian to qualify and now want to free their credit profile from your debt. Verify the release terms before applying.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Borrow smart" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Private refinance: almost always smart. Federal refinance: a one-way door you can't reopen. The protections you'd give up are worth more than most rate cuts."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Refinancing student loans is one of the highest-ROI financial moves
            available — but only for the right loan type.</strong> Refinancing private loans at a
            lower rate almost always saves money. Refinancing federal loans into private loans
            permanently sacrifices income-driven repayment, PSLF, and forbearance protections —
            optionality that's worth more than most rate cuts can justify.
          </p>

          <p>
            Here's the framework for deciding which loans to refinance and when.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The first question: federal or private?</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Loan type</th>
                  <th className="py-3 pr-4">Refinance verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Private student loan (Sallie Mae, etc.)</td><td className="py-3 pr-4">Almost always refinance if rate drop ≥ 1%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Federal Direct loan (subsidized/unsubsidized)</td><td className="py-3 pr-4">Usually keep — protections valuable</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Federal PLUS loan (parent/grad)</td><td className="py-3 pr-4">Higher rate; sometimes worth refinancing</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Perkins loan</td><td className="py-3 pr-4">Usually keep — has cancellation programs</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">FFEL loan (older)</td><td className="py-3 pr-4">Consolidate to Direct first, then evaluate</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Why federal loans are special</h2>

          <p>
            Federal student loans come with protections that NO private refinance lender can match.
            Once you refinance into a private loan, these are gone forever:
          </p>

          <ul>
            <li><strong>Income-Driven Repayment (IDR)</strong> — payments capped at 5–20% of discretionary income, with remaining balance forgiven after 20–25 years (or 10 years for PSLF).</li>
            <li><strong>Public Service Loan Forgiveness (PSLF)</strong> — full forgiveness after 120 qualifying payments while working for a qualifying employer (government, 501(c)(3) nonprofit).</li>
            <li><strong>Generous deferment and forbearance</strong> — federal pauses for unemployment, economic hardship, military service.</li>
            <li><strong>Death and total disability discharge</strong> — federal loans wiped clean; private loans typically not.</li>
            <li><strong>Statutory protections during emergencies</strong> — see COVID-19 pause as an example.</li>
          </ul>

          <p>
            <strong>The realistic value of federal protections is often $20K–$100K+ in
            optionality.</strong> A 2% rate cut on a $50K loan over 10 years saves ~$6K. The math
            usually favors keeping federal.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When refinancing federal loans actually makes sense</h2>

          <p>You should clear ALL of these tests before refinancing federal:</p>

          <ol>
            <li><strong>Stable, high income.</strong> $100K+ household, secure employment.</li>
            <li><strong>No PSLF eligibility.</strong> You work in private sector and won't switch to government / nonprofit.</li>
            <li><strong>Won't benefit from IDR forgiveness.</strong> Your salary is high enough that IDR caps don't reduce your payment materially.</li>
            <li><strong>Substantial emergency fund.</strong> 6+ months of expenses, so you can ride out unemployment without federal forbearance.</li>
            <li><strong>Material rate savings.</strong> 2%+ reduction. A 0.5% cut isn't worth losing protections.</li>
          </ol>

          <p>
            If you clear all five, refinance can be the right move. If you fail any one, keep
            federal.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math: private loan refinance</h2>

          <p>
            Example: $40,000 private student loan at 9.5% on a 10-year term.
          </p>

          <ul>
            <li><strong>Current loan:</strong> ~$518/month, ~$22,200 total interest over 10 years.</li>
            <li><strong>Refinanced to 5.5%, 10-year term:</strong> ~$434/month, ~$12,000 interest. <strong>$10,200 saved.</strong></li>
            <li><strong>Refinanced to 5.5%, 7-year term:</strong> ~$574/month, ~$8,200 interest. <strong>$14,000 saved</strong> at a higher monthly payment.</li>
            <li><strong>Refinanced to 5.5%, 15-year term:</strong> ~$327/month, ~$18,800 interest. Lower monthly but lower savings.</li>
          </ul>

          <p>
            <strong>The 7-year term saves the most</strong> if you can afford the higher payment.
            The 15-year is a cash-flow play, not a savings play.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Top refinance lenders</h2>

          <p>
            Most major student loan refinance lenders offer pre-qualification with a soft pull —
            you can compare actual rates without credit damage before applying.
          </p>

          <p>
            <strong>SoFi</strong> — competitive rates, large unemployment protection (12 months
            forbearance), member benefits (career coaching, financial planning).
          </p>

          <p>
            <strong>Earnest</strong> — flexible terms (custom month-level term selection), generous
            grace periods, strong customer service reviews.
          </p>

          <p>
            <strong>LightStream</strong> — direct personal-loan style refinances; competitive fixed
            rates for top-tier credit.
          </p>

          <p>
            <AffiliateButton partner="sofi-loans" source={slug}>
              Check rates at SoFi →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="lightstream" source={slug} variant="secondary">LightStream</AffiliateButton>{" "}
            <AffiliateButton partner="credit-karma" source={slug} variant="secondary">Credit Karma marketplace</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The fixed vs. variable rate decision</h2>

          <p>
            <strong>Fixed rate:</strong> rate locked for the full term. Predictable, slightly
            higher starting rate.
          </p>

          <p>
            <strong>Variable rate:</strong> rate adjusts with a benchmark (typically SOFR). Lower
            starting rate; can rise meaningfully if rates climb.
          </p>

          <ul>
            <li><strong>Short term (≤5 years):</strong> variable often wins — limited time for rates to move against you.</li>
            <li><strong>Long term (≥10 years):</strong> fixed wins — too much rate uncertainty over a decade.</li>
            <li><strong>Aggressive payoff plan (3–5 years):</strong> variable is fine if you'll be done before rates can meaningfully move.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to apply</h2>

          <ol>
            <li><strong>Pre-qualify with 3+ lenders</strong> — all soft pulls. Get actual rate quotes, not advertised "starting at" rates.</li>
            <li><strong>Compare APR, not just rate</strong> — APR includes any origination fees.</li>
            <li><strong>Pick the loan term carefully</strong> — shorter saves more interest but raises monthly payment.</li>
            <li><strong>Choose fixed vs. variable</strong> based on payoff timeline.</li>
            <li><strong>Submit one full application</strong> with the winning lender (hard pull at this point).</li>
            <li><strong>Continue paying old loans</strong> until refi disburses (typically 2–4 weeks). Don't skip a payment in the gap.</li>
            <li><strong>Set up autopay</strong> on the new loan — most lenders give 0.25% rate cut.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Refinancing federal loans without doing the protection math.</strong> Run the IDR + PSLF scenarios before deciding.</li>
            <li><strong>Lengthening the term to lower the monthly payment without lowering interest.</strong> Cash-flow relief, not money saved.</li>
            <li><strong>Refinancing when you might pursue PSLF.</strong> Even if you're not in PSLF now, switching to a qualifying employer later is common — and impossible if you refinanced.</li>
            <li><strong>Skipping the cosigner release option.</strong> If your loans have a cosigner, prioritize lenders with cosigner release terms.</li>
            <li><strong>Refinancing right before applying for a mortgage.</strong> The new account can briefly hurt mortgage underwriting.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Refinance private student loans aggressively.</strong> Any rate cut over 1%
            justifies the application friction; pre-qualify with 3+ lenders and pick the lowest
            APR.
          </p>

          <p>
            <strong>Keep federal student loans federal — unless you clear all five criteria
            above.</strong> The protections you'd give up are worth more than most rate cuts.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/personal-loan-vs-credit-card">Personal loan vs. credit card</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/how-to-get-a-mortgage">How to get a mortgage</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Borrow smart" currentSlug="student-loan-refinance" />
      </article>
    </>
  );
}
