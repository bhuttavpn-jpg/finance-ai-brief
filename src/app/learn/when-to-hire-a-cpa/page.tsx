import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "when-to-hire-a-cpa";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "When to hire a CPA (and when tax software is enough)";
const description =
  "DIY tax software handles 90% of returns just fine. You need a CPA when complexity jumps — self-employment, rental property, multi-state, equity comp, K-1s, an audit, or a major life event. Here's the honest decision framework and what to expect on cost.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How much does a CPA cost?",
    a: "Simple 1040 with itemized deductions: $200–$400. Self-employed Schedule C with reasonable complexity: $400–$800. S-corp or partnership return: $800–$2,000. Multi-state with rental properties: $600–$1,500. A good CPA pays for themselves on returns over a certain complexity threshold by catching deductions and avoiding errors.",
  },
  {
    q: "What's the difference between a CPA, EA, and tax preparer?",
    a: "CPAs (Certified Public Accountants) hold state licenses, pass the rigorous CPA exam, and can represent you in audits. EAs (Enrolled Agents) are federally licensed by the IRS — can also represent you, often cheaper. Tax preparers (TurboTax employees, H&R Block staff) have less training and can't represent you in disputes. Each has its place.",
  },
  {
    q: "Will a CPA save me money on my taxes?",
    a: "Sometimes — depends on your complexity. For simple W-2 returns, a CPA rarely finds savings the software missed. For self-employed, rental property, or equity-comp returns, a good CPA typically saves 2–5× their fee in legitimate deductions and tax planning a layperson would miss.",
  },
  {
    q: "Can I use a CPA just for tax-planning advice, not filing?",
    a: "Yes — this is increasingly common. A 1-hour planning session ($200–$400) before year-end can identify Roth conversion opportunities, HSA optimization, business entity changes, and timing strategies. Then you file with tax software using the plan. Often the best ROI for moderately complex filers.",
  },
  {
    q: "When should I switch from DIY to a CPA?",
    a: "When you encounter any of: first year of self-employment, first rental property, first stock vest with RSUs or ISOs, first multi-state filing (moved states or work in multiple), first K-1 partnership/S-corp income, an IRS notice or audit, a major life event (death of a spouse, divorce, inheritance, sale of a business). Any of these is a 'get a CPA at least for this year' trigger.",
  },
  {
    q: "Should I keep my CPA every year?",
    a: "Depends on whether the complexity persists. If you're permanently self-employed or own rentals, yes. If a one-year event triggered the CPA hire (RSU vest, home sale, inheritance), you can sometimes return to DIY software in subsequent simpler years. Many people keep a CPA on retainer for planning even when filing is straightforward.",
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
          subtitle="DIY software handles 90% of returns just fine. The other 10% — self-employed, rentals, equity comp, multi-state, K-1s, audits — is where a CPA earns their fee."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>For most W-2 employees with straightforward situations, tax software is
            fine.</strong> The combination of TurboTax / FreeTaxUSA / TaxAct + a couple of hours
            handles the return accurately and at low cost. The conversation changes when complexity
            jumps — at which point a good CPA often pays for themselves 2–5× over in legitimate
            tax savings.
          </p>

          <p>
            Here's the honest framework for deciding when to make the switch.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When tax software is enough</h2>

          <p>You're fine with DIY software if your return looks like:</p>

          <ul>
            <li><strong>W-2 income only</strong> (one or multiple employers, single state).</li>
            <li><strong>Standard deduction</strong> or simple itemized deductions (mortgage interest + SALT cap + charitable).</li>
            <li><strong>Tax-advantaged contributions</strong> like 401(k), IRA, HSA (well-handled by software).</li>
            <li><strong>1099-INT, 1099-DIV, simple 1099-B</strong> from a single brokerage.</li>
            <li><strong>Common credits</strong> like child tax credit, education credit, savers credit.</li>
            <li><strong>Common life events</strong>: marriage, new child, home purchase.</li>
          </ul>

          <p>
            <strong>Software cost: $0–$140 depending on complexity.</strong> A CPA on this return
            charges $200–$400 to do roughly the same thing.
          </p>

          <p>
            <AffiliateButton partner="freetaxusa" source={slug}>
              File with FreeTaxUSA →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="turbotax" source={slug} variant="secondary">TurboTax</AffiliateButton>{" "}
            <AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct</AffiliateButton>
          </p>

          <p>
            Full roundup in our <Link href="/learn/best-tax-software-2026">best tax software 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 8 "get a CPA" triggers</h2>

          <h3>1. Self-employed income (Schedule C)</h3>

          <p>
            <strong>First year of freelance, consulting, side business, or gig work above
            ~$10K.</strong> A CPA helps with: home office deduction, business vehicle mileage,
            self-employed retirement (SEP-IRA, Solo 401(k)), Section 179 expensing, QBI deduction,
            and avoiding the self-employment tax mistakes most DIY filers make.
          </p>

          <p>
            <strong>Typical savings:</strong> $1,000–$5,000 in year one over what DIY would have
            produced.
          </p>

          <h3>2. Rental property (Schedule E)</h3>

          <p>
            Depreciation calculations, passive activity loss rules, and cost segregation
            opportunities are complex. A CPA also helps optimize the buy/sell timing and the 1031
            exchange decision when you sell.
          </p>

          <h3>3. Equity comp (RSUs, ISOs, NQSOs, ESPP)</h3>

          <p>
            Especially for ISOs (AMT implications) and ESPP (qualifying vs. disqualifying
            dispositions). The basis reporting on the 1099-B is wrong by default for ISOs and ESPP
            — DIY filers regularly double-pay tax. A CPA catches it.
          </p>

          <p>
            For Roth-related equity-comp strategy, see also our{" "}
            <Link href="/learn/backdoor-roth-ira-guide">backdoor Roth</Link> and{" "}
            <Link href="/learn/mega-backdoor-roth-guide">mega backdoor Roth</Link> guides.
          </p>

          <h3>4. Multi-state filing</h3>

          <p>
            Moved states mid-year, work remotely across state lines, or own property in multiple
            states. State return interactions (especially CA, NY, MA) often surprise DIY filers.
          </p>

          <h3>5. K-1 income (partnerships, S-corps)</h3>

          <p>
            K-1s from partnerships, S-corps, or LLCs are complex source documents. The basis
            tracking, passive vs. active income, and state apportionment are common DIY error
            zones.
          </p>

          <h3>6. IRS notice or audit</h3>

          <p>
            <strong>Don't go through an audit alone.</strong> EAs and CPAs can represent you and
            often resolve issues for less stress and lower cost than self-representation. Even a
            simple IRS letter (CP2000) is worth running past a tax pro before responding.
          </p>

          <h3>7. Major life event</h3>

          <p>
            Death of a spouse (final return + survivor planning), divorce (asset transfer and
            alimony rules, especially pre/post-2019 divorces), inheritance (estate vs. income tax,
            step-up in basis), business sale, large capital gain.
          </p>

          <h3>8. Income above ~$300K with multiple sources</h3>

          <p>
            High income + multiple income streams (W-2 + consulting + investment + rental) crosses
            a complexity threshold where the marginal hour of tax planning earns multiples of its
            cost. Plus AMT, NIIT, and additional Medicare tax interactions need careful management.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The middle path: CPA for planning, DIY for filing</h2>

          <p>
            <strong>An increasingly popular approach</strong>, especially for moderately complex
            filers who want professional advice but don't need full preparation services.
          </p>

          <ul>
            <li><strong>October–November:</strong> 1-hour planning session with a CPA ($200–$400). Discuss Roth conversions, charitable strategy, estimated tax payments, retirement contributions, big-ticket purchases.</li>
            <li><strong>December:</strong> Execute the year-end moves the CPA recommended.</li>
            <li><strong>February–March:</strong> File with tax software using the plan.</li>
            <li><strong>April:</strong> Done. Total cost: $300–$500 (vs. $800+ for full CPA preparation).</li>
          </ul>

          <p>
            <strong>Works well for:</strong> moderately complex W-2 filers, single-property landlords
            with stable rental income, established self-employed with clean books, equity-comp
            employees post-IPO when the volatility settles.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>CPA vs. EA vs. Tax Preparer</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Credential</th>
                  <th className="py-3 pr-4">Licensed by</th>
                  <th className="py-3 pr-4">Can represent in audit?</th>
                  <th className="py-3 pr-4">Typical fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">CPA</td><td className="py-3 pr-4">State board</td><td className="py-3 pr-4">Yes — full representation</td><td className="py-3 pr-4">$200–$2,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">EA (Enrolled Agent)</td><td className="py-3 pr-4">IRS directly</td><td className="py-3 pr-4">Yes — full representation</td><td className="py-3 pr-4">$150–$1,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Tax Attorney</td><td className="py-3 pr-4">State bar</td><td className="py-3 pr-4">Yes — including court</td><td className="py-3 pr-4">$300–$500/hour</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Tax Preparer</td><td className="py-3 pr-4">PTIN only (low bar)</td><td className="py-3 pr-4">Limited to returns they prepared</td><td className="py-3 pr-4">$100–$400</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>For most complex returns, an EA is the better fit than a CPA.</strong> EAs
            specialize in taxes specifically — they don't audit financial statements or do other
            CPA work. Their tax expertise is often deeper at a lower hourly rate. CPAs win when you
            need integrated financial-statement and tax work (e.g., for a business).
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to find a good one</h2>

          <ol>
            <li><strong>Ask your network.</strong> Friends with similar tax complexity to yours give the most relevant referrals.</li>
            <li><strong>Look for specialists.</strong> A CPA who specializes in real estate is a much better fit for landlords than a generalist.</li>
            <li><strong>Verify credentials.</strong> CPA: state board lookup. EA: IRS directory.</li>
            <li><strong>Ask about communication.</strong> Email turnaround time, mid-year availability, who you'll actually speak with.</li>
            <li><strong>Ask for a fee estimate upfront.</strong> A good CPA will quote based on prior-year complexity.</li>
            <li><strong>Avoid "we'll guarantee a refund" pitches.</strong> Either inflated promises or fraud risk.</li>
            <li><strong>Stay away from pop-up offices.</strong> Seasonal tax shops have high error rates and limited recourse.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Red flags in a tax pro</h2>

          <ul>
            <li>Charges based on a percentage of your refund (incentive misalignment).</li>
            <li>Asks you to sign a blank return.</li>
            <li>Refuses to give you a copy of your return for your records.</li>
            <li>Asks for cash payment only.</li>
            <li>Claims they can get refunds "no one else can" without explaining the specific deductions.</li>
            <li>Doesn't have a PTIN (Preparer Tax Identification Number).</li>
            <li>Doesn't ask about your full financial picture before quoting a price.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Tax software handles simple W-2 returns better and cheaper than a CPA.</strong>{" "}
            Once you cross into Schedule C, Schedule E, K-1, multi-state, equity comp, or a major
            life event, the CPA's fee typically pays for itself multiple times over.
          </p>

          <p>
            For moderately complex filers: consider the "CPA for planning, software for filing"
            middle path. Best ROI for many households.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to park your refund</h2>

          <p>
            <strong>Whether you DIY or hire out, the refund still needs a home.</strong>{" "}
            A <Link href="/learn/best-hysa-2026">high-yield savings account</Link>{" "}
            pays meaningful APY while you decide whether the money goes to an
            emergency fund, IRA contribution, or HSA top-up.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open SoFi Money →
            </AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link></li>
            <li><Link href="/learn/turbotax-vs-taxact">TurboTax vs. TaxAct</Link></li>
            <li><Link href="/learn/how-to-file-taxes-for-free">How to file taxes for free</Link></li>
            <li><Link href="/learn/tax-deductions-checklist">Tax deductions checklist</Link></li>
            <li><Link href="/learn/standard-vs-itemized-deduction">Standard vs. itemized deduction</Link></li>
            <li><Link href="/learn/tax-brackets-2026">2026 federal tax brackets</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
