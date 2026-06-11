import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "renters-vs-homeowners-insurance";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Renters vs. homeowners insurance: What each covers";
const description =
  "Renters insurance covers your stuff plus personal liability — typically $15–$25/month for $30K+ of coverage. Homeowners insurance also covers the structure of your home — typically $80–$200/month. Here's what each policy actually covers and how to size yours correctly.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I really need renters insurance?",
    a: "Yes. For $15–$25/month, you get $30K+ of coverage on your stuff, $100K+ of personal liability protection, and additional living expenses if your apartment becomes uninhabitable. The math is among the best in personal insurance. Most landlords now require it as part of the lease.",
  },
  {
    q: "Does my landlord's insurance cover my stuff?",
    a: "No. Your landlord's insurance covers the building structure and their liability — your possessions and your personal liability are NOT covered. If a pipe bursts and ruins your laptop, couch, and clothes, your renters insurance pays for replacements; their insurance does nothing for you.",
  },
  {
    q: "What does homeowners insurance cover?",
    a: "Four major buckets: (1) the structure of your home (dwelling coverage), (2) personal possessions inside, (3) personal liability if someone is hurt on your property, and (4) additional living expenses if your home becomes uninhabitable. A standard policy (HO-3) covers most perils except earthquakes, floods, and certain wear-and-tear.",
  },
  {
    q: "What's NOT covered by either policy?",
    a: "Floods (requires separate flood insurance, usually through NFIP), earthquakes (requires separate earthquake policy), and most wear-and-tear, neglect, and intentional damage. Some perils may require special endorsements: sewer backup, sump pump failure, mold above small thresholds.",
  },
  {
    q: "How much coverage do I need for my stuff?",
    a: "Inventory your belongings or use the rough rule: $20K–$50K for renters depending on lifestyle, $50K–$200K for homeowners. Walk through every room mentally, total up replacement cost (not what you paid). Common underestimates: clothes (~$5K–$15K for most households), kitchen equipment, electronics. Use 'replacement cost' coverage, not 'actual cash value' — much better for claims.",
  },
  {
    q: "How much liability coverage should I carry?",
    a: "$300K+ for renters; $300K–$500K for homeowners. If your net worth exceeds the liability limit, add a personal umbrella policy ($1M+ for ~$200/year). The cheapest large-coverage dollar in personal finance — see our how much car insurance guide for the umbrella details.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Protect" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Renters insurance is one of the highest-ROI policies in personal finance. Homeowners is mandatory if you have a mortgage. Here's what each covers and how to size yours."
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
            <strong>Renters insurance is one of the most underrated policies in personal
            finance.</strong> $15–$25/month buys $30K+ of coverage on your possessions, $100K+ of
            personal liability protection, and additional living expenses if your apartment becomes
            uninhabitable. The cost-to-coverage ratio is exceptional.
          </p>

          <p>
            Homeowners insurance is broader — it also covers the physical structure of your home —
            and required by every mortgage lender. The math on the policy itself isn't optional,
            but the right coverage levels and the right insurer are.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Side-by-side comparison</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Renters</th>
                  <th className="py-3 pr-4">Homeowners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Typical monthly cost</td><td className="py-3 pr-4">$15–$25</td><td className="py-3 pr-4">$80–$200</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Covers structure</td><td className="py-3 pr-4">No (landlord's)</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Covers possessions</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Personal liability</td><td className="py-3 pr-4">Yes ($100K standard)</td><td className="py-3 pr-4">Yes ($300K standard)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Additional living expenses</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Required by landlord/lender</td><td className="py-3 pr-4">Often required</td><td className="py-3 pr-4">Always required with mortgage</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Flood/earthquake</td><td className="py-3 pr-4">Separate policy needed</td><td className="py-3 pr-4">Separate policy needed</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Renters insurance — what it covers</h2>

          <h3>1. Personal property</h3>

          <p>
            <strong>Reimburses you for stolen, damaged, or destroyed possessions.</strong> Standard
            coverage runs $30K–$50K. Always pick <strong>replacement cost</strong> coverage, not
            "actual cash value" — replacement cost pays what it costs to replace items today;
            actual cash value subtracts depreciation (your 5-year-old laptop is worth almost
            nothing on an ACV basis).
          </p>

          <h3>2. Personal liability</h3>

          <p>
            <strong>Protects you if someone is hurt in your apartment or you damage someone else's
            property.</strong> Standard $100K liability is enough for many renters; bump to $300K if
            you have assets or pets.
          </p>

          <h3>3. Additional living expenses (ALE)</h3>

          <p>
            <strong>Pays for hotels, restaurants, and laundromats if your apartment becomes
            uninhabitable.</strong> A fire forcing 4 months of displacement can easily produce
            $15K+ of expenses; ALE covers it.
          </p>

          <h3>4. Medical payments to others</h3>

          <p>
            Smaller bucket ($1K–$5K) that covers medical bills for minor injuries to guests in your
            apartment, regardless of fault.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Homeowners insurance — what it covers</h2>

          <p>
            A standard HO-3 policy (the most common type) includes:
          </p>

          <h3>1. Dwelling coverage</h3>

          <p>
            <strong>The cost to rebuild your home if it's destroyed.</strong> Sized to "replacement
            cost" — NOT market value. A house with $400K market value might cost $300K to rebuild
            (since you're not buying the land again). Insure for rebuild cost only.
          </p>

          <h3>2. Other structures</h3>

          <p>
            Detached garages, sheds, fences. Typically 10% of dwelling coverage.
          </p>

          <h3>3. Personal property</h3>

          <p>
            Stuff inside the home. Typically 50–70% of dwelling coverage automatically. Add a rider
            for high-value items (jewelry, fine art, collectibles) over their individual policy
            limit.
          </p>

          <h3>4. Loss of use</h3>

          <p>
            Living expenses if your home is uninhabitable. Typically 20% of dwelling coverage.
          </p>

          <h3>5. Personal liability</h3>

          <p>
            $300K standard, often raised to $500K. Covers lawsuits if someone is injured on your
            property or you accidentally damage someone else's stuff.
          </p>

          <h3>6. Medical payments</h3>

          <p>
            Small medical bucket ($1K–$5K) for guest injuries.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What both policies DON'T cover (without additional endorsements)</h2>

          <ul>
            <li><strong>Floods.</strong> Requires National Flood Insurance Program (NFIP) policy or private flood insurance. Standard homeowners explicitly excludes flood damage.</li>
            <li><strong>Earthquakes.</strong> Separate policy required in most states.</li>
            <li><strong>Sewer backup / sump pump failure.</strong> Often a $50–$150/year endorsement.</li>
            <li><strong>Mold above small thresholds.</strong> Limited coverage; major mold remediation usually excluded.</li>
            <li><strong>Routine wear and tear.</strong> Insurance is for sudden accidental events, not gradual aging.</li>
            <li><strong>Intentional damage.</strong> Self-explanatory.</li>
            <li><strong>Home-based business equipment.</strong> Often requires a small business endorsement.</li>
            <li><strong>Identity theft (in some policies).</strong> Often a $30–$50/year add-on if not included.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to size your coverage</h2>

          <h3>For renters</h3>

          <ol>
            <li><strong>Inventory your stuff.</strong> Walk through each room. Total up replacement cost. Most singles need $20K–$40K; families need $40K–$80K.</li>
            <li><strong>Pick replacement cost coverage.</strong> Skip "actual cash value" — much weaker.</li>
            <li><strong>Set liability at $300K</strong> if you have any assets; $100K if you're truly judgment-proof.</li>
            <li><strong>Pick a $500 or $1,000 deductible.</strong> Higher deductible = lower premium; choose what your emergency fund can cover.</li>
          </ol>

          <h3>For homeowners</h3>

          <ol>
            <li><strong>Get a replacement cost estimate.</strong> Your insurer can run one based on square footage, construction, region. Don't accept a market-value-based dwelling number.</li>
            <li><strong>Choose extended replacement cost</strong> (typically 25% above the estimate) — protects against rebuild-cost inflation after major storms.</li>
            <li><strong>Inventory personal property</strong> separately from dwelling. Default 50% of dwelling is often too low for families.</li>
            <li><strong>Add scheduled personal property riders</strong> for jewelry, art, watches, instruments over $1,500 individual value.</li>
            <li><strong>Liability at $500K + umbrella</strong> if net worth justifies it.</li>
            <li><strong>Add flood coverage</strong> if you're in any FEMA flood zone — even "low risk" zones flood.</li>
            <li><strong>Add sewer backup endorsement</strong> ($50–$150/year) — most water damage in homes is sewer-related.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>How to lower the premium</h2>

          <ul>
            <li><strong>Bundle with auto.</strong> 8–15% multi-policy discount.</li>
            <li><strong>Raise deductible</strong> from $500 to $1,000 (~10–15% savings).</li>
            <li><strong>Improve home security.</strong> Monitored alarm, deadbolts, smoke detectors — typically 5–10% off.</li>
            <li><strong>Pay annually instead of monthly.</strong> 5–10% off.</li>
            <li><strong>Stay claims-free.</strong> Filing a small claim often costs more in premium increase than the claim payout.</li>
            <li><strong>Maintain good credit.</strong> Insurance scores correlate with FICO in most states.</li>
            <li><strong>Re-shop every 2–3 years.</strong> Same advice as auto insurance.</li>
          </ul>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Get home + renters quotes →
            </AffiliateButton>
          </p>

          <p>
            Or quote direct:{" "}
            <AffiliateButton partner="geico" source={slug} variant="secondary">GEICO</AffiliateButton>{" "}
            <AffiliateButton partner="progressive" source={slug} variant="secondary">Progressive</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When to file a claim (and when not to)</h2>

          <p>
            <strong>Insurance is for catastrophic loss, not minor repairs.</strong> Filing a small
            claim ($500–$2,000 range) often raises your premium by $100–$300/year for 3–5 years —
            costing more than the claim paid out, plus risking non-renewal.
          </p>

          <ul>
            <li><strong>File:</strong> total loss, major fire, major theft, large liability claim, structural damage.</li>
            <li><strong>Don't file:</strong> minor damage at or near your deductible, things you can fix yourself for under $1K.</li>
            <li><strong>Always file:</strong> events where someone was injured or could later sue — get the carrier involved early.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For renters: get a policy today.</strong> $15–$25/month for $30K+ of stuff
            coverage and $100K+ liability is one of the best insurance dollars available. Most
            landlords now require it anyway.
          </p>

          <p>
            <strong>For homeowners: you'll have a policy whether you want one or not (mortgages
            require it).</strong> The question is whether your coverage levels are right: sized to
            rebuild cost (not market), with extended replacement cost, plus flood and sewer backup
            endorsements in most cases.
          </p>

          <p>
            Re-shop both every 2–3 years and bundle with auto for the discount.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-car-insurance-companies-2026">Best car insurance companies 2026</Link></li>
            <li><Link href="/learn/how-much-car-insurance-do-i-need">How much car insurance do I need?</Link></li>
            <li><Link href="/learn/how-to-lower-car-insurance">How to lower car insurance</Link></li>
            <li><Link href="/learn/how-much-life-insurance-do-i-need">How much life insurance do I need?</Link></li>
            <li><Link href="/learn/how-to-get-a-mortgage">How to get a mortgage</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Protect" currentSlug="renters-vs-homeowners-insurance" />
      </article>
    </>
  );
}
