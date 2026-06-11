import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "401k-vs-ira-which-first";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "401(k) or IRA: which should you fund first in 2026?";
const description =
  "A clear order of operations for funding a 401(k) and an IRA in 2026: capture the employer match first, then weigh fees, investment choice, and tax treatment to decide where the rest of your money goes.";
const PUBLISHED = "2026-05-21";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Should I fund my 401(k) or IRA first in 2026?",
    a: "Fund your 401(k) first, but only up to the employer match — that match is an instant, guaranteed return you can't get anywhere else. After you've captured the full match, an IRA is usually the better next dollar because you control the brokerage, fees, and fund choices. Once you've maxed the IRA ($7,500 for 2026, under 50), go back and fill up the rest of your 401(k).",
  },
  {
    q: "Can I contribute to both a 401(k) and an IRA in the same year?",
    a: "Yes. The two have separate contribution limits, so you can fund both. For 2026, you can defer up to $24,500 into a 401(k) (under 50) and contribute up to $7,500 to an IRA. The only catch is that being covered by a workplace plan can limit whether your traditional IRA contribution is tax-deductible at higher incomes.",
  },
  {
    q: "What are the 2026 contribution limits?",
    a: "For 2026, the employee 401(k) deferral limit is $24,500, with an $8,000 catch-up if you're 50 or older (total $32,500). Ages 60–63 get an enhanced SECURE 2.0 catch-up of $11,250 instead of $8,000. The IRA limit is $7,500, with a $1,100 catch-up at 50+. Source: IRS news release IR-2025-111 (November 2025).",
  },
  {
    q: "What if my employer doesn't offer a 401(k) match?",
    a: "With no match, the 401(k) loses its biggest advantage. In that case, many people fund an IRA first — you get more investment choice and usually lower fees — and then return to the 401(k) for its higher contribution ceiling and the convenience of automatic payroll deductions. A high-fee 401(k) with no match is the one case where leading with an IRA clearly wins.",
  },
  {
    q: "Roth or traditional — does that change the order?",
    a: "No, the order of operations is the same regardless of Roth vs. traditional. The match-first rule applies either way. The Roth-vs-traditional choice is a separate question about whether you want the tax break now or in retirement, and you can use a Roth 401(k) and a Roth IRA together.",
  },
  {
    q: "Is there an income limit on funding a 401(k)?",
    a: "No. Unlike a Roth IRA, a 401(k) has no income ceiling on who can contribute. That's one reason high earners often max the 401(k) — and use a backdoor Roth for IRA money — once their income passes the direct Roth IRA limits.",
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
      <JsonLd
        data={howToJsonLd({
          name: "How to decide whether to fund a 401(k) or IRA first",
          steps: [
            { name: "Capture the full employer match", text: "Contribute to your 401(k) up to the point where you receive the maximum employer match. This is a guaranteed return you can't get elsewhere." },
            { name: "Max out an IRA", text: "Redirect the next dollars to a Roth or traditional IRA ($7,500 for 2026, under 50), where you control fees and fund choices." },
            { name: "Return to the 401(k)", text: "After maxing the IRA, go back and fill the rest of your 401(k) up to the $24,500 limit." },
            { name: "Use a taxable account or HSA", text: "If you still have money to invest after maxing both, use an HSA (if eligible) and then a taxable brokerage account." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Capture the match, then optimize for fees and flexibility. A simple order of operations for splitting your retirement savings between a 401(k) and an IRA in 2026."
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
            <strong>Fund your 401(k) up to the employer match first, then max an IRA, then come
            back to the 401(k).</strong> That order captures free money before optimizing for lower
            fees and more investment choice.
          </p>

          <p>
            <strong>Both accounts do the same core job</strong> — they let your investments grow
            with a tax advantage. But they differ in three ways that decide where each dollar should
            go: whether there&apos;s an employer match, how much the investments cost, and how much
            choice you get.
          </p>

          <p>
            This guide gives you a clear waterfall to follow, the 2026 contribution limits, and the
            one situation where it makes sense to flip the order. The figures reflect the
            IRS&apos;s 2026 cost-of-living adjustments (news release IR-2025); confirm them on
            IRS.gov before you contribute.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The short answer: an order of operations</h2>
          <p>
            For most people with access to a workplace plan, the priority order is the same every
            year. Follow it top to bottom, moving to the next step only after the prior one is full.
          </p>

          <ul>
            <li><strong>1. 401(k) up to the match.</strong> A typical match — 50% of contributions up to 6% of pay — is an instant <strong>50% return</strong>. Nothing else in investing is guaranteed to do that.</li>
            <li><strong>2. Max the IRA.</strong> The next <strong>$7,500</strong> (2026, under 50) goes to a Roth or traditional IRA, where you pick the brokerage and pay rock-bottom fund fees.</li>
            <li><strong>3. Back to the 401(k).</strong> Fill the rest of your 401(k) up to the <strong>$24,500</strong> limit for the higher ceiling and automatic payroll deductions.</li>
            <li><strong>4. HSA and taxable.</strong> Still have money left? Use an HSA if you&apos;re eligible, then a regular taxable brokerage account.</li>
          </ul>

          <p>
            The logic is simple: grab the guaranteed match, then route money to the cheaper, more
            flexible account, then use the 401(k)&apos;s larger capacity for everything above that.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2026 contribution limits</h2>
          <p>
            The 401(k) and IRA have entirely separate limits, so funding one doesn&apos;t reduce
            what you can put in the other. Here&apos;s what you can contribute for 2026.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Account</th>
                  <th className="py-3 pr-4">Under 50</th>
                  <th className="py-3 pr-4">50+ (with catch-up)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">401(k) employee deferral</td>
                  <td className="py-3 pr-4">$24,500</td>
                  <td className="py-3 pr-4">$32,500</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">IRA (Roth or traditional)</td>
                  <td className="py-3 pr-4">$7,500</td>
                  <td className="py-3 pr-4">$8,600</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Source: IRS news release <strong>IR-2025-111</strong> (November 13, 2025). 401(k) catch-up at 50+ is $8,000; ages 60–63 get an enhanced SECURE 2.0 catch-up of $11,250 instead. IRA catch-up at 50+ is $1,100.</p>
          </div>

          <p>
            Note that the <strong>$24,500</strong> is just your own deferral — the employer match
            sits on top of it and counts toward a separate, much higher combined limit, so the match
            never eats into your personal contribution room.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>401(k) vs. IRA, side by side</h2>
          <p>
            The two accounts trade off against each other on a handful of dimensions. This is the
            comparison that drives the order of operations.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Question</th>
                  <th className="py-3 pr-4">401(k)</th>
                  <th className="py-3 pr-4">IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Employer match?</td>
                  <td className="py-3 pr-4">Often yes — free money</td>
                  <td className="py-3 pr-4">No</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">2026 contribution limit</td>
                  <td className="py-3 pr-4">$24,500 (much higher)</td>
                  <td className="py-3 pr-4">$7,500</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Investment choice</td>
                  <td className="py-3 pr-4">Limited to plan menu</td>
                  <td className="py-3 pr-4">Almost any stock, ETF, or fund</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Typical fees</td>
                  <td className="py-3 pr-4">Plan admin + fund fees</td>
                  <td className="py-3 pr-4">Often near zero at low-cost brokers</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Income limit to contribute?</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3 pr-4">Roth IRA only (MAGI phase-out)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Set up by</td>
                  <td className="py-3 pr-4">Your employer</td>
                  <td className="py-3 pr-4">You, at any brokerage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Curious what the match alone is worth over a career? Our{" "}
            <Link href="/tools/401k-match">401(k) match calculator</Link> shows how much free money
            you leave on the table by not contributing enough to capture it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why the match comes first</h2>
          <p>
            <strong>The employer match is the highest-return move in personal finance.</strong> A
            common formula is a 50% match on the first 6% of your salary. On a $60,000 income,
            contributing 6% ($3,600) earns you an extra $1,800 — a guaranteed 50% return before your
            money is even invested.
          </p>

          <p>
            <strong>No investment can promise that.</strong> The stock market has historically
            returned around 7% a year after inflation; a match hands you several times that
            instantly. Skipping it to fund an IRA first means walking past free money to chase a
            smaller advantage.
          </p>

          <p>
            <strong>What if I can&apos;t afford the full match?</strong> Contribute whatever you can,
            and raise it by one percentage point each time you get a pay bump until you hit the full
            match. Most plans let you automate these increases.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why the IRA usually comes second</h2>
          <p>
            Once the match is captured, the IRA typically wins the next dollar for two reasons.
          </p>

          <ul>
            <li><strong>Lower costs.</strong> Many 401(k) plans carry administrative fees and offer only pricier funds. At a low-cost brokerage, an IRA can hold total-market index funds with expense ratios near <strong>0.03%</strong>.</li>
            <li><strong>Total investment freedom.</strong> A 401(k) limits you to the plan&apos;s menu. An IRA lets you buy almost any stock, ETF, or mutual fund, so you can build exactly the portfolio you want.</li>
          </ul>

          <p>
            The trade-off is the smaller limit — <strong>$7,500</strong> versus the 401(k)&apos;s
            <strong>$24,500</strong> — which is exactly why the IRA sits in the middle of the
            waterfall rather than at the top or bottom.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The exception: when to fund the IRA first</h2>
          <p>
            <strong>If your employer offers no match, flip the order.</strong> Without free money on
            the table, the 401(k)&apos;s main edge disappears, and a high-fee plan can quietly drag
            down your returns for decades.
          </p>

          <p>
            In that case, the priority becomes:
          </p>

          <ul>
            <li><strong>1. Max the IRA first</strong> — lower fees, more choice.</li>
            <li><strong>2. Then use the 401(k)</strong> for its higher limit and automatic payroll deductions.</li>
          </ul>

          <p>
            <strong>One more wrinkle for high earners:</strong> a 401(k) has no income limit, but a
            Roth IRA does. If your income phases you out of direct Roth contributions, max the
            401(k) and consider a backdoor Roth for IRA money.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Next steps</h2>
          <p>
            If you don&apos;t yet have an IRA, opening one takes about 15 minutes at any major
            brokerage. The account is free; you choose the low-cost index funds inside it.
          </p>

          <ul>
            <li><strong>Set your 401(k) deferral</strong> to at least the full-match percentage through your employer&apos;s payroll portal.</li>
            <li><strong>Open an IRA</strong> at a no-fee brokerage with a strong low-cost fund lineup.</li>
            <li><strong>Automate contributions</strong> — even <strong>$625/month</strong> maxes a $7,500 IRA over the year.</li>
            <li><strong>Invest the cash</strong> once it lands; uninvested contributions just sit there. A target-date or total-market index fund is a sensible default.</li>
          </ul>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open an IRA at Fidelity →
            </AffiliateButton>
          </p>

          <p>
            Vanguard and Charles Schwab are equally strong, with no-fee IRAs and excellent low-cost
            index funds:
          </p>
          <ul>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Open an IRA at Vanguard</AffiliateButton></li>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Open an IRA at Schwab</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>
          <p>
            <strong>Capture the match, max the IRA, then finish the 401(k).</strong> That order
            grabs the one guaranteed return in investing, then routes the rest of your money to the
            cheapest, most flexible account before using the 401(k)&apos;s larger capacity.
          </p>
          <p>
            The only common exception is a no-match plan, where the IRA goes first. Whichever path
            fits you, <strong>confirm the 2026 limits on IRS.gov</strong>, automate your
            contributions, and make sure the cash is actually invested once it arrives.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. traditional IRA</Link> — once you&apos;ve picked the account, choose the tax treatment.</li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link> — income rules and how much you can actually contribute.</li>
            <li><Link href="/tools/401k-match">401(k) match calculator</Link> — see how much your employer match is worth.</li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000 for beginners</Link> — what to actually buy inside these accounts.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Invest" currentSlug="401k-vs-ira-which-first" />
      </article>
    </>
  );
}
