import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "hmo-vs-ppo-vs-hdhp";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "HMO vs. PPO vs. HDHP: How to pick a health plan";
const description =
  "HMOs are cheapest but restrict you to in-network providers. PPOs cost more but give flexibility. HDHPs pair with an HSA — best for healthy people who can save the tax-advantaged money. Here's the math, who each plan fits, and the most common picking mistakes.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "What's the simplest way to pick between HMO, PPO, and HDHP?",
    a: "Three questions. (1) Do you have ongoing prescriptions or known specialist care needs? PPO. (2) Are you healthy with minimal care use? HDHP, and max the HSA. (3) Do you want predictable low-cost in-network care with no claim paperwork? HMO. Match the plan to actual usage, not to which premium looks lowest.",
  },
  {
    q: "Is an HDHP a bad idea?",
    a: "No — for the right user it's the single most tax-efficient health plan available. The HSA triple tax advantage (deductible going in, tax-free growth, tax-free withdrawals for medical) beats a 401(k) for medical expenses. The trap is choosing HDHP for low premiums when you have chronic conditions or ongoing care — the high deductible can wipe out the savings.",
  },
  {
    q: "What does 'in-network' actually mean?",
    a: "Doctors and facilities that have negotiated discounted rates with your insurer. Going in-network: insurer pays most of the bill after deductible. Going out-of-network on an HMO: insurer often pays nothing. On a PPO: insurer pays a smaller share, you pay the rest. Always verify a doctor is in-network before scheduling.",
  },
  {
    q: "Do I need a referral on an HMO?",
    a: "Yes — your primary care physician must refer you to specialists. The PCP gates specialist access. PPOs let you self-refer. EPOs (a less common variant) are like HMOs without referrals but still restrict to in-network only.",
  },
  {
    q: "Does the HDHP let me see any doctor I want?",
    a: "Depends on the underlying network type. Most HDHPs ride on top of a PPO network and behave like a PPO with a higher deductible. Some sit on an HMO network and inherit those restrictions. Check the plan documents — the 'HDHP' label only tells you the deductible/HSA part.",
  },
  {
    q: "What's a typical 2026 family deductible?",
    a: "For HDHPs in 2026, the IRS minimum is $3,400 family / $1,700 self-only per Rev. Proc. 2025-19; actual plans often have $5,000–$10,000 deductibles. For traditional PPOs, $1,500–$3,000 family is common. For HMOs, $500–$2,000 family is typical. Out-of-pocket maximums are typically $8,000–$17,000.",
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
          subtitle="Open enrollment doesn't have to be a guess. Match the plan to your actual care use — not to the lowest premium."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The right health plan depends on how much care you actually use, not on which
            premium looks lowest.</strong> A healthy 28-year-old picking an HDHP and maxing the HSA
            is making the smartest financial move available in U.S. healthcare. A 45-year-old with
            two prescriptions and a chronic specialist picking the same HDHP can lose $5,000+ a
            year vs. the PPO option.
          </p>

          <p>
            Here's the plain-English breakdown of the three main plan types and how to choose.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The three plan types at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">HMO</th>
                  <th className="py-3 pr-4">PPO</th>
                  <th className="py-3 pr-4">HDHP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Premium</td><td className="py-3 pr-4">Lowest</td><td className="py-3 pr-4">Highest</td><td className="py-3 pr-4">Low</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Deductible</td><td className="py-3 pr-4">Low</td><td className="py-3 pr-4">Moderate</td><td className="py-3 pr-4">High ($1,700+ self / $3,400+ family in 2026)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Network</td><td className="py-3 pr-4">In-network only</td><td className="py-3 pr-4">In + out-of-network</td><td className="py-3 pr-4">Varies by underlying network</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Referrals needed</td><td className="py-3 pr-4">Yes — through PCP</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Depends on network type</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HSA-eligible</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">Local users, low budget</td><td className="py-3 pr-4">Specialists, flexibility</td><td className="py-3 pr-4">Healthy savers</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>HMO — Health Maintenance Organization</h2>

          <p>
            <strong>Lowest premiums, most restrictions.</strong> You pick a primary care physician
            (PCP), and that PCP coordinates all your care. To see a specialist, you need a referral
            from your PCP. Going out-of-network: insurer typically pays nothing.
          </p>

          <p>
            <strong>Where HMOs win:</strong>
          </p>

          <ul>
            <li>Lower monthly premiums by $100–$400 vs. PPO.</li>
            <li>Lower deductibles and copays for in-network care.</li>
            <li>Less paperwork — typically no claims to submit yourself.</li>
            <li>Coordinated care through a single PCP can catch issues earlier.</li>
          </ul>

          <p>
            <strong>Where HMOs lose:</strong>
          </p>

          <ul>
            <li>Out-of-network is essentially uncovered.</li>
            <li>Referral friction adds 1–3 weeks to specialist appointments.</li>
            <li>If your preferred doctor isn't in network, you're stuck switching.</li>
            <li>Travel limits care to emergencies only outside your home region.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>PPO — Preferred Provider Organization</h2>

          <p>
            <strong>Highest premiums, most flexibility.</strong> You can see any doctor without a
            referral, in-network or out. In-network: insurer pays most. Out-of-network: insurer pays
            a smaller share and you cover the rest.
          </p>

          <p>
            <strong>Where PPOs win:</strong>
          </p>

          <ul>
            <li>No referrals — see specialists directly.</li>
            <li>Out-of-network coverage exists (vs. HMO's zero).</li>
            <li>Best for people with established specialist relationships.</li>
            <li>Travel-friendly — care covered outside your home region.</li>
          </ul>

          <p>
            <strong>Where PPOs lose:</strong>
          </p>

          <ul>
            <li>Highest premium — often $200–$500/month more than HMO.</li>
            <li>Out-of-network care is still expensive even with coverage.</li>
            <li>Claim paperwork for out-of-network is on you.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>HDHP — High-Deductible Health Plan (with HSA)</h2>

          <p>
            <strong>Low premium, high deductible, paired with an HSA.</strong> Per IRS Rev. Proc.
            2025-19, the 2026 minimum HDHP deductible is $1,700 self / $3,400 family, with
            out-of-pocket maxes of $8,500 / $17,000. The HSA contribution limit is $4,400 self /
            $8,750 family, with a $1,000 catch-up at 55+.
          </p>

          <p>
            <strong>The HSA is the killer feature.</strong> Triple tax advantage:
          </p>

          <ol>
            <li><strong>Tax-deductible</strong> contributions (or pre-tax through payroll, also saving FICA).</li>
            <li><strong>Tax-free growth</strong> when invested.</li>
            <li><strong>Tax-free withdrawals</strong> for qualified medical expenses, forever.</li>
          </ol>

          <p>
            After age 65, you can also withdraw for any purpose at ordinary income rates — making
            the HSA function like a traditional IRA with no RMDs. Deep dive in our{" "}
            <Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link>{" "}
            article.
          </p>

          <p>
            <strong>Where HDHPs win:</strong>
          </p>

          <ul>
            <li>Best long-term tax-advantaged account available — better math than 401(k) for medical.</li>
            <li>Low premium ideal for healthy users.</li>
            <li>HSA funds roll over indefinitely (vs. FSA which expires).</li>
            <li>Often subsidized by employer HSA contributions ($500–$1,500/year).</li>
          </ul>

          <p>
            <strong>Where HDHPs lose:</strong>
          </p>

          <ul>
            <li>The deductible bites hard if you actually need care.</li>
            <li>Bad fit for chronic conditions, ongoing prescriptions, or planned procedures.</li>
            <li>You have to actually fund and invest the HSA — most people don't.</li>
            <li>Limited utility if you can't afford the deductible from emergency savings.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The math — when each plan wins</h2>

          <p>Example: 35-year-old, employer offering all three plans for self-only coverage.</p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Scenario</th>
                  <th className="py-3 pr-4">HMO</th>
                  <th className="py-3 pr-4">PPO</th>
                  <th className="py-3 pr-4">HDHP + HSA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Annual premium (sample)</td><td className="py-3 pr-4">$1,800</td><td className="py-3 pr-4">$3,600</td><td className="py-3 pr-4">$1,200</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Deductible (sample)</td><td className="py-3 pr-4">$1,000</td><td className="py-3 pr-4">$1,500</td><td className="py-3 pr-4">$3,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Healthy year (~$500 care)</td><td className="py-3 pr-4">$2,300</td><td className="py-3 pr-4">$4,100</td><td className="py-3 pr-4">$1,700 + $4,400 HSA tax savings ≈ ~$700–$1,200 net</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Moderate year (~$5,000 care)</td><td className="py-3 pr-4">~$4,500</td><td className="py-3 pr-4">~$5,600</td><td className="py-3 pr-4">~$5,200 (max HSA tax savings claw back partially)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Heavy year (out-of-pocket max)</td><td className="py-3 pr-4">~$8,000</td><td className="py-3 pr-4">~$8,000</td><td className="py-3 pr-4">~$9,700 (limited)</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The HDHP wins big on healthy years.</strong> The PPO wins on moderate-to-heavy
            usage. The HMO sits in the middle — usually beaten by HDHP for healthy years and PPO for
            chronic-condition users.
          </p>

          <p>
            Always run this with your actual employer plan numbers — the specifics vary
            dramatically.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to open the HSA (if HDHP)</h2>

          <p>
            Most employers pair the HDHP with a specific HSA provider (often a fee-charging legacy
            bank). <strong>You can transfer your HSA funds to a better provider</strong> annually —
            and Fidelity HSA is widely the best of the bunch.
          </p>

          <p>
            <AffiliateButton partner="fidelity-hsa" source={slug}>
              See the Fidelity HSA →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="lively" source={slug} variant="secondary">Lively</AffiliateButton>{" "}
            <AffiliateButton partner="healthequity" source={slug} variant="secondary">HealthEquity</AffiliateButton>
          </p>

          <p>
            Full provider comparison in{" "}
            <Link href="/learn/best-hsa-providers">best HSA providers 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to find the right plan if you're shopping the ACA marketplace</h2>

          <p>
            If you're not covered by an employer, the ACA marketplace is your starting point. A
            broker like Policygenius can pull quotes across the major insurers and help filter for
            HMO/PPO/HDHP without affecting price.
          </p>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Get health insurance quotes →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Picking the lowest premium without checking the deductible.</strong> The HDHP can save thousands healthy or cost thousands sick.</li>
            <li><strong>Not maxing the HSA when on an HDHP.</strong> You took the high deductible — at least capture the tax advantage.</li>
            <li><strong>Forgetting to check that your doctors are in-network.</strong> A "better" plan with your doctor out-of-network is worse.</li>
            <li><strong>Picking the same plan year after year</strong> without checking. Plan economics shift; doctors leave networks.</li>
            <li><strong>Carrying chronic-condition care on an HDHP</strong> without modeling the deductible cost.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Match the plan to your actual care patterns:</strong>
          </p>

          <ul>
            <li><strong>Healthy + employed + can save:</strong> HDHP + max HSA. Best math available.</li>
            <li><strong>Chronic condition or known specialist needs:</strong> PPO. The premium pays for itself in coverage and convenience.</li>
            <li><strong>Low usage + local + budget-constrained:</strong> HMO. Cheapest predictable in-network care.</li>
          </ul>

          <p>
            Run the actual math with your employer's plan numbers during open enrollment. Don't pick
            on autopilot.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/hsa-vs-fsa">HSA vs. FSA</Link></li>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link></li>
            <li><Link href="/learn/best-hsa-providers">Best HSA providers 2026</Link></li>
            <li><Link href="/learn/how-much-life-insurance-do-i-need">How much life insurance do I need?</Link></li>
            <li><Link href="/learn/best-life-insurance-companies-2026">Best life insurance companies 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
