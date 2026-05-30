import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "backdoor-roth-ira-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Backdoor Roth IRA: A step-by-step guide for high earners (2026)";
const description =
  "How high-income earners legally fund a Roth IRA: the two-step backdoor strategy, the pro-rata rule trap, the exact paperwork (Form 8606), and the order in which to do the conversion.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Is the backdoor Roth IRA legal?",
    a: "Yes. The IRS has explicitly acknowledged the backdoor Roth strategy — the 2017 Tax Cuts and Jobs Act conference report stated that Roth conversions of non-deductible IRA contributions are permitted. There is no income limit on conversions, only on direct Roth contributions. As long as you follow the paperwork (Form 8606), the strategy is fully compliant.",
  },
  {
    q: "Who needs a backdoor Roth IRA?",
    a: "High earners whose income is above the direct Roth contribution limit. For 2026, that's modified AGI above $168,000 (single/HOH) or $252,000 (married filing jointly). If your income is below the phase-out range, just contribute directly to a Roth IRA — there's no benefit to the backdoor route. If your MAGI sits inside the phase-out, you can make a partial direct contribution plus a backdoor for the remainder.",
  },
  {
    q: "What is the pro-rata rule and why does it matter?",
    a: "The pro-rata rule says that when you convert a non-deductible IRA contribution to Roth, the IRS treats the conversion as a proportional mix of pre-tax and post-tax money across all your traditional, SEP, and SIMPLE IRAs combined. If you have $94,000 of pre-tax IRA money and add $7,500 of new non-deductible money, then convert $7,500, only ~7.4% of that conversion is tax-free — the rest is taxable. The fix is to roll any existing pre-tax IRA balances into your 401(k) before doing the backdoor.",
  },
  {
    q: "Can I do a backdoor Roth every year?",
    a: "Yes, every tax year — the contribution and conversion are annual events tied to the IRA contribution limit. Most people contribute and convert within a few days each January or February, repeat the next year, and so on. There's no lifetime cap; the only constraint is the annual contribution limit ($7,500 in 2026, $8,600 if you're 50+).",
  },
  {
    q: "What is Form 8606 and do I have to file it?",
    a: "Yes — Form 8606 is the IRS form that tracks your non-deductible (basis) contributions to a Traditional IRA. You file it with your tax return for the year you make the non-deductible contribution and the year you do the conversion. Skipping it can cost you: without basis on file, the IRS may tax your conversion fully even though you already paid tax on the contribution.",
  },
  {
    q: "Is the backdoor Roth still worth it for high earners?",
    a: "For most high earners, yes. A $7,500 Roth contribution growing tax-free for 25–30 years can build into a six-figure account, and Roth withdrawals in retirement won't push you into a higher tax bracket. The strategy takes maybe 30 minutes of work each year. The math is even stronger if you also have access to a mega backdoor Roth via your 401(k), but the standard backdoor Roth alone is worthwhile.",
  },
];

const STEPS = [
  { name: "Clear out pre-tax IRA balances", text: "Before contributing, roll any existing Traditional, SEP, or SIMPLE IRA balances into your current 401(k) (if it accepts incoming rollovers). This avoids the pro-rata rule." },
  { name: "Open a Traditional IRA", text: "If you don't already have one, open a Traditional IRA at the same brokerage as your Roth IRA (Fidelity, Vanguard, Schwab, etc.)." },
  { name: "Make a non-deductible contribution", text: "Contribute up to the annual IRA limit ($7,500 in 2026, $8,600 if age 50+). Do not deduct this on your taxes — it's a non-deductible contribution." },
  { name: "Wait briefly, then convert", text: "Within a few days, convert the entire Traditional IRA balance to your Roth IRA. The brokerage usually has a one-click 'Convert to Roth' button." },
  { name: "File Form 8606", text: "On your tax return, file IRS Form 8606 to document the non-deductible contribution (Part I) and the conversion (Part II). Keep copies indefinitely." },
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
      <JsonLd
        data={howToJsonLd({
          name: "Execute a backdoor Roth IRA conversion",
          steps: STEPS,
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="A legal workaround for high earners locked out of direct Roth contributions. The strategy is simple; the pro-rata rule is the trap that catches people. Here's how to do it right."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="12 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The backdoor Roth IRA is how high earners legally fund a Roth account when
            their income disqualifies them from contributing directly.</strong> Two steps:
            contribute to a Traditional IRA, then convert it to Roth.
          </p>

          <p>
            <strong>The strategy is short.</strong> The pitfall — the pro-rata rule — is what trips
            people up, because it can turn what looks like a tax-free conversion into a partially
            taxable event. This guide shows the exact sequence, the trap to avoid, and the
            paperwork the IRS expects.
          </p>

          <p>
            None of this is exotic. The IRS has openly acknowledged the strategy, and millions of
            high earners do it every January.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who needs the backdoor Roth</h2>

          <p>
            <strong>You need the backdoor route only if your income exceeds the direct Roth
            limits.</strong> For 2026, the IRS Roth IRA contribution phase-outs are:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Filing status</th>
                  <th className="py-3 pr-4">Full contribution under</th>
                  <th className="py-3 pr-4">No contribution at or above</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Single / HOH</td><td className="py-3 pr-4">$153,000</td><td className="py-3 pr-4">$168,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing jointly</td><td className="py-3 pr-4">$242,000</td><td className="py-3 pr-4">$252,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing separately</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$10,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Below the phase-out, just contribute directly to a Roth IRA.</strong> The
            backdoor adds paperwork without benefit. Above the phase-out, the backdoor is the only
            way to get money into a Roth (other than a Roth 401(k) at work).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The strategy in two steps</h2>

          <p>
            <strong>Step 1:</strong> contribute up to <strong>$7,500</strong> (2026 limit) to a
            <strong> Traditional IRA</strong>. Because your income is high, this contribution is
            non-deductible — it goes in with after-tax money.
          </p>

          <p>
            <strong>Step 2:</strong> a few days later, convert the entire Traditional IRA balance
            to a <strong>Roth IRA</strong>. Conversions have no income limit. The contribution was
            after-tax, so there&apos;s no additional tax on the conversion — provided you have no
            other pre-tax IRA balances (see the pro-rata rule below).
          </p>

          <p>
            The result: $7,500 sitting in a Roth IRA, growing tax-free for the rest of your life.
            Repeat every year.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The pro-rata rule: the trap that catches people</h2>

          <p>
            <strong>The IRS does not let you cherry-pick which IRA dollars you convert.</strong>
            For backdoor Roth purposes, the IRS aggregates <strong>all your Traditional, SEP, and
            SIMPLE IRA balances</strong> and treats any conversion as a proportional mix of pre-tax
            and post-tax money.
          </p>

          <p>
            <strong>An example.</strong> You have $94,000 of pre-tax money in an old Traditional
            IRA (from a 401(k) rollover years ago) and you make a $7,500 non-deductible
            contribution. Your IRA &quot;basis&quot; (post-tax money) is $7,500 out of a total
            $101,500 — only <strong>~7.4%</strong>.
          </p>

          <p>
            <strong>When you convert $7,500 to Roth, only 7.4% is tax-free.</strong> The other
            ~92.6% — about $6,945 — is treated as a taxable distribution from your pre-tax IRA,
            even though the conversion looked like it was your fresh non-deductible contribution.
            At a 32% marginal rate, that&apos;s ~$2,200 of surprise tax.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The fix: roll pre-tax IRA money into your 401(k) first</h2>

          <p>
            <strong>401(k) balances don&apos;t count in the pro-rata calculation</strong> — only
            IRAs do. If you move your old pre-tax IRA money into your current employer&apos;s
            401(k), the IRA balance goes to $0 and the backdoor conversion becomes fully tax-free.
          </p>

          <ol>
            <li><strong>Check whether your 401(k) accepts incoming rollovers.</strong> Most do; call HR or your plan administrator to confirm.</li>
            <li><strong>Initiate a rollover from your IRA into the 401(k).</strong> Your IRA custodian (Fidelity, Vanguard, Schwab) handles this with a form; it usually takes 1–2 weeks.</li>
            <li><strong>Confirm the IRA balance shows $0</strong> before doing your backdoor contribution. Both balances must be zero at year-end for a clean backdoor in that tax year.</li>
            <li><strong>Now do your annual backdoor Roth.</strong>The pro-rata rule has nothing to pro-rate.</li>
          </ol>

          <p>
            <strong>SEP and SIMPLE IRAs also count toward the pro-rata math.</strong>
            Self-employed people with a SEP-IRA usually need to roll that into a Solo 401(k)
            before they can cleanly do the backdoor.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The full five-step walkthrough</h2>

          <ol>
            <li>
              <strong>Clear out pre-tax IRA balances</strong> — roll any Traditional, SEP, or
              SIMPLE IRAs into your current 401(k) so the IRA balance is $0. This step is critical
              and gets skipped most often.
            </li>
            <li>
              <strong>Open a Traditional IRA</strong> at the same brokerage as your Roth (Fidelity,
              Vanguard, Schwab). If you already have one with a $0 balance after step 1, skip this.
            </li>
            <li>
              <strong>Make a non-deductible contribution</strong> — up to $7,500 (2026 limit;
              $8,600 if 50+). When you file taxes, mark this contribution as non-deductible. Do
              not claim a tax deduction.
            </li>
            <li>
              <strong>Wait a few days, then convert to Roth.</strong> Some brokerages let you
              convert immediately; many advisors recommend waiting a few business days for the
              contribution to fully settle. Convert the <em>entire</em> Traditional IRA balance —
              including any pennies of interest earned during the wait.
            </li>
            <li>
              <strong>File Form 8606</strong> with your tax return. Part I documents the
              non-deductible contribution; Part II documents the conversion. The form establishes
              your basis so the IRS doesn&apos;t double-tax you.
            </li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Form 8606 — the paperwork that protects you</h2>

          <p>
            <strong>Form 8606 is the only piece of paperwork that distinguishes a clean backdoor
            Roth from a taxable mess.</strong> File it for every year you make a non-deductible
            contribution and every year you do a conversion.
          </p>

          <p>
            <strong>Why it matters:</strong> the IRS doesn&apos;t automatically know your IRA basis
            (the after-tax money you&apos;ve already paid tax on). Without 8606 on file, a future
            audit could treat your entire conversion as taxable income.
          </p>

          <ul>
            <li><strong>Part I</strong> — Non-deductible contributions to Traditional IRAs.</li>
            <li><strong>Part II</strong> — Roth conversions for the year.</li>
            <li><strong>Keep copies forever.</strong> Basis carries forward across decades; tax software handles this if you enter the data every year.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How much is the backdoor Roth worth?</h2>

          <p>
            <strong>$7,500 a year, growing tax-free, compounds into real money.</strong> Here&apos;s
            what consistent backdoor Roth contributions look like at a 7% real return.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Years contributing</th>
                  <th className="py-3 pr-4">Total contributed</th>
                  <th className="py-3 pr-4">Roth balance (7% real)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">10</td><td className="py-3 pr-4">$75,000</td><td className="py-3 pr-4">~$108,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">20</td><td className="py-3 pr-4">$150,000</td><td className="py-3 pr-4">~$320,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">30</td><td className="py-3 pr-4">$225,000</td><td className="py-3 pr-4">~$740,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Every dollar of that balance is yours to withdraw tax-free in retirement</strong>
            once you&apos;re 59½. For high earners likely to be in a high tax bracket later, the
            after-tax value of $740,000 in a Roth easily beats the same dollars in a Traditional
            IRA — and the strategy costs 30 minutes a year.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Ignoring the pro-rata rule.</strong> Pre-existing pre-tax IRA balances destroy the math. Roll them into a 401(k) first.</li>
            <li><strong>Deducting the contribution by accident.</strong> Tell your CPA or tax software the contribution is non-deductible. Otherwise you&apos;ll be double-taxed when you convert.</li>
            <li><strong>Not filing Form 8606.</strong> Without it, you have no documented basis. Years from now, you might owe tax on money you already paid tax on.</li>
            <li><strong>Waiting too long between contribution and conversion.</strong> The longer you wait, the more taxable growth accumulates inside the Traditional IRA — taxable when converted. A few business days is enough.</li>
            <li><strong>Leaving pennies behind.</strong> Convert the full balance. A $0.34 stub of interest creates a Form 8606 mess next year.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where to do the backdoor Roth</h2>

          <p>
            <strong>Any major brokerage supports the strategy</strong> — open a Traditional IRA and
            a Roth IRA at the same firm, contribute, convert, done. Fidelity, Vanguard, and Schwab
            all have one-click &quot;Convert to Roth&quot; flows that take under a minute.
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open Traditional + Roth IRAs at Fidelity →
            </AffiliateButton>
          </p>

          <p>You can also use:</p>
          <ul>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Open at Vanguard</AffiliateButton></li>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Open at Schwab</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The backdoor Roth is a 30-minute-a-year strategy that quietly builds a
            tax-free retirement bucket.</strong> The mechanics are simple. The pro-rata rule is
            the only real trap — clear pre-tax IRA balances into a 401(k) first, then file Form
            8606 every year.
          </p>

          <p>
            For high earners locked out of direct Roth contributions, this is the cleanest way to
            keep adding to a Roth account year after year. Set a calendar reminder for January,
            run the two steps, file the form, repeat.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link> — the annual cap you&apos;re working with.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link> — why Roth dollars are valuable to a high earner.</li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which to fund first</Link> — the order of operations including the backdoor.</li>
            <li><Link href="/learn/tax-loss-harvesting-guide">Tax-loss harvesting</Link> — the next high-earner tax move.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
