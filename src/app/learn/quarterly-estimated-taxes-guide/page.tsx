import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "quarterly-estimated-taxes-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Quarterly estimated taxes 2026: deadlines, safe harbors, and how to pay";
const description =
  "If you owe more than $1,000 at filing time and don't have enough withheld, the IRS expects quarterly estimated payments. Here are the 2026 deadlines, the two safe-harbor rules that avoid penalties, and how to actually calculate and pay.";
const PUBLISHED = "2026-06-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Who has to pay quarterly estimated taxes?",
    a: "Anyone who expects to owe at least $1,000 in federal tax after subtracting withholding and refundable credits. This catches freelancers, S-corp owners taking distributions, landlords, retirees with non-W-2 income, and anyone with significant investment income that isn't being withheld on.",
  },
  {
    q: "What are the 2026 deadlines?",
    a: "April 15 (Q1), June 15 (Q2), September 15 (Q3), and January 15, 2027 (Q4). Note Q2 is only 2 months after Q1, and Q4 spills into the next year. If a date falls on a weekend or federal holiday, the deadline shifts to the next business day.",
  },
  {
    q: "What is the safe harbor rule?",
    a: "Pay at least 100% of last year's total tax liability (110% if your AGI was over $150K, $75K if MFS), divided across the four quarters, and you owe no underpayment penalty — even if you owe a big check in April. Alternatively, pay 90% of the CURRENT year's tax through estimates + withholding, but that requires forecasting accurately mid-year.",
  },
  {
    q: "Can I just have extra withheld from a W-2 instead?",
    a: "Yes, and it's often the cleaner answer. Withholding is treated as paid evenly throughout the year, regardless of when it actually happened. If you have a side hustle and a W-2 day job, increasing W-2 withholding to cover the extra liability avoids the quarterly-deadline shuffle entirely. Submit a new Form W-4 to your employer.",
  },
  {
    q: "What's the penalty for missing a payment?",
    a: "An underpayment penalty calculated as the IRS short-term rate plus 3% (about 8% in 2026), prorated for the days you were short. It's not a flat fee — it's interest on the shortfall from the missed deadline to the date you actually paid. The IRS computes this on Form 2210 when you file.",
  },
  {
    q: "How do I actually pay?",
    a: "Easiest: IRS Direct Pay at irs.gov/payments (free, takes 3 minutes). EFTPS for businesses. Credit card via an IRS-approved processor (~1.85% fee). Check via Form 1040-ES voucher. Most tax software (TurboTax, FreeTaxUSA) generates the vouchers automatically when you file the prior year's return.",
  },
];

const STEPS = [
  { name: "Estimate your annual federal tax liability", text: "Take projected 2026 income, subtract standard or itemized deductions, apply the 2026 tax brackets (IR-2025-103), add SE tax for self-employment income, subtract credits." },
  { name: "Subtract expected withholding", text: "Total W-2 withholding from any job, plus any tax withheld from 1099 income, pension, or Social Security." },
  { name: "Apply the safe harbor", text: "If the shortfall is $1,000 or more, you owe quarterly estimates. The simplest safe harbor: pay 100% of last year's total tax (or 110% if AGI > $150K) split across four payments." },
  { name: "Pay each quarter", text: "April 15, June 15, September 15, January 15. Use IRS Direct Pay at irs.gov/payments. Three minutes per payment." },
  { name: "Reconcile at tax time", text: "When you file the return, the four estimates are credited against total tax. Underpayment penalty is auto-computed on Form 2210 if a quarter was short." },
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
      <JsonLd data={howToJsonLd({ name: "Pay quarterly estimated taxes", steps: STEPS })} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="If you owe $1,000+ at filing and don't have enough withheld, the IRS expects quarterly estimates. Miss them and the penalty accrues at ~8% interest from the day you were short."
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
            <strong>The U.S. tax system is pay-as-you-go.</strong> If you&apos;re a W-2 employee,
            your employer handles this through paycheck withholding. If you&apos;re self-employed,
            an investor with significant capital gains, a landlord, or anyone whose income is not
            being withheld on — you owe the IRS quarterly payments.
          </p>

          <p>
            Miss the deadlines and the underpayment penalty is roughly an 8% annualized interest
            charge on the shortfall, accruing daily. Pay too much and you&apos;ve given the
            Treasury an interest-free loan. The goal is to pay enough each quarter to hit one of
            the two safe-harbor thresholds.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 deadlines</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Quarter</th>
                  <th className="py-3 pr-4">Income period</th>
                  <th className="py-3 pr-4">Payment deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Q1</td><td className="py-3 pr-4">Jan 1 – Mar 31, 2026</td><td className="py-3 pr-4">April 15, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q2</td><td className="py-3 pr-4">Apr 1 – May 31, 2026</td><td className="py-3 pr-4">June 15, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q3</td><td className="py-3 pr-4">Jun 1 – Aug 31, 2026</td><td className="py-3 pr-4">September 15, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q4</td><td className="py-3 pr-4">Sep 1 – Dec 31, 2026</td><td className="py-3 pr-4">January 15, 2027</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">
            Note the uneven quarters — Q1 is 3 months, Q2 is 2 months, Q3 is 3 months, Q4 is 4
            months. The IRS calls them &quot;quarters&quot; but they don&apos;t map to calendar
            quarters. If a deadline falls on a weekend or holiday, it shifts to the next business
            day.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who actually has to pay</h2>

          <p>
            The trigger is simple: <strong>you owe at least $1,000 in federal tax at filing time,
            after withholding and refundable credits</strong>. The IRS doesn&apos;t care where the
            untaxed income comes from. Common cases:
          </p>

          <ul>
            <li><strong>Freelancers, contractors, gig workers.</strong> No employer withholding. Owe both income tax AND 15.3% self-employment tax on net earnings.</li>
            <li><strong>S-corp owners taking distributions.</strong> Reasonable salary is on W-2 with withholding; pass-through distributions are not withheld.</li>
            <li><strong>Landlords with positive net rental income.</strong> No withholding on rent receipts.</li>
            <li><strong>Investors realizing large capital gains.</strong> Brokerages don&apos;t withhold on stock sale gains.</li>
            <li><strong>Retirees pulling from IRAs without enough withholding.</strong> You can elect withholding from IRA distributions, but many people don&apos;t.</li>
            <li><strong>Anyone with a big bonus or RSU vest at year-end.</strong> Federal supplemental withholding is 22% — likely under-withholds if you&apos;re in the 32% bracket.</li>
          </ul>

          <p>
            If you got a big tax bill last April for the first time, you probably crossed this
            threshold. Set up quarterlies for the current year before Q1 closes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two safe harbors</h2>

          <p>
            The IRS will not assess an underpayment penalty if you meet either of these
            thresholds:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Safe harbor</th>
                  <th className="py-3 pr-4">Requirement</th>
                  <th className="py-3 pr-4">When to use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Prior year</td><td className="py-3 pr-4">100% of last year&apos;s total tax (110% if last year&apos;s AGI &gt; $150K, $75K if MFS)</td><td className="py-3 pr-4">Default — income is volatile or hard to forecast</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Current year</td><td className="py-3 pr-4">90% of THIS year&apos;s actual tax</td><td className="py-3 pr-4">Income is lower than last year and you can forecast accurately</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The prior-year safe harbor is the workhorse.</strong> Pull last year&apos;s
            Form 1040 line 24 (total tax). Multiply by 1.0 (or 1.1 if AGI &gt; $150K). Divide by 4.
            That&apos;s your minimum per-quarter payment. Pay this amount and the underpayment
            penalty is mathematically impossible — even if you have a $200,000 capital gain in
            November.
          </p>

          <p>
            <strong>The current-year safe harbor is for income drops.</strong> If your
            self-employment income is down 30% this year, paying 110% of last year&apos;s tax
            would over-pay. Project actual 2026 tax, pay 22.5% of it per quarter.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The W-2 withholding workaround</h2>

          <p>
            If you have a W-2 day job alongside the untaxed income, <strong>the simplest play is
            often to bump up withholding from the W-2 instead of making quarterly payments at
            all</strong>.
          </p>

          <p>
            Why this works: the IRS treats W-2 withholding as paid evenly throughout the year,
            even if 80% of it actually happened in December. So if you increase your W-4
            withholding mid-year to cover the side-hustle shortfall, you&apos;re effectively
            current as of Q1 — no underpayment penalty.
          </p>

          <p>
            Submit a new <strong>Form W-4</strong> to your employer with a specific dollar amount
            on line 4(c) &quot;Extra withholding.&quot; Calculate it as: projected annual
            shortfall ÷ number of remaining pay periods. Update mid-year if income changes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The four ways to pay</h2>

          <ul>
            <li><strong>IRS Direct Pay — free, fastest.</strong> Go to <em>irs.gov/payments</em>, link your bank account, pick &quot;Estimated Tax&quot; and the tax year. Three minutes. Get a confirmation number. No login required (you verify identity each time).</li>
            <li><strong>EFTPS — for businesses, requires enrollment.</strong> The Electronic Federal Tax Payment System. Mandatory for some entity types. Takes ~10 days to enroll the first time.</li>
            <li><strong>Credit/debit card via approved processor.</strong> ~1.85% fee. Worth it only if you&apos;re hitting a credit card signup bonus — never as a routine method.</li>
            <li><strong>Check + Form 1040-ES voucher.</strong> Paper. Your tax software prints these when you file the prior year&apos;s return. Mail by the deadline; postmark counts.</li>
          </ul>

          <p>
            Most freelancers use IRS Direct Pay quarterly and never touch the others.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>State estimated taxes</h2>

          <p>
            Most states with an income tax have parallel quarterly estimated payment requirements,
            on similar (but not always identical) schedules and with their own safe-harbor rules.
            California, New York, and most others publish forms equivalent to the federal 1040-ES.
          </p>

          <p>
            <strong>Don&apos;t forget these.</strong> A federal-only quarterly plan often produces
            a surprise state bill in April with its own penalty. Most state tax software (and
            TurboTax / FreeTaxUSA at filing time) generates state vouchers alongside the federal
            ones.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>A worked example</h2>

          <p>
            Sarah, freelance designer. 2025 tax return showed: total tax (line 24) = $18,000. AGI =
            $95,000. No W-2 income in 2026.
          </p>

          <ul>
            <li><strong>Safe-harbor target:</strong> 100% of $18,000 = $18,000 (AGI under $150K, no bump).</li>
            <li><strong>Per quarter:</strong> $18,000 ÷ 4 = $4,500.</li>
            <li><strong>What she pays:</strong> $4,500 by April 15, June 15, September 15, January 15 — via IRS Direct Pay.</li>
            <li><strong>Outcome:</strong> Even if her 2026 tax turns out to be $25,000 (she had a great year), she owes the $7,000 difference at filing but ZERO underpayment penalty.</li>
            <li><strong>Outcome if she pays nothing quarterly:</strong> ~$1,000+ in penalty + interest on top of the $25K tax bill.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <p>
            <strong>Mistake 1: Treating quarters as calendar quarters.</strong> Q2 is due June 15,
            not June 30. Q4 is due January 15, not December 31.
          </p>

          <p>
            <strong>Mistake 2: Forgetting self-employment tax.</strong> Freelancers owe 15.3% SE
            tax on net earnings on top of income tax. Estimated payments must cover both, or the
            shortfall produces a penalty.
          </p>

          <p>
            <strong>Mistake 3: Skipping Q1 to &quot;see how the year goes.&quot;</strong> The IRS
            computes underpayment penalty per quarter. Skipping Q1 and overpaying Q4 doesn&apos;t
            cure the missed Q1 — the penalty accrues from April 15 to whenever you pay.
          </p>

          <p>
            <strong>Mistake 4: Ignoring state quarterlies.</strong> State penalties run in
            parallel.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Tax software that handles this</h2>

          <p>
            When you file last year&apos;s return, most tax software auto-generates the four
            quarterly vouchers for the current year — based on the prior-year safe harbor.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="turbotax" source={slug}>TurboTax →</AffiliateButton>
            <AffiliateButton partner="freetaxusa" source={slug} variant="secondary">FreeTaxUSA →</AffiliateButton>
            <AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct →</AffiliateButton>
          </div>

          <p>
            FreeTaxUSA is the cheapest reasonable option — federal is free, state is $14.99, and
            the quarterly voucher generation is included. See{" "}
            <Link href="/learn/best-tax-software-2026">best tax software 2026</Link> for the full
            comparison.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to park the money</h2>

          <p>
            Estimated tax money is going to the IRS in 3, 6, 9 months. Park it somewhere it earns
            interest — a high-yield savings account, not a checking account.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="sofi-money" source={slug}>SoFi HYSA →</AffiliateButton>
            <AffiliateButton partner="marcus" source={slug} variant="secondary">Marcus →</AffiliateButton>
            <AffiliateButton partner="ally" source={slug} variant="secondary">Ally →</AffiliateButton>
          </div>

          <p>
            Even at 4% APY, the interest on a $4,500 quarterly stash earns about $30 over the
            wait period — small but real, and a habit that compounds over a career. See{" "}
            <Link href="/learn/best-hysa-2026">best HYSAs 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Use the prior-year safe harbor.</strong> Pull last year&apos;s total tax line,
            multiply by 1.0 (or 1.1 if AGI &gt; $150K), divide by 4, and pay that amount every
            quarter via IRS Direct Pay. Set calendar reminders for April 15, June 15, September 15,
            January 15. The underpayment penalty becomes mathematically impossible.
          </p>

          <p>
            <strong>Or just bump W-2 withholding</strong> if you have a day job alongside the
            untaxed income — it&apos;s the lower-friction path.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/tax-brackets-2026">2026 federal tax brackets</Link> — the rates that drive your estimate.</li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link> — for generating the voucher and filing.</li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link> — the 2026 deduction figures.</li>
            <li><Link href="/learn/when-to-hire-a-cpa">When to hire a CPA</Link> — when the quarterly math gets messy enough to outsource.</li>
            <li><Link href="/learn/tax-deductions-checklist">Tax deductions checklist</Link> — make sure you&apos;re not over-estimating.</li>
            <li><Link href="/learn/best-hysa-2026">Best HYSAs 2026</Link> — where to park the estimated tax cash between quarters.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug={slug} />
      </article>
    </>
  );
}
