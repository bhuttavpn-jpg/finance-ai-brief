import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About & methodology",
  description: `How ${siteConfig.name} makes recommendations, handles affiliate revenue, and keeps content trustworthy.`,
};

export default function AboutPage() {
  return (
    <article className="container-prose py-16">
      <h1 className="text-3xl font-medium text-brand-700">About {siteConfig.name}</h1>
      <p className="mt-4 text-lg text-ink-muted">
        We help everyday people and working professionals make better financial decisions —
        with calculators that give real answers and research that doesn&apos;t bury the point.
      </p>

      <h2 className="mt-12 text-xl font-medium text-brand-700">Our editorial standards</h2>
      <p className="mt-3">
        Every page is written by a credentialed financial writer and reviewed by a CFP, CPA,
        or licensed insurance professional appropriate to the topic. We cite primary sources
        — the IRS, FDIC, FINRA, SEC — not aggregator sites. Author and reviewer credentials
        appear at the top of every article.
      </p>
      <p className="mt-3">
        We refresh tax content annually after the IRS publishes inflation adjustments,
        HYSA rates monthly, credit card terms quarterly, and evergreen explainers at least
        once a year.
      </p>

      <h2 id="disclosure" className="mt-12 text-xl font-medium text-brand-700">Affiliate disclosure</h2>
      <p className="mt-3">
        Some of the financial products we recommend pay us a commission when you open an
        account through our link. That revenue funds our independent research. It does not
        influence which products we rank highest. We publish our methodology for every
        roundup so you can see exactly how we score products, and we routinely rank lower-paying
        partners above higher-paying ones when the product is the better fit.
      </p>
      <p className="mt-3">
        Affiliate links on our site are routed through <code className="rounded bg-brand-50 px-1 py-0.5 text-xs">/go/[partner]</code>{" "}
        so we can log clicks and confirm attribution, even if a reader&apos;s browser blocks
        third-party cookies. We never sell your personal data.
      </p>

      <h2 id="privacy" className="mt-12 text-xl font-medium text-brand-700">Privacy</h2>
      <p className="mt-3">
        We collect the minimum analytics needed to improve the site — page views, anonymous
        click events, and aggregate device information. We do not sell or share personal
        data with third parties for advertising purposes.
      </p>

      <h2 id="terms" className="mt-12 text-xl font-medium text-brand-700">Terms of use</h2>
      <p className="mt-3">
        Content on {siteConfig.name} is for educational purposes only. We are not a registered
        investment advisor, broker-dealer, tax preparer, or insurance agency. Nothing on this
        site is a personal recommendation. Always verify information and consult a qualified
        professional before making financial decisions.
      </p>
    </article>
  );
}
