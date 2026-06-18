import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-file-taxes-for-free";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to file your taxes for free (2026 guide)";
const description =
  "Every legitimate free way to file federal and state taxes — IRS Free File, IRS Direct File, free editions of TurboTax/TaxAct, and FreeTaxUSA — with a flowchart for picking the right one based on your income and return complexity.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Can I actually file my taxes for free?",
    a: "Yes — multiple legitimate paths exist. IRS Free File partners offer free federal AND state filing for filers below an income threshold (~$84,000 AGI for 2025 returns). IRS Direct File (the IRS's own program) is free for both federal and state in supported states. FreeTaxUSA offers free federal for any return type and ~$15 state. TurboTax and TaxAct have free tiers limited to the simplest W-2-only returns.",
  },
  {
    q: "What is IRS Free File?",
    a: "IRS Free File is the IRS's partnership with several tax-software companies that agree to provide free federal filing — often with free state filing — to taxpayers below an annual AGI threshold. For 2025 tax returns (filed in 2026), the threshold is roughly $84,000. The partner programs vary in features and state coverage, so check IRS.gov in January for the current list and use their lookup tool to pick the right partner for your state.",
  },
  {
    q: "What is IRS Direct File?",
    a: "Direct File is the IRS's own e-filing program — built by the government, free for both federal and state, with no income limit in supported states. It launched as a pilot in 2024, expanded to more states for 2025 returns, and is expected to cover even more states and return types for 2026 returns. It currently handles W-2 income, common credits, and standard deduction returns. Check IRS.gov each January for state availability.",
  },
  {
    q: "Is TurboTax Free Edition actually free?",
    a: "It's free only for very simple returns — Form 1040 with W-2 income, the standard deduction, and basic credits like the EITC and Child Tax Credit. As soon as you have itemized deductions, HSA contributions, 1099 income, investment income, or a 1099-B from a brokerage, you're pushed into a paid tier ($59+). FreeTaxUSA covers all of these for free at the federal level.",
  },
  {
    q: "What if I owe taxes — can I still file for free?",
    a: "Yes, filing and paying are separate. You can file your return for free through any of the methods above and still owe taxes; you just pay what you owe at filing time (or set up an IRS payment plan). The free-filing programs only cover the preparation and submission of the return, not the tax bill itself.",
  },
  {
    q: "Do free-file programs handle state returns?",
    a: "It varies. IRS Free File partners must offer free state for filers below the AGI threshold in participating states. IRS Direct File now includes free state in supported states. FreeTaxUSA charges ~$15 per state. TurboTax Free Edition includes one free state for qualifying simple returns. Always check whether your state is covered before you start — switching mid-prep is annoying.",
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
          subtitle="Four legitimate paths to a $0 federal filing, plus the small list of state-filing fees you might still owe. A decision tree for picking the right one based on your AGI and return complexity."
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
            <strong>You almost certainly don&apos;t need to pay $100+ to file your taxes.</strong>
            Most filers qualify for at least one free option that handles their full return — the
            trick is picking the right one for your income level and return complexity.
          </p>

          <p>
            <strong>Four real paths exist:</strong> IRS Free File, IRS Direct File, FreeTaxUSA, and
            the genuinely-free tiers of TurboTax and TaxAct. Each has trade-offs — some are
            income-limited, some are state-limited, some are limited to W-2-only returns.
          </p>

          <p>
            This guide walks all four, says exactly when each one wins, and gives you a one-glance
            decision tree.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The decision tree</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">If you have…</th>
                  <th className="py-3 pr-4">Best free option</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">AGI under ~$84,000 + simple return</td><td className="py-3 pr-4"><strong>IRS Free File</strong> (free fed + state)</td></tr>
                <tr><td className="py-3 pr-4">W-2 only + standard deduction, state supported</td><td className="py-3 pr-4"><strong>IRS Direct File</strong> (free fed + state)</td></tr>
                <tr><td className="py-3 pr-4">Itemized deductions / 1099s / investments</td><td className="py-3 pr-4"><strong>FreeTaxUSA</strong> (free fed, ~$15 state)</td></tr>
                <tr><td className="py-3 pr-4">Self-employed / rental / K-1</td><td className="py-3 pr-4"><strong>FreeTaxUSA</strong> (free fed, ~$15 state)</td></tr>
                <tr><td className="py-3 pr-4">Truly simple W-2 + want best UX</td><td className="py-3 pr-4"><strong>TurboTax Free Edition</strong></td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Option 1: IRS Free File</h2>

          <p>
            <strong>IRS Free File is the IRS&apos;s partnership with several private tax-software
            companies</strong> that agree to provide free federal — often free state — filing for
            taxpayers below an annual AGI threshold. The 2025-tax-year threshold is roughly
            <strong> $84,000 in adjusted gross income</strong> (the threshold is updated each year;
            confirm at IRS.gov in January).
          </p>

          <ul>
            <li><strong>Cost:</strong> $0 federal; many partners also free state if you qualify.</li>
            <li><strong>Best for:</strong> AGI under ~$84,000 with a relatively simple return.</li>
            <li><strong>How to use it:</strong> go to IRS.gov, click &quot;Free File,&quot; use the lookup tool to find a partner that covers your state and return type.</li>
            <li><strong>Watch out for:</strong> the partner sites look like regular tax software and try hard to upsell — start your filing through the IRS&apos;s Free File portal, not by going directly to TurboTax/TaxAct/etc.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Option 2: IRS Direct File</h2>

          <p>
            <strong>Direct File is the IRS&apos;s own free e-filing program</strong> — no third
            party involved. Launched as a pilot for 2023 returns, expanded for 2024 and 2025
            returns. For 2026 returns (filed in 2027), it&apos;s expected to cover more states and
            additional return types.
          </p>

          <ul>
            <li><strong>Cost:</strong> $0 federal and $0 state in supported states.</li>
            <li><strong>No income limit</strong> (unlike Free File).</li>
            <li><strong>Best for:</strong> W-2 income, standard deduction, common credits (EITC, Child Tax Credit, Saver&apos;s Credit), in a participating state.</li>
            <li><strong>Skip if:</strong> you itemize, are self-employed, have investment income, or your state isn&apos;t covered.</li>
            <li><strong>Check state availability</strong> at IRS.gov/DirectFile each January.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Option 3: FreeTaxUSA</h2>

          <p>
            <strong>FreeTaxUSA is genuinely free for federal — for any return type.</strong>
            Itemized deductions, 1099s, investment income, rental property, self-employment, HSA
            contributions, K-1s: all $0 at the federal level. State returns cost <strong>$14.99
            each</strong>.
          </p>

          <ul>
            <li><strong>Cost:</strong> $0 federal, $14.99 state.</li>
            <li><strong>No income limit.</strong></li>
            <li><strong>Best for:</strong> anyone whose return is too complex for IRS Free File or Direct File but who doesn&apos;t want to pay TurboTax prices.</li>
            <li><strong>Trade-off:</strong> the interface is plainer than TurboTax&apos;s; live human help is a $7.99 add-on.</li>
          </ul>

          <p>
            <AffiliateButton partner="freetaxusa" source={slug}>
              File with FreeTaxUSA →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Option 4: TurboTax Free Edition / TaxAct Free</h2>

          <p>
            <strong>Both TurboTax and TaxAct offer free tiers</strong> — but these are limited to
            very simple returns. As soon as you have anything beyond W-2 income and the standard
            deduction, you&apos;re pushed into a paid tier.
          </p>

          <ul>
            <li><strong>Covered free:</strong> W-2 income, standard deduction, EITC, Child Tax Credit, student loan interest deduction.</li>
            <li><strong>NOT covered free:</strong> itemized deductions, HSA contributions, 1099-B (investments), 1099-NEC (self-employment), rental income.</li>
            <li><strong>State filing:</strong> TurboTax Free Edition typically includes one free state for qualifying returns; TaxAct usually charges.</li>
            <li><strong>Best for:</strong> truly simple returns where you want the polished interface for the first-filing experience.</li>
          </ul>

          <p>
            <AffiliateButton partner="turbotax" source={slug}>
              Try TurboTax Free Edition →
            </AffiliateButton>
          </p>

          <p>You can also use:</p>
          <ul>
            <li><AffiliateButton partner="taxact" source={slug} variant="secondary">TaxAct Free</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The free options ranked by income</h2>

          <p>
            <strong>If you want the simplest answer:</strong>
          </p>

          <ul>
            <li><strong>AGI under $84,000 + simple return:</strong> start at <em>IRS.gov/FreeFile</em>. Likely free fed + state.</li>
            <li><strong>Any income + W-2 only in a Direct File state:</strong> <em>IRS Direct File</em>. Free fed + state, no income limit.</li>
            <li><strong>Any income + anything complex:</strong> <em>FreeTaxUSA</em>. $15 total for fed + state, supports everything.</li>
            <li><strong>High AGI + W-2 only + want polish:</strong> <em>TurboTax Free Edition</em> — but verify it covers your specific return before you finish.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Common &quot;free&quot; traps</h2>

          <ul>
            <li><strong>Going direct to TurboTax instead of IRS Free File.</strong> If your AGI qualifies for Free File, start at IRS.gov — the direct TurboTax site will push you into a paid tier even if you would have qualified for free filing through the Free File portal.</li>
            <li><strong>State-filing fees.</strong> Some &quot;free federal&quot; programs charge $40+ for state. FreeTaxUSA&apos;s $14.99 state is among the cheapest; IRS Free File and Direct File state filing is genuinely free in covered situations.</li>
            <li><strong>Up-sells mid-return.</strong> Programs that start free routinely prompt to upgrade for &quot;maximum refund&quot; or &quot;audit defense.&quot; You almost never need these add-ons.</li>
            <li><strong>Filing late.</strong> Free options don&apos;t change the deadline. File or extend by April 15.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For most filers, FreeTaxUSA covers the most ground at the lowest total cost
            ($15)</strong> — even if you have investments, side gigs, or itemized deductions. If
            your AGI is under $84,000 and your return is simple, IRS Free File or Direct File
            should be your first stop and may cost you literally nothing.
          </p>

          <p>
            Almost no one needs to pay $100+ for tax software — and once you set up next year&apos;s
            filing with the same program, the whole process gets faster every year.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What to do with the refund</h2>

          <p>
            <strong>If you&apos;re getting money back, don&apos;t let it sit in checking.</strong>{" "}
            A <Link href="/learn/best-hysa-2026">high-yield savings account</Link>{" "}
            pays meaningful APY while you decide whether the refund goes to an
            emergency fund, IRA contribution, or HSA top-up.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open SoFi Money →
            </AffiliateButton>
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-tax-software-2026">Best tax software 2026</Link> — full software comparison.</li>
            <li><Link href="/learn/freetaxusa-review">FreeTaxUSA review</Link> — the value pick in depth.</li>
            <li><Link href="/learn/turbotax-vs-taxact">TurboTax vs. TaxAct</Link> — when paid software is worth it.</li>
            <li><Link href="/learn/tax-brackets-2026">2026 tax brackets</Link> — the rates the software applies.</li>
            <li><Link href="/learn/qualified-vs-ordinary-dividends">Qualified vs. ordinary dividends</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Save tax" currentSlug="how-to-file-taxes-for-free" />
      </article>
    </>
  );
}
