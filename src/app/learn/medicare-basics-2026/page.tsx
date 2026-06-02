import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "medicare-basics-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Medicare basics: Parts A, B, C, D explained (2026)";
const description =
  "Medicare has four parts and two paths. Original Medicare (A + B) covers hospital and outpatient with a 20% coinsurance and no out-of-pocket cap. Medicare Advantage (Part C) bundles A/B/D with a cap but limits providers. Part D is drug coverage. Here's how to choose.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "When do I become eligible for Medicare?",
    a: "Age 65 for most people — your Initial Enrollment Period is the 7-month window starting 3 months before your 65th birthday month and ending 3 months after. People under 65 qualify if they've received Social Security Disability Insurance (SSDI) for 24 months, or have ALS or end-stage renal disease.",
  },
  {
    q: "Is Medicare free?",
    a: "Part A (hospital) is premium-free for most enrollees who paid Medicare payroll taxes for 10+ years. Part B (outpatient) has a standard premium ($185/month in 2025; 2026 figure announced later in fall 2025 — verify at Medicare.gov). Higher-income enrollees pay an Income-Related Monthly Adjustment Amount (IRMAA) surcharge. Part D and Medicare Advantage premiums vary by plan and region.",
  },
  {
    q: "What's the difference between Original Medicare and Medicare Advantage?",
    a: "Original Medicare = Part A + Part B + (usually) a separate Part D drug plan + (usually) a Medigap supplement. You can see any provider that accepts Medicare nationally, with a 20% coinsurance and no out-of-pocket cap (Medigap fills that gap). Medicare Advantage = Part C, a bundled private plan that includes A/B/D and usually extras (dental, vision), but with HMO/PPO provider networks and an annual out-of-pocket cap built in.",
  },
  {
    q: "What happens if I miss my enrollment window?",
    a: "If you're not enrolled in Part B when you should be (and don't have qualifying employer coverage), you pay a permanent 10% premium penalty for each 12-month period you delayed. Part D has a similar permanent penalty (1% of national base premium per month delayed). Always enroll on time even if you don't need active coverage yet.",
  },
  {
    q: "Do I need Medigap if I have Medicare Advantage?",
    a: "No — and you can't have both. Medigap (Medicare Supplement) only works with Original Medicare (Parts A + B). It covers the 20% coinsurance and other cost-sharing Original Medicare leaves you with. Medicare Advantage already has its own out-of-pocket cap built in, so a Medigap policy would be redundant and isn't allowed.",
  },
  {
    q: "What is IRMAA?",
    a: "Income-Related Monthly Adjustment Amount — a surcharge on Part B and Part D premiums for higher-income beneficiaries. Determined from your tax return 2 years prior (so 2026 IRMAA is based on 2024 AGI). The thresholds for 2026 will be announced in fall 2025. Single filers above $103K (or so) and joint filers above $206K (or so) face IRMAA tiers ranging from $70 to $480+ extra per month per spouse.",
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
          subtitle="Medicare has four parts and two paths. Knowing the trade-offs before you turn 65 saves real money — and avoids permanent late-enrollment penalties."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="13 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Medicare is the federal health-insurance program for Americans 65 and
            over.</strong> It's made of four parts (A, B, C, D) that combine into two practical
            paths: <strong>Original Medicare + Medigap + Part D</strong>, or{" "}
            <strong>Medicare Advantage (Part C) all-in-one</strong>.
          </p>

          <p>
            The decision you make at 65 is hard to reverse later (Medigap medical underwriting
            outside your one-time guaranteed-issue window), so it's worth understanding the
            trade-offs before you enroll.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The four parts in one minute</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Part</th>
                  <th className="py-3 pr-4">Covers</th>
                  <th className="py-3 pr-4">Premium (2025; 2026 TBA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">A</td><td className="py-3 pr-4">Hospital inpatient, skilled nursing, hospice</td><td className="py-3 pr-4">$0 if 10+ years of Medicare taxes paid</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">B</td><td className="py-3 pr-4">Outpatient, doctor visits, preventive, durable medical equipment</td><td className="py-3 pr-4">$185/month standard (2025); IRMAA above income thresholds</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">C (Advantage)</td><td className="py-3 pr-4">A + B + usually D + extras, via private plans</td><td className="py-3 pr-4">$0–$100+/month (in addition to Part B)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">D</td><td className="py-3 pr-4">Prescription drugs</td><td className="py-3 pr-4">~$35/month average national (2025); IRMAA above income thresholds</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-ink-muted">
            2026 Part B premium and IRMAA brackets will be announced by CMS in fall 2025; verify at
            Medicare.gov before making decisions for 2026.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Part A — hospital insurance</h2>

          <ul>
            <li><strong>Premium:</strong> $0 for most people (if you or your spouse paid Medicare payroll taxes for 40 quarters / 10 years).</li>
            <li><strong>2025 inpatient deductible:</strong> $1,676 per benefit period.</li>
            <li><strong>2025 coinsurance:</strong> $0/day for days 1–60, $419/day for days 61–90, $838/day for lifetime reserve days, all costs beyond.</li>
            <li><strong>Covers:</strong> inpatient hospital stays, skilled nursing facility (limited), home health (limited), hospice.</li>
            <li><strong>Doesn't cover:</strong> long-term custodial care (that's <Link href="/learn/long-term-care-insurance">long-term care insurance</Link> territory).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Part B — outpatient and medical insurance</h2>

          <ul>
            <li><strong>2025 standard premium:</strong> $185/month (announced annually; 2026 figure TBA).</li>
            <li><strong>2025 annual deductible:</strong> $257.</li>
            <li><strong>After deductible:</strong> you pay 20% coinsurance with no annual out-of-pocket cap on Original Medicare.</li>
            <li><strong>Covers:</strong> doctor visits, lab work, outpatient surgery, preventive screenings, durable medical equipment.</li>
            <li><strong>IRMAA surcharges</strong> apply for higher incomes (single $103K+, joint $206K+ approximate 2025 thresholds; 2026 TBA).</li>
          </ul>

          <h3>The 20% coinsurance with no cap is the catch</h3>

          <p>
            <strong>Original Medicare has no annual out-of-pocket maximum.</strong> A bad year —
            chemotherapy, surgery, extended rehab — can mean tens of thousands in 20% coinsurance.
            That's the reason most Original Medicare enrollees also buy a{" "}
            <strong>Medigap</strong> (supplement) policy.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Part C — Medicare Advantage</h2>

          <p>
            <strong>Private insurance plans that replace Original Medicare</strong> as your
            coverage delivery — they must cover everything A and B cover, and almost all bundle in
            Part D and extras like dental, vision, hearing, gym memberships.
          </p>

          <ul>
            <li><strong>Premium:</strong> ranges from $0 to $100+/month (always paid in addition to Part B premium).</li>
            <li><strong>Provider networks:</strong> HMO (in-network only except emergencies) or PPO (in/out-of-network with cost differential). NOT see-any-provider-nationally like Original Medicare.</li>
            <li><strong>Out-of-pocket cap:</strong> ALL Advantage plans have an annual cap ($9,350 in-network for 2025; varies by plan). This is the main protection vs. Original Medicare.</li>
            <li><strong>Prior authorization</strong> is more common in Advantage plans than Original Medicare. Some treatments require pre-approval.</li>
            <li><strong>Region-specific.</strong> Different plans available in different counties; great plan in one zip code, mediocre in the next.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Part D — prescription drug coverage</h2>

          <p>
            Standalone prescription-drug plan (bought separately if you have Original Medicare, or
            bundled if you have Medicare Advantage).
          </p>

          <ul>
            <li><strong>2025 national base beneficiary premium:</strong> ~$36/month average.</li>
            <li><strong>2025 out-of-pocket cap:</strong> $2,000/year — major win for high-cost-drug patients (took effect 2025 under the Inflation Reduction Act).</li>
            <li><strong>Formulary tiers:</strong> generics, preferred brand, non-preferred brand, specialty. Each tier has different cost-share.</li>
            <li><strong>Late enrollment penalty:</strong> 1% of national base per month delayed, permanent.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Original Medicare + Medigap vs. Medicare Advantage</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Original + Medigap + Part D</th>
                  <th className="py-3 pr-4">Medicare Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Provider network</td><td className="py-3 pr-4">Any provider that accepts Medicare (nationwide)</td><td className="py-3 pr-4">HMO/PPO network, often county-specific</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Monthly premium</td><td className="py-3 pr-4">Part B + Medigap ($100–$300) + Part D (~$35)</td><td className="py-3 pr-4">Part B + Advantage plan ($0–$100+)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Annual out-of-pocket cap</td><td className="py-3 pr-4">~$0 (Medigap fills the gap) but $2K for drugs</td><td className="py-3 pr-4">$9,350 in-network max (2025)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Prior authorization</td><td className="py-3 pr-4">Rare</td><td className="py-3 pr-4">Common, varies by plan</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Extras (dental, vision)</td><td className="py-3 pr-4">Not included</td><td className="py-3 pr-4">Usually included</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">Travelers, snowbirds, complex medical needs</td><td className="py-3 pr-4">Stable in one region, healthy-ish, low premium priority</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The enrollment timeline</h2>

          <p>
            <strong>Initial Enrollment Period (IEP):</strong> 7 months total — 3 months before your
            65th birthday month + your birthday month + 3 months after. Enroll in Parts A, B, D,
            and pick up Medigap or Advantage in this window. Medigap has guaranteed issue here —
            outside this window, insurers can decline you or charge based on health.
          </p>

          <p>
            <strong>Annual Enrollment Period (AEP):</strong> October 15 – December 7 each year. You
            can switch Part D plans, switch Medicare Advantage plans, or move between Original
            Medicare and Advantage. Changes take effect January 1.
          </p>

          <p>
            <strong>Medicare Advantage Open Enrollment:</strong> January 1 – March 31. You can
            switch from one Advantage plan to another, or drop Advantage and go back to Original
            Medicare (with one chance to add Part D).
          </p>

          <p>
            <strong>If you're still working with employer coverage at 65:</strong> you can delay
            Part B enrollment without penalty as long as the employer plan is creditable coverage
            (employer with 20+ employees). When you leave that job, you get a Special Enrollment
            Period to sign up for Part B with no penalty.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The penalties for missing enrollment</h2>

          <ul>
            <li><strong>Part B late penalty:</strong> 10% of standard premium for each full 12-month period you delayed without creditable coverage. <strong>Permanent for life.</strong> Delay 5 years = 50% higher Part B premium forever.</li>
            <li><strong>Part D late penalty:</strong> 1% of the national base beneficiary premium for each month you went without creditable drug coverage. Also permanent.</li>
            <li><strong>Medigap medical underwriting</strong> outside your IEP. After your 6-month Medigap open-enrollment window (starting the month you turn 65 AND enroll in Part B), insurers can deny coverage or charge more based on pre-existing conditions in most states.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>IRMAA — the high-income surcharge</h2>

          <p>
            <strong>Higher-income Medicare enrollees pay extra on Parts B and D premiums.</strong>{" "}
            The surcharge is determined from your tax return 2 years prior. For 2026 enrollees,
            your 2024 modified AGI determines whether you face IRMAA and at what tier.
          </p>

          <p>
            Approximate 2025 thresholds (single filer): $103K (no IRMAA), $129K (+$70/mo), $161K
            (+$175/mo), $193K (+$280/mo), $500K (+$385/mo), $750K+ (+$420/mo). Roughly double for
            MFJ. 2026 figures will be announced in fall 2025.
          </p>

          <h3>Strategies to manage IRMAA</h3>

          <ul>
            <li><strong>Smooth Roth conversions</strong> in years 60–63 (before Medicare) to keep AGI under IRMAA cliffs once Medicare starts. See our{" "}
              <Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link> guide.
            </li>
            <li><strong>Time large capital gains</strong> in low-income years to avoid bumping into IRMAA tiers.</li>
            <li><strong>Watch the cliff structure</strong> — $1 over a threshold can cost hundreds in surcharges. IRMAA is a "cliff," not a marginal rate.</li>
            <li><strong>File Form SSA-44</strong> for a life-changing event (retirement, divorce, death of spouse) to ask SSA to use a more recent income year.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to shop for Medigap or Advantage</h2>

          <p>
            The cleanest path is an independent broker who isn't paid to push one specific carrier.
            An insurance marketplace can also surface plans available in your zip:
          </p>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Compare Medicare plans →
            </AffiliateButton>
          </p>

          <p>
            For DIY shopping, the official Medicare Plan Finder at <strong>Medicare.gov/plan-compare</strong>{" "}
            lets you enter your prescriptions and see actual cost projections for each
            Part D and Advantage plan in your area.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>If you travel, live in two states, or have complex medical needs:</strong>{" "}
            Original Medicare + Medigap + Part D is the more flexible path. Higher monthly cost,
            but you can see any provider nationally with essentially no out-of-pocket.
          </p>

          <p>
            <strong>If you're rooted in one region and healthy-ish:</strong> Medicare Advantage is
            usually cheaper monthly, bundles extras, and has an out-of-pocket cap.
          </p>

          <p>
            <strong>Always:</strong> enroll on time. The Part B and Part D late penalties are
            permanent — and the Medigap underwriting window closes 6 months after Part B starts.
            Don't sleep on enrollment.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/long-term-care-insurance">Long-term care insurance</Link></li>
            <li><Link href="/learn/hmo-vs-ppo-vs-hdhp">HMO vs. PPO vs. HDHP</Link></li>
            <li><Link href="/learn/when-to-take-social-security">When to take Social Security</Link></li>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
