import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "tax-loss-harvesting-wash-sale-rule";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "The wash sale rule: How to harvest losses without violating it";
const description =
  "The wash sale rule disallows your loss if you buy the 'substantially identical' security within 30 days before or after the sale. The fix: swap into a similar-but-not-identical fund. Here's the rule, the IRS wording, the 61-day window, and how to harvest losses cleanly.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the wash sale rule in one sentence?",
    a: "If you sell a security at a loss and buy a 'substantially identical' security within 30 days before or after, the IRS disallows the loss for tax purposes and adds it to the basis of the replacement security. Net effect: you don't get to claim the loss this year — you defer it.",
  },
  {
    q: "What counts as 'substantially identical'?",
    a: "The IRS hasn't given a bright-line definition, but the practical consensus: the exact same stock, the exact same fund (CUSIP), or two funds tracking the exact same index from the same provider. Two different S&P 500 funds from different providers (VOO vs. SPY vs. IVV) likely ARE substantially identical. Two total-market funds tracking different indexes (VTI tracking CRSP vs. SCHB tracking Dow Jones) are generally considered safe swaps.",
  },
  {
    q: "How long is the 'wash sale window'?",
    a: "61 days total — 30 days before the loss sale plus 30 days after, plus the day of the sale. So if you sell at a loss on June 1, you'd need to avoid buying the substantially identical security from May 2 through July 1.",
  },
  {
    q: "Does the wash sale rule apply to IRAs?",
    a: "Yes — and brutally. If you sell a security at a loss in your taxable brokerage and then buy it in your IRA within 30 days, the loss is permanently disallowed (you don't even get the basis bump on the replacement — because IRA basis isn't tracked). This is the most expensive wash sale mistake.",
  },
  {
    q: "What about my spouse's account?",
    a: "Yes — for married couples filing jointly, the wash sale rule applies across both spouses' accounts. Selling VTI at a loss in your account and your spouse buying VTI in theirs within 30 days triggers a wash sale.",
  },
  {
    q: "Does the broker enforce the wash sale rule automatically?",
    a: "Partially. Your broker tracks wash sales WITHIN a single account and reports them on your 1099-B. They DO NOT track across accounts at different brokers, across IRAs, or across spouses. You're responsible for catching those.",
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
          subtitle="The wash sale rule is the one technical detail that breaks DIY tax-loss harvesting. Here's the IRS wording, the 61-day window, and a practical playbook for clean harvests."
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
            <strong>Tax-loss harvesting only works if you don't accidentally trigger a wash
            sale.</strong> The rule is simple in principle and surprisingly easy to violate by
            accident — automatic dividend reinvestment, spouse trades, and 401(k) auto-buys are the
            three common foot-guns.
          </p>

          <p>
            This guide walks through the rule, the 61-day window, what "substantially identical"
            actually means in practice, and the swap pairs most investors use.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The rule, in plain English</h2>

          <p>
            <strong>If you sell a security at a loss and buy a "substantially identical" security
            within 30 days before or after the sale, the IRS disallows the loss for tax
            purposes.</strong> The disallowed loss is added to the cost basis of the replacement
            security, so you get the deduction eventually — when you sell the replacement — but you
            don't get it this year.
          </p>

          <p>
            The IRS source is <strong>26 U.S. Code § 1091</strong> and{" "}
            <strong>IRS Publication 550</strong>. Both say "substantially identical" without
            defining it precisely.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 61-day window</h2>

          <p>
            <strong>30 days before the sale + the day of the sale + 30 days after = 61 days
            total.</strong> The window is symmetric — buying BEFORE the loss sale can also trigger a
            wash sale.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Event</th>
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Wash sale?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">Buy 100 VTI</td><td className="py-3 pr-4">May 15</td><td className="py-3 pr-4">—</td></tr>
                <tr><td className="py-3 pr-4">Sell 100 VTI at a loss</td><td className="py-3 pr-4">June 1</td><td className="py-3 pr-4">Yes — May 15 buy was within 30 days before</td></tr>
                <tr><td className="py-3 pr-4">Buy 100 VTI again</td><td className="py-3 pr-4">June 20</td><td className="py-3 pr-4">Yes — within 30 days after June 1 sale</td></tr>
                <tr><td className="py-3 pr-4">Buy 100 VTI</td><td className="py-3 pr-4">July 5</td><td className="py-3 pr-4">No — 34 days after the sale</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>What "substantially identical" means in practice</h2>

          <p>
            The IRS hasn't drawn a bright line. The community consensus, based on case law and
            common practice:
          </p>

          <p><strong>Definitely substantially identical:</strong></p>
          <ul>
            <li>The exact same stock (Apple → Apple).</li>
            <li>The exact same fund (VTI → VTI, even at different brokers).</li>
            <li>Different share classes of the same fund (VTSAX → VTI both track CRSP US Total Market — same provider, same underlying).</li>
            <li>Likely two different S&P 500 funds from any provider (SPY, VOO, IVV) — same underlying index.</li>
          </ul>

          <p><strong>Generally considered safe (different enough):</strong></p>
          <ul>
            <li>Two total-market funds tracking different indexes from different providers (VTI tracking CRSP vs. SCHB tracking Dow Jones US Broad).</li>
            <li>An S&P 500 fund swapped for an S&P 500 ex-Tech sector fund.</li>
            <li>VTI (US total) swapped for ITOT (iShares total — tracks S&P Total Market).</li>
            <li>Two different bond funds with different durations or credit quality.</li>
          </ul>

          <p>
            <strong>Conservative interpretation:</strong> when in doubt, swap to a fund tracking a
            <em> different index</em> from a <em>different provider</em>. The further the
            differentiation, the safer.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common swap pairs investors use</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Asset class</th>
                  <th className="py-3 pr-4">Sell this</th>
                  <th className="py-3 pr-4">Buy this (within 31 days)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">US total market</td><td className="py-3 pr-4">VTI (Vanguard)</td><td className="py-3 pr-4">SCHB (Schwab) or ITOT (iShares)</td></tr>
                <tr><td className="py-3 pr-4">S&amp;P 500</td><td className="py-3 pr-4">VOO</td><td className="py-3 pr-4">SCHX (S&amp;P 500-similar large-cap) — slightly safer than IVV/SPY</td></tr>
                <tr><td className="py-3 pr-4">International developed</td><td className="py-3 pr-4">VEA</td><td className="py-3 pr-4">IEFA or SCHF</td></tr>
                <tr><td className="py-3 pr-4">Emerging markets</td><td className="py-3 pr-4">VWO</td><td className="py-3 pr-4">IEMG or SCHE</td></tr>
                <tr><td className="py-3 pr-4">Total bond market</td><td className="py-3 pr-4">BND</td><td className="py-3 pr-4">AGG or SCHZ</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The pattern:</strong> swap across providers AND across the underlying index. VTI
            → SCHB is the cleanest US total-market swap.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The five common ways people accidentally trigger wash sales</h2>

          <ol>
            <li><strong>Automatic dividend reinvestment.</strong> If you're harvesting losses on VTI but dividends are auto-reinvesting in VTI in a different account, that buy counts. Fix: turn off DRIP before harvesting.</li>
            <li><strong>401(k) auto-contributions.</strong> If your 401(k) auto-buys a fund similar to one you sold at a loss in taxable, that's a wash sale across accounts. Less risky if the funds are clearly different (most 401(k) S&P 500 institutional fund is technically a different security but the IRS could argue identical).</li>
            <li><strong>Spouse's account.</strong> MFJ couples share wash sale rules across all accounts. Coordinate.</li>
            <li><strong>Re-buying too soon.</strong> Day 30 of the post-sale window is still inside the wash period — wait at least 31 days.</li>
            <li><strong>Buying first, then selling.</strong> The 30-day-before window catches people who bought a tax lot in mid-May and harvest the loss in mid-June.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>The IRA wash sale trap</h2>

          <p>
            <strong>This is the most expensive wash sale mistake.</strong> If you sell a security at
            a loss in a taxable account and buy the substantially identical security in your IRA
            within 30 days, the IRS not only disallows the loss — it doesn't even add the disallowed
            loss to the IRA's basis (because IRA basis isn't tracked for individual securities).
          </p>

          <p>
            <strong>Net result: the loss is permanently lost.</strong> This is the only common case
            where a wash sale doesn't just defer the deduction — it eliminates it.
          </p>

          <p>
            Source: IRS Revenue Ruling 2008-5.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What if you accidentally trigger one?</h2>

          <p>
            The loss isn't deleted forever — it's added to the basis of the replacement security.
            When you eventually sell the replacement, your gain is reduced (or your loss is
            increased) by the disallowed amount.
          </p>

          <p>
            Example: bought VTI at $200, sold at $180 (loss of $20). Wash sale: bought VTI again
            within 30 days at $185. The $20 loss is disallowed this year. Your basis on the new VTI
            shares is $185 + $20 = $205. When you eventually sell at $230, your taxable gain is $25
            instead of $45.
          </p>

          <p>
            <strong>The catch:</strong> if you hold the replacement forever, you never realize the
            benefit. Wash sales aren't free if you don't eventually sell.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to do harvesting</h2>

          <p>
            <strong>Most major brokers track wash sales within their own systems and report on
            Form 1099-B.</strong> Robo-advisors like Betterment and Wealthfront automate
            tax-loss harvesting with built-in wash-sale logic.
          </p>

          <p>
            For DIY at a low-cost brokerage:
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
            Full harvesting strategy in our{" "}
            <Link href="/learn/tax-loss-harvesting-guide">tax-loss harvesting guide</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The wash sale rule isn't hard to navigate — you just have to know it
            exists.</strong> The simplest playbook:
          </p>

          <ol>
            <li>Turn off DRIP on any fund you're harvesting.</li>
            <li>Pause 401(k) auto-buys of overlapping funds for ~35 days.</li>
            <li>Coordinate with your spouse if MFJ.</li>
            <li>Swap to a different-index/different-provider fund.</li>
            <li>Wait at least 31 days before buying back the original.</li>
          </ol>

          <p>
            Do that and the loss harvest works cleanly every time.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting guide</Link></li>
            <li><Link href="/learn/capital-gains-tax-2026">Capital gains tax 2026</Link></li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link></li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link></li>
            <li><Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
