import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-much-to-contribute-to-401k";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How much should I contribute to my 401(k)? (2026)";
const description =
  "A practical guide to the right 401(k) contribution percentage — from match-first to maxing out — with the math on what each percentage does to your paycheck and your retirement balance.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What percentage of my salary should I put in my 401(k)?",
    a: "A common target is 15% of pre-tax income across all retirement accounts (401(k) + IRA + HSA). The floor is whatever percentage captures your full employer match — that's free money you should never leave on the table. From there, work up to 15% as your budget allows. High earners maxing the $24,500 (2026) limit are saving even more.",
  },
  {
    q: "Should I max out my 401(k)?",
    a: "If you can afford it and have already filled higher-priority buckets (employer match, Roth IRA), maxing the 401(k) is one of the highest-leverage moves in personal finance. The 2026 limit is $24,500 employee deferral, plus an $8,000 catch-up at 50+ (IRS news release IR-2025-111). At a 24% marginal bracket, maxing a Traditional 401(k) cuts your federal tax by ~$5,880 in year one.",
  },
  {
    q: "Is 6% enough for retirement?",
    a: "6% is usually only enough if your employer matches dollar-for-dollar up to 6% (meaning total contributions are 12%) and you started in your early 20s. For most workers contributing 6% on a normal 3% match (total 9%), it's not enough — you'll likely fall short of replacing 80% of your pre-retirement income. Aim for 15% combined contributions.",
  },
  {
    q: "Roth or Traditional 401(k) — which should I pick?",
    a: "Roughly: if you're early-career and your tax bracket will likely be higher in retirement than today, choose Roth. If you're mid-late career, high-earning, and expect a lower bracket in retirement, choose Traditional. Many people split contributions between the two to hedge. There's no income limit on Roth 401(k) contributions, which makes them especially attractive to high earners locked out of direct Roth IRA contributions.",
  },
  {
    q: "What's the 401(k) limit for 2026?",
    a: "$24,500 employee elective deferral, plus an $8,000 catch-up contribution if you're 50 or older (per IRS news release IR-2025-111). Total for 50+: $32,500. Ages 60–63 get an enhanced SECURE 2.0 catch-up of $11,250 instead of $8,000. Combined employee + employer contributions cap at the lesser of 100% of your salary or roughly $74,500 (also COLA-adjusted). The IRA limit is separately $7,500.",
  },
  {
    q: "When should I prioritize my IRA over my 401(k)?",
    a: "After capturing the full 401(k) employer match, fund your IRA before contributing additional 401(k) dollars. The IRA usually has lower fees, broader investment selection, and (in the Roth case) better tax treatment. Once you've maxed the $7,500 IRA, come back to the 401(k) and increase contributions until you hit your 15% target or the $24,500 cap.",
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
          subtitle="A floor of whatever captures the full match, a target of 15% of pre-tax income, and a cap at the IRS limit. Here's how to land at the right number for your salary and stage."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Contribute at least enough to capture your full employer match.</strong> From
            there, work toward saving <strong>15% of pre-tax income</strong> across all retirement
            accounts (401(k) + IRA + HSA). The 2026 cap is <strong>$24,500</strong>.
          </p>

          <p>
            <strong>The right percentage depends on three things:</strong> your match formula, what
            you can sustainably afford after rent and bills, and where the 401(k) sits in your full
            retirement-savings stack. There&apos;s a clear order of operations and a target number
            most people should aim at.
          </p>

          <p>
            This guide walks the order, shows what each contribution percentage actually does to
            your paycheck and retirement balance, and gives you a starting point you can ratchet up
            with each raise.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two numbers that anchor the decision</h2>

          <p>
            <strong>The floor — get the full match.</strong> If your employer matches 50% on the
            first 6% you contribute, contributing 6% triggers a 3% bonus from them. Contributing
            less leaves free money on the table. Whatever percentage you need to capture <em>every
            dollar</em> of available match is your non-negotiable floor.
          </p>

          <p>
            <strong>The target — 15% of pre-tax income.</strong> Across all retirement accounts.
            That includes the employer match. Most retirement-planning research, including
            Fidelity&apos;s widely-cited age-based benchmarks, points to roughly 15% as the rate
            that puts a typical worker on track to maintain their lifestyle in retirement.
          </p>

          <p>
            <strong>The cap — $24,500 in 2026.</strong> That&apos;s the IRS employee deferral
            limit. If you can afford it, hitting the cap puts retirement savings on autopilot at
            the strongest possible level.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What each contribution rate actually does</h2>

          <p>
            <strong>Here&apos;s how four common contribution rates play out for a $75,000 earner</strong>
            with a 50%-on-the-first-6% match, projected to age 65, at a 7% real return.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Your contribution</th>
                  <th className="py-3 pr-4">Match (3%)</th>
                  <th className="py-3 pr-4">Total annual savings</th>
                  <th className="py-3 pr-4">Balance after 30 yrs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">3% ($2,250)</td><td className="py-3 pr-4">$1,125 (partial)</td><td className="py-3 pr-4">$3,375</td><td className="py-3 pr-4">~$319,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">6% ($4,500) — full match</td><td className="py-3 pr-4">$2,250 (full)</td><td className="py-3 pr-4">$6,750</td><td className="py-3 pr-4">~$638,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">12% ($9,000)</td><td className="py-3 pr-4">$2,250</td><td className="py-3 pr-4">$11,250</td><td className="py-3 pr-4">~$1,064,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">15% ($11,250)</td><td className="py-3 pr-4">$2,250</td><td className="py-3 pr-4">$13,500</td><td className="py-3 pr-4">~$1,277,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The 3%-vs-6% gap is the most expensive mistake in personal finance.</strong>
            Doubling from 3% to 6% doesn&apos;t just double your contribution — it also doubles the
            match, and the combined effect doubles your retirement balance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The order of operations</h2>

          <p>
            <strong>For most workers, the right sequence is fixed.</strong> Follow it in order,
            stop when you run out of money to save.
          </p>

          <ol>
            <li><strong>Contribute to the 401(k) up to the full match.</strong> Free money.</li>
            <li><strong>Pay off high-interest debt</strong> (credit cards, anything over ~8%) before adding more retirement contributions. A 22% APR balance crushes a 7% expected market return.</li>
            <li><strong>Max your IRA.</strong> $7,500 in 2026. Usually a Roth IRA unless your bracket is high. See <Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link>.</li>
            <li><strong>Max your HSA</strong> if you&apos;re on a high-deductible health plan. Triple tax advantage — uniquely powerful.</li>
            <li><strong>Back to the 401(k).</strong> Increase your contribution rate until you hit 15% total, or the $24,500 cap, whichever you can sustain.</li>
            <li><strong>Taxable brokerage</strong> for anything beyond.</li>
          </ol>

          <p>
            <strong>The full reasoning for this order</strong> lives in our deeper guide:
            <Link href="/learn/401k-vs-ira-which-first"> 401(k) vs. IRA: which should you fund
            first</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What if 15% feels impossible?</h2>

          <p>
            <strong>Most people don&apos;t start at 15%. They climb there.</strong> Two strategies
            do most of the work.
          </p>

          <ul>
            <li>
              <strong>The annual 1% ratchet.</strong> Increase your contribution rate by 1
              percentage point every January. The pay raise mostly absorbs the drop in
              take-home; in five years you&apos;ve gone from 6% to 11% without feeling it.
            </li>
            <li>
              <strong>Save half of every raise.</strong> If you get a 4% raise, increase your
              contribution by 2 percentage points. Lifestyle creep slows, retirement balance
              jumps.
            </li>
          </ul>

          <p>
            <strong>Auto-escalation</strong> is built into most workplace plans now — opt in once
            and the 1% ratchet happens automatically.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What does maxing out look like?</h2>

          <p>
            <strong>$24,500 is roughly $943 per biweekly paycheck</strong> in pre-tax dollars. For
            a $120,000 earner, that&apos;s about a 20% contribution rate. Hitting the cap is a
            stretch goal — typically a household decision rather than a starting point.
          </p>

          <p>
            <strong>Why max out?</strong> A maxed 401(k) plus a maxed Roth IRA plus a modest HSA
            puts you at roughly $34,000 a year in tax-advantaged retirement savings. Over 25 years
            at 7% real, that compounds to roughly <strong>$2.15 million</strong>. Few people
            regret hitting that number; many regret coasting at 6%.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Roth 401(k) vs. Traditional 401(k)</h2>

          <p>
            <strong>Roth contributions are after-tax; Traditional contributions are pre-tax.</strong>
            The right split depends on your bracket today vs. your expected bracket in retirement.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">If you expect…</th>
                  <th className="py-3 pr-4">Choose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">A higher bracket in retirement than today (early career, climbing)</td><td className="py-3 pr-4">Roth 401(k)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">A lower bracket in retirement than today (high-earning years now)</td><td className="py-3 pr-4">Traditional 401(k)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Roughly the same, or you can&apos;t guess</td><td className="py-3 pr-4">Split 50/50</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The employer match is always made in Traditional (pre-tax) dollars,</strong>
            regardless of which type you choose for your own contributions. So your account ends
            up with both flavors of money — Roth principal grows tax-free, Traditional principal
            is tax-deferred.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>A simple action plan</h2>

          <ol>
            <li><strong>Run the match calculator</strong> — confirm your match formula and the percentage you need to contribute. <Link href="/tools/401k-match">401(k) match calculator</Link>.</li>
            <li><strong>Log into your 401(k) provider</strong> and set your contribution to that percentage today.</li>
            <li><strong>Open or fund your Roth IRA</strong> to the $7,500 cap (if eligible). See <Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link>.</li>
            <li><strong>Set auto-escalation</strong> to add 1% to your 401(k) rate every January until you hit 15% total or the cap.</li>
            <li><strong>Don&apos;t check the balance often</strong>. The market will swing. Your contribution rate is what compounds.</li>
          </ol>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Roth IRA at Fidelity →
            </AffiliateButton>
          </p>

          <p>You can also fund the IRA at:</p>
          <ul>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton></li>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Floor: enough to get the full match. Target: 15% of pre-tax income. Ceiling:
            the $24,500 IRS cap.</strong> Most people should start at the floor, ratchet up 1%
            each January, and reroute IRA-eligible dollars to a Roth IRA before pushing the
            401(k) past the match.
          </p>

          <p>
            The exact percentage matters less than starting today and increasing each year. A
            decade of consistent contributions, even at modest rates, beats a perfect plan that
            never gets executed.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which to fund first</Link> — the full order of operations.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link> — pre-tax vs. post-tax choice.</li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link> — the IRA cap to pair with the 401(k).</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — for high earners locked out of direct Roth contributions.</li>
            <li><Link href="/tools/401k-match">401(k) match calculator</Link> — quantify your match.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Invest" currentSlug="how-much-to-contribute-to-401k" />
      </article>
    </>
  );
}
