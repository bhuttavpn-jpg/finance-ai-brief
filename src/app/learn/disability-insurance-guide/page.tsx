import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "disability-insurance-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Disability insurance: The coverage most people skip and shouldn't";
const description =
  "About 1 in 4 of today's 20-year-olds will become disabled before retirement. Disability insurance replaces 60–70% of your income if you can't work — and it's the single most under-purchased policy in personal finance. Here's how to size it and what to look for.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I really need disability insurance?",
    a: "If you depend on your paycheck and don't have several years of expenses saved, yes. The Social Security Administration estimates ~1 in 4 of today's 20-year-olds will be disabled at some point before age 67. Disability is statistically more likely to derail your finances than death — yet most people have life insurance and no disability coverage.",
  },
  {
    q: "Doesn't my employer cover me?",
    a: "Maybe partially. Many employers offer Short-Term Disability (3–6 months coverage at 60% of income) and some offer Long-Term Disability (after STD ends, often capped at 60% of base salary up to a maximum monthly benefit). Two catches: (1) employer LTD usually doesn't cover bonuses or commissions, so high earners are underinsured; (2) you lose it when you leave the job.",
  },
  {
    q: "What's 'own-occupation' coverage and why does it matter?",
    a: "Own-occupation means the policy pays if you can't perform YOUR specific job. 'Any-occupation' means it only pays if you can't perform ANY job at all — a much higher bar. A surgeon with hand tremors can do desk work but can't operate; own-occ pays, any-occ doesn't. For professionals with specialized skills, own-occ is worth the price difference.",
  },
  {
    q: "What's an elimination period?",
    a: "The waiting period between when you become disabled and when benefits start. Usually 60, 90, 180, or 365 days. Longer elimination period = lower premium. If you have 6 months of expenses in an emergency fund, you can typically choose a 180-day elimination period and save meaningfully on premiums.",
  },
  {
    q: "Are benefits taxable?",
    a: "Depends on who paid the premiums. If YOU pay with after-tax dollars (individual policies, or pre-tax employer plans where you elected to be taxed on the premium), benefits are tax-free. If your EMPLOYER pays with pre-tax dollars, benefits are taxable as ordinary income. This is why a tax-free private policy may need a lower benefit amount than a taxable employer policy.",
  },
  {
    q: "How much does it cost?",
    a: "Roughly 1–3% of your annual income for a quality long-term disability policy, depending on your age, occupation, health, definition of disability, benefit period, and elimination period. A 35-year-old professional earning $100K might pay $1,500–$3,000/year for an individual policy that pays $5,000/month until age 65 if disabled.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Protect" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Disability is more likely to derail your finances than death — yet most people are uninsured or underinsured for it. Here's the coverage that actually matters."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>If your income stopped tomorrow, how long could you keep the lights on?</strong>{" "}
            For most working Americans, the honest answer is months, not years. Disability insurance
            replaces 60–70% of your income if you can't work — and statistically, you're far more
            likely to need it than life insurance. Yet about 70% of US private-sector workers have
            no long-term disability coverage.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Why this is the most overlooked policy in personal finance</h2>

          <p>
            The Social Security Administration estimates that <strong>about 25% of today's
            20-year-olds will become disabled at some point before age 67</strong>. The Council for
            Disability Awareness puts the lifetime disability rate at roughly 1 in 3 for working
            adults. By contrast, only about 1 in 200 working-age adults dies in any given year.
            Disability is the higher-frequency, longer-duration risk — and the one most people fail
            to cover.
          </p>

          <p>
            And it's not just catastrophic injuries. The most common LTD claims are:
          </p>

          <ul>
            <li>Musculoskeletal disorders (back pain, joint disorders) — ~30% of claims</li>
            <li>Cancer — ~15%</li>
            <li>Pregnancy complications</li>
            <li>Mental health (depression, anxiety)</li>
            <li>Cardiovascular events</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Short-term vs. long-term disability</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Short-term (STD)</th>
                  <th className="py-3 pr-4">Long-term (LTD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Benefit start</td><td className="py-3 pr-4">After ~7–14 days</td><td className="py-3 pr-4">After 90–180 days</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Benefit duration</td><td className="py-3 pr-4">3–6 months</td><td className="py-3 pr-4">2 years to age 65 (varies)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Income replacement</td><td className="py-3 pr-4">60–80%</td><td className="py-3 pr-4">60–70%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Common source</td><td className="py-3 pr-4">Employer or state-mandated</td><td className="py-3 pr-4">Employer or individual policy</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Priority</td><td className="py-3 pr-4">Lower (covered by emergency fund)</td><td className="py-3 pr-4">Higher (the catastrophic-risk policy)</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>If you only buy one, buy LTD.</strong> A solid emergency fund covers the
            short-term gap; nothing else covers a multi-year inability to work.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 6 contract terms that actually matter</h2>

          <ol>
            <li><strong>Definition of disability.</strong> Own-occupation (best) vs. modified own-occ vs. any-occupation (cheapest, weakest). Own-occ pays if you can't do your specific job.</li>
            <li><strong>Elimination period.</strong> 90 days is common, 180 days saves significant premium if you have a 6-month emergency fund.</li>
            <li><strong>Benefit period.</strong> To age 65 (or 67) is the gold standard. Cheaper policies cap at 2 or 5 years.</li>
            <li><strong>Benefit amount.</strong> Usually 60–70% of pre-disability income. Insurers won't cover 100% (moral hazard — disincentive to return to work).</li>
            <li><strong>Cost-of-living adjustment (COLA) rider.</strong> Adds inflation indexing to the benefit. Important if benefit period is long.</li>
            <li><strong>Future-increase option.</strong> Lets you increase coverage as your income grows without re-underwriting. Critical for early-career professionals.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Group (employer) vs. individual policy</h2>

          <p>
            <strong>Employer LTD is the cheapest starting point</strong> — often free or
            subsidized, with no medical underwriting. Big caveats:
          </p>

          <ul>
            <li>It usually covers <strong>only base salary</strong>, not bonuses or commissions. For someone making $150K base + $100K bonus, this can mean only ~$90K/year of replacement vs. the $250K total income.</li>
            <li><strong>Definition is often "any-occupation"</strong> after the first 2 years — weak.</li>
            <li><strong>Maximum monthly benefit cap</strong> (often $5,000–$15,000/mo) caps replacement for high earners.</li>
            <li><strong>You lose it if you leave the job.</strong></li>
            <li><strong>Benefits are taxable</strong> if employer pays premiums pre-tax.</li>
          </ul>

          <p>
            <strong>Individual policies fill the gaps:</strong> portable across jobs, often include
            own-occ language, cover bonuses/commissions, and benefits are tax-free if you pay
            premiums with after-tax dollars. Most professional advisors recommend a hybrid: take the
            free employer LTD and supplement with an individual policy.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who especially needs individual disability insurance</h2>

          <ul>
            <li><strong>Physicians, dentists, lawyers, and other specialized professionals.</strong> Own-occ definitions matter most here — your specialty is what you've trained 10+ years to do.</li>
            <li><strong>Self-employed and freelancers.</strong> No employer LTD, no STD safety net.</li>
            <li><strong>High earners with substantial bonus/commission income.</strong> Employer LTD won't cover the bonus side.</li>
            <li><strong>Sole breadwinners.</strong> If your household has no Plan B income, the asymmetric risk is highest.</li>
            <li><strong>Anyone under 50 in good health.</strong> Premiums are cheapest now; underwriting gets harder as you age.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually shop</h2>

          <p>
            Disability insurance underwriting is slow (weeks to months) and pricing varies widely by
            insurer. Two practical paths:
          </p>

          <ul>
            <li><strong>Through a broker who works with multiple carriers</strong> (Guardian, Principal, MassMutual, Mutual of Omaha, Standard Insurance, Ameritas — these are the major individual DI carriers). Brokers don't usually cost you extra; insurers pay them.</li>
            <li><strong>Online marketplaces</strong> for initial quote comparison, then a follow-up call with an agent for the actual application. <Link href="/learn/best-life-insurance-companies-2026">Policygenius</Link> handles DI alongside life insurance.</li>
          </ul>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Compare disability quotes at Policygenius →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What about Social Security Disability Insurance (SSDI)?</h2>

          <p>
            <strong>Don't count on SSDI as your primary plan.</strong> It exists, it's a backstop,
            but the bar is high:
          </p>

          <ul>
            <li><strong>Approval rate ~38%</strong> on initial application; the rest go through multi-year appeals.</li>
            <li><strong>Strict definition:</strong> any-occupation, must be unable to do any "substantial gainful activity" earning more than ~$1,550/mo (2026).</li>
            <li><strong>5-month waiting period</strong> before benefits start.</li>
            <li><strong>Average benefit ~$1,500/month</strong> — far less than most middle-class earners need.</li>
            <li><strong>Up to 85% of benefits taxable</strong> at higher provisional incomes (see <Link href="/learn/taxes-on-social-security-benefits">taxes on Social Security</Link>).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            If you depend on your paycheck and don't have 5+ years of expenses already saved, you
            need long-term disability coverage. Check your employer benefits first — and if you have
            specialized income (bonuses, commissions, professional fees) or no employer coverage at
            all, buy an individual policy. The math is grim but simple: your future income is your
            biggest asset, and disability insurance is what protects it.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-term-life-insurance-young-professionals">Best term life insurance</Link></li>
            <li><Link href="/learn/how-much-life-insurance-do-i-need">How much life insurance do I need?</Link></li>
            <li><Link href="/learn/term-vs-whole-life-insurance">Term vs. whole life</Link></li>
            <li><Link href="/learn/long-term-care-insurance">Long-term care insurance</Link></li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Protect" currentSlug="disability-insurance-guide" />
      </article>
    </>
  );
}
