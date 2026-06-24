import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "side-hustle-taxes";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Side hustle taxes 2026: what you owe, what you can deduct, and how to pay";
const description =
  "Earned over $400 from freelancing, Etsy, Uber, or any gig in 2026? You owe self-employment tax plus income tax — but you can deduct a long list of business expenses. Here's exactly what you owe, what to track, and when to pay quarterly estimates.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I have to report side hustle income if I didn't get a 1099?",
    a: "Yes. All self-employment income is taxable regardless of whether you received a 1099-NEC or 1099-K. The $400 net earnings threshold only determines whether you owe self-employment tax — income tax applies even on smaller amounts. Platforms are required to issue 1099-K at $5,000+ in 2026, but you must report all income no matter what.",
  },
  {
    q: "What is self-employment tax and how much is it?",
    a: "Self-employment (SE) tax is 15.3% on your first $176,100 of net self-employment income in 2026 (12.4% Social Security + 2.9% Medicare). Above that, Medicare continues at 2.9%. As a W-2 employee your employer pays half; as a sole proprietor you pay both halves. You can deduct the employer-equivalent half (7.65%) from your gross income on Schedule 1.",
  },
  {
    q: "How do I pay taxes on a side hustle during the year?",
    a: "Through quarterly estimated tax payments using IRS Form 1040-ES. Due dates in 2026: April 15 (Q1), June 16 (Q2), September 15 (Q3), January 15, 2027 (Q4). To avoid an underpayment penalty, pay at least 90% of your 2026 tax liability or 100% of your 2025 liability (110% if your 2025 AGI exceeded $150,000).",
  },
  {
    q: "Can I deduct my home office for a side hustle?",
    a: "Yes, if you use part of your home regularly and exclusively for your side hustle. Use the simplified method ($5 per sq ft, max 300 sq ft = $1,500 deduction) or the regular method (actual home expenses × business-use percentage). You can't deduct more than your net profit from the business.",
  },
  {
    q: "What expenses can I deduct from side hustle income?",
    a: "Ordinary and necessary business expenses: software subscriptions, equipment (phone, laptop — business-use portion), supplies, advertising, platform fees (Etsy, Fiverr, Upwork), professional services (accountant, legal), business mileage at $0.70/mile (2026 rate), home office, and half of your self-employment tax. Keep receipts for everything.",
  },
  {
    q: "Should I form an LLC for my side hustle?",
    a: "An LLC provides liability protection but doesn't change your federal tax treatment by default — a single-member LLC is taxed identically to a sole proprietor (Schedule C). The tax benefit comes if you elect S-corp status and pay yourself a reasonable salary, which can reduce SE tax once net profit exceeds roughly $40,000–$50,000. At lower income levels, the S-corp filing costs ($500–$2,000/yr) typically exceed the savings.",
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
          name: "How to file taxes on side hustle income",
          steps: [
            { name: "Track all income", text: "Record every payment received — PayPal, Venmo, checks, cash — in a spreadsheet or accounting app throughout the year. Don't rely on 1099s alone." },
            { name: "Track deductible expenses", text: "Keep receipts for all business expenses: equipment, software, supplies, mileage, advertising, platform fees, and your home office if applicable." },
            { name: "Calculate quarterly estimates", text: "Each quarter, estimate your net profit (income minus expenses), multiply by your combined income + SE tax rate, and pay via IRS Direct Pay or Form 1040-ES by the due date." },
            { name: "File Schedule C", text: "At tax time, report your net self-employment income on Schedule C (Form 1040). Your net profit flows to Schedule SE to calculate self-employment tax." },
            { name: "Deduct half of SE tax", text: "Deduct the employer-equivalent half of your SE tax (7.65% of net self-employment income) as an above-the-line deduction on Schedule 1, Line 15." },
            { name: "Consider a SEP IRA or Solo 401(k)", text: "If profitable, contribute up to 25% of net self-employment income to a SEP IRA (2026 limit: $70,000) or up to $24,500 elective + 25% employer to a Solo 401(k). Both reduce your taxable income dollar-for-dollar." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Gig income, freelance income, and side-business income all get taxed the same way — and you can reduce what you owe more than most people realize."
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
            <strong>Earn more than $400 net from any side hustle and the IRS expects two things:</strong> income tax (same as always) and self-employment tax — the 15.3% Social Security and Medicare contribution that your W-2 employer normally splits with you. But the self-employed also get a deduction list most W-2 workers never see.
          </p>

          <p>
            This guide covers exactly what you owe, what you can legally deduct, how to pay during the year so you don&apos;t get hit with a penalty, and which tax software handles Schedule C best.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two taxes on side hustle income</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Tax</th>
                  <th className="py-3 pr-4">Rate</th>
                  <th className="py-3 pr-4">On what</th>
                  <th className="py-3 pr-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Income tax</td>
                  <td className="py-3 pr-4">10%–37%</td>
                  <td className="py-3 pr-4">Net profit (Schedule C)</td>
                  <td className="py-3 pr-4">Stacks on top of W-2 income</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">SE tax (SS + Medicare)</td>
                  <td className="py-3 pr-4">15.3%</td>
                  <td className="py-3 pr-4">92.35% of net profit</td>
                  <td className="py-3 pr-4">Kicks in above $400 net profit; deduct half above the line</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            On <strong>$10,000 of net freelance profit</strong>, a single filer in the 22% bracket owes roughly: SE tax of <strong>$1,413</strong> (15.3% × $9,235) plus income tax of <strong>~$1,888</strong> (22% on the net after deducting half of SE tax) = <strong>~$3,300 total</strong>. Set aside <strong>25–30%</strong> of every side hustle payment to cover both.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Everything you can deduct</h2>

          <p>
            The IRS allows deductions for expenses that are <strong>ordinary</strong> (common in your type of business) and <strong>necessary</strong> (helpful for producing income). You don&apos;t need to incorporate — sole proprietors report on Schedule C and deduct the same categories.
          </p>

          <ul>
            <li><strong>Home office.</strong> Simplified: $5/sq ft × dedicated sq ft (max $1,500). Regular: actual home costs × business %. Space must be used regularly and exclusively for business.</li>
            <li><strong>Equipment.</strong> Laptop, phone, camera — the business-use percentage. A $1,200 laptop used 60% for freelance = $720 deductible. Section 179 lets you deduct the full cost in year one.</li>
            <li><strong>Software &amp; subscriptions.</strong> Adobe Creative Cloud, Canva Pro, project-management tools, accounting software — 100% if used solely for the business.</li>
            <li><strong>Platform fees.</strong> Etsy listing fees, Fiverr service charges, Upwork connects, Uber's commission, Amazon selling fees — all deductible.</li>
            <li><strong>Advertising &amp; marketing.</strong> Meta Ads, Google Ads, sponsored posts, business cards, website hosting, domain name.</li>
            <li><strong>Business mileage.</strong> <strong>$0.70/mile</strong> (2026 IRS standard rate) for business trips — client meetings, supply runs, events. Not commuting.</li>
            <li><strong>Professional development.</strong> Courses, books, and conferences directly related to your side hustle skill set.</li>
            <li><strong>Professional services.</strong> Accountant fees for preparing Schedule C, legal fees for contracts.</li>
            <li><strong>Health insurance premiums.</strong> If you&apos;re not eligible for coverage through a W-2 employer, you can deduct 100% of self-employed health insurance premiums above the line.</li>
            <li><strong>Half of SE tax.</strong> IRS automatically lets you deduct 7.65% of net self-employment income (the employer-equivalent half) on Schedule 1.</li>
            <li><strong>Retirement contributions.</strong> SEP IRA: up to 25% of net self-employment income (max $70,000 in 2026). Solo 401(k): $24,500 elective deferral + up to 25% employer contribution. Both reduce taxable income dollar-for-dollar.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Quarterly estimated payments</h2>

          <p>
            W-2 employers withhold taxes from each paycheck. Nobody withholds from your Etsy sales. The IRS expects you to pay as you earn via quarterly estimates — or face an underpayment penalty (currently ~8% annualized on the shortage).
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Quarter</th>
                  <th className="py-3 pr-4">Income covers</th>
                  <th className="py-3 pr-4">2026 due date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Q1</td><td className="py-3 pr-4">Jan 1 – Mar 31</td><td className="py-3 pr-4">April 15, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q2</td><td className="py-3 pr-4">Apr 1 – May 31</td><td className="py-3 pr-4">June 16, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q3</td><td className="py-3 pr-4">Jun 1 – Aug 31</td><td className="py-3 pr-4">September 15, 2026</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Q4</td><td className="py-3 pr-4">Sep 1 – Dec 31</td><td className="py-3 pr-4">January 15, 2027</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Safe harbor rule:</strong> pay at least 100% of your prior-year tax liability (110% if 2025 AGI exceeded $150,000) across the four quarters and you&apos;re penalty-free regardless of what you actually owe in April. Pay via <strong>IRS Direct Pay</strong> (free, bank transfer) or EFTPS.
          </p>

          <p>
            See the full deadline breakdown in our <Link href="/learn/quarterly-estimated-taxes-guide">quarterly estimated taxes guide</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The retirement contribution hack</h2>

          <p>
            Self-employed retirement accounts are the most powerful deduction available. A freelancer with <strong>$50,000 in net profit</strong> can contribute up to <strong>$12,500 to a SEP IRA</strong> (25% of net), reducing taxable income to $37,500 before any other deductions. At a 22% marginal rate that&apos;s a <strong>$2,750 immediate tax saving</strong> — and the money compounds tax-deferred.
          </p>

          <p>
            A Solo 401(k) is even better above $24,500 of desired contributions: you get an elective deferral slot ($24,500) plus an employer contribution slot (25% of net), giving the highest possible contribution for a given income. Read the full comparison in <Link href="/learn/solo-401k-vs-sep-ira">Solo 401(k) vs. SEP IRA</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Which tax software handles Schedule C best</h2>

          <p>
            Not all software is equal for self-employment. The key features to look for: Schedule C walkthrough, mileage log import, and home office calculation.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Software</th>
                  <th className="py-3 pr-4">Self-employed tier cost</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">TurboTax Self-Employed</td><td className="py-3 pr-4">~$129 + $59/state</td><td className="py-3 pr-4">Guided experience, expense finder, Quickbooks sync</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">TaxAct Self-Employed</td><td className="py-3 pr-4">~$64.95 + $44.95/state</td><td className="py-3 pr-4">Budget pick with full Schedule C support</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">FreeTaxUSA</td><td className="py-3 pr-4">$0 federal + $14.99/state</td><td className="py-3 pr-4">Best value — full Schedule C at no federal cost</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            For most solo freelancers with straightforward expenses, <strong>FreeTaxUSA handles Schedule C completely free at the federal level</strong>. TurboTax&apos;s expense-finder interview is worth the premium if your books are messy and you want guided deduction discovery.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="freetaxusa" source={slug}>File free with FreeTaxUSA →</AffiliateButton>
            <AffiliateButton partner="turbotax" source={slug} variant="secondary">TurboTax Self-Employed →</AffiliateButton>
            <AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct Self-Employed →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <p>
            <strong>Mistake 1: Not separating business and personal finances.</strong> Open a free business checking account and run all side hustle income and expenses through it. Makes deductions easy to prove and reduces audit risk.
          </p>

          <p>
            <strong>Mistake 2: Forgetting state income tax.</strong> Most states tax self-employment income the same as wages. Your quarterly estimate should include both federal and state.
          </p>

          <p>
            <strong>Mistake 3: Skipping the home office deduction out of fear.</strong> The home office deduction isn&apos;t a red flag if you legitimately use the space exclusively for business. The simplified method ($5/sq ft) is straightforward and defensible.
          </p>

          <p>
            <strong>Mistake 4: Not making quarterly payments and being surprised by a penalty in April.</strong> Even if you can&apos;t pay the full estimate, pay something — the penalty is calculated on the shortage, not all-or-nothing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Set aside 25–30% of every side hustle payment, track every business expense from day one, and pay quarterly estimates.</strong> Use a Solo 401(k) or SEP IRA to pull the biggest lever on your taxable income. FreeTaxUSA handles the return free; TurboTax is worth it if you want hand-holding through Schedule C.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/quarterly-estimated-taxes-guide">Quarterly estimated taxes 2026</Link> — deadlines, safe harbors, and how to pay.</li>
            <li><Link href="/learn/solo-401k-vs-sep-ira">Solo 401(k) vs. SEP IRA</Link> — which retirement account saves you more tax.</li>
            <li><Link href="/learn/tax-deductions-checklist">Tax deductions checklist</Link> — the full list of above-the-line deductions.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — find your marginal rate.</li>
            <li><Link href="/learn/w4-withholding-guide">W-4 withholding guide</Link> — if you also have a W-2 job, adjust withholding to cover the side hustle gap.</li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link> — full comparison of every option.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug={slug} />
      </article>
    </>
  );
}
