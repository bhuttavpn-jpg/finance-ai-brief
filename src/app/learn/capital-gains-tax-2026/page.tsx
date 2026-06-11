import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "capital-gains-tax-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Capital gains tax 2026: Short-term vs. long-term rates explained";
const description =
  "How the IRS taxes investment gains in 2026: short-term gains taxed as ordinary income, long-term gains at 0%/15%/20%, plus the 3.8% Net Investment Income Tax on high earners. Includes the holding-period rule, harvesting strategies, and worked examples.";
const PUBLISHED = "2026-05-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is the difference between short-term and long-term capital gains?",
    a: "Short-term capital gains apply to assets held one year or less and are taxed at your ordinary income tax rate (10%–37% in 2026). Long-term capital gains apply to assets held more than one year and are taxed at preferential rates of 0%, 15%, or 20% depending on your taxable income. The single-day difference between 'one year' and 'one year and a day' can cut your tax in half.",
  },
  {
    q: "What are the 2026 long-term capital gains rates?",
    a: "0%, 15%, or 20%. The IRS adjusts the income thresholds annually via the revenue procedure that sets income brackets (Rev. Proc. 2025-32, IR-2025-103 for 2026 figures). Single filers in 2026 stay in the 0% bracket for taxable income up to approximately $49,450, hit 15% above that, and 20% above ~$545,500. Verify the exact 2026 thresholds at IRS.gov before filing.",
  },
  {
    q: "What is the Net Investment Income Tax (NIIT)?",
    a: "The 3.8% NIIT applies to investment income (including capital gains) for single filers with modified AGI over $200,000 or married-filing-jointly couples over $250,000. These thresholds are not indexed for inflation and have not changed since 2013. For a high earner, the effective long-term capital gains rate becomes 18.8% (15% + 3.8%) or 23.8% (20% + 3.8%).",
  },
  {
    q: "Do I have to pay capital gains tax on my home sale?",
    a: "Single filers can exclude up to $250,000 of gain ($500,000 for married filing jointly) on the sale of a primary residence if you've owned and lived in it for at least 2 of the last 5 years. Above the exclusion, the gain is taxed at long-term rates. Investment property or second homes don't qualify for this exclusion.",
  },
  {
    q: "How can I reduce my capital gains tax?",
    a: "Several strategies: (1) hold positions for more than a year to qualify for long-term rates; (2) harvest losses to offset gains via tax-loss harvesting; (3) use tax-advantaged accounts (IRA, 401(k), HSA) where gains are tax-deferred or tax-free; (4) donate appreciated stock to charity instead of cash; (5) for high earners, manage income to stay below NIIT thresholds in years you take large gains.",
  },
  {
    q: "How does tax-loss harvesting work?",
    a: "Sell investments at a loss to offset gains elsewhere — realized losses cancel realized gains dollar-for-dollar. If losses exceed gains, you can deduct up to $3,000/year against ordinary income (the remainder carries forward to future years). Watch the wash-sale rule: if you buy a substantially identical security within 30 days before or after the sale, the loss is disallowed. See our full tax-loss harvesting guide for the mechanics.",
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
          subtitle="How the IRS taxes investment gains in 2026 — short-term as ordinary income, long-term at 0/15/20%, and the 3.8% NIIT for high earners. Plus the strategies that cut the bill."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The single most important capital gains rule:</strong> hold an investment for
            more than one year before you sell. The tax rate often drops by half on the same
            dollar of gain.
          </p>

          <p>
            <strong>This guide covers the 2026 rates,</strong> the holding period rule, the Net
            Investment Income Tax, the home-sale exclusion, and the strategies that legally reduce
            what you owe. Tax-bracket figures cited here come from IRS news release
            <strong> IR-2025-103</strong> (Rev. Proc. 2025-32, October 9, 2025).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Short-term vs. long-term: the one-day rule</h2>

          <p>
            <strong>The IRS divides capital gains into two categories based on how long you held
            the asset:</strong>
          </p>

          <ul>
            <li><strong>Short-term</strong> — held one year or less. Taxed as ordinary income (10%–37% in 2026).</li>
            <li><strong>Long-term</strong> — held more than one year. Taxed at preferential rates of 0%, 15%, or 20%.</li>
          </ul>

          <p>
            <strong>The holding period starts the day after you buy</strong> and ends on the day you
            sell. To qualify as long-term, the sale date must be at least one year and one day after
            the purchase date.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Purchase date</th>
                  <th className="py-3 pr-4">Earliest sale date for long-term</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">March 15, 2026</td><td className="py-3 pr-4">March 16, 2027</td></tr>
                <tr><td className="py-3 pr-4">June 30, 2026</td><td className="py-3 pr-4">July 1, 2027</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 long-term capital gains brackets</h2>

          <p>
            <strong>Long-term rates are tied to your taxable income, not your gain.</strong> The
            brackets stack on top of your ordinary-income calculation.
          </p>

          <p>
            <strong>2026 brackets (per IR-2025-103, Rev. Proc. 2025-32):</strong>
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Single (taxable income)</th>
                  <th className="py-3 pr-4">MFJ</th>
                  <th className="py-3 pr-4">HOH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">0%</td><td className="py-3 pr-4">Up to ~$49,450</td><td className="py-3 pr-4">Up to ~$98,900</td><td className="py-3 pr-4">Up to ~$66,200</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">15%</td><td className="py-3 pr-4">~$49,450 to ~$545,500</td><td className="py-3 pr-4">~$98,900 to ~$613,700</td><td className="py-3 pr-4">~$66,200 to ~$579,600</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">20%</td><td className="py-3 pr-4">Above ~$545,500</td><td className="py-3 pr-4">Above ~$613,700</td><td className="py-3 pr-4">Above ~$579,600</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>Figures are 2026 IRS inflation-adjusted thresholds per Rev. Proc. 2025-32 (IR-2025-103, October 9, 2025). Cross-check the exact threshold at IRS.gov before filing.</em>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The Net Investment Income Tax (3.8%)</h2>

          <p>
            <strong>High earners pay an additional 3.8% on investment income.</strong> The Net
            Investment Income Tax (NIIT) applies when modified adjusted gross income exceeds:
          </p>

          <ul>
            <li><strong>$200,000</strong> — single or head of household</li>
            <li><strong>$250,000</strong> — married filing jointly</li>
            <li><strong>$125,000</strong> — married filing separately</li>
          </ul>

          <p>
            These thresholds are not indexed for inflation and have not changed since 2013. The
            NIIT applies to the lesser of your net investment income or your AGI above the threshold.
          </p>

          <p>
            <strong>For a high earner, the effective LTCG rate becomes 18.8% (15% + 3.8%) or 23.8%
            (20% + 3.8%).</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Worked examples</h2>

          <p><strong>Example 1: Single filer, $80,000 taxable income, $10,000 long-term gain.</strong></p>
          <p>
            Income lands above the $49,450 threshold but well below $545,500 → 15% rate. Tax on the
            gain: <strong>$1,500</strong>. No NIIT (income under $200K).
          </p>

          <p><strong>Example 2: Single filer, $45,000 taxable income, $5,000 long-term gain.</strong></p>
          <p>
            Income plus the gain ($50,000 combined) sits right at the top of the 0% bracket. The
            first $4,450 of gain fills the 0% bracket; the last $550 of gain hits 15%. Tax:
            <strong> $82</strong>. The takeaway: low-income years are great years to harvest gains.
          </p>

          <p><strong>Example 3: Same single filer, $5,000 short-term gain instead.</strong></p>
          <p>
            Short-term gains are taxed as ordinary income. At $45,000 of base income, an additional
            $5,000 mostly fills the 22% bracket. Tax: <strong>~$1,100</strong>. That&apos;s 13x what
            the same gain would&apos;ve cost long-term — same dollar, same investment, very different
            outcome.
          </p>

          <p><strong>Example 4: MFJ couple, $400,000 taxable income, $50,000 long-term gain.</strong></p>
          <p>
            Combined income above $250K NIIT threshold → 15% LTCG + 3.8% NIIT = 18.8%. Tax on the
            gain: <strong>$9,400</strong>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The home-sale exclusion ($250K / $500K)</h2>

          <p>
            <strong>If you sell your primary residence,</strong> you can exclude:
          </p>

          <ul>
            <li><strong>Up to $250,000 of gain</strong> as a single filer</li>
            <li><strong>Up to $500,000 of gain</strong> as a married couple filing jointly</li>
          </ul>

          <p>
            <strong>Two tests must both be met:</strong>
          </p>

          <ol>
            <li><strong>Ownership test</strong> — you owned the home for at least 2 of the 5 years before the sale.</li>
            <li><strong>Use test</strong> — you lived in it as your primary residence for at least 2 of the 5 years.</li>
          </ol>

          <p>
            <strong>This is a per-sale, not lifetime, exclusion.</strong> You can use it once every
            2 years. Above the exclusion, gain is taxed at long-term rates. Investment property
            doesn&apos;t qualify (use §1031 like-kind exchange instead for those).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Strategies to legally reduce capital gains tax</h2>

          <h3>1. Hold for more than one year</h3>

          <p>
            <strong>The single highest-leverage move.</strong> A 22% ordinary-income filer who waits
            one extra day to cross the long-term threshold pays 15% instead of 22% on the gain — a
            32% relative tax cut on the same dollar.
          </p>

          <h3>2. Tax-loss harvesting</h3>

          <p>
            <strong>Sell losing positions to offset realized gains.</strong> Realized losses cancel
            realized gains dollar-for-dollar. Excess losses deduct up to $3,000/year against
            ordinary income; the rest carries forward indefinitely.
          </p>

          <p>
            Watch the wash-sale rule: buying a substantially identical security within 30 days
            before or after disallows the loss. See our
            <Link href="/learn/tax-loss-harvesting-guide"> tax-loss harvesting guide</Link> for
            mechanics.
          </p>

          <h3>3. Hold investments in tax-advantaged accounts</h3>

          <p>
            <strong>Gains inside a 401(k), Traditional IRA, Roth IRA, or HSA are not taxed at
            realization.</strong> If you sell VTI inside a Roth IRA, there&apos;s no capital gains
            event. Use these accounts for the most actively traded or highest-growth positions.
          </p>

          <h3>4. Donate appreciated stock to charity</h3>

          <p>
            <strong>If you donate stock you&apos;ve held more than a year,</strong> you get an
            itemized deduction for the full market value AND you avoid paying capital gains on the
            appreciation. A donor-advised fund (Fidelity Charitable, Schwab Charitable, Vanguard
            Charitable) bundles this into one step.
          </p>

          <h3>5. Time gain realization around income</h3>

          <p>
            <strong>Low-income year (sabbatical, between jobs, retirement)?</strong> Take gains. You
            may pay 0% LTCG. High-income year? Defer if possible, or pair the realization with
            harvested losses.
          </p>

          <h3>6. Use specific lot identification</h3>

          <p>
            <strong>When you sell part of a position, pick which tax lots are sold.</strong> Fidelity,
            Schwab, and Vanguard let you choose specific shares — usually the highest-cost-basis
            lots to minimize gain. The default is usually FIFO (first-in-first-out) which often
            maximizes tax.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where capital gains tax is paid</h2>

          <p>
            <strong>Brokerages report sales on Form 1099-B.</strong> Long-term and short-term gains
            are reported separately. The 1099-B feeds Form 8949 and Schedule D on your return.
          </p>

          <p>
            <strong>If you take big gains, you may owe estimated tax during the year</strong> to
            avoid an underpayment penalty. Brokerages don&apos;t withhold tax on gains the way
            employers withhold on wages.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Brokerage matters here</h2>

          <p>
            <strong>The brokerage you hold investments at affects how easily you can run these
            strategies.</strong> Specific lot ID, automated tax-loss harvesting, and clean
            cost-basis reporting aren&apos;t given everywhere.
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>
          </p>

          <p>Alternatives with strong tax tooling:</p>
          <ul>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Charles Schwab</AffiliateButton></li>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Capital gains tax is one of the most controllable taxes you pay.</strong> The
            holding-period rule alone — one year + one day — can cut your tax in half. Pair it with
            tax-loss harvesting, tax-advantaged account use, and lot ID, and a typical investor
            saves several thousand dollars of tax over a decade with little extra effort.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting guide</Link></li>
            <li><Link href="/learn/tax-brackets-2026">Federal tax brackets 2026</Link></li>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link></li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link></li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Save tax" currentSlug="capital-gains-tax-2026" />
      </article>
    </>
  );
}
