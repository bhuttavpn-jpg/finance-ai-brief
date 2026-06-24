import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "balance-transfer-credit-cards";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Best balance transfer credit cards 2026: 0% APR offers, fees, and how to choose";
const description =
  "A balance transfer moves high-interest credit card debt to a 0% APR card, saving hundreds to thousands in interest. Here's how they work, which cards have the longest 0% windows in 2026, and the math to decide if it's worth doing.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How does a balance transfer work?",
    a: "You apply for a new card with a 0% APR balance transfer offer. After approval, you provide the account number and balance amount of your existing card(s). The new issuer pays off your old card and the debt moves to the new card. You then pay off the new card during the 0% period. Most cards charge a balance transfer fee of 3–5% of the amount transferred.",
  },
  {
    q: "What credit score do I need for a balance transfer card?",
    a: "Most balance transfer cards with long 0% windows (18–21 months) require good to excellent credit — typically a FICO score of 670+. Cards with the longest offers (Citi Simplicity, BankAmericard) generally want 700+. If your score is below 670, focus on building credit first. A 15% interest rate you can manage beats a 0% card you can't get approved for.",
  },
  {
    q: "What is the balance transfer fee and is it worth paying?",
    a: "The fee is typically 3–5% of the transferred amount, charged immediately. On $5,000 transferred: a 3% fee = $150; a 5% fee = $250. Compare this to the interest you'd pay by keeping the balance on a 22–29% APR card. At 24% APR on $5,000 for 18 months with minimum payments, you'd pay ~$1,800 in interest. A $150–250 fee is clearly worth it.",
  },
  {
    q: "What happens if I don't pay off the balance during the 0% period?",
    a: "The remaining balance starts accruing interest at the card's regular APR — often 20–29% — from the day the promotional period ends. Some cards (like Discover it) also apply retroactive interest, meaning you'd owe interest on all the original transferred balance from day one. Always read the terms. Plan to pay off the full balance before the promotional period expires.",
  },
  {
    q: "Can I transfer a balance from one card to another with the same bank?",
    a: "No. Card issuers don't allow balance transfers between cards they issue. You can't transfer a Chase balance to another Chase card, a Citi balance to another Citi card, etc. The transfer must be between different banks.",
  },
  {
    q: "Should I close my old card after the balance transfer?",
    a: "Generally no. Closing a card reduces your total available credit, which increases your credit utilization ratio and can lower your credit score. Keep the old card open (with a $0 balance) unless it has an annual fee you don't want to pay. Using it occasionally for a small purchase and paying in full keeps it from being closed for inactivity.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Borrow smart" })} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={howToJsonLd({
          name: "How to do a balance transfer",
          steps: [
            { name: "Calculate how much you can pay per month", text: "Divide your total balance by the number of months in the 0% period. That's your minimum required monthly payment to be debt-free by the time interest kicks in." },
            { name: "Choose a card with a 0% window that fits your payoff timeline", text: "If you have $6,000 and can pay $350/month, you need ~17 months. Look for cards with at least 18-month 0% periods." },
            { name: "Apply and get approved", text: "Apply for the balance transfer card. Most decisions are instant online. The credit limit you receive determines how much you can transfer." },
            { name: "Initiate the transfer", text: "Call the new card's number or use their online portal. Provide your old card account number and the amount to transfer. The transfer typically takes 5–14 days." },
            { name: "Make at least the minimum payment every month", text: "Missing even one minimum payment can void the 0% offer and trigger penalty APR. Set up autopay for the minimum immediately, then pay extra as planned." },
            { name: "Pay off the balance before the promotional period ends", text: "Mark the end date on your calendar. Set a goal to finish 1–2 months early as a buffer. Don't open new charges on this card." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Stop paying 24% interest on debt you're actively paying off. A balance transfer buys you 12–21 months of breathing room — here's which card makes sense."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="8 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>If you&apos;re carrying a balance at 20–29% APR and making consistent monthly payments, a balance transfer can save you hundreds or thousands in interest</strong> — typically for a one-time 3–5% fee. The math almost always works in your favor if you can commit to paying off the balance within the 0% window.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How balance transfers work</h2>

          <p>
            A balance transfer moves debt from a high-interest card to a new card with a 0% introductory APR. The new issuer pays your old card directly and the debt appears on the new card — usually with a <strong>3–5% transfer fee</strong> added. You then pay down the new card with zero interest accumulating during the promotional window.
          </p>

          <p>
            <strong>Key mechanics to know:</strong>
          </p>
          <ul>
            <li><strong>Transfer fee:</strong> 3–5% of transferred amount, charged immediately. Some cards offer $0 transfer fees (worth checking).</li>
            <li><strong>Transfer limit:</strong> capped at your credit limit on the new card, minus any existing balance.</li>
            <li><strong>Processing time:</strong> 5–14 days. Keep paying your old card until the transfer confirms.</li>
            <li><strong>New purchases:</strong> if the new card has a 0% purchase APR separately, fine. If not, new purchases start accruing interest immediately at the regular APR.</li>
            <li><strong>Missing a payment:</strong> one missed minimum payment can void the 0% offer at many issuers — set up autopay on the minimum immediately.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The interest savings math</h2>

          <p>
            On a <strong>$5,000 balance at 24% APR</strong>, paying $300/month:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Scenario</th>
                  <th className="py-3 pr-4">Total interest paid</th>
                  <th className="py-3 pr-4">Payoff time</th>
                  <th className="py-3 pr-4">Transfer fee</th>
                  <th className="py-3 pr-4">Net savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Stay at 24% APR</td>
                  <td className="py-3 pr-4">$971</td>
                  <td className="py-3 pr-4">20 months</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">—</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">0% card, 3% fee</td>
                  <td className="py-3 pr-4">$0 interest</td>
                  <td className="py-3 pr-4">17 months</td>
                  <td className="py-3 pr-4">$150</td>
                  <td className="py-3 pr-4"><strong>+$821 saved</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            At <strong>$10,000</strong> the math is even more compelling — you&apos;d pay ~$2,200 in interest staying at 24% vs. $300–$500 in transfer fees with 0% for 18–21 months.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Top balance transfer cards in 2026</h2>

          <p>
            Rates and terms change — verify current offers at the issuer before applying. These are the leading options as of mid-2026.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">0% period</th>
                  <th className="py-3 pr-4">Transfer fee</th>
                  <th className="py-3 pr-4">Regular APR after</th>
                  <th className="py-3 pr-4">Annual fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Citi Simplicity®</td>
                  <td className="py-3 pr-4">21 months</td>
                  <td className="py-3 pr-4">5% (min $5)</td>
                  <td className="py-3 pr-4">~19–29%</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">BankAmericard®</td>
                  <td className="py-3 pr-4">21 months</td>
                  <td className="py-3 pr-4">3% (first 60 days)</td>
                  <td className="py-3 pr-4">~16–26%</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Discover it® Balance Transfer</td>
                  <td className="py-3 pr-4">18 months</td>
                  <td className="py-3 pr-4">3%</td>
                  <td className="py-3 pr-4">~18–27%</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Capital One VentureOne</td>
                  <td className="py-3 pr-4">15 months</td>
                  <td className="py-3 pr-4">3%</td>
                  <td className="py-3 pr-4">~19–29%</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Chase Freedom Unlimited®</td>
                  <td className="py-3 pr-4">15 months</td>
                  <td className="py-3 pr-4">3–5%</td>
                  <td className="py-3 pr-4">~20–29%</td>
                  <td className="py-3 pr-4">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-ink-muted">
            Terms current as of June 2026. Verify at issuer websites before applying — transfer windows and fees change.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="discover-it" source={slug}>Discover it Balance Transfer →</AffiliateButton>
            <AffiliateButton partner="capital-one" source={slug} variant="secondary">Capital One offers →</AffiliateButton>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>How to pick the right card</h2>

          <p>
            <strong>Step 1 — Calculate your payoff month requirement.</strong> Divide total balance by what you can realistically pay per month. If you have $7,000 and can pay $400/month: 7,000 ÷ 400 = 17.5 months. You need a card with at least 18 months of 0%.
          </p>

          <p>
            <strong>Step 2 — Compare fee structures.</strong> A 3% fee is always better than 5% when the 0% window is equal. Citi Simplicity at 5% fee beats a 20-month card with no fee only if you can&apos;t finish in 20 months.
          </p>

          <p>
            <strong>Step 3 — Consider the rewards vs. no-rewards tradeoff.</strong> Rewards cards (Freedom, VentureOne) can earn cashback on new spending. Debt-focused cards (Simplicity, BankAmericard) have no rewards but sometimes slightly better transfer terms. If you plan to carry no ongoing balance after the transfer, a rewards card is fine — just don&apos;t let rewards rationalize new spending.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What to avoid</h2>

          <p>
            <strong>Don&apos;t use the new card for new purchases</strong> (unless it also has 0% on purchases). New purchases start accruing interest at the full APR — and when you make a payment, issuers typically apply it to the lowest-APR balance first (the transfer), meaning purchases accrue interest for months.
          </p>

          <p>
            <strong>Don&apos;t ignore the end date.</strong> Write it down, set a calendar reminder 2 months before. If you&apos;re not going to finish paying by then, research a second transfer or call the issuer — sometimes they extend terms for good-standing customers.
          </p>

          <p>
            <strong>Don&apos;t apply if your credit score is below 670.</strong> A hard inquiry hurts your score ~5 points, and rejection is worse. Check for pre-qualification offers (soft pull only) first.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Alternative: debt consolidation loan</h2>

          <p>
            If your credit score doesn&apos;t qualify for a 0% card, or if your balance is too large for a credit card limit, a personal debt consolidation loan can achieve a similar result — typically at 8–18% APR for good-credit borrowers vs. 20–29% on cards. See our full breakdown in <Link href="/learn/debt-consolidation-loan">debt consolidation loans: how they work</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>A balance transfer is one of the highest-ROI moves you can make if you&apos;re carrying card debt and have good credit.</strong> The math is almost always in your favor at 3% transfer fee vs. 22–29% ongoing APR. The only risk is human error — missing a payment, adding new purchases, or not finishing before the window closes. Set up autopay, don&apos;t add new charges, and finish the transfer before the deadline.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/debt-consolidation-loan">Debt consolidation loans</Link> — if your balance is too large for a credit card limit.</li>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Debt snowball vs. avalanche</Link> — which payoff method to use after the transfer.</li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit</Link> — improving your score to qualify for better transfer offers.</li>
            <li><Link href="/learn/credit-score-ranges">Credit score ranges explained</Link> — FICO scoring breakdown and what each tier qualifies for.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">50/30/20 budget</Link> — the framework for finding the monthly payment to put toward the transfer.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Borrow smart" currentSlug={slug} />
      </article>
    </>
  );
}
