import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "freetaxusa-review";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "FreeTaxUSA review 2026: Is the cheapest tax software any good?";
const description =
  "FreeTaxUSA is free for federal and $14.99 for state — for any return type. Here's an honest review of what it does well, where it's weaker than TurboTax, and who should switch.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Is FreeTaxUSA legit?",
    a: "Yes. FreeTaxUSA is an IRS-authorized e-file provider operated by TaxHawk, Inc., a Utah-based company that has been in the tax-software business since 2001. It's used by millions of filers annually, processes returns through the same IRS e-file system as TurboTax and TaxAct, and offers similar accuracy and audit guarantees. Returns are encrypted in transit and at rest; the company has had no major data-breach incidents reported.",
  },
  {
    q: "Is federal filing really free?",
    a: "Yes — for any return type. Itemized deductions, 1099 income, investment income (1099-B), rental property (Schedule E), self-employment (Schedule C), HSA contributions, K-1s, capital gains, and crypto are all included at $0 federal. State returns cost $14.99 each. There's no income limit and no surprise upgrade prompt mid-return.",
  },
  {
    q: "What's the catch with FreeTaxUSA?",
    a: "Two things. First, the interface is plainer than TurboTax's — fewer 'why we're asking' explainers, fewer animations, less hand-holding. Second, live human help costs an extra $7.99 add-on (vs. TurboTax bundling it in higher tiers). For most filers comfortable answering tax questions directly, the savings ($60–$200 vs. TurboTax) more than offset both.",
  },
  {
    q: "Does FreeTaxUSA support all the same forms as TurboTax?",
    a: "For the vast majority of filers, yes. FreeTaxUSA supports all common forms and schedules: 1040, A, B, C, D, E, SE, 8949 (capital gains), 8606 (non-deductible IRA / backdoor Roth), 8889 (HSA), and most state-specific forms. The narrow gaps are in highly specialized situations — some niche international forms, certain rare credits — that most filers will never need.",
  },
  {
    q: "Will FreeTaxUSA find all my deductions?",
    a: "If you correctly answer the interview questions, yes. The brackets and deductions are statutory — they don't depend on which software you use. FreeTaxUSA's interview is plainer than TurboTax's, so it relies more on you knowing what to enter (W-2 fields, 1099 boxes, etc.). If you have an unusual deduction or credit and want the software to suggest it for you, TurboTax's interview is more proactive.",
  },
  {
    q: "Is FreeTaxUSA's audit support any good?",
    a: "The basic audit guarantee — covering IRS penalties and interest from calculation errors — is included free for all filers. Full audit defense (a CPA or EA representing you in an audit) is a $19.99 add-on, the cheapest in the industry. For most people the basic guarantee is enough; you can add audit defense if you're filing a return you suspect might draw scrutiny.",
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
          subtitle="Free federal for any return type, $15 state — for typically $60–$200 less than TurboTax. Here's the honest review: what FreeTaxUSA does well, where it's weaker, and who should make the switch."
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
            <strong>FreeTaxUSA is the best-value mainstream tax software in the U.S.</strong>
            Federal is genuinely free for any return type — itemized deductions, 1099s,
            investments, self-employment, all included at $0. State returns are $14.99 each.
          </p>

          <p>
            <strong>The cost gap vs. TurboTax is large.</strong> A typical filer with itemized
            deductions and investment income spends ~$15 with FreeTaxUSA vs. ~$135 with TurboTax —
            roughly a <strong>9× price difference</strong> for the same final refund.
          </p>

          <p>
            The honest trade-offs: a plainer interface and a small add-on fee for live human
            support. This review walks both sides so you can decide if those trade-offs are worth
            the ~$120 savings.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What FreeTaxUSA covers — free at the federal level</h2>

          <p>
            <strong>This is the key fact that sets FreeTaxUSA apart.</strong> The free tier is
            the only tier — federal filing is $0 regardless of how complex your return is.
          </p>

          <ul>
            <li><strong>W-2 income</strong> — all employer-supplied forms.</li>
            <li><strong>Itemized deductions (Schedule A)</strong> — mortgage interest, SALT, charitable.</li>
            <li><strong>Investment income (Schedule D + Form 8949)</strong> — 1099-B sales of stocks, ETFs, mutual funds, crypto.</li>
            <li><strong>Self-employment (Schedule C + SE)</strong> — 1099-NEC, freelance, gig work, small business.</li>
            <li><strong>Rental property (Schedule E)</strong> — passive activity rules, depreciation.</li>
            <li><strong>HSA contributions (Form 8889).</strong></li>
            <li><strong>Non-deductible IRA / backdoor Roth (Form 8606).</strong></li>
            <li><strong>K-1 income</strong> from partnerships, S-corps, trusts.</li>
            <li><strong>Common credits</strong> — EITC, Child Tax Credit, education credits, saver&apos;s credit, retirement savings credit.</li>
          </ul>

          <p>
            <strong>State filing: $14.99 each.</strong> All 41 states with income tax are
            supported.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Pricing at a glance</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Return type</th>
                  <th className="py-3 pr-4">FreeTaxUSA</th>
                  <th className="py-3 pr-4">TurboTax</th>
                  <th className="py-3 pr-4">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">W-2 only, federal + state</td><td className="py-3 pr-4">$15</td><td className="py-3 pr-4">$0–$45</td><td className="py-3 pr-4">~$30 either way</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Itemized, federal + state</td><td className="py-3 pr-4">$15</td><td className="py-3 pr-4">~$104</td><td className="py-3 pr-4">~$89</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Investments, federal + state</td><td className="py-3 pr-4">$15</td><td className="py-3 pr-4">~$134</td><td className="py-3 pr-4">~$119</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Self-employed, federal + state</td><td className="py-3 pr-4">$15</td><td className="py-3 pr-4">~$174</td><td className="py-3 pr-4">~$159</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Optional add-ons:</strong>
          </p>
          <ul>
            <li><strong>Deluxe Edition: $7.99</strong> — priority support, audit assist guidance, amended return support.</li>
            <li><strong>Pro Support: $7.99</strong> — live chat with a tax professional.</li>
            <li><strong>Audit Defense: $19.99</strong> — full audit representation by a CPA or EA.</li>
          </ul>

          <p>
            <strong>Even with all add-ons</strong> ($15 + $7.99 + $7.99 + $19.99 = $50.97),
            FreeTaxUSA is still substantially cheaper than TurboTax&apos;s self-employed tier with
            equivalent features.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The honest weaknesses</h2>

          <p>
            <strong>These trade-offs are real — decide if you care.</strong>
          </p>

          <ul>
            <li>
              <strong>Plainer interface.</strong> Less guided interview prose, fewer
              &quot;why we&apos;re asking&quot; explainers, less polished animations. The UI looks
              more like a 2015 web form than TurboTax&apos;s 2026 chat-style interview.
            </li>
            <li>
              <strong>Slower brokerage imports.</strong> Some brokers (Fidelity, Schwab) work
              well; others require CSV uploads or manual entry. TurboTax has broader one-click
              broker coverage.
            </li>
            <li>
              <strong>Live human help is a paid add-on.</strong> $7.99 for Pro Support. If you need
              hand-holding throughout the filing process, TurboTax Live (bundled in higher tiers)
              is more comprehensive, just much more expensive overall.
            </li>
            <li>
              <strong>Less proactive deduction-finding.</strong> If you don&apos;t know what
              deductions you might qualify for, TurboTax&apos;s interview is better at surfacing
              them. FreeTaxUSA assumes you know what to enter.
            </li>
            <li>
              <strong>No mobile app.</strong> Mobile-browser support is fine, but TurboTax has a
              dedicated app with photo W-2 capture.
            </li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>What FreeTaxUSA does as well as anyone</h2>

          <ul>
            <li><strong>Accuracy.</strong> The math is the math. Same brackets, same IRS forms, same final refund. There is no scenario where the same inputs produce a different result.</li>
            <li><strong>Speed.</strong> Returns submit through the same IRS e-file system; refunds arrive in the same window.</li>
            <li><strong>Prior-year import.</strong> Accepts PDFs from TurboTax, TaxAct, H&amp;R Block, FreeTaxUSA itself for prior-year carryovers.</li>
            <li><strong>Customer support.</strong> Free email support is fast and competent (typically same-day); the $7.99 Pro Support gets you live chat with a tax preparer.</li>
            <li><strong>Audit guarantee.</strong> Free base coverage matches what TurboTax/TaxAct bundle for free.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Who should switch to FreeTaxUSA</h2>

          <ul>
            <li><strong>Anyone paying $80+</strong> in TurboTax or TaxAct fees. The math case is overwhelming.</li>
            <li><strong>Self-employed filers with a stable Schedule C.</strong> $15 vs. $129+ is the biggest gap.</li>
            <li><strong>Buy-and-hold investors</strong> with simple 1099-B activity (5–50 sales).</li>
            <li><strong>Rental property owners</strong> with one or two properties.</li>
            <li><strong>Backdoor Roth filers</strong> — Form 8606 is well-supported and free.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Who should stay with TurboTax instead</h2>

          <ul>
            <li><strong>First-time filers</strong> who genuinely benefit from the hand-holding interview UX.</li>
            <li><strong>Heavy brokerage activity</strong> (200+ lots) that needs one-click import from a broker FreeTaxUSA doesn&apos;t integrate cleanly with.</li>
            <li><strong>Complex equity comp</strong> — RSU vesting, ESPP qualifying/disqualifying dispositions, ISO AMT — where TurboTax&apos;s interview catches edge cases.</li>
            <li><strong>People who need TurboTax Live Full Service</strong> — a CPA does the full return for you.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to switch from another program</h2>

          <ol>
            <li><strong>Save your prior-year return</strong> as a PDF from your old software.</li>
            <li><strong>Create a FreeTaxUSA account</strong> and upload the prior-year PDF on the import screen.</li>
            <li><strong>Verify imported data</strong> — name, address, dependents, prior-year carryovers (capital loss, depreciation, NOL, AMT credit).</li>
            <li><strong>Walk the interview</strong> as normal, entering 2025 (or current-year) information.</li>
            <li><strong>Pay only the $14.99 state fee</strong> (or $0 federal-only) at filing.</li>
          </ol>

          <p>
            <AffiliateButton partner="freetaxusa" source={slug}>
              File with FreeTaxUSA →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>FreeTaxUSA delivers 90% of what TurboTax delivers, at roughly 10% of the
            cost</strong>, for the typical filer with itemized deductions or investment income.
            The trade-off is a plainer interface and a small add-on fee if you want live human
            help.
          </p>

          <p>
            For most filers paying TurboTax $80+ a year, the switch saves more in three years than
            most people&apos;s retirement-account fees over a decade. Worth a single tax season to
            test.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link> — full TurboTax / TaxAct / FreeTaxUSA comparison.</li>
            <li><Link href="/learn/turbotax-vs-taxact">TurboTax vs. TaxAct</Link> — when paid software is worth it.</li>
            <li><Link href="/learn/how-to-file-taxes-for-free">How to file taxes for free</Link> — IRS Free File and Direct File.</li>
            <li><Link href="/learn/backdoor-roth-ira-guide">Backdoor Roth IRA guide</Link> — Form 8606 walkthrough.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — the rates the software applies.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
