import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "best-hsa-providers";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best HSA providers 2026: Fidelity, Lively, and HealthEquity compared";
const description =
  "Where to open an HSA outside your employer's default. Fidelity, Lively, and HealthEquity compared on fees, investment options, and which one fits the way you'll actually use the account.";
const PUBLISHED = "2026-05-30";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the best HSA provider?",
    a: "For most savers, Fidelity is the strongest pick: $0 account fees, zero investment minimums, full brokerage-grade investment options (stocks, ETFs, mutual funds), and integrated cash management. Lively is the strongest dedicated HSA provider — clean app, $0 fees for individuals, easy Schwab brokerage integration. HealthEquity is the largest HSA provider by employer adoption but typically charges monthly fees and has more limited investment options unless your employer covers the fee.",
  },
  {
    q: "Can I have an HSA outside my employer's HSA?",
    a: "Yes. You can open an HSA at any IRS-qualified provider regardless of which HSA your employer offers. You can either contribute directly outside payroll (and deduct on your tax return) or contribute via payroll to the employer HSA and roll the balance to your preferred provider once a year. Roll-overs between HSAs are free, unlimited, and have no tax impact.",
  },
  {
    q: "Should I move money from my employer's HSA to my own?",
    a: "Usually yes, if the employer HSA has fees over ~$3/month, high investment-expense-ratio funds (~0.50%+), or a large required cash minimum before you can invest. Roll the balance once or twice a year via trustee-to-trustee transfer (free, no tax). Keep payroll deductions going to the employer HSA — you'll lose the FICA savings (7.65%) if you stop.",
  },
  {
    q: "Are there account fees on HSAs?",
    a: "It varies. Fidelity and Lively are $0 for individuals. HealthEquity typically charges $3–$5/month if you don't have an employer subsidy. Some less-common providers charge investment-trading fees, monthly fees, or paper statement fees. Compare total annual cost (account fee + investment expense ratio × balance) rather than headline rates.",
  },
  {
    q: "Do all HSAs let you invest?",
    a: "Most do, but with different rules. Fidelity lets you invest from dollar one with no minimum cash buffer. Lively partners with Charles Schwab for investments, also no minimum buffer. HealthEquity and many employer HSAs require you to maintain a cash buffer ($1,000–$2,000) before investing the excess. The buffer reduces growth and is the single biggest reason to roll an employer HSA to Fidelity or Lively.",
  },
  {
    q: "Can I open an HSA if I'm self-employed?",
    a: "Yes, if you're enrolled in a qualifying HDHP. Self-employed people can't contribute via payroll (no FICA savings) but get the federal and state tax deduction by claiming it on Form 8889 with their tax return. Open the HSA directly with Fidelity, Lively, or HealthEquity — no employer involvement needed.",
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
          subtitle="Your employer's HSA is rarely the best HSA. Three top non-employer providers compared on fees, investment options, and integration — with a clear pick for most savers."
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
            <strong>For most savers, Fidelity is the best HSA in the country</strong> — $0 fees,
            $0 minimum to invest, brokerage-grade investment options, and the same one-app
            experience as your IRA and 401(k).
          </p>

          <p>
            <strong>Your employer&apos;s HSA is rarely the best HSA.</strong> Employer-default
            providers often charge $3–$5/month, force you to keep $1,000–$2,000 in cash before
            investing, and offer only a small mutual-fund menu with expense ratios two-to-five
            times higher than what you&apos;d pay in a normal brokerage account.
          </p>

          <p>
            This guide compares the three best non-employer HSA providers and explains how to use
            them alongside your employer&apos;s payroll deduction without giving up the FICA tax
            savings.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Side-by-side: Fidelity, Lively, HealthEquity</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4"></th>
                  <th className="py-3 pr-4">Fidelity</th>
                  <th className="py-3 pr-4">Lively</th>
                  <th className="py-3 pr-4">HealthEquity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Monthly fee (individual)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">~$3–$5</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Investment minimum</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$0 (via Schwab)</td><td className="py-3 pr-4">$1,000 cash buffer</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Investment options</td><td className="py-3 pr-4">Stocks, ETFs, mutual funds</td><td className="py-3 pr-4">Stocks/ETFs (Schwab) or fund menu</td><td className="py-3 pr-4">Curated mutual fund menu</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Mobile app</td><td className="py-3 pr-4">Full Fidelity app</td><td className="py-3 pr-4">Dedicated Lively app</td><td className="py-3 pr-4">HealthEquity app</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">DIY investor with other Fidelity accounts</td><td className="py-3 pr-4">Clean dedicated HSA experience</td><td className="py-3 pr-4">Employer default (avoid for personal)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Our pick for most savers: Fidelity HSA</h2>

          <p>
            <strong>Fidelity is the clear winner if you already use Fidelity for an IRA or
            taxable account</strong> — same login, same app, same investment options, integrated
            cash management.
          </p>

          <ul>
            <li><strong>Fees:</strong> $0 monthly fee. $0 minimum to invest. $0 commissions on stocks and ETFs.</li>
            <li><strong>Investment options:</strong> the full Fidelity universe — stocks, ETFs, and including their zero-expense-ratio index funds (FZROX, FZILX).</li>
            <li><strong>Cash management:</strong> Fidelity HSA cash earns a competitive yield without you having to manually park it in a money-market fund.</li>
            <li><strong>Best for:</strong> anyone treating the HSA as a long-term retirement account; existing Fidelity customers; people who want one app for everything.</li>
            <li><strong>Skip if:</strong> you want a dedicated HSA-only mobile app experience (Lively&apos;s app is cleaner for just-the-HSA use cases).</li>
          </ul>

          <p>
            <AffiliateButton partner="fidelity-hsa" source={slug}>
              Open an HSA at Fidelity →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Best dedicated HSA: Lively</h2>

          <p>
            <strong>Lively is built from the ground up as an HSA-only provider.</strong> If you
            don&apos;t want your HSA living inside a larger brokerage interface, Lively&apos;s
            dedicated app is the cleanest experience in the category.
          </p>

          <ul>
            <li><strong>Fees:</strong> $0 monthly fee for individuals. Some employer plans charge.</li>
            <li><strong>Investments:</strong> two paths — a curated mutual-fund menu or full self-directed brokerage via a linked Charles Schwab account (the Schwab integration is the standout feature).</li>
            <li><strong>Receipt vault:</strong> built-in receipt-storage feature for the long-term &quot;save receipts forever&quot; strategy.</li>
            <li><strong>Best for:</strong> savers who want a clean HSA-only experience without the broader Fidelity ecosystem.</li>
            <li><strong>Skip if:</strong> you&apos;d rather consolidate everything (IRA, taxable, HSA) in one place.</li>
          </ul>

          <p>
            <AffiliateButton partner="lively" source={slug}>
              Open an HSA at Lively →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>HealthEquity: the big employer default — use with caution</h2>

          <p>
            <strong>HealthEquity is the largest HSA administrator by employer adoption.</strong>
            If your employer offers an HSA, there&apos;s a good chance HealthEquity runs it.
            That&apos;s fine for the payroll-deduction step but suboptimal for long-term growth.
          </p>

          <ul>
            <li><strong>Fees:</strong> typically $3–$5/month for individuals (may be waived if your employer subsidizes).</li>
            <li><strong>Cash buffer:</strong> often $1,000 must stay in cash before you can invest.</li>
            <li><strong>Investments:</strong> curated mutual-fund menu only — no self-directed stocks/ETFs.</li>
            <li><strong>Best for:</strong> using as the payroll-deduction account, then rolling balances to Fidelity or Lively annually.</li>
            <li><strong>Skip as a primary HSA</strong> unless your employer fully covers fees and the fund menu is genuinely low-cost.</li>
          </ul>

          <p>
            <AffiliateButton partner="healthequity" source={slug}>
              See HealthEquity HSA →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two-HSA strategy</h2>

          <p>
            <strong>You can — and probably should — use two HSAs:</strong>
          </p>

          <ol>
            <li>
              <strong>Employer HSA</strong> (often HealthEquity) — keep payroll deductions running.
              This captures the <strong>~7.65% FICA tax savings</strong> you only get via payroll;
              you&apos;d lose that if you stopped and contributed elsewhere directly.
            </li>
            <li>
              <strong>Personal HSA at Fidelity or Lively</strong> — once or twice a year, roll the
              accumulated employer HSA balance over to your personal HSA via trustee-to-trustee
              transfer. No tax, no fee, no limit on these transfers.
            </li>
            <li>
              <strong>Invest the balance</strong> in your personal HSA. The employer HSA can sit
              near zero between rollovers.
            </li>
          </ol>

          <p>
            <strong>This setup gets you the FICA savings AND the lower fees</strong> — the best of
            both. The annual rollover takes 10 minutes.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Self-employed? Open the HSA directly</h2>

          <p>
            <strong>Without an employer, payroll FICA savings don&apos;t apply.</strong> You
            contribute directly to your HSA (post-tax cash flow) and deduct it on your tax return
            via Form 8889. Open at Fidelity or Lively; the federal/state income-tax savings are
            still there, and you keep all the investment flexibility.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to compare HSAs in one number</h2>

          <p>
            <strong>Total annual cost = monthly fee × 12 + (investment expense ratio × balance).</strong>
            That&apos;s the only number that matters for long-term planning.
          </p>

          <p>
            <strong>An example.</strong> $25,000 balance, comparing two providers:
          </p>

          <ul>
            <li>Fidelity: $0/yr fee + (0.015% × $25,000) = <strong>~$4/yr</strong>.</li>
            <li>HealthEquity (no employer subsidy): $48/yr fee + (0.45% × $25,000) = <strong>~$161/yr</strong>.</li>
          </ul>

          <p>
            <strong>The difference compounds.</strong> Over 30 years at $8,750/year contributions,
            the $157/year gap costs roughly $14,000 in lost growth — meaningful relative to a
            ~$830,000 ending balance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Open your HSA at Fidelity if you&apos;re a DIY investor or already use
            Fidelity.</strong> Open it at <strong>Lively</strong> if you want a clean HSA-only
            experience. Use the employer HSA (often HealthEquity) only as a way station for the
            FICA tax savings — roll the balance to your personal HSA at least once a year.
          </p>

          <p>
            The HSA wins on tax efficiency only if you actually invest the balance and keep fees
            low. Picking the right provider is the most important decision after deciding to
            contribute in the first place.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/hsa-vs-fsa">HSA vs. FSA</Link> — the basics + 2026 limits.</li>
            <li><Link href="/learn/hsa-as-retirement-account">HSA as a retirement account</Link> — the long-term stealth-IRA strategy.</li>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link> — where the rest of your retirement stack lives.</li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which to fund first</Link> — order of operations including the HSA.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Save tax" currentSlug="best-hsa-providers" />
      </article>
    </>
  );
}
