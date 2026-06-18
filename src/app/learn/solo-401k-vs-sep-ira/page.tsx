import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "solo-401k-vs-sep-ira";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Solo 401(k) vs. SEP IRA: which is better for freelancers in 2026?";
const description =
  "If you're self-employed with no W-2 employees, a Solo 401(k) almost always beats a SEP IRA — bigger contributions on lower income, a Roth option, and a backdoor Roth path the SEP IRA blocks. Here's the 2026 contribution math and when the SEP IRA still wins.";
const PUBLISHED = "2026-06-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the 2026 contribution limit for a Solo 401(k)?",
    a: "$74,500 total — the same overall §415(c) defined-contribution limit that applies to any 401(k). That's the employee elective deferral up to $24,500 plus employer profit-sharing up to 25% of net self-employment income, capped at $74,500 combined. Add $8,000 catch-up if you're 50+, or $11,250 if you're 60–63 (SECURE 2.0 super catch-up). Source: IR-2025-111.",
  },
  {
    q: "What's the 2026 contribution limit for a SEP IRA?",
    a: "Up to 25% of net self-employment income, capped at the §415(c) limit of $74,500. There's no employee deferral component — every dollar comes from the 'employer' side, so you need substantially more income to max out a SEP than a Solo 401(k).",
  },
  {
    q: "Which lets me contribute more on a smaller income?",
    a: "The Solo 401(k), by a lot. On $50K net self-employment income, a SEP IRA caps your contribution around $9,294 (the 25% rule applied to net SE after the half-SE-tax deduction). A Solo 401(k) lets you contribute the same employer side PLUS the full $24,500 employee deferral on top — total around $33,800. The Solo 401(k) is the better choice for anyone earning under ~$300K.",
  },
  {
    q: "Why does the SEP IRA block the backdoor Roth IRA?",
    a: "The IRS aggregates all your traditional, SEP, and SIMPLE IRA balances when you do a backdoor Roth conversion under the pro-rata rule. If you have a $50K SEP IRA balance, only a small fraction of your $7,500 backdoor conversion is treated as tax-free — most of it gets taxed at your ordinary rate. The Solo 401(k) is not an IRA, so it doesn't count toward the pro-rata calculation. Backdoor Roth stays clean.",
  },
  {
    q: "Can a Solo 401(k) have a Roth option?",
    a: "Yes. Most major providers (Fidelity, Schwab, E*TRADE) now offer Roth Solo 401(k) plans at no cost. SEP IRAs are now allowed to have a Roth contribution feature under SECURE 2.0, but provider support is limited and the rules around employer pre-tax + employee Roth are still being worked out. Solo 401(k) Roth is the cleaner path.",
  },
  {
    q: "What's the deadline to open and fund?",
    a: "Solo 401(k): the plan must be ESTABLISHED by Dec 31 of the tax year (employer contributions can still be funded by the tax-filing deadline). SEP IRA: both establishment and funding deadlines are the tax-filing deadline including extensions (typically Oct 15). The SEP IRA wins for last-minute setup.",
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
          subtitle="For most one-person businesses with no employees, the Solo 401(k) wins on contribution math, Roth flexibility, and backdoor Roth compatibility. Here's the 2026 framework."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>If you&apos;re a freelancer, sole proprietor, or single-member LLC with no
            W-2 employees, this is one of the highest-leverage tax decisions you&apos;ll make.</strong>{" "}
            The right retirement account can shelter <strong>$74,500</strong> per year of
            self-employment income from federal tax in 2026.
          </p>

          <p>
            The short answer: a Solo 401(k) beats a SEP IRA in almost every realistic scenario.
            The SEP IRA wins on simplicity and last-minute setup; the Solo 401(k) wins on
            everything else — contribution math at moderate incomes, Roth availability, and
            keeping the backdoor Roth IRA path open.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 numbers, side by side</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Solo 401(k)</th>
                  <th className="py-3 pr-4">SEP IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">2026 total cap</td><td className="py-3 pr-4">$74,500</td><td className="py-3 pr-4">$74,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Employee deferral</td><td className="py-3 pr-4">$24,500</td><td className="py-3 pr-4">Not allowed</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Employer contribution</td><td className="py-3 pr-4">Up to 25% net SE income</td><td className="py-3 pr-4">Up to 25% net SE income</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Catch-up (50+)</td><td className="py-3 pr-4">+$8,000</td><td className="py-3 pr-4">None</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Super catch-up (60–63)</td><td className="py-3 pr-4">+$11,250</td><td className="py-3 pr-4">None</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Roth option</td><td className="py-3 pr-4">Yes — supported widely</td><td className="py-3 pr-4">Yes — limited provider support</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Backdoor Roth IRA compatible?</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">No (pro-rata problem)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Loans allowed</td><td className="py-3 pr-4">Yes (up to $50K)</td><td className="py-3 pr-4">No</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Plan setup deadline</td><td className="py-3 pr-4">Dec 31 of tax year</td><td className="py-3 pr-4">Tax-filing deadline + extensions</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Annual filing</td><td className="py-3 pr-4">Form 5500-EZ if assets &gt; $250K</td><td className="py-3 pr-4">None</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">
            2026 limits from <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-thrift-savings-plan-contribution-limit-increases-to-24500" target="_blank" rel="noopener">IR-2025-111</a> (Nov 13, 2025).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The contribution math that decides it</h2>

          <p>
            Both plans cap employer contributions at <strong>25% of net self-employment income</strong>{" "}
            (effectively ~20% of gross SE income after the half-SE-tax deduction). The Solo 401(k) adds
            the <strong>$24,500 employee deferral</strong> on top of that. That deferral is the whole
            game at low and middle incomes.
          </p>

          <p>
            Here&apos;s what that looks like across realistic income levels:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Net SE income</th>
                  <th className="py-3 pr-4">SEP IRA cap</th>
                  <th className="py-3 pr-4">Solo 401(k) cap</th>
                  <th className="py-3 pr-4">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">$30,000</td><td className="py-3 pr-4">~$5,575</td><td className="py-3 pr-4">~$30,075</td><td className="py-3 pr-4 text-brand-700">+$24,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$50,000</td><td className="py-3 pr-4">~$9,290</td><td className="py-3 pr-4">~$33,790</td><td className="py-3 pr-4 text-brand-700">+$24,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$100,000</td><td className="py-3 pr-4">~$18,587</td><td className="py-3 pr-4">~$43,087</td><td className="py-3 pr-4 text-brand-700">+$24,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$200,000</td><td className="py-3 pr-4">~$37,174</td><td className="py-3 pr-4">~$61,674</td><td className="py-3 pr-4 text-brand-700">+$24,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$300,000+</td><td className="py-3 pr-4">$74,500</td><td className="py-3 pr-4">$74,500</td><td className="py-3 pr-4">$0</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">
            Net SE income = gross SE income − half of SE tax − other above-the-line adjustments.
            Real-world numbers vary; use Schwab&apos;s or Fidelity&apos;s Solo 401(k) calculator
            for your specific situation.
          </p>

          <p>
            <strong>At every income below ~$300K, the Solo 401(k) shelters $24,500 more per
            year.</strong> Over 20 years at 7%, that&apos;s the difference between $1.0M and $0.0
            in extra tax-deferred growth.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The backdoor Roth blocker (why this matters most)</h2>

          <p>
            Anyone earning above the Roth IRA income phase-out (~$165K single / ~$246K MFJ in
            2026) must use the <Link href="/learn/backdoor-roth-ira-guide">backdoor Roth IRA</Link>{" "}
            to get money into a Roth. The mechanic: contribute to a non-deductible Traditional IRA,
            then convert to Roth.
          </p>

          <p>
            <strong>The pro-rata rule wrecks this if you have a SEP IRA.</strong> The IRS treats
            ALL your IRA balances — Traditional, SEP, SIMPLE — as one pool when computing the
            taxable portion of any Roth conversion. So a $50,000 SEP IRA balance turns a clean
            $7,500 backdoor conversion into a mostly-taxed event:
          </p>

          <ul>
            <li>Total IRA balance: $50,000 SEP + $7,500 non-deductible Trad = $57,500</li>
            <li>Non-deductible fraction: $7,500 ÷ $57,500 = 13.0%</li>
            <li>Of the $7,500 you convert: only 13.0% ($978) is tax-free</li>
            <li>The other $6,522 is taxed at your ordinary federal rate</li>
          </ul>

          <p>
            The Solo 401(k) is not an IRA. SEP balances rolled into a Solo 401(k) drop out of the
            pro-rata calculation. <strong>For high earners, opening a Solo 401(k) and rolling the
            SEP into it is often a multi-thousand-dollar unlock per year.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When the SEP IRA is still the right answer</h2>

          <ul>
            <li><strong>You realized in March that you missed last year&apos;s plan.</strong> SEP IRAs can still be opened AND funded for the prior tax year up to the filing deadline + extensions. Solo 401(k)s must be established by Dec 31.</li>
            <li><strong>You expect to hire W-2 employees soon.</strong> Once you have employees, both plans get expensive (you must contribute proportionally for everyone). SEPs are slightly simpler to administer in the short term.</li>
            <li><strong>You hate paperwork.</strong> SEP IRAs are one-page Form 5305-SEP and no annual reporting. Solo 401(k)s require Form 5500-EZ once assets cross $250K.</li>
            <li><strong>You already have a 401(k) at a W-2 day job and want a small additional shelter.</strong> You can&apos;t double-dip employee deferrals — your $24,500 is shared across both 401(k)s. If you&apos;ve already maxed the deferral at your day job, the SEP IRA gives you a clean way to shelter additional self-employment income.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The Roth angle</h2>

          <p>
            <strong>Solo 401(k) Roth is now standard.</strong> Fidelity, Schwab, and E*TRADE all
            offer Roth Solo 401(k)s at no cost. You can split the $24,500 deferral between
            pre-tax and Roth however you want.
          </p>

          <p>
            <strong>SEP IRA Roth is technically allowed under SECURE 2.0 but rare in practice.</strong>{" "}
            Most SEP IRA providers haven&apos;t built support yet. The mechanics — pre-tax employer
            money mixed with post-tax employee Roth in the same account — are still being worked
            out.
          </p>

          <p>
            If you want flexibility between current-year deduction and future-tax-free Roth, the
            Solo 401(k) is the clear choice. See{" "}
            <Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link>{" "}
            for the decision framework.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The mega backdoor Roth angle</h2>

          <p>
            Some Solo 401(k) plans support <strong>after-tax employee contributions with in-plan
            Roth conversion</strong> — the &quot;mega backdoor Roth&quot; mechanic. This lets you
            convert any unused space between your employer/employee total ($X) and the $74,500
            §415(c) cap straight into Roth.
          </p>

          <p>
            Default Fidelity, Schwab, and E*TRADE Solo 401(k)s do NOT support this — you need a
            custom-document Solo 401(k) (Mysolo401k, MySolo401k.net, or similar). The annual cost
            is ~$500–$1,000 setup + $150/year, but for a high earner the tax shelter can be worth
            tens of thousands.
          </p>

          <p>
            SEP IRAs have no mega backdoor path at all. See{" "}
            <Link href="/learn/mega-backdoor-roth-guide">mega backdoor Roth guide</Link> for full
            mechanics.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to open one</h2>

          <p>
            The three brokerages worth using for a default Solo 401(k):
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Fidelity Solo 401(k) →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab Solo 401(k) →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard SEP IRA →</AffiliateButton>
          </div>

          <p>
            Fidelity and Schwab Solo 401(k)s are free, support pre-tax and Roth, and have clean
            online interfaces. Vanguard&apos;s Solo 401(k) is also free but charges $25/year per
            mutual fund (can be waived); their SEP IRA is more frictionless if you choose that
            route.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>One-person business, no W-2 employees:</strong> Solo 401(k) almost every time.
            More tax shelter at low and middle incomes, Roth flexibility, backdoor Roth IRA stays
            clean.
          </p>

          <p>
            <strong>SEP IRA wins only on simplicity and last-minute setup.</strong> If you&apos;re
            filing your 2025 return in April 2026 and realize you never opened a retirement
            account, the SEP IRA is your only legal path back. Open it, fund it, and then open a
            Solo 401(k) for 2026 and roll the SEP into it once the dust settles.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which first</Link> — the broader account-priority decision.</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — why the SEP IRA blocks it.</li>
            <li><Link href="/learn/mega-backdoor-roth-guide">Mega backdoor Roth guide</Link> — for Solo 401(k) holders with high income.</li>
            <li><Link href="/learn/secure-2-0-changes-2026">SECURE 2.0 changes for 2026</Link> — the new Roth-SEP and Roth-SIMPLE rules.</li>
            <li><Link href="/learn/how-much-to-contribute-to-401k">How much to contribute to your 401(k)</Link> — once you have the plan, here&apos;s how to fill it.</li>
            <li><Link href="/learn/when-to-hire-a-cpa">When to hire a CPA</Link> — when the Solo 401(k) administrative overhead is worth professional help.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug={slug} />
      </article>
    </>
  );
}
