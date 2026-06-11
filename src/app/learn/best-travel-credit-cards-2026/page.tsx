import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-travel-credit-cards-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best travel credit cards 2026";
const description =
  "The best travel credit cards in 2026, ranked by who they're actually for. Compare sign-up bonuses, point values, annual fees, and credits across the Chase Sapphire Preferred, Amex Gold, Capital One Venture, and Sapphire Reserve.";
const PUBLISHED = "2026-05-20";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What credit score do I need for a travel credit card?",
    a: "Most premium travel cards (Chase Sapphire Preferred, Amex Gold, Capital One Venture) require good-to-excellent credit — generally a FICO score of 700 or higher. The Sapphire Reserve effectively expects 740+. If you're below 700, build credit first with a no-annual-fee or secured card, then upgrade.",
  },
  {
    q: "Are travel credit card annual fees worth it?",
    a: "Only if you use the card's credits and earn rewards above the fee. A $95 card like the Sapphire Preferred pays for itself if you redeem roughly 13,000 points through its travel portal. Premium cards with $300–$550 fees only make sense if you fully use their travel and statement credits — otherwise a no-fee card wins.",
  },
  {
    q: "How much is a travel point actually worth?",
    a: "It depends on the program and how you redeem. Chase Ultimate Rewards and Amex Membership Rewards are typically worth 1.0–2.0 cents each when transferred to airline and hotel partners, versus a flat 1.0 cent for cash back. Capital One miles are worth about 1.0 cent toward travel or via transfer partners. We value points conservatively at 1.0–1.5 cents in our math.",
  },
  {
    q: "Should I get a travel card or a flat cash-back card?",
    a: "If you don't travel at least twice a year or don't want to manage transfer partners, a flat 2% cash-back card like the Citi Double Cash is simpler and has no annual fee. Travel cards win when you travel regularly and will take the time to redeem points through transfer partners, where point values climb above 1.5 cents.",
  },
  {
    q: "What is a sign-up bonus and how do I earn it?",
    a: "A sign-up bonus (or welcome offer) is a large chunk of points awarded after you spend a minimum amount in the first few months — for example, 60,000 points after $4,000 of spending in 3 months. Only chase a bonus you can hit with normal spending; never overspend or carry a balance to earn one, because interest will erase the value.",
  },
  {
    q: "Does applying for a travel card hurt my credit?",
    a: "Each application triggers one hard inquiry, which typically drops your score a few points temporarily, fading within 12 months. Opening a new account also lowers your average account age. The bigger risk is Chase's '5/24 rule': Chase will usually decline you if you've opened 5+ cards from any issuer in the past 24 months.",
  },
  {
    q: "Can I cancel a travel card after earning the bonus?",
    a: "You can, but think twice. Canceling lowers your total available credit and average account age, both of which can ding your score. With annual-fee cards, a better move is to downgrade to a no-fee version from the same issuer before the next fee posts, which keeps the account age intact.",
  },
  {
    q: "Do travel credit card points expire?",
    a: "Points in Chase Ultimate Rewards, Amex Membership Rewards, and Capital One generally don't expire as long as your account stays open and in good standing. If you cancel the card, transferable points can be lost — move them to a partner or another card in the same ecosystem first.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Borrow" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Four cards cover almost everyone — from your first travel card to a premium lounge-and-credits setup. Here's which one fits you, and the math behind each."
          pillar="Borrow"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="13 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The best travel credit card isn&apos;t the one with the flashiest bonus — it&apos;s the
            one whose annual fee you&apos;ll actually earn back.</strong> Here&apos;s how to pick.
          </p>

          <p>
            A travel rewards card can be worth hundreds of dollars a year in flights, hotels, and
            statement credits — or it can quietly cost you a $550 annual fee you never recoup. The
            difference is entirely about matching the card to how you spend and travel. This guide
            ranks the four cards that cover almost everyone, explains the point-value math so you
            can check our work, and tells you exactly who each card is for.
          </p>

          <p>
            <strong>The short version:</strong> if it&apos;s your first travel card, get the{" "}
            <strong>Chase Sapphire Preferred</strong>. If you spend heavily on dining and groceries,
            the <strong>Amex Gold</strong>. If you want simple flat-rate miles with no categories to
            track, the <strong>Capital One Venture</strong>. If you travel often enough to use
            lounges and a big travel credit, the <strong>Chase Sapphire Reserve</strong>.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>How to read a travel card (the only 4 numbers that matter)</h2>
          <p>
            Ignore the marketing. A travel card&apos;s value comes down to four inputs you can put
            on one line:
          </p>
          <ul>
            <li><strong>Sign-up bonus</strong> — a one-time chunk of points after you hit a minimum spend. The single biggest source of first-year value.</li>
            <li><strong>Earn rate</strong> — how many points per dollar in each category. Multiply by your real spending, not the headline multiplier.</li>
            <li><strong>Point value</strong> — what each point is worth on redemption. Cash back is a flat 1.0 cent; transferable points run 1.0–2.0 cents through airline/hotel partners.</li>
            <li><strong>Annual fee minus credits</strong> — the real cost. A $300 fee with $300 of travel credit you&apos;ll use is effectively $0.</li>
          </ul>
          <p>
            <strong>The break-even test:</strong> a card is worth its fee if{" "}
            <em>(points earned × point value) + credits used</em> exceeds the annual fee. We run
            that test on every card below using conservative point values (1.0–1.5 cents), so the
            numbers hold up even if you never master advanced transfer-partner redemptions.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>The 2026 shortlist at a glance</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Annual fee</th>
                  <th className="py-3 pr-4">Top earn rates</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Chase Sapphire Preferred</td>
                  <td className="py-3 pr-4">$95</td>
                  <td className="py-3 pr-4">5x travel (portal), 3x dining, 2x other travel</td>
                  <td className="py-3 pr-4">First travel card; best all-rounder</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Amex Gold</td>
                  <td className="py-3 pr-4">$325</td>
                  <td className="py-3 pr-4">4x dining, 4x U.S. groceries, 3x flights</td>
                  <td className="py-3 pr-4">Big dining + grocery spenders</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Capital One Venture</td>
                  <td className="py-3 pr-4">$95</td>
                  <td className="py-3 pr-4">2x on everything</td>
                  <td className="py-3 pr-4">Set-and-forget flat-rate miles</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Chase Sapphire Reserve</td>
                  <td className="py-3 pr-4">$550</td>
                  <td className="py-3 pr-4">$300 travel credit, lounge access, 5x portal travel</td>
                  <td className="py-3 pr-4">Frequent travelers who use credits</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Earn rates and fees reflect published issuer terms as of May 2026; confirm current offers on the issuer&apos;s site, as welcome bonuses change frequently.</p>
          </div>

          <hr className="my-10 border-brand-100" />
          <h2>1. Chase Sapphire Preferred — the best first travel card</h2>
          <p>
            If you&apos;re getting your first real travel card, this is the default answer, and it
            has been for years. The $95 annual fee is low, the points (Chase Ultimate Rewards) are
            among the most flexible in the industry, and the earn structure rewards the two
            categories most people spend on outside of rent: travel and dining.
          </p>
          <p>
            Ultimate Rewards points are worth 1.25 cents each when you book travel through the Chase
            portal, and often more — 1.5 to 2.0 cents — when you transfer them to airline and hotel
            partners like United, Hyatt, and Southwest. That flexibility is the real reason this
            card wins: you&apos;re not locked into one airline.
          </p>
          <p>
            <strong>The math:</strong> a typical welcome offer of 60,000 points is worth $750
            toward travel through the portal, or often $900+ via transfer partners — against a $95
            fee. Even ignoring the bonus, someone spending $1,500/month on dining and travel earns
            roughly 40,000–50,000 points a year, comfortably clearing the fee.
          </p>
          <p>
            <AffiliateButton partner="csp" source={slug}>
              See the Chase Sapphire Preferred offer →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>2. Amex Gold — for heavy dining and grocery spenders</h2>
          <p>
            The American Express Gold Card is built for one kind of person: someone who spends a lot
            on food. It earns 4x Membership Rewards points at restaurants worldwide and 4x at U.S.
            supermarkets (up to $25,000/year, then 1x), plus 3x on flights booked directly or
            through Amex Travel.
          </p>
          <p>
            The $325 fee looks steep until you account for its statement credits — a monthly dining
            credit at select partners and an annual Uber Cash allotment, which together can offset
            most of the fee <em>if you actually use them</em>. That &quot;if&quot; is the catch: the
            credits come in monthly chunks that don&apos;t roll over, so they only help people whose
            routines already match them.
          </p>
          <p>
            <strong>The math:</strong> a household spending $1,000/month on groceries and $500/month
            on dining earns about 72,000 points a year — worth $720+ at conservative transfer
            values, before any credits or welcome bonus. If you don&apos;t spend heavily on food,
            skip this one; the earn rate on everything else is just 1x.
          </p>
          <p>
            <AffiliateButton partner="amex-gold" source={slug}>
              See the Amex Gold offer →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>3. Capital One Venture — the set-and-forget option</h2>
          <p>
            If tracking bonus categories sounds like a chore, the Capital One Venture Rewards card
            is the antidote. It earns a flat 2x miles on every purchase, full stop. No categories,
            no quarterly activation, no mental overhead. The $95 fee is the same as the Sapphire
            Preferred.
          </p>
          <p>
            Capital One miles are worth 1.0 cent each toward travel, and the program has built out a
            solid roster of airline and hotel transfer partners that can push that value higher for
            people willing to optimize. But the core appeal is simplicity: you never have to think
            about which card to pull out.
          </p>
          <p>
            <strong>The math:</strong> someone spending $3,000/month across all categories earns
            72,000 miles a year — worth $720 toward travel at the flat rate. Because the 2x applies
            to everything (including the categories where the Sapphire Preferred only earns 1x), the
            Venture often out-earns category cards for people with diversified, non-food-heavy
            spending.
          </p>
          <p>
            <AffiliateButton partner="capital-one-venture" source={slug}>
              See the Capital One Venture offer →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>4. Chase Sapphire Reserve — for frequent travelers</h2>
          <p>
            The Sapphire Reserve is the premium step up from the Preferred, and its $550 fee only
            makes sense for people who travel often enough to use what it includes: an annual $300
            travel credit (which applies automatically to almost any travel charge), Priority Pass
            airport lounge access, and a higher 1.5-cent portal redemption rate on Ultimate Rewards
            points.
          </p>
          <p>
            <strong>The math:</strong> subtract the $300 travel credit and the effective fee is
            $250. If you take even three or four trips a year, the lounge access, travel
            protections, and elevated point value typically clear that gap. If you travel once a
            year, you won&apos;t use enough of it — get the Preferred instead and save $455.
          </p>
          <p>
            A common strategy: start with the Sapphire Preferred, and only upgrade to the Reserve
            once your travel frequency justifies it. Because both live in the Chase Ultimate Rewards
            ecosystem, your points carry over.
          </p>
          <p>
            <AffiliateButton partner="chase-sapphire-reserve" source={slug}>
              See the Chase Sapphire Reserve offer →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Not a frequent traveler? Consider flat cash back instead</h2>
          <p>
            If you travel less than twice a year, or you simply don&apos;t want to manage points and
            transfer partners, a no-annual-fee flat cash-back card almost always beats a travel card
            on a pure dollars basis. The Citi Double Cash earns an effective 2% on everything (1%
            when you buy, 1% when you pay) with no fee and no categories.
          </p>
          <p>
            The trade-off is ceiling, not floor: cash back is locked at 1.0 cent per point, while
            travel points can exceed 1.5–2.0 cents for people who optimize. For most casual
            spenders, the guaranteed 2% with zero effort and zero fee is the smarter choice.
          </p>
          <p>
            <AffiliateButton partner="citi-double-cash" source={slug}>
              See the Citi Double Cash offer →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Before you apply: 4 rules to protect your credit</h2>
          <ul>
            <li><strong>Check Chase&apos;s 5/24 rule first.</strong> If you&apos;ve opened 5 or more cards from any issuer in the past 24 months, Chase will almost certainly decline you. Apply for Chase cards (Sapphire Preferred/Reserve) before non-Chase cards.</li>
            <li><strong>Only chase a bonus you can hit with normal spending.</strong> Never overspend or float a balance to reach a minimum-spend requirement — credit card interest (often above 20% APR) erases any bonus value almost immediately.</li>
            <li><strong>Pay in full, every month.</strong> Rewards are only &quot;rewards&quot; if you carry no balance. Set autopay for the full statement balance.</li>
            <li><strong>Space out applications.</strong> Each application is a hard inquiry. Keep new-card applications at least 90 days apart to avoid looking like a credit risk.</li>
          </ul>
          <p>
            If your score isn&apos;t there yet, start with our guide to{" "}
            <Link href="/learn/how-to-build-credit-from-scratch">building credit from scratch</Link>{" "}
            — most premium travel cards want a 700+ FICO before they&apos;ll approve you.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>How to value the rewards you earn</h2>
          <p>
            Earning points is only half the equation; redeeming them well is the other half. Three
            principles:
          </p>
          <ul>
            <li><strong>Transfer partners beat the portal</strong> for flights, especially international business class, where point values can exceed 2 cents. The portal is fine for simplicity, but you leave value on the table.</li>
            <li><strong>Don&apos;t hoard points.</strong> Loyalty currencies get devalued over time. Earn and burn within a year or two rather than building a giant unredeemed balance.</li>
            <li><strong>Never redeem points for cash or merchandise.</strong> That&apos;s where point values crater to 0.6–0.8 cents. Travel redemptions are where these cards earn their keep.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>The bottom line</h2>
          <p>
            Most people are best served by one of two cards. If you travel a few times a year and
            want flexible, valuable points, get the <strong>Chase Sapphire Preferred</strong> — the
            $95 fee is easy to earn back and Ultimate Rewards points are the most useful currency
            for beginners. If you don&apos;t really travel, get a no-fee 2% cash-back card and skip
            the complexity entirely.
          </p>
          <ul>
            <li><strong>Best first travel card:</strong> <AffiliateButton partner="csp" source={slug} variant="secondary">Chase Sapphire Preferred</AffiliateButton></li>
            <li><strong>Best for food spending:</strong> <AffiliateButton partner="amex-gold" source={slug} variant="secondary">Amex Gold</AffiliateButton></li>
            <li><strong>Simplest flat-rate miles:</strong> <AffiliateButton partner="capital-one-venture" source={slug} variant="secondary">Capital One Venture</AffiliateButton></li>
            <li><strong>For frequent travelers:</strong> <AffiliateButton partner="chase-sapphire-reserve" source={slug} variant="secondary">Chase Sapphire Reserve</AffiliateButton></li>
          </ul>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link> — get to the 700+ score these cards require.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget using the 50/30/20 rule</Link> — keep card spending inside your plan so rewards stay rewards.</li>
            <li><Link href="/tools/tax-bracket">Tax bracket calculator</Link> — see your marginal rate before optimizing the rest of your money.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Borrow" currentSlug="best-travel-credit-cards-2026" />
      </article>
    </>
  );
}
