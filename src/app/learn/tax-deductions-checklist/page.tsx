import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "tax-deductions-checklist";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "2026 tax deductions checklist: 30+ commonly missed items";
const description =
  "Above-the-line, itemized, and credit categories — the full checklist of what to gather before filing. Includes 2026-specific numbers (HSA $4,400, 401(k) $24,500, standard deduction $16,100/$32,200) and the items most filers miss.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the difference between a deduction and a credit?",
    a: "A deduction reduces your taxable income before the rate is applied. A $1,000 deduction in the 22% bracket saves you $220. A credit reduces your tax bill directly — a $1,000 credit saves $1,000. Credits are almost always more valuable than equivalent-dollar deductions.",
  },
  {
    q: "What's the difference between above-the-line and itemized deductions?",
    a: "Above-the-line deductions reduce your adjusted gross income (AGI) and can be claimed whether you itemize or take the standard deduction. Itemized deductions only apply if you forgo the standard deduction. The 2026 standard deduction is $16,100 single / $32,200 MFJ, so most filers benefit more from above-the-line deductions and the standard.",
  },
  {
    q: "Do I need to itemize to get the HSA deduction?",
    a: "No — HSA contributions are above-the-line. You get the deduction even if you take the standard. Same for traditional IRA contributions, student loan interest, and self-employment retirement contributions. This is why HSA/IRA contributions are so powerful.",
  },
  {
    q: "What's the biggest commonly missed deduction?",
    a: "Two compete for the top spot. (1) For employees, the HSA contribution if you have an HDHP — most people contribute via payroll but some miss the after-the-fact contribution path. (2) For freelancers and gig workers, the self-employment health insurance deduction and the QBI (Qualified Business Income) deduction.",
  },
  {
    q: "Does the standard deduction include the personal exemption?",
    a: "Yes — the TCJA eliminated personal exemptions in exchange for the much larger standard deduction. The combined effect is roughly neutral for single filers but meaningfully more generous for larger families.",
  },
  {
    q: "Should I track deductions year-round or only at tax time?",
    a: "Year-round, ideally in a single folder or app. Saving receipts and statements as they come in takes 10 minutes a month and catches items you'd otherwise forget. Charitable receipts, medical bills, and unreimbursed business expenses are the top categories that go missing if not tracked in real time.",
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
          subtitle="The complete checklist — above-the-line deductions, itemized categories, credits, and the items most filers miss. With 2026 numbers."
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
            <strong>Most filers miss money on their return — not because the deduction was hidden,
            but because they didn't gather the data before filing.</strong> This is the complete
            2026 checklist, organized by what reduces AGI (above-the-line), what reduces taxable
            income (itemized), and what reduces tax directly (credits).
          </p>

          <p>
            Print it, save the PDF, or just use it as a pre-filing audit. Most filers find 1–3 items
            they'd have missed.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Above-the-line deductions (reduce AGI)</h2>

          <p>
            <strong>These apply whether you itemize or take the standard deduction.</strong> They
            also lower AGI, which can unlock other AGI-based benefits (Roth IRA contribution
            eligibility, IRA deduction phaseout, etc.).
          </p>

          <ul>
            <li><strong>Traditional IRA contributions</strong> — up to $7,500 / $8,600 if 50+ (per IR-2025-111). Subject to income limits if covered by workplace plan.</li>
            <li><strong>HSA contributions</strong> — up to $4,400 self / $8,750 family / + $1,000 catch-up 55+ (per Rev. Proc. 2025-19). Requires HDHP coverage.</li>
            <li><strong>Self-employment SEP-IRA / Solo 401(k) contributions</strong> — up to ~25% of net SE income.</li>
            <li><strong>Student loan interest</strong> — up to $2,500/year. Subject to income phaseout.</li>
            <li><strong>Educator expenses</strong> — K–12 teachers, up to $300 of out-of-pocket classroom expenses.</li>
            <li><strong>Self-employment tax (half of)</strong> — automatic for 1099 / Schedule C filers.</li>
            <li><strong>Self-employed health insurance premiums</strong> — full cost of health, dental, qualifying LTC premiums.</li>
            <li><strong>Alimony paid</strong> — for divorces finalized before 2019 only (post-2018 alimony is not deductible).</li>
            <li><strong>Moving expenses</strong> — only for active-duty military.</li>
            <li><strong>Early withdrawal penalty on CDs</strong> — small but commonly missed.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Itemized deductions (use only if total exceeds $16,100 single / $32,200 MFJ)</h2>

          <p>
            Per IR-2025-103 / Rev. Proc. 2025-32, the 2026 standard deduction is $16,100 single /
            $32,200 MFJ / $24,150 head of household. Only itemize if these total more.
          </p>

          <ul>
            <li><strong>State and local taxes (SALT)</strong> — state income tax (or sales tax), local taxes, property tax. <strong>Capped at $10,000 combined</strong> ($5,000 MFS).</li>
            <li><strong>Mortgage interest</strong> — on first $750K of principal for mortgages originated after Dec 15, 2017 ($1M for older loans).</li>
            <li><strong>Mortgage insurance premiums (PMI)</strong> — for certain income brackets, check the year's rules.</li>
            <li><strong>Charitable contributions to qualified 501(c)(3)s</strong> — cash up to 60% of AGI; appreciated stock up to 30%.</li>
            <li><strong>Out-of-pocket charitable expenses</strong> — mileage at $0.14/mile, supplies for nonprofit work.</li>
            <li><strong>Medical and dental expenses</strong> — only the portion above 7.5% of AGI counts.</li>
            <li><strong>Casualty and theft losses</strong> — only in federally declared disaster areas.</li>
            <li><strong>Gambling losses</strong> — up to gambling winnings reported as income.</li>
            <li><strong>Investment interest expense</strong> — margin loan interest, up to net investment income.</li>
          </ul>

          <p>
            Deeper guide:{" "}
            <Link href="/learn/standard-vs-itemized-deduction">standard vs. itemized deduction</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Tax credits (reduce tax bill directly — most valuable)</h2>

          <h3>Family credits</h3>
          <ul>
            <li><strong>Child Tax Credit</strong> — up to $2,000 per qualifying child under 17. Partially refundable.</li>
            <li><strong>Credit for Other Dependents</strong> — $500 for dependents who don't qualify for CTC (older children, qualifying relatives).</li>
            <li><strong>Child and Dependent Care Credit</strong> — 20–35% of up to $3,000 of childcare expenses ($6,000 for 2+ kids).</li>
            <li><strong>Adoption Credit</strong> — up to ~$15,000+ of qualified adoption expenses (2026 figure verify at filing).</li>
          </ul>

          <h3>Education credits</h3>
          <ul>
            <li><strong>American Opportunity Credit</strong> — up to $2,500 per student per year for first 4 years of college. 40% refundable.</li>
            <li><strong>Lifetime Learning Credit</strong> — up to $2,000 per return for any post-secondary education.</li>
            <li><strong>529 plan contributions</strong> — federal deduction only for state-specific 529 plans (state tax deduction, not federal). Check your state.</li>
          </ul>

          <h3>Retirement credits</h3>
          <ul>
            <li><strong>Saver's Credit</strong> — up to $1,000 / $2,000 MFJ for retirement contributions if AGI under specific limits. Commonly missed by low-to-mid earners.</li>
          </ul>

          <h3>Energy and clean vehicle credits</h3>
          <ul>
            <li><strong>Residential Clean Energy Credit</strong> — 30% of qualifying solar, wind, geothermal, fuel cell, battery storage costs.</li>
            <li><strong>Energy Efficient Home Improvement Credit</strong> — up to $1,200/year ($2,000 for heat pumps) for qualifying insulation, windows, doors, HVAC.</li>
            <li><strong>Clean Vehicle Credit</strong> — up to $7,500 for qualifying new EVs ($4,000 for used). Income limits apply; check current rules.</li>
          </ul>

          <h3>Earned Income Tax Credit (EITC)</h3>
          <ul>
            <li><strong>EITC</strong> — refundable credit for low-to-moderate-income workers. Maximum varies by number of children. Frequently missed by filers using DIY software incorrectly.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Self-employment specific deductions</h2>

          <p>If you have ANY Schedule C income (freelance, gig, side hustle):</p>

          <ul>
            <li><strong>Home office</strong> — simplified method: $5/sq ft up to 300 sq ft ($1,500 max). Actual expense method: prorated mortgage interest, utilities, depreciation.</li>
            <li><strong>Business mileage</strong> — $0.70/mile in 2026 (verify at filing; IRS updates annually).</li>
            <li><strong>Internet and phone</strong> — business-use percentage.</li>
            <li><strong>Software and subscriptions</strong> — fully deductible.</li>
            <li><strong>Health insurance premiums</strong> (already noted above as above-the-line).</li>
            <li><strong>Equipment and computers</strong> — Section 179 expensing or depreciation.</li>
            <li><strong>Continuing education</strong> — courses, books, conferences relevant to your business.</li>
            <li><strong>Business meals</strong> — 50% deductible.</li>
            <li><strong>Qualified Business Income (QBI) deduction</strong> — up to 20% of qualified pass-through income. Major savings; phaseout for high earners.</li>
            <li><strong>Retirement: SEP-IRA or Solo 401(k)</strong> — much higher limits than personal IRA.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Commonly missed items</h2>

          <ol>
            <li><strong>HSA contributions made after year-end</strong> — you have until April 15 to contribute for the prior tax year. People assume the calendar year is the deadline.</li>
            <li><strong>Cash charitable donations under $250</strong> — receipts not required but deductions valid; many people don't claim small donations.</li>
            <li><strong>Property tax on a second home or land.</strong></li>
            <li><strong>Vehicle registration fees</strong> — in states where they're partly value-based.</li>
            <li><strong>Saver's Credit</strong> — surprisingly common miss for low-to-mid earners.</li>
            <li><strong>Moving for a new job (active-duty military only).</strong></li>
            <li><strong>Investment advisory fees inside a taxable account</strong> — currently suspended through 2025; check rules for 2026.</li>
            <li><strong>State sales tax</strong> (if no state income tax) — instead of state income tax under SALT.</li>
            <li><strong>Mileage to medical appointments</strong> — counts in medical expenses for itemizers above 7.5% AGI.</li>
            <li><strong>Job-search expenses</strong> for SE filers (Schedule C).</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>What to gather before filing</h2>

          <p><strong>Income documents:</strong></p>
          <ul>
            <li>W-2 from every employer</li>
            <li>1099-NEC, 1099-MISC, 1099-K (gig work)</li>
            <li>1099-INT, 1099-DIV, 1099-B (interest, dividends, brokerage)</li>
            <li>1099-R (IRA / 401(k) distributions)</li>
            <li>1099-G (unemployment, state tax refund)</li>
            <li>SSA-1099 (Social Security)</li>
            <li>K-1 (partnership / S-corp income)</li>
          </ul>

          <p><strong>Deduction / credit documents:</strong></p>
          <ul>
            <li>1098 (mortgage interest)</li>
            <li>1098-T (tuition)</li>
            <li>1098-E (student loan interest)</li>
            <li>HSA Form 5498-SA (contributions)</li>
            <li>Charitable donation receipts</li>
            <li>Property tax bills</li>
            <li>State estimated tax payments</li>
            <li>Daycare provider EIN + total paid</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Tax software handles most of this</h2>

          <p>
            <strong>Good tax software asks the right questions to surface missed deductions.</strong>{" "}
            The catch: it can only work with data you've entered. The checklist above is for the
            data-gathering phase. After that, let the software pick standard vs. itemized and run
            credit eligibility.
          </p>

          <p>
            <AffiliateButton partner="freetaxusa" source={slug}>
              File with FreeTaxUSA →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="turbotax" source={slug} variant="secondary">TurboTax</AffiliateButton>{" "}
            <AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct</AffiliateButton>
          </p>

          <p>
            Full comparison in our{" "}
            <Link href="/learn/best-tax-software-2026">best tax software 2026</Link> roundup.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The biggest tax savings come from above-the-line moves — HSA, traditional IRA,
            Solo 401(k), self-employed health insurance.</strong> These work whether you itemize or
            take the standard.
          </p>

          <p>
            For most W-2 employees, the standard deduction wins. For homeowners in high-tax states
            and heavy charitable givers, itemizing can be worth the effort. For self-employed
            filers, the QBI deduction alone often beats both.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to park what you save</h2>

          <p>
            <strong>The deductions are only half the equation — what you do with
            the saved tax is the other half.</strong> A{" "}
            <Link href="/learn/best-hysa-2026">high-yield savings account</Link>{" "}
            pays meaningful APY while you decide whether the savings go to an
            emergency fund, IRA contribution, or HSA top-up.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open SoFi Money →
            </AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link></li>
            <li><Link href="/learn/tax-brackets-2026">2026 federal income tax brackets</Link></li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link></li>
            <li><Link href="/learn/how-to-file-taxes-for-free">How to file taxes for free</Link></li>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link></li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link></li>
            <li><Link href="/learn/capital-gains-tax-2026">Capital gains tax 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
