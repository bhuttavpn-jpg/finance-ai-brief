import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-get-a-mortgage";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to get a mortgage (2026 step-by-step guide)";
const description =
  "A practical 2026 guide to getting a mortgage: credit score and DTI targets, the exact paperwork lenders want, pre-approval vs. pre-qualification, and how to shop rates without tanking your credit score.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const STEPS = [
  { name: "Check your credit and clean it up", text: "Pull all three bureau reports at AnnualCreditReport.com. Dispute errors. Pay down credit-card balances to under 30% utilization before you apply." },
  { name: "Calculate what you can actually afford", text: "Use a 28/36 rule: total housing costs under 28% of gross income, total debt under 36%. Lenders may approve you for more — don't take it." },
  { name: "Save the down payment and reserves", text: "Most loan types want 3–20% down plus 2 months of mortgage reserves. Don't time the market; have the money parked in a HYSA." },
  { name: "Get pre-approved by 3 lenders within 14 days", text: "Pre-approval is a credit-pulling, document-verified commitment. Multiple inquiries in 14 days count as one for FICO. Compare APR, not just rate." },
  { name: "Make an offer with the pre-approval letter", text: "A pre-approval letter is the seller's signal you're real. In tight markets, this is non-negotiable." },
  { name: "Lock the rate after acceptance", text: "Once under contract, lock your rate for 30–60 days. A 30-day lock is usually free; longer locks cost." },
  { name: "Get the home appraised and inspected", text: "Lender orders the appraisal. You order the inspection. If appraisal comes in low, you renegotiate or walk." },
  { name: "Clear the underwriting conditions", text: "Underwriters typically come back with 'conditional approval' — a list of documents and clarifications. Respond fast; sit on a request 48 hours and you delay closing." },
  { name: "Close", text: "Final walkthrough, sign 60+ pages, wire down payment + closing costs, receive keys. Closings typically take 30–45 days from contract." },
];

const FAQS: QA[] = [
  {
    q: "What credit score do I need to buy a house?",
    a: "Conventional loans (Fannie Mae / Freddie Mac) typically want 620+; you'll get the best rates at 740+. FHA loans accept 580 with 3.5% down (sometimes 500 with 10% down). VA loans have no official minimum but most lenders impose 580–620. USDA loans target 640+. Below 580, you're effectively locked out — rebuild credit for 6–12 months before applying.",
  },
  {
    q: "How much house can I afford?",
    a: "Use the 28/36 rule: housing costs (PITI — principal, interest, taxes, insurance) under 28% of gross monthly income; total debt under 36%. On $100K gross income, that's roughly $2,333/month max housing. On a 30-year fixed at 6.5%, that supports roughly a $300K–$330K mortgage. Lenders may approve you for more — they're optimizing for their loan size, not your retirement readiness.",
  },
  {
    q: "Pre-qualification vs. pre-approval — what's the difference?",
    a: "Pre-qualification is a soft estimate based on what you tell a lender. Worth roughly nothing in a competitive market. Pre-approval is a full credit-pulling, income-verifying, document-collecting underwriting pass that results in a letter committing the lender to a specific loan amount. Make offers with pre-approval, not pre-qualification.",
  },
  {
    q: "Does shopping rates hurt my credit score?",
    a: "Not meaningfully if you compress the shopping into a 14-day window. FICO's deduplication rules count all mortgage inquiries within 14 days as one inquiry. Spread your applications over 45 days and you'll start eating credit-score points.",
  },
  {
    q: "What's a mortgage point and should I buy them?",
    a: "One point equals 1% of the loan amount paid upfront in exchange for a lower rate. On a $400K loan, one point is $4,000. The break-even is usually 5–7 years — only worth it if you're highly confident you won't sell or refinance in that window. For most first-time buyers, skip points.",
  },
  {
    q: "Conventional vs. FHA — which is better?",
    a: "Conventional wins if you have 5%+ down and 700+ credit — better rates, no mortgage insurance once you reach 20% equity. FHA wins if you have 3.5%–10% down and a credit score in the 580–680 range — easier qualification, but mortgage insurance (MIP) sticks for the life of the loan in most cases. The right answer depends on your specific numbers.",
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
      <JsonLd data={howToJsonLd({ name: "How to get a mortgage", steps: STEPS })} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="A practical 9-step walkthrough — credit, affordability, pre-approval, lock, close — without the lender jargon."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="14 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Getting a mortgage in 2026 takes 30–60 days, three lenders, and a manageable
            stack of paperwork.</strong> It is not the mystery that real-estate sites and lender
            sales teams make it out to be — but the process punishes anyone who walks into it
            blind.
          </p>

          <p>
            This guide is the practical walkthrough: what to do <em>before</em> you apply, how to
            shop rates without tanking your credit, what underwriting actually asks for, and how to
            avoid the three or four mistakes that delay or sink closings.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — Check your credit and clean it up</h2>

          <p>
            <strong>Six months before you plan to apply,</strong> pull all three bureau reports for
            free at AnnualCreditReport.com. Look for:
          </p>

          <ul>
            <li><strong>Errors</strong> — old accounts marked open, paid debts marked unpaid, accounts that aren&apos;t yours. Dispute in writing.</li>
            <li><strong>High utilization</strong> — credit card balances above 30% of limits hurt your score. Pay them down <em>before</em> the statement date so the low balance is what gets reported.</li>
            <li><strong>Recent hard inquiries</strong> — every hard pull in the last 12 months counts against you. Hold off on new credit card or auto loan applications during this window.</li>
          </ul>

          <p>
            <Link href="/learn/what-affects-your-credit-score">Our credit-score deep dive</Link>{" "}
            walks through each FICO factor and which ones move fastest. For monitoring while you
            rebuild, see{" "}
            <AffiliateButton partner="credit-karma" source={slug} variant="secondary">Credit Karma</AffiliateButton>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — Calculate what you can actually afford</h2>

          <p>
            <strong>The 28/36 rule</strong> is the gold-standard affordability heuristic:
          </p>

          <ul>
            <li><strong>Total housing costs (PITI)</strong> ≤ 28% of gross monthly income.</li>
            <li><strong>Total debt payments</strong> (housing + auto + cards + student loans) ≤ 36% of gross monthly income.</li>
          </ul>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Gross income</th>
                  <th className="py-3 pr-4">Max PITI (28%)</th>
                  <th className="py-3 pr-4">Approx. home price @ 20% down, 6.5%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">$60,000</td><td className="py-3 pr-4">$1,400/mo</td><td className="py-3 pr-4">~$210,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$100,000</td><td className="py-3 pr-4">$2,333/mo</td><td className="py-3 pr-4">~$360,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$150,000</td><td className="py-3 pr-4">$3,500/mo</td><td className="py-3 pr-4">~$540,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$200,000</td><td className="py-3 pr-4">$4,667/mo</td><td className="py-3 pr-4">~$720,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Lenders will approve you for more than this</strong> — sometimes 45–50% of your
            gross income on a debt-to-income (DTI) basis. They&apos;re optimizing for their loan
            volume, not your ability to fund a retirement account. The 28/36 rule is the conservative
            real answer.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Save the down payment and the reserves</h2>

          <p>
            <strong>Down payment minimums vary by loan type:</strong>
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Loan type</th>
                  <th className="py-3 pr-4">Min down</th>
                  <th className="py-3 pr-4">Mortgage insurance?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Conventional</td><td className="py-3 pr-4">3% (5%+ typical)</td><td className="py-3 pr-4">PMI until 20% equity</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">FHA</td><td className="py-3 pr-4">3.5%</td><td className="py-3 pr-4">MIP for life of loan in most cases</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">VA</td><td className="py-3 pr-4">0%</td><td className="py-3 pr-4">Funding fee, no PMI</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">USDA</td><td className="py-3 pr-4">0%</td><td className="py-3 pr-4">Guarantee fee</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Jumbo</td><td className="py-3 pr-4">10–20%</td><td className="py-3 pr-4">No PMI; tighter underwriting</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Plus you need <strong>cash reserves</strong> — typically 2 months of mortgage payments
            sitting in a verifiable account after closing. Park the down payment + reserves in a{" "}
            <Link href="/learn/best-hysa-2026">high-yield savings account</Link> and don&apos;t move
            it for 60 days before applying (lenders look back 60 days on bank statements).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Get pre-approved by three lenders within 14 days</h2>

          <p>
            <strong>This is the rate-shopping step.</strong> Pre-approval is a full underwriting pass:
            credit pull, income verification, asset verification. The output is a letter committing
            the lender to a specific loan amount.
          </p>

          <p>The right three to apply to:</p>

          <ul>
            <li><strong>A direct online lender</strong> for speed and rate transparency. <AffiliateButton partner="better-mortgage" source={slug} variant="secondary">Better Mortgage</AffiliateButton> and <AffiliateButton partner="rocket-mortgage" source={slug} variant="secondary">Rocket Mortgage</AffiliateButton> both let you get conditional approval the same day.</li>
            <li><strong>A big-bank lender</strong> like Chase or Wells Fargo if you already have a relationship — they often have meaningful relationship discounts.</li>
            <li><strong>A local credit union or community bank.</strong> Often beats the national rates in their geography, especially on closing costs.</li>
          </ul>

          <p>
            <strong>The 14-day rule:</strong> FICO scoring deduplicates mortgage inquiries within
            14 days as a single inquiry. Submit all three within that window and your credit score
            takes one hit, not three.
          </p>

          <p>
            Compare offers on <strong>APR, not rate.</strong> APR includes lender fees; the headline
            rate often does not. A 6.50% rate with $4,000 in lender fees may have a higher APR
            than a 6.65% rate with $0 fees.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5–7 — Offer, lock, appraise</h2>

          <p>
            <strong>The pre-approval letter</strong> is your offer&apos;s credibility signal. Most
            sellers in competitive markets won&apos;t consider an offer without one.
          </p>

          <p>
            <strong>Once your offer is accepted,</strong> immediately lock the rate. A 30-day lock is
            typically free; 60-day locks cost ~0.25 points; longer locks cost more. Match the lock to
            your closing timeline plus a small buffer.
          </p>

          <p>
            <strong>The lender orders the appraisal</strong> (you pay for it — typically $500–$700).
            If the appraisal comes in below the contract price, you have leverage to renegotiate.
            Order your own home inspection independently — that&apos;s your only window to catch
            structural issues before money moves.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 8 — Clear the underwriting conditions (don&apos;t make any big purchases)</h2>

          <p>
            Underwriters typically issue a <strong>conditional approval</strong> with a list of
            additional documents and clarifications. Respond inside 24 hours every time.
          </p>

          <p>
            <strong>Critical: don&apos;t open new credit or make big purchases during underwriting.</strong>{" "}
            A new car loan, a furniture-store credit card, or a 401(k) loan can change your DTI
            enough to fail final approval. Even a large transfer between your own accounts can
            trigger source-of-funds questions. Stay financially boring until the keys are in your
            hand.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 9 — Close</h2>

          <p>
            A final walkthrough confirms the house is in the condition the contract specified.
            Closing itself takes 1–2 hours of signing — about 60+ pages. You wire the down payment
            + closing costs (typically 2–5% of the home price) the morning of, and walk out with
            the keys.
          </p>

          <p>
            <strong>Closing-cost honesty:</strong> on a $400K home, expect $8,000–$15,000 in
            closing costs on top of the down payment. Sellers may credit some of these in a buyer&apos;s
            market.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The five mistakes that delay or sink closings</h2>

          <ul>
            <li><strong>Sitting on document requests.</strong> Underwriters work in batches. A 48-hour delay on your end becomes a 5-day delay on theirs.</li>
            <li><strong>Buying a car during underwriting.</strong> Adds a fixed payment to your DTI, can move you out of approval. Wait until after closing.</li>
            <li><strong>Big undocumented bank deposits.</strong> Anything irregular triggers a source-of-funds letter. Don&apos;t deposit cash; don&apos;t cycle large amounts.</li>
            <li><strong>Letting the home inspection be cosmetic.</strong> Hire a real, licensed inspector. Pay $500 to learn the roof has 2 years left rather than discovering it at year 4.</li>
            <li><strong>Not reading the Loan Estimate vs. Closing Disclosure.</strong> The CD must match the LE within strict tolerances. If it doesn&apos;t, push back — those overcharges are recoverable.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            A mortgage in 2026 is a process, not a mystery. The buyers who get the lowest rate and
            the cleanest close are the ones who <strong>shop three lenders in 14 days</strong>,
            answer document requests in 24 hours, and keep their financial profile frozen until the
            keys are handed over. Everything else is detail.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/best-hysa-2026">Best high-yield savings accounts 2026</Link></li>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget using the 50/30/20 rule</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
