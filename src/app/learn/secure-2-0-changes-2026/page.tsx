import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "secure-2-0-changes-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "SECURE 2.0 changes that take effect in 2026";
const description =
  "The biggest SECURE Act 2.0 provisions hitting in 2026: the new 60–63 super catch-up of $11,250, the Roth-only catch-up rule for high earners, the 529-to-Roth rollover, and the emergency-savings sidecar. Here's what changes and who's affected.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is the SECURE 2.0 Act?",
    a: "The SECURE 2.0 Act of 2022 is a sweeping retirement-savings law that phases in over a decade. Major provisions take effect each year between 2023 and 2033. The biggest 2026 changes: the 60–63 super catch-up ($11,250), the Roth-only catch-up rule for workers earning $145K+, expanded automatic enrollment for new 401(k) plans, and the 529-to-Roth rollover (limited).",
  },
  {
    q: "How does the 60–63 super catch-up work?",
    a: "Under SECURE 2.0 §109, workers ages 60, 61, 62, and 63 can contribute an extra catch-up amount above the regular 50+ catch-up — for 2026, that's $11,250 vs. the standard $8,000 for 50+. So a 61-year-old can contribute up to $24,500 (regular) + $11,250 (super catch-up) = $35,750 to a 401(k) in 2026. At age 64+, the catch-up reverts to the standard $8,000.",
  },
  {
    q: "Who has to make catch-up contributions as Roth in 2026?",
    a: "Workers earning $145,000+ in FICA wages from one employer in the prior year must make their 401(k) catch-up contributions as Roth (after-tax) starting in 2026. This was originally scheduled for 2024 but the IRS delayed enforcement. Below $145K, you still choose Roth vs. pre-tax freely. The threshold is indexed for inflation going forward.",
  },
  {
    q: "Can I roll over a 529 plan to a Roth IRA?",
    a: "Yes — under SECURE 2.0 §126, you can roll up to a $35,000 lifetime amount from a 529 plan to a Roth IRA for the beneficiary, but with strict conditions: the 529 must have been open for 15+ years, contributions and earnings from the prior 5 years are ineligible, and the annual rollover is capped at the IRA contribution limit ($7,500 for 2026). It's narrow but it's a real safety valve for over-funded 529s.",
  },
  {
    q: "Does SECURE 2.0 push the RMD age higher again?",
    a: "Yes — under SECURE 2.0 §107, the Required Minimum Distribution age is 73 for those born 1951–1959 and rises to 75 for those born 1960 or later. The original SECURE Act of 2019 had pushed it from 70½ to 72; SECURE 2.0 added two more years.",
  },
  {
    q: "What's the 'emergency savings sidecar' in 401(k) plans?",
    a: "SECURE 2.0 §127 allows employers to offer 'pension-linked emergency savings accounts' (PLESAs) inside 401(k) plans — a Roth-style sidecar with a $2,500 cap. Workers contribute after-tax dollars; the first 4 withdrawals per year are penalty-free. It's a small, mostly-symbolic provision so far — adoption among large employers has been slow because the implementation rules are complex.",
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
          subtitle="A handful of SECURE 2.0 provisions take effect this year. The ones that actually matter for most savers are the 60–63 super catch-up and the Roth-only catch-up rule for high earners."
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
            <strong>SECURE 2.0 isn't one law that hit in one year — it's a 10-year phase-in.</strong>{" "}
            Different provisions take effect in different tax years between 2023 and 2033. Here are
            the ones starting <strong>in 2026</strong> that actually move the needle for most
            savers, with the IRS citations.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Quick reference — 2026 provisions</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Change</th>
                  <th className="py-3 pr-4">Affects</th>
                  <th className="py-3 pr-4">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">60–63 super catch-up: $11,250</td><td className="py-3 pr-4">Workers ages 60–63 in a 401(k)/403(b)/457</td><td className="py-3 pr-4">SECURE 2.0 §109; IR-2025-111</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Roth-only catch-up at $145K+ wages</td><td className="py-3 pr-4">Workers earning $145K+ from one employer</td><td className="py-3 pr-4">SECURE 2.0 §603</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">529-to-Roth rollover (max $35K lifetime)</td><td className="py-3 pr-4">529 beneficiaries with 15+ year-old plans</td><td className="py-3 pr-4">SECURE 2.0 §126</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mandatory auto-enrollment for new 401(k)s</td><td className="py-3 pr-4">401(k)/403(b) plans established after 12/29/2022</td><td className="py-3 pr-4">SECURE 2.0 §101</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Emergency savings sidecar (PLESA)</td><td className="py-3 pr-4">Workers in plans that adopt the feature</td><td className="py-3 pr-4">SECURE 2.0 §127</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>1. The 60–63 super catch-up — $11,250</h2>

          <p>
            <strong>The biggest 2026 change for most savers.</strong> Under SECURE 2.0 §109, workers
            ages 60, 61, 62, and 63 can contribute an enhanced catch-up amount to their 401(k),
            403(b), or governmental 457(b) plan. Per IRS Notice <strong>IR-2025-111</strong> (Nov
            13, 2025), the 2026 super catch-up is <strong>$11,250</strong> vs. the standard 50+
            catch-up of $8,000.
          </p>

          <p>
            <strong>Total possible 2026 contribution for a 61-year-old in a 401(k):</strong>
          </p>

          <ul>
            <li>$24,500 regular elective deferral</li>
            <li>+ $11,250 super catch-up</li>
            <li>= <strong>$35,750 total</strong></li>
          </ul>

          <p>
            At age 64, the catch-up drops back to the standard $8,000. So the 4-year window of
            60–63 is a meaningful one-time acceleration opportunity for late-career savers.
          </p>

          <h3>What it means</h3>

          <p>
            If you turn 60 in 2026 and have the cash flow, max your 401(k) at the super catch-up
            level for four years. That's <strong>~$143K of additional 401(k) contributions</strong>{" "}
            over four years vs. the standard 50+ catch-up — a meaningful retirement-savings sprint.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2. The Roth-only catch-up rule (high earners)</h2>

          <p>
            <strong>Under SECURE 2.0 §603, workers earning $145,000+ in FICA wages from one employer
            in the prior calendar year must make their 401(k) catch-up contributions as Roth (i.e.,
            after-tax) starting in 2026.</strong> Below the $145K threshold, you choose Roth vs.
            pre-tax freely. Above it, the catch-up dollars are mandatorily Roth.
          </p>

          <p>
            This rule was originally scheduled to take effect in 2024 but the IRS delayed
            enforcement (Notice 2023-62). It is now in force for tax year 2026.
          </p>

          <h3>What it means for high earners</h3>

          <ul>
            <li>You can still make the catch-up contribution — it just has to be in the Roth bucket.</li>
            <li>Your <strong>regular</strong> elective deferral can still be pre-tax. Only the catch-up portion is affected.</li>
            <li>If your plan doesn't offer a Roth 401(k) option, you cannot make catch-up contributions at all. Push your employer to add the Roth feature if your plan is missing it.</li>
            <li>The $145K threshold is from a single employer in the prior year. If you changed employers mid-year and earned less than $145K from each, the rule may not apply.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>3. 529-to-Roth rollover</h2>

          <p>
            <strong>SECURE 2.0 §126 created a narrow but real safety valve for over-funded 529
            plans.</strong> Starting in 2024 (and still in effect for 2026), 529 beneficiaries can
            roll over unused 529 funds to their own Roth IRA — with conditions:
          </p>

          <ul>
            <li><strong>Lifetime cap: $35,000.</strong> Per beneficiary, not per 529 plan.</li>
            <li><strong>15-year minimum.</strong> The 529 plan must have been open for at least 15 years for the beneficiary.</li>
            <li><strong>5-year lookback excluded.</strong> Contributions and earnings from the prior 5 years are not eligible.</li>
            <li><strong>Annual cap = IRA limit.</strong> For 2026, max rollover per year is $7,500 ($8,600 with catch-up at 50+). It will take 5+ years to use the full $35K.</li>
            <li><strong>Beneficiary's earned income.</strong> The beneficiary must have earned income in the rollover year — the rollover counts against their Roth IRA contribution limit for the year.</li>
          </ul>

          <p>
            <strong>Practical use case:</strong> a family over-funded a 529 for a child who chose a
            cheaper school, got scholarships, or skipped college. Instead of paying a 10% penalty +
            income tax on a non-qualified withdrawal, they can build a 5+ year Roth IRA position
            tax-free for the beneficiary.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>4. Mandatory auto-enrollment (new 401(k) plans)</h2>

          <p>
            <strong>SECURE 2.0 §101 requires NEW 401(k) and 403(b) plans established after December
            29, 2022 to automatically enroll new employees</strong> at a default contribution rate
            of 3–10%, with an auto-escalation of 1% per year up to at least 10% (max 15%). The
            mandate takes effect for plan years <strong>beginning in 2025</strong>; 2026 is the
            first full calendar year of broad enforcement.
          </p>

          <p>
            Exemptions: small employers (10 or fewer employees), employers in business less than 3
            years, churches, and governmental plans.
          </p>

          <p>
            <strong>What it means:</strong> if you join a new employer with a newly-created
            retirement plan, you will be auto-enrolled. You can opt out, but the default is now to
            save. This is a major behavioral-economics win for retirement readiness.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>5. Pension-linked emergency savings (PLESA)</h2>

          <p>
            <strong>SECURE 2.0 §127 created an optional 'sidecar' emergency-savings account</strong>{" "}
            attached to a 401(k). Workers contribute after-tax dollars (Roth-style); the first 4
            withdrawals per year are penalty-free. The cap is $2,500.
          </p>

          <ul>
            <li>Funds are held within the 401(k) plan but in a separate emergency-savings sub-account.</li>
            <li>Only non-highly-compensated employees (NHCEs) can participate.</li>
            <li>Withdrawals must be allowed within 30 days of request, in whole-dollar amounts.</li>
            <li>Employer can match emergency-savings contributions (the match goes to the 401(k), not the PLESA).</li>
          </ul>

          <p>
            <strong>Reality check:</strong> adoption has been slow. Recordkeeper implementation is
            complex, the $2,500 cap is small, and most large employers haven't added the feature.
            If your plan offers it, it's a nice forced-savings tool — but a regular{" "}
            <Link href="/learn/best-hysa-2026">high-yield savings account</Link> serves the same
            purpose with no employer dependency.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open a SoFi HYSA →
            </AffiliateButton>{" "}
            <AffiliateButton partner="marcus" source={slug} variant="secondary">Marcus</AffiliateButton>{" "}
            <AffiliateButton partner="ally" source={slug} variant="secondary">Ally</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Other 2026 provisions worth knowing</h2>

          <ul>
            <li><strong>Catch-up indexing.</strong> The IRA catch-up ($1,100 for 2026 per IR-2025-111) is now annually indexed for inflation, ending the prior $1,000 flat-line.</li>
            <li><strong>Self-correction window.</strong> SECURE 2.0 §305 lets plans self-correct certain operational errors without IRS approval — quietly important for small-business 401(k) sponsors.</li>
            <li><strong>Domestic-abuse withdrawal.</strong> §314 allows penalty-free 401(k) withdrawals up to $10K (or 50% of balance) for domestic-abuse victims; effective since 2024 but still relevant context.</li>
            <li><strong>Long-term part-time worker eligibility.</strong> §125 reduced the service requirement for part-timers to be eligible for 401(k) participation from 3 years to 2 years starting 2025 — many workers cross that threshold in 2026.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What's still ahead (2027–2033)</h2>

          <ul>
            <li><strong>2027:</strong> Saver's Match — federal government will match up to $1,000 of low-income workers' retirement contributions (replaces the Saver's Credit).</li>
            <li><strong>2033:</strong> RMD age rises to 75 (for those born 1960 or later, per §107).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What to actually do this year</h2>

          <ol>
            <li><strong>If you're 60–63 in 2026:</strong> recalibrate your 401(k) contribution to capture the $11,250 super catch-up. Talk to your plan administrator about adjusting your elective-deferral percentage.</li>
            <li><strong>If you earn $145K+ from one employer:</strong> confirm your plan offers Roth 401(k) catch-ups. If not, you'll forfeit the catch-up dollars entirely. Push HR.</li>
            <li><strong>If you have an over-funded 529:</strong> confirm the 15-year clock has started; plan the rollover schedule (up to $7,500/year for 2026).</li>
            <li><strong>Everyone:</strong> revisit your{" "}
              <Link href="/learn/how-much-to-contribute-to-401k">401(k) contribution</Link> and{" "}
              <Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA limits</Link> with the
              2026 numbers.
            </li>
          </ol>

          <p>
            Open or top off your accounts where you actually save and invest:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-much-to-contribute-to-401k">How much should I contribute to my 401(k)?</Link></li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: Which should you fund first?</Link></li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link></li>
            <li><Link href="/learn/mega-backdoor-roth-guide">Mega backdoor Roth guide</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
