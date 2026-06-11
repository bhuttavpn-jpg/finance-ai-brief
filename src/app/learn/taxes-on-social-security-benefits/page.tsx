import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "taxes-on-social-security-benefits";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Taxes on Social Security: How much of your benefit is taxable";
const description =
  "Up to 85% of your Social Security benefit is taxable as ordinary federal income — depending on your provisional income. Here's the formula, the thresholds (unchanged since 1984), and the planning moves that legitimately reduce the tax hit.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Will my Social Security benefits be taxed?",
    a: "Probably some of them. If your provisional income (modified AGI + tax-exempt interest + 50% of Social Security) exceeds $25,000 single / $32,000 MFJ, up to 50% of your benefits become taxable. Above $34,000 single / $44,000 MFJ, up to 85% become taxable. These thresholds have NEVER been indexed to inflation since 1984 — so most middle-class retirees today get hit.",
  },
  {
    q: "How is 'provisional income' calculated?",
    a: "Provisional income = your Adjusted Gross Income (excluding Social Security) + tax-exempt interest (like municipal bond interest) + 50% of your Social Security benefits. Yes, tax-exempt bond interest counts here — a quirk that catches retirees who think munis are entirely tax-free.",
  },
  {
    q: "Is up-to-85% the maximum, or could it be higher?",
    a: "85% is the federal maximum. No matter how high your income, the absolute most that becomes taxable is 85% of your annual benefits. The other 15% is always tax-free at the federal level. Some states tax Social Security on top of this; most don't.",
  },
  {
    q: "Which states tax Social Security?",
    a: "As of 2026, only a handful: Colorado (partial), Connecticut (partial), Minnesota (partial), Montana, Rhode Island (partial), Utah (partial), Vermont, and West Virginia (phasing out). The other 41 states (+ DC) don't tax Social Security at all. If you're flexible on where to retire, this matters.",
  },
  {
    q: "What can I do to reduce the taxable portion?",
    a: "The lever is provisional income. Strategies: (1) do Roth conversions before claiming Social Security to draw down Traditional IRA balances; (2) prefer Roth withdrawals in retirement (don't count toward provisional income); (3) be careful with muni bond interest — it counts toward provisional income even though it's normally tax-free; (4) consider delaying Social Security to spend down taxable accounts first.",
  },
  {
    q: "Do I owe quarterly estimated tax on Social Security?",
    a: "You can either pay estimated quarterly tax to the IRS, OR ask SSA to withhold federal tax directly from your benefit (Form W-4V; you can choose 7%, 10%, 12%, or 22% withholding). Withholding is usually simpler.",
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
          subtitle="The IRS formula is awkward — and the thresholds haven't moved since 1984. Here's how to figure out what you'll actually owe."
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
            <strong>Up to 85% of your Social Security benefit can be taxed as ordinary federal income.</strong>{" "}
            The exact amount depends on a number called provisional income — and the thresholds for
            taxation (set in 1984 and 1993) have <strong>never been indexed to inflation</strong>,
            which means a benefit-tax that originally hit only the wealthy now catches most
            middle-class retirees.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The provisional income formula</h2>

          <p>
            Provisional income (sometimes called "combined income" in IRS docs) is:
          </p>

          <div className="my-6 rounded-lg bg-brand-50 p-6 border border-brand-100">
            <p className="m-0 font-mono text-sm">
              Provisional income = AGI (excluding SS) + tax-exempt interest + 50% × annual SS benefits
            </p>
          </div>

          <p>
            That last term — half of your Social Security itself — is the trap most people miss when
            they're projecting their retirement tax bill.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The two thresholds (and what they trigger)</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Filing status</th>
                  <th className="py-3 pr-4">Tier 1: up to 50% taxable</th>
                  <th className="py-3 pr-4">Tier 2: up to 85% taxable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Single, HoH</td><td className="py-3 pr-4">$25,000 – $34,000</td><td className="py-3 pr-4">Above $34,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing jointly</td><td className="py-3 pr-4">$32,000 – $44,000</td><td className="py-3 pr-4">Above $44,000</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Married filing separately</td><td className="py-3 pr-4">$0 — 85% taxable</td><td className="py-3 pr-4">Yes, immediately</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>These thresholds have NOT changed since 1984 (Tier 1) and 1993 (Tier 2).</strong>{" "}
            Inflation since 1984 alone is over 200%. Had they been indexed, the Tier 1 single
            threshold today would be roughly $77,000.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Worked example — how the math plays out</h2>

          <p>
            <strong>Married couple, both 70, filing jointly:</strong>
          </p>

          <ul>
            <li>Combined Social Security: $48,000/year ($24,000 each)</li>
            <li>Traditional IRA withdrawals: $40,000/year</li>
            <li>Taxable interest from bank accounts: $2,000</li>
            <li>Municipal bond interest (tax-exempt): $3,000</li>
          </ul>

          <p>
            <strong>Step 1 — Provisional income:</strong>
          </p>

          <ul>
            <li>AGI excluding SS: $40,000 IRA + $2,000 interest = $42,000</li>
            <li>+ Tax-exempt interest: $3,000</li>
            <li>+ 50% of SS: $24,000</li>
            <li><strong>= Provisional income: $69,000</strong></li>
          </ul>

          <p>
            <strong>Step 2 — Which tier?</strong> $69,000 is well above the $44,000 Tier 2 threshold
            for MFJ. So <strong>up to 85% of $48,000 = $40,800</strong> of Social Security is
            taxable as ordinary income.
          </p>

          <p>
            Their taxable income from these sources: $40,000 IRA + $2,000 interest + $40,800 SS =
            $82,800 (before the standard deduction). That puts them in the 12% bracket for most of
            it, after the $32,200 MFJ standard deduction for 2026.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 5 levers to reduce SS taxation</h2>

          <ol>
            <li><strong>Roth conversions before claiming SS.</strong> Years 62–70 (or even 55–70) are the prime window. Convert Traditional IRA → Roth at low brackets. Roth withdrawals later don't count toward provisional income.</li>
            <li><strong>Delay Social Security to 70.</strong> Counterintuitive, but: while you're waiting, you can spend down Traditional IRA balances and reduce future RMDs. Once SS starts, you've shifted more of your retirement income to the Roth side.</li>
            <li><strong>Be careful with municipal bonds in retirement.</strong> Muni interest is normally tax-free, but it counts toward provisional income — it can push you over a threshold and cause more of your SS to be taxed.</li>
            <li><strong>Harvest capital gains in earlier retirement years</strong> when you're in the 0% LTCG bracket. Less capital gains income later means lower provisional income later.</li>
            <li><strong>Time large IRA withdrawals.</strong> Lumpy withdrawals (a one-time big distribution) can spike provisional income in one year while preserving low rates in others.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>State taxation of Social Security</h2>

          <p>
            <strong>Most states don't tax Social Security.</strong> The shortlist that still does
            (some with partial exemptions based on income):
          </p>

          <ul>
            <li>Colorado (partial, $20K exemption for those under 65)</li>
            <li>Connecticut (partial)</li>
            <li>Minnesota (partial)</li>
            <li>Montana</li>
            <li>Rhode Island (partial)</li>
            <li>Utah (partial, with credit phaseout)</li>
            <li>Vermont</li>
            <li>West Virginia (phasing out — set to be fully exempt by 2026 tax year per recent state legislation)</li>
          </ul>

          <p>
            If you're choosing a retirement state and Social Security is a meaningful part of your
            income, this matters. The "states with no income tax" group (FL, TX, NV, TN, WA, WY, SD,
            AK, NH) obviously don't tax SS either.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Withholding vs. quarterly estimates</h2>

          <p>
            You're required to pay tax on your taxable SS as you go (pay-as-you-go system). Two
            options:
          </p>

          <ul>
            <li><strong>Voluntary withholding via Form W-4V:</strong> SSA withholds 7%, 10%, 12%, or 22% from each check. Simplest option. File W-4V once with SSA, change as needed.</li>
            <li><strong>Quarterly estimated tax payments:</strong> Pay the IRS directly each quarter. More flexible but more administrative.</li>
          </ul>

          <p>
            If you also have IRA withdrawals and want to consolidate, you can have your IRA custodian
            withhold tax on distributions to cover SS taxes too:
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open or move to a Fidelity IRA →
            </AffiliateButton>{" "}
            <AffiliateButton partner="schwab" source={slug} variant="secondary">Schwab</AffiliateButton>{" "}
            <AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>If you have any other significant retirement income — Traditional IRA
            withdrawals, pension, taxable interest, dividends — assume 85% of your Social Security
            will be federally taxable.</strong> Plan for it. The biggest legal lever is the years
            BEFORE you claim Social Security: use them for Roth conversions, and use Roth
            withdrawals (not Traditional withdrawals) in retirement when possible.
          </p>

          <p>
            For the claim-timing decision itself, see <Link href="/learn/when-to-take-social-security">when to take Social Security</Link>.
            For the conversion strategy, see <Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link>.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/when-to-take-social-security">When to take Social Security</Link></li>
            <li><Link href="/learn/roth-conversion-ladder">Roth conversion ladder</Link></li>
            <li><Link href="/learn/ira-rmd-rules">IRA RMD rules</Link></li>
            <li><Link href="/learn/tax-brackets-2026">Tax brackets 2026</Link></li>
            <li><Link href="/learn/secure-2-0-changes-2026">SECURE 2.0 changes 2026</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
