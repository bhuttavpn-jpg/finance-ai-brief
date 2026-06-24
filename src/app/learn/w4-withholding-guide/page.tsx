import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "w4-withholding-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "W-4 withholding guide 2026: how to fill it out and avoid over- or under-withholding";
const description =
  "The W-4 tells your employer how much federal income tax to withhold from each paycheck. Fill it out wrong and you'll either owe a big bill in April or give the IRS an interest-free loan all year. Here's exactly how to fill out the 2026 W-4 correctly.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I need to fill out a new W-4 every year?",
    a: "No. Your existing W-4 stays in effect until you submit a new one. You should update it when your situation changes: new job, marriage, divorce, birth of a child, or significant change in income (side hustle, second job, major raise, job loss). The IRS recommends checking your withholding annually — especially after any life event.",
  },
  {
    q: "What's the difference between claiming 0 and 1 on the old W-4?",
    a: "The 2020 redesign eliminated allowances (the 0, 1, 2 system). If you have a pre-2020 W-4 on file, your employer must continue honoring it using the old withholding tables. The new W-4 doesn't use allowances — instead you input dollar amounts from the worksheets. If you start a new job or want to update, you'll use the current W-4.",
  },
  {
    q: "How do I fill out W-4 Step 3 (dependents)?",
    a: "If your total income is under $200,000 (single) or $400,000 (married filing jointly), you can claim the Child Tax Credit: $2,000 per qualifying child under 17, plus $500 per other qualifying dependent. Enter the total dollar amount in Step 3. This reduces withholding to account for the credits you'll receive. Don't enter child-count numbers — enter the dollar value of your credits.",
  },
  {
    q: "What should I put in Step 4(c) — extra withholding?",
    a: "Step 4(c) lets you add a flat dollar amount withheld from every paycheck on top of the normal calculation. Use it to cover: (1) side hustle income where no tax is withheld, (2) investment income like dividends or capital gains, (3) if you're in an unusual situation where the standard steps don't fully capture your liability. The IRS Tax Withholding Estimator calculates the exact amount to enter.",
  },
  {
    q: "What happens if I claim 'Exempt' on a W-4?",
    a: "Exempt means your employer withholds $0 federal income tax from your paychecks. You can only claim exempt if you had zero tax liability in the prior year AND expect zero liability in the current year. If you claim exempt incorrectly, you'll owe the full year's tax in April plus potential underpayment penalties. Exempt must be re-claimed every calendar year — it expires Feb 15.",
  },
  {
    q: "I have two jobs. How does the W-4 handle that?",
    a: "Use the Two Jobs Worksheet (Page 3 of the W-4 instructions) or the IRS Tax Withholding Estimator. The problem with two jobs is that each employer withholds based on your income from that job alone — but your combined income pushes you into a higher bracket. Step 2 of the W-4 addresses this: check the box for two jobs (simplest, overshoots slightly) or use the worksheet (precise). Never put two W-4s on file with both claiming the standard deduction — you'll under-withhold.",
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
      <JsonLd
        data={howToJsonLd({
          name: "How to fill out a W-4",
          steps: [
            { name: "Step 1 — Personal info and filing status", text: "Enter your name, address, SSN, and select your filing status: Single, Married Filing Jointly, or Head of Household. This determines your standard withholding rate." },
            { name: "Step 2 — Multiple jobs or spouse works", text: "Only complete if you (or your spouse) hold more than one job. Use the IRS Tax Withholding Estimator for the most accurate result, or check the box in Step 2(c) (overshoots slightly but ensures you don't under-withhold)." },
            { name: "Step 3 — Claim dependents", text: "If income is under $200K (single) or $400K (MFJ), enter $2,000 per qualifying child under 17 and $500 per other dependent. Total goes in Step 3." },
            { name: "Step 4 — Other adjustments (optional)", text: "4(a): other income not subject to withholding (dividends, side hustle). 4(b): deductions above standard (mortgage interest, etc.). 4(c): extra flat dollar amount to withhold per paycheck." },
            { name: "Step 5 — Sign and submit", text: "Sign the form and submit it to your employer's HR or payroll department. New employees must submit before the first paycheck. Changes take effect in 1–2 pay periods." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Five steps, five minutes. Here's what each section of the 2026 W-4 actually means and what to put in each box."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="7 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The W-4 form controls how much federal tax your employer takes from each paycheck.</strong> Too much withheld and you get a refund in April — but you&apos;ve given the IRS a free loan all year. Too little and you owe in April, possibly with an underpayment penalty. The goal is to get as close to zero as reasonably possible.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2020 W-4 redesign: what changed</h2>

          <p>
            The IRS overhauled the W-4 in 2020. The old system used &ldquo;allowances&rdquo; (claim 0, 1, 2, etc.) — the new system replaces allowances with actual dollar amounts entered on worksheets. The redesign makes the form more intuitive for most situations but adds steps for complex situations (multiple jobs, side income, large deductions).
          </p>

          <p>
            If you submitted a W-4 before 2020 and haven&apos;t updated it, your employer continues using the old tables. You don&apos;t need to submit a new one unless your situation changes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — Personal information and filing status</h2>

          <p>
            Enter your name, address, and Social Security Number. Choose your filing status:
          </p>

          <ul>
            <li><strong>Single or Married Filing Separately</strong> — withholds at the highest rate for your income level.</li>
            <li><strong>Married Filing Jointly (or Qualifying Surviving Spouse)</strong> — withholds at a lower rate assuming two incomes combine on one return. Only accurate if you and your spouse have similar incomes or one spouse doesn&apos;t work.</li>
            <li><strong>Head of Household</strong> — withholds at a rate between Single and MFJ, for qualifying single parents.</li>
          </ul>

          <p>
            If you&apos;re single and have only one job with no other income sources, you can stop at Step 1 and skip to Step 5 — the default withholding is accurate for most straightforward situations.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — Multiple jobs (most people skip this)</h2>

          <p>
            <strong>Only complete Step 2 if you have more than one job, or if you&apos;re filing jointly and your spouse works.</strong>
          </p>

          <p>
            The problem: each employer withholds based on only what they pay you, as if it were your only income. But combined, your earnings land in a higher bracket. Step 2 corrects this.
          </p>

          <p>
            Three options — pick one:
          </p>
          <ol>
            <li><strong>Use the IRS Tax Withholding Estimator</strong> (irs.gov/W4App) — most accurate. Enter amounts from both jobs, it calculates exactly what to enter in Step 4(c).</li>
            <li><strong>Use the Multiple Jobs Worksheet</strong> (page 3 of the W-4 PDF) — manual calculation, accurate for most situations.</li>
            <li><strong>Check the box in Step 2(c)</strong> — tells both employers to withhold at the higher single-job rate. Simple but overshoots; you&apos;ll likely get a refund.</li>
          </ol>

          <p>
            <strong>Don&apos;t skip Step 2 if you have two jobs.</strong> The under-withholding can result in owing $1,000–$3,000+ in April.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Claiming dependents</h2>

          <p>
            This step reduces your withholding to account for the child tax credit and other dependent credits you&apos;ll receive on your return. Enter a dollar amount — not a count.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Dependent type</th>
                  <th className="py-3 pr-4">Enter this amount per person</th>
                  <th className="py-3 pr-4">Income limit to qualify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Child under 17</td><td className="py-3 pr-4">$2,000</td><td className="py-3 pr-4">Under $200K single / $400K MFJ</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Other qualifying dependent</td><td className="py-3 pr-4">$500</td><td className="py-3 pr-4">Under $200K single / $400K MFJ</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Example: married couple with 2 kids under 17 → enter $4,000 in Step 3. This reduces your withholding by $4,000 spread across the year (about $167/paycheck on a 24-paycheck schedule).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Other adjustments</h2>

          <p>
            <strong>Step 4(a) — Other income not subject to withholding.</strong> Enter estimated annual income from sources with no withholding: dividends, interest, side hustle income (if you don&apos;t pay quarterly estimates), rental income, or capital gains. This increases withholding to cover that tax.
          </p>

          <p>
            <strong>Step 4(b) — Deductions.</strong> If you plan to itemize or have large above-the-line deductions exceeding the standard deduction ($15,000 single / $30,000 MFJ in 2026), use the Deductions Worksheet (page 3) to calculate a reduction amount. Most people don&apos;t need this.
          </p>

          <p>
            <strong>Step 4(c) — Extra withholding.</strong> Enter a flat dollar amount to add to every paycheck&apos;s withholding. Common uses:
          </p>
          <ul>
            <li>You have a side hustle and want to cover SE tax through withholding instead of quarterly estimates</li>
            <li>You got a large bonus and want to avoid a shortfall</li>
            <li>You owed a significant amount last April and want to prevent a repeat</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5 — Sign and submit</h2>

          <p>
            Sign and date the form. Submit to your employer&apos;s HR or payroll department. Your employer must implement the change within their next payroll cycle (typically 1–2 pay periods). <strong>Do not mail the W-4 to the IRS</strong> — it goes to your employer only.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When to update your W-4</h2>

          <p>
            Update any time your situation changes significantly:
          </p>
          <ul>
            <li><strong>Life events:</strong> marriage, divorce, birth or adoption of a child, death of a dependent</li>
            <li><strong>Income changes:</strong> significant raise, new second job, side hustle income starts or stops, spouse starts or stops working</li>
            <li><strong>Tax changes:</strong> you plan to itemize vs. take standard deduction, large one-time deduction (home purchase, medical expenses)</li>
            <li><strong>You owed or got a large refund last April:</strong> run the IRS Withholding Estimator and adjust 4(c) accordingly</li>
          </ul>

          <p>
            The IRS Tax Withholding Estimator at <strong>irs.gov/W4App</strong> will tell you exactly what to put on each line based on your full situation — if there&apos;s any doubt, use it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>W-4 and side hustle income</h2>

          <p>
            If you have a side hustle and don&apos;t want to pay quarterly estimated taxes, you can use Step 4(a) or 4(c) on your W-4 to have extra withheld from your W-2 job instead. Estimate your net side hustle income for the year, apply your marginal income tax rate plus 15.3% SE tax, and enter the equivalent per-paycheck amount in Step 4(c).
          </p>

          <p>
            Example: $15,000 expected net side hustle income, 22% bracket → income tax ~$3,300 + SE tax ~$2,120 = ~$5,420 total. Divide by 24 paychecks = ~$226/paycheck extra withholding. Enter $226 in Step 4(c).
          </p>

          <p>
            See our <Link href="/learn/side-hustle-taxes">side hustle taxes guide</Link> for the full self-employment tax picture.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Use tax software to verify</h2>

          <p>
            After submitting your W-4, the easiest sanity check is running your projected year-end income through tax software. FreeTaxUSA and TurboTax both let you enter a draft return to see your estimated liability vs. what you&apos;ve withheld — if there&apos;s a gap, adjust 4(c) on a new W-4.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="turbotax" source={slug}>Estimate with TurboTax →</AffiliateButton>
            <AffiliateButton partner="freetaxusa" source={slug} variant="secondary">Estimate with FreeTaxUSA (free) →</AffiliateButton>
            <AffiliateButton partner="taxact" source={slug} variant="secondary">Estimate with TaxAct →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For a single job with no dependents or side income, Steps 1 and 5 are all you need.</strong> For anything more complex — two jobs, a side hustle, significant investment income, or multiple dependents — fill out Steps 2–4 using the IRS Withholding Estimator. Update your W-4 any time your income or family situation changes meaningfully. The goal is April with a $0 balance due and a $0 refund.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/side-hustle-taxes">Side hustle taxes 2026</Link> — how to handle self-employment income alongside your W-2.</li>
            <li><Link href="/learn/quarterly-estimated-taxes-guide">Quarterly estimated taxes</Link> — the alternative to using Step 4(c) for non-W-2 income.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — find your marginal rate to calculate how much extra to withhold.</li>
            <li><Link href="/learn/standard-deduction-2026">Standard deduction 2026</Link> — $15,000 single / $30,000 MFJ; relevant for Step 4(b).</li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link> — verify your withholding estimate before submitting the W-4.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug={slug} />
      </article>
    </>
  );
}
