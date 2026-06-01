import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "credit-utilization-ratio";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Credit utilization ratio: What it is and how to lower it";
const description =
  "Credit utilization is the second-biggest factor in your FICO score (30% of the weight). Under 30% is the rule of thumb; under 10% is the optimization. Here's how to calculate it, lower it fast, and avoid the timing mistakes that cost people 20–60 points.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "What is credit utilization?",
    a: "The percentage of your available revolving credit that you're using. If you have $10,000 in total credit card limits and a $2,500 balance, your utilization is 25%. It's calculated both per-card and across all cards. FICO weights utilization at 30% of your score — second only to payment history.",
  },
  {
    q: "What's a good utilization ratio?",
    a: "Under 30% is the safe rule of thumb. Under 10% is where top scores live (760+). 0% reported isn't ideal either — FICO likes to see some activity. The sweet spot for most optimizers: small balance under 9% reported, paid in full after the statement closes.",
  },
  {
    q: "Why did my score drop even though I pay in full?",
    a: "Because the credit bureaus see whatever balance was on your last statement — not your post-payment balance. If your card statement closes on the 15th with a $4,000 balance and your limit is $5,000, FICO sees 80% utilization that month even if you pay it off on the 16th. Pay before the statement closes, not before the due date.",
  },
  {
    q: "How fast can lowering utilization raise my score?",
    a: "Fast — utilization has no memory in the FICO model. Once a lower balance gets reported (typically within 30–45 days of paying down), your score updates on the next pull. People routinely see 20–60 point jumps in 6 weeks just by paying balances below 9% before statement close.",
  },
  {
    q: "Does closing a card hurt utilization?",
    a: "Yes — closing a card removes its limit from your total available credit, which mechanically raises your utilization on remaining cards. Unless the card has a fee that doesn't earn its keep, keep old no-fee cards open and use them once every few months to prevent issuer-driven closures.",
  },
  {
    q: "Should I ask for a credit limit increase to lower utilization?",
    a: "Yes, when timed well — most issuers do a soft pull for limit increases, which doesn't hurt your score, and a higher limit instantly lowers utilization without changing your spending. Avoid requesting if your credit profile is fresh (under 12 months) or if you have late payments in the last 6 months — those trigger hard pulls or denials.",
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
          subtitle="The single fastest score lever you can pull — utilization has no memory, so the next reported balance fully overwrites the prior one."
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
            <strong>Credit utilization is 30% of your FICO score</strong> — second only to payment
            history (35%). And unlike payment history, which carries a 7-year memory of mistakes,
            utilization resets every month. That makes it the single fastest score lever you can
            pull.
          </p>

          <p>
            This guide covers the math, the timing trick most people get wrong, and the specific
            moves that can raise scores 20–60 points in a few weeks.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math</h2>

          <p>
            <strong>Utilization = balance ÷ credit limit</strong>, expressed as a percentage. FICO
            looks at it two ways:
          </p>

          <ul>
            <li><strong>Per-card utilization</strong> — each card's balance vs. that card's limit.</li>
            <li><strong>Aggregate utilization</strong> — total balance across all cards vs. total limits.</li>
          </ul>

          <p>
            <strong>Both matter.</strong> A single maxed-out card can drag your score even if your
            aggregate is fine. Conversely, an aggregate above 30% hurts even if no single card is
            maxed.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Utilization band</th>
                  <th className="py-3 pr-4">FICO impact</th>
                  <th className="py-3 pr-4">Who lives here</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">0%</td><td className="py-3 pr-4">Slightly worse than 1–9%</td><td className="py-3 pr-4">Cards rarely used; FICO wants to see activity</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">1–9%</td><td className="py-3 pr-4">Best</td><td className="py-3 pr-4">Optimizers; top scores (760+)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">10–29%</td><td className="py-3 pr-4">Good</td><td className="py-3 pr-4">Most score-aware people</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">30–49%</td><td className="py-3 pr-4">Score drag begins</td><td className="py-3 pr-4">Casual users; ~20-point hit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">50–74%</td><td className="py-3 pr-4">Material hit</td><td className="py-3 pr-4">Carrying balances; ~40-point hit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">75–99%</td><td className="py-3 pr-4">Heavy hit</td><td className="py-3 pr-4">Distressed borrowers; 60–100 points</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">100%+ (maxed)</td><td className="py-3 pr-4">Severe</td><td className="py-3 pr-4">Maxed; 80–120 points and lender red flag</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Point estimates are rough — exact impact varies by your full profile. But the shape
            holds: <strong>30% is the public threshold, 10% is the real one</strong>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The timing trick most people miss</h2>

          <p>
            <strong>The credit bureaus see what's on your statement — not what's on the card
            today.</strong> Your card has two key dates:
          </p>

          <ul>
            <li><strong>Statement close date</strong> — when the issuer takes a snapshot of your balance and reports it to the bureaus.</li>
            <li><strong>Payment due date</strong> — typically ~21 days after statement close.</li>
          </ul>

          <p>
            If you pay in full by the due date, you avoid interest — but the snapshot already
            happened. <strong>To control reported utilization, pay before the statement closes</strong>,
            not before the due date.
          </p>

          <p>
            <strong>Example:</strong> $5,000 limit, statement closes on the 15th. If you spent
            $4,000 in the cycle and pay the full $4,000 on the 14th, the bureaus see $0 (or whatever
            posts after that date — usually small). 80% utilization becomes ~0% on your credit
            report. Same money out of pocket; ~40-point swing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Six ways to lower your utilization</h2>

          <ol>
            <li><strong>Pay balances before the statement closes</strong>, not just before the due date. Set a reminder for ~2 days before close.</li>
            <li><strong>Ask for credit limit increases.</strong> Most major issuers (Chase, Capital One, Discover, Amex) let you request via app — typically a soft pull. A higher limit on the same balance lowers utilization mechanically.</li>
            <li><strong>Spread spending across cards.</strong> If two cards have $5K limits each and you typically run one to $4K, split the spend so each shows $2K (40% on one becomes 20% on each).</li>
            <li><strong>Don't close old no-fee cards.</strong> Closing removes the limit from your aggregate — utilization on remaining cards rises.</li>
            <li><strong>Open a new card if you can absorb the inquiry.</strong> A new card adds limit; the hard-pull cost is ~5 points and recovers in 3–6 months.</li>
            <li><strong>Use a balance transfer or personal loan to refinance high-utilization cards.</strong> Once the balance moves to an installment loan, it's no longer revolving — it stops counting toward credit-card utilization.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>The personal-loan trick for stuck utilization</h2>

          <p>
            <strong>Moving $10,000 of credit card debt to a personal loan can lift FICO scores
            20–40 points</strong> almost overnight. Why: revolving utilization drops to ~0%, while
            installment debt is weighted much more gently. You don't need a lower rate (though you
            usually get one — personal loans run 10–18% vs. card APR 22–28%); the score effect
            alone often justifies the move for someone planning to apply for a mortgage soon.
          </p>

          <p>
            <AffiliateButton partner="sofi-loans" source={slug}>
              Check SoFi personal loan rates →
            </AffiliateButton>
          </p>

          <p>
            More options in our{" "}
            <Link href="/learn/best-personal-loans-2026">best personal loans 2026</Link> guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to track your utilization (free)</h2>

          <p>
            <strong>Credit Karma</strong> pulls your reports from TransUnion and Equifax for free
            and shows current utilization per card. Doesn't include Experian, but the picture is
            close enough for monitoring.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Open Credit Karma free →
            </AffiliateButton>
          </p>

          <p>
            You can also pull all three bureau reports for free weekly at{" "}
            <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</a>{" "}
            (the official federally-mandated source — no signup, no card needed).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>"My score dropped — I paid in full!"</strong> The statement closed before the payment posted. Pay before the close date next cycle.</li>
            <li><strong>Closing an old card to "tidy up."</strong> Removes the limit and shortens average account age.</li>
            <li><strong>Maxing one card while keeping others at 0.</strong> Per-card utilization matters; a 95%-used card hurts even if aggregate is 30%.</li>
            <li><strong>Requesting a limit increase right before a mortgage.</strong> Some issuers do a hard pull; new inquiries hurt mortgage underwriting. Time it 6+ months out.</li>
            <li><strong>Cash advances.</strong> They count toward utilization, often have lower sub-limits, and accrue interest from day one.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Utilization is the only major credit factor you can fix in a single billing
            cycle.</strong> Pay balances before the statement closes, ask for limit increases on
            cards you've held 12+ months, and keep old no-fee cards open. For most people, getting
            aggregate utilization below 10% is worth 20–60 FICO points — often the difference
            between a denied mortgage and an approved one.
          </p>

          <p>
            Pair this with the broader credit factor breakdown in our{" "}
            <Link href="/learn/what-affects-your-credit-score">credit score factors guide</Link>{" "}
            and the{" "}
            <Link href="/learn/how-to-build-credit-from-scratch">build credit from scratch</Link>{" "}
            playbook.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
