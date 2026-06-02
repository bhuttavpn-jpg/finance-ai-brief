import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "amex-gold-card-review";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Amex Gold Card review (2026): Is the $325 fee worth it?";
const description =
  "An honest 2026 review of the American Express Gold Card. The 4× points on dining and groceries are best-in-class, but the $325 annual fee only pays off if you actually use the dining and Uber credits. Here's who it fits and who should pick the Chase Sapphire Preferred instead.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is the Amex Gold worth the annual fee?",
    a: "If you spend $1,500+/month combined on US restaurants and US supermarkets and you'll actually use the monthly dining and Uber credits, yes — the value clearly exceeds the $325 fee. If you cook most meals, travel rarely, or hate dealing with monthly credit redemptions, the Chase Sapphire Preferred ($95 fee) is the cleaner pick.",
  },
  {
    q: "How do the dining and Uber credits actually work?",
    a: "They're monthly statement credits, not annual ones — so $10/month at participating restaurants (Grubhub, Shake Shack, Goldbelly, etc.) and $10/month on Uber rides or Uber Eats orders. Use them by the month-end or forfeit. Most users either forget months entirely or schedule them like a chore. The credit only counts toward your fee math if you'd have spent the money anyway.",
  },
  {
    q: "Amex Gold vs. Chase Sapphire Preferred — which is better?",
    a: "CSP wins for the average user: lower annual fee, broader bonus categories (travel + dining), more flexible point transfer partners, no monthly-credit redemption busywork. Amex Gold wins for a specific user — heavy restaurant + supermarket spender who actually uses the monthly credits. Many high-spend households carry both for category coverage.",
  },
  {
    q: "Where can I actually use Membership Rewards points?",
    a: "Best value is transferring to airline and hotel partners (Delta, ANA, Air Canada Aeroplan, Marriott Bonvoy, Hilton Honors). 'Best value' usually means international business class flights — 1 point can be worth 2–3 cents in that context. Booking economy through the Amex Travel portal or as statement credit drops the value to ~0.6–1 cent per point.",
  },
  {
    q: "Will applying for the Gold hurt my credit score?",
    a: "Temporarily. The hard inquiry costs 5–10 points and typically recovers within 3–6 months. Adding a new account drops your average account age, which is a smaller, slower hit. Heavy travel-card hobbyists open multiple per year and still maintain 800+ scores — for the average user, one new card per 6–12 months is fine.",
  },
  {
    q: "Is the Amex Gold a charge card or a credit card?",
    a: "Technically a charge card — it's marketed as 'no preset spending limit' and was historically pay-in-full. In recent years Amex added the 'Pay Over Time' feature which functions like a credit card for many cardholders. Practically, treat it like a credit card you must pay in full monthly. Carrying a balance defeats the math.",
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
          subtitle="The honest 2026 review — the 4× rewards are real, the $325 fee only pays off if you use the monthly credits, and the Chase Sapphire Preferred is the right pick for most people."
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
            <strong>The American Express Gold Card is one of the best-rewarding cards in the U.S.
            for a specific kind of spender</strong> — a household that spends meaningfully on
            restaurants and supermarkets and will actually use the monthly $10 dining and Uber
            credits. For anyone else, the $325 annual fee is hard to justify.
          </p>

          <p>
            This review is the honest version: the math, who the card fits, who it doesn&apos;t,
            and how it stacks against the Chase Sapphire Preferred (the most common cross-shop).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second take</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Amex Gold (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Annual fee</td><td className="py-3 pr-4">$325</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Restaurants worldwide</td><td className="py-3 pr-4">4× Membership Rewards points</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">US supermarkets</td><td className="py-3 pr-4">4× (up to $25K/year, then 1×)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Flights booked direct or via Amex Travel</td><td className="py-3 pr-4">3×</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Everything else</td><td className="py-3 pr-4">1×</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Dining credit</td><td className="py-3 pr-4">$10/month at participating restaurants ($120/yr)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Uber credit</td><td className="py-3 pr-4">$10/month Uber rides or Uber Eats ($120/yr)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Resy &amp; Dunkin&apos; credits</td><td className="py-3 pr-4">Additional smaller monthly credits</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Foreign transaction fee</td><td className="py-3 pr-4">$0</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Verify exact credit amounts and terms on the application page — Amex adjusts these
            periodically and details change.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math — when the fee actually pays off</h2>

          <p>
            <strong>The Gold has $240/year of stated credits</strong> ($120 dining + $120 Uber).
            That nets the effective annual fee to ~$85 — IF you would have spent those credits
            anyway, at the right merchants, before they expired each month.
          </p>

          <p>The honest version:</p>

          <ul>
            <li><strong>Heavy user (uses all credits monthly):</strong> $325 fee minus $240 credits = $85 net cost. Plus 4× points on dining/groceries can easily exceed $200/year in value for a heavy spender. Clear win.</li>
            <li><strong>Average user (catches ~6 months of credits, uses some of others):</strong> $325 fee minus ~$120 effective credit = $205 net cost. Need ~$5,000/year of dining + supermarket spend to break even on the rewards math.</li>
            <li><strong>Light user (forgets the credits):</strong> Full $325 fee. Hard to justify versus a $0-fee 2% cashback card.</li>
          </ul>

          <p>
            <strong>The honest test:</strong> on the first of the month, do you know you&apos;ll
            use the Uber credit? If not, you&apos;re probably the average or light user.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where the Gold genuinely wins</h2>

          <ul>
            <li><strong>Restaurants — 4× worldwide.</strong> Best-in-category. Chase Sapphire Preferred is 3× on dining. The 4× rate compounded over heavy dining spend is genuinely meaningful.</li>
            <li><strong>US supermarkets — 4×.</strong> Almost no other major card offers a strong supermarket multiplier. The $25K/year cap is generous enough that most households won&apos;t hit it.</li>
            <li><strong>No foreign transaction fee.</strong> Standard for premium cards, but worth noting.</li>
            <li><strong>The Membership Rewards transfer partners.</strong> When transferred to airline business-class redemptions, point values can hit 2–3 cents per point — that&apos;s an effective 8–12% return on dining/grocery spend.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where the Gold loses to alternatives</h2>

          <h3>vs. Chase Sapphire Preferred (CSP)</h3>
          <p>
            CSP is the right card for most users:
          </p>

          <ul>
            <li><strong>$95 annual fee vs. $325.</strong> $230 cheaper out of the gate.</li>
            <li><strong>Broader bonus categories</strong> — 2× on all travel, not just flights.</li>
            <li><strong>Cleaner travel transfer partner list</strong> for the average user (United, Southwest, Hyatt, Marriott).</li>
            <li><strong>No monthly-credit busywork.</strong></li>
          </ul>

          <p>
            <strong>The Amex Gold beats CSP on:</strong> raw dining multiplier (4× vs. 3×) and the
            US supermarket bonus, which CSP doesn&apos;t have. If you&apos;re a heavy restaurant and
            grocery shopper, the Gold catches up despite the fee.
          </p>

          <p>
            Our <Link href="/learn/chase-sapphire-preferred-review">CSP review</Link> covers that
            card in detail.
          </p>

          <h3>vs. cashback cards (Capital One Savor, Citi Double Cash)</h3>
          <p>
            For someone who never travels and just wants money back, a flat 2% cashback card or a
            category cashback card like Capital One Savor (3% dining, 3% groceries) often beats the
            Gold&apos;s effective return — and has no monthly redemption tax.
          </p>

          <p>
            See our <Link href="/learn/best-cashback-credit-cards-2026">cashback card guide</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The monthly-credit experience</h2>

          <p>
            <strong>Amex&apos;s monthly credit model is the most underrated cost of these
            cards.</strong> Each month you have to actively use:
          </p>

          <ul>
            <li>$10 at a participating dining merchant.</li>
            <li>$10 on Uber rides or Uber Eats (must add Gold to Uber wallet).</li>
            <li>Smaller Resy and Dunkin&apos; credits.</li>
          </ul>

          <p>
            <strong>The credits don&apos;t roll over.</strong> Forget a month and that $20+ of
            value evaporates. Heavy travel-card optimizers schedule them like chores; everyone else
            misses 3–6 months a year.
          </p>

          <p>
            The honest interpretation: if you wouldn&apos;t naturally spend at the eligible merchants,
            those credits aren&apos;t worth their stated value to you.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who the Gold is right for</h2>

          <ul>
            <li><strong>Households spending $1,500+/month on restaurants and US groceries.</strong> The 4× multiplier is the strongest in the category.</li>
            <li><strong>Urban professionals who Uber regularly and eat at participating restaurants.</strong> The $240/year in credits is real for them.</li>
            <li><strong>Cardholders with at least one other premium card</strong> (e.g., Sapphire Preferred or Reserve, Capital One Venture X) for travel-category coverage.</li>
            <li><strong>Future business-class international travelers.</strong> The transfer partner valuations make the math much stronger when redeemed well.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Who should pick a different card</h2>

          <ul>
            <li><strong>Anyone who cooks most meals at home and doesn&apos;t Uber.</strong> The credits don&apos;t convert to your actual spending.</li>
            <li><strong>Single-card households new to rewards cards.</strong> Start with CSP or a $0-fee cashback card.</li>
            <li><strong>Anyone carrying a balance.</strong> The interest rate erases all rewards math instantly.</li>
            <li><strong>Anyone who forgets to redeem monthly credits.</strong> The full $325 fee is rarely worth it without the credits.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to maximize the card if you have it</h2>

          <ol>
            <li><strong>Set monthly calendar reminders</strong> for the dining and Uber credits — first of every month.</li>
            <li><strong>Add the card to your Uber wallet</strong> as the default payment for rides or Eats.</li>
            <li><strong>Use it as your everywhere-restaurant card</strong> and put US grocery purchases on it up to the $25K/year cap.</li>
            <li><strong>Transfer points to airline partners</strong> for business-class redemptions when possible. Avoid the Amex Travel portal — it&apos;s the worst value path.</li>
            <li><strong>Pay in full monthly</strong> — the Gold&apos;s &quot;Pay Over Time&quot; option is an APR trap.</li>
            <li><strong>Revisit annually</strong> — if you&apos;re not using credits consistently, downgrade or cancel before the next fee posts.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            The Amex Gold is a <strong>great card for a narrow user</strong>: a heavy dining +
            grocery spender who reliably uses monthly credits and transfers points to business-class
            partners. For that user, the effective return on category spend is among the strongest
            in the market.
          </p>

          <p>
            For everyone else — and that&apos;s most of us — the{" "}
            <strong>Chase Sapphire Preferred</strong> is the better default. Lower fee, broader
            categories, no monthly redemption tax, cleaner overall experience.
          </p>

          <p>
            <AffiliateButton partner="amex-gold" source={slug}>
              Apply for the Amex Gold Card →
            </AffiliateButton>
          </p>

          <p>
            Or compare with:{" "}
            <AffiliateButton partner="csp" source={slug} variant="secondary">Chase Sapphire Preferred</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/chase-sapphire-preferred-review">Chase Sapphire Preferred review</Link></li>
            <li><Link href="/learn/best-travel-credit-cards-2026">Best travel credit cards 2026</Link></li>
            <li><Link href="/learn/best-cashback-credit-cards-2026">Best cashback credit cards 2026</Link></li>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
