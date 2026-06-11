import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-business-credit-cards";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best business credit cards 2026";
const description =
  "An honest 2026 roundup of the top business credit cards — Amex Business Gold for category spend, Chase Ink Business Preferred for travel and online ads, Capital One Spark for flat-rate cashback. Includes who qualifies as a 'business' (almost anyone with a side income), and how to pick without overpaying on annual fees.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I need an LLC to apply for a business credit card?",
    a: "No. Sole proprietors with any side income — freelance, gig work, eBay reselling, consulting — can apply. Use your Social Security number as the tax ID and your own name as the business name. The issuer doesn't verify revenue beyond a self-reported number on the application.",
  },
  {
    q: "Do business card balances show on my personal credit report?",
    a: "Usually no. Most issuers (Chase, Amex, Capital One business cards) don't report monthly balances to personal credit bureaus — which is a big win for personal utilization. Capital One business cards are the exception; they do report. Missed payments and defaults still hit your personal credit on any issuer.",
  },
  {
    q: "What separates a good business card from a personal one?",
    a: "Higher credit limits (often 2–3× a personal card), employee cards at no extra fee, business-specific bonus categories (advertising, shipping, office supplies, internet/phone), and accounting integrations. The personal cards are still better for travel, dining, and groceries.",
  },
  {
    q: "Are business card sign-up bonuses bigger?",
    a: "Yes — often substantially. 100,000–150,000 point bonuses are common on business cards (vs. 50,000–80,000 on personal). The minimum spend is usually higher too ($6,000–$15,000 in 3 months), but the bonus typically clears $1,000+ in value.",
  },
  {
    q: "Can business cards help me build business credit?",
    a: "Only the ones that report to business credit bureaus (Dun & Bradstreet, Experian Business). Most consumer-facing business cards don't. To build a real business credit profile, you need a card that explicitly reports — Capital One Spark and several smaller-issuer cards do. Worth pursuing if you'll seek business financing later.",
  },
  {
    q: "Will applying for a business card affect my 5/24 status with Chase?",
    a: "Chase business cards don't count toward 5/24 (the cap on new personal cards in 24 months) — but applying for one requires you to be under 5/24. So get all 5 personal cards you want first, then add Chase business cards on top.",
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
          subtitle="A practical roundup — who qualifies as a business (almost anyone), which card fits each spending pattern, and how to time applications around personal credit goals."
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
            <strong>Business credit cards aren't just for "real" businesses.</strong> If you have
            any side income — freelancing, consulting, gig work, eBay reselling — you legitimately
            qualify as a sole proprietor and can apply. The reward structures are often more
            generous than personal cards, and most issuers don't report balances to personal credit
            (a big utilization win).
          </p>

          <p>
            This roundup is honest: not every business owner needs a business card, and the
            "perfect" pick depends on where your spend goes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The top picks at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Annual fee</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Chase Ink Business Preferred</td><td className="py-3 pr-4">$95</td><td className="py-3 pr-4">Online ads, travel, shipping — the all-rounder</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Amex Business Gold</td><td className="py-3 pr-4">$375</td><td className="py-3 pr-4">High category spend (4× on top categories)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Chase Ink Business Cash</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">Office supplies, phone, internet, gas</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital One Spark Cash Plus</td><td className="py-3 pr-4">$150</td><td className="py-3 pr-4">Simple flat-rate 2% cashback on everything</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Amex Business Platinum</td><td className="py-3 pr-4">$695</td><td className="py-3 pr-4">Heavy business travelers (lounges, statement credits)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Chase Ink Business Unlimited</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">Flat 1.5% on everything, pairs with Sapphire</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Chase Ink Business Preferred — the default pick</h2>

          <p>
            <strong>If you only get one business card, this is it.</strong> $95 annual fee, 3×
            Ultimate Rewards on the first $150K/year combined across travel, shipping, internet/
            cable/phone, and advertising on social media + search engines.
          </p>

          <p>
            That last category — <strong>3× on Google Ads, Meta Ads, TikTok Ads</strong> — is
            unusually generous and a major win for any business spending on digital marketing. Most
            agencies and DTC brands route 5-figure monthly ad budgets through this card alone.
          </p>

          <p>
            Bonus: points transfer to the same Ultimate Rewards partners as the{" "}
            <Link href="/learn/chase-sapphire-preferred-review">Chase Sapphire Preferred</Link>{" "}
            (United, Southwest, Hyatt, etc.).
          </p>

          <p>
            <AffiliateButton partner="csp" source={slug}>
              Compare Ink Preferred and Sapphire Preferred →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Amex Business Gold — category optimizer</h2>

          <p>
            <strong>4× Membership Rewards on the top two spending categories</strong> each billing
            cycle, automatically chosen from a list including transit, US gas, restaurants, US
            advertising, US tech, and US shipping. Up to $150K/year combined cap.
          </p>

          <p>
            The category auto-selection is genuinely a feature — you don't have to plan your spend
            around the card. If two-thirds of your spend goes through their categories, the
            effective return often beats the higher-fee Business Platinum.
          </p>

          <p>
            <strong>The catch:</strong> $375 annual fee is high. Pencil it out — you need ~$10K
            of qualified spend per year just to break even on the fee versus a 2% flat-cashback
            card.
          </p>

          <p>
            <AffiliateButton partner="amex-gold" source={slug}>
              Compare Amex Business Gold and Gold →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Chase Ink Business Cash — the $0-fee workhorse</h2>

          <p>
            <strong>5% cashback on the first $25K/year</strong> at office supply stores, internet,
            cable, and phone services. 2% on gas + restaurants up to the same cap. <strong>$0
            annual fee.</strong>
          </p>

          <p>
            The 5% on internet and phone is what makes this card. Most small businesses pay
            $100–$300/month on combined internet + cell — that's $5–$15/month of free cashback
            you'd otherwise leave on the table.
          </p>

          <p>
            Pair it with the Ink Preferred to combine the 5% categories with the Preferred's 3×
            travel/ad categories, and earn at the highest rate everywhere.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Capital One Spark Cash Plus — the simplest pick</h2>

          <p>
            <strong>2% flat cashback on every purchase</strong>, no categories, no caps, no
            tracking. $150 annual fee, often offset by a generous sign-up bonus.
          </p>

          <p>
            <strong>The catch:</strong> Capital One business cards DO report to personal credit
            bureaus (unlike most other issuers). If you're trying to keep business utilization off
            your personal report, look elsewhere.
          </p>

          <p>
            <strong>The win:</strong> dead-simple math. No optimization. No remembering which card
            to use where. Some of the highest-ROI business owners pick this card precisely because
            it removes a decision from their day.
          </p>

          <p>
            <AffiliateButton partner="capital-one-venture" source={slug}>
              Compare Capital One business and personal cards →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Amex Business Platinum — for heavy travelers only</h2>

          <p>
            <strong>$695 annual fee</strong>, but it stacks airline lounge access (Centurion +
            Priority Pass + Delta SkyClubs when flying Delta), Global Entry/TSA PreCheck credit,
            Marriott + Hilton Gold status, Dell + Adobe + wireless statement credits, and 5×
            Membership Rewards on flights and prepaid hotels via Amex Travel.
          </p>

          <p>
            The card pays for itself if you take 5+ business flights per year and use the lounge
            access. For an occasional business traveler, the fee is harder to justify than the
            Business Gold.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who qualifies as a "business"?</h2>

          <p>
            <strong>Almost anyone with any side income.</strong> Issuers accept sole proprietors who
            file Schedule C — no LLC, no EIN, no business bank account required. On the application:
          </p>

          <ul>
            <li><strong>Business name:</strong> Your own legal name.</li>
            <li><strong>Business type:</strong> Sole proprietorship.</li>
            <li><strong>Tax ID:</strong> Your SSN.</li>
            <li><strong>Years in business:</strong> When you started earning side income (even casually).</li>
            <li><strong>Annual revenue:</strong> Honest self-reported figure. Issuers don't ask for documentation.</li>
            <li><strong>Number of employees:</strong> Zero is fine.</li>
          </ul>

          <p>
            <strong>Examples of qualifying activity:</strong> freelance writing or design, Etsy or
            eBay reselling, gig delivery, tutoring, photography, real estate side hustle, content
            creation. If you've earned even a few hundred dollars on the side in the last year, you
            qualify.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Mixing business and personal spend.</strong> Defeats the whole point. Use the card only for business expenses; helps massively at tax time.</li>
            <li><strong>Carrying balances.</strong> Business card APRs are often higher than personal cards. If you're carrying business debt, a business line of credit or loan is almost always cheaper.</li>
            <li><strong>Overpaying on annual fees.</strong> A $695 card with 2× the rewards isn't worth it if you only spend $20K/year. Run the break-even math on every premium card.</li>
            <li><strong>Forgetting employee cards are free.</strong> Most business cards include free employee cards that earn rewards into your main account. Use them for legitimate employee or contractor spend.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to choose</h2>

          <p>
            <strong>Bias toward simple if you don't optimize cards as a hobby.</strong>
          </p>

          <ul>
            <li><strong>&lt;$30K/year business spend:</strong> Chase Ink Business Cash ($0 fee). Free, 5% in real categories.</li>
            <li><strong>$30K–$100K with travel + ads:</strong> Chase Ink Business Preferred. Best all-rounder for the fee.</li>
            <li><strong>$30K–$100K with concentrated category spend:</strong> Amex Business Gold. The 4× categories add up.</li>
            <li><strong>Want the simplest possible card:</strong> Capital One Spark Cash Plus. 2% on everything, no thinking.</li>
            <li><strong>Heavy business traveler:</strong> Amex Business Platinum. Earns its fee back in lounge access + credits.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The Chase Ink Business Preferred is the right default for most side-hustlers
            and small businesses.</strong> The $95 fee is light, the categories cover what most
            small businesses actually spend on, and points transfer to the same rich Ultimate
            Rewards ecosystem as the Sapphire Preferred.
          </p>

          <p>
            For higher-volume, category-heavy spenders, the Amex Business Gold pulls ahead. For
            people who want simplicity, the Capital One Spark wins. For traveling executives, the
            Business Platinum.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/chase-sapphire-preferred-review">Chase Sapphire Preferred review</Link></li>
            <li><Link href="/learn/amex-gold-card-review">Amex Gold Card review</Link></li>
            <li><Link href="/learn/best-travel-credit-cards-2026">Best travel credit cards 2026</Link></li>
            <li><Link href="/learn/best-cashback-credit-cards-2026">Best cashback credit cards 2026</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
