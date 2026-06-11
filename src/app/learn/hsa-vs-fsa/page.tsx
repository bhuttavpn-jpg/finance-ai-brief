import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "hsa-vs-fsa";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "HSA vs. FSA: Which one should you pick? (2026)";
const description =
  "Health Savings Accounts and Flexible Spending Accounts both pay for medical expenses with pre-tax dollars — but only one builds wealth. Here's how each works, 2026 limits, and which one fits your insurance plan.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the difference between an HSA and an FSA?",
    a: "An HSA (Health Savings Account) requires you to be enrolled in a high-deductible health plan (HDHP), has higher contribution limits, lets unused funds roll over forever, and lets you invest the balance for long-term growth. An FSA (Flexible Spending Account) doesn't require a specific health plan, has lower limits, and uses 'use-it-or-lose-it' rules — most unused funds vanish at year-end. The HSA is one of the most tax-advantaged accounts in the U.S. tax code; the FSA is a useful but limited short-term planning tool.",
  },
  {
    q: "Can I have both an HSA and an FSA?",
    a: "Generally no — you can't have a standard health FSA at the same time as an HSA, because the IRS considers a general-purpose FSA disqualifying coverage. The exception is a Limited-Purpose FSA (LPFSA), which only covers dental and vision and is HSA-compatible. Dependent Care FSAs (for childcare) are unrelated to health and can be paired with an HSA.",
  },
  {
    q: "What are the 2026 HSA contribution limits?",
    a: "$4,400 for self-only HDHP coverage; $8,750 for family HDHP coverage. Both up from 2025 figures. There's an additional $1,000 catch-up contribution for HSA-eligible individuals aged 55 and older. Source: IRS Rev. Proc. 2025-19 (May 2025).",
  },
  {
    q: "What are the 2026 FSA contribution limits?",
    a: "The 2026 healthcare FSA contribution limit will be announced by the IRS in October 2025 (Rev. Proc. for inflation adjustments). The 2025 limit was $3,300; the 2026 limit will likely be slightly higher. Some employers allow up to $660 of unused funds to roll over to the next year; some offer a 2.5-month grace period; some offer neither. Check your plan documents.",
  },
  {
    q: "Why is the HSA called 'triple tax advantaged'?",
    a: "Three tax benefits stack: (1) contributions are pre-tax (federal, state in most states, and FICA when payroll-deducted), (2) the balance grows tax-free if invested, and (3) qualified medical withdrawals are tax-free at any age. No other U.S. account combines all three. After age 65, non-medical withdrawals are taxed like Traditional IRA distributions — so the HSA effectively becomes a Traditional IRA with a tax-free option for medical costs.",
  },
  {
    q: "Should I max out my HSA?",
    a: "If you're enrolled in a qualifying HDHP and have the cash flow, yes — it's often the most tax-efficient account in your stack. Many financial planners place the HSA between the 401(k) match and the Roth IRA in priority order: get the match, then max the HSA (especially if invested for long-term growth), then max your Roth IRA, then return to the 401(k).",
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
          subtitle="Two pre-tax health accounts with similar names and very different rules. One builds wealth; the other resets every year. Here's which one fits your insurance plan and 2026 limits for both."
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
            <strong>The HSA is the most tax-advantaged account in the U.S. tax code — triple
            tax-free, no use-it-or-lose-it, investable for decades.</strong> The FSA is a useful
            short-term planning tool but vanishes at year-end if you don&apos;t spend it.
          </p>

          <p>
            <strong>The catch:</strong> you can only contribute to an HSA if your health insurance
            is a qualifying high-deductible health plan (HDHP). If you&apos;re not on one, the FSA
            is your only pre-tax option for medical costs.
          </p>

          <p>
            This guide walks both accounts, the 2026 limits, the &quot;triple tax advantage&quot;
            math, and which one to pick (or whether to have both).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Side-by-side: HSA vs. FSA</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4"></th>
                  <th className="py-3 pr-4">HSA</th>
                  <th className="py-3 pr-4">Healthcare FSA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Insurance required</td><td className="py-3 pr-4">HDHP only</td><td className="py-3 pr-4">Any (employer plan)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">2026 contribution limit</td><td className="py-3 pr-4">$4,400 self / $8,750 family</td><td className="py-3 pr-4">TBA (~$3,400 est.)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Catch-up (55+)</td><td className="py-3 pr-4">+$1,000</td><td className="py-3 pr-4">None</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Funds roll over?</td><td className="py-3 pr-4">Yes, forever</td><td className="py-3 pr-4">Mostly use-it-or-lose-it</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Investment growth</td><td className="py-3 pr-4">Yes (stocks, ETFs)</td><td className="py-3 pr-4">No</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Goes with you if you leave job</td><td className="py-3 pr-4">Yes (you own it)</td><td className="py-3 pr-4">No (forfeited)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Federal tax-deductible</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes (pre-tax payroll)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">FICA-tax-free (payroll)</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Qualified withdrawals tax-free</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">2026 HSA / HDHP limits per IRS Rev. Proc. 2025-19 (issued May 2025). 2026 FSA limits will be set later in 2025.</p>

          <hr className="my-10 border-brand-100" />

          <h2>The HSA: triple tax advantage explained</h2>

          <p>
            <strong>The HSA is the only U.S. account that combines all three tax benefits:</strong>
          </p>

          <ol>
            <li><strong>Contributions are pre-tax.</strong> Payroll-deducted contributions skip federal income tax, state income tax (in most states; CA and NJ are exceptions), and the 7.65% FICA tax — a savings most other accounts don&apos;t offer.</li>
            <li><strong>Growth is tax-free</strong> if you invest the balance in stocks, ETFs, or mutual funds — same as a Roth IRA.</li>
            <li><strong>Qualified medical withdrawals are tax-free</strong> at any age, with no penalty.</li>
          </ol>

          <p>
            <strong>The hidden bonus:</strong> after age 65, non-medical withdrawals are taxed as
            ordinary income (no penalty) — so the HSA becomes a Traditional IRA at worst, plus a
            tax-free medical bucket. There&apos;s no downside scenario.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 HSA / HDHP limits in detail</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Item</th>
                  <th className="py-3 pr-4">Self-only</th>
                  <th className="py-3 pr-4">Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">HSA contribution limit</td><td className="py-3 pr-4">$4,400</td><td className="py-3 pr-4">$8,750</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HDHP minimum deductible</td><td className="py-3 pr-4">$1,700</td><td className="py-3 pr-4">$3,400</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HDHP out-of-pocket maximum</td><td className="py-3 pr-4">$8,500</td><td className="py-3 pr-4">$17,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Catch-up (age 55+)</td><td className="py-3 pr-4">+$1,000</td><td className="py-3 pr-4">+$1,000</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">Source: <strong>IRS Rev. Proc. 2025-19</strong>, issued May 1, 2025.</p>

          <p>
            <strong>To contribute to an HSA in 2026,</strong> your health plan must have an annual
            deductible of at least <strong>$1,700</strong> (self-only) or <strong>$3,400</strong>
            (family), and out-of-pocket costs capped at no more than $8,500 / $17,000.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The FSA: useful, but limited</h2>

          <p>
            <strong>Healthcare FSAs are employer-offered accounts</strong> that let you set aside
            pre-tax money for medical expenses. They&apos;re a fine tool if you can&apos;t use an
            HSA, but they have important limits.
          </p>

          <ul>
            <li><strong>Use-it-or-lose-it.</strong> Most unused funds vanish at year-end. Some employers allow up to $660 to roll over (2026 figure expected to update); some offer a 2.5-month grace period; some offer neither.</li>
            <li><strong>Full annual amount available day 1.</strong> If you elected $3,000, you can spend it on January 2 even though you&apos;ve only contributed one paycheck&apos;s worth — your employer fronts the difference. (Pro for medical surprises early in the year.)</li>
            <li><strong>You forfeit the balance if you leave the employer.</strong> Unlike an HSA, the FSA stays with the employer.</li>
            <li><strong>Limit your election to expected medical spending.</strong> The use-it-or-lose-it rule punishes over-electing.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Three special-case FSAs</h2>

          <ul>
            <li><strong>Limited-Purpose FSA (LPFSA)</strong> — dental and vision only; HSA-compatible. Use this to extend the &quot;pre-tax bucket&quot; while still contributing to your HSA.</li>
            <li><strong>Dependent Care FSA (DCFSA)</strong> — childcare expenses, up to $5,000/yr (MFJ). Separate from the healthcare FSA and HSA-compatible.</li>
            <li><strong>Post-deductible FSA</strong> — kicks in only after the HDHP deductible is met. Rare but HSA-compatible.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The decision tree</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Your situation</th>
                  <th className="py-3 pr-4">Right account</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Enrolled in an HDHP</td><td className="py-3 pr-4"><strong>HSA</strong> — max it if cash flow allows</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HDHP + want dental/vision pre-tax</td><td className="py-3 pr-4">HSA + Limited-Purpose FSA</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HDHP + young kids in daycare</td><td className="py-3 pr-4">HSA + Dependent Care FSA</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Not on an HDHP, predictable medical spend</td><td className="py-3 pr-4">Healthcare FSA</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Not on an HDHP, unpredictable medical spend</td><td className="py-3 pr-4">Healthcare FSA at a conservative amount</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Switching plans next year</td><td className="py-3 pr-4">Consider HDHP to unlock the HSA</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Where to open an HSA outside your employer</h2>

          <p>
            <strong>Your employer&apos;s default HSA provider often charges high fees</strong> and
            offers limited investment choices. You can usually open a separate HSA at a low-fee
            provider and roll over money each year (or contribute directly outside payroll, then
            deduct on your tax return).
          </p>

          <p>
            <AffiliateButton partner="fidelity-hsa" source={slug}>
              Open an HSA at Fidelity →
            </AffiliateButton>
          </p>

          <p>You can also use:</p>
          <ul>
            <li><AffiliateButton partner="lively" source={slug} variant="secondary">Lively HSA</AffiliateButton></li>
            <li><AffiliateButton partner="healthequity" source={slug} variant="secondary">HealthEquity</AffiliateButton></li>
          </ul>

          <p>
            See <Link href="/learn/best-hsa-providers">best HSA providers</Link> for the full
            comparison.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>If you&apos;re HDHP-eligible, the HSA is one of the best accounts you can
            fund</strong> — triple tax-free, investable, and yours forever. It often outranks even
            the Roth IRA in optimization priority.
          </p>

          <p>
            <strong>If you&apos;re on a traditional health plan,</strong> use a healthcare FSA to
            cover predictable medical spending pre-tax, but elect conservatively to avoid forfeiting
            unused funds. Either way, you should be using at least one of these accounts — paying
            medical bills with post-tax dollars when you don&apos;t have to is leaving money on the
            table.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link> — using the HSA as a stealth IRA.</li>
            <li><Link href="/learn/best-hsa-providers">Best HSA providers</Link> — Fidelity, Lively, HealthEquity compared.</li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which to fund first</Link> — where the HSA fits in your stack.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — quantify the tax savings.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
