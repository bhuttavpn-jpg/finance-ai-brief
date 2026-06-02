import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "short-vs-long-term-capital-gains";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Short-term vs. long-term capital gains: The 1-year line";
const description =
  "Hold a stock for over one year before selling, and the gain is taxed at preferential long-term rates (0%/15%/20%). Sell within one year, and the gain is taxed as ordinary income (10–37%). On a $10K gain in the 32% bracket, that's $1,700+ in tax savings — for nothing more than waiting a few extra days.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the difference between short-term and long-term capital gains?",
    a: "Holding period determines the tax rate. If you held the asset for more than one year before selling, the gain is long-term and qualifies for preferential rates (0%, 15%, or 20%). One year or less, it's short-term and taxed at your ordinary income tax rate (10–37% in 2026).",
  },
  {
    q: "How is the one-year holding period actually measured?",
    a: "It's measured from the day after acquisition to the day of sale. Buy on March 15, 2025: long-term starts March 16, 2026. Selling on March 15, 2026 is still short-term — you need to sell on March 16, 2026 or later to qualify for long-term treatment. Off-by-one errors here cost real money.",
  },
  {
    q: "Why are long-term rates lower?",
    a: "Tax policy. Congress has historically used preferential rates on long-term capital gains to encourage long-term investing rather than short-term trading. Whether that's good policy is debated, but the rates are the rates. Maximum long-term rate is 20%; maximum short-term rate (ordinary income) is 37%.",
  },
  {
    q: "Do dividends get the same treatment?",
    a: "Qualified dividends do — they're taxed at the same 0%/15%/20% rates as long-term capital gains. Non-qualified (ordinary) dividends are taxed as ordinary income. Most US stock dividends from common shares are qualified if you hold the stock for more than 60 days around the ex-dividend date.",
  },
  {
    q: "What about losses?",
    a: "Losses follow the same short/long-term classification rules. Short-term losses first offset short-term gains; long-term losses first offset long-term gains. Net losses can offset up to $3,000 of ordinary income per year ($1,500 MFS), with excess carried forward indefinitely.",
  },
  {
    q: "Do I owe state tax too?",
    a: "Yes in most states. Most states don't distinguish short-term from long-term — they tax both as ordinary income at the state rate. A few states (notably California, New York, Massachusetts) have particularly steep rates. Total combined federal + state can run 30–55% on short-term gains for high earners in high-tax states.",
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
          subtitle="The one-year holding period is one of the highest-leverage tax rules in personal finance. Sell on day 365: ordinary income rates. Sell on day 366: preferential capital gains rates."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The single most expensive avoidable mistake in DIY investing is selling a stock
            10 days before the one-year mark.</strong> The difference between short-term and
            long-term capital gains rates is up to 17 percentage points (37% top ordinary vs. 20%
            top long-term). On a $10,000 gain, that's $1,700 in tax — for waiting 10 more days.
          </p>

          <p>
            Here's the rule, the 2026 numbers (per IRS Rev. Proc. 2025-32), and the practical
            implications.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The rule in one paragraph</h2>

          <p>
            <strong>Hold an investment for MORE than one year before selling, and the gain is
            long-term — taxed at 0%, 15%, or 20% depending on income.</strong> Hold for one year or
            less, and the gain is short-term — taxed at your ordinary income rate (10–37% in 2026
            for federal).
          </p>

          <p>
            Long-term tax brackets are MUCH friendlier than ordinary income brackets — the 15% bracket
            covers most middle-class earners, and the 20% bracket starts above ~$500K of income.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 long-term capital gains brackets</h2>

          <p>
            Source: IR-2025-103 / Rev. Proc. 2025-32 (October 9, 2025). Verify exact dollar
            thresholds at filing.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Single</th>
                  <th className="py-3 pr-4">MFJ</th>
                  <th className="py-3 pr-4">HoH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">0%</td><td className="py-3 pr-4">Up to ~$49K</td><td className="py-3 pr-4">Up to ~$98K</td><td className="py-3 pr-4">Up to ~$66K</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">15%</td><td className="py-3 pr-4">~$49K – ~$540K</td><td className="py-3 pr-4">~$98K – ~$608K</td><td className="py-3 pr-4">~$66K – ~$574K</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">20%</td><td className="py-3 pr-4">Above ~$540K</td><td className="py-3 pr-4">Above ~$608K</td><td className="py-3 pr-4">Above ~$574K</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Plus 3.8% Net Investment Income Tax (NIIT)</strong> if your modified AGI is over
            $200K single / $250K MFJ. Effective top rate becomes 23.8% LTCG.
          </p>

          <p>
            Full breakdown in our{" "}
            <Link href="/learn/capital-gains-tax-2026">capital gains tax 2026</Link> guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 short-term capital gains rates (= ordinary income brackets)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Approximate single income range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">10%</td><td className="py-3 pr-4">Up to ~$11.9K</td></tr>
                <tr><td className="py-3 pr-4">12%</td><td className="py-3 pr-4">~$11.9K – ~$48.5K</td></tr>
                <tr><td className="py-3 pr-4">22%</td><td className="py-3 pr-4">~$48.5K – ~$103K</td></tr>
                <tr><td className="py-3 pr-4">24%</td><td className="py-3 pr-4">~$103K – ~$197K</td></tr>
                <tr><td className="py-3 pr-4">32%</td><td className="py-3 pr-4">~$197K – ~$250K</td></tr>
                <tr><td className="py-3 pr-4">35%</td><td className="py-3 pr-4">~$250K – ~$626K</td></tr>
                <tr><td className="py-3 pr-4">37%</td><td className="py-3 pr-4">Above ~$626K</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            See <Link href="/learn/tax-brackets-2026">2026 federal income tax brackets</Link> for
            exact thresholds.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math: $10,000 gain at different brackets</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Bracket</th>
                  <th className="py-3 pr-4">Short-term tax</th>
                  <th className="py-3 pr-4">Long-term tax</th>
                  <th className="py-3 pr-4">Savings from waiting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">12% / 0% LTCG</td><td className="py-3 pr-4">$1,200</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$1,200</td></tr>
                <tr><td className="py-3 pr-4">22% / 15% LTCG</td><td className="py-3 pr-4">$2,200</td><td className="py-3 pr-4">$1,500</td><td className="py-3 pr-4">$700</td></tr>
                <tr><td className="py-3 pr-4">24% / 15% LTCG</td><td className="py-3 pr-4">$2,400</td><td className="py-3 pr-4">$1,500</td><td className="py-3 pr-4">$900</td></tr>
                <tr><td className="py-3 pr-4">32% / 15% LTCG</td><td className="py-3 pr-4">$3,200</td><td className="py-3 pr-4">$1,500</td><td className="py-3 pr-4">$1,700</td></tr>
                <tr><td className="py-3 pr-4">37% / 23.8% LTCG (+ NIIT)</td><td className="py-3 pr-4">$3,700</td><td className="py-3 pr-4">$2,380</td><td className="py-3 pr-4">$1,320</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The biggest dollar savings hit at the 32% bracket</strong> — middle-upper income
            where the gap between ordinary and LTCG rates is widest.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How the holding period actually works</h2>

          <p>
            <strong>The holding period starts the day AFTER you acquired the asset and ends the day
            you sell it.</strong> The IRS counts using calendar days, not trading days.
          </p>

          <ul>
            <li><strong>Buy March 15, 2025.</strong> Holding period begins March 16, 2025.</li>
            <li><strong>To qualify for long-term:</strong> sell on or after March 16, 2026.</li>
            <li><strong>Selling March 15, 2026:</strong> exactly one year — still SHORT-TERM. You need MORE than one year.</li>
          </ul>

          <p>
            <strong>The off-by-one mistake is common and expensive.</strong> If you're approaching
            the one-year mark, wait the extra day.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Special cases</h2>

          <h3>Inherited investments</h3>

          <p>
            <strong>Always long-term, regardless of how long you hold them.</strong> Inherited
            stocks also get a "step-up in basis" — your cost basis is the value at the date of the
            previous owner's death, not what they paid. This is one of the largest tax breaks in
            personal finance for high-net-worth families.
          </p>

          <h3>Gifted investments</h3>

          <p>
            <strong>You inherit the giver's holding period and basis</strong>, not a fresh start.
            If your parent bought VTI 5 years ago and gave it to you, you've held it 5 years — sell
            immediately and the gain is long-term.
          </p>

          <h3>Crypto and NFTs</h3>

          <p>
            Same rules as stocks — taxed as property. Long-term if held more than one year,
            short-term otherwise. NFTs may be subject to higher "collectibles" rates (28%) — verify
            current IRS guidance.
          </p>

          <h3>Real estate</h3>

          <p>
            Same one-year rule, but primary residences also get a separate exclusion (Section 121):
            up to $250K single / $500K MFJ of gain excluded from tax if you've lived in the home as
            primary residence for 2 of the last 5 years.
          </p>

          <h3>Options and futures</h3>

          <p>
            Section 1256 contracts (regulated futures, broad-based index options) get unique
            "60/40 treatment" — 60% long-term and 40% short-term regardless of holding period.
            Plays out favorably for active futures traders.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Tax-loss harvesting interaction</h2>

          <p>
            <strong>Short-term losses are MORE valuable than long-term losses</strong> — they offset
            short-term gains (taxed up to 37%) before long-term gains (taxed up to 20%). So when
            harvesting losses, consider deliberately taking short-term losses to offset short-term
            gains you couldn't avoid.
          </p>

          <p>
            But watch the wash sale rule — see our{" "}
            <Link href="/learn/tax-loss-harvesting-wash-sale-rule">wash sale rule guide</Link> for
            the 30-day window and the substantially-identical pitfalls.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Practical playbook</h2>

          <ol>
            <li><strong>Check your holding period before selling.</strong> Look at "purchase date" in your brokerage app for the relevant tax lot.</li>
            <li><strong>If within 30 days of long-term qualification, wait.</strong> Almost always worth the delay unless the security is collapsing.</li>
            <li><strong>Use specific-lot identification</strong> on partial sales. Sell the long-term lots first, leave short-term lots for later. Most brokers default to FIFO — change to "specific lot" in account settings.</li>
            <li><strong>Harvest short-term losses first.</strong> They offset higher-rate gains.</li>
            <li><strong>Plan large gains around your tax year.</strong> If you have a low-income year coming, defer gains into it for 0% LTCG bracket eligibility.</li>
            <li><strong>Always check state rules.</strong> Most states don't distinguish — both rates may be high.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Where to invest</h2>

          <p>
            For long-term holding, low-expense-ratio index funds at the major brokerages are the
            standard pick.
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              See Fidelity →
            </AffiliateButton>
          </p>

          <p>
            Or:{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <p>
            More options in <Link href="/learn/best-brokerage-accounts-beginners">best brokerage accounts for beginners</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The one-year holding period is one of the highest-leverage rules in personal
            tax.</strong> Hold past day 365, qualify for preferential rates. Sell on day 364, get
            taxed at ordinary income rates.
          </p>

          <p>
            Whenever possible, plan sales around the one-year mark. The tax math is worth more than
            most short-term price movement on a buy-and-hold position.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/capital-gains-tax-2026">Capital gains tax 2026</Link></li>
            <li><Link href="/learn/tax-brackets-2026">2026 federal income tax brackets</Link></li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting guide</Link></li>
            <li><Link href="/learn/tax-loss-harvesting-wash-sale-rule">Wash sale rule</Link></li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link></li>
            <li><Link href="/learn/how-to-invest-in-stocks">How to invest in stocks</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
