import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "roth-ira-5-year-rules";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "The Roth IRA 5-year rules: Two clocks you need to track";
const description =
  "There are actually TWO 5-year rules for Roth IRAs — one for earnings, one for conversions. Confusing them costs people taxes and penalties. Here's exactly how each works, with the IRS ordering rules that determine which money comes out first.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What are the two 5-year rules?",
    a: "(1) The EARNINGS 5-year rule: To withdraw earnings tax-free, your first-ever Roth IRA must have been opened 5+ tax years ago AND you must be 59½ (or meet another qualifying exception like death, disability, first-home purchase). (2) The CONVERSION 5-year rule: Each Roth conversion has its own 5-year clock — withdraw converted dollars within 5 years before age 59½ and you owe a 10% penalty on the converted amount.",
  },
  {
    q: "How is the 5-year period actually measured?",
    a: "It's based on TAX YEARS, not calendar years from the deposit date. A contribution made on April 15, 2026 for tax year 2025 starts the clock January 1, 2025. So a 'first Roth' opened with a 2025-tax-year contribution made in 2026 would be qualified after January 1, 2030 — effectively about 3 years and 9 months in real time.",
  },
  {
    q: "Does each Roth account have its own 5-year clock for earnings?",
    a: "NO — for the earnings rule, the clock starts when you open YOUR FIRST Roth IRA ever and never resets. If you opened your first Roth at age 25 and opened a second Roth at age 50, both accounts are immediately past the earnings 5-year rule.",
  },
  {
    q: "Does each conversion have its own 5-year clock?",
    a: "YES — each Roth CONVERSION starts its own 5-year clock. If you convert $20K in 2026 and another $20K in 2027, those two amounts have separate 5-year clocks. This matters if you withdraw before 59½: converted dollars become penalty-free 5 years after each conversion.",
  },
  {
    q: "What's the IRS ordering rule for Roth withdrawals?",
    a: "Roth withdrawals come out in this order: (1) Contributions first (always tax + penalty free at any time), (2) Conversions next, oldest first (taxable portion subject to 10% penalty if under 59½ and within 5 years of conversion), (3) Earnings last (taxable + 10% penalty if non-qualified). This ordering is automatic and favorable — most early withdrawals just touch the contribution layer with no consequence.",
  },
  {
    q: "Does the 5-year rule still matter after age 59½?",
    a: "Once you're 59½, the conversion 5-year rule no longer applies — converted dollars are always penalty-free. But the EARNINGS 5-year rule still matters: to withdraw earnings tax-free, your first Roth IRA must have been open 5+ tax years. Someone who opens their first Roth at age 60 can take contributions back tax-free immediately, but earnings remain taxable until age 65.",
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
          subtitle="The Roth IRA's biggest landmine isn't the contribution limit — it's two confusingly-similar 5-year rules. Get them straight before you withdraw, convert, or build a Roth conversion ladder."
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
            <strong>There are TWO 5-year rules for Roth IRAs.</strong> They sound similar, they're
            often confused, and getting them wrong costs people money. Both rules govern when you
            can pull money out tax-free or penalty-free — but they apply to different kinds of
            money and have different consequences for failing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two rules at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Aspect</th>
                  <th className="py-3 pr-4">Earnings 5-year rule</th>
                  <th className="py-3 pr-4">Conversion 5-year rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Applies to</td><td className="py-3 pr-4">Earnings (growth) inside Roth</td><td className="py-3 pr-4">Converted Traditional → Roth dollars</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">When clock starts</td><td className="py-3 pr-4">January 1 of the tax year of your FIRST EVER Roth contribution</td><td className="py-3 pr-4">January 1 of the tax year of EACH conversion</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Consequence of breaking</td><td className="py-3 pr-4">Earnings withdrawal becomes taxable (ordinary income) — even after 59½ if rule not met</td><td className="py-3 pr-4">10% early-withdrawal penalty on the converted amount (only if under 59½)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Does it ever go away?</td><td className="py-3 pr-4">Once it's met, all earnings withdrawals are qualified (forever) — but you also need to be 59½ to make it qualified</td><td className="py-3 pr-4">Doesn't apply after age 59½</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">One clock or many?</td><td className="py-3 pr-4">One clock for your entire Roth IRA history</td><td className="py-3 pr-4">A new clock for each separate conversion</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Rule #1 — The earnings 5-year rule</h2>

          <p>
            <strong>To withdraw earnings tax-free from a Roth IRA, BOTH conditions must be met:</strong>
          </p>

          <ol>
            <li>You're 59½ or older (or qualifies for an exception — death, disability, first-home purchase up to $10K), AND</li>
            <li>It has been at least 5 tax years since you opened your FIRST Roth IRA.</li>
          </ol>

          <p>
            If either condition is not met, an earnings withdrawal is "non-qualified" — and the
            earnings portion becomes taxable as ordinary income, often with a 10% penalty too.
          </p>

          <h3>One clock for your entire Roth IRA history</h3>

          <p>
            <strong>Critical:</strong> the 5-year earnings clock starts when you open your FIRST
            EVER Roth IRA. It doesn't reset if you open new Roth IRAs later, roll over a Roth
            401(k) into a Roth IRA, or close an old Roth.
          </p>

          <p>
            <strong>Example.</strong> Sarah opens a Roth IRA at age 25 in 2010 with a $1,000
            contribution. The earnings clock starts January 1, 2010. In 2025, at age 40, she opens
            a SECOND Roth IRA at a different brokerage. That second account is immediately past
            the 5-year earnings rule — the original 2010 contribution covers the whole household.
          </p>

          <h3>The "5 tax years" subtlety</h3>

          <p>
            The clock starts on January 1 of the tax year of your first Roth contribution. A
            contribution made on April 15, 2026 for tax year 2025 starts the clock on January 1,
            2025 — even though the contribution wasn't actually deposited until 15 months later.
          </p>

          <p>
            So if you open your first Roth IRA in early 2026 with a 2025-tax-year contribution,
            you're qualified for the earnings rule starting January 1, 2030 — about 3 years and 9
            months in real time. This is actually a feature, not a bug.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Rule #2 — The conversion 5-year rule</h2>

          <p>
            <strong>When you convert Traditional IRA dollars to Roth, those converted dollars have
            their own 5-year clock.</strong> Pull them out before age 59½ AND within 5 years of
            the conversion, and you owe a 10% early-withdrawal penalty on the converted amount.
          </p>

          <h3>The point of this rule</h3>

          <p>
            Without it, anyone under 59½ could circumvent the IRA early-withdrawal penalty by
            converting Traditional → Roth (a non-taxable event re: the 10% penalty), then
            immediately withdrawing the converted Roth dollars (penalty-free under Roth rules).
            Congress closed the loophole by adding a 5-year wait for converted dollars.
          </p>

          <h3>Each conversion has its own clock</h3>

          <p>
            <strong>Critical:</strong> Multiple conversions = multiple clocks. Convert $20K in
            2026, another $20K in 2027, another $20K in 2028 — each amount has its own 5-year
            window before it becomes penalty-free under 59½.
          </p>

          <p>
            This is precisely why the <Link href="/learn/roth-conversion-ladder">Roth conversion
            ladder</Link> works: convert each year, wait 5 years, then withdraw the oldest
            conversion the year it becomes penalty-free, fund living expenses with that, convert
            another year's worth, repeat.
          </p>

          <h3>After 59½, the conversion clock doesn't matter</h3>

          <p>
            Once you're 59½, converted dollars can come out penalty-free regardless of when the
            conversion happened. The earnings rule still matters separately, but the conversion
            5-year rule is essentially retired at 59½.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The IRS ordering rule — why this often doesn't bite</h2>

          <p>
            <strong>When you withdraw from a Roth IRA, the IRS pulls out money in this order:</strong>
          </p>

          <ol>
            <li><strong>Contributions first.</strong> Your direct annual Roth IRA contributions. Always tax-free AND penalty-free, at any age, for any reason.</li>
            <li><strong>Conversions next, oldest first.</strong> The taxable portion of each conversion (most of it for traditional-to-Roth conversions). Tax-free always (you already paid the tax at conversion time). Penalty-free if you're 59½ OR the 5-year conversion clock has run.</li>
            <li><strong>Earnings last.</strong> All the growth inside the account. Tax-free + penalty-free if qualified (59½ AND 5-year rule met). Otherwise taxable as ordinary income + 10% penalty (with some exceptions).</li>
          </ol>

          <p>
            This ordering is <strong>massively favorable</strong>. It means most early Roth
            withdrawals just touch the contribution bucket — no tax, no penalty, no harm done.
            People can pull out their direct annual contributions at any time without
            consequence.
          </p>

          <h3>Worked example</h3>

          <p>
            <strong>Liam, age 45, has a Roth IRA with:</strong>
          </p>

          <ul>
            <li>$48,000 of direct contributions (over 10 years at $6K/year)</li>
            <li>$60,000 of converted dollars (converted at age 42, 3 years ago)</li>
            <li>$25,000 of earnings (growth inside the account)</li>
            <li>Total balance: $133,000</li>
          </ul>

          <p>
            Liam needs $30,000 in a financial emergency.
          </p>

          <ul>
            <li><strong>Withdrawal of $30,000:</strong> Comes entirely out of the $48,000 contribution layer. Tax-free, penalty-free. <strong>Zero consequences.</strong></li>
            <li><strong>Withdrawal of $60,000:</strong> First $48K is contributions (no consequences). The next $12K dips into converted dollars from age 42 — only 3 years ago, so the 5-year conversion clock hasn't run. Penalty: 10% × $12K = $1,200. Tax: zero (he already paid tax at conversion).</li>
            <li><strong>Withdrawal of $115,000:</strong> $48K contributions (clean) + $60K conversions ($6K penalty since under 5-year window) + $7K earnings (taxable + 10% penalty since not 59½). Painful.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The Roth 401(k) wrinkle</h2>

          <p>
            <strong>Roth 401(k)s have their OWN separate 5-year clock</strong> from your Roth IRA.
            Money inside a Roth 401(k) is governed by that plan's 5-year clock, which started when
            your first Roth 401(k) contribution was made under that specific plan.
          </p>

          <p>
            When you leave the employer, you have options:
          </p>

          <ul>
            <li><strong>Roll Roth 401(k) → Roth IRA:</strong> the contributions count toward your Roth IRA's existing 5-year clock. Effectively merges the two clocks (using the EARLIER of them).</li>
            <li><strong>Leave it as Roth 401(k):</strong> the Roth 401(k) clock keeps running. Required minimum distributions historically applied to Roth 401(k)s but SECURE 2.0 §325 eliminated them starting 2024.</li>
          </ul>

          <p>
            <strong>Tactical move:</strong> Open a small Roth IRA early in your career — even
            $1,000 — to start your Roth IRA 5-year clock. Years later, if you roll a Roth 401(k)
            into that Roth IRA, the older clock applies. Some advisors call this the "$1,000
            preservation" strategy.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ol>
            <li><strong>Thinking the 5-year clock resets with each new Roth IRA.</strong> It doesn't (for the earnings rule). Once your first Roth is 5 years old, all your Roth IRAs are qualified for the earnings rule.</li>
            <li><strong>Thinking the conversion 5-year clock matters after 59½.</strong> It doesn't. Past 59½, converted dollars are always penalty-free.</li>
            <li><strong>Confusing the earnings rule and the conversion rule</strong> when planning a Roth conversion ladder. The ladder relies on the CONVERSION 5-year rule, not the earnings rule. Each year's conversion has its own clock.</li>
            <li><strong>Forgetting to start the clock early.</strong> Open your first Roth IRA the year you have ANY earned income — even with a small $1K contribution — to start the earnings clock. The deposit itself doesn't matter; the clock does.</li>
            <li><strong>Mixing Roth IRA contributions and conversions on Form 8606.</strong> Conversions go on Form 8606 Part II; contributions don't go on Form 8606 at all. Mislabeling can confuse the IRS years later.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>What to do this year</h2>

          <ol>
            <li><strong>If you don't have a Roth IRA yet:</strong> open one and contribute any amount this year, even $100. The clock starts the day your first contribution posts to a tax year.</li>
            <li><strong>If you're planning a Roth conversion ladder:</strong> each annual conversion has its own clock. Plan 5 years ahead — see our <Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link> guide for the mechanics.</li>
            <li><strong>If you have a Roth 401(k):</strong> when you change jobs, weigh rolling it into your Roth IRA to consolidate clocks vs. keeping it separate.</li>
            <li><strong>If you're considering an early withdrawal:</strong> figure out your contribution / conversion / earnings layers using the IRS ordering rules above. Most early withdrawals just touch contributions and are completely fine.</li>
          </ol>

          <p>
            Open or move your Roth IRA to a major brokerage. All three offer $0 minimums + no
            account or commission fees on Roth IRAs:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Roth IRA at Fidelity →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link></li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link></li>
            <li><Link href="/learn/mega-backdoor-roth-guide">Mega backdoor Roth guide</Link></li>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link></li>
            <li><Link href="/learn/ira-rmd-rules">IRA RMD rules</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
