import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "personal-loan-vs-credit-card";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Personal loan vs. credit card: Which should you use?";
const description =
  "Personal loans typically run 11–20% APR with a fixed payment over 2–7 years. Credit cards run 22–26% APR with revolving terms. For a one-time large expense or to consolidate high-rate debt, a personal loan almost always wins. For ongoing small spend, the card is right. Here's the decision framework.";
const PUBLISHED = "2026-06-01";
const UPDATED = "2026-06-16";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "When is a personal loan clearly better?",
    a: "Three cases: (1) one-time large expense ($5K+) you'll pay over 2+ years; (2) consolidating credit card debt at 22%+ APR into a 10–15% personal loan; (3) you need predictable fixed monthly payments. The lower rate and fixed timeline make the math obvious.",
  },
  {
    q: "When is a credit card better?",
    a: "Two cases: (1) ongoing small purchases you'll pay in full each month (cards are free + earn rewards); (2) a planned large purchase you can pay off within a 0% intro APR window (typically 12–21 months). Outside those, cards are an expensive way to borrow.",
  },
  {
    q: "Does a personal loan hurt my credit score?",
    a: "Short-term: small hit from the hard inquiry (~5 points) plus a small hit from the new account lowering average account age. Long-term: often a net positive — adding an installment account improves your credit mix (10% of FICO), and using a personal loan to pay off credit cards dramatically lowers revolving utilization (30% of FICO).",
  },
  {
    q: "Can I get a personal loan with bad credit?",
    a: "Yes, but the rates are punitive — 25–36% APR with scores under 640. At those rates the loan is barely better than the cards you're trying to refinance. If your score is under 640, prioritize raising it first (pay down utilization, become an authorized user, fix any reporting errors) before applying.",
  },
  {
    q: "How fast does a personal loan fund?",
    a: "Online lenders (SoFi, LightStream, Marcus) typically fund in 1–3 business days from approval. Some same-day. Traditional banks take 5–10 business days. Pre-qualification with a soft pull is free at most online lenders — useful for shopping rates without burning credit.",
  },
  {
    q: "What about a 0% intro APR credit card instead of a personal loan?",
    a: "Genuinely competitive for under $5K of debt you can clear inside the intro window (12–21 months). Two big risks: (1) if you don't pay it off in the window, the back rate is typically 22–26%; (2) balance transfer fees of 3–5% effectively give the card a ~3–5% APR for the intro period. Run both math options.",
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
          updatedAt: UPDATED,
          author: "Jahanzeb Nawaz",
        })}
      />
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Borrow smart" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The decision is mostly about timing — paid-off-this-month belongs on a card; paid-off-over-years belongs in a loan."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={UPDATED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Personal loans and credit cards aren't competitors — they're tools for
            different jobs.</strong> Personal loans are installment debt with fixed rates, fixed
            terms, and lower APRs. Credit cards are revolving debt with variable rates, no fixed
            payoff date, and higher APRs (but with grace periods and rewards if you pay in full).
          </p>

          <p>
            Pick the wrong tool and you'll pay 2–3× as much interest as you needed to.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Side-by-side comparison</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Personal loan</th>
                  <th className="py-3 pr-4">Credit card</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">APR (2026)</td><td className="py-3 pr-4">11–20% (good credit)</td><td className="py-3 pr-4">22–26%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Rate type</td><td className="py-3 pr-4">Fixed</td><td className="py-3 pr-4">Variable</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Term</td><td className="py-3 pr-4">2–7 years, fixed</td><td className="py-3 pr-4">Revolving, no end date</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Loan amount</td><td className="py-3 pr-4">$1K–$100K</td><td className="py-3 pr-4">Up to credit limit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Origination fee</td><td className="py-3 pr-4">0–8% (varies by lender)</td><td className="py-3 pr-4">None</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Grace period</td><td className="py-3 pr-4">None — interest from day 1</td><td className="py-3 pr-4">~21 days if paid in full</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Rewards</td><td className="py-3 pr-4">None</td><td className="py-3 pr-4">1–5% cashback / points</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Score impact (revolving util.)</td><td className="py-3 pr-4">Lowers it</td><td className="py-3 pr-4">Raises it when balance grows</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">Large one-time, fixed-payoff</td><td className="py-3 pr-4">Daily spend paid in full</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The math: $10,000 of debt</h2>

          <p>
            Say you have $10,000 you need to borrow and pay back over 3 years.
          </p>

          <ul>
            <li><strong>Credit card at 24% APR, minimum payments:</strong> ~$14,400 lifetime interest. Payoff period ~17 years.</li>
            <li><strong>Credit card at 24% APR, $400/month fixed:</strong> ~$3,400 interest. Payoff period ~34 months.</li>
            <li><strong>Personal loan at 13% APR, 36-month fixed:</strong> ~$2,150 interest. Payoff in exactly 36 months.</li>
            <li><strong>Personal loan at 9% APR, 36-month fixed (best tier):</strong> ~$1,450 interest. Payoff in 36 months.</li>
          </ul>

          <p>
            <strong>The personal loan saves $1,000–$2,000 over the cheaper card scenario, and
            ~$12,000 over the minimum-payment trap.</strong> Same debt, very different outcomes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The decision framework</h2>

          <p>
            <strong>Use a credit card when:</strong>
          </p>

          <ul>
            <li>You'll pay the balance in full this month (grace period = free credit + rewards).</li>
            <li>You can clear the balance inside a 0% intro APR window (12–21 months).</li>
            <li>You need flexibility — variable monthly spend that won't snowball.</li>
            <li>You want purchase protections (chargebacks, extended warranty, travel insurance).</li>
          </ul>

          <p>
            <strong>Use a personal loan when:</strong>
          </p>

          <ul>
            <li>You're consolidating high-APR credit card debt (the most common use case).</li>
            <li>You're funding a one-time large expense — home repair, medical bill, wedding, moving.</li>
            <li>You want a fixed monthly payment and clear payoff date.</li>
            <li>You need a faster path to a lower revolving utilization (mortgage prep).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The debt-consolidation play</h2>

          <p>
            <strong>This is where personal loans shine.</strong> Pulling $15K of revolving card debt
            at 25% APR into a 12% personal loan does three things at once:
          </p>

          <ol>
            <li><strong>Drops your interest cost by half</strong> in dollar terms.</li>
            <li><strong>Forces a payoff date</strong> instead of indefinite minimum-payment grind.</li>
            <li><strong>Typically lifts your FICO score 10–40 points</strong> as revolving utilization plummets (installment debt is weighted much more gently). Experian and FICO both note that the exact lift depends on starting utilization and credit mix, but a swing of this size is common when utilization drops from above 30% to near 0%.</li>
          </ol>

          <p>
            The only trap: don't run the cards back up after consolidating. The discipline failure
            doubles your debt and the loan payment is still there.
          </p>

          <p>
            <AffiliateButton partner="sofi-loans" source={slug}>
              Check SoFi loan rates →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="lightstream" source={slug} variant="secondary">LightStream</AffiliateButton>
          </p>

          <p>
            Full lender breakdown in our{" "}
            <Link href="/learn/best-personal-loans-2026">best personal loans 2026</Link> guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 0% intro APR card alternative</h2>

          <p>
            For under $5K of debt that you can clear in 12–18 months, a balance transfer card with a
            0% intro APR is often cheaper than a personal loan. The math:
          </p>

          <ul>
            <li><strong>$4,000 transfer, 5% fee, 18-month 0% intro:</strong> $200 fee, $0 interest if paid in full → effective 4–6% APR.</li>
            <li><strong>$4,000 personal loan, 13% APR, 18 months:</strong> ~$420 interest.</li>
          </ul>

          <p>
            <strong>Risk:</strong> if you don't pay the card off inside the intro window, the back
            rate is typically 22–26%. Many people who choose this route end up worse off because
            they let the timer expire. The personal loan removes that risk in exchange for a known
            higher cost.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to shop</h2>

          <p>
            <strong>Always pre-qualify with a soft pull first.</strong> Most online lenders let you
            see your real rate without affecting your credit. Run 3+ quotes within a 14-day window
            for the hard-pull stage so FICO bundles them as a single inquiry.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              See pre-qualified offers at Credit Karma →
            </AffiliateButton>
          </p>

          <p>
            Or go direct:{" "}
            <AffiliateButton partner="sofi-loans" source={slug} variant="secondary">SoFi</AffiliateButton>{" "}
            <AffiliateButton partner="lightstream" source={slug} variant="secondary">LightStream</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Credit cards are for spending; personal loans are for borrowing.</strong> If
            you're carrying a balance over multiple months at a card's standard APR, you've turned
            the card into a high-cost personal loan — at roughly double the rate.
          </p>

          <p>
            For most people consolidating $5K+ of credit card debt, the personal loan is the right
            move. For paying off a card you can clear in 6 months, the math is closer and either
            tool works.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Debt snowball vs. avalanche</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Borrow smart" currentSlug="personal-loan-vs-credit-card" />
      </article>
    </>
  );
}
