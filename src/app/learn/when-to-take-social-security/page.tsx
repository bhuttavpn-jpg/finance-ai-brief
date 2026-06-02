import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "when-to-take-social-security";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "When to take Social Security: The 62 vs. 67 vs. 70 decision";
const description =
  "Claiming Social Security at 62 cuts your benefit ~30% for life. Waiting until 70 boosts it ~24% above your Full Retirement Age. Here's the math on the break-even, when claiming early actually makes sense, and the spousal-benefit nuances most calculators miss.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the simplest framework for deciding?",
    a: "Three baseline rules: (1) If you expect to live past age 80, claiming at 70 wins on lifetime benefits. (2) If you have a known life-shortening condition, claim early. (3) If you're still working before Full Retirement Age, don't claim — the earnings test claws back $1 for every $2 you earn above $23,400 (2026). For everyone else, the calculus is mostly about cash flow, spousal coordination, and risk of outliving savings.",
  },
  {
    q: "What's Full Retirement Age (FRA)?",
    a: "Born 1955: 66 and 2 months. Born 1956: 66 and 4 months. Born 1957: 66 and 6 months. Born 1958: 66 and 8 months. Born 1959: 66 and 10 months. Born 1960 or later: 67. FRA is the age at which you get 100% of your Primary Insurance Amount (PIA). Claim earlier: reduction. Claim later: bonus.",
  },
  {
    q: "How much does the benefit change at each age?",
    a: "Relative to FRA = 100%: Age 62 → 70% (30% permanent cut), Age 63 → 75%, Age 64 → 80%, Age 65 → 86.67%, Age 66 → 93.33%, Age 67 (FRA for most newer retirees) → 100%, Age 68 → 108%, Age 69 → 116%, Age 70 → 124% (8% per year of delayed retirement credits). No further bonus past age 70.",
  },
  {
    q: "What's the break-even age?",
    a: "Roughly age 80 for the 62 vs. 70 comparison, assuming no investment of early benefits. If you claim at 62, you collect smaller checks earlier; if you wait until 70, you collect larger checks later. The breakeven (where cumulative dollars cross) lands around age 80. Live past 80 and waiting wins; die before 80 and claiming early wins.",
  },
  {
    q: "Does my spouse's claim affect mine?",
    a: "Yes — heavily. A spousal benefit can be up to 50% of the higher earner's PIA, payable at the spouse's FRA. Survivor benefits go up to 100% of the deceased spouse's benefit (including any delayed retirement credits). The general rule: the HIGHER earner should delay (locks in the larger survivor benefit), while the LOWER earner can claim earlier if cash flow demands it.",
  },
  {
    q: "Will Social Security be there for me?",
    a: "The Social Security Trust Fund (per the 2024 Trustees Report) is projected to be depleted in 2033–2035, at which point payroll-tax revenue alone would fund roughly 77–80% of scheduled benefits. Congress has historically intervened before depletion in prior eras (1983 reform). It's prudent planning to assume some benefit reduction is possible if no legislative fix happens — but a complete shutdown of Social Security is not a realistic baseline.",
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
          subtitle="The age you claim Social Security permanently changes your monthly check. Here's how to think about the trade-off without getting lost in calculators."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="12 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Claiming Social Security is a one-time, mostly-irreversible decision that
            changes your monthly check for life.</strong> Claim at 62 and you lock in ~70% of your
            Full Retirement Age (FRA) benefit forever. Wait until 70 and you collect ~124%. The gap
            — about <strong>77%</strong> more per month at 70 vs. 62 — is the biggest lever most
            retirees have.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The benefit-by-claim-age table</h2>

          <p>
            For workers with Full Retirement Age = 67 (born 1960 or later):
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Claim age</th>
                  <th className="py-3 pr-4">% of FRA benefit</th>
                  <th className="py-3 pr-4">Example (FRA = $3,000/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">62</td><td className="py-3 pr-4">70%</td><td className="py-3 pr-4">$2,100/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">63</td><td className="py-3 pr-4">75%</td><td className="py-3 pr-4">$2,250/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">64</td><td className="py-3 pr-4">80%</td><td className="py-3 pr-4">$2,400/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">65</td><td className="py-3 pr-4">86.67%</td><td className="py-3 pr-4">$2,600/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">66</td><td className="py-3 pr-4">93.33%</td><td className="py-3 pr-4">$2,800/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">67 (FRA)</td><td className="py-3 pr-4">100%</td><td className="py-3 pr-4">$3,000/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">68</td><td className="py-3 pr-4">108%</td><td className="py-3 pr-4">$3,240/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">69</td><td className="py-3 pr-4">116%</td><td className="py-3 pr-4">$3,480/mo</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">70</td><td className="py-3 pr-4">124%</td><td className="py-3 pr-4">$3,720/mo</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Past age 70, there are no further delayed retirement credits.</strong> Always
            file by 70.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where the break-even lives</h2>

          <p>
            <strong>The naive break-even between claiming at 62 vs. 70 is around age 80.</strong>{" "}
            (Cumulative dollars collected up to that point are roughly equal.) Live past 80, and
            waiting until 70 wins; die before 80, and claiming at 62 wins.
          </p>

          <p>
            Statistical reality: a 65-year-old non-smoker today has roughly a 50% chance of
            reaching age 85 (Society of Actuaries longevity tables). That majority-survival math is
            why delayed claiming tends to win the lifetime-dollar race for healthy retirees.
          </p>

          <h3>What break-even calculators miss</h3>

          <ul>
            <li><strong>Spousal benefits.</strong> A higher earner who delays creates a larger survivor benefit for the spouse — which can extend over 20+ years past the higher earner's death. Naive calculators ignore this.</li>
            <li><strong>Inflation protection.</strong> Social Security is one of the few inflation-adjusted income streams available to retirees (annual COLA). The "real" value of a delayed, larger check is materially better in high-inflation periods.</li>
            <li><strong>Sequence-of-returns risk.</strong> Drawing more from your portfolio in early retirement (because you delayed claiming) protects against the bond/stock-market downturns of those years. A larger Social Security floor later means less portfolio dependency.</li>
            <li><strong>Tax treatment.</strong> Up to 85% of Social Security is taxable as ordinary income; the rest is tax-free. Coordinating with Roth conversion strategy in early retirement can lower the lifetime tax bill significantly.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>When claiming early (62) actually makes sense</h2>

          <ol>
            <li><strong>Known life-shortening health condition.</strong> If your honest life expectancy is below ~78, claim early.</li>
            <li><strong>Truly need the money to live.</strong> If retirement savings are inadequate and you have no other income, the smaller monthly check at 62 beats the alternative.</li>
            <li><strong>Lower-earning spouse, dual claim coordination.</strong> The lower-earning spouse claims early; the higher-earning spouse delays until 70 to maximize the survivor benefit.</li>
            <li><strong>You will reinvest 100% of benefits.</strong> Rare in practice, but mathematically if you reinvest every check at ~6% real return, claiming at 62 can come out ahead even with longevity. Most retirees do not actually reinvest.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>When waiting until 70 makes the most sense</h2>

          <ol>
            <li><strong>You're healthy with family longevity.</strong> Parents/grandparents lived into their 80s+.</li>
            <li><strong>You're the higher earner with a younger spouse.</strong> Your delayed benefit becomes their survivor benefit — potentially 20+ years of additional payouts.</li>
            <li><strong>You have other retirement income.</strong> Pension, Roth withdrawals, or a portfolio sufficient to cover years 62–70 without Social Security.</li>
            <li><strong>You want maximum longevity insurance.</strong> Social Security is the cheapest lifetime annuity available to most Americans — and inflation-protected. Delaying is the equivalent of buying more annuity for "free" (just forgoing some early checks).</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>The earnings test — and why it matters before FRA</h2>

          <p>
            <strong>If you claim Social Security before Full Retirement Age while still working,
            the Social Security Administration claws back benefits via the "earnings test."</strong>
          </p>

          <ul>
            <li><strong>Below FRA all year:</strong> $1 of benefit withheld for every $2 you earn above $23,400 (2026 limit, indexed annually).</li>
            <li><strong>Year you reach FRA:</strong> $1 of benefit withheld for every $3 you earn above $62,160 (higher limit; only earnings before FRA month count).</li>
            <li><strong>Month you reach FRA:</strong> Earnings test ends. You can earn unlimited.</li>
          </ul>

          <p>
            The withheld dollars aren't permanently lost — they're added back to your monthly check
            after you reach FRA. But for many early claimants who keep working, the earnings test
            makes early claiming a net wash or worse.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Spousal benefits — the often-missed angle</h2>

          <p>
            A spouse (or ex-spouse with a 10+ year marriage that ended in divorce) can claim a
            spousal benefit equal to up to <strong>50% of the higher earner's PIA</strong>, payable
            at the spouse's own Full Retirement Age. Key rules:
          </p>

          <ul>
            <li>The spousal benefit doesn't get delayed-retirement credits — capped at 50% of the higher earner's FRA amount.</li>
            <li>You take the higher of your own retirement benefit or the spousal benefit — not both.</li>
            <li>The higher earner must have already filed for the spouse to be eligible for spousal benefits (no more "file and suspend").</li>
            <li>Divorced spouses: 10+ year marriage, you're currently unmarried, and your ex is eligible (whether or not they've claimed).</li>
          </ul>

          <h3>Survivor benefits</h3>

          <p>
            When the higher earner dies, the surviving spouse can step up to 100% of the deceased's
            benefit (including any delayed retirement credits). This is why delaying as the higher
            earner is so powerful in dual-spouse households: the larger check becomes a lifetime
            inflation-adjusted annuity for the surviving spouse.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Coordination with retirement-account withdrawals</h2>

          <p>
            <strong>Years 62–70 are often the sweet spot for{" "}
            <Link href="/learn/roth-conversion-ladder">Roth conversions</Link>.</strong> You're
            retired (lower or zero earned income), you haven't yet claimed Social Security (so it's
            not bumping your taxable income), and your RMD age (73 or 75) is still years away. You
            can convert Traditional IRA dollars to Roth at the 12% or 22% bracket cheaply.
          </p>

          <p>
            <strong>Once Social Security starts, your taxable income jumps</strong> (up to 85% of
            benefits taxable as ordinary income), making conversions more expensive. The 8 years
            between 62 and 70 are the prime conversion window.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Reality check — Trust Fund depletion</h2>

          <p>
            The Social Security Trust Fund (OASI) is projected to be depleted in 2033–2035 per the
            2024 Trustees Report. At depletion, ongoing payroll-tax revenue would fund roughly
            77–80% of scheduled benefits. Congress has historically intervened ahead of depletion
            (most notably the 1983 reform). It is prudent to plan with a 5–15% benefit-haircut
            scenario in mind, but planning around a complete shutdown is unrealistic.
          </p>

          <p>
            <strong>What this means for the claim decision:</strong> if you're worried about Trust
            Fund changes specifically affecting future delayed-retirement credits, that's a real
            risk — but the magnitude of likely cuts is small relative to the 77% lifetime-benefit
            advantage of waiting from 62 to 70. The math still favors delaying for most healthy
            retirees.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually file</h2>

          <ol>
            <li><strong>Create your my Social Security account at ssa.gov.</strong> View your earnings history, get your personalized benefit estimates at each claim age, and file online when ready.</li>
            <li><strong>File 2–3 months before your target start date.</strong> Benefits don't start the month you file — they start the month you elect, and SSA processes filings in about 30–60 days.</li>
            <li><strong>Pick the exact start month carefully.</strong> Each additional month past FRA adds 0.67% to your benefit. Each month before FRA reduces it by ~0.55%. The decision is monthly, not annual.</li>
          </ol>

          <p>
            If you're still optimizing retirement-account contributions before the Social Security
            decision, make sure your brokerage is set up to handle Roth conversions cleanly:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For most healthy retirees in a dual-spouse household, the highest earner should
            wait until 70 and the lower earner can claim at or near FRA.</strong> For singles
            without longevity concerns: 70 wins on expected lifetime dollars. For anyone with a
            known health condition or genuine cash-flow need: claim earlier, no guilt.
          </p>

          <p>
            Whatever you choose, run your specific numbers in the <strong>SSA Quick Calculator</strong>{" "}
            at ssa.gov, then check the result against a fee-only fiduciary financial advisor —
            especially in a dual-spouse household where survivor-benefit dynamics get complicated.
            See our guide on{" "}
            <Link href="/learn/how-to-choose-a-financial-advisor">how to choose a financial advisor</Link>.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link></li>
            <li><Link href="/learn/fire-movement-guide">FIRE movement guide</Link></li>
            <li><Link href="/learn/how-to-choose-a-financial-advisor">How to choose a financial advisor</Link></li>
            <li><Link href="/learn/secure-2-0-changes-2026">SECURE 2.0 changes 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
