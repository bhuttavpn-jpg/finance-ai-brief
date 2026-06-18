// 2026 paycheck calculator — combines federal income tax, FICA (Social
// Security + Medicare + Additional Medicare), and 50-state + DC income tax.
//
// Federal: 2026 brackets from IR-2025-103 / Rev. Proc. 2025-32, applied
// annualized; the calculator divides the annual tax across pay periods.
//
// FICA:
//   - Social Security: 6.2% on wages up to the 2026 wage base ($183,600 est.;
//     final figure published by SSA in October of the prior year).
//   - Medicare: 1.45% on all wages.
//   - Additional Medicare Tax: extra 0.9% on wages over $200K (single, HoH,
//     MFS) or $250K (MFJ). Employer-withholding threshold is a flat $200K
//     regardless of filing status, but for take-home estimation we apply the
//     filing-aware threshold so the annual figure matches the actual return.
//
// State: per `state-tax-2026.ts`. Most states allow federal pre-tax
// deductions (401(k), HSA, Section 125 health premiums) to flow through;
// some states (NJ, PA, AL on 401(k); CA, NJ on HSA) tax these separately.
// This calculator applies the federal-conformity simplification with a
// flagged set of exceptions handled inline.
//
// All numbers are estimates only — actual W-4 withholding follows IRS
// Publication 15-T tables which the employer applies per pay period. The
// annual tax this calculator computes matches what the W-4 method targets
// over the year, but per-paycheck withholding may differ slightly.

import {
  computeFederalTax,
  STANDARD_DEDUCTION_2026,
  type FilingStatus,
} from "./tax-brackets-2026";
import {
  computeStateTax,
  STATE_RULES_2026,
  type StateCode,
} from "./state-tax-2026";

export const SOCIAL_SECURITY_WAGE_BASE_2026 = 183_600;
export const SOCIAL_SECURITY_RATE = 0.062;
export const MEDICARE_RATE = 0.0145;
export const ADDITIONAL_MEDICARE_RATE = 0.009;

const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200_000,
  mfj: 250_000,
  mfs: 125_000,
  hoh: 200_000,
};

export type PayFrequency =
  | "weekly"
  | "biweekly"
  | "semimonthly"
  | "monthly"
  | "annual";

export const PAY_FREQUENCY_PERIODS: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
};

export const PAY_FREQUENCY_LABELS: Record<PayFrequency, string> = {
  weekly: "Weekly (52/yr)",
  biweekly: "Biweekly (26/yr)",
  semimonthly: "Semimonthly (24/yr)",
  monthly: "Monthly (12/yr)",
  annual: "Annual (1/yr)",
};

export interface PaycheckInput {
  /** Annualized gross salary. */
  annualGross: number;
  filing: FilingStatus;
  state: StateCode;
  payFrequency: PayFrequency;
  /** Traditional 401(k) deferral as a percent of gross (0–100). */
  traditional401kPct: number;
  /** Roth 401(k) deferral as a percent of gross — does NOT reduce taxable. */
  roth401kPct: number;
  /** Annual HSA contribution (pre-tax for federal + most states). */
  hsaAnnual: number;
  /** Annual Section 125 health insurance premiums (pre-tax, payroll-deducted). */
  healthPremiumAnnual: number;
}

export interface PaycheckResult {
  annualGross: number;
  /** Per-period gross (annualGross / periods). */
  perPeriodGross: number;
  periods: number;

  pretaxTotalAnnual: number;
  /** Wages subject to federal income tax (gross − pre-tax deductions). */
  federalTaxableWages: number;
  /** Wages subject to FICA (gross − Section 125 health premium − HSA; 401(k) is still FICA-taxable). */
  ficaTaxableWages: number;
  /** Wages subject to state income tax (per state rules; simplified). */
  stateTaxableWages: number;

  federalIncomeTaxAnnual: number;
  socialSecurityAnnual: number;
  medicareAnnual: number;
  additionalMedicareAnnual: number;
  stateIncomeTaxAnnual: number;

  totalTaxAnnual: number;
  netPayAnnual: number;
  netPayPerPeriod: number;

  effectiveTaxRate: number;
  marginalFederalRate: number;
  takeHomePct: number;

  notes: ReadonlyArray<string>;
}

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

export function computePaycheck(input: PaycheckInput): PaycheckResult {
  const periods = PAY_FREQUENCY_PERIODS[input.payFrequency];
  const gross = Math.max(0, input.annualGross);

  const trad401kPct = clamp(input.traditional401kPct, 0, 100) / 100;
  const roth401kPct = clamp(input.roth401kPct, 0, 100) / 100;
  const trad401k = gross * trad401kPct;
  const roth401k = gross * roth401kPct;
  const hsa = Math.max(0, input.hsaAnnual);
  const healthPremium = Math.max(0, input.healthPremiumAnnual);

  // Federal pre-tax: traditional 401(k) + HSA + health premium
  // (Roth 401(k) is post-tax — does NOT reduce federal taxable.)
  const federalPretax = trad401k + hsa + healthPremium;

  // FICA pre-tax: HSA + health premium ONLY. 401(k) deferrals are
  // STILL subject to FICA — that's the SS/Medicare wage base.
  const ficaPretax = hsa + healthPremium;

  const federalTaxableWages = Math.max(0, gross - federalPretax);
  const ficaTaxableWages = Math.max(0, gross - ficaPretax);

  // Federal income tax
  const fedStd = STANDARD_DEDUCTION_2026[input.filing];
  const federalAGI = federalTaxableWages;
  const federalTI = Math.max(0, federalAGI - fedStd);
  const fedResult = computeFederalTax(federalTI, input.filing);

  // Social Security: 6.2% on wages up to SS wage base
  const ssWages = Math.min(ficaTaxableWages, SOCIAL_SECURITY_WAGE_BASE_2026);
  const socialSecurity = ssWages * SOCIAL_SECURITY_RATE;

  // Medicare: 1.45% on all wages
  const medicare = ficaTaxableWages * MEDICARE_RATE;

  // Additional Medicare 0.9% on wages over filing-status threshold
  const addlThreshold = ADDITIONAL_MEDICARE_THRESHOLD[input.filing];
  const addlMedicare =
    ficaTaxableWages > addlThreshold
      ? (ficaTaxableWages - addlThreshold) * ADDITIONAL_MEDICARE_RATE
      : 0;

  // State income tax
  const stateRules = STATE_RULES_2026[input.state];
  const notes: string[] = [];
  let stateTaxableWages = 0;
  let stateIncomeTax = 0;

  if (!stateRules.noWageTax && stateRules.brackets) {
    // Simplified state taxable: most states conform to federal AGI for 401(k)/HSA/health.
    // Exceptions:
    //   - PA: 401(k) is taxed at state level (no deduction); HSA is deductible.
    //   - NJ: 401(k) is taxed at state level; HSA is taxed at state level.
    //   - AL: 401(k) is taxed at state level.
    //   - CA: HSA is taxed at state level (and treats earnings inside HSA as taxable).
    const stateFiling: "single" | "mfj" = input.filing === "mfj" ? "mfj" : "single";
    let stateAGI = federalTaxableWages;

    if (input.state === "PA") {
      // 401(k) is NOT pre-tax for PA state purposes; HSA is.
      stateAGI = gross - hsa - healthPremium;
      notes.push("Pennsylvania does not allow a 401(k) pre-tax deduction at the state level.");
    } else if (input.state === "NJ") {
      stateAGI = gross - healthPremium;
      notes.push("New Jersey taxes 401(k) deferrals AND HSA contributions at the state level.");
    } else if (input.state === "AL") {
      stateAGI = gross - hsa - healthPremium;
      notes.push("Alabama does not allow a 401(k) pre-tax deduction at the state level.");
    } else if (input.state === "CA") {
      stateAGI = federalTaxableWages + hsa;
      notes.push("California taxes HSA contributions at the state level.");
    }

    const stateStd = stateRules.stdDeduction
      ? stateRules.stdDeduction[stateFiling]
      : 0;
    const personalExemption = stateRules.personalExemption ?? 0;
    const filerCount = stateFiling === "mfj" ? 2 : 1;
    const stateExempt = personalExemption * filerCount;

    stateTaxableWages = Math.max(0, stateAGI - stateStd - stateExempt);
    stateIncomeTax = computeStateTax(stateTaxableWages, input.state, stateFiling);

    if (stateRules.localNote) notes.push(stateRules.localNote);
  } else {
    notes.push(`${stateRules.name} does not levy income tax on wages.`);
    if (stateRules.localNote) notes.push(stateRules.localNote);
  }

  const totalTax =
    fedResult.tax + socialSecurity + medicare + addlMedicare + stateIncomeTax;

  // Net pay = gross − all taxes − all pre-tax deductions − Roth 401(k) (post-tax but reduces take-home).
  const netPayAnnual = gross - totalTax - federalPretax - roth401k;
  const netPayPerPeriod = netPayAnnual / periods;

  return {
    annualGross: gross,
    perPeriodGross: gross / periods,
    periods,
    pretaxTotalAnnual: federalPretax + roth401k,
    federalTaxableWages,
    ficaTaxableWages,
    stateTaxableWages,
    federalIncomeTaxAnnual: fedResult.tax,
    socialSecurityAnnual: socialSecurity,
    medicareAnnual: medicare,
    additionalMedicareAnnual: addlMedicare,
    stateIncomeTaxAnnual: stateIncomeTax,
    totalTaxAnnual: totalTax,
    netPayAnnual,
    netPayPerPeriod,
    effectiveTaxRate: gross > 0 ? totalTax / gross : 0,
    marginalFederalRate: fedResult.marginalRate,
    takeHomePct: gross > 0 ? netPayAnnual / gross : 0,
    notes,
  };
}
