import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "index-funds-vs-etfs";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Index funds vs. ETFs: which should you actually buy in 2026?";
const description =
  "An index mutual fund and an index ETF can hold the same stocks, charge the same expense ratio, and give you nearly identical returns. The differences are real but small — and they tilt one way in your 401(k), the other in a taxable brokerage. Here's the framework.";
const PUBLISHED = "2026-06-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Are index funds and ETFs the same thing?",
    a: "Almost. Both can be passively managed and track a market index. The difference is the legal wrapper: an index fund is a mutual fund (priced once a day, bought directly from the fund company), an ETF is an exchange-traded fund (priced continuously, traded like a stock). VTSAX (Vanguard's Total Stock Market index fund) and VTI (its ETF version) hold the same underlying portfolio.",
  },
  {
    q: "Which is cheaper to own?",
    a: "ETFs are usually a few basis points cheaper. VTI charges 0.03% vs. VTSAX's 0.04%. Schwab's SCHB ETF is 0.03% vs. SWTSX mutual fund at 0.03% (a tie). Fees have compressed so much that the gap is now in single basis points — not the deciding factor for most people.",
  },
  {
    q: "Which is more tax-efficient in a taxable account?",
    a: "ETFs, by a meaningful margin. ETFs use an in-kind redemption mechanism (creation/redemption units) that lets them flush appreciated holdings without triggering capital gains distributions. Index mutual funds occasionally distribute small capital gains; ETFs almost never do. For a taxable brokerage, prefer ETFs.",
  },
  {
    q: "Does it matter inside a 401(k) or IRA?",
    a: "Much less. Capital gains distributions are tax-deferred (Traditional) or tax-free (Roth) inside retirement accounts, so the ETF tax-efficiency edge disappears. In a 401(k), mutual funds are often the only option anyway; in an IRA, pick whichever costs less and is easier for you to auto-invest.",
  },
  {
    q: "Can you auto-invest in ETFs?",
    a: "It's gotten much easier — Fidelity and Schwab now support fractional ETF dollar-based auto-investing on most ETFs. Vanguard supports fractional shares on its own ETFs. The historical advantage of mutual funds (set $500/month auto-buy) has largely closed, though mutual funds still feel more frictionless if you're maxing a Roth IRA in one click.",
  },
  {
    q: "What about active funds — should I avoid them entirely?",
    a: "For broad-market exposure, yes. Over 15 years, ~85% of large-cap active funds underperform the S&P 500 (S&P SPIVA reports). Higher fees + worse pre-tax returns + worse after-tax returns. Stick to broad index funds or ETFs for your core portfolio.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Invest" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Same portfolio, different wrappers. The difference is tax-efficiency in taxable accounts and trading mechanics — and not much else."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="8 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The honest answer most articles dodge:</strong> if you&apos;re comparing an
            index <em>mutual fund</em> against an index <em>ETF</em> that track the same benchmark,
            the difference in returns over a decade is usually a rounding error.
          </p>

          <p>
            What does matter: which one is in your 401(k) menu, which one is more
            tax-efficient if you&apos;re investing in a taxable brokerage, and how easy it is to
            auto-invest. Here&apos;s the framework with 2026 expense ratios for the funds most
            beginners actually buy.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second decision tree</h2>

          <ul>
            <li><strong>401(k)?</strong> Use whatever the cheap index option in your plan is — usually a mutual fund. Move on.</li>
            <li><strong>Roth IRA at Fidelity/Schwab/Vanguard?</strong> Either works. Pick the index mutual fund if you want auto-invest in whole-dollar amounts; pick the ETF if you want a few basis points lower expense ratio.</li>
            <li><strong>Taxable brokerage account?</strong> ETF. The tax-efficiency advantage is real and compounds.</li>
            <li><strong>Tax-loss harvesting?</strong> ETF — easier to swap into a similar but not identical ETF without triggering the wash-sale rule.</li>
          </ul>

          <p>
            The rest of this article is the math behind those rules.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The wrappers, side by side</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Index mutual fund</th>
                  <th className="py-3 pr-4">Index ETF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Pricing</td><td className="py-3 pr-4">Once a day, at NAV</td><td className="py-3 pr-4">Continuously, market price</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Bought from</td><td className="py-3 pr-4">Fund company</td><td className="py-3 pr-4">Stock exchange</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Trading commission</td><td className="py-3 pr-4">$0 at the fund family</td><td className="py-3 pr-4">$0 at most brokerages</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Fractional shares</td><td className="py-3 pr-4">Always — dollar-based</td><td className="py-3 pr-4">Yes at most brokerages, dollar-based</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Bid/ask spread</td><td className="py-3 pr-4">None</td><td className="py-3 pr-4">~1 basis point on broad-market ETFs</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital gains distributions</td><td className="py-3 pr-4">Occasional, small</td><td className="py-3 pr-4">Almost never (in-kind creation/redemption)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Minimum investment</td><td className="py-3 pr-4">$1–$3,000 depending on fund</td><td className="py-3 pr-4">1 share (or $1 fractional)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>2026 expense ratios — the cheap broad-market options</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Exposure</th>
                  <th className="py-3 pr-4">Mutual fund</th>
                  <th className="py-3 pr-4">ETF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Total US stock market</td><td className="py-3 pr-4">VTSAX 0.04%, SWTSX 0.03%, FSKAX 0.015%</td><td className="py-3 pr-4">VTI 0.03%, SCHB 0.03%, ITOT 0.03%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">S&amp;P 500</td><td className="py-3 pr-4">VFIAX 0.04%, SWPPX 0.02%, FXAIX 0.015%</td><td className="py-3 pr-4">VOO 0.03%, SPY 0.0945%, IVV 0.03%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Total international stock</td><td className="py-3 pr-4">VTIAX 0.09%, SWISX 0.06%, FTIHX 0.06%</td><td className="py-3 pr-4">VXUS 0.05%, IXUS 0.07%, SCHF 0.06%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Total bond</td><td className="py-3 pr-4">VBTLX 0.04%, FXNAX 0.025%</td><td className="py-3 pr-4">BND 0.03%, AGG 0.03%, SCHZ 0.03%</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">
            Fidelity&apos;s in-house mutual funds (FSKAX, FXAIX, FZROX) are the cheapest in the industry —
            in some cases cheaper than the corresponding ETFs. If your IRA is at Fidelity, the mutual
            funds are not the &quot;losing&quot; choice.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-efficiency gap (taxable accounts only)</h2>

          <p>
            <strong>Here&apos;s the one place ETFs genuinely win.</strong> When a mutual fund
            shareholder redeems, the fund manager may have to sell appreciated stock to fund the
            redemption — producing capital gains that get distributed to all remaining
            shareholders, taxable in the year received.
          </p>

          <p>
            ETFs use an &quot;in-kind&quot; creation/redemption mechanism. Authorized participants
            swap baskets of underlying stock for ETF shares (and vice versa) without the fund
            actually selling anything. That mechanism flushes out the most-appreciated lots,
            leaving the ETF&apos;s cost basis higher and capital gains distributions near zero.
          </p>

          <p>
            For Vanguard, this gap has historically been small — Vanguard&apos;s patented dual-share
            structure let their mutual funds piggyback on the ETF&apos;s tax efficiency. That
            patent expired in 2023, and other fund families are catching up. For now, in a taxable
            account, <strong>default to ETFs</strong> and only step over to a mutual fund if there&apos;s
            a specific reason.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The auto-invest question</h2>

          <p>
            Mutual funds were historically much easier to auto-invest because they support
            dollar-based purchases natively. ETFs required whole-share purchases — leaving
            uninvested cash if your $500 contribution didn&apos;t divide evenly into a $215 share
            price.
          </p>

          <p>
            <strong>That&apos;s mostly fixed.</strong> Fidelity, Schwab, and Robinhood all support
            dollar-based fractional ETF investing. Vanguard supports fractional shares on its own
            ETFs but not on third-party ETFs. M1 Finance pioneered automated fractional
            ETF investing.
          </p>

          <p>
            For someone who wants to set a $X/month contribution and forget it: both wrappers work
            in 2026 at most brokerages. Mutual funds still feel slightly more frictionless
            (one-click Roth IRA contribution → instantly invested at end-of-day NAV), but the gap
            has closed.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-loss harvesting angle</h2>

          <p>
            <strong>ETFs are easier to tax-loss harvest.</strong> The wash-sale rule blocks you
            from buying a &quot;substantially identical&quot; security within 30 days of taking a
            tax loss. Two ETFs tracking similar but distinct indexes (VTI tracking CRSP US Total
            Market and ITOT tracking S&amp;P Total Market) are generally not substantially
            identical — letting you harvest a loss in one and immediately buy the other.
          </p>

          <p>
            With mutual funds, the same-index-tracking funds at different fund families are easy
            substitutes, but the trade settles at end-of-day NAV, which complicates timing.
          </p>

          <p>
            See <Link href="/learn/tax-loss-harvesting-guide">tax-loss harvesting guide</Link> and{" "}
            <Link href="/learn/tax-loss-harvesting-wash-sale-rule">wash-sale rule</Link> for the
            mechanics.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When index mutual funds are still better</h2>

          <ul>
            <li><strong>You&apos;re in a 401(k).</strong> Mutual funds are typically the only option, and they&apos;re fine.</li>
            <li><strong>You want truly automated, scheduled IRA contributions.</strong> Fidelity, Schwab, and Vanguard auto-invest in their own mutual funds with zero friction.</li>
            <li><strong>You&apos;re at Fidelity and want zero-fee.</strong> FZROX (Total Market), FZILX (International), FNILX (Large Cap) all charge 0.00% expense ratio. The ETF equivalents charge 0.03%.</li>
            <li><strong>You hate looking at market prices.</strong> Mutual funds price once a day at NAV. You buy. You wait. You don&apos;t see intraday volatility.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>When ETFs are better</h2>

          <ul>
            <li><strong>Taxable brokerage account.</strong> The capital-gains-distribution edge is real.</li>
            <li><strong>You want a non-Big-Three brokerage.</strong> ETFs are universally available; access to specific mutual funds varies by broker.</li>
            <li><strong>Tax-loss harvesting workflow.</strong> Cleaner pair-trading and intraday execution.</li>
            <li><strong>Trading flexibility.</strong> ETFs let you place limit orders, stop orders, etc. — useful for larger transitions but not for monthly contributions.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The common myth: ETFs are always cheaper</h2>

          <p>
            <strong>False.</strong> Fidelity&apos;s FSKAX mutual fund is 0.015% vs. VTI ETF at
            0.03%. FZROX is 0.00%. FXAIX (S&amp;P 500) is 0.015% vs. VOO at 0.03%. The mutual-fund-is-more-expensive
            framing is a relic; the cheap brokers&apos; in-house mutual funds are extremely competitive.
          </p>

          <p>
            The real cost comparison includes: expense ratio + bid/ask spread (ETFs only) + cash
            drag from un-invested odd dollars (ETFs without fractional support) + tax drag from
            capital gains distributions (mutual funds, in taxable). For most beginner investors at
            Fidelity or Schwab, the total all-in cost is within 1–2 basis points either way.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to actually do this</h2>

          <p>
            The three brokerages worth holding your accounts at:
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Open Fidelity →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Open Vanguard →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Open Schwab →</AffiliateButton>
          </div>

          <p>
            All three give you zero-commission ETF trades, fractional ETF shares, and access to
            their own cheap mutual fund families. See <Link href="/learn/vanguard-vs-fidelity">Vanguard
            vs. Fidelity</Link> and <Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link>{" "}
            for which to pick.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For most people, the wrapper is the last decision, not the first.</strong>{" "}
            Pick your asset allocation. Pick your broker. Use the cheap broad-market option that&apos;s
            most convenient — mutual fund in a 401(k), ETF in a taxable brokerage, either in an
            IRA. Over 30 years, the difference between VTI and VTSAX is measured in tens of
            basis points, not percentage points.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/mutual-funds-vs-etfs">Mutual funds vs. ETFs</Link> — the broader wrapper comparison.</li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest your first $1,000</Link> — a starter playbook with specific fund picks.</li>
            <li><Link href="/learn/target-date-funds-explained">Target-date funds explained</Link> — the one-ticket alternative.</li>
            <li><Link href="/learn/asset-allocation-by-age">Asset allocation by age</Link> — what to put in the wrapper.</li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting</Link> — the ETF use case.</li>
            <li><Link href="/learn/vanguard-vs-fidelity">Vanguard vs. Fidelity</Link> — picking the broker.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Invest" currentSlug={slug} />
      </article>
    </>
  );
}
