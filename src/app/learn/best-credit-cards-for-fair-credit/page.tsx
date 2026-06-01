import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-credit-cards-for-fair-credit";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best credit cards for fair credit (2026)";
const description =
  "Fair credit (580–669 FICO) means you're past secured-card territory but not yet at premium-rewards eligibility. The right card for this tier is one that approves you, reports to all three bureaus, and graduates to better terms as your score rises. Here are the top picks.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "What's considered 'fair' credit?",
    a: "FICO scores of 580–669. Below 580 is 'poor' and usually requires a secured card. 670–739 is 'good' and unlocks most mainstream rewards cards. The fair tier is the awkward middle — you can get approved for unsecured cards but the rewards are limited and the APRs are high (often 28–30%).",
  },
  {
    q: "Should I get a card or just wait until my score improves?",
    a: "Get a card, but use it carefully. Adding an account with on-time payments and low utilization actively raises your score over 6–12 months. Waiting passively does nothing. The card is the tool that moves you to the next tier.",
  },
  {
    q: "Will I get rejected even at this tier?",
    a: "Possible — fair credit means above-average rejection risk. The fix is pre-qualification: tools like Credit Karma's matching tool and most major issuers' own pre-qualification pages use a soft pull to tell you your likely approval odds before you submit a hard-pull application.",
  },
  {
    q: "Should I get a card that requires a security deposit?",
    a: "If you can be approved for an unsecured fair-credit card, take that. Unsecured cards keep your cash in your account. But a secured card is a guaranteed approval and an OK fallback if you keep getting denied — see our build credit from scratch guide for the full breakdown.",
  },
  {
    q: "How fast can I move from fair to good credit?",
    a: "Realistic: 6–18 months with disciplined use. Pay every bill on time, keep utilization under 10% before statement close, don't open multiple cards in the same 6 months. The biggest fast-mover is utilization (30% of FICO) — paying down balances can lift you 20–60 points in a single billing cycle.",
  },
  {
    q: "What APR should I expect?",
    a: "26–30% is normal for fair credit. The premium picks (Sapphire, Amex Gold) sit at 21–28% for users with 700+. The math implication: never carry a balance on a fair-credit card. It's an expensive way to borrow.",
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
          subtitle="The fair-credit tier (580–669 FICO) is a transition zone. The right card approves you, builds your file, and graduates to better terms within a year."
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
            <strong>Fair credit (580–669 FICO) means you've started building a credit file but
            haven't reached mainstream rewards territory yet.</strong> The right card for this tier
            isn't about points or perks — it's about getting approved without a deposit, reporting
            to all three bureaus, and graduating to better terms as your score climbs.
          </p>

          <p>
            Used right, a fair-credit card moves you to good credit in 6–18 months. Used wrong
            (carrying a balance at 28% APR), it can make things worse.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The top picks</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Annual fee</th>
                  <th className="py-3 pr-4">Why it fits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Capital One Quicksilver (for Fair)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">1.5% on everything, often approves fair credit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital One Platinum</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">No rewards, but low approval bar; graduates to Quicksilver</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Discover it Secured</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">If unsecured denials hit; 2% gas/restaurants, graduates after 7 months</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Petal 2 "Cash Back, No Fees"</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">Uses cash flow data; good for thin-file fair credit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mission Lane Visa</td><td className="py-3 pr-4">$0–$59</td><td className="py-3 pr-4">Easy approval; watch for fees on lower tiers</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Capital One Quicksilver (for Fair Credit)</h2>

          <p>
            <strong>The best mainstream rewards card available at the fair-credit tier.</strong> $0
            annual fee, 1.5% flat cashback on everything, no foreign transaction fee. Capital One's
            fair-credit variant has higher approval rates than the standard Quicksilver while
            offering the same 1.5% structure.
          </p>

          <ul>
            <li><strong>1.5% cashback</strong> on every purchase, no caps.</li>
            <li><strong>$0 annual fee</strong>, $0 foreign transaction fee.</li>
            <li>Pre-qualification available with soft pull at capitalone.com.</li>
            <li>Reports to all three bureaus monthly — builds credit fast with on-time payments.</li>
          </ul>

          <p>
            <AffiliateButton partner="capital-one" source={slug}>
              See Capital One cards →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Capital One Platinum — the no-frills approval card</h2>

          <p>
            <strong>If pre-qualification for the Quicksilver shows low odds, try the
            Platinum.</strong> Same issuer, lower approval bar, but no rewards. Many users report
            graduating from Platinum to Quicksilver after 6–12 months of on-time payments and
            usage.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>No rewards.</li>
            <li>Easier approval than Quicksilver.</li>
            <li>Auto credit-line increase reviews after 6 months.</li>
          </ul>

          <p>
            <strong>Strategy:</strong> if you get the Platinum, ask for a product change to
            Quicksilver after 12 months of on-time payments. Same account, no new hard pull,
            instantly upgraded card.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Discover it Secured — the secured backup</h2>

          <p>
            <strong>If unsecured denials keep hitting, the Discover it Secured is the best secured
            fallback.</strong> Requires a $200+ refundable deposit equal to your credit limit, but
            earns real cashback (2% at gas + restaurants up to $1K/quarter) and graduates to an
            unsecured card after ~7 months of on-time payments.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>2% cashback at gas stations and restaurants (capped at $1K/quarter), 1% elsewhere.</li>
            <li>Cashback Match — Discover doubles all cashback earned in your first year.</li>
            <li>Graduates to Discover it Cash Back (unsecured) after ~7 months.</li>
            <li>Deposit refunded when account is closed or graduated.</li>
          </ul>

          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              Apply for Discover it Secured →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Petal 2 — the alternative-data card</h2>

          <p>
            <strong>Petal uses your bank account cash-flow data instead of (or in addition to) your
            FICO score for approval decisions.</strong> Good fit if your credit file is thin or has
            isolated negatives but your cash flow is healthy.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>1–1.5% cashback (up to 10% with select merchants).</li>
            <li>No foreign transaction fee.</li>
            <li>Credit limits typically $500–$10K based on cash flow review.</li>
          </ul>

          <p>
            <strong>Notable:</strong> Petal can approve users who'd be declined by a FICO-only
            issuer if their bank statements show consistent income and low overdraft activity.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Cards to avoid at the fair-credit tier</h2>

          <p>
            <strong>Watch out for "fair credit" cards with predatory fee structures.</strong> Common
            traps:
          </p>

          <ul>
            <li><strong>Annual fees of $75+</strong> on a card with no rewards and a low credit limit.</li>
            <li><strong>"Account opening fees" or "program fees"</strong> charged as soon as the card is issued — sometimes 25%+ of the credit limit.</li>
            <li><strong>Monthly maintenance fees</strong> ($6–$10/month) on top of the annual fee.</li>
            <li><strong>"Authorized user upgrade" fees</strong> for adding household members.</li>
          </ul>

          <p>
            <strong>Rule:</strong> never accept a $0 rewards card that costs more than $50/year
            total. The mainstream issuers (Capital One, Discover, Petal) offer free options to fair
            credit.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to use the card to graduate to good credit</h2>

          <ol>
            <li><strong>Pay on time every month</strong> — payment history is 35% of FICO. One late payment can drop your score 60–100 points.</li>
            <li><strong>Pay before the statement closes</strong> — keeps reported utilization low. Aim for under 10%.</li>
            <li><strong>Don't max out the card.</strong> Even paid in full by the due date, a maxed card reports a high utilization to bureaus.</li>
            <li><strong>Use it for at least one small transaction monthly</strong> to stay active.</li>
            <li><strong>Don't apply for 3 cards at once.</strong> Each hard pull is ~5 points. Space them 6+ months apart.</li>
            <li><strong>Check Credit Karma monthly</strong> to track score progress and catch reporting errors.</li>
          </ol>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Track your score on Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When to apply for your next card</h2>

          <p>
            <strong>Wait until your score crosses 670 (good credit).</strong> Below 670, mainstream
            rewards cards usually deny. At 700+, you can pre-qualify for cards like the Capital One
            SavorOne (3% dining + groceries, $0 fee), Discover it Cash Back (5% rotating categories,
            $0 fee), and eventually the Chase Sapphire Preferred at 730+.
          </p>

          <p>
            See our{" "}
            <Link href="/learn/best-credit-cards-for-beginners">best credit cards for beginners</Link>{" "}
            for the next-tier picks and our{" "}
            <Link href="/learn/best-cashback-credit-cards-2026">best cashback credit cards 2026</Link>{" "}
            for the optimization stage.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The Capital One Quicksilver (for Fair) is the right pick for most
            fair-credit applicants in 2026.</strong> $0 fee, real rewards, predictable issuer, and
            a clean upgrade path. If you get denied, try the Capital One Platinum — same issuer,
            easier approval, same graduation path.
          </p>

          <p>
            If both deny, the Discover it Secured is the secured backup with the cleanest path back
            to unsecured cards.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/how-credit-cards-work">How credit cards work</Link></li>
            <li><Link href="/learn/best-cashback-credit-cards-2026">Best cashback credit cards 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
