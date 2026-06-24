import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-rebalance-portfolio";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to rebalance your portfolio in 2026: when, why, and how";
const description =
  "Portfolio rebalancing restores your target asset allocation after markets shift it. Here's how to know when your portfolio needs rebalancing, three methods for doing it, and how to rebalance tax-efficiently without selling more than necessary.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How often should I rebalance my portfolio?",
    a: "The research suggests calendar rebalancing (annually or semi-annually) and threshold rebalancing (when any asset class drifts more than 5 percentage points from its target) produce similar outcomes. Annual rebalancing in January works well for most investors. More frequent rebalancing doesn't meaningfully improve returns and increases transaction costs and potential tax drag.",
  },
  {
    q: "What triggers a rebalance — time or drift?",
    a: "Either can work. Threshold-based rebalancing (rebalance when any allocation drifts more than 5%) is theoretically superior because it responds to actual market conditions rather than arbitrary calendar dates. In practice, annual calendar rebalancing is simpler and performs nearly as well for most buy-and-hold investors. Use whichever system you'll actually follow consistently.",
  },
  {
    q: "Does rebalancing hurt returns?",
    a: "Rebalancing slightly reduces long-run returns during prolonged bull markets because it trims the outperforming asset (usually equities). But it reduces volatility and drawdown — and forces you to buy low / sell high systematically. Vanguard research finds rebalancing costs about 0.1–0.2% per year in returns while reducing portfolio volatility by 10–15%. For most investors, the risk reduction is worth it.",
  },
  {
    q: "How do I rebalance without triggering a big tax bill?",
    a: "In taxable accounts: (1) use new contributions to buy underweighted assets, (2) redirect dividends and distributions to underweighted assets, and (3) sell only when the tax cost is outweighed by rebalancing benefit. Always rebalance inside tax-advantaged accounts (401k, IRA) first — trades there are tax-free. Use tax-loss harvesting opportunities to offset gains when you do sell in taxable accounts.",
  },
  {
    q: "What if I don't rebalance at all?",
    a: "Your portfolio gradually becomes riskier over time. In a 10-year bull market for equities, a starting 70/30 stock/bond portfolio can drift to 90/10 without rebalancing. That worked great until 2022 when both stocks and bonds fell — a 90/10 portfolio lost ~25% while a rebalanced 70/30 would have lost ~18%. Unmanaged drift means you're taking more risk than your plan intended.",
  },
  {
    q: "Can I rebalance a 401(k) without taxes?",
    a: "Yes. 401(k) accounts are tax-deferred — buying and selling inside the account doesn't trigger capital gains. You can freely sell overweighted funds and buy underweighted ones. Check for any redemption fees on fund trades (some target-date funds have short-term redemption fees if sold within 30–60 days of purchase). Most index funds inside 401(k)s have none.",
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
      <JsonLd
        data={howToJsonLd({
          name: "How to rebalance a portfolio",
          steps: [
            { name: "Find your current allocation", text: "Log into your brokerage, sum the market value of all holdings, and calculate what percentage each asset class (US stocks, international stocks, bonds, etc.) represents of the total." },
            { name: "Compare to your target allocation", text: "Subtract each actual percentage from your target. A difference of 5+ percentage points in any asset class typically warrants rebalancing." },
            { name: "Rebalance inside tax-advantaged accounts first", text: "Sell overweighted funds in your 401(k) or IRA and buy underweighted funds. No tax consequences. This reduces or eliminates the need to trade in taxable accounts." },
            { name: "Use new contributions to buy underweighted assets", text: "If you have new money to invest (401k contribution, IRA funding, brokerage deposit), direct it entirely to underweighted asset classes. This rebalances without selling anything." },
            { name: "Sell overweighted assets in taxable accounts only if needed", text: "If steps 3 and 4 weren't enough, sell overweighted assets in taxable accounts. Prioritize selling assets with losses (tax-loss harvesting) or long-term holdings taxed at lower capital gains rates." },
            { name: "Set your next review date", text: "Schedule a calendar reminder to check allocation in 12 months, or set a price alert to notify you if any asset class moves more than 5% from target before then." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="When markets run, your allocation drifts — and with it, your risk level. Rebalancing once a year takes 20 minutes and keeps your plan on track."
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
            <strong>You chose a 70/30 stock/bond split for a reason</strong> — it matched your risk tolerance and time horizon. After a 20% stock rally, you might be sitting at 78/22 without touching anything. That extra stock exposure means extra volatility in the next downturn. Rebalancing fixes it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why allocation drifts</h2>

          <p>
            Different asset classes grow at different rates. When US stocks return 25% and bonds return 4%, your equity percentage balloons. Left unchecked, a portfolio that started at 70% stocks can easily reach 85–90% after a multi-year bull market — taking on risk you never intended.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Year</th>
                  <th className="py-3 pr-4">Target</th>
                  <th className="py-3 pr-4">After drift (no rebalancing)</th>
                  <th className="py-3 pr-4">Risk change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">Start</td><td className="py-3 pr-4">70% stocks / 30% bonds</td><td className="py-3 pr-4">70% / 30%</td><td className="py-3 pr-4">—</td></tr>
                <tr><td className="py-3 pr-4">Year 3</td><td className="py-3 pr-4">70% / 30%</td><td className="py-3 pr-4">78% / 22%</td><td className="py-3 pr-4">+8% equity, higher vol</td></tr>
                <tr><td className="py-3 pr-4">Year 7</td><td className="py-3 pr-4">70% / 30%</td><td className="py-3 pr-4">88% / 12%</td><td className="py-3 pr-4">Effectively aggressive growth</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>When to rebalance</h2>

          <p>
            Two common triggers — use whichever fits your style:
          </p>

          <ul>
            <li><strong>Calendar (annual or semi-annual):</strong> Review allocation every January. Simple, consistent, easy to automate as a reminder.</li>
            <li><strong>Threshold (5% drift):</strong> Rebalance whenever any asset class drifts more than 5 percentage points from its target. More responsive, slightly more trades.</li>
          </ul>

          <p>
            Vanguard&apos;s research finds annual rebalancing and 5%-threshold rebalancing produce nearly identical risk-adjusted outcomes. <strong>The method matters less than doing it consistently.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Three ways to rebalance</h2>

          <h3>Method 1: Rebalance inside tax-advantaged accounts first (most tax-efficient)</h3>
          <p>
            Your 401(k) and IRA are tax-deferred or tax-free. Selling overweighted funds and buying underweighted ones inside these accounts creates zero taxable events. If your overall allocation drifts, fix it by adjusting holdings in tax-advantaged accounts first — you may not need to touch taxable accounts at all.
          </p>

          <h3>Method 2: Direct new contributions to underweighted assets</h3>
          <p>
            If you&apos;re still in accumulation phase, you can rebalance without selling anything. When you make your monthly 401(k) contribution or IRA deposit, direct the entire contribution to underweighted assets. Over time this corrects the imbalance gradually and efficiently.
          </p>

          <h3>Method 3: Sell overweighted assets in taxable accounts</h3>
          <p>
            If methods 1 and 2 aren&apos;t enough, sell in your taxable brokerage account. Minimize tax drag by:
          </p>
          <ul>
            <li>Selling positions with a <strong>tax loss</strong> first (realizes a loss you can deduct)</li>
            <li>Preferring to sell <strong>long-term holdings</strong> (taxed at 0%, 15%, or 20%) over short-term (taxed at ordinary income rates)</li>
            <li>Selling <strong>only enough</strong> to bring the portfolio back to within 3–5% of target</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step-by-step: how to actually do it</h2>

          <p>
            Most major brokerages let you view a consolidated view of your portfolio across all accounts. Here&apos;s the process:
          </p>

          <ol>
            <li>
              <strong>List all your holdings and their market values.</strong> Include 401(k), IRA, and taxable accounts. Most brokerages show this on the &ldquo;Portfolio&rdquo; or &ldquo;Holdings&rdquo; page.
            </li>
            <li>
              <strong>Calculate current allocation percentages.</strong> Add up total in US stocks, international stocks, bonds, and other categories. Divide each by the total portfolio value.
            </li>
            <li>
              <strong>Subtract from your target.</strong> If target is 60/30/10 (US stocks/bonds/international) and you&apos;re at 70/22/8, US stocks are +10% over, bonds -8%, international -2%.
            </li>
            <li>
              <strong>Rebalance inside 401(k)/IRA first.</strong> Go to your 401(k)&apos;s &ldquo;change investment options&rdquo; or &ldquo;rebalance&rdquo; tool. Sell overweighted funds, buy underweighted ones.
            </li>
            <li>
              <strong>Use new contributions to fill remaining gaps.</strong> Direct your next IRA contribution or 401(k) increase to the underweighted category.
            </li>
            <li>
              <strong>Only sell in taxable accounts if still needed.</strong> Focus on tax-loss harvesting opportunities and long-term held positions.
            </li>
          </ol>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Open Fidelity account →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Open Schwab account →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Open Vanguard account →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Rebalancing vs. target-date funds</h2>

          <p>
            Target-date funds (e.g., Vanguard Target Retirement 2050) rebalance automatically to a built-in glide path. If you invest in one of these and nothing else, you don&apos;t need to rebalance — the fund handles it internally at low cost.
          </p>

          <p>
            The limitation: a target-date fund assumes a specific retirement date and uses a standardized glide path. If you want a custom allocation (e.g., more international, more bonds than the fund&apos;s glide path), you need to build and rebalance your own mix.
          </p>

          <p>
            For more on the basics, see <Link href="/learn/how-to-start-investing">how to start investing</Link> and <Link href="/learn/index-funds-vs-etfs">index funds vs. ETFs</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Automated rebalancing tools</h2>

          <p>
            Several platforms offer automatic rebalancing so you never have to do it manually:
          </p>

          <ul>
            <li><strong>Fidelity Go:</strong> automated managed account, free under $25K. Rebalances when allocation drifts ±5%.</li>
            <li><strong>Schwab Intelligent Portfolios:</strong> $0 fee automated account that rebalances automatically. Includes ETF expense ratios and a cash allocation.</li>
            <li><strong>Betterment and Wealthfront (robo-advisors):</strong> sophisticated tax-loss harvesting + automatic rebalancing at 0.25% AUM fee. Good for taxable accounts where tax optimization matters.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Set a rebalancing reminder for January every year.</strong> Log in, check if any allocation drifts more than 5% from your target, and fix it — first inside your 401(k)/IRA, then via new contributions, then in taxable only if needed. The whole process takes 20–30 minutes and keeps your risk level matching your actual plan.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-start-investing">How to start investing</Link> — picking your target allocation in the first place.</li>
            <li><Link href="/learn/index-funds-vs-etfs">Index funds vs. ETFs</Link> — the building blocks of a diversified portfolio.</li>
            <li><Link href="/learn/401k-contribution-limits-2026">401(k) contribution limits 2026</Link> — maximize contributions before rebalancing trades in taxable.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. traditional IRA</Link> — which tax-advantaged account to prioritize for holding overweighted assets.</li>
            <li><Link href="/learn/tax-loss-harvesting">Tax-loss harvesting</Link> — turning losses in taxable accounts into tax savings.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Invest" currentSlug={slug} />
      </article>
    </>
  );
}
