import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "when-to-refinance-mortgage";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "When to refinance your mortgage (2026 guide)";
const description =
  "The old 1% rule is obsolete. The real refinance test in 2026 is the break-even calculation: closing costs ÷ monthly savings. Refinance when you'll stay in the home longer than that — and not before. Here's the math, the timing, and the lender comparison.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Is the '1% rule' still a good rule of thumb?",
    a: "No. The old wisdom — only refinance if you can drop your rate by 1% — was built around higher closing costs and longer-tenure homeowners. The honest 2026 test is the break-even period: closing costs ÷ monthly savings. If you'll stay in the home longer than the break-even, refinance. If not, don't.",
  },
  {
    q: "How long does a refinance take?",
    a: "30–45 days from application to closing for a vanilla rate-and-term refi. Cash-out refis run 45–60 days. The bottleneck is appraisal and underwriting, not the lender's interest level. Lock your rate at application — rate lock typically runs 30–60 days and a longer lock costs more.",
  },
  {
    q: "What are typical closing costs?",
    a: "2–5% of the loan amount, or roughly $4,000–$8,000 on a $200K loan. The main line items: lender origination, appraisal ($500–$700), title insurance, recording fees, and prepaid escrow. Some lenders offer 'no-closing-cost' refis — they just roll the costs into a higher rate. The break-even math still applies.",
  },
  {
    q: "Will refinancing hurt my credit score?",
    a: "A small, temporary hit — 5–10 points from the hard inquiry, recovering in 3–6 months. Multiple mortgage inquiries within a 14–45 day window count as a single inquiry for FICO scoring, so shopping rates aggressively doesn't multiply the damage.",
  },
  {
    q: "Should I refinance from a 30-year to a 15-year?",
    a: "Only if the monthly payment fits comfortably (the 15-year is typically 40–60% higher). The math is excellent — much lower lifetime interest, faster equity build, lower rate — but only works if you don't end up cash-strapped. A safer alternative: keep the 30-year and make extra principal payments equal to a 15-year schedule. Same payoff speed, more flexibility.",
  },
  {
    q: "What about cash-out refinances?",
    a: "Useful when home equity is the only place to get low-rate borrowing — and the use case is durable (home improvements, debt consolidation at materially lower APR). Avoid for discretionary spending. The new loan typically carries a slightly higher rate than a rate-and-term refi.",
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
          subtitle="The honest 2026 test isn't the 1% rule — it's the break-even period. Run the math first; rate-shop second."
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
            <strong>Refinancing makes sense when the lifetime interest savings exceed your closing
            costs — and you'll stay in the home long enough to get there.</strong> That's the whole
            test. The "1% rule" you've heard for years is a rough approximation that often
            understates marginal cases and overstates obvious ones.
          </p>

          <p>
            Here's the actual math, the timing signals, and how to shop rates without burning your
            score.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The break-even calculation</h2>

          <p>
            <strong>Break-even months = closing costs ÷ monthly payment savings</strong>
          </p>

          <p>
            That's the period before refinancing starts net-positive. If you'll keep the home longer
            than the break-even, refi wins. If not, don't.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Scenario</th>
                  <th className="py-3 pr-4">Old rate</th>
                  <th className="py-3 pr-4">New rate</th>
                  <th className="py-3 pr-4">Monthly savings</th>
                  <th className="py-3 pr-4">Break-even</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">$300K @ 7.5% → 6.5%</td><td className="py-3 pr-4">7.5%</td><td className="py-3 pr-4">6.5%</td><td className="py-3 pr-4">$201</td><td className="py-3 pr-4">~30 months ($6K costs)</td></tr>
                <tr><td className="py-3 pr-4">$300K @ 7.5% → 6.0%</td><td className="py-3 pr-4">7.5%</td><td className="py-3 pr-4">6.0%</td><td className="py-3 pr-4">$298</td><td className="py-3 pr-4">~20 months ($6K costs)</td></tr>
                <tr><td className="py-3 pr-4">$500K @ 7.0% → 6.25%</td><td className="py-3 pr-4">7.0%</td><td className="py-3 pr-4">6.25%</td><td className="py-3 pr-4">$245</td><td className="py-3 pr-4">~33 months ($8K costs)</td></tr>
                <tr><td className="py-3 pr-4">$200K @ 6.75% → 6.25%</td><td className="py-3 pr-4">6.75%</td><td className="py-3 pr-4">6.25%</td><td className="py-3 pr-4">$65</td><td className="py-3 pr-4">~77 months ($5K costs)</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Notice the bottom row.</strong> A 0.5% rate drop sounds tempting, but the
            break-even is over 6 years. Unless you're certain you'll stay that long, that refi loses
            money.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Five signals it's time to refinance</h2>

          <ol>
            <li><strong>Market rates are 0.75%+ below your current rate</strong> AND your break-even is under your expected stay.</li>
            <li><strong>Your credit score jumped 60+ points</strong> since origination — you may qualify for a meaningfully better tier.</li>
            <li><strong>Your home appreciated enough to drop PMI</strong> (loan-to-value below 80%). Eliminating PMI alone can pay for closing costs.</li>
            <li><strong>You're carrying an ARM that's about to reset higher.</strong> Refinance to a fixed rate before the adjustment hits.</li>
            <li><strong>You need to remove a co-borrower</strong> (divorce, partnership change) — refinance is the cleanest path.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>When NOT to refinance</h2>

          <ul>
            <li><strong>You're planning to sell within 3 years.</strong> Break-even almost never beats a short stay.</li>
            <li><strong>You're early in a 30-year and refinancing into another 30-year.</strong> The amortization clock resets — early years are nearly all interest. A new 30-year at a 1% lower rate can still cost more lifetime interest if you reset the clock late.</li>
            <li><strong>The rate drop is under 0.5%.</strong> Closing costs eat the savings.</li>
            <li><strong>Your credit dropped.</strong> The new rate might be higher than your existing one.</li>
            <li><strong>You can't document income clearly.</strong> Self-employed and 1099 borrowers should weight the paperwork cost — a non-trivial drain on a marginal refi.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to shop rates without trashing your score</h2>

          <ol>
            <li><strong>Pull your credit report</strong> at AnnualCreditReport.com. Know your score before lenders do.</li>
            <li><strong>Get 3+ quotes within a 14-day window.</strong> FICO bundles mortgage inquiries inside that window as a single inquiry.</li>
            <li><strong>Compare Loan Estimates side-by-side.</strong> By law, every lender must give you a standardized 3-page Loan Estimate within 3 days of application. Compare line item by line item — not just APR.</li>
            <li><strong>Look at lender credits vs. rate trade-offs.</strong> A lender may offer a higher rate with $5K of lender credit (covering closing costs). Often a worse deal long-term unless break-even is short.</li>
            <li><strong>Lock the rate when you apply.</strong> Rates move daily. Lock = 30–60 days typically.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Where to get quotes</h2>

          <p>
            Online lenders typically beat banks on both rate and fees, with a faster process and
            less paperwork friction.
          </p>

          <p>
            <AffiliateButton partner="better-mortgage" source={slug}>
              Get a Better Mortgage rate →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="rocket-mortgage" source={slug} variant="secondary">Rocket Mortgage</AffiliateButton>
          </p>

          <p>
            Full lender breakdown in our{" "}
            <Link href="/learn/how-to-get-a-mortgage">how to get a mortgage</Link> guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Rate-and-term vs. cash-out refinance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Rate-and-term refi</th>
                  <th className="py-3 pr-4">Cash-out refi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Loan amount</td><td className="py-3 pr-4">Same as existing</td><td className="py-3 pr-4">Higher — you get cash at closing</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Typical rate</td><td className="py-3 pr-4">Best available</td><td className="py-3 pr-4">~0.25–0.50% higher</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Max LTV</td><td className="py-3 pr-4">95–97%</td><td className="py-3 pr-4">80% typically</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best use</td><td className="py-3 pr-4">Lower payment or shorter term</td><td className="py-3 pr-4">Home improvements, debt consolidation at lower rate</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Avoid for</td><td className="py-3 pr-4">N/A</td><td className="py-3 pr-4">Vacations, depreciating purchases, market speculation</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-to-15 question</h2>

          <p>
            <strong>Refinancing from a 30-year to a 15-year cuts lifetime interest dramatically.</strong>{" "}
            On a $300K loan, a 30-year at 6.5% costs ~$382K in interest. A 15-year at 5.5% costs
            ~$141K. <strong>The 15-year saves ~$240K in interest</strong>.
          </p>

          <p>
            The catch: the 15-year monthly payment is much higher — ~$2,453 vs. ~$1,896 on the
            30-year. <strong>Don't refinance to a 15-year unless the higher payment is comfortable
            even if your income drops temporarily.</strong>
          </p>

          <p>
            <strong>The flexible alternative:</strong> keep the 30-year, but pay an extra $556/month
            toward principal. Same payoff speed as a 15-year, but if you ever lose income, you can
            drop back to the original payment without missing a beat. Slightly worse interest math,
            much better resilience.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The right refi is not the lowest rate — it's the one where the break-even
            period is shorter than your expected stay.</strong> Run that math first, get 3+ quotes
            inside a 14-day window, and compare Loan Estimates line by line, not by APR alone.
          </p>

          <p>
            If the break-even is under 30 months and you're staying at least 5 years, refinancing is
            almost always worth doing. If the break-even is over 4 years and you might move sooner,
            pass.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-get-a-mortgage">How to get a mortgage</Link></li>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
