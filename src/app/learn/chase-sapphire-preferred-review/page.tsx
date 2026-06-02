import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "chase-sapphire-preferred-review";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Chase Sapphire Preferred review (2026): Worth the $95 fee?";
const description =
  "The CSP is still the best mid-tier travel card in 2026 for most people: 3x on dining, 2x on travel, a 25% transfer bonus to airline/hotel partners, and a manageable $95 fee. Here's the math on when it beats the $0-fee alternatives, and when it doesn't.";
const PUBLISHED = "2026-05-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is the Chase Sapphire Preferred worth the $95 annual fee?",
    a: "For most people who spend $4,000+ a year on dining and travel combined and value points transfers, yes — the 25% transfer bonus on Chase Ultimate Rewards points alone usually returns more than $95 in real value per year. For people who don't travel, don't dine out much, or won't bother transferring points to partners, a $0-fee 2% cashback card like the Wells Fargo Active Cash beats it.",
  },
  {
    q: "What's the difference between Sapphire Preferred and Sapphire Reserve?",
    a: "Preferred costs $95/year and earns 3x on dining, 2x on travel, with a 25% transfer bonus when redeemed for travel through Chase. Reserve costs $550/year and earns 3x on travel + dining, includes a $300 travel credit (effective fee $250), Priority Pass airport lounges, and a 50% transfer bonus. Reserve makes sense if you fly frequently and use lounges; Preferred is the better value for most people.",
  },
  {
    q: "What is the 5/24 rule and does the CSP have it?",
    a: "Yes. Chase will not approve you for most of their cards (including CSP) if you've opened 5 or more credit cards from any issuer in the past 24 months. So apply for the CSP BEFORE applying for non-Chase cards if you're stacking. Authorized-user cards and most business cards count toward 5/24 in some bureau reports — check carefully.",
  },
  {
    q: "What's the current signup bonus on the Chase Sapphire Preferred?",
    a: "Signup bonuses change frequently — typical offers in 2024–2026 have been 60,000–80,000 Ultimate Rewards points after spending $4,000 in 3 months, worth roughly $750–$1,000 in transfer-partner travel. Check the official Chase page or a current-offer tracker before applying; an 80K offer is meaningfully better than a 60K offer.",
  },
  {
    q: "What are the best transfer partners for Chase Ultimate Rewards?",
    a: "Hyatt is the standout — Hyatt point values regularly hit 1.7–2.5 cents per point. United, Air Canada Aeroplan, and British Airways Avios are strong for flights (Avios for short-haul intra-Europe and Iberia transatlantic routes). Marriott and IHG are weaker but occasionally useful. Avoid blanket statements like '1 cent per point' — the value depends entirely on the redemption.",
  },
  {
    q: "Can I get the CSP if I already have the Chase Freedom Unlimited?",
    a: "Yes — Chase has no formal rule against holding multiple Ultimate Rewards cards. In fact, pairing a CSP with a Freedom Unlimited (1.5% everywhere) or Freedom Flex (5% rotating categories) lets you earn UR points on every purchase and consolidate them in the CSP account for transfer to partners. Just make sure you're under 5/24 when you apply.",
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
          subtitle="The CSP has been the default starter travel card for a decade. In 2026, it's still the right answer for most occasional travelers — but the math depends on whether you'll actually use the transfer bonus."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The Chase Sapphire Preferred is the best mid-tier travel card in 2026 for one
            specific reason:</strong> the 25% transfer bonus to airline and hotel partners.
            That bonus is the entire reason the $95 fee makes sense.
          </p>

          <p>
            <strong>If you wouldn&apos;t use point transfers,</strong> a $0-fee 2% cashback card
            beats it. If you would, the CSP usually returns $300–$800 of real travel value per year
            on a normal spending pattern.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The card at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Chase Sapphire Preferred</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Annual fee</td><td className="py-3 pr-4">$95</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Dining</td><td className="py-3 pr-4">3x points</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Online groceries (excl. Walmart/Target)</td><td className="py-3 pr-4">3x</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Streaming services</td><td className="py-3 pr-4">3x</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Travel (through Chase portal)</td><td className="py-3 pr-4">5x</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">All other travel</td><td className="py-3 pr-4">2x</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Everything else</td><td className="py-3 pr-4">1x</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Travel portal redemption</td><td className="py-3 pr-4">1.25 cents/point (+25% bonus)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Transfer partners</td><td className="py-3 pr-4">14 airline + hotel (1:1)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Foreign transaction fee</td><td className="py-3 pr-4">$0</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Travel insurance</td><td className="py-3 pr-4">Primary CDW; trip cancellation; baggage delay</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Does the math work? The break-even calculation</h2>

          <p>
            <strong>The CSP earns its $95 fee when the bonus categories generate enough extra value
            over a 2% flat-rate card.</strong> Here&apos;s how it shakes out on a normal spending
            pattern.
          </p>

          <p>
            Assume $4,000/year on dining, $3,000 on travel, $2,000 on online groceries, $15,000 on
            everything else. Compared to a 2% cashback baseline:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Points/cashback earned</th>
                  <th className="py-3 pr-4">Value (transfer/2¢ avg)</th>
                  <th className="py-3 pr-4">Net of fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">2% flat cashback (no-fee)</td>
                  <td className="py-3 pr-4">$480 cashback</td>
                  <td className="py-3 pr-4">$480</td>
                  <td className="py-3 pr-4">$480</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Chase Sapphire Preferred</td>
                  <td className="py-3 pr-4">~36,000 UR points</td>
                  <td className="py-3 pr-4">$720 (transfer @ 2¢ avg)</td>
                  <td className="py-3 pr-4"><strong>$625</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>CSP wins by ~$145/year on this pattern if you actually transfer the points.</strong>
            If you redeem at 1.25 cents per point through the Chase travel portal (the easier
            option), the math shifts: $450 value − $95 fee = $355 net, less than the flat 2% card.
            <strong> Transfer partners are the whole game.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The transfer partners actually worth using</h2>

          <p>
            <strong>Chase has 14 transfer partners. About 4 of them justify the strategy.</strong>
          </p>

          <ul>
            <li><strong>Hyatt</strong> — the standout. Hyatt category 1–4 hotels run 5K–15K points/night, often equivalent to $250–$500 cash rates. Easy 2–3 cents per point.</li>
            <li><strong>United Airlines</strong> — good for domestic award flights. Saver awards from 12,500 miles one-way.</li>
            <li><strong>Air Canada Aeroplan</strong> — strong for Star Alliance partners (Lufthansa, ANA, Singapore). Distance-based pricing rewards short-haul.</li>
            <li><strong>British Airways Avios</strong> — best for short-haul intra-Europe (4–7K Avios) and Iberia transatlantic (34K Avios off-peak business class to Madrid is the famous sweet spot).</li>
            <li><strong>Honorable mentions:</strong> Marriott Bonvoy (rarely a great value), Southwest (decent for domestic), IHG (sporadic redemption value).</li>
            <li><strong>Skip:</strong> JetBlue (poor value), Iberia outside the transatlantic sweet spot.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What makes the CSP genuinely good</h2>

          <ul>
            <li><strong>Primary collision damage waiver on rental cars.</strong> Most cards offer secondary; primary means you skip the rental company&apos;s expensive CDW and your own auto insurance never sees a claim. Worth $15–$30 per rental day.</li>
            <li><strong>Trip cancellation/interruption insurance up to $10,000 per person, $20,000 per trip.</strong> Reimburses non-refundable bookings if you cancel for covered reasons.</li>
            <li><strong>No foreign transaction fees.</strong> Saves 3% on every overseas purchase.</li>
            <li><strong>Purchase protection.</strong> 120 days against damage or theft, up to $500/claim.</li>
            <li><strong>$50 annual hotel credit through Chase Ultimate Rewards.</strong> Easy to use; effectively drops the fee to $45.</li>
            <li><strong>Doordash DashPass</strong> bundled (review the terms — the included period varies year to year).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where it falls short</h2>

          <ul>
            <li><strong>No airport lounge access.</strong> For that you want the Reserve ($550) or Amex Platinum.</li>
            <li><strong>The 5/24 rule.</strong> Chase won&apos;t approve you if you&apos;ve opened 5+ cards in the past 24 months (any issuer). Apply for CSP first if stacking.</li>
            <li><strong>Single bonus categories aren&apos;t leaders.</strong> Amex Gold beats CSP on dining (4x vs 3x), and the Citi Premier beats it on groceries (3x with no online restriction).</li>
            <li><strong>Travel portal value is mediocre at 1.25¢/point.</strong> If you won&apos;t transfer to partners, the CSP loses its main edge.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How CSP compares to the obvious alternatives</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Fee</th>
                  <th className="py-3 pr-4">Best at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Chase Sapphire Preferred</td><td className="py-3 pr-4">$95</td><td className="py-3 pr-4">All-around mid-tier travel; Hyatt + Aeroplan transfers</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Amex Gold</td><td className="py-3 pr-4">$325</td><td className="py-3 pr-4">Heavy dining/grocery spend; MR points</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital One Venture</td><td className="py-3 pr-4">$95</td><td className="py-3 pr-4">2x flat earn; simplest redemption</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Chase Sapphire Reserve</td><td className="py-3 pr-4">$550</td><td className="py-3 pr-4">Frequent fliers; lounge access</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Who should get the CSP</h2>

          <ul>
            <li>You spend $4,000+/year on dining + travel combined.</li>
            <li>You&apos;re willing to spend 30 minutes researching a transfer redemption once or twice a year.</li>
            <li>You travel internationally enough that the 0% foreign-transaction fee matters.</li>
            <li>You&apos;re under 5/24 (haven&apos;t opened 5+ cards in 24 months).</li>
            <li>Your credit score is 720+.</li>
          </ul>

          <h2>Who should skip it</h2>

          <ul>
            <li>You rarely travel or dine out. A no-fee 2% card like Wells Fargo Active Cash earns more.</li>
            <li>You won&apos;t bother with point transfers. The 1.25¢/point travel portal is unremarkable.</li>
            <li>You&apos;re over 5/24 — apply after some of those cards age off.</li>
            <li>You travel enough to justify the $550 Reserve and want lounge access.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to apply</h2>

          <p>
            <strong>Check the current signup bonus first</strong> — anything below 60K points
            isn&apos;t worth applying for. Wait for an 80K offer if possible.
          </p>

          <p>
            <AffiliateButton partner="csp" source={slug}>
              See current Chase Sapphire Preferred offer →
            </AffiliateButton>
          </p>

          <p>Alternatives if CSP doesn&apos;t fit:</p>
          <ul>
            <li><AffiliateButton partner="capital-one-venture" source={slug} variant="secondary">Capital One Venture</AffiliateButton> — simpler 2x flat-rate travel, same $95 fee.</li>
            <li><AffiliateButton partner="amex-gold" source={slug} variant="secondary">Amex Gold</AffiliateButton> — dining/grocery focused, more expensive but higher earn.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The Chase Sapphire Preferred remains the default mid-tier travel card in 2026</strong>
            because the Ultimate Rewards transfer program is still the strongest in the industry. The
            $95 fee earns back easily if you transfer to Hyatt or Aeroplan at least once a year.
          </p>

          <p>
            If point transfers feel like work you don&apos;t want, get a Wells Fargo Active Cash or
            Citi Double Cash and stop reading credit card reviews. Both will return more value than a
            CSP you don&apos;t use well.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-travel-credit-cards-2026">Best travel credit cards 2026</Link></li>
            <li><Link href="/learn/best-cashback-credit-cards-2026">Best cashback credit cards 2026</Link></li>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
