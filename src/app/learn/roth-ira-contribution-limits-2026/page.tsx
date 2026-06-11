import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "roth-ira-contribution-limits-2026";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Roth IRA contribution limits 2026: Income rules and how much you can contribute";
const description =
  "The 2026 Roth IRA contribution limits, MAGI income phase-outs by filing status, and the rules that decide how much you can actually contribute. Plain-language guidance with IRS-sourced figures.";
const PUBLISHED = "2026-05-20";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is the Roth IRA contribution limit for 2026?",
    a: "For 2026, the IRS limit is $7,500 if you're under 50, and $8,600 if you're 50 or older (a $1,100 catch-up). This is the combined limit across all your IRAs — Roth and traditional together, not per account. Always confirm the current figure on IRS.gov, as these are indexed annually.",
  },
  {
    q: "What income is too high for a Roth IRA in 2026?",
    a: "Eligibility phases out based on modified adjusted gross income (MAGI). For 2026, single filers phase out between $153,000 and $168,000; above $168,000 you can't contribute directly. For married filing jointly, the range is $242,000 to $252,000. (Source: IRS 2026 cost-of-living adjustments.)",
  },
  {
    q: "Can I contribute to both a Roth and a traditional IRA in the same year?",
    a: "Yes, but your total across both can't exceed the annual limit ($7,500 under 50 for 2026). You can split it however you like — for example, $4,000 to a Roth and $3,500 to a traditional — as long as the combined total stays at or under the cap and you have enough earned income.",
  },
  {
    q: "What is a backdoor Roth IRA?",
    a: "It's a legal workaround for high earners over the income limit: you contribute to a traditional IRA (which has no income cap on contributions) and then convert it to a Roth. The conversion itself has no income limit. The pro-rata rule can create a tax bill if you hold other pre-tax IRA money, so get advice before doing it.",
  },
  {
    q: "Do I need earned income to contribute to a Roth IRA?",
    a: "Yes. You can only contribute up to the amount of taxable compensation (wages, salary, self-employment income) you earned that year, capped at the annual limit. Investment income, Social Security, and unemployment don't count. A spousal IRA is the exception — a working spouse can fund an IRA for a non-working spouse.",
  },
  {
    q: "When is the deadline to contribute for 2026?",
    a: "You have until the federal tax filing deadline in April 2027 to make 2026 contributions. You don't have to wait for year-end. Contributing early in the year gives your money more time to grow tax-free.",
  },
  {
    q: "What happens if I contribute too much?",
    a: "Excess contributions are subject to a 6% excise tax for each year they remain in the account. If you catch it before your tax filing deadline, you can withdraw the excess (plus any earnings on it) and avoid the penalty. The IRS Form 5329 handles reporting.",
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
          subtitle="How much you can put in a Roth IRA for 2026, who qualifies, and how the income phase-out works — with the IRS figures you need to check before you contribute."
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
            <strong>For 2026, you can contribute up to $7,500 to a Roth IRA</strong> — or{" "}
            <strong>$8,600</strong> if you&apos;re 50 or older — provided your income falls under the
            IRS limits.
          </p>

          <p>
            <strong>The catch is income.</strong> A Roth IRA is the only major retirement account
            with a hard income ceiling on who can contribute directly. Earn under the threshold for
            your filing status and you get the full limit. Earn into the phase-out range and your
            allowed contribution shrinks. Earn above it and you can&apos;t contribute directly at
            all — though a legal workaround exists.
          </p>

          <p>
            This guide covers the exact 2026 numbers, the modified adjusted gross income (MAGI)
            phase-outs by filing status, and the rules that decide your real limit. The figures
            below reflect the IRS&apos;s official 2026 cost-of-living adjustments (IRS news release
            IR-2025, November 2025); the IRS indexes them annually.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 Roth IRA contribution limits at a glance</h2>
          <p>
            The contribution limit is a combined cap across all your IRAs — Roth and traditional
            together. It is not a per-account number. Here&apos;s how 2026 compares with the prior
            year.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Limit</th>
                  <th className="py-3 pr-4">2025</th>
                  <th className="py-3 pr-4">2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Under age 50</td>
                  <td className="py-3 pr-4">$7,000</td>
                  <td className="py-3 pr-4">$7,500</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Age 50+ (with catch-up)</td>
                  <td className="py-3 pr-4">$8,000</td>
                  <td className="py-3 pr-4">$8,600</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Catch-up amount (50+)</td>
                  <td className="py-3 pr-4">$1,000</td>
                  <td className="py-3 pr-4">$1,100</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Source: IRS 2026 cost-of-living adjustment news release (IR-2025, November 2025), confirmed at IRS.gov.</p>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Who can contribute? The 2026 income (MAGI) limits</h2>
          <p>
            Roth eligibility is determined by your <strong>modified adjusted gross income
            (MAGI)</strong> and your filing status. Most sections of this rule come down to a few
            specific questions.
          </p>

          <p>
            <strong>What is MAGI?</strong> It&apos;s your adjusted gross income with a few
            deductions added back (such as student loan interest and certain foreign income). For
            most people, MAGI is very close to their AGI from the bottom of the first page of their
            tax return.
          </p>

          <p>
            <strong>What happens inside the phase-out range?</strong> Your maximum contribution
            shrinks proportionally as your MAGI rises through the range. At the bottom you get the
            full limit; at the top you get $0. In between, you get a reduced amount.
          </p>

          <p>
            <strong>What are the 2026 thresholds?</strong> They depend entirely on filing status, as
            shown below.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Filing status</th>
                  <th className="py-3 pr-4">Full contribution if MAGI under</th>
                  <th className="py-3 pr-4">Phase-out range</th>
                  <th className="py-3 pr-4">No contribution if MAGI over</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Single / Head of household</td>
                  <td className="py-3 pr-4">$153,000</td>
                  <td className="py-3 pr-4">$153,000–$168,000</td>
                  <td className="py-3 pr-4">$168,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Married filing jointly</td>
                  <td className="py-3 pr-4">$242,000</td>
                  <td className="py-3 pr-4">$242,000–$252,000</td>
                  <td className="py-3 pr-4">$252,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Married filing separately</td>
                  <td className="py-3 pr-4">—</td>
                  <td className="py-3 pr-4">$0–$10,000</td>
                  <td className="py-3 pr-4">$10,000</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Source: IRS 2026 cost-of-living adjustment news release (IR-2025, November 2025).</p>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>How the phase-out actually works</h2>
          <p>
            If your income lands inside the phase-out range, you can still contribute — just less
            than the full amount. The mechanics:
          </p>

          <ul>
            <li><strong>Find where you sit in the range.</strong> Subtract the bottom of your range from your MAGI to see how far in you are.</li>
            <li><strong>Calculate the reduction.</strong> The IRS Worksheet 2-2 (in Publication 590-A) walks through the exact proration. As a rule of thumb, being halfway through the range cuts your limit roughly in half.</li>
            <li><strong>Round and floor correctly.</strong> The result is rounded up to the nearest $10, and if it lands above $0 but below $200, you&apos;re allowed to contribute at least $200.</li>
          </ul>

          <p>
            <strong>A quick example.</strong> A single filer with a 2026 MAGI of about
            $160,500 sits roughly halfway through the $153,000–$168,000 range. Their allowed Roth
            contribution would be roughly half of $7,500 — around $3,750 — rather than the full
            amount.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Roth vs. traditional: where the limit applies</h2>
          <p>
            The $7,500 cap is shared across both IRA types, but the income rules differ. A
            traditional IRA has <em>no income limit on contributions</em> — only on whether those
            contributions are tax-deductible. A Roth has an income limit on contributing at all.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Question</th>
                  <th className="py-3 pr-4">Roth IRA</th>
                  <th className="py-3 pr-4">Traditional IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Income limit to contribute?</td>
                  <td className="py-3 pr-4">Yes (MAGI phase-out)</td>
                  <td className="py-3 pr-4">No</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Contributions deductible?</td>
                  <td className="py-3 pr-4">No (after-tax)</td>
                  <td className="py-3 pr-4">Sometimes (income/coverage rules)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Withdrawals in retirement taxed?</td>
                  <td className="py-3 pr-4">No (qualified)</td>
                  <td className="py-3 pr-4">Yes (ordinary income)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Required minimum distributions?</td>
                  <td className="py-3 pr-4">No (during owner&apos;s life)</td>
                  <td className="py-3 pr-4">Yes (starting at 73)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Not sure which is right for you? Our{" "}
            <Link href="/tools/roth-vs-traditional">Roth vs. Traditional IRA calculator</Link>{" "}
            estimates the after-tax outcome of each based on your current and expected future tax
            rate, and our{" "}
            <Link href="/learn/roth-ira-vs-traditional-ira">full comparison guide</Link> walks
            through the trade-offs.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Special situations</h2>
          <p>
            A few rules change the picture depending on your circumstances:
          </p>

          <ul>
            <li><strong>Over the income limit?</strong> The <strong>backdoor Roth</strong> lets high earners contribute to a traditional IRA (no income cap) and convert it to a Roth. The conversion has no income limit, but the pro-rata rule can trigger taxes if you hold other pre-tax IRA balances.</li>
            <li><strong>One spouse not working?</strong> A <strong>spousal IRA</strong> lets a working spouse fund an IRA for a non-working spouse, effectively doubling household IRA contributions to <strong>$15,000</strong> for 2026 (under 50).</li>
            <li><strong>Age 50 or older?</strong> The catch-up adds <strong>$1,100</strong> for 2026, raising your limit to <strong>$8,600</strong>.</li>
            <li><strong>Self-employed?</strong> A SEP-IRA or Solo 401(k) has much higher limits than a Roth IRA and may be a better primary vehicle — though you can still fund a Roth alongside one.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Next steps: how to contribute</h2>
          <p>
            If you&apos;re eligible, opening and funding a Roth IRA takes about 15 minutes at any
            major brokerage. The account itself is free; you choose low-cost index funds inside it.
          </p>

          <ul>
            <li><strong>Confirm your MAGI</strong> against the table above for your filing status.</li>
            <li><strong>Open a Roth IRA</strong> at a brokerage with no account fees and a strong low-cost fund lineup.</li>
            <li><strong>Set up automatic contributions</strong> — even $625/month gets you to the full $7,500 over the year.</li>
            <li><strong>Invest the cash</strong> once it lands. Uninvested contributions just sit in cash; pick a target-date or total-market index fund.</li>
          </ul>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Roth IRA at Fidelity →
            </AffiliateButton>
          </p>

          <p>
            Vanguard and Charles Schwab are equally strong choices with no-fee Roth IRAs and
            excellent low-cost index funds:
          </p>
          <ul>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Open a Roth IRA at Vanguard</AffiliateButton></li>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Open a Roth IRA at Schwab</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>
          <p>
            For 2026, the Roth IRA limit is <strong>$7,500</strong> (<strong>$8,600</strong> at 50+),
            shared across all your IRAs. Whether you can use it depends on your MAGI: under the
            threshold for your filing status, you get the full amount; inside the phase-out, a
            reduced amount; above it, you&apos;ll need the backdoor route.
          </p>
          <p>
            <strong>Confirm the exact figures on IRS.gov</strong> before contributing — they&apos;re
            indexed every year — then open the account and automate it. The earlier in the year you
            contribute, the longer your money grows tax-free.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. traditional IRA</Link> — which account type fits your tax situation.</li>
            <li><Link href="/tools/roth-vs-traditional">Roth vs. Traditional calculator</Link> — estimate the after-tax outcome of each.</li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000 for beginners</Link> — what to actually buy inside your Roth IRA.</li>
            <li><Link href="/tools/tax-bracket">Tax bracket calculator</Link> — see your marginal rate, which drives the Roth-vs-traditional decision.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
