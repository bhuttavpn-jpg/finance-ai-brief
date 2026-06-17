import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "hsa-vs-roth-ira";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "HSA vs. Roth IRA: which should you fund first in 2026?";
const description =
  "Both are tax-advantaged. Only one is triple tax-free. Here's the 2026 limits, the math on which dollar goes where, and the priority order most planners actually use.";
const PUBLISHED = "2026-06-17";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is an HSA better than a Roth IRA?",
    a: "If you're enrolled in a qualifying HDHP, the HSA is generally the more tax-efficient account — it's the only one in the U.S. tax code with three stacked tax breaks (pre-tax in, tax-free growth, tax-free medical withdrawals at any age). After 65, non-medical withdrawals are taxed like a Traditional IRA, so the HSA never has a worse tax outcome than one. The Roth IRA is still excellent — it just doesn't beat triple-tax-free.",
  },
  {
    q: "Can I contribute to both an HSA and a Roth IRA in 2026?",
    a: "Yes. They're independent accounts with independent eligibility. You can max both in the same year — $4,400 (self) or $8,750 (family) in an HSA plus $7,500 in a Roth IRA — as long as you're HDHP-enrolled for the HSA and under the Roth income limit. For couples in their 30s on a family HDHP, that's $23,750 of tax-advantaged room per year before touching a 401(k).",
  },
  {
    q: "What are the 2026 contribution limits?",
    a: "HSA: $4,400 self-only / $8,750 family (+$1,000 catch-up at 55+). Roth IRA: $7,500 (+$1,100 catch-up at 50+). HSA limits from IRS Rev. Proc. 2025-19; Roth IRA limits from IR-2025-111.",
  },
  {
    q: "Do I need an HDHP to use an HSA?",
    a: "Yes — that's the gating rule. Your health plan in 2026 needs a deductible of at least $1,700 (self) / $3,400 (family) and out-of-pocket costs capped at $8,500 / $17,000. If you don't have an HDHP, the Roth IRA is your best after-tax savings vehicle.",
  },
  {
    q: "What if I'm over the Roth IRA income limit?",
    a: "Use the backdoor Roth — contribute to a non-deductible Traditional IRA, then convert to Roth. Watch the pro-rata rule if you have pre-tax IRA balances. The HSA has no income limit, which is part of why high earners often max it before anything else.",
  },
  {
    q: "Where should I open each account?",
    a: "For an HSA, Fidelity's HSA is widely regarded as the cleanest option — no fees, no minimums, full brokerage. Lively and HealthEquity are also strong if you want a dedicated HSA platform. For a Roth IRA, Fidelity, Schwab, and Vanguard all offer free accounts with no minimums and access to low-cost index funds.",
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
          subtitle="Both shelter your money from tax. One does it three times. Here's how the HSA and Roth IRA stack up on 2026 limits, eligibility, and the dollar-by-dollar priority order."
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
            <strong>If you&apos;re enrolled in an HDHP, the HSA almost always wins.</strong> It&apos;s
            the only U.S. account that&apos;s pre-tax going in, tax-free while growing, and tax-free
            on the way out for medical costs at any age. The Roth IRA is great — just not
            triple-tax-free.
          </p>

          <p>
            <strong>If you&apos;re not on an HDHP, the Roth IRA is the answer.</strong> No HSA
            eligibility means the Roth becomes your most tax-advantaged after-tax vehicle outside the
            401(k).
          </p>

          <p>
            This piece walks the 2026 limits, the actual tax math, who&apos;s eligible for what, and
            the priority order most planners use when stacking the two with a 401(k) match.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Side-by-side: HSA vs. Roth IRA (2026)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4"></th>
                  <th className="py-3 pr-4">HSA</th>
                  <th className="py-3 pr-4">Roth IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">2026 contribution limit</td><td className="py-3 pr-4">$4,400 self / $8,750 family</td><td className="py-3 pr-4">$7,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Catch-up</td><td className="py-3 pr-4">+$1,000 at 55+</td><td className="py-3 pr-4">+$1,100 at 50+</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Eligibility gate</td><td className="py-3 pr-4">Must be on a qualifying HDHP</td><td className="py-3 pr-4">MAGI under Roth income limit</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Contribution tax break</td><td className="py-3 pr-4">Federal + state* + FICA (payroll)</td><td className="py-3 pr-4">None (after-tax)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Growth taxed?</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">No</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Withdrawals tax-free for…</td><td className="py-3 pr-4">Qualified medical at any age</td><td className="py-3 pr-4">Anything after 59½ + 5 yrs</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">After-65 non-medical use</td><td className="py-3 pr-4">Taxed like Traditional IRA</td><td className="py-3 pr-4">Tax-free</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Required minimum distributions</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">No (during your lifetime)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Can invest the balance</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Withdrawal flexibility</td><td className="py-3 pr-4">Medical receipts unlock past spending too</td><td className="py-3 pr-4">Contributions can be pulled anytime</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hint mt-2">
            *State tax: HSA contributions are pre-tax in most states. California and New Jersey are
            the notable exceptions. Sources: <strong>IRS Rev. Proc. 2025-19</strong> (HSA/HDHP),{" "}
            <strong>IR-2025-111</strong> (Roth IRA / 401(k) 2026 limits).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why the HSA is &quot;triple tax-free&quot;</h2>

          <p>
            <strong>The HSA stacks three tax breaks no other U.S. account combines:</strong>
          </p>

          <ol>
            <li><strong>Pre-tax in.</strong> Payroll-deducted HSA contributions skip federal income tax, state income tax (in most states), and the <strong>7.65% FICA tax</strong> — that FICA savings is unique to the HSA, not available on a 401(k) or Roth IRA.</li>
            <li><strong>Tax-free growth.</strong> Invest the balance in index funds and the gains compound without drag, same as a Roth IRA.</li>
            <li><strong>Tax-free out</strong> for qualified medical expenses, at any age, with no penalty.</li>
          </ol>

          <p>
            <strong>The Roth IRA has only two of the three:</strong> tax-free growth and tax-free
            withdrawals. Contributions come from already-taxed paychecks.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math on $4,000 contributed each way</h2>

          <p>
            Assume a 24% marginal rate, 7.65% FICA on the payroll-routed HSA portion, and 30 years
            at 7% growth. Identical $4,000 of <strong>pre-tax salary</strong> deployed two ways:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Step</th>
                  <th className="py-3 pr-4">HSA (payroll)</th>
                  <th className="py-3 pr-4">Roth IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Pre-tax salary</td><td className="py-3 pr-4">$4,000</td><td className="py-3 pr-4">$4,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Federal tax (24%)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$960</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">FICA tax (7.65%)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$306</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Deposited into account</td><td className="py-3 pr-4">$4,000</td><td className="py-3 pr-4">$2,734</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">After 30 yrs @ 7%</td><td className="py-3 pr-4">~$30,450</td><td className="py-3 pr-4">~$20,820</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Tax on qualified withdrawal</td><td className="py-3 pr-4">$0 (medical)</td><td className="py-3 pr-4">$0</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The HSA ends with ~46% more</strong> in this example — entirely because of the
            tax savings on contribution. The Roth gives up federal + FICA tax up front and never gets
            it back. The cost? The HSA dollar has to come out for medical expenses (at any age) or
            you wait until 65 to pull it for anything.
          </p>

          <p className="hint">
            Outside payroll, HSA contributions skip federal + state income tax but not FICA — the
            payroll route is the optimal one. Direct deposits still beat the Roth on federal tax
            alone.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where the Roth IRA still wins</h2>

          <p>
            <strong>The Roth&apos;s edge is flexibility.</strong> Three real advantages over the HSA:
          </p>

          <ul>
            <li><strong>No HDHP requirement.</strong> Most people can contribute. The HSA shuts out anyone not on a high-deductible health plan.</li>
            <li><strong>Withdraw contributions anytime, tax- and penalty-free.</strong> Your $7,500 of contributions can come out next week if you need it. HSA money is locked behind medical receipts (until 65).</li>
            <li><strong>No medical receipt-keeping.</strong> The HSA&apos;s tax-free status hinges on either spending the money on medical care or being old enough not to care. The Roth never asks.</li>
          </ul>

          <p>
            For people without an HDHP — or anyone who wants emergency access to retirement
            contributions — the Roth is the right answer.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The receipt-bank trick (HSA-specific)</h2>

          <p>
            <strong>Here&apos;s the move that makes the HSA wildly powerful:</strong> pay for current
            medical bills out of pocket, save the receipts, and let the HSA invest and compound. There
            is no time limit on reimbursing yourself.
          </p>

          <p>
            Pay a $2,000 dental bill in 2026 with cash. Keep the receipt in a folder. Twenty years
            later, when that $2,000 has grown to $7,700 in your HSA, withdraw $2,000 tax-free against
            the receipt — and the other $5,700 keeps compounding.
          </p>

          <p>
            <strong>This is the closest thing the U.S. tax code has to a free lunch.</strong> The Roth
            IRA cannot do it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 priority order (where each dollar goes)</h2>

          <p>
            For most working professionals, the optimization stack runs in this order:
          </p>

          <ol>
            <li><strong>401(k) up to the employer match.</strong> Free money, full stop. See <Link href="/learn/how-much-to-contribute-to-401k">how much to contribute to your 401(k)</Link>.</li>
            <li><strong>Max the HSA</strong> ($4,400 self / $8,750 family) if you&apos;re HDHP-eligible. Invest the balance; don&apos;t let it sit in cash.</li>
            <li><strong>Max the Roth IRA</strong> ($7,500 / $1,100 catch-up). Use the <Link href="/learn/backdoor-roth-ira-guide">backdoor Roth</Link> if you&apos;re over the income limit.</li>
            <li><strong>Max the 401(k)</strong> ($24,500 / $8,000 catch-up). See <Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which first</Link> for the full priority logic.</li>
            <li><strong>Mega-backdoor Roth</strong> if your plan supports it. See <Link href="/learn/mega-backdoor-roth-guide">mega-backdoor Roth guide</Link>.</li>
            <li><strong>Taxable brokerage</strong> for everything beyond.</li>
          </ol>

          <p>
            <strong>If you&apos;re not HDHP-eligible,</strong> skip step 2 and the Roth IRA takes the
            #2 spot.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Edge cases worth knowing</h2>

          <ul>
            <li><strong>You can have a Roth IRA and an HSA in the same year.</strong> They&apos;re independent. Max both if you can.</li>
            <li><strong>Medicare enrollment kills HSA contributions.</strong> Once you&apos;re on Medicare (typically at 65), you can no longer contribute to an HSA — but you can keep using the balance tax-free for medical expenses. The Roth IRA has no equivalent rule.</li>
            <li><strong>Roth IRA contributions can be withdrawn anytime.</strong> Earnings cannot — that&apos;s the <Link href="/learn/roth-ira-5-year-rules">5-year rules</Link> trap. HSA contributions are never withdrawable for non-medical purposes before 65 without a 20% penalty plus income tax.</li>
            <li><strong>State tax matters for the HSA.</strong> In CA and NJ, HSA contributions are taxed at the state level — still a great account, just not quite as triple-free.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where to open each account</h2>

          <p>
            <strong>HSA:</strong> Your employer&apos;s default HSA provider often charges monthly
            fees and limits investment choices. Open an outside HSA and either transfer money each
            year or contribute directly (you&apos;ll lose the FICA savings but keep federal + state).
          </p>

          <p>
            <AffiliateButton partner="fidelity-hsa" source={slug}>
              Open an HSA at Fidelity →
            </AffiliateButton>
          </p>

          <p>Or compare:</p>
          <ul>
            <li><AffiliateButton partner="lively" source={slug} variant="secondary">Lively HSA</AffiliateButton></li>
            <li><AffiliateButton partner="healthequity" source={slug} variant="secondary">HealthEquity</AffiliateButton></li>
          </ul>

          <p>
            Full breakdown in <Link href="/learn/best-hsa-providers">best HSA providers</Link>.
          </p>

          <p className="mt-6">
            <strong>Roth IRA:</strong> Any of the three big brokerages — Fidelity, Schwab, Vanguard —
            offer free Roth IRAs with no minimums and access to low-cost index funds.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="fidelity" source={slug}>Open Fidelity →</AffiliateButton>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Open Schwab →</AffiliateButton>
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Open Vanguard →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>If you have an HDHP, fund the HSA first</strong> (after the 401(k) match). It&apos;s
            the most tax-advantaged account in the U.S. code and the only one that gives you a FICA
            break on contributions. Invest the balance and treat it as a stealth retirement account.
          </p>

          <p>
            <strong>If you don&apos;t have an HDHP, the Roth IRA is the right answer</strong> and
            should be your second contribution after the match. Both accounts grow tax-free; one just
            has an extra tax break baked in.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link> — the receipt-bank strategy in depth.</li>
            <li><Link href="/learn/hsa-vs-fsa">HSA vs. FSA</Link> — if you&apos;re still deciding on a health-plan strategy.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link> — choosing the IRA flavor.</li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">2026 Roth IRA contribution limits</Link> — income limits + catch-up.</li>
            <li><Link href="/learn/best-hsa-providers">Best HSA providers</Link> — Fidelity, Lively, HealthEquity compared.</li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which first</Link> — full priority logic.</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — for high earners.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Save tax" currentSlug="hsa-vs-roth-ira" />
      </article>
    </>
  );
}
