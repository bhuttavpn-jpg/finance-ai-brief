import type { Metadata } from "next";
import Link from "next/link";
import { PaycheckCalculator } from "@/components/tools/PaycheckCalculator";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { siteConfig } from "@/lib/site-config";

const url = `${siteConfig.url}/tools/paycheck`;
const title = "Paycheck calculator 2026 — all 50 states";
const description =
  "Estimate your 2026 take-home pay by state. Pulls federal brackets (IR-2025-103), FICA, and 2026 state income tax for all 50 states + DC. Factors in 401(k), HSA, and Section 125 health premium pre-tax deductions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
};

export default function Page() {
  return (
    <div className="container-wide py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Tool · Paycheck</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">{title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Take-home pay for any U.S. state, by pay period. 2026 federal brackets + FICA + state income tax,
        with pre-tax deductions modeled.
      </p>
      <AffiliateDisclosure className="mt-6 max-w-2xl" />
      <div className="mt-8">
        <PaycheckCalculator />
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-medium text-brand-700">What this calculator does — and doesn&apos;t</h2>
        <p className="mt-4 text-ink">
          Most paycheck calculators online use last year&apos;s rates and ignore state differences. This one is built on:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-ink">
          <li><strong>2026 federal brackets</strong> from IRS Rev. Proc. 2025-32 (IR-2025-103, Oct 9, 2025).</li>
          <li><strong>2026 FICA</strong> — Social Security 6.2% to the projected $183,600 wage base, Medicare 1.45% on all wages, plus the 0.9% Additional Medicare Tax above $200K (single, HoH, MFS) or $250K (MFJ).</li>
          <li><strong>2026 state income tax</strong> for all 50 states + DC, using each state DOR&apos;s most recently enacted bracket schedule.</li>
          <li><strong>Pre-tax 401(k) + HSA + Section 125 health premium</strong> modeled per federal rules, with state-specific overrides for the four big exceptions (PA, NJ, AL on 401(k); CA, NJ on HSA).</li>
        </ul>

        <p className="mt-6 text-ink">
          <strong>What it doesn&apos;t do.</strong> Local taxes (NYC, Yonkers, Philadelphia & PA EIT, Ohio cities,
          Maryland counties, Kentucky counties, Indiana counties, Michigan cities) vary too much by ZIP to model
          here — the calculator flags states where the local-tax bite is meaningful so you know to add it. It also
          skips tax credits (Child Tax Credit, EITC), AMT, NIIT, and supplemental withholding methods used for
          bonuses and RSU vests.
        </p>

        <p className="mt-6 text-ink">
          The annualized tax this calculator computes matches what proper W-4 withholding targets across the year.
          Per-paycheck withholding tables (IRS Pub 15-T) round slightly differently — so a real paycheck stub may
          differ by a few dollars per period.
        </p>

        <h2 className="mt-12 text-2xl font-medium text-brand-700">The 9 no-wage-tax states</h2>
        <p className="mt-4 text-ink">
          If you live and work in <strong>Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas,
          Washington, or Wyoming</strong>, your state income tax line is $0. The federal + FICA load alone runs
          ~22–28% on a typical $85K salary — most of your tax bill is federal, not state. Washington adds a 7%
          long-term capital gains tax on gains above $270K but doesn&apos;t touch wages.
        </p>

        <h2 className="mt-12 text-2xl font-medium text-brand-700">High-tax vs. low-tax states</h2>
        <p className="mt-4 text-ink">
          The 5 highest top marginal rates (2026): <strong>California 12.3% + 1% MHST</strong>, <strong>New York 10.9%</strong>{" "}
          (+ NYC ~3.876%), <strong>New Jersey 10.75%</strong>, <strong>DC 10.75%</strong>, <strong>Hawaii 11%</strong>. The 5
          flat-rate states with the lowest single rate: <strong>Pennsylvania 3.07%</strong>, <strong>Indiana 2.9%</strong>{" "}
          (+ county tax), <strong>Arizona 2.5%</strong>, <strong>Ohio 2.75% / 3.5%</strong>, <strong>North Dakota 0–2.5%</strong>.
        </p>

        <p className="mt-6 text-ink">
          The headline rates don&apos;t tell the whole story. Indiana&apos;s 2.9% flat rate looks unbeatable until you
          add the average county rate (~1.5%). Pennsylvania&apos;s 3.07% climbs to ~6.8% for a Philadelphia resident
          once you add the wage tax. Use this calculator with the state where you actually live — and read the
          per-state local-tax flag at the bottom of the breakdown.
        </p>

        <h2 className="mt-12 text-2xl font-medium text-brand-700">Bigger 401(k) = bigger paycheck (counterintuitively)</h2>
        <p className="mt-4 text-ink">
          Bumping your traditional 401(k) from 6% to 10% on an $85K salary moves <em>about $3,400/year</em> into the
          plan — but your take-home only drops by <em>about $2,500/year</em>. The other $900 is federal income tax
          you would have paid. Try it in the calculator: change the 401(k) % and watch the net annual fall by less
          than the contribution amount. The gap widens as your income grows into higher brackets.
        </p>

        <p className="mt-6 text-ink">
          See <Link href="/learn/how-much-to-contribute-to-401k">how much to contribute to your 401(k)</Link>,{" "}
          <Link href="/learn/401k-vs-ira-which-first">401(k) vs. IRA: which first</Link>, and{" "}
          <Link href="/learn/roth-ira-vs-traditional-ira">Roth vs. Traditional IRA</Link> for the strategy behind the
          numbers.
        </p>

        <h2 className="mt-12 text-2xl font-medium text-brand-700">Related tools</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-ink">
          <li><Link href="/tools/tax-bracket">Marginal tax rate calculator</Link> — federal-only tax with per-bracket breakdown.</li>
          <li><Link href="/tools/401k-match">401(k) match calculator</Link> — make sure you&apos;re capturing the full employer contribution.</li>
          <li><Link href="/tools/budget-50-30-20">50/30/20 budget</Link> — plug your net-monthly figure in to set spending categories.</li>
          <li><Link href="/tools/net-worth-percentile">Net worth percentile</Link> — where the saved portion of your paycheck lands you.</li>
        </ul>
      </section>
    </div>
  );
}
