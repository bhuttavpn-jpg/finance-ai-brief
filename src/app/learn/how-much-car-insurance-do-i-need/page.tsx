import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-much-car-insurance-do-i-need";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How much car insurance do I need? (2026 coverage guide)";
const description =
  "State minimums are dangerously low for any household with assets. The right baseline is 100/300/100 liability — $100K per person bodily injury, $300K per accident, $100K property damage. Plus uninsured motorist, comprehensive/collision based on car value, and umbrella for high-net-worth drivers.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Are state minimums enough?",
    a: "Almost never for any driver with assets to protect. State minimums are often 25/50/25 or lower — $25K bodily injury per person, $50K total per accident, $25K property damage. One serious accident with even moderate medical bills can blow through that, leaving you personally liable for the rest. The cost difference to move to 100/300/100 is usually $5–$25/month — cheap protection.",
  },
  {
    q: "What's the right liability coverage for most people?",
    a: "100/300/100 as a baseline — $100K bodily injury per person, $300K per accident, $100K property damage. Goes up from there as your net worth or income grows. Anyone with $250K+ in assets should consider an umbrella policy on top.",
  },
  {
    q: "Should I have comprehensive and collision?",
    a: "Yes if your car is worth more than $4,000–$5,000 of actual cash value. No if it's older and the annual premium for comp + collision exceeds ~10% of the car's value. Liability stays mandatory either way.",
  },
  {
    q: "What's uninsured/underinsured motorist coverage?",
    a: "Protection when the at-fault driver has no insurance or insufficient limits. About 1 in 8 U.S. drivers is uninsured. UM/UIM covers your medical bills and lost wages when you can't recover from the at-fault party. Often cheap (~$5–$15/month) and worth taking at limits matching your liability.",
  },
  {
    q: "Do I need an umbrella policy?",
    a: "Yes if your net worth (home equity + retirement + savings + business interests) is $250K+ OR if you have public-facing exposure (rental property, teenage driver, dog owner, public profession). A $1M umbrella typically runs $150–$400/year — the cheapest large-coverage insurance dollar in personal finance.",
  },
  {
    q: "What's the cost of going from state minimum to 100/300/100?",
    a: "Typically $5–$25/month — small relative to the protection. The cost-to-coverage ratio is best at this step than at any other. Going from 100/300/100 up to 250/500/250 is also cheap (~$5–$15/month more) and worth it for higher-asset households.",
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
          subtitle="The honest coverage guide. State minimums protect almost no one with assets. The right baseline is 100/300/100 plus uninsured motorist — usually $5–$25/month more."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Most drivers carry too little car insurance — usually because they bought at
            state minimums and never re-evaluated.</strong> A single at-fault accident with
            injured parties can produce $250K+ in medical bills. State minimums of 25/50/25 expose
            you personally for everything above $25K per injured person.
          </p>

          <p>
            The cost difference between dangerously low and adequately protected is usually $5–$25
            a month — the best dollar-for-dollar protection in personal finance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How car insurance coverages are written</h2>

          <p>
            A liability policy is typically written as three numbers, in thousands of dollars:
            <strong> 100/300/100</strong>.
          </p>

          <ul>
            <li><strong>First number ($100K):</strong> Bodily injury liability per person.</li>
            <li><strong>Second number ($300K):</strong> Bodily injury liability per accident (total across all injured parties).</li>
            <li><strong>Third number ($100K):</strong> Property damage liability per accident.</li>
          </ul>

          <p>
            <strong>State minimums in most states are 25/50/25 — and that's nowhere near
            enough.</strong> Mid-back surgery alone often runs $80K+. A single passenger with a
            broken leg can exceed $25K. State minimums work for the no-asset, no-income, easy-to-
            judgment-proof driver — which probably isn't you.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The recommended baselines</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Profile</th>
                  <th className="py-3 pr-4">Liability</th>
                  <th className="py-3 pr-4">UM/UIM</th>
                  <th className="py-3 pr-4">Umbrella</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Renter, &lt;$50K assets</td><td className="py-3 pr-4">100/300/100</td><td className="py-3 pr-4">100/300</td><td className="py-3 pr-4">—</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Homeowner, $100K–$250K net worth</td><td className="py-3 pr-4">100/300/100</td><td className="py-3 pr-4">100/300</td><td className="py-3 pr-4">Optional</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$250K–$1M net worth</td><td className="py-3 pr-4">250/500/250</td><td className="py-3 pr-4">250/500</td><td className="py-3 pr-4">$1M</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$1M+ net worth</td><td className="py-3 pr-4">250/500/250 or higher</td><td className="py-3 pr-4">250/500+</td><td className="py-3 pr-4">$2M+</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Teen driver in household</td><td className="py-3 pr-4">Bump up one tier</td><td className="py-3 pr-4">Same</td><td className="py-3 pr-4">Strongly recommended</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Rule of thumb:</strong> liability limits should be at least equal to your net
            worth. Below that and a serious accident exposes your assets.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The other coverages you probably need</h2>

          <h3>Uninsured/underinsured motorist (UM/UIM)</h3>

          <p>
            <strong>~1 in 8 U.S. drivers is uninsured</strong> (Insurance Research Council). When an
            uninsured driver hits you, your own UM coverage steps in to pay your medical bills and
            lost wages. UIM kicks in when the at-fault driver's limits are too low to cover your
            damages.
          </p>

          <p>
            <strong>Match UM/UIM limits to your liability limits.</strong> Adding UM/UIM at
            100/300 typically costs $5–$15/month. Outsized protection for the price.
          </p>

          <h3>Comprehensive and collision</h3>

          <ul>
            <li><strong>Collision</strong> — pays for damage to YOUR car in an accident regardless of fault.</li>
            <li><strong>Comprehensive</strong> — pays for non-collision damage (theft, vandalism, weather, animal strike).</li>
          </ul>

          <p>
            <strong>Keep both when your car's actual cash value is over $4,000–$5,000.</strong> Drop
            both when annual premium for comp + collision exceeds 10% of car ACV. Look up your car's
            ACV on Kelley Blue Book.
          </p>

          <h3>Personal Injury Protection (PIP) / MedPay</h3>

          <p>
            PIP pays your medical bills regardless of fault (required in no-fault states). MedPay is
            similar but optional. <strong>If your health insurance is good (low deductible, broad
            network), keep PIP/MedPay at the minimum.</strong> If your health insurance is thin or
            high-deductible, raise PIP/MedPay to $5K–$10K.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The umbrella policy — high leverage for high net worth</h2>

          <p>
            <strong>An umbrella policy adds $1M–$5M of extra liability coverage on top of your auto
            and homeowners policies.</strong> Typically $150–$400/year for $1M of coverage — by far
            the cheapest large-coverage insurance dollar available.
          </p>

          <p>
            <strong>When you should have one:</strong>
          </p>

          <ul>
            <li>Net worth (home equity + retirement + savings + business equity) over $250K.</li>
            <li>You own a rental property.</li>
            <li>You have a teen driver in the household.</li>
            <li>You own a dog (especially a "high risk" breed per insurer lists).</li>
            <li>You're a public-facing professional (doctor, lawyer, real estate agent) with extra exposure.</li>
            <li>You have a pool, trampoline, or other "attractive nuisance."</li>
          </ul>

          <p>
            <strong>Requirement:</strong> umbrella policies usually require you to first carry
            higher liability limits on auto (250/500/250) and home ($300K+) before they'll attach.
          </p>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              See umbrella + auto quotes →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Coverages most people overpay on</h2>

          <ul>
            <li><strong>Rental car reimbursement</strong> — $1–$3/month for $30/day rental coverage. Skip if you have a credit card with rental coverage or if you could absorb the cost.</li>
            <li><strong>Roadside assistance</strong> — $1–$3/month. AAA or your credit card may already cover it.</li>
            <li><strong>New car replacement</strong> — only useful for cars under 2 years old. Drop when the car is older.</li>
            <li><strong>OEM parts endorsement</strong> — useful for newer cars; small fee.</li>
            <li><strong>Glass coverage</strong> — useful in some markets, optional in others.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually size your coverage</h2>

          <ol>
            <li><strong>List your net worth</strong> — home equity + retirement + investments + savings + business interests minus debts.</li>
            <li><strong>Set liability AT LEAST equal to net worth</strong>, rounded up to standard tiers (100/300/100, 250/500/250, etc.).</li>
            <li><strong>Match UM/UIM to liability.</strong></li>
            <li><strong>Decide on comp/collision based on car ACV</strong> (drop if &lt; $4K).</li>
            <li><strong>Add umbrella</strong> if net worth $250K+ OR high-exposure profile.</li>
            <li><strong>Audit annually</strong> — net worth grows, coverage should keep pace.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Where to shop</h2>

          <p>
            An aggregator pulls quotes from multiple insurers in one form. Then cross-check with
            direct quotes from the national carriers.
          </p>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Get auto + umbrella quotes →
            </AffiliateButton>
          </p>

          <p>
            Or quote direct:{" "}
            <AffiliateButton partner="geico" source={slug} variant="secondary">GEICO</AffiliateButton>{" "}
            <AffiliateButton partner="progressive" source={slug} variant="secondary">Progressive</AffiliateButton>
          </p>

          <p>
            Full provider comparison in our{" "}
            <Link href="/learn/best-car-insurance-companies-2026">best car insurance companies 2026</Link>{" "}
            roundup. To shop premium down, see{" "}
            <Link href="/learn/how-to-lower-car-insurance">how to lower your car insurance</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>100/300/100 liability + matching UM/UIM is the right baseline for almost
            anyone with assets.</strong> Going from state minimums to that baseline typically costs
            $5–$25/month — the best protection-per-dollar in personal finance.
          </p>

          <p>
            High net worth households should add 250/500/250 liability + a $1M+ umbrella policy.
            Low-value cars can drop comp/collision; everyone else should keep both.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-car-insurance-companies-2026">Best car insurance companies 2026</Link></li>
            <li><Link href="/learn/how-to-lower-car-insurance">How to lower car insurance</Link></li>
            <li><Link href="/learn/how-much-life-insurance-do-i-need">How much life insurance do I need?</Link></li>
            <li><Link href="/learn/best-life-insurance-companies-2026">Best life insurance companies 2026</Link></li>
            <li><Link href="/learn/hmo-vs-ppo-vs-hdhp">HMO vs. PPO vs. HDHP</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
