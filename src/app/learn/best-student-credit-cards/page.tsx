import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-student-credit-cards";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best student credit cards (2026)";
const description =
  "An honest 2026 roundup of student credit cards. Discover it Student Cash Back is the best all-around pick — 5% rotating categories, no fee, no credit history required, Cashback Match in year one. Plus alternatives, the CARD Act rules, and how students should actually use a first card.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I need credit history to get a student card?",
    a: "No — student cards are explicitly designed for first-time borrowers. Issuers approve based on enrollment status (must be in school) and proof of independent income or a cosigner. Discover, Capital One, and Chase all have no-credit-history student cards.",
  },
  {
    q: "What's the difference between a student card and a regular starter card?",
    a: "Student cards have softer underwriting, school-affiliated rewards, and often lower credit limits. They're easier to get approved for with no credit history but the rewards are usually slightly worse than a comparable non-student starter card. If you can get approved for both, a regular cashback card often wins.",
  },
  {
    q: "Does the CARD Act apply to me?",
    a: "Yes — the Credit CARD Act of 2009 requires applicants under 21 to either prove independent income or have a cosigner (parent/guardian). Most student-card applications are now processed with a 'proof of income' field instead of a cosigner; part-time job income usually qualifies.",
  },
  {
    q: "Should I pick a card with rewards or one without?",
    a: "With rewards — the no-rewards student cards aren't materially easier to get approved for, and you leave free money on the table. The Discover it Student Cash Back and Chase Freedom Rise both have $0 annual fees and real rewards.",
  },
  {
    q: "How fast can a student card raise my credit score?",
    a: "Opening the card adds an account (small immediate hit from new account / inquiry, ~5 points). Then on-time payments and low utilization build the score steadily — most students see 700+ within 12 months of disciplined use. The biggest mistake is missing a payment, which can drop scores 60–100 points and take years to fully recover.",
  },
  {
    q: "What happens to my student card after I graduate?",
    a: "Most student cards auto-graduate to their non-student equivalent (Discover it Student Cash Back → Discover it Cash Back; Chase Freedom Rise → Chase Freedom Unlimited). Same account number, same credit history, slightly better terms. No new application needed.",
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
          subtitle="The right first card builds credit fast without charging fees. The Discover it Student Cash Back is the best 2026 pick for most students."
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
            <strong>A student credit card used right is the single fastest way to build a 700+
            credit score before graduation.</strong> Used wrong (carrying a balance at 25%+ APR),
            it can dig a hole you'll spend years climbing out of.
          </p>

          <p>
            The 2026 winners are clear: <strong>Discover it Student Cash Back</strong> for the best
            rewards, <strong>Chase Freedom Rise</strong> for the strongest issuer relationship,
            <strong> Capital One SavorOne Student</strong> for dining and entertainment heavy
            spenders.
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
                <tr><td className="py-3 pr-4 font-semibold">Discover it Student Cash Back</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">5% rotating categories, Cashback Match year 1, no credit history needed</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Chase Freedom Rise</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">1.5% flat, Chase relationship for future Sapphire</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital One SavorOne Student</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">3% dining + entertainment + streaming + groceries</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Discover it Student Chrome</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">2% gas + restaurants (up to $1K/qtr), Cashback Match</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Bank of America Travel Rewards for Students</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">1.5× points on everything, no foreign transaction fee</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Discover it Student Cash Back — the best all-around pick</h2>

          <p>
            <strong>The most rewarding student card available.</strong> 5% cashback on rotating
            quarterly categories (groceries, gas, restaurants, Amazon, etc.) up to $1,500 in
            combined purchases per quarter when activated; 1% on everything else.
          </p>

          <p>
            <strong>The killer feature:</strong> Discover Cashback Match — they double all cashback
            earned in the first year. A student earning $300 in rewards their first year gets a
            total of $600 back. Functionally a $300 sign-up bonus that requires no minimum spend.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>No credit history required for approval.</li>
            <li>Accepts proof of part-time income on the application.</li>
            <li>Reports to all three bureaus.</li>
            <li>Auto-graduates to Discover it Cash Back after graduation.</li>
            <li>No foreign transaction fee.</li>
          </ul>

          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              See Discover student card →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Chase Freedom Rise — the long-term Chase play</h2>

          <p>
            <strong>1.5% flat cashback, $0 fee, no credit history required.</strong> Slightly worse
            rewards than the Discover, but the strategic advantage is huge: starting a relationship
            with Chase now positions you for the Chase Sapphire Preferred (the gold-standard travel
            card) later.
          </p>

          <p>
            Chase prefers existing customers when approving the Sapphire and other premium cards.
            Two years of Freedom Rise history dramatically improves approval odds for higher-tier
            cards once you have income.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>1.5% cashback on everything (no caps).</li>
            <li>$25 statement credit after first purchase.</li>
            <li>Available to students AND non-students with no credit history.</li>
            <li>Auto-considers credit-limit increase after 6 months of on-time payments.</li>
          </ul>

          <p>
            For the long-term travel-card path, see our{" "}
            <Link href="/learn/chase-sapphire-preferred-review">Chase Sapphire Preferred review</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Capital One SavorOne Student — the dining + entertainment pick</h2>

          <p>
            <strong>3% cashback on dining, entertainment, streaming services, and grocery stores;
            1% elsewhere.</strong> If you spend heavily in those categories (very common in
            college), the effective return often beats the Discover's rotating 5%.
          </p>

          <ul>
            <li>$0 annual fee.</li>
            <li>3% dining, entertainment, popular streaming, groceries.</li>
            <li>10% on Uber & Uber Eats (through Nov 14, 2026).</li>
            <li>5% on hotels and rental cars booked through Capital One Travel.</li>
            <li>No foreign transaction fee.</li>
          </ul>

          <p>
            <AffiliateButton partner="capital-one" source={slug}>
              See Capital One student cards →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually use the card to build credit</h2>

          <ol>
            <li><strong>Set up auto-pay for the statement balance</strong> — eliminates late-payment risk.</li>
            <li><strong>Pay before the statement closes</strong> — keeps reported utilization low. Aim for under 10%.</li>
            <li><strong>Don't max out the card</strong> — even paying in full hurts your score if the bureaus see a maxed balance.</li>
            <li><strong>Make at least one small purchase monthly</strong> — keeps the account active.</li>
            <li><strong>Only use the card for things you'd buy anyway</strong> — coffee, gas, occasional restaurant. Not "investments" or impulse buys.</li>
            <li><strong>Check Credit Karma monthly</strong> to track score progress and catch errors.</li>
          </ol>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Track your score on Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The income / cosigner question (CARD Act)</h2>

          <p>
            <strong>The 2009 Credit CARD Act requires applicants under 21 to either prove
            independent income or have a parent/guardian cosigner.</strong> Most issuers prefer the
            income path because cosigning ties their parent to the debt — administratively messier.
          </p>

          <p>
            <strong>What counts as income on the application:</strong>
          </p>

          <ul>
            <li>Part-time job (~$3K+/year usually approves)</li>
            <li>Work-study earnings</li>
            <li>Regular cash from freelance or gig work</li>
            <li>Scholarships and grants designated for personal expenses (NOT tuition-only scholarships)</li>
            <li>Regular allowance or remittance from family that you can reliably access</li>
          </ul>

          <p>
            <strong>Don't lie about income.</strong> Inaccurate application data is grounds for
            account closure later and can affect future credit applications.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The mistakes that wreck student credit</h2>

          <ul>
            <li><strong>Carrying a balance at 25%+ APR.</strong> Even $1,000 carried at 26% APR costs ~$260/year in interest.</li>
            <li><strong>Missing a payment.</strong> Drops score 60–100 points; stays on report 7 years.</li>
            <li><strong>Letting friends use the card.</strong> Same liability, no benefit.</li>
            <li><strong>Closing the card after graduation.</strong> Removes the limit from your utilization pool. Keep it open even if you stop using it.</li>
            <li><strong>Opening 3 cards in one semester.</strong> Multiple inquiries + low average account age. Wait 6+ months between cards.</li>
            <li><strong>Applying for store credit cards at registers</strong> for one-time discounts. High APRs, hurt your overall profile.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The Discover it Student Cash Back is the right pick for most
            students.</strong> Best rewards, best year-one match, and the cleanest path to a 700+
            credit score by graduation.
          </p>

          <p>
            If you're confident you'll want a travel rewards card later (Chase Sapphire Preferred,
            Reserve, or Ink Business Preferred), <strong>Chase Freedom Rise</strong> builds the
            issuer relationship that makes those future approvals much easier.
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
