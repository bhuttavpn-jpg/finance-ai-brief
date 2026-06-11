import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "robinhood-review";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Robinhood review 2026: Is it actually any good?";
const description =
  "An honest 2026 review of Robinhood: commission-free trades, a 1% IRA match, fractional shares, and a clean app — paid for with payment-for-order-flow and a thin research stack. Here's who it fits, who should pick Fidelity or Schwab instead, and what to watch out for.";
const PUBLISHED = "2026-05-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is Robinhood safe to use?",
    a: "Cash and securities in a Robinhood brokerage account are protected by SIPC up to $500,000 (including $250,000 for cash). Robinhood Crypto is held separately and is NOT SIPC-insured. The platform has had outages and a few high-profile regulatory settlements, but the underlying custody is standard US brokerage infrastructure. The bigger risk for most users is behavioral — the gamified UI nudges frequent trading, which is the single most reliable way to underperform a buy-and-hold investor.",
  },
  {
    q: "Does Robinhood charge commissions?",
    a: "No commissions on stocks, ETFs, or options. Robinhood makes money primarily from payment for order flow (selling your order to market makers like Citadel Securities), interest on uninvested cash, margin lending, and the Robinhood Gold subscription ($5/month). 'Free' is real on the trade ticket; the costs are embedded elsewhere.",
  },
  {
    q: "Is the Robinhood IRA match worth it?",
    a: "If you'll hold the account long-term, yes. Robinhood Gold ($5/month, $60/year) offers a 3% match on IRA contributions; the non-Gold tier offers 1%. On a maxed-out $7,500 2026 IRA contribution, that's $225 (Gold) or $75 (non-Gold) of free money per year. You have to keep the contributions in the account for 5 years to keep the match — early withdrawals trigger a clawback.",
  },
  {
    q: "Can I buy fractional shares on Robinhood?",
    a: "Yes — Robinhood was one of the first US brokers to support fractional share buys, including for high-priced stocks (a $1 buy of a $400 stock gets you 0.0025 shares). This makes it easy to dollar-cost-average from a small balance.",
  },
  {
    q: "Is Robinhood good for retirement investing?",
    a: "It can be, especially if you're using the IRA match. But the research tools and education are thin compared to Fidelity or Schwab. If you want target-date funds inside an IRA, Robinhood does support them — but the selection is narrower. If you'd rather have stronger research, broker-assisted help, and a richer fund lineup, Fidelity is the better pick.",
  },
  {
    q: "Robinhood vs Webull — which is better?",
    a: "Robinhood has the cleaner app, the IRA match, and the better cash management (1% on uninvested cash for non-Gold; up to 4%+ for Gold). Webull has better charting, longer extended-hours trading, and a more 'trader-focused' UI. For passive long-term investors, Robinhood usually wins. For active traders who want better technicals, Webull does.",
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
          subtitle="A clean, free, beginner-friendly brokerage with a real IRA match — and a few real drawbacks. Here's the honest take."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Robinhood is the right brokerage for a specific kind of investor:</strong> someone
            who wants a clean app, commission-free trades, fractional shares, and a real IRA
            contribution match — and who doesn&apos;t need deep research tools or a wide mutual-fund
            lineup.
          </p>

          <p>
            <strong>It&apos;s the wrong fit for someone who wants the full-service experience</strong> —
            target-date funds inside a 529, dedicated CFP support, or a rich research stack. For
            those, <Link href="/learn/best-brokerage-accounts-beginners">Fidelity or Schwab</Link> are
            the right answers.
          </p>

          <p>
            This review covers the 2026 product as of the time of writing: account types, the IRA
            match math, how Robinhood actually makes money, what&apos;s improved since the 2021
            outage era, and where it still falls short.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second take</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Robinhood</th>
                  <th className="py-3 pr-4">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Stock/ETF commissions</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">✅ Industry standard now</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Account minimum</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">✅</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Fractional shares</td><td className="py-3 pr-4">Yes ($1 minimum)</td><td className="py-3 pr-4">✅ Best-in-class</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">IRA match (non-Gold)</td><td className="py-3 pr-4">1%</td><td className="py-3 pr-4">✅ Unique</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">IRA match (Gold, $5/mo)</td><td className="py-3 pr-4">3%</td><td className="py-3 pr-4">✅ Excellent</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Cash interest</td><td className="py-3 pr-4">1% non-Gold / 4%+ Gold</td><td className="py-3 pr-4">✅ Gold tier is competitive</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mutual fund selection</td><td className="py-3 pr-4">Very limited (ETFs preferred)</td><td className="py-3 pr-4">⚠️ Use Fidelity if you need MFs</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Research tools</td><td className="py-3 pr-4">Basic — Morningstar via Gold</td><td className="py-3 pr-4">⚠️ Thinner than Schwab/Fidelity</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Customer support</td><td className="py-3 pr-4">In-app chat, phone callback</td><td className="py-3 pr-4">⚠️ No branches; CFP help limited</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">SIPC insurance</td><td className="py-3 pr-4">$500K (incl. $250K cash)</td><td className="py-3 pr-4">✅ Standard</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The IRA match — Robinhood&apos;s strongest feature in 2026</h2>

          <p>
            <strong>The IRA match is the single best reason to use Robinhood in 2026.</strong> No
            other major US broker offers anything similar at retail scale.
          </p>

          <p>
            The 2026 IRA contribution limit is <strong>$7,500</strong> ($8,600 if you&apos;re 50+),
            per IRS news release <strong>IR-2025-111</strong>. Robinhood&apos;s match applies to that
            entire contribution.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Tier</th>
                  <th className="py-3 pr-4">Cost</th>
                  <th className="py-3 pr-4">Match on $7,500</th>
                  <th className="py-3 pr-4">Match on $8,600 (50+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Robinhood (non-Gold)</td><td className="py-3 pr-4">Free</td><td className="py-3 pr-4">$75</td><td className="py-3 pr-4">$86</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Robinhood Gold</td><td className="py-3 pr-4">$5/mo ($60/yr)</td><td className="py-3 pr-4"><strong>$225</strong> (net $165)</td><td className="py-3 pr-4"><strong>$258</strong> (net $198)</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The catch:</strong> the match has a 5-year holding period. If you withdraw the
            contributions (or transfer to another broker) within 5 years, Robinhood claws back the
            match. So this is only worth it if you intend to keep the IRA at Robinhood long-term.
          </p>

          <p>
            <strong>For a 25-year-old maxing the IRA every year through Gold</strong> ($225/year
            match net of fees ≈ $165/year), the compounded value of just the match alone over 35
            years at 7% is around $25,000. That&apos;s not nothing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What Robinhood is great at</h2>

          <ul>
            <li><strong>The app.</strong> Clean, fast, intuitive. Buying your first index fund takes about three taps.</li>
            <li><strong>Fractional shares.</strong> $1 minimum on essentially everything. Critical if you&apos;re dollar-cost-averaging from a $50-a-week paycheck.</li>
            <li><strong>The IRA match.</strong> See above.</li>
            <li><strong>Cash sweep.</strong> Uninvested cash earns 1% non-Gold / 4%+ Gold, swept into FDIC-insured partner banks. Better than most brokerage sweeps.</li>
            <li><strong>Recurring investments.</strong> Set a $50/week buy of VTI; it executes automatically. Boring is good.</li>
            <li><strong>24-hour market on select stocks.</strong> If you care about overnight liquidity (most people shouldn&apos;t).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What Robinhood is bad at</h2>

          <ul>
            <li><strong>Mutual fund coverage.</strong> Robinhood pushes ETFs. If you want to buy Vanguard mutual funds (VTSAX, VTIAX), you&apos;ll need a different broker.</li>
            <li><strong>Research depth.</strong> Morningstar reports come through Gold, but there&apos;s no real screener parity with Schwab or Fidelity. No proprietary research.</li>
            <li><strong>Customer support for complex situations.</strong> No branches. No dedicated CFP. Fine for routine questions; thin for inherited-IRA or estate complications.</li>
            <li><strong>Gamification.</strong> The UI still nudges trading. The confetti is gone but the visual celebration of order fills lingers. <Link href="/learn/how-to-invest-1000-beginners">Buy-and-hold investors</Link> can ignore it; new investors sometimes can&apos;t.</li>
            <li><strong>No 529 college savings accounts.</strong> A meaningful gap for parents.</li>
            <li><strong>Crypto is a separate product.</strong> Robinhood Crypto is NOT SIPC-insured. Don&apos;t put serious money there.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How Robinhood actually makes money (and why it matters)</h2>

          <p>
            <strong>Robinhood&apos;s biggest revenue source is payment for order flow (PFOF).</strong>
            When you place a buy order, Robinhood routes it to a market maker (Citadel, Virtu, others)
            in exchange for a small payment per share. The market maker fills your order, usually at
            a price slightly worse than the theoretical best — that spread is how everyone gets paid.
          </p>

          <p>
            For a buy-and-hold ETF investor making 1–2 trades a month in highly liquid funds,
            execution quality differences from PFOF are basically invisible (fractions of a cent per
            share). For high-volume traders or option scalpers, the costs add up. Schwab and Fidelity
            do not accept PFOF on equity trades — that&apos;s a real difference if execution matters
            to you.
          </p>

          <p>
            Other revenue: Robinhood Gold ($5/month), margin lending, securities lending, interest
            on uninvested cash, and a debit/Robinhood Cash Card.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who Robinhood fits</h2>

          <ul>
            <li><strong>New investors with a small starting balance.</strong> $1 fractional buys + a clean app + a 1% IRA match = ideal first brokerage.</li>
            <li><strong>Long-term ETF investors maxing the IRA.</strong> The 3% Gold match on a maxed Roth IRA is real, durable yield.</li>
            <li><strong>Anyone tired of legacy brokerage UIs.</strong> If Schwab&apos;s interface makes you bounce, Robinhood&apos;s won&apos;t.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Who should pick a different broker</h2>

          <ul>
            <li><strong>Investors who want mutual funds (VTSAX, target-date funds outside Robinhood&apos;s lineup).</strong> Use Fidelity or Vanguard directly.</li>
            <li><strong>Parents opening 529s.</strong> Robinhood doesn&apos;t offer them. Fidelity or your state&apos;s direct plan.</li>
            <li><strong>People who want hands-on planning help.</strong> Schwab has branches and a CFP network.</li>
            <li><strong>Active options traders who want best execution.</strong> Look at Interactive Brokers or Fidelity, both of which don&apos;t accept PFOF on equities (IBKR Pro routes for best execution; Fidelity uses smart routing).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to open a Robinhood IRA</h2>

          <ol>
            <li><strong>Decide Roth vs. Traditional.</strong> See <Link href="/learn/roth-ira-vs-traditional-ira">our Roth vs. Traditional explainer</Link>. Most younger, lower-income filers want Roth.</li>
            <li><strong>Sign up via the app.</strong> Standard KYC: SSN, address, employment info.</li>
            <li><strong>Fund the account.</strong> Link a bank, transfer up to the 2026 limit of $7,500 ($8,600 if 50+).</li>
            <li><strong>Enable Robinhood Gold</strong> ($5/month) if you want the 3% match instead of 1%. Math works out for anyone contributing $3,000+ per year.</li>
            <li><strong>Pick boring ETFs.</strong> A 3-fund or 1-fund portfolio (e.g., VT or VTI + BND) covers 95% of what most people need.</li>
            <li><strong>Set up recurring contributions.</strong> Auto-debit $625/month to hit the $7,500 max. The match accrues monthly.</li>
          </ol>

          <p>
            <AffiliateButton partner="robinhood" source={slug}>
              Open a Robinhood IRA →
            </AffiliateButton>
          </p>

          <p>Prefer a more research-heavy broker? Both of these are excellent:</p>
          <ul>
            <li><AffiliateButton partner="fidelity" source={slug} variant="secondary">Fidelity</AffiliateButton> — best for mutual funds, 529s, broad research.</li>
            <li><AffiliateButton partner="webull" source={slug} variant="secondary">Webull</AffiliateButton> — better charting; aimed at active traders.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Robinhood in 2026 is a legitimate, well-rounded brokerage</strong> — especially
            if you&apos;re going to use the IRA match. The PFOF business model is fine for buy-and-hold
            investors and meaningfully worse for high-frequency option traders.
          </p>

          <p>
            If the IRA match isn&apos;t something you&apos;ll capture (you won&apos;t hit the
            contribution limit, or you can&apos;t commit to a 5-year hold), Fidelity is the safer
            default — broader product lineup, deeper research, no PFOF.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners (2026)</Link></li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000 for beginners</Link></li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link></li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which first?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
