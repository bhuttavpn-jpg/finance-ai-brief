import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "asset-allocation-by-age";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Asset allocation by age: A practical glide path";
const description =
  "The old '100 minus your age in stocks' rule is too conservative now that retirements last 30+ years. Here's a practical glide path that keeps a heavier stock weighting deeper into your career — plus what to actually hold and when to rebalance.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the 100-minus-age rule?",
    a: "An old heuristic: subtract your age from 100 and that's your stock %. At 30, hold 70% stocks. At 60, hold 40%. Most modern advisors use 110 or 120 minus age instead, since retirements now last 30+ years and bonds yield less than they did historically. We use 120-minus-age as the baseline in this article.",
  },
  {
    q: "Why have stocks at all if I'm close to retirement?",
    a: "Because retirement isn't a single moment — it's 25–35 years of withdrawals. A 65-year-old retiree needs portfolio growth to outlast inflation through their late 80s/90s. The classic mistake is going 'all bonds' at retirement and watching purchasing power erode for three decades.",
  },
  {
    q: "What counts as 'bonds' in this context?",
    a: "Investment-grade fixed income — typically a total bond market index fund (BND, FXNAX, AGG) holding US Treasuries and investment-grade corporates. Stable-value funds, money-market funds, and short-term CDs also count as the 'safe' side of the portfolio in retirement.",
  },
  {
    q: "Should I add international stocks?",
    a: "Yes — most advisors recommend 20–40% of the equity sleeve in international stocks (VXUS, IXUS, VTIAX). For simplicity, you can also use a total world stock fund (VT) which is automatically ~60/40 US/international. Don't overthink the international % — anything between 20% and 50% of equities is reasonable.",
  },
  {
    q: "What about target-date funds?",
    a: "Target-date funds (Vanguard Target Retirement, Fidelity Freedom Index, Schwab Target) execute this glide path automatically. They adjust the stock/bond mix yearly based on the target retirement year. If you don't want to manage allocation yourself, a single target-date fund is the cleanest one-decision solution.",
  },
  {
    q: "How often should I rebalance?",
    a: "Once per year, or whenever any major asset class drifts more than 5 percentage points from target. Many investors rebalance automatically with new contributions (buy the underweight asset class). Tax-advantaged accounts are the cheapest place to rebalance since there's no capital gains tax on the sale.",
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
          subtitle="A practical stock/bond glide path, decade by decade. Plus the three-fund portfolio that makes this trivial to actually execute."
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
            <strong>Asset allocation — your stock/bond split — drives the vast majority of your
            portfolio's risk and return.</strong> It matters more than picking the "right" funds.
            More than market timing. More than tax-loss harvesting. Get this one decision roughly
            right, then automate everything around it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The baseline glide path</h2>

          <p>
            We use <strong>120-minus-age in stocks</strong> as the baseline — more aggressive than
            the older 100-minus-age rule, because retirements now last 30+ years and bond yields
            have been lower than historical averages for the past two decades.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Age</th>
                  <th className="py-3 pr-4">Stocks</th>
                  <th className="py-3 pr-4">Bonds</th>
                  <th className="py-3 pr-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">20s</td><td className="py-3 pr-4">90–100%</td><td className="py-3 pr-4">0–10%</td><td className="py-3 pr-4">Maximum equity. 40-year time horizon.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">30s</td><td className="py-3 pr-4">85–90%</td><td className="py-3 pr-4">10–15%</td><td className="py-3 pr-4">Still very aggressive. Start adding bonds at age 35.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">40s</td><td className="py-3 pr-4">75–80%</td><td className="py-3 pr-4">20–25%</td><td className="py-3 pr-4">Peak earning years. Begin meaningful diversification.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">50s</td><td className="py-3 pr-4">65–70%</td><td className="py-3 pr-4">30–35%</td><td className="py-3 pr-4">Critical decade — sequence-of-returns risk starts mattering.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">60s (pre-retirement)</td><td className="py-3 pr-4">55–60%</td><td className="py-3 pr-4">40–45%</td><td className="py-3 pr-4">Build a 2–3 year cash/bond bucket for early retirement.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">65 (retirement)</td><td className="py-3 pr-4">50–55%</td><td className="py-3 pr-4">45–50%</td><td className="py-3 pr-4">Glide-path low point; still need 50%+ stocks for 30-year horizon.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">70s+</td><td className="py-3 pr-4">40–50%</td><td className="py-3 pr-4">50–60%</td><td className="py-3 pr-4">Mostly stable; tilt slightly more conservative if portfolio is large.</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Why we don't use 100-minus-age anymore</h2>

          <p>
            The classic "100 minus age in stocks" rule was articulated when:
          </p>

          <ul>
            <li>Average US life expectancy at 65 was ~14 more years (now ~20).</li>
            <li>Bond yields averaged 5–7% (today's nominal Treasury yields are ~4%, real yields under 2%).</li>
            <li>Retirements often meant a pension + Social Security + modest savings, not portfolio-funded withdrawals.</li>
          </ul>

          <p>
            All three have flipped. Modern retirees need their portfolio to last longer, with bonds
            generating less, and few have pensions. The math just doesn't support 60% bonds at 65
            anymore.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The three-fund portfolio</h2>

          <p>
            The simplest implementation that delivers on this glide path is the <strong>three-fund
            portfolio</strong>: total US stocks + total international stocks + total US bonds.
          </p>

          <p>
            <strong>Example: age 35, target 85/15.</strong>
          </p>

          <ul>
            <li>60% US total stock market (VTI / FZROX / VTSAX)</li>
            <li>25% international total stock (VXUS / FZILX / VTIAX)</li>
            <li>15% US total bond (BND / FXNAX / VBTLX)</li>
          </ul>

          <p>
            <strong>Example: age 55, target 70/30.</strong>
          </p>

          <ul>
            <li>50% US total stock market</li>
            <li>20% international total stock</li>
            <li>30% US total bond</li>
          </ul>

          <p>
            That's it. Three funds, rebalanced annually, with new contributions directed to the
            underweight bucket. Decades of research show that adding fund #4, #5, or #6 rarely
            improves risk-adjusted return enough to justify the complexity.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How risk tolerance shifts the dial</h2>

          <p>
            The glide path above is a baseline. Adjust ±10 percentage points in stocks based on
            your honest answer to: <strong>"If my portfolio dropped 35% in 12 months, what would I
            do?"</strong>
          </p>

          <ul>
            <li><strong>"Keep buying more."</strong> Add 10 points to your equity %.</li>
            <li><strong>"Stay the course, don't change anything."</strong> Use the baseline.</li>
            <li><strong>"I'd panic-sell."</strong> Subtract 10 points. Going more conservative protects against the worst behavioral mistake — selling at the bottom.</li>
          </ul>

          <p>
            The right allocation isn't the most mathematically optimal one. It's the one you'll
            actually hold through a bear market without panic-selling.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Sequence-of-returns risk — why your 50s and 60s matter most</h2>

          <p>
            <strong>The order of returns matters far more in your withdrawal years than in your
            accumulation years.</strong> Two retirees with the same average 30-year return can have
            wildly different outcomes if one experienced bad returns early in retirement and the
            other experienced them late.
          </p>

          <p>
            A 2000-retiree who held 80% stocks took a 50%+ portfolio drawdown in 2000–2002, started
            withdrawing 4%/year anyway, and many ran out of money by 2020. A 1990-retiree with the
            same allocation rode strong returns up front and ended 30 years with more money than
            they started with.
          </p>

          <p>
            <strong>Mitigation:</strong> in the 5 years before and after retirement, your bond
            allocation matters most. A 30–40% bond cushion lets you draw from bonds during equity
            bear markets while stocks recover. That's why the glide path bottoms at 50/50, not 80/20.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bucket strategy (retirement)</h2>

          <p>
            Some retirees implement asset allocation as three "buckets" rather than percentages:
          </p>

          <ul>
            <li><strong>Bucket 1: Cash + short-term.</strong> 1–2 years of expenses in HYSA, money market, or short-term bonds. Drawn down for monthly living expenses.</li>
            <li><strong>Bucket 2: Bonds + intermediate.</strong> 5–7 years of expenses in total bond market funds. Refills bucket 1 every 1–2 years.</li>
            <li><strong>Bucket 3: Stocks.</strong> Everything else, fully invested in equities. Refills bucket 2 every 3–5 years (or when stocks are up).</li>
          </ul>

          <p>
            Functionally identical to a percentage-based allocation, but psychologically easier in
            bear markets — you're not "selling stocks at a loss," you're using your "cash bucket"
            that was always meant for this.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Rebalancing — when and how</h2>

          <ol>
            <li><strong>Calendar rebalance once per year.</strong> Pick a date (birthday, year-end), check actual vs. target, sell overweights, buy underweights.</li>
            <li><strong>Threshold rebalance.</strong> Rebalance whenever any asset class drifts more than 5 percentage points from target. (80/20 portfolio → rebalance when stocks hit 85% or 75%.)</li>
            <li><strong>Cash-flow rebalance.</strong> Direct new contributions to the underweight bucket. This handles most rebalancing without ever selling.</li>
          </ol>

          <h3>Where to rebalance</h3>

          <p>
            <strong>Always rebalance in tax-advantaged accounts first (401(k), IRA, Roth IRA, HSA)
            — they're tax-free trades.</strong> Avoid rebalancing in a taxable brokerage account
            unless you're tax-loss harvesting; selling appreciated positions in taxable triggers
            capital gains.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Robo-advisors as a one-decision solution</h2>

          <p>
            If you don't want to manage allocation yourself, a robo-advisor will set the allocation
            from a questionnaire and rebalance automatically:
          </p>

          <p>
            <AffiliateButton partner="betterment" source={slug}>
              Try Betterment →
            </AffiliateButton>{" "}
            <AffiliateButton partner="wealthfront" source={slug} variant="secondary">Wealthfront</AffiliateButton>
          </p>

          <p>
            Or if you'd rather hold the underlying index funds yourself (lower fees, more
            flexibility), open at one of the major brokerages and use a target-date fund or
            three-fund portfolio:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What about gold, crypto, alternatives?</h2>

          <p>
            Most diversified investors don't need any alternatives. If you want exposure for
            psychological diversification:
          </p>

          <ul>
            <li><strong>Gold:</strong> 0–5% of portfolio. Inflation hedge, but long-term real returns are near zero.</li>
            <li><strong>Bitcoin:</strong> 0–3% of portfolio if you can stomach extreme volatility. Treat as a speculative asset, not a core holding.</li>
            <li><strong>REITs:</strong> Already in total stock market index funds via real-estate stocks. A dedicated REIT allocation is optional, not required.</li>
          </ul>

          <p>
            None of these change the core glide path. They're rounding errors on top.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <ul>
            <li><strong>20s/30s:</strong> 85–100% stocks. Maximum equity exposure during the longest compounding window.</li>
            <li><strong>40s:</strong> 75–80% stocks. Begin meaningful bond diversification.</li>
            <li><strong>50s:</strong> 65–70% stocks. Build the bond cushion that protects against sequence-of-returns risk at retirement.</li>
            <li><strong>60s/70s:</strong> 50–60% stocks. Lower glide-path floor, but never go full conservative — your portfolio still needs to last 30 years.</li>
          </ul>

          <p>
            Use a three-fund portfolio (US stocks / international stocks / US bonds) or a single
            target-date fund. Rebalance once per year. Direct new contributions to the underweight
            bucket. Don't panic in bear markets.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-invest-in-stocks">How to invest in stocks</Link></li>
            <li><Link href="/learn/mutual-funds-vs-etfs">Mutual funds vs. ETFs</Link></li>
            <li><Link href="/learn/dollar-cost-averaging-vs-lump-sum">Dollar-cost averaging vs. lump sum</Link></li>
            <li><Link href="/learn/fire-movement-guide">FIRE movement guide</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
            <li><Link href="/learn/how-to-choose-a-financial-advisor">How to choose a financial advisor</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
