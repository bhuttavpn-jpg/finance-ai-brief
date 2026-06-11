import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "fsa-explainer";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "FSA explained: How a Flexible Spending Account actually works";
const description =
  "A Healthcare FSA lets you spend pre-tax dollars on medical costs — a ~25–35% discount depending on your bracket. The catch: most of the money is use-it-or-lose-it by year-end. Here's how to size your contribution, what's eligible, and when an FSA beats an HSA.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "FSA vs. HSA — what's the real difference?",
    a: "An FSA is an employer-sponsored account tied to your job (you lose it if you leave). It's offered with any health plan. An HSA is owned by you (portable across jobs), requires a high-deductible health plan (HDHP), and rolls over indefinitely — it's effectively a retirement account that can pay for healthcare. If you qualify for an HSA, choose it; FSA is the fallback when you can't.",
  },
  {
    q: "What's the use-it-or-lose-it rule?",
    a: "Unspent FSA money at year-end is forfeited back to your employer. There are two possible softeners (employer chooses one, or neither): a grace period of up to 2.5 months into the next year, OR a carryover of up to $660 (2026 IRS figure, indexed annually). You CANNOT have both. If your employer offers nothing, plan dollar-amounts carefully.",
  },
  {
    q: "What can I spend FSA money on?",
    a: "Medical, dental, vision: copays, prescriptions, eyeglasses, contacts, dental cleanings, orthodontia, mental health visits. OTC medications (Tylenol, Advil, allergy pills) became eligible without a prescription as of 2020. Menstrual products are eligible. NOT eligible: cosmetic procedures, gym memberships (with rare medical-necessity exceptions), health insurance premiums.",
  },
  {
    q: "Can I have an FSA and an HSA at the same time?",
    a: "Generally no — a general-purpose FSA disqualifies you from making HSA contributions. The exception is a Limited-Purpose FSA (LPFSA), which only covers dental and vision; that one is HSA-compatible and a great combo if your employer offers both.",
  },
  {
    q: "What about a Dependent Care FSA?",
    a: "Separate account, separate rules. DCFSA covers daycare, after-school care, and summer day camp for kids under 13. 2026 cap is $5,000 per household (likely unchanged from 2025 unless Congress updates the long-frozen statutory limit). Saves you ~$1,500/year at the 30% marginal tax bracket. Use it if you have daycare costs.",
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
          subtitle="A Flexible Spending Account is the easiest tax break in employer benefits — but the use-it-or-lose-it rule punishes anyone who overfunds. Here's how to size it right."
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
            <strong>An FSA gives you a ~25–35% discount on healthcare spending</strong>, depending
            on your tax bracket. You contribute pre-tax dollars from your paycheck, then spend them
            on medical, dental, and vision expenses. The catch — and it's a real catch — is that
            most of the money is forfeited if you don't spend it by year-end.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How an FSA works mechanically</h2>

          <ol>
            <li><strong>During open enrollment, you elect an annual contribution.</strong> 2026 cap is expected at ~$3,300 for Healthcare FSA (final IRS figure typically published in October/November of the prior year — verify before electing).</li>
            <li><strong>Your employer divides it by pay periods</strong> and deducts the amount from each paycheck, pre-tax.</li>
            <li><strong>The full annual amount is available on day one</strong> — even though you haven't contributed it yet. This is the "uniform coverage rule" and it's why FSAs are valuable for predictable costs like orthodontia.</li>
            <li><strong>You spend with an FSA debit card</strong> (most plans) or submit receipts for reimbursement.</li>
            <li><strong>End of plan year:</strong> unspent money goes back to the employer unless your plan offers a grace period or carryover.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>FSA vs. HSA at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">FSA</th>
                  <th className="py-3 pr-4">HSA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Ownership</td><td className="py-3 pr-4">Employer</td><td className="py-3 pr-4">You</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Portability</td><td className="py-3 pr-4">Lost at job change</td><td className="py-3 pr-4">Yours forever</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Rollover</td><td className="py-3 pr-4">Up to $660 max (2026)</td><td className="py-3 pr-4">Unlimited</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Required health plan</td><td className="py-3 pr-4">Any</td><td className="py-3 pr-4">HDHP only</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">2026 contribution cap</td><td className="py-3 pr-4">~$3,300 (TBA)</td><td className="py-3 pr-4">$4,400 / $8,750</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Investable</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Retirement use</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Yes, after 65</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            If your employer offers a high-deductible plan and an HSA, take the HSA over the FSA.
            More on the HSA's long-term power in our <Link href="/learn/hsa-as-retirement-account">HSA as retirement account</Link> piece.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to size your contribution</h2>

          <p>
            <strong>Goal: contribute exactly what you'll spend, no more.</strong> Walk through:
          </p>

          <ul>
            <li><strong>Known recurring costs:</strong> prescriptions, contact lenses, regular dental cleanings.</li>
            <li><strong>Planned procedures:</strong> orthodontia (often eligible for the full year-one cost on day one — a major FSA upside), planned surgeries, LASIK, glasses you've been putting off.</li>
            <li><strong>Predictable family costs:</strong> kids' doctor visits, copays for chronic conditions.</li>
            <li><strong>Build in 10–15% buffer if your plan has a carryover or grace period.</strong> If neither, be more conservative — underspending up to ~$200 still nets out positive after the tax break, but more than that and you start losing money.</li>
          </ul>

          <p>
            Example: at a 25% combined federal+state marginal rate, contributing $2,000 to an FSA
            saves $500 in taxes. If you spend $1,800 of it and forfeit $200, you've still netted
            $300 ahead vs. spending after-tax.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The end-of-year scramble (and how to avoid it)</h2>

          <p>
            If you find yourself with leftover FSA money in November, here are legitimate ways to
            spend it down:
          </p>

          <ul>
            <li><strong>Stock up on OTC medications</strong> — pain relievers, allergy meds, cold meds. All eligible since 2020.</li>
            <li><strong>Buy backup contact lenses or prescription sunglasses.</strong></li>
            <li><strong>Book that delayed dental cleaning or eye exam.</strong></li>
            <li><strong>Menstrual products, sunscreen (SPF 15+), thermometers, blood pressure cuffs.</strong></li>
            <li><strong>Acupuncture, chiropractic visits, mental health therapy.</strong></li>
          </ul>

          <p>
            FSA Store and Health Equity (and similar sites) sell only FSA-eligible products to make
            the spend-down easy. Use the debit card directly.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The Dependent Care FSA — a different beast</h2>

          <p>
            DCFSA is a separate account for childcare costs (kids under 13). Same pre-tax mechanic,
            different cap and rules:
          </p>

          <ul>
            <li><strong>Cap: $5,000/household</strong> (or $2,500 if married filing separately). This is a statutory limit Congress hasn't increased since 1986 — yes, really.</li>
            <li><strong>Eligible:</strong> Daycare, preschool, after-school care, summer day camp, in-home nanny (with tax ID).</li>
            <li><strong>NOT eligible:</strong> Overnight camps, kindergarten or higher grade tuition, babysitter for date nights.</li>
            <li><strong>Use-it-or-lose-it applies</strong> — but DCFSA doesn't get the $660 carryover; only grace period is possible.</li>
          </ul>

          <p>
            <strong>DCFSA vs. the Child and Dependent Care Tax Credit:</strong> You generally can't
            use the credit on dollars you also ran through DCFSA. For higher-income households, the
            DCFSA wins (the credit phases down as income rises). For lower-income households, the
            credit can be more valuable. Most tax software handles this comparison automatically.
            See our guide on <Link href="/learn/best-tax-software-2026">best tax software 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>If you're choosing an HDHP + HSA instead</h2>

          <p>
            HSAs beat FSAs over a career — they roll over indefinitely, can be invested in mutual
            funds, and become a stealth retirement account after 65. If your employer offers an HDHP
            with an HSA option, that's the better long-term move.
          </p>

          <p>
            <AffiliateButton partner="lively" source={slug}>
              Open a Lively HSA →
            </AffiliateButton>{" "}
            <AffiliateButton partner="fidelity-hsa" source={slug} variant="secondary">Fidelity HSA</AffiliateButton>{" "}
            <AffiliateButton partner="healthequity" source={slug} variant="secondary">HealthEquity</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            An FSA is the easiest tax break in employer benefits — but it only pays off if you size
            it accurately. Walk through your recurring + planned medical costs once a year, add a
            10–15% buffer if you have a carryover or grace period, and elect that amount. If you
            have an HSA option, prefer it. If you have daycare costs and a working spouse, the DCFSA
            is essentially free money you should already be using.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/hsa-vs-fsa">HSA vs. FSA</Link></li>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link></li>
            <li><Link href="/learn/best-hsa-providers">Best HSA providers</Link></li>
            <li><Link href="/learn/hmo-vs-ppo-vs-hdhp">HMO vs. PPO vs. HDHP</Link></li>
            <li><Link href="/learn/tax-deductions-checklist">Tax deductions checklist</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
