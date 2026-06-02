import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "ira-rmd-rules";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "IRA Required Minimum Distributions (RMDs): The 2026 rules";
const description =
  "RMDs now start at age 73 (born 1951–1959) or 75 (born 1960+). The penalty for missing one dropped from 50% to 25% (10% if corrected timely). Roth IRAs still have no RMDs. Here's the full rulebook with the math and the dates that matter.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "When do my RMDs start?",
    a: "Born 1950 or earlier: started at age 70½ or 72 (varies by birth year, original rule). Born 1951–1959: starts at age 73. Born 1960 or later: starts at age 75. Set by SECURE 2.0 §107.",
  },
  {
    q: "What accounts require RMDs?",
    a: "Traditional IRAs, SEP IRAs, SIMPLE IRAs, all employer-sponsored plans (401(k), 403(b), 457(b)), and inherited IRAs. Roth IRAs have NO RMDs during the owner's lifetime. Roth 401(k) RMDs were eliminated by SECURE 2.0 starting in 2024.",
  },
  {
    q: "How is the RMD calculated?",
    a: "Divide your December 31 account balance from the prior year by the IRS life expectancy factor for your current age (from the Uniform Lifetime Table in IRS Publication 590-B). At age 73 the factor is 26.5, at 75 it's 24.6, at 80 it's 20.2 — meaning your first RMD is roughly 3.77% of the balance, rising over time.",
  },
  {
    q: "What's the penalty for missing an RMD?",
    a: "SECURE 2.0 §302 cut the excise tax from the historic 50% down to 25% of the missed amount, and to just 10% if you correct the shortfall within a 'correction window' (generally within 2 years and before the IRS sends a notice). Still painful — always take RMDs on time.",
  },
  {
    q: "When is the deadline?",
    a: "December 31 of the RMD year. EXCEPTION: your very first RMD can be delayed to April 1 of the following year. But if you defer the first RMD, you still owe a second RMD by December 31 of that same year — so you'd take two RMDs in one tax year. Usually a bad idea unless you have a very specific tax-bracket reason.",
  },
  {
    q: "Can I aggregate RMDs across multiple IRAs?",
    a: "Yes for IRAs: the total RMD from all your traditional IRAs combined can be taken from any one of them. NOT permitted for 401(k)s — each 401(k) requires its own RMD taken from that specific plan. You also can't mix IRA and 401(k) RMDs.",
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
          subtitle="The forced withdrawal rules on your retirement accounts. Get them wrong and you owe a 25% excise tax. Here's the full rulebook in plain English."
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
            <strong>Required Minimum Distributions (RMDs) are the IRS's way of forcing you to start
            spending — and paying tax on — your tax-deferred retirement accounts.</strong> Roth
            accounts are exempt during the owner's lifetime. Everything else (Traditional IRA, 401(k),
            403(b), inherited IRAs) requires annual withdrawals starting at age 73 or 75 depending
            on birth year.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The starting age — by birth year</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Birth year</th>
                  <th className="py-3 pr-4">RMDs start at age</th>
                  <th className="py-3 pr-4">Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">≤ 1949</td><td className="py-3 pr-4">70½</td><td className="py-3 pr-4">Pre-SECURE</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">1950</td><td className="py-3 pr-4">72</td><td className="py-3 pr-4">SECURE Act 2019</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">1951–1959</td><td className="py-3 pr-4">73</td><td className="py-3 pr-4">SECURE 2.0 §107</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">≥ 1960</td><td className="py-3 pr-4">75</td><td className="py-3 pr-4">SECURE 2.0 §107</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The accounts that require RMDs</h2>

          <ul>
            <li><strong>Traditional IRAs</strong> (including rollover IRAs)</li>
            <li><strong>SEP IRAs and SIMPLE IRAs</strong></li>
            <li><strong>401(k), 403(b), 457(b)</strong> employer plans</li>
            <li><strong>Inherited IRAs</strong> (both Traditional and Roth — yes, Roth too if inherited)</li>
          </ul>

          <h3>NOT required</h3>

          <ul>
            <li><strong>Roth IRAs.</strong> No lifetime RMDs for the original owner. (Beneficiaries do face RMDs on inherited Roth IRAs.)</li>
            <li><strong>Roth 401(k)s.</strong> SECURE 2.0 §325 eliminated Roth 401(k) RMDs starting in 2024. Big change — previously you had to roll Roth 401(k) to Roth IRA at retirement to escape RMDs; now you don't have to.</li>
            <li><strong>HSAs.</strong> Never had RMDs.</li>
            <li><strong>Taxable brokerage accounts.</strong> Personal money, no rules.</li>
            <li><strong>Working at the company sponsoring your 401(k).</strong> If you're still actively employed at 73 (and not a 5%+ owner), you can defer RMDs from that one plan until you leave. Doesn't apply to IRAs.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How the RMD is calculated</h2>

          <p>
            <strong>RMD = Account balance (prior Dec 31) ÷ IRS life expectancy factor (current
            age).</strong>
          </p>

          <p>
            Factors come from the <strong>Uniform Lifetime Table</strong> in IRS Publication
            590-B. The table got an update in 2022 (more favorable, longer lives = smaller RMDs).
            Here are key factors:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Age</th>
                  <th className="py-3 pr-4">Divisor (factor)</th>
                  <th className="py-3 pr-4">Implied RMD %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">73</td><td className="py-3 pr-4">26.5</td><td className="py-3 pr-4">3.77%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">75</td><td className="py-3 pr-4">24.6</td><td className="py-3 pr-4">4.07%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">80</td><td className="py-3 pr-4">20.2</td><td className="py-3 pr-4">4.95%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">85</td><td className="py-3 pr-4">16.0</td><td className="py-3 pr-4">6.25%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">90</td><td className="py-3 pr-4">12.2</td><td className="py-3 pr-4">8.20%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">95</td><td className="py-3 pr-4">8.9</td><td className="py-3 pr-4">11.24%</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Worked example</h3>

          <p>
            <strong>Mary, age 73 in 2026, has $1,200,000 in Traditional IRA balances as of Dec 31,
            2025.</strong>
          </p>

          <ul>
            <li>RMD for 2026 = $1,200,000 ÷ 26.5 = <strong>$45,283</strong></li>
            <li>Mary can take this from any one or several of her Traditional IRAs (aggregation allowed).</li>
            <li>She must withdraw at least $45,283 by December 31, 2026.</li>
            <li>The withdrawal is taxed as ordinary income at her marginal federal + state rate.</li>
            <li>For her FIRST RMD only, she can defer to April 1, 2027 — but then she also owes the 2027 RMD by Dec 31, 2027 (two distributions in one tax year).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The aggregation rules</h2>

          <p>
            <strong>Multiple Traditional IRAs:</strong> sum the balances, calculate the total RMD,
            withdraw the total from any one IRA. The IRS doesn't care which IRA the dollars come
            from as long as the aggregate total is satisfied.
          </p>

          <p>
            <strong>Multiple 401(k)s:</strong> each plan's RMD must come from that specific plan.
            No aggregation across 401(k)s.
          </p>

          <p>
            <strong>Across plan types:</strong> never aggregate. IRA RMDs don't satisfy 401(k)
            RMDs, and vice versa.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The penalty (and how it dropped)</h2>

          <p>
            <strong>Pre-SECURE 2.0, missing an RMD cost a 50% excise tax</strong> on the shortfall
            — the harshest penalty in the tax code. SECURE 2.0 §302 cut it to:
          </p>

          <ul>
            <li><strong>25% excise tax</strong> on the missed amount</li>
            <li><strong>Reduced to 10%</strong> if you correct the shortfall within a "correction window" (generally 2 years after the missed RMD year, and before the IRS sends a deficiency notice). Form 5329 must be filed.</li>
          </ul>

          <p>
            <strong>How to fix a missed RMD:</strong> withdraw the missed amount immediately, file
            Form 5329 with your tax return for the year you missed, attach a written statement
            explaining the reasonable cause, and request a penalty waiver. The IRS frequently
            grants waivers for first-time honest mistakes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>QCDs — the tax-saving move at 70½</h2>

          <p>
            <strong>Qualified Charitable Distributions (QCDs) let IRA owners 70½ and older donate
            directly from an IRA to a qualified charity, tax-free, up to $108,000/year for 2026</strong>
            (annually indexed; 2025 cap was $105,000, 2026 is one of the new indexed amounts).
          </p>

          <ul>
            <li>QCDs count toward your RMD requirement for the year (up to the QCD amount).</li>
            <li>The distribution doesn't show up in AGI — much better than taking the RMD and donating it (which inflates AGI and can trigger Medicare IRMAA and other thresholds).</li>
            <li>Must be a direct trustee-to-charity transfer; check-to-yourself doesn't qualify.</li>
            <li>Eligible at age 70½ even though RMDs don't start until 73 — useful gap years.</li>
          </ul>

          <p>
            If you give to charity anyway, QCDs are almost always the most tax-efficient way to do
            it once you hit 70½. They reduce taxable RMD income dollar-for-dollar.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The inherited-IRA rules (post-SECURE)</h2>

          <p>
            <strong>The SECURE Act of 2019 eliminated the "stretch IRA" for most non-spouse
            beneficiaries.</strong> If you inherit a Traditional or Roth IRA from someone who died
            in 2020 or later:
          </p>

          <ul>
            <li><strong>10-year rule.</strong> Most non-spouse beneficiaries must empty the inherited IRA within 10 years of the original owner's death.</li>
            <li><strong>Annual RMDs within the 10 years.</strong> If the original owner had already started taking RMDs, the beneficiary must take annual RMDs during the 10-year window AND empty the account by year 10. (This was unclear from 2020–2024; final regs in 2024 confirmed it.)</li>
            <li><strong>Eligible Designated Beneficiaries are exempt</strong> from the 10-year rule and can stretch over their life expectancy: surviving spouse, minor children (until majority), disabled or chronically ill, beneficiaries within 10 years of the decedent's age.</li>
          </ul>

          <p>
            <strong>Inherited Roth IRAs</strong> still face the 10-year empty-out rule, but
            distributions are usually tax-free (provided the original owner had held the account 5+
            years before death).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Strategies to minimize lifetime RMDs</h2>

          <h3>1. Roth conversions in low-bracket years</h3>

          <p>
            <strong>The window between retirement (~62–65) and RMD age (73–75) is the prime{" "}
            <Link href="/learn/roth-conversion-ladder">Roth conversion</Link> opportunity.</strong>{" "}
            You're not yet drawing Social Security, your earned income is zero, and your Traditional
            IRA balance hasn't started forced RMDs. Converting at 12% or 22% in those years means
            smaller future RMDs.
          </p>

          <h3>2. QCDs after 70½</h3>

          <p>
            Already covered. If you give to charity, do it through QCDs once eligible.
          </p>

          <h3>3. Working past 73 (where allowed)</h3>

          <p>
            If you're still employed at the company sponsoring your 401(k) (and own less than 5%),
            you can defer RMDs from that one plan until you actually retire. Doesn't apply to IRAs
            or to your other 401(k)s from previous jobs.
          </p>

          <h3>4. Married strategy with younger spouse</h3>

          <p>
            If your spouse is more than 10 years younger AND your sole IRA beneficiary, you use the
            <strong> Joint Life and Last Survivor Expectancy Table</strong> (Table II) instead of
            the Uniform Lifetime Table. The factors are larger, so the RMD percentage is smaller.
            Niche benefit but real.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What to do this year</h2>

          <ol>
            <li><strong>If you turn 73 in 2026:</strong> calculate your RMD using the Dec 31, 2025 balance. Set up the distribution at your brokerage for some time before December 2026.</li>
            <li><strong>If you have multiple Traditional IRAs:</strong> aggregate the balances, withdraw from your highest-cost IRA first (consolidate the better one).</li>
            <li><strong>If you're charitable:</strong> set up QCD direct transfers at age 70½ rather than taking RMDs and donating after-tax.</li>
            <li><strong>If you're 65–72:</strong> seriously consider{" "}
              <Link href="/learn/roth-conversion-ladder">Roth conversions</Link> to shrink future
              RMDs.
            </li>
          </ol>

          <p>
            Your brokerage handles the mechanics. Most major brokerages can compute the RMD
            automatically and set up scheduled distributions:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Set up RMDs at Fidelity →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link></li>
            <li><Link href="/learn/secure-2-0-changes-2026">SECURE 2.0 changes 2026</Link></li>
            <li><Link href="/learn/when-to-take-social-security">When to take Social Security</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link></li>
            <li><Link href="/learn/medicare-basics-2026">Medicare basics 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
