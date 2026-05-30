import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-cashback-credit-cards-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best cashback credit cards 2026";
const description =
  "A practical pick list of the best cashback credit cards for 2026 — flat-rate, rotating-category, and tiered cards — with the math on which one earns you the most based on how you actually spend.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "What is the best cashback credit card overall?",
    a: "There is no single 'best' — the right card depends on how you spend. A flat-rate 2% card like the Citi Double Cash is the simplest winner for most people because every purchase earns the same rate. Heavy grocery and gas spenders earn more with a tiered card, and people willing to track quarterly categories can earn 5% with rotating-category cards like the Discover it. The math in this guide shows which one pays you the most for your specific budget.",
  },
  {
    q: "Are cashback or travel rewards cards better?",
    a: "Cashback is better for most people. Cash never expires, never devalues, and never requires you to plan a trip to use it. Travel cards can deliver a higher cents-per-point value if you book through transfer partners and travel often, but for someone who spends $30,000 a year, a flat 2% cashback card returns $600 in usable money with zero effort.",
  },
  {
    q: "Do cashback rewards count as taxable income?",
    a: "No. The IRS treats cashback and points earned on personal credit card purchases as a rebate on the original purchase, not income. Sign-up bonuses earned without a spending requirement (rare) and rewards on business cards have edge cases, but routine personal-spending cashback is not taxable.",
  },
  {
    q: "Is the annual fee on a cashback card worth it?",
    a: "Almost never for cashback cards. The best cashback cards charge $0 annual fee. Pay an annual fee only if the higher rewards rate clearly clears the fee after one year of your real spending. For most households, a no-fee 2% card beats a $95-a-year card mathematically until spending is very high in a specific bonus category.",
  },
  {
    q: "Will applying for a cashback card hurt my credit score?",
    a: "Each application creates a hard inquiry that typically drops your score 3–5 points for a few months, then fades from your score after 12 months and disappears entirely after 24. Opening a new card also lowers your average age of accounts. Both effects are minor if you don't apply for several cards in a short window. The long-term effect — more available credit, lower utilization — is usually a small positive.",
  },
  {
    q: "Should I close an old card I'm not using?",
    a: "Usually no. Closing a card lowers your total available credit (raising your utilization ratio) and shortens your average account age — two factors that can ding your credit score. Keep the card open, use it once or twice a year for a small purchase, and pay it off. Close it only if it carries an annual fee you can't downgrade away.",
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
          author: "Finbrief Editorial Team",
        })}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Three card types, one decision framework, and the actual math for $30k-, $60k-, and $100k-a-year spenders — so you pick the card that earns the most for your real budget."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Finbrief Editorial Team"
          reviewer="a Certified Financial Planner (CFP®)"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The best cashback card is the one that pays the most on your spending — not
            the one with the flashiest 5% headline.</strong> For most households, that&apos;s a
            simple flat-rate 2% card paired, optionally, with a rotating-category card.
          </p>

          <p>
            <strong>Cashback cards come in three flavors:</strong> flat-rate (same percentage on
            everything), tiered (higher rates in fixed categories like groceries or gas), and
            rotating-category (5% on a category that changes every quarter). The right one depends
            on how much you spend and how much tracking you&apos;ll tolerate.
          </p>

          <p>
            This guide names the top card in each category, walks the math on which combination
            pays you the most, and lists the rules that separate average users from the people who
            quietly earn $1,000+ a year in rebates.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The three types of cashback cards</h2>

          <p>
            <strong>Flat-rate cards</strong> earn the same percentage on every purchase, usually
            1.5% to 2%. The best version pays <strong>2% on everything</strong> with no annual fee
            and no rotating categories to track.
          </p>

          <p>
            <strong>Tiered cards</strong> pay higher rates in fixed categories — common splits are
            3% on groceries, 2% on gas, 1% on everything else. They&apos;re a good fit if your
            spending is concentrated in one or two categories and stays that way year-round.
          </p>

          <p>
            <strong>Rotating-category cards</strong> pay <strong>5%</strong> on a category that
            changes every quarter (gas in Q1, groceries in Q2, restaurants in Q3, etc.), usually
            up to a $1,500 quarterly cap. You have to remember to activate the bonus each quarter
            and to push spending toward the active category.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Our 2026 picks</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Type</th>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Headline rate</th>
                  <th className="py-3 pr-4">Annual fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Flat-rate</td>
                  <td className="py-3 pr-4">Citi Double Cash</td>
                  <td className="py-3 pr-4">2% on everything (1% buy + 1% pay)</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Tiered</td>
                  <td className="py-3 pr-4">Capital One Savor (cash version)</td>
                  <td className="py-3 pr-4">3% dining, groceries, entertainment</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Rotating</td>
                  <td className="py-3 pr-4">Discover it Cash Back</td>
                  <td className="py-3 pr-4">5% rotating (up to $1,500/quarter)</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>All three carry $0 annual fees.</strong> That&apos;s deliberate — cashback math
            rarely justifies an annual fee at typical household spending levels.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Which one earns the most for you?</h2>

          <p>
            <strong>The answer is mostly about spending volume and concentration.</strong> Here&apos;s
            what three real budgets actually earn across our top picks, assuming roughly 30% of
            spending sits in 5% rotating categories you&apos;ll actually buy in.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Annual card spend</th>
                  <th className="py-3 pr-4">Flat 2% only</th>
                  <th className="py-3 pr-4">Flat 2% + rotating 5%</th>
                  <th className="py-3 pr-4">Annual gain from adding the rotator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">$15,000</td>
                  <td className="py-3 pr-4">$300</td>
                  <td className="py-3 pr-4">$345</td>
                  <td className="py-3 pr-4">~$45</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">$30,000</td>
                  <td className="py-3 pr-4">$600</td>
                  <td className="py-3 pr-4">$690</td>
                  <td className="py-3 pr-4">~$90</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">$60,000</td>
                  <td className="py-3 pr-4">$1,200</td>
                  <td className="py-3 pr-4">$1,380</td>
                  <td className="py-3 pr-4">~$180</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The takeaway:</strong> at typical household spending, the flat-rate card does
            80–90% of the work. Adding a rotating-category card squeezes another $50–$200 out of
            the year, if you&apos;ll actually activate each quarter. Three or four cards rarely
            beats one or two.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The flat-rate winner: Citi Double Cash</h2>

          <p>
            <strong>For most people, this is the only card you need.</strong> The Citi Double Cash
            earns <strong>1% when you buy and another 1% when you pay</strong>, for an effective
            <strong> 2% on every purchase</strong>, no categories to track, no caps, no annual fee.
          </p>

          <ul>
            <li><strong>Rate:</strong> 2% effective on all purchases.</li>
            <li><strong>Annual fee:</strong> $0.</li>
            <li><strong>Foreign transaction fee:</strong> 3% (use a no-FTF card for international travel).</li>
            <li><strong>Welcome bonus:</strong> typically $200 after a low spend threshold (offers vary).</li>
            <li><strong>Best for:</strong> the &quot;set it and forget it&quot; spender who doesn&apos;t want to think about categories.</li>
          </ul>

          <p>
            <AffiliateButton partner="citi-double-cash" source={slug}>
              Apply for the Citi Double Cash →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The rotating-category winner: Discover it Cash Back</h2>

          <p>
            <strong>The Discover it is the best companion card</strong> to a 2% flat-rate card. It
            pays <strong>5% on a quarterly rotating category</strong> (capped at $1,500 in
            purchases per quarter) and 1% on everything else. Categories typically include
            groceries, gas, restaurants, and online shopping at points during the year.
          </p>

          <p>
            <strong>What makes Discover unique:</strong> at the end of your first year, Discover
            matches every dollar of cashback you earned — effectively turning 5% into 10% and 1%
            into 2% for year one.
          </p>

          <ul>
            <li><strong>Rate:</strong> 5% on rotating categories ($1,500/quarter cap), 1% on everything else.</li>
            <li><strong>Annual fee:</strong> $0.</li>
            <li><strong>First-year cashback match:</strong> yes — doubles all rewards earned in year one.</li>
            <li><strong>You must activate</strong> each quarter&apos;s 5% category online or in the app.</li>
            <li><strong>Best for:</strong> people who&apos;ll actually push spending toward the active category.</li>
          </ul>

          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              Apply for the Discover it Cash Back →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The starter pick: Capital One Platinum (build credit first)</h2>

          <p>
            <strong>If your credit is thin or recovering, start here before the cashback cards.</strong>
            The Capital One Platinum and Discover it Secured are designed to build credit fast;
            once your score crosses ~700, upgrade or product-change into a true cashback card.
          </p>

          <p>
            <strong>Why not start with the 5% cashback card?</strong> Because issuers approve
            cashback cards only for established credit. Trying to apply with a 600 score wastes a
            hard inquiry. See our <Link href="/learn/how-to-build-credit-from-scratch">how to
            build credit from scratch</Link> guide for the order of operations.
          </p>

          <p>
            <AffiliateButton partner="capital-one" source={slug}>
              See the Capital One Platinum Secured →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The rules that separate good from great</h2>

          <p>
            <strong>Cashback math only works if you avoid the things that erase it.</strong> Stick
            to these and you&apos;ll keep every dollar you earn.
          </p>

          <ul>
            <li><strong>Pay the statement balance in full every month.</strong> Carrying a balance at 20%+ APR wipes out 10 years of 2% cashback in one year of interest.</li>
            <li><strong>Never spend to earn rewards.</strong> A $200 bonus that triggered an extra $300 purchase you didn&apos;t need is a net loss.</li>
            <li><strong>Skip cards with annual fees</strong> until your category spend genuinely clears the fee in year one.</li>
            <li><strong>Use a no-FTF card abroad.</strong> A 3% foreign transaction fee eats more than most cashback.</li>
            <li><strong>Set autopay to the full statement balance.</strong> One missed payment can drop your score 50+ points and trigger a penalty APR.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>A simple two-card setup that works for most people</h2>

          <p>
            <strong>You don&apos;t need four cards.</strong> A two-card stack covers ~95% of the
            cashback opportunity with minimal tracking.
          </p>

          <ol>
            <li><strong>Citi Double Cash</strong> as your default. Use it for everything that isn&apos;t in a 5% category.</li>
            <li><strong>Discover it Cash Back</strong> as your bonus card. Activate each quarter, push spending into the active 5% category up to the $1,500 cap, ignore otherwise.</li>
          </ol>

          <p>
            <strong>At $40,000 in annual spending</strong> with $4,500 pushed through the rotating
            5%, this setup pays roughly <strong>$935 a year</strong> — and in year one, the
            Discover match adds another ~$110.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Pick a 2% flat-rate card first.</strong> It does the bulk of the work without
            you thinking about it. Add a rotating 5% card only if you&apos;ll actually activate
            each quarter and shift spending toward the bonus category.
          </p>

          <p>
            Whatever you choose, the cashback only matters if you pay in full every month — interest
            at 22% APR erases 11 years of 2% cashback in 12 months. Set autopay to the statement
            balance, then forget the card exists.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link> — the prerequisite if your score is under 680.</li>
            <li><Link href="/learn/best-travel-credit-cards-2026">Best travel credit cards 2026</Link> — when cashback isn&apos;t the right currency.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget using the 50/30/20 rule</Link> — keep card spending inside your needs/wants envelope.</li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link> — the safety net that keeps you from carrying a card balance.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
