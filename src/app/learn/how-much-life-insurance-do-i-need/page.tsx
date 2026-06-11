import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-much-life-insurance-do-i-need";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How much life insurance do I need?";
const description =
  "Two ways to calculate your coverage — the income-multiple rule and the more precise DIME method — with worked examples for a single earner, a dual-income couple, and a single parent.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How much life insurance do I really need?",
    a: "For most working adults with dependents, the answer is 10 to 15 times your annual income, layered to last until your largest obligations (mortgage, kids reaching adulthood) end. The DIME method — Debts + Income to replace + Mortgage + Education — gives a more precise number tailored to your situation. Stay-at-home parents need coverage too, sized to the cost of replacing their childcare and household labor.",
  },
  {
    q: "Is the income-multiple rule (10×–15× salary) good enough?",
    a: "It's a fast starting point, but it can be high or low depending on your debt load, mortgage balance, kids' ages, and existing savings. Use 10×–15× to estimate, then run the DIME method to fine-tune. The DIME number is what you actually shop with.",
  },
  {
    q: "Do I need life insurance if I'm single with no kids?",
    a: "Usually not. Life insurance replaces income for people who depend on you financially. If no one will face hardship from your death, you don't need it — though a small policy can cover debts a co-signer would inherit (private student loans, joint car loans) and final expenses. Don't buy a big policy you don't need just because a salesperson called.",
  },
  {
    q: "How much coverage does a stay-at-home parent need?",
    a: "More than you'd think. The surviving partner would face significant new costs for childcare, housekeeping, transportation, and lost time at work. A common range is $250,000–$500,000 in term coverage, scaled to the number and ages of children. The market value of a stay-at-home parent's work is often estimated at $40,000–$60,000 a year.",
  },
  {
    q: "Should I count my workplace life insurance toward the total?",
    a: "Partially. Employer-provided coverage (often 1× salary, free) is real coverage today but disappears the moment you change jobs or get laid off. Treat it as a supplement, not a foundation. Buy your individual term policy as if the workplace coverage didn't exist, then enjoy the extra protection on top.",
  },
  {
    q: "How long should the term be?",
    a: "Match the term to your longest financial obligation. If your youngest child is 2 and your mortgage has 28 years left, a 30-year term covers both. Common terms are 10, 15, 20, and 30 years; 30-year is usually a small premium increase over 20-year and locks in your young, healthy rate. Don't buy a 10-year term if a 30-year still costs $40 a month.",
  },
];

const STEPS = [
  { name: "Total your debts", text: "Add up all non-mortgage debts: car loans, student loans, credit cards, personal loans." },
  { name: "Calculate income replacement", text: "Multiply your annual salary by the number of years your family would need it replaced (commonly 10–15 years, or until your youngest child reaches adulthood)." },
  { name: "Add your mortgage balance", text: "Use the current remaining balance, not the original loan amount." },
  { name: "Add future education costs", text: "Estimate college or schooling costs per child. A widely-used figure is $25,000–$35,000 per year for four years of in-state public college." },
  { name: "Subtract existing assets and coverage", text: "Subtract your liquid savings, investments earmarked for the family, and any existing life insurance you already have." },
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
      <JsonLd
        data={howToJsonLd({
          name: "Calculate your life insurance need with the DIME method",
          steps: STEPS,
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Two ways to size your coverage — a quick income multiple and the more precise DIME method — with worked examples for the most common household situations."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>For most working adults with dependents, the right answer is 10 to 15 times
            your annual income</strong> — but the more precise number comes from adding up what
            your family would actually need to replace.
          </p>

          <p>
            <strong>The wrong number cuts both ways.</strong> Underbuy and your family is forced
            to choose between paying the mortgage and feeding the kids. Overbuy and you waste
            money on premiums that could have gone into your retirement accounts.
          </p>

          <p>
            This guide gives you a 30-second estimate, then walks the more precise DIME method
            with three real-world examples — a single earner, a dual-income couple, and a single
            parent — so you can shop for coverage with the right target in mind.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second answer: income multiple</h2>

          <p>
            <strong>Multiply your annual income by 10 to 15.</strong> That&apos;s your ballpark
            coverage. A $90,000 earner needs roughly <strong>$900,000 to $1.35 million</strong> in
            term life. The 10× end fits if your kids are nearly grown and the mortgage is small;
            the 15× end fits if you have young children, a fresh mortgage, and little savings.
          </p>

          <p>
            <strong>Why a multiple, not a fixed number?</strong> Because the goal is income
            replacement — the surviving family invests the death benefit and lives off the
            withdrawals. At a conservative 4% withdrawal rate, a $1 million payout replaces
            roughly $40,000 of pre-tax income per year, indefinitely.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The more precise answer: the DIME method</h2>

          <p>
            <strong>DIME breaks the question into four numbers you can actually total.</strong>
            It&apos;s the same method most fee-only planners walk clients through.
          </p>

          <ul>
            <li><strong>D — Debts.</strong> All non-mortgage debt: car loans, student loans, credit cards, personal loans.</li>
            <li><strong>I — Income.</strong> Annual salary × the number of years your family would need it (commonly 10–20 years, or until your youngest is independent).</li>
            <li><strong>M — Mortgage.</strong> Current remaining balance.</li>
            <li><strong>E — Education.</strong> Estimated future college costs per child. A common figure is $25,000–$35,000 per year for four years of in-state public.</li>
          </ul>

          <p>
            <strong>Add the four, then subtract what you already have:</strong> liquid savings,
            investments earmarked for the family, and any existing life insurance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Example 1: Single earner, married, two young kids</h2>

          <p>
            <strong>Sarah is 34, earns $85,000, and is the sole income.</strong> Her spouse is
            home with their two children (ages 3 and 6). They have a $320,000 mortgage with 27
            years left, $18,000 on a car loan, and $45,000 in savings.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">DIME component</th>
                  <th className="py-3 pr-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Debts (non-mortgage)</td><td className="py-3 pr-4">$18,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Income (15 yrs × $85,000)</td><td className="py-3 pr-4">$1,275,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mortgage balance</td><td className="py-3 pr-4">$320,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Education (2 kids × $120,000)</td><td className="py-3 pr-4">$240,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Subtotal</td><td className="py-3 pr-4">$1,853,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Less existing savings</td><td className="py-3 pr-4">−$45,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Coverage need</td><td className="py-3 pr-4"><strong>~$1,800,000</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Recommendation:</strong> a 30-year, $1.75M–$2M term policy. The term covers
            the mortgage payoff and runs past the younger child&apos;s college years.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Example 2: Dual-income couple, one kid</h2>

          <p>
            <strong>Marcus and Priya are both 32, earning $95,000 and $80,000.</strong> One child,
            age 4. Mortgage balance $410,000, no other debt, $75,000 in savings, each has $95,000
            (1× salary) in employer life insurance.
          </p>

          <p>
            <strong>Each partner buys coverage as if the other is gone</strong> — that&apos;s the
            scenario the policy must cover. Don&apos;t average; size each policy independently.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">DIME component</th>
                  <th className="py-3 pr-4">Marcus dies</th>
                  <th className="py-3 pr-4">Priya dies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Income (12 yrs × salary)</td><td className="py-3 pr-4">$1,140,000</td><td className="py-3 pr-4">$960,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mortgage</td><td className="py-3 pr-4">$410,000</td><td className="py-3 pr-4">$410,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Education (1 kid)</td><td className="py-3 pr-4">$120,000</td><td className="py-3 pr-4">$120,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Subtotal</td><td className="py-3 pr-4">$1,670,000</td><td className="py-3 pr-4">$1,490,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Less savings + work coverage</td><td className="py-3 pr-4">−$170,000</td><td className="py-3 pr-4">−$155,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Individual policy need</td><td className="py-3 pr-4"><strong>~$1.5M</strong></td><td className="py-3 pr-4"><strong>~$1.35M</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Recommendation:</strong> a $1.5M, 25-year term on Marcus and a $1.35M,
            25-year term on Priya. Workplace coverage stays as bonus.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Example 3: Single parent, one kid</h2>

          <p>
            <strong>Jamie is 38, single, with a 10-year-old.</strong> Earns $72,000. Mortgage
            balance $245,000 (22 years left), $12,000 on a car loan, $30,000 in savings, no
            workplace life insurance.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">DIME component</th>
                  <th className="py-3 pr-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Debts</td><td className="py-3 pr-4">$12,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Income (10 yrs × $72,000)</td><td className="py-3 pr-4">$720,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mortgage</td><td className="py-3 pr-4">$245,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Education (1 kid)</td><td className="py-3 pr-4">$120,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Subtotal</td><td className="py-3 pr-4">$1,097,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Less savings</td><td className="py-3 pr-4">−$30,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Coverage need</td><td className="py-3 pr-4"><strong>~$1,050,000</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Recommendation:</strong> a 15-year, $1M term policy. The 15-year term carries
            Jamie past the child&apos;s independence; the slightly shorter term keeps the premium
            low for a tight single-income budget.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The stay-at-home parent question</h2>

          <p>
            <strong>Stay-at-home parents need coverage too — sometimes a lot of it.</strong> If
            the at-home parent dies, the surviving spouse faces new costs for full-time childcare,
            housekeeping, after-school programs, and lost work hours. The market replacement value
            is commonly estimated at <strong>$40,000–$60,000 a year</strong>.
          </p>

          <p>
            <strong>A typical range:</strong> $250,000–$500,000 in term life on the stay-at-home
            parent, scaled to the number and ages of children. Premiums are low because the at-home
            parent isn&apos;t replacing earned income.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The income-multiple rule vs. DIME, side by side</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">When to use</th>
                  <th className="py-3 pr-4">Drawback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">10×–15× income</td>
                  <td className="py-3 pr-4">Quick estimate; shopping with no time</td>
                  <td className="py-3 pr-4">Ignores debt, mortgage, college, kids&apos; ages</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">DIME</td>
                  <td className="py-3 pr-4">Buying the actual policy</td>
                  <td className="py-3 pr-4">Takes 10 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Use 10×–15× to confirm DIME&apos;s answer is in the right ballpark. If DIME tells you
            you need 25× your income, double-check the inputs — usually the income-replacement
            year count is too high.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Next steps</h2>

          <p>
            Once you have your number, the shopping is fast. Many insurers approve healthy
            applicants under a certain coverage amount with no medical exam.
          </p>

          <ol>
            <li><strong>Run your DIME number</strong> with our <Link href="/tools/life-insurance">life insurance calculator</Link>.</li>
            <li><strong>Get quotes from a marketplace</strong> to see several insurers at once.</li>
            <li><strong>Or quote directly</strong> with a term-focused insurer for the fastest path.</li>
            <li><strong>Lock the term</strong> to match your longest obligation (typically your youngest child&apos;s independence, or mortgage payoff).</li>
          </ol>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Compare term life quotes at Policygenius →
            </AffiliateButton>
          </p>

          <p>You can also quote directly with a term-focused insurer:</p>
          <ul>
            <li><AffiliateButton partner="bestow" source={slug} variant="secondary">Get a term quote at Bestow</AffiliateButton></li>
            <li><AffiliateButton partner="ladder" source={slug} variant="secondary">Get a term quote at Ladder</AffiliateButton></li>
            <li><AffiliateButton partner="ethos" source={slug} variant="secondary">Get a term quote at Ethos</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Run the DIME number — don&apos;t guess.</strong> A 10-minute calculation gives
            you a target that fits your actual debts, mortgage, kids, and income gap. Lock in a
            term that matches your longest obligation, while you&apos;re young and the premium is
            cheap.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/term-vs-whole-life-insurance">Term vs. whole life insurance</Link> — which product to buy with your DIME number.</li>
            <li><Link href="/learn/best-term-life-insurance-young-professionals">Best term life insurance for young professionals</Link> — top insurers and how to apply.</li>
            <li><Link href="/tools/life-insurance">Life insurance need calculator</Link> — DIME on autopilot.</li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link> — the short-term cushion that pairs with life insurance.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
