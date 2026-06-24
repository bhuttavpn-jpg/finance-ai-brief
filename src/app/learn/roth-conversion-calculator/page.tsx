import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { RothConversionCalculator } from "@/components/tools/RothConversionCalculator";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "roth-conversion-calculator";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Roth conversion calculator 2026: should you convert, and how much?";
const description =
  "A Roth conversion moves pre-tax retirement money into a Roth IRA — you pay income tax now, then owe nothing on future growth or withdrawals. Use the calculator to see your exact tax bill today vs. the tax you'd owe in retirement, and whether converting makes financial sense.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is a Roth conversion?",
    a: "A Roth conversion moves money from a traditional IRA or 401(k) — where contributions were pre-tax — into a Roth IRA. The converted amount counts as ordinary income in the year you convert, so you pay income tax on it immediately. In exchange, the money grows tax-free and qualified withdrawals in retirement are tax-free. There are no income limits on Roth conversions.",
  },
  {
    q: "When does a Roth conversion make sense?",
    a: "A conversion saves money when your current marginal tax rate on the conversion dollars is lower than the rate you'd pay on withdrawals in retirement. It's most compelling in: (1) a low-income year — job gap, early retirement before RMDs, or business loss; (2) years when you're in the 12% or 22% bracket and expect to be in 22%+ in retirement; (3) years before age 73 when required minimum distributions would force taxable withdrawals anyway.",
  },
  {
    q: "How much can I convert in a year?",
    a: "There is no annual limit on Roth conversions — you can convert any amount from any number of accounts in a single year. The only constraint is the tax bill: the entire converted amount stacks on top of your other income and is taxed as ordinary income. Converting too much in one year can push you into a higher bracket, make more of your Social Security taxable, or trigger the IRMAA Medicare surcharge.",
  },
  {
    q: "Should I pay the conversion tax from my IRA or from savings?",
    a: "Always pay from outside savings if you can. Paying the tax from the IRA itself (withholding) reduces the amount converted and creates a smaller Roth balance. Paying from a taxable savings or checking account means the full converted amount compounds tax-free. Using IRA funds for the tax is also treated as a premature distribution (10% penalty) if you're under 59½.",
  },
  {
    q: "What is a Roth conversion ladder?",
    a: "A Roth conversion ladder is a multi-year strategy where you convert a fixed amount each year — typically enough to fill up your current bracket without jumping to the next one. The goal is to systematically move pre-tax money into Roth at low rates over many years, reducing future RMDs and the lifetime tax burden. It's especially powerful in the years between early retirement and when Social Security + RMDs start.",
  },
  {
    q: "Can I undo a Roth conversion (recharacterize)?",
    a: "No. The Tax Cuts and Jobs Act (2017) permanently eliminated recharacterization of Roth conversions. Once you convert, it's permanent — the tax is owed for that year. You can still recharacterize Roth IRA contributions (switching a regular Roth contribution back to Traditional), but not conversions.",
  },
  {
    q: "Do Roth conversions count toward the annual IRA contribution limit?",
    a: "No. Roth conversions are separate from the annual contribution limit ($7,500 in 2026; $8,500 if 50+). You can max your Roth IRA contribution AND do a conversion in the same year — they don't reduce each other.",
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
          subtitle="Pay tax now at a known rate, never again on that money. The calculator shows whether your current rate beats what you'd pay in retirement."
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
            <strong>A Roth conversion is a bet that your tax rate today is lower than your tax rate in retirement.</strong> If you&apos;re right, you win — every dollar that grows in the Roth comes out tax-free. If you&apos;re wrong (you convert at 24% but retire in the 12% bracket), you overpaid.
          </p>
          <p>
            The calculator below computes the exact tax you&apos;ll owe on the conversion using 2026 federal brackets, then projects both scenarios to your chosen retirement date so you can see the actual dollar difference.
          </p>
        </div>

        {/* Calculator embedded above the fold */}
        <div className="not-prose my-10">
          <RothConversionCalculator source={slug} />
        </div>

        <div className="prose prose-lg max-w-none">
          <hr className="my-10 border-brand-100" />

          <h2>How a Roth conversion works</h2>

          <p>
            You instruct your IRA custodian (Fidelity, Schwab, Vanguard, etc.) to move a dollar amount from your traditional IRA into a Roth IRA at the same institution. The transferred amount is reported on a 1099-R as ordinary income — it stacks on top of your wages, freelance income, and other income for the year.
          </p>

          <p>
            In exchange, the converted amount and all future growth in that Roth account are permanently tax-free, provided you meet the five-year rule and are 59½ or older on withdrawal. There are no income limits on conversions — anyone can convert, regardless of income.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The core math: when does converting save money?</h2>

          <p>
            The math is deceptively simple: convert if your <strong>effective rate on the conversion dollars today</strong> is lower than your <strong>marginal rate on withdrawals in retirement</strong>.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Scenario</th>
                  <th className="py-3 pr-4">Rate today</th>
                  <th className="py-3 pr-4">Rate in retirement</th>
                  <th className="py-3 pr-4">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">Low income year, high-earner trajectory</td><td className="py-3 pr-4">12%</td><td className="py-3 pr-4">22–24%</td><td className="py-3 pr-4 font-semibold text-green-700">Convert</td></tr>
                <tr><td className="py-3 pr-4">Peak career years, expecting pay cut in retirement</td><td className="py-3 pr-4">32%</td><td className="py-3 pr-4">22%</td><td className="py-3 pr-4 font-semibold text-red-700">Skip</td></tr>
                <tr><td className="py-3 pr-4">Same bracket expected</td><td className="py-3 pr-4">22%</td><td className="py-3 pr-4">22%</td><td className="py-3 pr-4 font-semibold text-amber-700">Tie (prefer Roth for flexibility)</td></tr>
                <tr><td className="py-3 pr-4">Fill up current bracket before RMDs start</td><td className="py-3 pr-4">24%</td><td className="py-3 pr-4">32% (with RMDs + SS)</td><td className="py-3 pr-4 font-semibold text-green-700">Convert</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            The complication: your retirement tax rate isn&apos;t just your bracket on wages. It includes <strong>required minimum distributions</strong> (RMDs) from traditional accounts (mandatory starting at age 73), <strong>Social Security income</strong> (up to 85% is taxable), and any pension or part-time income. High traditional balances generate large RMDs that can push retirees into higher brackets than they expect.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The best years to do a Roth conversion</h2>

          <ul>
            <li>
              <strong>Low-income years</strong> — job change, business loss, sabbatical, parental leave. Your ordinary income is low, so the conversion fills a bracket that would otherwise go empty.
            </li>
            <li>
              <strong>Early retirement before Social Security starts</strong> — between retirement and age 62 (or 67/70 when SS is maximized), income can drop dramatically. This &ldquo;gap&rdquo; is the classic Roth conversion window.
            </li>
            <li>
              <strong>Ages 59½ to 72 — before RMDs force withdrawals</strong> — once RMDs start, traditional account withdrawals become mandatory and taxable. Converting before then is voluntary and controllable.
            </li>
            <li>
              <strong>After the standard deduction wipes out regular income</strong> — retired couples with no W-2 income may have $32,200 of space at the 0% rate before the 10% bracket even starts. Converting $30,000 into that 0% window costs almost nothing in federal tax.
            </li>
            <li>
              <strong>Years when your investments are down</strong> — converting a lower-value account means a smaller tax bill today. The recovery in value happens inside the Roth.
            </li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Watch out: bracket jumps and IRMAA</h2>

          <p>
            Converting too much in one year can push income across a bracket boundary — the calculator flags this when it happens. The jumps that hurt most:
          </p>

          <ul>
            <li><strong>12% → 22%</strong> — a 10-percentage-point jump. Common for retirees in the gap years.</li>
            <li><strong>22% → 24%</strong> — smaller gap but higher dollar amount; still worth watching.</li>
            <li><strong>IRMAA surcharges</strong> — Medicare Part B and D premiums spike at income thresholds above $106,000 (single) / $212,000 (MFJ) in 2026. A large conversion can cost $1,000–$5,000+ in IRMAA surcharges on top of the income tax.</li>
            <li><strong>Social Security taxation</strong> — above $34,000 (single) / $44,000 (MFJ) of combined income, up to 85% of SS benefits become taxable. A conversion that crosses these thresholds effectively taxes the same income twice.</li>
          </ul>

          <p>
            <strong>The optimal strategy: fill a bracket, don&apos;t jump it.</strong> Convert enough to bring taxable income to the top of your current bracket, then stop. Repeat every year until your traditional balance is depleted or retirement brackets change.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually do a Roth conversion</h2>

          <ol>
            <li><strong>Open a Roth IRA</strong> at the same institution as your traditional IRA if you don&apos;t already have one.</li>
            <li><strong>Initiate the conversion</strong> online (Fidelity: Accounts → Transfer → Roth conversion; Schwab and Vanguard are similar). Specify the dollar amount or percentage to convert.</li>
            <li><strong>Choose tax withholding.</strong> Select 0% withholding — pay the tax from an external checking or savings account, not from the IRA. Withholding from the IRA reduces the Roth balance and may trigger a 10% early withdrawal penalty if under 59½.</li>
            <li><strong>Pay the estimated tax.</strong> Add the conversion amount to your Q4 estimated tax payment (due January 15 following year) or adjust W-4 withholding if you have a W-2 job. The IRS expects payment by the deadline — underpayment triggers a penalty.</li>
            <li><strong>Report on Form 8606.</strong> Your custodian sends a 1099-R with the conversion amount. You report it on Form 8606 with your tax return. TurboTax and TaxAct handle this automatically.</li>
          </ol>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Open Roth IRA at Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Open Roth IRA at Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Open Roth IRA at Vanguard →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The Roth conversion ladder (multi-year strategy)</h2>

          <p>
            Rather than converting a large lump sum in one year, most financial planners recommend a ladder: convert a fixed amount each year, targeting the top of your current bracket. This approach:
          </p>

          <ul>
            <li>Avoids bracket jumps in any single year</li>
            <li>Spreads the tax bill over many years at predictable rates</li>
            <li>Reduces the traditional balance gradually, lowering future RMDs</li>
            <li>Builds a &ldquo;ladder&rdquo; of converted funds that become penalty-free accessible 5 years after each conversion (before age 59½)</li>
          </ul>

          <p>
            See <Link href="/learn/roth-conversion-ladder">Roth conversion ladder: the complete guide</Link> for the full multi-year strategy with worked examples for early retirement.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The Roth conversion decision comes down to one question: will your tax rate be higher now or in retirement?</strong> Run the calculator above with your actual income, conversion amount, and honest retirement income estimate. If the conversion effective rate is lower than your expected retirement rate, converting saves you real money — and the benefit compounds for every year the Roth grows.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link> — multi-year strategy for early retirees.</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — for high earners above the contribution income limit.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link> — which account to contribute to going forward.</li>
            <li><Link href="/learn/ira-rmd-rules">IRA RMD rules</Link> — how required minimum distributions work and why they make conversions more urgent.</li>
            <li><Link href="/learn/mega-backdoor-roth-guide">Mega backdoor Roth</Link> — converting after-tax 401(k) contributions.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — find your current bracket to size the conversion.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug={slug} />
      </article>
    </>
  );
}
