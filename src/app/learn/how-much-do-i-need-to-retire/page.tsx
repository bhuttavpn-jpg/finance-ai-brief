import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-much-do-i-need-to-retire";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How much do I need to retire? (2026)";
const description =
  "The 25x rule, the 4% rule, and where they break down. A simple way to estimate your retirement number from current spending — plus how to back into a monthly savings rate that gets you there from any starting age.";
const PUBLISHED = "2026-05-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is the 4% rule for retirement?",
    a: "The 4% rule says you can withdraw 4% of your portfolio in your first year of retirement and adjust the dollar amount for inflation each year after, with high confidence (95%+) of not running out of money over a 30-year retirement. It comes from the 1998 Trinity Study using historical US stock/bond returns. It's a planning baseline, not a guarantee — high market valuations or longer retirements can lower the safe rate to 3.0%–3.5%.",
  },
  {
    q: "What is the 25x rule?",
    a: "The 25x rule is the inverse of the 4% rule: your retirement number is 25 times your annual spending. If you spend $60,000/year and want it to keep coming, you need roughly $1.5 million invested. It's the simplest way to convert a lifestyle into a savings target.",
  },
  {
    q: "Does the 4% rule include Social Security?",
    a: "No — the 4% rule covers withdrawals from your portfolio only. Social Security, pension income, rental income, or part-time work all reduce the portfolio number you need. If you need $60,000/year and Social Security covers $25,000, your portfolio only needs to fund $35,000/year → $35,000 × 25 = ~$875,000.",
  },
  {
    q: "How much should I save each month to retire?",
    a: "It depends on your age, target retirement age, and current savings. As a rough rule, saving 15% of gross income from age 25 puts most people on track to replace 80% of pre-retirement income at age 65, assuming a 401(k) match and a 7% real return. Starting later requires a higher rate: 20% at age 35, 30%+ at age 45 for the same outcome.",
  },
  {
    q: "How does retirement age change the number?",
    a: "Significantly. Retiring at 55 instead of 65 typically means 10 more years of withdrawals AND 10 fewer years of contributions and compounding — often a 40–50% larger portfolio requirement. Early retirement also means a lower safe withdrawal rate (3.5% or lower) because the portfolio has to last 35–40+ years instead of 30.",
  },
  {
    q: "What if I want to retire early (FIRE)?",
    a: "The FIRE community usually targets 25x–33x annual expenses (a 3% to 4% withdrawal rate) for retirements longer than 30 years. The math gets harder because you bridge to Social Security and Medicare with portfolio-only spending. Strategies: build a large taxable brokerage account for ages 50–59½, use Roth conversion ladders to access IRA funds early, and budget separately for pre-Medicare healthcare costs.",
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

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The 25x rule turns a lifestyle into a savings target in one step. Here's how to use it — and where it breaks down."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Your retirement number is 25 times what you spend in a year.</strong> Spend
            $60,000/year? You need roughly $1.5 million invested. That&apos;s the 25x rule, and
            it&apos;s the fastest way to convert a lifestyle into a savings target.
          </p>

          <p>
            <strong>The 25x rule is a baseline, not a guarantee.</strong> Below we walk through
            where it comes from (the 4% rule), how to refine it for your situation (Social Security,
            healthcare, retirement age), and how to back into a monthly savings rate that gets you
            there from where you are now.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 4% rule and 25x rule are the same thing</h2>

          <p>
            <strong>The 4% rule says you can withdraw 4% of your portfolio in your first year of
            retirement,</strong> adjust the dollar amount for inflation each year after, and have
            high confidence of not running out of money over a 30-year retirement.
          </p>

          <p>
            <strong>The 25x rule is the inverse:</strong> if 4% of your portfolio covers a year of
            spending, then your portfolio is 25 times your annual spending (100 ÷ 4 = 25).
          </p>

          <p>
            <strong>Both come from the Trinity Study</strong> (1998, updated multiple times), which
            tested historical US stock/bond portfolios across all 30-year periods since 1926. A 50/50
            or 60/40 stock/bond portfolio survived 95%+ of historical 30-year windows at 4%
            withdrawals.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The quick calculation</h2>

          <p>
            <strong>Step 1: figure out your annual spending in retirement.</strong> Start with your
            current annual spending. Adjust:
          </p>

          <ul>
            <li>Subtract mortgage payments if you&apos;ll have paid it off by retirement</li>
            <li>Subtract retirement contributions (you stop making them)</li>
            <li>Subtract payroll taxes (FICA — 7.65% of wages — disappears in retirement)</li>
            <li>Add expected increases in healthcare spending (especially pre-Medicare)</li>
            <li>Add inflation in current dollars (or work in today&apos;s dollars and assume real returns)</li>
          </ul>

          <p>
            <strong>Step 2: multiply by 25.</strong> That&apos;s your portfolio target in today&apos;s
            dollars.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Annual spending</th>
                  <th className="py-3 pr-4">25x portfolio target</th>
                  <th className="py-3 pr-4">After Social Security ($25K)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">$40,000</td><td className="py-3 pr-4">$1,000,000</td><td className="py-3 pr-4">$375,000</td></tr>
                <tr><td className="py-3 pr-4">$60,000</td><td className="py-3 pr-4">$1,500,000</td><td className="py-3 pr-4">$875,000</td></tr>
                <tr><td className="py-3 pr-4">$80,000</td><td className="py-3 pr-4">$2,000,000</td><td className="py-3 pr-4">$1,375,000</td></tr>
                <tr><td className="py-3 pr-4">$120,000</td><td className="py-3 pr-4">$3,000,000</td><td className="py-3 pr-4">$2,375,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The Social Security adjustment is huge.</strong> A $25K/year Social Security
            check is worth $625,000 of portfolio in the 25x math. Most US workers will get one;
            don&apos;t ignore it when setting the target.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where the 4% rule breaks down</h2>

          <ul>
            <li><strong>Early retirement (35+ year horizons).</strong> The 30-year Trinity test gets less reliable past 30 years. A 3.5% withdrawal rate (28.6x) or 3.25% rate (~31x) is safer for 35–40+ year retirements.</li>
            <li><strong>High current valuations.</strong> Starting retirement after a long bull market reduces forward returns. Some researchers recommend a 3.5% starting rate when CAPE ratios are elevated.</li>
            <li><strong>Sequence-of-returns risk.</strong> A bad early-retirement market can sink the portfolio even if average returns are fine. Holding 2–3 years of spending in cash/bonds at retirement onset reduces this risk.</li>
            <li><strong>Inflation shocks.</strong> The 4% rule adjusts for inflation but assumes typical inflation. A sustained 5%+ environment is harder on portfolios.</li>
            <li><strong>Variable spending.</strong> If you can flex spending down in bad years (skip a vacation, drive the car another two years), your safe rate is higher than 4%. Rigid budgets need lower rates.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How much to save monthly to hit the number</h2>

          <p>
            <strong>The amount you need to save depends on three things:</strong> your starting age,
            your target retirement age, and your assumed real return (after inflation). Most planning
            assumes 5–7% real returns for a stock-heavy portfolio.
          </p>

          <p>
            <strong>Rule of thumb: save 15% of gross income from age 25</strong> (including any 401(k)
            employer match) for a target of replacing ~80% of pre-retirement income at 65. Starting
            later requires more:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Starting age</th>
                  <th className="py-3 pr-4">Years to retirement (65)</th>
                  <th className="py-3 pr-4">Approx. savings rate needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">25</td><td className="py-3 pr-4">40 years</td><td className="py-3 pr-4">15% of gross</td></tr>
                <tr><td className="py-3 pr-4">35</td><td className="py-3 pr-4">30 years</td><td className="py-3 pr-4">20%</td></tr>
                <tr><td className="py-3 pr-4">45</td><td className="py-3 pr-4">20 years</td><td className="py-3 pr-4">30%+</td></tr>
                <tr><td className="py-3 pr-4">55</td><td className="py-3 pr-4">10 years</td><td className="py-3 pr-4">50%+ (or working longer)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The 2026 contribution limits that fund the plan</h2>

          <p>
            <strong>Per IRS news release IR-2025-111,</strong> the 2026 retirement contribution
            limits are:
          </p>

          <ul>
            <li><strong>401(k) elective deferral:</strong> $24,500 (up from $23,500); $32,500 with the age-50+ catch-up of $8,000; $35,750 with the SECURE 2.0 super catch-up for ages 60–63 ($11,250)</li>
            <li><strong>IRA contribution:</strong> $7,500 ($8,600 with the 50+ catch-up of $1,100)</li>
            <li><strong>HSA:</strong> $4,400 self-only / $8,750 family ($1,000 catch-up at 55+), per Rev. Proc. 2025-19</li>
          </ul>

          <p>
            <strong>Max all three</strong> ($24,500 + $7,500 + $8,750 family HSA = $40,750/year) and
            most households earning $100K–$150K are well above the savings rate they need. See
            <Link href="/learn/how-much-to-contribute-to-401k"> how much to contribute to your 401(k)</Link>
            and <Link href="/learn/401k-vs-ira-which-first"> the funding order</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The order to fund retirement accounts</h2>

          <ol>
            <li><strong>401(k) up to the match</strong> — free money, never skip</li>
            <li><strong>HSA if you have an HDHP</strong> — triple tax advantage; see <Link href="/learn/hsa-as-retirement-account">HSA as a stealth retirement account</Link></li>
            <li><strong>Max the IRA</strong> ($7,500 in 2026). Roth if you&apos;re in a low bracket today, Traditional if high.</li>
            <li><strong>Back to the 401(k)</strong> — fill it up to the $24,500 limit</li>
            <li><strong>Taxable brokerage</strong> for anything beyond the tax-advantaged limits, especially if you&apos;re targeting early retirement</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Where to hold retirement savings</h2>

          <p>
            <strong>The brokerage matters less than starting,</strong> but for IRAs and taxable
            brokerage accounts, pick one with strong fund selection, automatic rebalancing options,
            and clean cost-basis reporting for the eventual withdrawal phase.
          </p>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity IRA →
            </AffiliateButton>
          </p>

          <p>Equally good for retirement accounts:</p>
          <ul>
            <li><AffiliateButton partner="vanguard" source={slug} variant="secondary">Vanguard</AffiliateButton></li>
            <li><AffiliateButton partner="schwab" source={slug} variant="secondary">Charles Schwab</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Healthcare is the wild card</h2>

          <p>
            <strong>Pre-Medicare retirees (under 65) face the biggest single budget item:</strong>
            healthcare. ACA marketplace plans for a 60-year-old can run $1,500–$2,500/month before
            subsidies. Subsidies phase out at higher income, so early retirees managing income to
            qualify for subsidies is a real strategy.
          </p>

          <p>
            <strong>After 65, Medicare Part B premiums are means-tested</strong> through IRMAA
            (Income-Related Monthly Adjustment Amount). High-income retirees pay 2–4x the standard
            Part B premium. This is why people manage Roth vs. Traditional balance in advance — to
            keep Medicare income in lower IRMAA brackets.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Take your current annual spending, subtract what Social Security will cover,
            multiply the rest by 25.</strong> That&apos;s a perfectly reasonable starting target.
            Refine with the early-retirement adjustment if you&apos;ll retire before 60, the
            healthcare bridge if you&apos;ll retire before 65, and a more conservative 3.5%
            withdrawal rate if you want extra safety.
          </p>

          <p>
            Then back into the monthly savings rate that gets you there from your current age. If
            it&apos;s realistic, save it. If it&apos;s not, work longer, spend less, or accept a
            smaller number. The math is unforgiving but transparent.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-much-to-contribute-to-401k">How much to contribute to your 401(k)?</Link></li>
            <li><Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which to fund first</Link></li>
            <li><Link href="/learn/roth-ira-contribution-limits-2026">Roth IRA contribution limits 2026</Link></li>
            <li><Link href="/learn/hsa-as-retirement-account">The HSA as a stealth retirement account</Link></li>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Invest" currentSlug="how-much-do-i-need-to-retire" />
      </article>
    </>
  );
}
