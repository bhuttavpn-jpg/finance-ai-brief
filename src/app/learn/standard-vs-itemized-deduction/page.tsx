import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "standard-vs-itemized-deduction";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Standard vs. itemized deduction: Which should you take?";
const description =
  "The 2026 standard deduction is $16,100 single / $32,200 married filing jointly per IRS Rev. Proc. 2025-32. About 90% of filers take it — itemizing only beats it if your mortgage interest, SALT, and charitable giving exceed those numbers. Here's the math and the moves to make itemizing actually pay off.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the standard deduction for 2026?",
    a: "Per IRS Rev. Proc. 2025-32 (IR-2025-103, Oct 9, 2025): $16,100 single, $32,200 married filing jointly, $16,100 married filing separately, $24,150 head of household. Additional amounts for taxpayers 65+ or blind: $1,650 for MFJ/MFS/QSS, $2,050 for single/HoH.",
  },
  {
    q: "Should I take the standard deduction or itemize?",
    a: "Take whichever is larger. For most filers in 2026, it's the standard — the post-TCJA standard amounts are so high that only homeowners with large mortgages, taxpayers in high-SALT states, or heavy charitable givers usually clear the threshold. Roughly 90% of returns take the standard.",
  },
  {
    q: "What can I itemize?",
    a: "Mortgage interest (up to $750K of principal for mortgages originated after Dec 15, 2017), state and local taxes (capped at $10,000 — the SALT cap), charitable contributions, medical expenses above 7.5% of AGI, and a few smaller categories. The SALT cap is the constraint that pushes most would-be itemizers under the standard.",
  },
  {
    q: "Can I switch between standard and itemized each year?",
    a: "Yes — every year is independent. Many high-charitable-giver households use a 'bunching' strategy: itemize in alternate years by lumping two years of donations into one (often through a donor-advised fund), and take the standard in the off years.",
  },
  {
    q: "Does the SALT cap of $10,000 apply to married filing separately too?",
    a: "Yes, and harshly — MFS spouses share the $10,000 cap as if they were one filer ($5,000 each). That's a strong argument against MFS for couples in high-tax states with large property tax bills.",
  },
  {
    q: "Does tax software figure this out automatically?",
    a: "Yes — every major tax software (TurboTax, TaxAct, FreeTaxUSA, H&R Block) calculates both and picks the larger. You don't need to choose manually. But entering your itemizable expenses still matters — if you don't enter them, the software has nothing to compare against the standard.",
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
          subtitle="In 2026, the standard deduction is $16,100 / $32,200 — about 90% of filers take it. Itemizing only beats it for homeowners and heavy charitable givers."
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
            <strong>The choice is simple: take whichever deduction — standard or itemized — is
            larger.</strong> The Tax Cuts and Jobs Act roughly doubled the standard deduction
            starting in 2018, which is why only ~10% of filers itemize today. For 2026, you need
            itemizable deductions above <strong>$16,100 (single)</strong> or{" "}
            <strong>$32,200 (married filing jointly)</strong> for itemizing to pay off.
          </p>

          <p>
            This guide covers the 2026 numbers (per IRS Rev. Proc. 2025-32), what counts as
            itemizable, and the planning moves that make itemizing worth it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 standard deduction amounts</h2>

          <p>
            Source: IR-2025-103, Rev. Proc. 2025-32 (October 9, 2025).
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
            <strong>Additional amounts</strong> for taxpayers 65+ or blind: $1,650 (MFJ/MFS/QSS) or
            $2,050 (single/HoH) per qualifying condition.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What counts as itemizable</h2>

          <p>
            The main categories that go on Schedule A:
          </p>

          <ul>
            <li><strong>State and local taxes (SALT)</strong> — state + local income tax (or sales tax) + property tax, <strong>capped at $10,000 combined</strong> (or $5,000 MFS). This cap is the single biggest constraint on itemizing.</li>
            <li><strong>Home mortgage interest</strong> — on up to $750,000 of mortgage principal for loans originated after Dec 15, 2017 ($1M cap for pre-2018 loans, grandfathered).</li>
            <li><strong>Charitable contributions</strong> — generally up to 60% of AGI for cash gifts to qualified 501(c)(3) charities; lower limits for appreciated stock or to certain organizations.</li>
            <li><strong>Medical and dental expenses</strong> — only the portion above 7.5% of AGI. So at $100K AGI, only medical costs above $7,500 count.</li>
            <li><strong>Casualty and theft losses</strong> — only in federally declared disaster areas.</li>
          </ul>

          <p>
            Notable items <strong>NOT</strong> deductible since TCJA (still suspended through tax
            year 2025 and likely into 2026 unless Congress extends): unreimbursed employee
            expenses, tax prep fees, investment advisory fees, and other "miscellaneous itemized
            deductions subject to 2% AGI floor."
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math — when itemizing wins</h2>

          <p><strong>Example 1: Single renter in low-tax state</strong></p>

          <ul>
            <li>State income tax: $4,000</li>
            <li>Property tax: $0 (renter)</li>
            <li>Mortgage interest: $0</li>
            <li>Charitable: $1,500</li>
            <li><strong>Total itemizable: $5,500 — far below the $16,100 standard.</strong> Take standard.</li>
          </ul>

          <p><strong>Example 2: Married couple, homeowner, high-tax state</strong></p>

          <ul>
            <li>State income tax: $12,000 → capped to $10,000 SALT (combined with property tax)</li>
            <li>Property tax: $8,000 → already at SALT cap, no incremental benefit</li>
            <li>Mortgage interest on $500K @ 6.5%: ~$31,000 year 1</li>
            <li>Charitable: $4,000</li>
            <li><strong>Total itemizable: ~$45,000 — clearly beats $32,200 MFJ standard.</strong> Itemize.</li>
          </ul>

          <p><strong>Example 3: Married couple, paid-off home, low charitable</strong></p>

          <ul>
            <li>State + property tax (SALT): $10,000 (capped)</li>
            <li>Mortgage interest: $0 (paid off)</li>
            <li>Charitable: $3,000</li>
            <li><strong>Total itemizable: $13,000 — below $32,200 MFJ standard.</strong> Take standard.</li>
          </ul>

          <p>
            <strong>Pattern:</strong> the mortgage interest deduction is the engine. Without a
            mortgage of meaningful size, itemizing rarely wins.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The "bunching" strategy</h2>

          <p>
            <strong>If you're consistently just under the standard deduction, you can alternate
            years to capture itemizing benefits.</strong>
          </p>

          <p>
            Example: a MFJ couple with $25K itemizable in a typical year. They're below the $32,200
            standard so take it — $0 incremental benefit from itemizing. Instead, they lump 2 years
            of charitable giving into one year:
          </p>

          <ul>
            <li><strong>Year 1 (bunch):</strong> $25K base + $10K extra charitable = $35K itemizable. Itemize — beat standard by $2,800.</li>
            <li><strong>Year 2 (off):</strong> $15K itemizable (no charitable). Take standard.</li>
          </ul>

          <p>
            <strong>Total benefit over 2 years vs. taking standard every year: $2,800</strong> — at
            the 24% bracket, ~$670 in tax savings. The trick: time the giving without changing the
            total amount given over the long run.
          </p>

          <p>
            A <strong>donor-advised fund (DAF)</strong> is the tool that makes bunching practical —
            you take the full deduction in the bunch year but distribute the money to charities over
            future years. Schwab Charitable, Fidelity Charitable, and Vanguard Charitable are the
            three biggest providers.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Charitable giving — the appreciated stock move</h2>

          <p>
            <strong>If you're itemizing and donating, donate appreciated stock instead of
            cash.</strong> Two benefits:
          </p>

          <ol>
            <li>You deduct the full market value (subject to 30% AGI limit for stock to public charities).</li>
            <li>You avoid paying capital gains tax on the appreciation.</li>
          </ol>

          <p>
            On $10K of stock you paid $2K for: cash donation = $10K deduction. Stock donation = $10K
            deduction + dodge ~$1,200 in long-term capital gains tax. <strong>$1,200 extra savings
            for the same out-of-pocket cost.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Medical expenses — the high bar</h2>

          <p>
            <strong>Only medical expenses above 7.5% of AGI count.</strong> At $80K AGI, the first
            $6,000 of medical is in the deductible-floor and only spending above that counts.
          </p>

          <p>
            For most filers this rarely matters. It becomes meaningful for major procedures, fertility
            treatment, long-term care, or high-deductible plans with chronic conditions. If you had a
            major medical year, check whether totaling the bills, mileage to appointments, and
            in-network out-of-pocket costs crosses the 7.5% floor.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Tax software handles the choice automatically</h2>

          <p>
            <strong>Every major tax software runs both calculations and picks the larger.</strong>{" "}
            You just need to enter the data. The savings from picking the right deduction are real
            — but the software does the picking, not you.
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
            Deeper comparison in our <Link href="/learn/best-tax-software-2026">best tax software 2026</Link>{" "}
            roundup.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Skipping itemization data entry because you "won't itemize anyway."</strong> The software can't pick the larger if you don't enter the data.</li>
            <li><strong>Forgetting the $10K SALT cap.</strong> No matter how much state income tax + property tax you paid, only $10K counts. Donating more to charity is the realistic way to push above the standard once SALT is capped.</li>
            <li><strong>Not bunching charitable giving</strong> when you're consistently just under the standard.</li>
            <li><strong>Donating cash instead of appreciated stock</strong> from a taxable brokerage.</li>
            <li><strong>Choosing MFS in high-tax states</strong> without realizing the SALT cap is $5K each, not $10K each.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For 90% of filers, the standard deduction wins.</strong> Itemize only if you
            have a substantial mortgage, live in a high-tax state, or give significantly to charity
            — and even then, the SALT cap is the active constraint.
          </p>

          <p>
            <strong>The strategy: enter all your itemizable data anyway</strong> (the software picks
            for you), and consider charitable-giving bunching every 2–3 years if your itemizable
            total runs consistently within $5K of the standard.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to park what you save</h2>

          <p>
            <strong>A higher deduction means a bigger refund or a smaller bill —
            either way, that cash needs a home.</strong> A{" "}
            <Link href="/learn/best-hysa-2026">high-yield savings account</Link>{" "}
            pays meaningful APY while you decide whether it goes to an emergency
            fund, IRA contribution, or HSA top-up.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open SoFi Money →
            </AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/tax-brackets-2026">2026 federal income tax brackets</Link></li>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link></li>
            <li><Link href="/learn/how-to-file-taxes-for-free">How to file taxes for free</Link></li>
            <li><Link href="/learn/capital-gains-tax-2026">Capital gains tax 2026</Link></li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting guide</Link></li>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
