import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "mega-backdoor-roth-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Mega backdoor Roth: The high-earner's $46K loophole (2026)";
const description =
  "An honest 2026 guide to the mega backdoor Roth — how it works, the 2026 contribution math, who qualifies, and the exact step-by-step inside a 401(k) plan that allows it. Cites IR-2025-111 for the overall 415(c) limit.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const STEPS = [
  { name: "Confirm your 401(k) plan allows after-tax contributions", text: "Call HR or the 401(k) provider. Ask two specific questions: 'Does the plan allow after-tax (non-Roth) contributions above the elective deferral limit?' and 'Does the plan allow in-service withdrawals or in-plan Roth conversions?' Both must be yes." },
  { name: "Max your regular pre-tax or Roth 401(k) contribution", text: "$24,500 in 2026 (per IRS IR-2025-111). The mega backdoor is on top of this, not instead." },
  { name: "Capture the full employer match", text: "Employer contributions count toward the $70,000 total 415(c) limit (estimate; verify final figure for 2026)." },
  { name: "Contribute additional after-tax dollars up to the gap", text: "$70,000 (est) minus your $24,500 employee + employer match = the room for after-tax contributions. For a typical $5K match scenario, that's about $40,500." },
  { name: "Convert after-tax to Roth as quickly as possible", text: "Either via in-plan Roth conversion or via in-service withdrawal rolled to a Roth IRA. Speed matters — earnings on the after-tax dollars are taxable on conversion." },
  { name: "Repeat annually", text: "Most providers let you automate after-tax contributions and auto-conversion. Set it once; it runs every paycheck." },
];

const FAQS: QA[] = [
  {
    q: "What's the difference between a backdoor Roth and a mega backdoor Roth?",
    a: "Backdoor Roth converts ~$7,500 (the 2026 IRA limit) by contributing nondeductible to a Traditional IRA and converting to Roth. Mega backdoor uses a 401(k) plan's after-tax contribution feature to potentially move $30K–$40K+ per year into Roth — roughly 5–6× the size of the regular backdoor.",
  },
  {
    q: "How much can I actually contribute via the mega backdoor in 2026?",
    a: "The cap is the total 415(c) limit (commonly estimated at $70,000 for 2026 — verify final IRS figure) minus your regular 401(k) employee deferral ($24,500) minus employer contributions. With a typical $5,000 employer match, that leaves roughly $40,500 of room for after-tax contributions. Higher employer matches reduce this; lower matches expand it.",
  },
  {
    q: "Why does the mega backdoor even exist?",
    a: "It's a planning byproduct, not a designed tax shelter. The 401(k) statute allows after-tax (non-Roth) contributions above the elective deferral limit, and separately allows Roth conversions. Combining the two creates large Roth contributions that the original Roth IRA income limits were meant to prevent. Congress has flirted with closing the loophole; as of 2026, it remains open.",
  },
  {
    q: "Does my employer have to offer this?",
    a: "Yes — three things must be true: (1) the plan must allow after-tax (non-Roth) contributions, (2) the plan must allow either in-plan Roth conversions or in-service withdrawals, and (3) the combination must be administratively supported. Plans that allow this are concentrated in tech, finance, and large F500 employers. If your plan doesn't, you're out of luck.",
  },
  {
    q: "What happens to the earnings on after-tax contributions?",
    a: "The principal (your after-tax contribution) converts to Roth tax-free. Any earnings between the contribution and the conversion are taxable on conversion. That's why you want to convert as quickly as possible — same paycheck if your plan supports it, monthly at worst.",
  },
  {
    q: "Are there income limits?",
    a: "No income limits on the mega backdoor itself. That's the whole point of why it's such a powerful tool for high earners — Roth IRA contribution income limits ($165K–$180K-ish phase-out single in 2026) don't apply.",
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
      <JsonLd data={howToJsonLd({ name: "How to do the mega backdoor Roth", steps: STEPS })} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The high-earner's most powerful Roth strategy — how it works, the 2026 math, and the exact 6-step playbook."
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
            <strong>The mega backdoor Roth is the single largest tax-advantaged contribution
            available to a typical W-2 employee in the United States</strong> — provided your 401(k)
            plan supports it. For high earners in their 30s and 40s, executing this annually is
            often worth $200,000+ in lifetime tax savings.
          </p>

          <p>
            This guide is the practical version: what it is, the 2026 contribution math (citing IRS{" "}
            <strong>IR-2025-111</strong> for the elective deferral limit), how to confirm your plan
            allows it, and the exact step-by-step.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 30-second take</h2>

          <p>
            The mega backdoor Roth uses three features of a 401(k) plan that, when combined, let you
            move tens of thousands of dollars per year into a Roth (tax-free growth, tax-free
            withdrawals) account — even if you&apos;re over the Roth IRA income limits.
          </p>

          <ul>
            <li><strong>Feature 1:</strong> the 401(k) statutory contribution limit ($70K estimate for 2026, including all sources).</li>
            <li><strong>Feature 2:</strong> after-tax (non-Roth) contributions above the elective deferral limit.</li>
            <li><strong>Feature 3:</strong> in-plan Roth conversion or in-service withdrawal to a Roth IRA.</li>
          </ul>

          <p>If all three exist in your plan, you can execute the strategy. If any is missing, you can&apos;t.</p>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 contribution math</h2>

          <p>
            Per IRS news release <strong>IR-2025-111</strong> (Nov 13, 2025), the 2026 elective
            deferral limit is <strong>$24,500</strong>. The overall §415(c) total contribution limit
            is commonly estimated around <strong>$70,000</strong> for 2026 (verify against the final
            published figure before executing). The math:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Source</th>
                  <th className="py-3 pr-4">2026 amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Total 415(c) limit (estimate)</td><td className="py-3 pr-4">$70,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Your employee elective deferral (pre-tax or Roth)</td><td className="py-3 pr-4">($24,500)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Employer match / contribution (example $5,000)</td><td className="py-3 pr-4">($5,000)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold"><strong>Room for after-tax contribution (mega backdoor)</strong></td><td className="py-3 pr-4"><strong>$40,500</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Higher employer matches reduce the room.</strong> If your employer contributes
            $20,000/year, your mega backdoor capacity drops to ~$25,500.
          </p>

          <p>
            <strong>50+ catch-up doesn&apos;t directly add to mega backdoor capacity</strong> — the
            $8,000 elective deferral catch-up for 50+ raises the employee deferral cap, not the
            total 415(c) limit. (However, the SECURE 2.0 super catch-up for ages 60–63 of $11,250
            for 2026 may interact with plan rules; check with your administrator.)
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — Confirm your plan allows it</h2>

          <p>Call HR or your 401(k) provider. Ask these exact questions:</p>

          <ul>
            <li>&quot;Does my 401(k) plan allow <strong>after-tax (non-Roth) contributions</strong> above the elective deferral limit?&quot;</li>
            <li>&quot;Does my plan allow either <strong>in-plan Roth conversions</strong> or <strong>in-service withdrawals</strong> of after-tax contributions?&quot;</li>
            <li>&quot;Is there an automatic in-plan Roth conversion option for after-tax contributions?&quot; (This is the &quot;auto in-plan Roth conversion&quot; that makes the strategy turnkey.)</li>
          </ul>

          <p>
            <strong>Plans that typically support all three:</strong> large F500 employers (especially
            tech, finance, consulting), some government plans, plans with Fidelity, Schwab, or
            Vanguard as record-keeper. Smaller employers and plans with regional providers often
            don&apos;t.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — Max your regular contribution first</h2>

          <p>
            <strong>The mega backdoor is on top of, not instead of, the regular $24,500 elective
            deferral.</strong> Max that first (in whichever tax treatment fits your situation — see
            our <Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional explainer</Link>).
          </p>

          <p>
            Then capture the full employer match — that&apos;s typically a 50% or 100% return on
            those dollars instantly. Our <Link href="/learn/how-much-to-contribute-to-401k">401(k)
            contribution guide</Link> walks the sequencing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Contribute additional after-tax dollars</h2>

          <p>
            Inside your 401(k) provider&apos;s portal, look for a contribution type called{" "}
            <strong>&quot;after-tax&quot;</strong> (NOT &quot;Roth&quot; — those are different).
            Set a contribution percentage that targets the gap between your regular + employer
            contributions and the §415(c) limit.
          </p>

          <p>
            <strong>Math example for someone earning $250K:</strong>
          </p>

          <ul>
            <li>Regular elective deferral: $24,500 (~9.8% of salary)</li>
            <li>Employer match (5% of pay): $12,500</li>
            <li>415(c) cap (estimate): $70,000</li>
            <li><strong>After-tax room: $33,000</strong> ≈ 13.2% of salary</li>
            <li>Set after-tax contribution at ~13% of pay</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Convert to Roth as quickly as possible</h2>

          <p>
            <strong>Two paths to convert</strong> after-tax dollars to Roth:
          </p>

          <ul>
            <li><strong>In-plan Roth conversion.</strong> Move the after-tax balance into the Roth subaccount of your 401(k). Some plans automate this every pay period — set it once.</li>
            <li><strong>In-service withdrawal to a Roth IRA.</strong> Roll the after-tax dollars out of the plan and into a Roth IRA at <AffiliateButton partner="fidelity" source={slug} variant="secondary">Fidelity</AffiliateButton>, <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>, or <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>. Some plans only allow this annually; some don&apos;t allow it at all.</li>
          </ul>

          <p>
            <strong>Speed matters.</strong> Any growth on the after-tax dollars between contribution
            and conversion is taxable on conversion. The cleanest setup: contributions in via every
            paycheck, auto-convert immediately. If you can&apos;t auto-convert, do it manually
            monthly at minimum.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5 — Repeat annually</h2>

          <p>
            Once configured, the mega backdoor is largely set-and-forget. Review at start of each
            year to:
          </p>

          <ul>
            <li>Update contribution percentage if salary or 401(k) limits changed.</li>
            <li>Confirm employer match estimate is right (matches can change with company changes).</li>
            <li>Reconfirm plan still allows the strategy (rare, but plans can drop after-tax features).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The compound impact</h2>

          <p>
            <strong>Why this matters so much:</strong>
          </p>

          <ul>
            <li><strong>10 years of $40K/year mega backdoor at 7% real return ≈ $560K Roth balance,</strong> growing tax-free forever, with no required minimum distributions during your lifetime.</li>
            <li><strong>20 years of $40K/year mega backdoor at 7% real return ≈ $1.65M Roth balance.</strong></li>
            <li>Compare to traditional 401(k) at the same contribution rate — the Roth path saves an estimated $300K–$800K in lifetime taxes for someone in a high bracket who retires in the same or higher bracket.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Watch-outs</h2>

          <ul>
            <li><strong>The pro-rata rule.</strong> If you also have pre-tax money in a Traditional IRA, the pro-rata rule can make a separate <Link href="/learn/backdoor-roth-ira-guide">regular backdoor Roth</Link> messy. The mega backdoor Roth via 401(k) isn&apos;t affected by your IRA balance — different rule.</li>
            <li><strong>Plan distribution rules.</strong> Even after conversion, the Roth dollars inside the 401(k) are still 401(k) money. You can&apos;t freely withdraw them until you separate from the employer or hit 59½.</li>
            <li><strong>Legislative risk.</strong> Congress has considered closing this loophole multiple times. Execute it while you can.</li>
            <li><strong>Plan changes.</strong> Some employers add or remove after-tax features without much fanfare. Check your SPD annually.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>If your 401(k) plan supports it and you have the cash flow to fund it, the
            mega backdoor Roth is the most powerful tax-advantaged contribution available to a W-2
            employee.</strong> It&apos;s most valuable for high earners in their 30s and 40s with
            decades of tax-free compounding ahead.
          </p>

          <p>
            For most readers who qualify, this is a 30-minute setup that quietly runs for the rest
            of your career and delivers six- to seven-figure tax savings over a lifetime.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA: step-by-step guide</Link></li>
            <li><Link href="/learn/how-much-to-contribute-to-401k">How much should I contribute to my 401(k)?</Link></li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link></li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: Which first?</Link></li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
