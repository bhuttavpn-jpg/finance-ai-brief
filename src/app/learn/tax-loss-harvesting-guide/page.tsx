import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import {
  JsonLd,
  articleJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "tax-loss-harvesting-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Tax-loss harvesting: How it works and how to do it right";
const description =
  "A plain-language guide to tax-loss harvesting — how selling losers cuts your tax bill, the wash-sale rule that trips people up, the $3,000 income offset limit, and how to harvest losses step by step.";
const PUBLISHED = "2026-05-20";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is tax-loss harvesting in simple terms?",
    a: "It's selling an investment that has dropped in value to lock in a capital loss, then using that loss to offset capital gains and up to $3,000 of ordinary income on your tax return. You typically reinvest the proceeds in a similar (but not 'substantially identical') asset so you stay invested while banking the tax benefit.",
  },
  {
    q: "What is the wash-sale rule?",
    a: "The IRS wash-sale rule disallows a loss if you buy the same or a 'substantially identical' security within 30 days before or after the sale — a 61-day window total. If you trip it, the loss is deferred, not lost, by adding it to the cost basis of the replacement shares. Avoid it by buying a similar-but-different fund.",
  },
  {
    q: "How much can tax-loss harvesting save me?",
    a: "It depends on your gains and tax rate. Harvested losses first offset capital gains dollar-for-dollar; any excess offsets up to $3,000 of ordinary income per year, with the rest carried forward indefinitely. At a 24% marginal rate, offsetting $3,000 of income saves about $720 in a year — plus whatever you save on offset gains.",
  },
  {
    q: "Can I tax-loss harvest in my IRA or 401(k)?",
    a: "No. Tax-loss harvesting only works in a taxable brokerage account. Gains and losses inside IRAs, Roth IRAs, and 401(k)s aren't taxed year to year, so there's nothing to harvest. Selling a loser inside a retirement account gives you no deductible loss.",
  },
  {
    q: "Does tax-loss harvesting eliminate taxes or just delay them?",
    a: "Mostly it defers them. Selling at a loss and buying a replacement lowers your cost basis, so you may owe more when you eventually sell the replacement. The benefit comes from deferring tax (your money compounds longer), offsetting income taxed at higher ordinary rates, and the step-up in basis at death, which can erase the deferred gain entirely.",
  },
  {
    q: "When is the best time to harvest losses?",
    a: "Many investors do a year-end review in November or December, but losses can be harvested any time markets dip. The trades must settle by December 31 to count for that tax year. Automated robo-advisors check for harvesting opportunities daily, which captures more transient dips than an annual sweep.",
  },
  {
    q: "Do I have to reinvest the proceeds?",
    a: "No, but most people do — the goal is to stay invested while capturing the loss. The key is to buy something similar enough to keep your target allocation but different enough to avoid the wash-sale rule, such as swapping one total-market index fund for another tracking a different index.",
  },
];

const HOWTO_STEPS = [
  { name: "Review your taxable account for losses", text: "Look only at your taxable brokerage account (not IRAs or 401(k)s). Identify positions trading below your cost basis — your purchase price plus reinvested dividends." },
  { name: "Confirm the loss is worth harvesting", text: "Make sure the tax benefit (offset gains plus up to $3,000 of income) outweighs trading costs and any short-term-vs-long-term considerations. Prioritize harvesting short-term losses, which offset higher-taxed short-term gains first." },
  { name: "Sell the losing position", text: "Sell the shares to realize the capital loss. Note the date — the wash-sale window runs 30 days before and after this sale." },
  { name: "Reinvest in a similar but not identical asset", text: "Immediately buy a fund that keeps your target allocation but isn't 'substantially identical' — for example, swap an S&P 500 fund for a total-market fund. This avoids the wash-sale rule while keeping you invested." },
  { name: "Record it for your tax return", text: "Keep the trade confirmations. The loss is reported on Schedule D and Form 8949. Any loss beyond your gains plus $3,000 carries forward to future years." },
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
      <JsonLd data={howToJsonLd({ name: title, steps: HOWTO_STEPS })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Turn a losing investment into a tax deduction — without leaving the market or running afoul of the wash-sale rule."
          pillar="Save tax"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="12 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Tax-loss harvesting</strong> means selling an investment that&apos;s down to lock
            in a loss you can use to cut your tax bill — then reinvesting so you stay in the market.
          </p>

          <p>
            <strong>Here&apos;s the core idea.</strong> When you sell an investment for less than you
            paid, you realize a capital loss. The IRS lets you use that loss to offset capital gains
            dollar-for-dollar, and to offset up to <strong>$3,000</strong> of ordinary income per
            year on top of that. Any leftover loss carries forward to future years indefinitely.
          </p>

          <p>
            Done well, it&apos;s one of the few ways to turn a market dip into a concrete tax
            benefit. Done carelessly, you trip the wash-sale rule and the deduction disappears. This
            guide covers exactly how it works, the rules that matter, and how to do it step by step.
            None of this is tax advice for your specific situation — confirm with a CPA or the IRS.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>A simple example</h2>
          <p>
            Numbers make this concrete. Suppose you have two events in a taxable account this year:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Event</th>
                  <th className="py-3 pr-4">Without harvesting</th>
                  <th className="py-3 pr-4">With harvesting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Realized capital gain</td>
                  <td className="py-3 pr-4">$5,000 (taxed)</td>
                  <td className="py-3 pr-4">$5,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Harvested loss</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$8,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Net taxable gain</td>
                  <td className="py-3 pr-4">$5,000</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Offsets ordinary income</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$3,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Loss carried to next year</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Illustrative figures, not tax advice. The $8,000 loss wipes out the $5,000 gain and offsets the maximum $3,000 of ordinary income.</p>
          </div>

          <p>
            <strong>The result:</strong> instead of paying tax on a $5,000 gain, you owe nothing on
            it <em>and</em> shelter $3,000 of regular income. At a 24% marginal rate, that
            $3,000 offset alone is worth about <strong>$720</strong> — and you&apos;re still
            invested through a replacement fund.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The wash-sale rule — the one thing that trips people up</h2>
          <p>
            The biggest mistake is buying back the same investment too quickly. This is where the
            wash-sale rule applies.
          </p>

          <p>
            <strong>What is the wash-sale rule?</strong> The IRS disallows your loss if you buy the
            same or a &quot;substantially identical&quot; security within <strong>30 days
            before or after</strong> the sale — a 61-day window total. The loss isn&apos;t
            destroyed; it&apos;s added to the cost basis of the replacement shares and deferred until
            you sell those.
          </p>

          <p>
            <strong>How do you avoid it?</strong> Reinvest in something similar but not identical.
            The standard move is to swap one index fund for another that tracks a different index but
            gives you nearly the same market exposure.
          </p>

          <ul>
            <li><strong>Allowed:</strong> Sell an S&amp;P 500 fund, buy a total U.S. stock market fund. Similar exposure, different index — not substantially identical.</li>
            <li><strong>Risky:</strong> Sell one S&amp;P 500 fund and buy another fund tracking the <em>same</em> S&amp;P 500 index. The IRS hasn&apos;t fully defined &quot;substantially identical&quot; for index funds, so most advisors avoid this.</li>
            <li><strong>Not allowed:</strong> Sell a stock, then rebuy the identical stock within 30 days. Classic wash sale.</li>
            <li><strong>Watch your IRA:</strong> A purchase of the identical security in your IRA can also trigger the rule. The window spans all your accounts, including a spouse&apos;s.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The rules that govern the benefit</h2>
          <p>
            A few IRS mechanics determine how much a harvested loss is actually worth:
          </p>

          <ul>
            <li><strong>Losses offset gains first.</strong> Short-term losses offset short-term gains (taxed at higher ordinary rates), and long-term losses offset long-term gains, before crossing over.</li>
            <li><strong>$3,000 income offset.</strong> After wiping out gains, up to <strong>$3,000</strong> of remaining loss offsets ordinary income each year (<strong>$1,500</strong> if married filing separately).</li>
            <li><strong>Unlimited carryforward.</strong> Any loss beyond that carries forward to future tax years with no expiration, ready to offset future gains or income.</li>
            <li><strong>Taxable accounts only.</strong> Harvesting does nothing in an IRA, Roth IRA, or 401(k) — those accounts aren&apos;t taxed year to year.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to harvest a loss, step by step</h2>
          <p>
            The actual process takes a few minutes per position once you know the sequence.
          </p>

          <ol>
            <li><strong>Review your taxable account for losers.</strong> Look only at your taxable brokerage account. Find positions trading below your cost basis.</li>
            <li><strong>Confirm it&apos;s worth it.</strong> Make sure the tax benefit outweighs trading friction. Prioritize short-term losses, which offset the highest-taxed gains first.</li>
            <li><strong>Sell the position.</strong> Realize the loss and note the date — the 61-day wash-sale window centers on it.</li>
            <li><strong>Reinvest in a similar, non-identical asset.</strong> Keep your target allocation while sidestepping the wash-sale rule.</li>
            <li><strong>Document it.</strong> Keep trade confirmations; the loss flows onto Schedule D and Form 8949 at tax time.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Should you automate it?</h2>
          <p>
            Harvesting by hand once a year is fine, but it misses dips that recover before December.
            Robo-advisors automate the process, scanning daily and executing wash-sale-safe swaps for
            you — useful if you have a large taxable balance and don&apos;t want to monitor it.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Approach</th>
                  <th className="py-3 pr-4">Best for</th>
                  <th className="py-3 pr-4">Trade-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Do it yourself</td>
                  <td className="py-3 pr-4">Simple portfolios, low cost</td>
                  <td className="py-3 pr-4">Misses intra-year dips; manual effort</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Robo-advisor (automated)</td>
                  <td className="py-3 pr-4">Large taxable balances, hands-off</td>
                  <td className="py-3 pr-4">Advisory fee (~0.25%/year)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Betterment</strong> and <strong>Wealthfront</strong> both build automated daily
            tax-loss harvesting into their taxable accounts:
          </p>
          <ul>
            <li><AffiliateButton partner="betterment" source={slug}>Open a Betterment taxable account →</AffiliateButton></li>
            <li><AffiliateButton partner="wealthfront" source={slug} variant="secondary">Open a Wealthfront account</AffiliateButton></li>
          </ul>
          <p>
            Prefer to keep it manual and free? A brokerage like Fidelity lets you harvest yourself
            with no advisory fee:
          </p>
          <p>
            <AffiliateButton partner="fidelity" source={slug} variant="secondary">
              Open a Fidelity brokerage account
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When tax-loss harvesting is NOT worth it</h2>
          <ul>
            <li><strong>You&apos;re in the 0% capital gains bracket.</strong> If your income is low enough that long-term gains are taxed at 0%, harvesting offers little benefit.</li>
            <li><strong>The position is in a retirement account.</strong> Nothing to harvest — gains and losses aren&apos;t taxed year to year.</li>
            <li><strong>You&apos;d violate your allocation.</strong> Never let the tax tail wag the investment dog. Don&apos;t sell into a worse portfolio just to book a loss.</li>
            <li><strong>The loss is tiny.</strong> Below a few hundred dollars, the effort and bid-ask friction may outweigh the benefit.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>
          <p>
            Tax-loss harvesting lets you convert a paper loss into a real tax benefit: it offsets
            capital gains dollar-for-dollar, shelters up to <strong>$3,000</strong> of ordinary
            income a year, and carries the rest forward indefinitely.
          </p>
          <p>
            <strong>The two rules to remember:</strong> it only works in a taxable account, and you
            must avoid buying a substantially identical security within the 61-day wash-sale window.
            Stay invested through a similar replacement fund, document the trades, and confirm the
            specifics with a CPA or the IRS for your situation.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/tools/tax-bracket">Tax bracket calculator</Link> — see your marginal rate, which sets the value of each harvested dollar.</li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link> — shelter growth from tax in the first place.</li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000 for beginners</Link> — build the index-fund portfolio that makes harvesting easy.</li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. traditional IRA</Link> — choose the right tax treatment for retirement savings.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
