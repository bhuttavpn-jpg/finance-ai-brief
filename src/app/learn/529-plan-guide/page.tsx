import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "529-plan-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "529 plans: The college savings account that finally got flexible";
const description =
  "A 529 plan grows tax-free for qualified education costs and — thanks to SECURE 2.0 — leftover balances can now roll into a Roth IRA. Here's how the state tax break works, which plans are best, and the new $35,000 Roth rollover rule.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is a 529 plan in one sentence?",
    a: "A state-sponsored, tax-advantaged investment account where contributions grow tax-free and withdrawals are tax-free if used for qualified education expenses (college tuition, room and board, K–12 tuition up to $10,000/year, apprenticeships, and student loan repayments up to a $10,000 lifetime cap).",
  },
  {
    q: "Can I use any state's 529, or do I have to use my home state's?",
    a: "You can invest in any state's plan, regardless of where you live or where the beneficiary will attend school. BUT — about 35 states offer a state income tax deduction or credit only if you use your home state's plan. So step one: check your state's deduction. If it's generous, use the home plan. If your state has no deduction (or no income tax — TX, FL, etc.), shop the country for the best low-fee plan.",
  },
  {
    q: "What if my kid doesn't go to college, or doesn't use the whole balance?",
    a: "As of 2024, SECURE 2.0 lets you roll up to $35,000 (lifetime cap) from a 529 into a Roth IRA in the beneficiary's name. The 529 must be 15+ years old. Annual rollover is capped at the IRA contribution limit ($7,500 in 2026). You can also change beneficiaries to any family member (sibling, cousin, even yourself) without tax consequence.",
  },
  {
    q: "How does a 529 affect financial aid?",
    a: "Parent-owned 529s are treated as parental assets on the FAFSA — counted at a maximum 5.64% rate (much friendlier than student-owned assets at 20%). Grandparent-owned 529s are no longer reported as income on the FAFSA as of the 2024–25 award year — a major change that makes grandparent 529s a tax-and-aid sweet spot.",
  },
  {
    q: "What if I overfund the 529 and the rollover cap isn't enough?",
    a: "Non-qualified withdrawals are taxed as ordinary income on the earnings portion plus a 10% federal penalty. The penalty is waived if the beneficiary receives a scholarship (you can withdraw up to the scholarship amount without penalty, though earnings are still taxed). Strategic approach: leave some headroom, plan to use the Roth rollover, change beneficiaries if needed.",
  },
  {
    q: "Are 529 contributions tax-deductible federally?",
    a: "No — there is no federal income tax deduction for 529 contributions. The federal benefit is tax-free growth and tax-free withdrawals. State-level deductions or credits are the only contribution-side tax break.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Save tax" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The college-savings account that just became dramatically more flexible thanks to SECURE 2.0. Here's how to pick a plan, claim the state tax break, and handle leftover balances."
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
            <strong>A 529 plan is the single best account for college savings — and as of 2024 it
            has a built-in escape hatch.</strong> Money grows tax-free, withdrawals for qualified
            education expenses are tax-free, and leftover funds can now roll into a Roth IRA (up to{" "}
            <strong>$35,000 lifetime</strong>) for the beneficiary. The old "what if my kid skips
            college?" worry is mostly gone.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What a 529 actually is</h2>

          <p>
            A 529 is a <strong>state-sponsored investment account</strong> where you put money in,
            choose from a menu of mutual funds (typically a target-date "age-based" portfolio that
            de-risks as the beneficiary approaches college), and withdraw tax-free when the money is
            used for qualified education expenses.
          </p>

          <p>
            Two kinds exist: <strong>education savings plans</strong> (the common kind, what we're
            covering) and <strong>prepaid tuition plans</strong> (lock in today's in-state tuition
            rates at participating schools — rarer, narrower benefit, mostly state-specific).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Qualified expenses — what you can spend it on</h2>

          <ul>
            <li><strong>College:</strong> Tuition, fees, books, supplies, required equipment, room and board (if enrolled at least half-time).</li>
            <li><strong>K–12 tuition:</strong> Up to $10,000/year per beneficiary (private school, religious school).</li>
            <li><strong>Apprenticeships:</strong> Registered with the Department of Labor; covers fees, books, equipment.</li>
            <li><strong>Student loan repayment:</strong> Up to $10,000 lifetime cap, per beneficiary AND per sibling (so a family with 3 kids can hit $30,000 across them).</li>
            <li><strong>Roth IRA rollover:</strong> $35,000 lifetime cap (more on this below — the big SECURE 2.0 change).</li>
          </ul>

          <p>
            <strong>NOT qualified:</strong> Transportation, health insurance, optional dorm fees,
            extracurriculars. Withdrawing for these triggers tax on earnings + 10% penalty.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The state tax break — your biggest decision point</h2>

          <p>
            Federally, all 529 plans get the same benefit (tax-free growth and qualified
            withdrawals). The differences are at the state level:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">State type</th>
                  <th className="py-3 pr-4">What it means for you</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Generous home-state deduction (NY, IL, MD, OK, others)</td><td className="py-3 pr-4">Use your home state's plan. The annual state tax savings often exceed the difference in fund expense ratios.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Modest deduction</td><td className="py-3 pr-4">Run the math: home state's tax savings vs. low-fee out-of-state plan. Often a wash.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">No income tax (TX, FL, NV, WA, TN, SD, WY, AK, NH)</td><td className="py-3 pr-4">Shop the best plan in the country regardless of state. Utah's my529 and Nevada's Vanguard 529 are perennial top picks.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Tax parity (KS, AZ, MO, PA)</td><td className="py-3 pr-4">Deduction applies regardless of which state's 529 you use. Optimize for fees.</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The SECURE 2.0 Roth rollover — leftover money has somewhere to go</h2>

          <p>
            Starting January 2024, unused 529 balances can be rolled into a Roth IRA in the
            beneficiary's name. <strong>This is the biggest change to 529s in two decades.</strong>{" "}
            The rules:
          </p>

          <ul>
            <li><strong>$35,000 lifetime cap</strong> per beneficiary.</li>
            <li><strong>The 529 must be at least 15 years old.</strong> Open one early.</li>
            <li><strong>Annual rollover is capped at the IRA contribution limit</strong> ($7,500 in 2026 for under-50). So clearing the full $35K takes ~5 years.</li>
            <li><strong>Contributions from the last 5 years are NOT eligible.</strong> No last-minute money laundering.</li>
            <li><strong>The beneficiary must have earned income</strong> equal to the rollover amount in that year (same as a normal Roth IRA contribution).</li>
            <li>The rollover counts against the beneficiary's annual IRA contribution limit (they can't separately contribute the full $7,500).</li>
          </ul>

          <p>
            <strong>Practical implication:</strong> Open a 529 the year your child is born. Even if
            they don't go to college (or get a full scholarship), 18 years of tax-free growth can
            roll into a Roth IRA at age 18 — giving them ~50 years of additional tax-free compounding
            before retirement.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The top-tier plans to look at</h2>

          <p>
            Across rankings from Morningstar, SavingForCollege.com, and others, these consistently
            rate at the top for low fees and strong investment menus (use them if your home state
            doesn't have a generous deduction):
          </p>

          <ul>
            <li><strong>Utah&apos;s my529</strong> — Vanguard underlying funds, expense ratios ~0.10%–0.20%. Open to non-residents.</li>
            <li><strong>Nevada&apos;s Vanguard 529</strong> — Direct Vanguard branding, target-enrollment portfolios.</li>
            <li><strong>New York&apos;s 529 Direct Plan</strong> — Vanguard funds, $5,000 single / $10,000 MFJ state deduction for NY residents.</li>
            <li><strong>Illinois Bright Start</strong> — T. Rowe Price underlying, $10,000 single / $20,000 MFJ state deduction for IL residents.</li>
            <li><strong>Massachusetts U.Fund</strong> — Fidelity-managed, multiple portfolio options.</li>
          </ul>

          <p>
            For investment management on the leftover Roth side once the rollover kicks in, you'll
            need a brokerage:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity Roth IRA →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How much to contribute</h2>

          <p>
            <strong>No federal cap on annual contributions</strong>, but gift-tax rules apply: in
            2026, you can give up to $19,000/year per beneficiary without filing a gift tax return
            ($38,000 for married couples gift-splitting). 529s also have a unique{" "}
            <strong>5-year forward-funding election</strong>: gift up to $95,000 (or $190,000 for
            couples) in one year and treat it as 5 years of contributions for gift-tax purposes.
            Useful for grandparents loading up at birth.
          </p>

          <p>
            State plans have aggregate caps (typically $300,000–$550,000 per beneficiary). Above
            that, contributions are rejected by the plan.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>529 vs. other college-savings options</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Account</th>
                  <th className="py-3 pr-4">Tax-free growth?</th>
                  <th className="py-3 pr-4">Flexibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">529</td><td className="py-3 pr-4">Yes (qualified education + Roth rollover)</td><td className="py-3 pr-4">High — change beneficiaries, K–12, loans, Roth rollover</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Coverdell ESA</td><td className="py-3 pr-4">Yes (K–12 + college)</td><td className="py-3 pr-4">Low — $2K/year cap, income limits, age-30 use-it-or-lose-it</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">UGMA/UTMA</td><td className="py-3 pr-4">No — kiddie tax applies</td><td className="py-3 pr-4">Highest — can be used for anything, but child controls at majority</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Roth IRA (parent)</td><td className="py-3 pr-4">Yes (penalty-free for education before 59½ on earnings)</td><td className="py-3 pr-4">High — but uses up retirement savings cap</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            For most families, a 529 wins. The Roth rollover removed the main "what if college
            doesn't happen?" objection.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            Open a 529 the year your child is born (or even before — name yourself as beneficiary
            and change later). Use your home state's plan if the deduction is meaningful; otherwise,
            Utah, Nevada, or New York. Set up auto-deposit at a level you can sustain — even $200/mo
            from birth, at 7% real return, becomes ~$95,000 by age 18. Plan to use the Roth rollover
            for any leftover.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
            <li><Link href="/learn/secure-2-0-changes-2026">SECURE 2.0 changes 2026</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
            <li><Link href="/learn/how-to-choose-a-financial-advisor">How to choose a financial advisor</Link></li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
