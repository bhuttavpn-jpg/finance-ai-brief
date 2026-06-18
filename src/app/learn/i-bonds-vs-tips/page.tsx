import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "i-bonds-vs-tips";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "I Bonds vs. TIPS: which inflation-protected security wins in 2026?";
const description =
  "I Bonds and TIPS both protect against inflation, but they work very differently. I Bonds pay a fixed rate plus a CPI adjustment with no market price; TIPS trade like regular Treasuries but adjust principal for inflation. Here's the 2026 math, the tax differences, and which to pick when.";
const PUBLISHED = "2026-06-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the simplest difference between I Bonds and TIPS?",
    a: "I Bonds are non-marketable savings bonds you buy directly from TreasuryDirect — they can't be sold or lose principal. TIPS are marketable Treasury securities whose principal adjusts with CPI; you can buy and sell them on the secondary market through any brokerage, and their market price moves with real interest rates.",
  },
  {
    q: "How much can I buy in I Bonds each year?",
    a: "$10,000 per person, per year electronically through TreasuryDirect, plus up to $5,000 in paper I Bonds bought with your federal tax refund. A married couple can buy $20,000 plus $5,000 in paper bonds, and you can buy additional I Bonds in the name of a trust or a child.",
  },
  {
    q: "Are I Bonds and TIPS both tax-advantaged?",
    a: "Both are exempt from state and local income tax. I Bond interest is federal-deferred until you redeem the bond (you can also defer for college expenses). TIPS coupon payments AND the annual principal adjustment are federally taxable each year — that's the phantom-income problem, which is why TIPS are best held in tax-advantaged accounts.",
  },
  {
    q: "When are I Bonds the better choice?",
    a: "When you're holding inflation-protected money for 1–10 years in taxable, value capital preservation over yield, and don't want to think about reinvestment risk. The fixed-rate component (currently 1.20%) plus CPI gives a guaranteed real return with no price volatility.",
  },
  {
    q: "When are TIPS the better choice?",
    a: "When you have more than $10,000 to put to work in a single year, you're investing inside a Roth IRA or 401(k), and you want a longer-duration inflation hedge (10–30 years). TIPS ladders also give you scheduled inflation-adjusted cash flows during retirement.",
  },
  {
    q: "Can I lose money on TIPS?",
    a: "Yes. TIPS prices move inversely with real interest rates. If you buy a 10-year TIPS at a 2% real yield and real yields rise to 3%, the market value falls. Hold to maturity and you'll get the inflation-adjusted principal back; sell early and you can take a real loss. I Bonds have no such risk — TreasuryDirect always redeems at face plus accrued interest.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Invest" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Both are inflation-protected. They behave very differently in your portfolio. Here's the 2026 math on rates, taxes, and which to pick for what."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="8 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>I Bonds and TIPS are the two ways the U.S. Treasury sells inflation protection
            to retail investors.</strong> They sound similar. They&apos;re very different products —
            different purchase mechanics, different tax treatment, different risk profiles.
          </p>

          <p>
            The short answer most people need: <strong>I Bonds for your emergency fund and
            short-term taxable savings, TIPS inside tax-advantaged accounts for longer-duration
            inflation hedging.</strong> The rest of this guide is the math behind that rule and
            the cases where it flips.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second version</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">I Bonds</th>
                  <th className="py-3 pr-4">TIPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Where you buy</td><td className="py-3 pr-4">TreasuryDirect only</td><td className="py-3 pr-4">Any brokerage; TreasuryDirect; bond funds</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Annual purchase cap</td><td className="py-3 pr-4">$10K electronic + $5K paper</td><td className="py-3 pr-4">None</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Maturity</td><td className="py-3 pr-4">30 years (1-yr lock; 5-yr penalty)</td><td className="py-3 pr-4">5, 10, or 30 years</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Market price risk</td><td className="py-3 pr-4">None — Treasury redeems at face</td><td className="py-3 pr-4">Yes — moves with real yields</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Inflation adjustment</td><td className="py-3 pr-4">Variable rate, reset semi-annually</td><td className="py-3 pr-4">Principal adjusts with CPI</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Federal tax</td><td className="py-3 pr-4">Deferred until redemption</td><td className="py-3 pr-4">Annual (coupon + inflation adj)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">State/local tax</td><td className="py-3 pr-4">Exempt</td><td className="py-3 pr-4">Exempt</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best account</td><td className="py-3 pr-4">Taxable</td><td className="py-3 pr-4">Tax-advantaged (Roth IRA, 401(k))</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>How I Bonds work</h2>

          <p>
            An I Bond is a U.S. savings bond with a composite interest rate made up of two pieces:
            a <strong>fixed rate</strong> set at purchase (lasts the life of the bond) and a
            <strong> variable inflation rate</strong> derived from CPI-U, reset every May 1 and
            November 1.
          </p>

          <p>
            The composite rate is: <em>fixed + (2 × semi-annual inflation) + (fixed × semi-annual
            inflation)</em>. In practice, the variable piece dominates: a 1.20% fixed rate paired
            with 1.55% semi-annual inflation produces a composite of roughly 4.32% for that
            six-month window.
          </p>

          <ul>
            <li><strong>1-year lockup.</strong> You can&apos;t redeem at all in the first 12 months.</li>
            <li><strong>5-year penalty.</strong> Redeem before five years and you forfeit the last three months of interest.</li>
            <li><strong>Tax deferral.</strong> Interest accrues monthly but isn&apos;t taxed federally until you redeem (or 30 years passes).</li>
            <li><strong>Education exclusion.</strong> If you use the proceeds for qualified higher-education expenses and meet the income limits, interest can be federally tax-free.</li>
          </ul>

          <p>
            <strong>The buying constraint matters.</strong> You buy I Bonds at TreasuryDirect.gov
            — a federal site with 1990s UX. The $10K cap is per Social Security number per
            calendar year. A married couple maxes at $20,000 plus the $5,000 paper allotment from
            their tax refund.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How TIPS work</h2>

          <p>
            <strong>TIPS are regular Treasury securities</strong> — auctioned by the Treasury,
            traded on the secondary market through any brokerage, priced and yielded daily. The
            twist: the bond&apos;s principal value adjusts up (or down) with CPI-U each month.
          </p>

          <p>
            Coupons are paid semi-annually as a fixed percentage of the inflation-adjusted
            principal. So if you own a 10-year TIPS with a 1.5% coupon and CPI is up 4% over a
            year, the principal grows to $10,400 and the coupon pays 1.5% of that. Inflation
            compounds inside the bond.
          </p>

          <p>
            <strong>The catch is taxes.</strong> The annual principal adjustment is federally
            taxable in the year it happens, even though you don&apos;t receive the cash until
            maturity. This is the &quot;phantom income&quot; problem. In a taxable account, you
            pay tax on inflation gains you haven&apos;t yet realized. In a Roth IRA or 401(k),
            this is a non-issue.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The fixed-rate decision (I Bonds)</h2>

          <p>
            The variable inflation piece is the same for everyone who buys in a given window. What
            differs is the <strong>fixed rate at purchase</strong>, which sticks for 30 years.
            Recent fixed rates have ranged from 0.00% (May 2020) to 1.30% (Nov 2023). The current
            1.20% (May 2026) is historically generous.
          </p>

          <p>
            A 1.20% fixed real rate, locked for 30 years, with state/local tax exemption — that&apos;s
            a strong floor under your purchasing power. If fixed rates fall in November, today&apos;s
            buyers keep the higher floor for life.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The phantom-income problem (TIPS)</h2>

          <p>
            Say you buy a $10,000 10-year TIPS with a 1.5% coupon. CPI rises 4% in year one,
            adjusting principal to $10,400.
          </p>

          <ul>
            <li><strong>Cash received:</strong> ~$156 (1.5% of $10,400) coupon, paid out.</li>
            <li><strong>Cash NOT received:</strong> $400 principal adjustment, locked inside the bond until maturity.</li>
            <li><strong>Federally taxable:</strong> $156 + $400 = $556.</li>
          </ul>

          <p>
            At a 24% marginal bracket, you owe $133 in federal tax on income that includes $96
            you&apos;ll only see in 9 more years. In a taxable account, this drag is real. In a
            Roth IRA, it&apos;s irrelevant. <strong>Hold TIPS in tax-advantaged accounts.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When I Bonds are the right call</h2>

          <ul>
            <li><strong>Inflation-protected emergency fund overflow.</strong> The 1-year lockup is the only deal-breaker; if you can park $10K behind the rest of your liquid emergency fund, I Bonds beat any HYSA on after-tax real return.</li>
            <li><strong>Short-to-medium horizon (1–10 years) in a taxable account.</strong> Tax deferral and no price risk make the after-tax return predictable.</li>
            <li><strong>You want a guaranteed real return floor.</strong> The 1.20% fixed real rate is locked for 30 years.</li>
            <li><strong>College savings (with income limits).</strong> Federal exclusion when proceeds fund qualified higher-education expenses, subject to MAGI phase-outs.</li>
          </ul>

          <p>
            See <Link href="/learn/best-hysa-2026">best HYSAs 2026</Link> for the liquid side of
            the bucket.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When TIPS are the right call</h2>

          <ul>
            <li><strong>Inside a Roth IRA or 401(k).</strong> Phantom income disappears; you get the inflation adjustment tax-free at withdrawal (Roth) or deferred (Traditional).</li>
            <li><strong>You&apos;re investing more than $10K/year in inflation protection.</strong> The I Bond cap forces you into TIPS once the bucket grows.</li>
            <li><strong>Building a TIPS ladder for retirement.</strong> Buy individual TIPS maturing each year of retirement to lock in inflation-adjusted real income.</li>
            <li><strong>You want a long duration hedge.</strong> 30-year TIPS give true long-duration inflation protection no other Treasury product offers.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The tax-equivalent math</h2>

          <p>
            Both products are state-tax-exempt. For a NY/CA/IL resident in a high bracket, that
            exemption alone is worth ~10% on the after-tax yield versus a CD or corporate bond.
          </p>

          <p>
            Use the <Link href="/tools/tax-bracket">tax bracket calculator</Link> to translate a
            stated Treasury yield into the equivalent fully-taxable yield you&apos;d need from a
            corporate bond to match it after state tax. The gap is often the deciding factor for
            high earners in high-tax states.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <p>
            <strong>Mistake 1: Buying TIPS in a taxable account and being surprised by the K-1
            -style phantom-income tax bill.</strong> Move them to a Roth IRA or hold a TIPS fund
            (SCHP, VTIP) that distributes the inflation adjustment as taxable income each year —
            still suboptimal in taxable, but no maturity-year shock.
          </p>

          <p>
            <strong>Mistake 2: Treating I Bonds as liquid.</strong> The 1-year lockup is absolute.
            Build a liquid emergency fund in a HYSA <em>first</em>, then add I Bonds for the next
            tier.
          </p>

          <p>
            <strong>Mistake 3: Selling TIPS before maturity in a panic.</strong> If real yields
            rise, TIPS prices fall; selling locks in the loss. Either hold to maturity or hold
            short-duration TIPS funds (VTIP) where rate sensitivity is small.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to buy</h2>

          <p>
            <strong>I Bonds:</strong> TreasuryDirect.gov is the only option. Plan for the
            government-grade UX.
          </p>

          <p>
            <strong>TIPS:</strong> Any major brokerage. Buy individual TIPS at Treasury auction
            (no commission), on the secondary market, or via a low-cost TIPS fund/ETF:
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Open Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Open Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Open Vanguard →</AffiliateButton>
          </div>

          <p>
            For a one-ticket TIPS solution: Schwab&apos;s SCHP (0.03% ER), Vanguard&apos;s VTIP
            (0.04% ER, short-duration), or Vanguard&apos;s VAIPX (0.06% ER) all give broad TIPS
            exposure for negligible cost.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Fund $10K of I Bonds per spouse per year for short-to-medium taxable inflation
            protection.</strong> After that, layer in TIPS inside a Roth IRA or 401(k) for longer
            duration and uncapped exposure. The two products are complements, not substitutes —
            I Bonds give you a guaranteed real floor in taxable, TIPS give you scalable inflation
            hedging in tax-advantaged accounts.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-hysa-2026">Best HYSAs 2026</Link> — the liquid layer that should come before I Bonds.</li>
            <li><Link href="/learn/how-much-should-emergency-fund-be">How big should your emergency fund be?</Link> — sizing the buckets.</li>
            <li><Link href="/learn/asset-allocation-by-age">Asset allocation by age</Link> — where inflation protection fits in the bigger portfolio.</li>
            <li><Link href="/learn/sequence-of-returns-risk">Sequence-of-returns risk</Link> — why retirees especially need real (not nominal) returns.</li>
            <li><Link href="/learn/qualified-vs-ordinary-dividends">Qualified vs. ordinary dividends</Link> — the broader picture on how investment income is taxed.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link> — picking the right wrapper for TIPS.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Invest" currentSlug={slug} />
      </article>
    </>
  );
}
