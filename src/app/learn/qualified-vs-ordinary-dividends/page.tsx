import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "qualified-vs-ordinary-dividends";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Qualified vs. ordinary dividends: How each is taxed";
const description =
  "Qualified dividends get the long-term capital gains tax rate — 0%, 15%, or 20%. Ordinary (non-qualified) dividends get taxed at your marginal income rate, up to 37%. The 61-day holding rule and the kinds of payers that qualify matter more than you think.";
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
    a: "Qualified dividends are taxed at the long-term capital gains rate (0%, 15%, or 20% federal). Ordinary (non-qualified) dividends are taxed as regular income at your marginal rate (10% to 37% federal). Same dollar of dividend, very different tax bill.",
  },
  {
    q: "What makes a dividend 'qualified'?",
    a: "Two conditions: (1) paid by a US corporation or qualifying foreign corporation, AND (2) the investor held the underlying stock for more than 60 days during the 121-day window centered on the ex-dividend date. Most dividends from typical US large-cap stocks held long-term in a brokerage account meet both tests automatically.",
  },
  {
    q: "Which payers produce non-qualified dividends?",
    a: "REIT dividends (mostly ordinary), Master Limited Partnership distributions (usually return of capital + ordinary), money market funds and bond fund interest payments (always ordinary), Employee Stock Purchase Plan dividends in some cases, dividends on shares borrowed for short selling, and some foreign-corporation dividends from countries without a US tax treaty.",
  },
  {
    q: "Does the 61-day rule mean I have to sell after 61 days?",
    a: "No — the 61-day rule is a MINIMUM holding requirement to qualify. The longer you hold, the more clearly you qualify. You only fail the test if you trade in and out of the stock too close to the ex-dividend date — within a 121-day window centered on ex-div, you need to hold for 61+ days for the dividend on those shares to be qualified.",
  },
  {
    q: "Do these rules matter in a 401(k) or IRA?",
    a: "No — retirement accounts don't pay tax on dividends as they're paid. Traditional accounts pay ordinary income tax on the eventual withdrawal regardless of how the income was earned inside; Roth accounts pay zero. The qualified/ordinary distinction is a TAXABLE-ACCOUNT-ONLY concern.",
  },
  {
    q: "How do I see which is which?",
    a: "Your Form 1099-DIV from your brokerage breaks it down: Box 1a is total ordinary dividends (which includes the qualified amount); Box 1b is the qualified portion. The non-qualified portion = Box 1a minus Box 1b. Box 2a is total capital gain distributions (separate, also long-term capital gains rates).",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Save tax" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Same dollar of dividend, totally different tax bill. The qualified-dividend rate can be zero — but only if you meet the conditions."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Not all dividends are taxed the same.</strong> A "qualified dividend" gets the
            long-term capital gains rate — 0%, 15%, or 20%. An "ordinary" (non-qualified) dividend
            gets your full marginal income rate — anywhere from 10% to 37%. Same payment, very
            different after-tax outcome.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-rate comparison (2026)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Taxable income (single)</th>
                  <th className="py-3 pr-4">Marginal rate (ordinary)</th>
                  <th className="py-3 pr-4">Qualified-dividend rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">$0–$48,350</td><td className="py-3 pr-4">10%/12%</td><td className="py-3 pr-4"><strong>0%</strong></td></tr>
                <tr><td className="py-3 pr-4">$48,350–$197,300</td><td className="py-3 pr-4">22%/24%</td><td className="py-3 pr-4"><strong>15%</strong></td></tr>
                <tr><td className="py-3 pr-4">$197,300–$256,225</td><td className="py-3 pr-4">32%</td><td className="py-3 pr-4"><strong>15%</strong></td></tr>
                <tr><td className="py-3 pr-4">$256,225–$626,350</td><td className="py-3 pr-4">35%</td><td className="py-3 pr-4"><strong>15%</strong></td></tr>
                <tr><td className="py-3 pr-4">$626,350+</td><td className="py-3 pr-4">37%</td><td className="py-3 pr-4"><strong>20%</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-ink-muted">
            Brackets per IR-2025-103 / Rev. Proc. 2025-32 (Oct 9, 2025). 0% qualified-dividend rate
            applies below the threshold; 20% kicks in above $626,350 single / $751,600 MFJ. NIIT
            (3.8%) adds on top above $200K MAGI single / $250K MFJ.
          </p>

          <h3>Worked example</h3>

          <p>
            <strong>Mid-career single filer with $150K taxable income, $5,000 in dividends:</strong>
          </p>

          <ul>
            <li><strong>If qualified:</strong> $5,000 × 15% = <strong>$750 federal tax</strong></li>
            <li><strong>If ordinary:</strong> $5,000 × 24% = <strong>$1,200 federal tax</strong></li>
            <li><strong>Difference: $450 in your pocket</strong>, just from the dividend qualifying.</li>
          </ul>

          <p>
            At higher incomes the gap widens. At $700K taxable, the comparison is 20% vs. 37% — a
            17-point spread on every dividend dollar.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two requirements for a dividend to qualify</h2>

          <p>
            Per IRS Publication 550, a dividend is qualified when BOTH conditions are met:
          </p>

          <h3>1. The payer is a qualifying corporation</h3>

          <ul>
            <li>Any US corporation (e.g., Apple, Microsoft, Coca-Cola, JNJ).</li>
            <li>Any qualified foreign corporation — must be incorporated in a US possession, in a country with a comprehensive US tax treaty, OR have shares "readily tradable" on a US exchange (most ADRs).</li>
          </ul>

          <h3>2. The holding period is met</h3>

          <p>
            <strong>You must hold the underlying shares for more than 60 days during the 121-day
            window centered on the ex-dividend date.</strong> The 121-day window starts 60 days
            before ex-div and ends 60 days after.
          </p>

          <ul>
            <li>If you buy shares well before ex-div and hold them well after, you easily satisfy this.</li>
            <li>If you buy shares the day before ex-div to "capture" the dividend then sell shortly after, you'll likely fail the 61-day test — and the dividend becomes ordinary.</li>
            <li>For preferred stock with dividend periods longer than 366 days, the holding requirement is 90+ days in a 181-day window.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Common sources of ORDINARY (non-qualified) dividends</h2>

          <ul>
            <li><strong>REIT dividends.</strong> Generally taxed as ordinary income, NOT qualified — REITs pass through rental income that wasn't pre-taxed at the corporate level. The 199A Qualified Business Income deduction can offset 20% of REIT dividends, partially compensating, but the underlying classification remains ordinary.</li>
            <li><strong>Master Limited Partnership (MLP) distributions.</strong> Mostly classified as return of capital (reduces basis) + some ordinary income. Complex K-1 tax reporting.</li>
            <li><strong>Money market fund "dividends."</strong> Despite the name on 1099-DIV, they're interest income — always ordinary.</li>
            <li><strong>Bond fund "dividends."</strong> Same — interest is ordinary.</li>
            <li><strong>Stocks held less than 61 days</strong> across the ex-div window.</li>
            <li><strong>Dividends on shares borrowed for short selling.</strong> If you're short a stock and have to pay the dividend to the lender, that "in-lieu" payment is ordinary income, not deductible as qualified-dividend offset.</li>
            <li><strong>Some foreign corporation dividends</strong> from countries without a US tax treaty.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The NIIT layer</h2>

          <p>
            <strong>Net Investment Income Tax (NIIT)</strong> adds <strong>3.8%</strong> to all
            investment income (qualified and ordinary dividends, interest, capital gains, rental)
            above:
          </p>

          <ul>
            <li>$200,000 MAGI for single filers</li>
            <li>$250,000 MAGI for MFJ</li>
            <li>$125,000 MAGI for MFS</li>
          </ul>

          <p>
            So a single filer with $300K MAGI pays 15% qualified-dividend rate PLUS 3.8% NIIT =
            <strong> 18.8% all-in</strong> on each qualified dividend. Still much better than 35%
            marginal + 3.8% NIIT = 38.8% all-in if the dividend were ordinary.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Asset location — where to hold each type</h2>

          <p>
            <strong>The qualified/ordinary distinction is THE reason for "asset location"
            strategy.</strong> If you have both taxable and tax-advantaged accounts, hold:
          </p>

          <ul>
            <li><strong>Tax-INEFFICIENT income (ordinary)</strong> in retirement accounts: REITs, bonds, REIT funds, MLP funds, actively managed funds with high turnover. The tax-inefficiency doesn't matter inside a 401(k)/IRA where it's shielded.</li>
            <li><strong>Tax-EFFICIENT income (qualified)</strong> in taxable accounts: broad US stock index funds (mostly qualified dividends), individual blue-chip dividend stocks, tax-managed funds. The qualified-dividend rate combined with index-fund tax efficiency makes taxable a fine home for these.</li>
          </ul>

          <p>
            Done correctly, asset location can save 0.30%–0.60%/year in tax drag with zero impact
            on your underlying investment strategy.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Foreign-tax-credit nuance</h2>

          <p>
            If you hold international stocks in a taxable account, the foreign country may withhold
            tax on the dividend before it reaches you. The US generally lets you claim a Foreign
            Tax Credit (FTC) for the withholding on Form 1116 (or simplified if under $300/$600).
            <strong> The FTC is a dollar-for-dollar credit, not a deduction</strong> — meaningful
            tax recovery if your international position is large.
          </p>

          <p>
            <strong>In a 401(k) or IRA, you LOSE the foreign tax credit</strong> because the IRS
            doesn't let you claim a credit for tax paid on income that's tax-deferred. This is one
            small argument for holding international stocks in taxable accounts despite the
            simpler asset-location argument above. The trade-off is usually small (~0.10%/year).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to find your number on a 1099-DIV</h2>

          <p>
            Each January, your brokerage sends a 1099-DIV with:
          </p>

          <ul>
            <li><strong>Box 1a — Total ordinary dividends</strong> (this is gross total, includes qualified portion below it).</li>
            <li><strong>Box 1b — Qualified dividends</strong> (the subset of Box 1a that gets the qualified-dividend rate).</li>
            <li><strong>Box 2a — Total capital gain distributions</strong> (mutual fund LTCG distributions, taxed at LTCG rate).</li>
            <li><strong>Box 5 — Section 199A dividends</strong> (REIT dividends eligible for the QBI deduction).</li>
            <li><strong>Box 7 — Foreign tax paid</strong> (for the Foreign Tax Credit).</li>
          </ul>

          <p>
            Non-qualified portion = Box 1a − Box 1b. That number gets taxed at your ordinary
            marginal rate; the rest at qualified rates.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What to do this year</h2>

          <ol>
            <li><strong>If you own REITs in a taxable account, consider moving them to a tax-advantaged account</strong> via reallocation (sell in taxable + buy in 401(k)/IRA with available cash). REIT dividends are ordinary; you're paying full marginal rate when you don't have to.</li>
            <li><strong>If you have actively-managed funds with high turnover in taxable accounts,</strong> swap to index funds (lower tax drag) or move them to retirement accounts.</li>
            <li><strong>Hold US blue-chip stocks for 60+ days</strong> across ex-dividend dates if you're trading. Day-trading dividends will hit ordinary rates.</li>
            <li><strong>Track your 1099-DIV.</strong> Each January, check Box 1b vs. Box 1a. If the qualified % is unexpectedly low, investigate which holding is the culprit.</li>
          </ol>

          <p>
            Open a tax-aware brokerage if you don't have one. All three majors handle 1099-DIV
            cleanly:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/tax-brackets-2026">2026 federal tax brackets</Link></li>
            <li><Link href="/learn/capital-gains-tax-2026">Capital gains tax 2026</Link></li>
            <li><Link href="/learn/short-vs-long-term-capital-gains">Short vs. long-term capital gains</Link></li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting guide</Link></li>
            <li><Link href="/learn/mutual-funds-vs-etfs">Mutual funds vs. ETFs</Link></li>
            <li><Link href="/learn/asset-allocation-by-age">Asset allocation by age</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
