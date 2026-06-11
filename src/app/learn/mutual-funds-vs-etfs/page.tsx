import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "mutual-funds-vs-etfs";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Mutual funds vs. ETFs: Which should you buy?";
const description =
  "Mutual funds and ETFs hold the same kinds of underlying assets but trade and tax differently. ETFs are usually cheaper, more tax-efficient, and trade like stocks. Mutual funds make sense in 401(k)s and for fractional dollar-cost averaging. Here's how to decide.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the difference in one sentence?",
    a: "ETFs trade on a stock exchange throughout the day at market price; mutual funds price once per day at the closing NAV and you buy/sell through the fund company. Same underlying assets, different wrapper.",
  },
  {
    q: "Are ETFs always cheaper?",
    a: "Almost always, but not by much among the major index funds. The biggest ETFs (VTI, VOO, ITOT) carry expense ratios of 0.03% — same range as the cheapest index mutual funds at Fidelity (FZROX is even 0%) and Schwab. The bigger ETF cost advantage shows up in actively managed funds, where ETFs typically run ~0.40% vs. ~0.80% for equivalent mutual funds.",
  },
  {
    q: "Which is more tax-efficient in a taxable brokerage account?",
    a: "ETFs, due to the 'in-kind redemption' creation/redemption mechanism that lets ETF managers offload appreciated shares without realizing capital gains. Mutual funds must sell shares to meet redemptions, which generates taxable capital gains distributions that all shareholders pay tax on. In a taxable account, this difference is meaningful over decades. In a 401(k)/IRA, the difference doesn't matter.",
  },
  {
    q: "Can I dollar-cost average into an ETF?",
    a: "Yes — every major brokerage now supports fractional ETF shares for as little as $1. Fidelity, Schwab, Vanguard, Robinhood, and SoFi all support fractional ETF investing. This was the historic advantage of mutual funds, but it's largely closed.",
  },
  {
    q: "Why do 401(k)s usually offer mutual funds and not ETFs?",
    a: "Plan recordkeeping infrastructure was built around mutual funds. Most 401(k) plans only offer mutual funds (Collective Investment Trusts or institutional share classes), with maybe a self-directed brokerage window for ETFs. This is changing slowly — some newer 401(k) recordkeepers now offer ETF lineups.",
  },
  {
    q: "What's a CIT and is it better than either?",
    a: "Collective Investment Trust — institutional cousin of a mutual fund, available only through retirement plans. CITs often have lower expense ratios than the mutual-fund equivalent because they have lower marketing and regulatory overhead. If your 401(k) offers a CIT version of an index fund (look for 'TR' or 'Trust' in the name), it's usually the cheapest option.",
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
          subtitle="Same underlying assets, different wrappers. Here's where ETFs actually win, where mutual funds still make sense, and why the difference matters less than you think."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Mutual funds and ETFs hold the same kinds of underlying assets — stocks, bonds,
            or a mix.</strong> What differs is the <strong>wrapper</strong>: how shares are
            created, redeemed, traded, taxed, and priced. For most investors, the underlying
            <em> exposure</em> matters far more than the wrapper choice.
          </p>

          <p>
            But the wrapper does matter at the margins, and in some accounts those margins compound
            into real money. Here's where each one wins.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The wrapper differences</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Dimension</th>
                  <th className="py-3 pr-4">Mutual fund</th>
                  <th className="py-3 pr-4">ETF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Trades</td><td className="py-3 pr-4">Once daily at closing NAV</td><td className="py-3 pr-4">All day on an exchange at market price</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Minimum purchase</td><td className="py-3 pr-4">Often $1,000–$3,000 to start; some $0</td><td className="py-3 pr-4">1 share, or $1 with fractional</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Expense ratio (index)</td><td className="py-3 pr-4">0.00%–0.10% at major brokerages</td><td className="py-3 pr-4">0.03%–0.10% at major issuers</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Expense ratio (active)</td><td className="py-3 pr-4">0.60%–1.00%+</td><td className="py-3 pr-4">0.30%–0.60% typical</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Capital gains distributions</td><td className="py-3 pr-4">Common (taxable in non-retirement accounts)</td><td className="py-3 pr-4">Rare due to in-kind redemption</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Bid/ask spread</td><td className="py-3 pr-4">None (priced at NAV)</td><td className="py-3 pr-4">Tiny on major ETFs (~1¢)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Fractional shares</td><td className="py-3 pr-4">Native (any dollar amount)</td><td className="py-3 pr-4">Yes at most major brokerages now</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Auto-invest schedules</td><td className="py-3 pr-4">Easy at fund company</td><td className="py-3 pr-4">Brokerage-dependent</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">401(k)s, set-and-forget auto-invest</td><td className="py-3 pr-4">Taxable accounts, lower fees on active</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-efficiency story</h2>

          <p>
            <strong>The single biggest practical advantage of ETFs over mutual funds is tax
            efficiency in taxable brokerage accounts.</strong> Here's why.
          </p>

          <p>
            When a mutual fund investor sells shares, the fund manager has to sell underlying
            holdings to raise cash for the redemption. If those holdings have appreciated, the fund
            realizes capital gains that get distributed to <em>all</em> shareholders at year end —
            even ones who didn't sell. You pay taxes on those distributions regardless.
          </p>

          <p>
            ETFs use a creation/redemption mechanism with Authorized Participants (large
            institutions). When shares need to be created or redeemed, the ETF exchanges securities
            "in-kind" rather than selling. This effectively never realizes capital gains inside the
            fund. The ETF manager can also use this mechanism to flush low-basis lots out without a
            tax event.
          </p>

          <p>
            <strong>Practical impact:</strong> A 2023 Morningstar study found the average US equity
            mutual fund distributed ~3.4% of NAV in capital gains annually over recent years; the
            average equivalent ETF distributed ~0.1%. Over 30 years in a taxable account, the
            compounding difference of paying tax on those distributions vs. deferring it is
            meaningful — often <strong>~0.30% to 0.60%/year of after-tax return drag</strong> on
            mutual funds vs. ETFs.
          </p>

          <h3>This matters only in taxable accounts</h3>

          <p>
            In a 401(k), Roth IRA, or Traditional IRA: distributions don't trigger annual taxes (no
            tax until withdrawal in Traditional, never in Roth). The ETF tax advantage disappears.
            So in retirement accounts, pick whatever has the lowest expense ratio.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where mutual funds still win</h2>

          <h3>1. 401(k) plans</h3>

          <p>
            <strong>Almost all 401(k) plans offer mutual funds, not ETFs.</strong> Plan
            recordkeepers were built around mutual fund infrastructure. Your only ETF option in a
            401(k) is usually a self-directed brokerage window — and most 401(k) participants don't
            have that. So: if you're investing in a 401(k), you're using mutual funds. Pick the
            cheapest index mutual fund the plan offers (often a target-date or S&P 500 index fund).
          </p>

          <h3>2. Automated dollar-cost averaging</h3>

          <p>
            Mutual funds let you auto-invest exact dollar amounts ($500/month) without fuss. ETFs
            can do the same with fractional shares at major brokerages, but the experience is
            slightly less polished — some brokerages still require whole shares for recurring
            buys, or process fractional auto-invests in a single batch once per day.
          </p>

          <h3>3. Some niche active strategies</h3>

          <p>
            A small minority of mutual fund managers have credible long-run alpha (Dodge & Cox,
            Primecap, Wellington, some Capital Group strategies). If you want exposure to those
            managers specifically and the ETF version doesn't exist, the mutual fund is your only
            access.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where ETFs win</h2>

          <h3>1. Taxable brokerage accounts</h3>

          <p>
            Already covered — tax efficiency from in-kind redemption. If you're investing in a
            regular taxable brokerage account, lean ETF unless you have a specific reason for the
            mutual fund.
          </p>

          <h3>2. Lower fees on actively managed strategies</h3>

          <p>
            Active mutual funds typically charge 0.60%–1.00%+ in expense ratios. Active ETFs (a
            growing category) typically charge 0.30%–0.60% for similar strategies. The same fund
            manager often offers both wrappers; the ETF wrapper's lower price is a free lunch.
          </p>

          <h3>3. Intraday liquidity</h3>

          <p>
            Sometimes useful if you're rebalancing a portfolio mid-day or doing tax-loss harvesting
            (you need to know your sell price). Mutual funds don't price until 4 PM; ETFs trade
            continuously.
          </p>

          <h3>4. Lower minimums</h3>

          <p>
            Most mutual funds require $1,000–$3,000 to open a position (some require $10K+ for
            institutional share classes with lower expense ratios). An ETF needs $1 with
            fractional shares. For someone just starting out with a few hundred dollars, ETFs are
            more accessible.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The wrapper hardly matters for the core decision</h2>

          <p>
            For most investors saving for retirement in a 401(k) + Roth IRA + maybe a taxable
            brokerage, the wrapper choice is overwhelmed by:
          </p>

          <ul>
            <li><strong>Asset allocation</strong> (stocks vs. bonds — see{" "}
              <Link href="/learn/asset-allocation-by-age">asset allocation by age</Link>).
            </li>
            <li><strong>Total expense ratio</strong> (under 0.10% for index funds; the wrapper difference inside that is rounding).</li>
            <li><strong>Tax location</strong> (using Roth/401(k) vs. taxable wisely).</li>
            <li><strong>Consistency</strong> (auto-investing every month for decades).</li>
          </ul>

          <p>
            <strong>If you can only remember one rule:</strong> low-cost broad index ETFs (VTI,
            ITOT, VOO) in taxable accounts; low-cost broad index mutual funds (FZROX, FSKAX, VTSAX)
            in retirement accounts. Same underlying. Pick the cheapest wrapper available in each
            account type.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The current low-cost menu (2026 expense ratios)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Exposure</th>
                  <th className="py-3 pr-4">ETF (taxable)</th>
                  <th className="py-3 pr-4">Mutual fund (retirement)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Total US stock market</td><td className="py-3 pr-4">VTI (0.03%) / ITOT (0.03%)</td><td className="py-3 pr-4">VTSAX (0.04%) / FZROX (0.00%) / SWTSX (0.03%)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">S&P 500</td><td className="py-3 pr-4">VOO (0.03%) / IVV (0.03%) / SPY (0.09%)</td><td className="py-3 pr-4">VFIAX (0.04%) / FXAIX (0.015%) / SWPPX (0.02%)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Total international</td><td className="py-3 pr-4">VXUS (0.07%) / IXUS (0.07%)</td><td className="py-3 pr-4">VTIAX (0.09%) / FZILX (0.00%) / SWISX (0.06%)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">US total bond</td><td className="py-3 pr-4">BND (0.03%) / AGG (0.03%)</td><td className="py-3 pr-4">VBTLX (0.05%) / FXNAX (0.025%)</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            All of these are roughly interchangeable building blocks. Pick one wrapper, stay
            consistent, and never overthink it again.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually buy them</h2>

          <p>
            All three major low-cost brokerages offer commission-free trading on their own ETFs and
            mutual funds (plus most third-party ETFs).
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <p>
            For commission-free fractional-share investing in ETFs with $1 minimums, Robinhood and
            SoFi Invest are competitive:
          </p>

          <p>
            <AffiliateButton partner="robinhood" source={slug} variant="secondary">Robinhood</AffiliateButton>{" "}
            <AffiliateButton partner="sofi-invest" source={slug} variant="secondary">SoFi Invest</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-invest-in-stocks">How to invest in stocks</Link></li>
            <li><Link href="/learn/asset-allocation-by-age">Asset allocation by age</Link></li>
            <li><Link href="/learn/dollar-cost-averaging-vs-lump-sum">Dollar-cost averaging vs. lump sum</Link></li>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link></li>
            <li><Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link></li>
            <li><Link href="/learn/vanguard-vs-fidelity">Vanguard vs. Fidelity</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Invest" currentSlug="mutual-funds-vs-etfs" />
      </article>
    </>
  );
}
