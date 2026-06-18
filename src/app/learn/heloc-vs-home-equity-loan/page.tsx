import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "heloc-vs-home-equity-loan";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "HELOC vs. home equity loan: which makes sense in 2026?";
const description =
  "A HELOC is a revolving credit line at a variable rate; a home equity loan is a one-shot installment loan at a fixed rate. Pick the HELOC for flexible, drawn-over-time spending (renovation phases, college tuition); pick the home equity loan for a known one-time expense.";
const PUBLISHED = "2026-06-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the simplest difference?",
    a: "A home equity loan gives you a lump sum at closing at a fixed interest rate, repaid in equal monthly installments over 5–30 years. A HELOC gives you a credit line you can draw against over a 5–10-year period, at a variable rate tied to the Prime Rate, with interest-only payments allowed during the draw period.",
  },
  {
    q: "Which has the lower interest rate?",
    a: "It depends on the rate environment. HELOCs typically start lower because they're variable and tied to Prime, but they reprice whenever Prime moves. Home equity loans are fixed for the life of the loan, so you pay a small premium for certainty. In 2026, well-qualified borrowers see HELOCs around Prime to Prime+0.5% and home equity loans around 8–9% fixed.",
  },
  {
    q: "Is the interest tax-deductible?",
    a: "Only if the proceeds are used to 'buy, build, or substantially improve' the home that secures the loan, and only up to the $750,000 combined mortgage debt cap. Use a HELOC to pay off credit cards or pay tuition and the interest is NOT deductible. The IRS clarified this in Pub 936 after the 2017 TCJA, and the rules continue under the One Big Beautiful Bill Act of 2025.",
  },
  {
    q: "Can I lose my house if I default?",
    a: "Yes. Both products are secured by your primary residence. Missed payments can trigger foreclosure, just like a first mortgage. This is the single biggest reason to be cautious about using home equity to consolidate unsecured debt — you've converted a credit-card default risk into a foreclosure risk.",
  },
  {
    q: "How much can I borrow?",
    a: "Most lenders allow a combined loan-to-value (CLTV) of 80–85%. If your home is worth $400K and you owe $250K on the first mortgage, 80% CLTV means a max total of $320K — leaving up to $70K available via HELOC or home equity loan. Premium lenders go to 90% CLTV for top-tier credit; some go to 100% for HELOCs on smaller loan amounts.",
  },
  {
    q: "Cash-out refinance vs. HELOC — which is better?",
    a: "Cash-out refi if (1) you're tapping more than ~$100K, (2) current mortgage rates are lower than your existing first mortgage, or (3) you want a single fixed payment. HELOC if your first mortgage rate is low (sub-5%) and you don't want to give that up — a HELOC sits on top without touching the first mortgage.",
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
          subtitle="Both let you borrow against your home equity. One is a credit card; the other is an installment loan. The right pick depends on how — and when — you'll actually spend the money."
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
            <strong>HELOCs and home equity loans both let you tap the equity in your house —
            without selling it or refinancing the first mortgage.</strong> They&apos;re cousins,
            not twins. The mechanics, the rate structure, and the right use cases are different
            enough that picking the wrong one is a meaningful cost.
          </p>

          <p>
            The short version: <strong>HELOC for flexible, drawn-over-time spending; home equity
            loan for a known one-time expense.</strong> The rest of this guide is the math and
            the cases where the rule flips.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second comparison</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">HELOC</th>
                  <th className="py-3 pr-4">Home equity loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Disbursement</td><td className="py-3 pr-4">Credit line, draw as needed</td><td className="py-3 pr-4">Lump sum at closing</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Rate type</td><td className="py-3 pr-4">Variable (Prime + margin)</td><td className="py-3 pr-4">Fixed for life of loan</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Typical APR (2026, good credit)</td><td className="py-3 pr-4">~8.0%–9.0%</td><td className="py-3 pr-4">~8.5%–9.5%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Draw period</td><td className="py-3 pr-4">5–10 years</td><td className="py-3 pr-4">None — fully disbursed</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Repayment</td><td className="py-3 pr-4">Interest-only during draw; P&amp;I after</td><td className="py-3 pr-4">Fixed P&amp;I from month 1</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Term length</td><td className="py-3 pr-4">10–30 years total</td><td className="py-3 pr-4">5–30 years</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Closing costs</td><td className="py-3 pr-4">$0–2% (often waived)</td><td className="py-3 pr-4">2–5%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">Phased renovation, tuition, emergency reserve</td><td className="py-3 pr-4">Known one-time expense</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>How a HELOC actually works</h2>

          <p>
            A Home Equity Line of Credit is structurally like a credit card secured by your home.
            The lender approves a maximum credit line (e.g., $50,000). You draw against it as you
            need cash — by checks, online transfer, or sometimes a dedicated debit card.
          </p>

          <p>
            <strong>Two phases:</strong>
          </p>

          <ul>
            <li><strong>Draw period (5–10 years).</strong> You can take money out and pay it back. Minimum monthly payment is usually interest-only on the outstanding balance. Pay back $10K? Your available credit goes back up.</li>
            <li><strong>Repayment period (10–20 years).</strong> Draw access ends. You repay the outstanding balance plus interest in fixed monthly payments. This is where the &quot;payment shock&quot; bites — someone who only made interest payments for 10 years on a $50K balance suddenly owes ~$500/month for the next 15.</li>
          </ul>

          <p>
            <strong>The rate is variable.</strong> Pricing is almost always Prime + a margin set
            at origination. If Prime is 7.50% and your margin is 0.25%, your rate is 7.75%. When
            the Fed moves Prime, your rate moves the next day.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How a home equity loan works</h2>

          <p>
            A home equity loan is a second mortgage with a fixed amount, fixed rate, and fixed
            term. At closing, you get a check for the loan amount; from month one, you owe equal
            monthly principal-and-interest payments.
          </p>

          <p>
            <strong>The math is exactly like a first mortgage.</strong> Borrow $40,000 at 9.0%
            fixed for 15 years: monthly payment is ~$406. Total interest over the life of the
            loan: ~$33,000.
          </p>

          <p>
            Closing costs are higher than a HELOC — typically 2–5% of the loan amount — because
            it&apos;s a full mortgage product with title insurance, recording fees, etc. Many
            lenders will roll those into the loan.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Which one for which job</h2>

          <p>
            <strong>HELOC wins when the spending is staged or uncertain.</strong>
          </p>

          <ul>
            <li><strong>Multi-phase home renovation.</strong> Pay for the kitchen this year, the bathroom next year, the deck the year after. You only pay interest on what you&apos;ve drawn.</li>
            <li><strong>Multi-year college tuition.</strong> Draw each semester. Pay interest-only during school. Refinance into something fixed when you actually know the total balance.</li>
            <li><strong>Emergency reserve for self-employed.</strong> Open the HELOC, don&apos;t draw on it, pay $0 in interest. Tap if needed.</li>
            <li><strong>Bridge for a home purchase.</strong> Draw to fund the down payment on the new house, pay it off when the old house sells.</li>
          </ul>

          <p>
            <strong>Home equity loan wins when the spending is known and one-time.</strong>
          </p>

          <ul>
            <li><strong>Single-shot renovation with a contractor estimate.</strong> Fixed payment, fixed rate, fixed payoff date — easier to budget.</li>
            <li><strong>Debt consolidation (carefully).</strong> If you have $40K of credit-card debt at 24% APR and decent home equity, a 9% fixed home equity loan cuts the interest bill — but only if you commit to NOT running the cards back up. See <Link href="/learn/debt-consolidation-loan">debt consolidation loans</Link>.</li>
            <li><strong>Major medical expense.</strong> Known balance owed. Convert it into a fixed payment.</li>
            <li><strong>You hate rate uncertainty.</strong> If a 1% rate move would stress your budget, the fixed rate is worth the premium.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What &quot;equity&quot; actually means</h2>

          <p>
            Lenders care about Combined Loan-to-Value — the total mortgage debt divided by the
            home&apos;s appraised value.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Item</th>
                  <th className="py-3 pr-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Home value (appraisal)</td><td className="py-3 pr-4">$500,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">First mortgage balance</td><td className="py-3 pr-4">$300,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Equity</td><td className="py-3 pr-4">$200,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Lender CLTV cap</td><td className="py-3 pr-4">80%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Max total mortgage debt</td><td className="py-3 pr-4">$400,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Available HELOC/loan</td><td className="py-3 pr-4">$100,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Lenders also check FICO score (typically 680+ minimum, 740+ for best rates),
            debt-to-income ratio (under 43%), and stable income history. Self-employed borrowers
            usually need 2 years of tax returns.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The HELOC payment-shock trap</h2>

          <p>
            <strong>The single biggest HELOC failure mode is the end-of-draw cliff.</strong> For
            10 years, you make interest-only payments at, say, $200/month. The draw period ends.
            Now you owe $40,000 fully amortized over 15 years at 9% — about $406/month, double
            the payment you got used to.
          </p>

          <p>
            Plan for this from day one. Either commit to paying down principal during the draw
            period, refinance the balance into a fixed home equity loan before the cliff hits, or
            don&apos;t draw money you can&apos;t comfortably amortize.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The variable-rate trap</h2>

          <p>
            HELOC rates move with Prime. Over a 10-year draw period, you should expect Prime to
            move by 200–400 basis points either direction. A HELOC at 7.75% today could be 10.75%
            in two years.
          </p>

          <p>
            <strong>Stress-test the payment.</strong> If your current rate is 8% and the rate goes
            to 11%, can you still make the payment? If not, the HELOC is the wrong product.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-deduction rule (often misunderstood)</h2>

          <p>
            HELOC and home equity loan interest is <strong>federally tax-deductible only if the
            proceeds are used to buy, build, or substantially improve the home that secures the
            loan</strong>, subject to the combined $750,000 mortgage cap ($375,000 if MFS). IRS
            Pub 936 has the rules.
          </p>

          <p>
            <strong>What counts:</strong> kitchen remodel, addition, new roof, finished basement.
          </p>

          <p>
            <strong>What does NOT count:</strong> debt consolidation, college tuition, vacations,
            car purchase, medical bills. The lender doesn&apos;t police this — you do, on your
            return.
          </p>

          <p>
            See <Link href="/learn/standard-vs-itemized-deduction">standard vs. itemized
            deduction</Link>: the standard deduction is large enough that home equity interest
            probably only matters if your total itemized deductions already exceed it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>HELOC vs. cash-out refinance vs. personal loan</h2>

          <p>
            Three products, three different right answers.
          </p>

          <ul>
            <li><strong>Cash-out refi.</strong> Best when you&apos;re tapping a large amount (&gt;$100K), AND current first-mortgage rates aren&apos;t much higher than your existing rate. You replace the whole first mortgage with a bigger one and pocket the difference. Closing costs are 2–5%. Don&apos;t do this if your existing mortgage is sub-5%.</li>
            <li><strong>HELOC.</strong> Best when you have a low first-mortgage rate to protect and need flexible drawing access. Sits on top of the first mortgage without touching it.</li>
            <li><strong>Home equity loan.</strong> Best when you have a low first-mortgage rate AND need a fixed lump-sum payment.</li>
            <li><strong>Personal loan.</strong> Best for borrowers without enough equity, or who don&apos;t want to put the house at risk. Higher rates (10–25%), no closing costs, no risk of foreclosure. See <Link href="/learn/best-personal-loans-2026">best personal loans 2026</Link>.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where to apply</h2>

          <p>
            HELOCs and home equity loans aren&apos;t commoditized the way refinances are — rates
            and fees vary widely. Get at least three quotes. Mortgage-focused online lenders
            are usually the fastest path:
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="better-mortgage" source={slug}>Better.com →</AffiliateButton>
            <AffiliateButton partner="rocket-mortgage" source={slug} variant="secondary">Rocket Mortgage →</AffiliateButton>
            <AffiliateButton partner="sofi-loans" source={slug} variant="secondary">SoFi personal loan (no equity) →</AffiliateButton>
          </div>

          <p>
            Also worth a quote from your existing mortgage holder — they have your file, can
            sometimes waive an appraisal, and may match a competing offer.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>HELOC if the spending is staged, uncertain, or you want an emergency reserve
            you don&apos;t pay for until you draw.</strong> Accept the variable rate and plan for
            the end-of-draw payment shock.
          </p>

          <p>
            <strong>Home equity loan if the amount is known, the project is one-shot, and you
            want a single fixed payment.</strong> Pay the premium over HELOC pricing for rate
            certainty.
          </p>

          <p>
            <strong>Cash-out refi only if current first-mortgage rates aren&apos;t materially
            above your existing rate.</strong> Otherwise you&apos;re trading a 4% mortgage for an
            8% one to save 1% on the home-equity portion — bad math.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/when-to-refinance-mortgage">When to refinance your mortgage</Link> — the cash-out refi decision framework.</li>
            <li><Link href="/learn/how-to-get-a-mortgage">How to get a mortgage</Link> — the underwriting basics that also apply to home equity products.</li>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link> — the unsecured alternative.</li>
            <li><Link href="/learn/debt-consolidation-loan">Debt consolidation loans</Link> — when home equity makes sense for consolidating credit cards.</li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link> — whether the interest deduction actually saves you anything.</li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link> — why HELOC balances usually don&apos;t hit utilization, but card balances do.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Borrow smart" currentSlug={slug} />
      </article>
    </>
  );
}
