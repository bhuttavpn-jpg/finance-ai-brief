import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "tax-brackets-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Federal income tax brackets 2026: Complete IRS tables";
const description =
  "The 2026 IRS tax brackets and standard deduction for every filing status, sourced from Rev. Proc. 2025-32 / IR-2025-103. Plus a worked example of how marginal rates actually apply to your taxable income.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What are the 2026 federal income tax brackets?",
    a: "The 2026 brackets keep the same seven rates as 2025 — 10%, 12%, 22%, 24%, 32%, 35%, and 37% — with thresholds adjusted for inflation. For single filers, the 22% bracket starts at $50,401, the 24% bracket at $105,701, and the top 37% rate kicks in at $640,601. For married filing jointly, those thresholds are $100,801, $211,401, and $768,701 respectively. Full tables sourced from IRS Rev. Proc. 2025-32 are in this article.",
  },
  {
    q: "How do tax brackets actually work?",
    a: "Brackets are 'marginal' — each dollar of income is taxed at the rate of the bracket it falls into, not at one flat rate. A single filer with $80,000 of taxable income pays 10% on the first $12,400, 12% on the next $38,000, and 22% on the remaining $29,600. The total federal tax is $11,427 — an effective rate of ~14%, not the 22% headline rate of the top bracket they're in.",
  },
  {
    q: "What is the 2026 standard deduction?",
    a: "$16,100 for single filers and married filing separately; $32,200 for married filing jointly; $24,150 for head of household. Taxpayers 65 or older or blind get additional amounts. Most filers take the standard deduction rather than itemizing, since the standard deduction nearly always exceeds itemized totals unless you have significant mortgage interest, SALT (up to the cap), or charitable contributions.",
  },
  {
    q: "Did tax rates change for 2026?",
    a: "No. The seven rates remain 10/12/22/24/32/35/37%. What changed are the bracket thresholds, which were adjusted for inflation per Rev. Proc. 2025-32. The One, Big, Beautiful Bill Act of 2025 made the 2018-vintage rate structure permanent, so the rates themselves are stable for the foreseeable future.",
  },
  {
    q: "What's the difference between marginal and effective tax rate?",
    a: "Your marginal rate is the rate on your last dollar of income — the top bracket you fall into. Your effective rate is your total federal tax divided by your taxable income, which is always lower because earlier dollars are taxed at lower bracket rates. A single filer at $120,000 taxable income has a 24% marginal rate but roughly a 17% effective rate.",
  },
  {
    q: "How do I find my taxable income?",
    a: "Start with your gross income, subtract above-the-line adjustments (traditional 401(k) and IRA contributions, HSA contributions, student loan interest), then subtract either the standard deduction or your itemized deductions. The result is your taxable income — the number you apply the brackets to.",
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
          subtitle="The complete 2026 IRS bracket tables for every filing status, the 2026 standard deductions, and a worked example showing how marginal rates actually translate to a tax bill."
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
            <strong>The 2026 federal income tax brackets keep the same seven rates as 2025 — 10%,
            12%, 22%, 24%, 32%, 35%, and 37% — with thresholds adjusted for inflation</strong>
            per <strong>IRS Rev. Proc. 2025-32</strong> (news release IR-2025-103, October 9, 2025).
          </p>

          <p>
            <strong>The most important thing to understand:</strong> brackets are <em>marginal</em>.
            Being in the &quot;22% bracket&quot; doesn&apos;t mean you pay 22% on all your income.
            Each dollar gets taxed at the rate of the bracket it falls into, and earlier dollars are
            taxed at lower rates.
          </p>

          <p>
            Below are the complete 2026 tables for every filing status, the 2026 standard
            deductions, and a worked example so the math is concrete.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 brackets — Single filers</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Taxable income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">10%</td><td className="py-3 pr-4">$0 – $12,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">12%</td><td className="py-3 pr-4">$12,401 – $50,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">22%</td><td className="py-3 pr-4">$50,401 – $105,700</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">24%</td><td className="py-3 pr-4">$105,701 – $201,775</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">32%</td><td className="py-3 pr-4">$201,776 – $256,225</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">35%</td><td className="py-3 pr-4">$256,226 – $640,600</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">37%</td><td className="py-3 pr-4">$640,601 or more</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>2026 brackets — Married filing jointly (MFJ)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Taxable income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">10%</td><td className="py-3 pr-4">$0 – $24,800</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">12%</td><td className="py-3 pr-4">$24,801 – $100,800</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">22%</td><td className="py-3 pr-4">$100,801 – $211,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">24%</td><td className="py-3 pr-4">$211,401 – $403,550</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">32%</td><td className="py-3 pr-4">$403,551 – $512,450</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">35%</td><td className="py-3 pr-4">$512,451 – $768,700</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">37%</td><td className="py-3 pr-4">$768,701 or more</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>2026 brackets — Head of household (HOH)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Taxable income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">10%</td><td className="py-3 pr-4">$0 – $17,700</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">12%</td><td className="py-3 pr-4">$17,701 – $67,450</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">22%</td><td className="py-3 pr-4">$67,451 – $105,700</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">24%</td><td className="py-3 pr-4">$105,701 – $201,775</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">32%</td><td className="py-3 pr-4">$201,776 – $256,200</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">35%</td><td className="py-3 pr-4">$256,201 – $640,600</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">37%</td><td className="py-3 pr-4">$640,601 or more</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>2026 brackets — Married filing separately (MFS)</h2>

          <p>
            <strong>MFS brackets are roughly half of MFJ.</strong> If you and your spouse file
            separately, each spouse uses these thresholds for their own taxable income.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Taxable income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">10%</td><td className="py-3 pr-4">$0 – $12,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">12%</td><td className="py-3 pr-4">$12,401 – $50,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">22%</td><td className="py-3 pr-4">$50,401 – $105,700</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">24%</td><td className="py-3 pr-4">$105,701 – $201,775</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">32%</td><td className="py-3 pr-4">$201,776 – $256,225</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">35%</td><td className="py-3 pr-4">$256,226 – $384,350</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">37%</td><td className="py-3 pr-4">$384,351 or more</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">Source: IRS Rev. Proc. 2025-32; news release <strong>IR-2025-103</strong> (October 9, 2025).</p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 standard deduction</h2>

          <p>
            <strong>Most filers take the standard deduction</strong> because it usually exceeds
            itemized totals unless you have a large mortgage, significant state-and-local tax (SALT)
            payments, or major charitable giving.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Filing status</th>
                  <th className="py-3 pr-4">2026 standard deduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Single</td><td className="py-3 pr-4">$16,100</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing jointly</td><td className="py-3 pr-4">$32,200</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing separately</td><td className="py-3 pr-4">$16,100</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Head of household</td><td className="py-3 pr-4">$24,150</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Filers 65+ or blind</strong> get an additional standard deduction amount on top
            of these figures.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How brackets actually work: a worked example</h2>

          <p>
            <strong>Take a single filer with $80,000 of taxable income.</strong> They&apos;re
            &quot;in the 22% bracket,&quot; but here&apos;s what they actually pay.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Income slice</th>
                  <th className="py-3 pr-4">Amount</th>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">Tax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">$0 – $12,400</td><td className="py-3 pr-4">$12,400</td><td className="py-3 pr-4">10%</td><td className="py-3 pr-4">$1,240</td></tr>
                <tr><td className="py-3 pr-4">$12,401 – $50,400</td><td className="py-3 pr-4">$38,000</td><td className="py-3 pr-4">12%</td><td className="py-3 pr-4">$4,560</td></tr>
                <tr><td className="py-3 pr-4">$50,401 – $80,000</td><td className="py-3 pr-4">$29,600</td><td className="py-3 pr-4">22%</td><td className="py-3 pr-4">$6,512</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Total federal tax</td><td className="py-3 pr-4"></td><td className="py-3 pr-4"></td><td className="py-3 pr-4"><strong>$12,312</strong></td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Effective rate</td><td className="py-3 pr-4"></td><td className="py-3 pr-4"></td><td className="py-3 pr-4"><strong>~15.4%</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The marginal rate is 22%, but the effective rate is ~15.4%.</strong> The
            difference matters for decisions like whether to make a Traditional or Roth contribution
            — what counts is the marginal rate on the next dollar, not the average.
          </p>

          <p>
            <strong>Use our </strong>
            <Link href="/tools/tax-bracket">marginal tax rate calculator</Link>
            <strong> to find your own marginal and effective rate in seconds.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to lower your taxable income</h2>

          <p>
            <strong>You don&apos;t pay tax on every dollar you earn.</strong> Several deductions
            shrink the income the brackets apply to.
          </p>

          <ul>
            <li><strong>Traditional 401(k) contributions</strong> — up to $24,500 in 2026 (per IRS IR-2025-111). Each dollar reduces taxable income.</li>
            <li><strong>Traditional IRA contributions</strong> — up to $7,500 in 2026, if you qualify for the deduction.</li>
            <li><strong>HSA contributions</strong> — up to $4,400 (self-only) or $8,750 (family) in 2026. Triple-tax-advantaged.</li>
            <li><strong>The standard deduction</strong> — automatic for most filers.</li>
            <li><strong>Itemized deductions</strong> — mortgage interest, SALT (capped), charitable contributions, qualifying medical expenses over 7.5% of AGI.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Filing your taxes</h2>

          <p>
            <strong>The brackets are only useful once you actually file.</strong> For most filers,
            tax software walks the math automatically.
          </p>

          <p>
            <AffiliateButton partner="turbotax" source={slug}>
              File with TurboTax →
            </AffiliateButton>
          </p>

          <p>You can also file with:</p>
          <ul>
            <li><AffiliateButton partner="freetaxusa" source={slug} variant="secondary">FreeTaxUSA — free federal, $14.99 state</AffiliateButton></li>
            <li><AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Rates are unchanged for 2026 — only the thresholds shifted with inflation.</strong>
            Your marginal rate matters more than your bracket label, and most filers will pay an
            effective rate well below their top bracket. Maxing tax-deferred accounts (401(k),
            Traditional IRA, HSA) is the cleanest way to drop into a lower bracket and lower your
            total tax.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to put what&apos;s left after taxes</h2>

          <p>
            <strong>Knowing your bracket only matters if you do something with what
            you keep.</strong> A <Link href="/learn/best-hysa-2026">high-yield
            savings account</Link> pays meaningful APY on the cash you set aside for
            an emergency fund, next year&apos;s IRA contribution, or HSA top-up.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open SoFi Money →
            </AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link> — and Roth vs. Traditional bracket math.</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — for high earners above the direct-contribution limit.</li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting</Link> — reduce your capital-gains tax bill.</li>
            <li><Link href="/learn/hsa-vs-fsa">HSA vs. FSA</Link> — the most powerful pre-tax bucket if you&apos;re HDHP-eligible.</li>
            <li><Link href="/tools/tax-bracket">Marginal tax rate calculator</Link> — find your bracket in 30 seconds.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
