// 2026 federal income tax brackets (placeholder values — verify against
// IRS Rev. Proc. before publishing. Brackets are inflation-adjusted annually.)
//
// Each row is [upper limit of bracket, marginal rate]. The last row's upper
// limit is Infinity. Income in [prev upper, current upper] is taxed at `rate`.

export type FilingStatus = "single" | "mfj" | "mfs" | "hoh";

export const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 15_700,
  mfj: 31_400,
  mfs: 15_700,
  hoh: 23_550,
};

export const BRACKETS_2026: Record<FilingStatus, ReadonlyArray<readonly [number, number]>> = {
  single: [
    [11_925, 0.10],
    [48_475, 0.12],
    [103_350, 0.22],
    [197_300, 0.24],
    [250_525, 0.32],
    [626_350, 0.35],
    [Infinity, 0.37],
  ],
  mfj: [
    [23_850, 0.10],
    [96_950, 0.12],
    [206_700, 0.22],
    [394_600, 0.24],
    [501_050, 0.32],
    [751_600, 0.35],
    [Infinity, 0.37],
  ],
  mfs: [
    [11_925, 0.10],
    [48_475, 0.12],
    [103_350, 0.22],
    [197_300, 0.24],
    [250_525, 0.32],
    [375_800, 0.35],
    [Infinity, 0.37],
  ],
  hoh: [
    [17_000, 0.10],
    [64_850, 0.12],
    [103_350, 0.22],
    [197_300, 0.24],
    [250_500, 0.32],
    [626_350, 0.35],
    [Infinity, 0.37],
  ],
};

export interface TaxResult {
  /** Tax owed on taxable income */
  tax: number;
  /** Marginal rate at this taxable income */
  marginalRate: number;
  /** Effective rate = tax / taxableIncome */
  effectiveRate: number;
  /** Per-bracket breakdown (lower, upper, rate, taxInBracket) */
  brackets: Array<{ lower: number; upper: number; rate: number; tax: number }>;
}

/** Compute federal income tax on `taxableIncome` for the given filing status. */
export function computeFederalTax(
  taxableIncome: number,
  status: FilingStatus
): TaxResult {
  const brackets = BRACKETS_2026[status];
  let prev = 0;
  let total = 0;
  let marginal = 0;
  const breakdown: TaxResult["brackets"] = [];
  for (const [upper, rate] of brackets) {
    if (taxableIncome <= prev) {
      breakdown.push({ lower: prev, upper, rate, tax: 0 });
      continue;
    }
    const capped = Math.min(taxableIncome, upper);
    const inBracket = Math.max(0, capped - prev);
    const tax = inBracket * rate;
    total += tax;
    breakdown.push({ lower: prev, upper, rate, tax });
    if (taxableIncome <= upper) {
      marginal = rate;
    }
    prev = upper;
    if (taxableIncome <= upper) break;
  }
  return {
    tax: total,
    marginalRate: marginal,
    effectiveRate: taxableIncome > 0 ? total / taxableIncome : 0,
    brackets: breakdown,
  };
}

export const FILING_STATUS_LABELS: Record<FilingStatus, string> = {
  single: "Single",
  mfj: "Married filing jointly",
  mfs: "Married filing separately",
  hoh: "Head of household",
};
