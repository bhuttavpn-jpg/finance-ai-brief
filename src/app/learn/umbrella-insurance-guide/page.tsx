import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "umbrella-insurance-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Umbrella insurance: A $1M policy for under $400/year";
const description =
  "Umbrella insurance sits on top of your auto and home liability — adding $1M–$5M of coverage for catastrophic lawsuits at a cost so low it's the highest dollar-per-coverage value in personal insurance. Here's who needs it and how to size it.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What does umbrella insurance actually cover?",
    a: "Liability claims above your auto and homeowners/renters policy limits. If you cause a car accident with $1M of injuries and your auto liability caps at $300K, the umbrella pays the remaining $700K. Also covers libel, slander, and false arrest claims that base policies typically exclude. It does NOT cover your own injuries or property damage — only liability to others.",
  },
  {
    q: "How much does it cost?",
    a: "Roughly $200–$400/year for $1M of coverage, depending on your driving record, household composition, and underlying policies. Each additional $1M typically adds $75–$150/year. For most households, $1M–$2M of umbrella is the sweet spot — the highest dollar-per-coverage value in personal insurance.",
  },
  {
    q: "Who really needs umbrella insurance?",
    a: "Anyone with assets worth more than their auto/home liability limits. Plaintiff attorneys go after what you have — homes, retirement accounts (in some states), business interests. If your net worth exceeds your liability coverage, an umbrella is almost always worth it. Also: high-risk profiles (teen drivers, pool owners, dog owners, frequent hosts of parties).",
  },
  {
    q: "Do I have to buy it from my existing insurer?",
    a: "Usually yes. Most umbrella carriers require your underlying auto and home policies to be with the same carrier (or at minimum meet certain minimums), because the umbrella sits on top. A few standalone umbrella carriers exist (RLI, Chubb) but they require minimum underlying limits.",
  },
  {
    q: "What underlying limits do I need?",
    a: "Most umbrella carriers require auto liability of at least 250/500/100 ($250K bodily injury per person / $500K per accident / $100K property damage) and home/renters liability of at least $300K. If your current policies are lower (e.g., the state-minimum 25/50/25 some drivers carry), you'll need to bump them up before adding an umbrella.",
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
          subtitle="The most overlooked piece of household insurance. For $200–$400/year, an umbrella policy adds $1M+ of liability protection over your auto and home — the highest dollar-per-coverage value most people can buy."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Most car-accident lawsuits settle for less than the at-fault driver's
            liability limits. The minority that don't can wipe out a lifetime of savings.</strong>{" "}
            An umbrella policy sits above your auto and home liability, adds $1M–$5M of coverage,
            and costs less than a streaming subscription bundle. It's the single best dollar-per-coverage
            buy in personal insurance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How umbrella insurance works</h2>

          <p>
            Think of your liability protection as a stack:
          </p>

          <ol>
            <li><strong>Bottom layer:</strong> Your auto liability ($300K–$500K is common).</li>
            <li><strong>Bottom layer:</strong> Your homeowners or renters liability ($100K–$500K).</li>
            <li><strong>Top layer (umbrella):</strong> Additional $1M–$5M+ that kicks in when the bottom layers are exhausted on a covered claim.</li>
          </ol>

          <p>
            The umbrella covers <strong>most claim types</strong> — auto liability, premises
            liability, libel/slander, false arrest, mental anguish from a covered event. It does NOT
            cover:
          </p>

          <ul>
            <li>Your own injuries (that's health insurance).</li>
            <li>Damage to your own property (that's auto comp/collision and homeowners).</li>
            <li>Intentional acts.</li>
            <li>Business activities (need commercial liability for those).</li>
            <li>Most professional liability (need E&amp;O / malpractice for those).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Realistic scenarios where it pays out</h2>

          <ul>
            <li><strong>Multi-car accident at highway speed.</strong> You're at fault; one passenger in the other car has spinal injuries requiring lifelong care. Settlement: $1.2M. Your auto liability of $300K pays first; umbrella pays the remaining $900K.</li>
            <li><strong>Dog bite.</strong> Your dog bites a delivery driver, who needs reconstructive surgery and sues for $250K. Your renters/homeowners liability is $100K; umbrella covers the remaining $150K.</li>
            <li><strong>Teen driver causes serious accident.</strong> Your kid's at fault; settlement $800K. Even with $500K auto liability, the umbrella covers the difference.</li>
            <li><strong>Pool drowning at your house.</strong> Tragic, common, and high-damages — pools dramatically raise umbrella value.</li>
            <li><strong>You post about someone online.</strong> They sue for defamation. Auto/home don't cover this; umbrella often does (check policy).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How much umbrella to buy</h2>

          <p>
            <strong>Rule of thumb: enough to cover your net worth.</strong> Plaintiff attorneys
            target what you have. If your net worth is $1.5M (home equity + retirement accounts +
            taxable investments + cash), you want at least $1M–$2M of umbrella.
          </p>

          <p>
            <strong>Some assets are protected from creditors in your state</strong> — particularly
            qualified retirement accounts (401(k), often IRAs depending on state), the homestead
            exemption for primary residence (varies wildly by state), and some life insurance cash
            value. The "exposed" portion of net worth is what really matters for umbrella sizing.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Net worth</th>
                  <th className="py-3 pr-4">Recommended umbrella</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Under $500K</td><td className="py-3 pr-4">Consider $1M — premiums are cheap</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$500K–$2M</td><td className="py-3 pr-4">$1M–$2M</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$2M–$5M</td><td className="py-3 pr-4">$3M–$5M</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$5M+</td><td className="py-3 pr-4">$5M+ (and consider asset-protection trusts)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Higher-risk profiles that almost always justify umbrella</h2>

          <ul>
            <li><strong>Teen drivers.</strong> Highest accident-frequency demographic.</li>
            <li><strong>Pool, trampoline, or large dog owners.</strong> Premises-liability magnets.</li>
            <li><strong>Frequent hosts.</strong> Alcohol + guests = social-host liability risk.</li>
            <li><strong>Landlords (1–2 small rentals).</strong> Personal umbrella often covers small rentals; large rental portfolios need commercial.</li>
            <li><strong>Anyone with a public-facing online presence.</strong> Defamation suits, especially for content creators.</li>
            <li><strong>Boat, ATV, or RV owners.</strong> Higher liability ceilings than cars.</li>
            <li><strong>People who do business in/near their home.</strong> Side gigs, in-home services.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually buy it</h2>

          <p>
            Easiest path: call your auto/home insurer and ask. Most majors (GEICO, Progressive,
            State Farm, Allstate, Liberty Mutual, USAA) sell umbrella to existing customers without
            full re-underwriting. You'll need to:
          </p>

          <ol>
            <li>Confirm your auto and home meet the carrier's minimum underlying limits (typically 250/500/100 auto, $300K home/renters).</li>
            <li>Bump them up if needed (this often raises the auto premium $50–$150/year and is required by the umbrella carrier).</li>
            <li>Add the umbrella policy — usually a quick application, sometimes a driving record pull.</li>
          </ol>

          <p>
            <AffiliateButton partner="geico" source={slug}>
              Get an umbrella quote at GEICO →
            </AffiliateButton>{" "}
            <AffiliateButton partner="progressive" source={slug} variant="secondary">Progressive</AffiliateButton>{" "}
            <AffiliateButton partner="policygenius" source={slug} variant="secondary">Policygenius compare</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Carrying state-minimum auto liability.</strong> 25/50/25 limits are insufficient and most umbrella carriers won't write over them — bump auto liability to 250/500/100 first.</li>
            <li><strong>Forgetting to insure all household drivers.</strong> Adult children at college, parents who occasionally drive your car — make sure they're listed on your auto policy or the umbrella may not respond.</li>
            <li><strong>Assuming retirement accounts are protected.</strong> 401(k)s usually are; IRAs and brokerage accounts depend on state and circumstances. Don't bet your retirement on a state exemption without checking.</li>
            <li><strong>Buying too little.</strong> The premium jump from $1M to $2M is small (~$75/year typical) for a 100% increase in coverage. Buy the larger amount.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            For roughly $300/year, you can add $1M of liability protection above your existing auto
            and home policies. That's a no-brainer for almost anyone with assets to protect. If your
            household has teen drivers, a pool, or a meaningful net worth, you should already have
            this — and you should be reading this article wondering why you don't.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-car-insurance-companies-2026">Best car insurance companies 2026</Link></li>
            <li><Link href="/learn/how-to-lower-car-insurance">How to lower car insurance</Link></li>
            <li><Link href="/learn/renters-vs-homeowners-insurance">Renters vs. homeowners insurance</Link></li>
            <li><Link href="/learn/disability-insurance-guide">Disability insurance guide</Link></li>
            <li><Link href="/learn/best-life-insurance-companies-2026">Best life insurance companies 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
