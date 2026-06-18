// 2026 state income tax rules for all 50 states + DC.
//
// Sources are state Department of Revenue publications, most recently enacted
// legislation as of mid-2026, and the Tax Foundation's annual State Individual
// Income Tax Rates compilation. Rates are best-effort estimates for 2026; some
// states (esp. NC, NE, MS, MO, IA, KY, IN) are in multi-year phase-down regimes
// where the exact 2026 figure depends on legislative trigger conditions —
// users should always verify against the official state DOR before filing.
//
// Each state defines:
//   - `name` — display name
//   - `noWageTax` — true if the state imposes no income tax on wages
//   - `brackets.single` / `brackets.mfj` — array of `{ upTo, rate }` where `upTo`
//     is the upper limit of that bracket (null = highest bracket, no cap)
//   - `stdDeduction` — standard deduction by filing status, where the state has
//     its own; otherwise federal-conformity is assumed
//   - `personalExemption` — per-filer subtraction (single = 1, mfj = 2)
//   - `localNote` — common local/county/city income tax to be aware of
//
// Local taxes are NOT modeled — too many municipal variations (NYC/Yonkers,
// Philadelphia & PA EIT, Ohio cities, MD counties, KY counties, IN counties,
// MI cities, etc.). The `localNote` flags where local tax meaningfully changes
// the total.

export type StateCode =
  | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL"
  | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME"
  | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH"
  | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI"
  | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

export interface StateBracket {
  /** Upper limit of bracket; `null` for the top (uncapped) bracket. */
  upTo: number | null;
  /** Marginal rate as decimal (e.g. 0.05 = 5%). */
  rate: number;
}

export interface StateRules {
  name: string;
  code: StateCode;
  noWageTax?: boolean;
  brackets?: {
    single: ReadonlyArray<StateBracket>;
    mfj: ReadonlyArray<StateBracket>;
  };
  stdDeduction?: { single: number; mfj: number };
  personalExemption?: number;
  localNote?: string;
}

const flat = (rate: number): ReadonlyArray<StateBracket> => [{ upTo: null, rate }];

export const STATE_RULES_2026: Record<StateCode, StateRules> = {
  AL: {
    name: "Alabama", code: "AL",
    brackets: {
      single: [{ upTo: 500, rate: 0.02 }, { upTo: 3_000, rate: 0.04 }, { upTo: null, rate: 0.05 }],
      mfj:    [{ upTo: 1_000, rate: 0.02 }, { upTo: 6_000, rate: 0.04 }, { upTo: null, rate: 0.05 }],
    },
    stdDeduction: { single: 2_500, mfj: 7_500 },
    personalExemption: 1_500,
  },
  AK: { name: "Alaska", code: "AK", noWageTax: true },
  AZ: {
    name: "Arizona", code: "AZ",
    brackets: { single: flat(0.025), mfj: flat(0.025) },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  AR: {
    name: "Arkansas", code: "AR",
    brackets: {
      single: [{ upTo: 4_500, rate: 0.02 }, { upTo: 9_100, rate: 0.04 }, { upTo: null, rate: 0.039 }],
      mfj:    [{ upTo: 4_500, rate: 0.02 }, { upTo: 9_100, rate: 0.04 }, { upTo: null, rate: 0.039 }],
    },
    stdDeduction: { single: 2_410, mfj: 4_820 },
  },
  CA: {
    name: "California", code: "CA",
    brackets: {
      single: [
        { upTo: 10_756, rate: 0.01 }, { upTo: 25_499, rate: 0.02 },
        { upTo: 40_245, rate: 0.04 }, { upTo: 55_866, rate: 0.06 },
        { upTo: 70_606, rate: 0.08 }, { upTo: 360_659, rate: 0.093 },
        { upTo: 432_787, rate: 0.103 }, { upTo: 721_314, rate: 0.113 },
        { upTo: null, rate: 0.123 },
      ],
      mfj: [
        { upTo: 21_512, rate: 0.01 }, { upTo: 50_998, rate: 0.02 },
        { upTo: 80_490, rate: 0.04 }, { upTo: 111_732, rate: 0.06 },
        { upTo: 141_212, rate: 0.08 }, { upTo: 721_318, rate: 0.093 },
        { upTo: 865_574, rate: 0.103 }, { upTo: 1_442_628, rate: 0.113 },
        { upTo: null, rate: 0.123 },
      ],
    },
    stdDeduction: { single: 5_540, mfj: 11_080 },
    localNote: "Plus 1% Mental Health Services Tax on taxable income over $1M.",
  },
  CO: { name: "Colorado", code: "CO", brackets: { single: flat(0.044), mfj: flat(0.044) } },
  CT: {
    name: "Connecticut", code: "CT",
    brackets: {
      single: [
        { upTo: 10_000, rate: 0.02 }, { upTo: 50_000, rate: 0.045 },
        { upTo: 100_000, rate: 0.055 }, { upTo: 200_000, rate: 0.06 },
        { upTo: 250_000, rate: 0.065 }, { upTo: 500_000, rate: 0.069 },
        { upTo: null, rate: 0.0699 },
      ],
      mfj: [
        { upTo: 20_000, rate: 0.02 }, { upTo: 100_000, rate: 0.045 },
        { upTo: 200_000, rate: 0.055 }, { upTo: 400_000, rate: 0.06 },
        { upTo: 500_000, rate: 0.065 }, { upTo: 1_000_000, rate: 0.069 },
        { upTo: null, rate: 0.0699 },
      ],
    },
  },
  DE: {
    name: "Delaware", code: "DE",
    brackets: {
      single: [
        { upTo: 2_000, rate: 0 }, { upTo: 5_000, rate: 0.022 },
        { upTo: 10_000, rate: 0.039 }, { upTo: 20_000, rate: 0.048 },
        { upTo: 25_000, rate: 0.052 }, { upTo: 60_000, rate: 0.0555 },
        { upTo: null, rate: 0.066 },
      ],
      mfj: [
        { upTo: 2_000, rate: 0 }, { upTo: 5_000, rate: 0.022 },
        { upTo: 10_000, rate: 0.039 }, { upTo: 20_000, rate: 0.048 },
        { upTo: 25_000, rate: 0.052 }, { upTo: 60_000, rate: 0.0555 },
        { upTo: null, rate: 0.066 },
      ],
    },
    stdDeduction: { single: 3_250, mfj: 6_500 },
    localNote: "Wilmington imposes an additional 1.25% earned income tax on residents.",
  },
  DC: {
    name: "District of Columbia", code: "DC",
    brackets: {
      single: [
        { upTo: 10_000, rate: 0.04 }, { upTo: 40_000, rate: 0.06 },
        { upTo: 60_000, rate: 0.065 }, { upTo: 250_000, rate: 0.085 },
        { upTo: 500_000, rate: 0.0925 }, { upTo: 1_000_000, rate: 0.0975 },
        { upTo: null, rate: 0.1075 },
      ],
      mfj: [
        { upTo: 10_000, rate: 0.04 }, { upTo: 40_000, rate: 0.06 },
        { upTo: 60_000, rate: 0.065 }, { upTo: 250_000, rate: 0.085 },
        { upTo: 500_000, rate: 0.0925 }, { upTo: 1_000_000, rate: 0.0975 },
        { upTo: null, rate: 0.1075 },
      ],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  FL: { name: "Florida", code: "FL", noWageTax: true },
  GA: {
    name: "Georgia", code: "GA",
    brackets: { single: flat(0.0519), mfj: flat(0.0519) },
    stdDeduction: { single: 12_000, mfj: 24_000 },
  },
  HI: {
    name: "Hawaii", code: "HI",
    brackets: {
      single: [
        { upTo: 2_400, rate: 0.014 }, { upTo: 4_800, rate: 0.032 },
        { upTo: 9_600, rate: 0.055 }, { upTo: 14_400, rate: 0.064 },
        { upTo: 19_200, rate: 0.068 }, { upTo: 24_000, rate: 0.072 },
        { upTo: 36_000, rate: 0.076 }, { upTo: 48_000, rate: 0.079 },
        { upTo: 150_000, rate: 0.0825 }, { upTo: 175_000, rate: 0.09 },
        { upTo: 200_000, rate: 0.10 }, { upTo: null, rate: 0.11 },
      ],
      mfj: [
        { upTo: 4_800, rate: 0.014 }, { upTo: 9_600, rate: 0.032 },
        { upTo: 19_200, rate: 0.055 }, { upTo: 28_800, rate: 0.064 },
        { upTo: 38_400, rate: 0.068 }, { upTo: 48_000, rate: 0.072 },
        { upTo: 72_000, rate: 0.076 }, { upTo: 96_000, rate: 0.079 },
        { upTo: 300_000, rate: 0.0825 }, { upTo: 350_000, rate: 0.09 },
        { upTo: 400_000, rate: 0.10 }, { upTo: null, rate: 0.11 },
      ],
    },
    stdDeduction: { single: 4_400, mfj: 8_800 },
  },
  ID: {
    name: "Idaho", code: "ID",
    brackets: { single: flat(0.053), mfj: flat(0.053) },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  IL: { name: "Illinois", code: "IL", brackets: { single: flat(0.0495), mfj: flat(0.0495) }, personalExemption: 2_775 },
  IN: {
    name: "Indiana", code: "IN",
    brackets: { single: flat(0.029), mfj: flat(0.029) },
    localNote: "All 92 counties levy local income tax (0.5–3.38%); add to the state rate.",
  },
  IA: {
    name: "Iowa", code: "IA",
    brackets: { single: flat(0.038), mfj: flat(0.038) },
    stdDeduction: { single: 2_700, mfj: 6_700 },
  },
  KS: {
    name: "Kansas", code: "KS",
    brackets: {
      single: [{ upTo: 23_000, rate: 0.0525 }, { upTo: null, rate: 0.057 }],
      mfj:    [{ upTo: 46_000, rate: 0.0525 }, { upTo: null, rate: 0.057 }],
    },
    stdDeduction: { single: 3_500, mfj: 8_000 },
  },
  KY: {
    name: "Kentucky", code: "KY",
    brackets: { single: flat(0.035), mfj: flat(0.035) },
    stdDeduction: { single: 3_270, mfj: 6_540 },
    localNote: "Most cities and counties levy a 0.5–2.5% local occupational license tax on wages.",
  },
  LA: {
    name: "Louisiana", code: "LA",
    brackets: { single: flat(0.03), mfj: flat(0.03) },
    stdDeduction: { single: 12_500, mfj: 25_000 },
  },
  ME: {
    name: "Maine", code: "ME",
    brackets: {
      single: [{ upTo: 26_800, rate: 0.058 }, { upTo: 63_450, rate: 0.0675 }, { upTo: null, rate: 0.0715 }],
      mfj:    [{ upTo: 53_600, rate: 0.058 }, { upTo: 126_900, rate: 0.0675 }, { upTo: null, rate: 0.0715 }],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  MD: {
    name: "Maryland", code: "MD",
    brackets: {
      single: [
        { upTo: 1_000, rate: 0.02 }, { upTo: 2_000, rate: 0.03 },
        { upTo: 3_000, rate: 0.04 }, { upTo: 100_000, rate: 0.0475 },
        { upTo: 125_000, rate: 0.05 }, { upTo: 150_000, rate: 0.0525 },
        { upTo: 250_000, rate: 0.055 }, { upTo: null, rate: 0.0575 },
      ],
      mfj: [
        { upTo: 1_000, rate: 0.02 }, { upTo: 2_000, rate: 0.03 },
        { upTo: 3_000, rate: 0.04 }, { upTo: 150_000, rate: 0.0475 },
        { upTo: 175_000, rate: 0.05 }, { upTo: 225_000, rate: 0.0525 },
        { upTo: 300_000, rate: 0.055 }, { upTo: null, rate: 0.0575 },
      ],
    },
    stdDeduction: { single: 2_550, mfj: 5_150 },
    personalExemption: 3_200,
    localNote: "All 23 counties + Baltimore City levy 2.25–3.20% piggyback income tax on top of the state rate.",
  },
  MA: {
    name: "Massachusetts", code: "MA",
    brackets: {
      single: [{ upTo: 1_000_000, rate: 0.05 }, { upTo: null, rate: 0.09 }],
      mfj:    [{ upTo: 1_000_000, rate: 0.05 }, { upTo: null, rate: 0.09 }],
    },
    personalExemption: 4_400,
  },
  MI: {
    name: "Michigan", code: "MI",
    brackets: { single: flat(0.0425), mfj: flat(0.0425) },
    personalExemption: 5_800,
    localNote: "22 cities (Detroit, Grand Rapids, Lansing, etc.) levy 1.0–2.4% resident income tax.",
  },
  MN: {
    name: "Minnesota", code: "MN",
    brackets: {
      single: [
        { upTo: 32_570, rate: 0.0535 }, { upTo: 106_990, rate: 0.068 },
        { upTo: 198_630, rate: 0.0785 }, { upTo: null, rate: 0.0985 },
      ],
      mfj: [
        { upTo: 47_620, rate: 0.0535 }, { upTo: 189_180, rate: 0.068 },
        { upTo: 330_410, rate: 0.0785 }, { upTo: null, rate: 0.0985 },
      ],
    },
    stdDeduction: { single: 14_950, mfj: 29_900 },
  },
  MS: {
    name: "Mississippi", code: "MS",
    brackets: {
      single: [{ upTo: 10_000, rate: 0 }, { upTo: null, rate: 0.044 }],
      mfj:    [{ upTo: 10_000, rate: 0 }, { upTo: null, rate: 0.044 }],
    },
    stdDeduction: { single: 2_300, mfj: 4_600 },
    personalExemption: 6_000,
  },
  MO: {
    name: "Missouri", code: "MO",
    brackets: {
      single: [
        { upTo: 1_273, rate: 0 }, { upTo: 2_546, rate: 0.02 },
        { upTo: 3_819, rate: 0.025 }, { upTo: 5_092, rate: 0.03 },
        { upTo: 6_365, rate: 0.035 }, { upTo: 7_638, rate: 0.04 },
        { upTo: 8_911, rate: 0.045 }, { upTo: null, rate: 0.047 },
      ],
      mfj: [
        { upTo: 1_273, rate: 0 }, { upTo: 2_546, rate: 0.02 },
        { upTo: 3_819, rate: 0.025 }, { upTo: 5_092, rate: 0.03 },
        { upTo: 6_365, rate: 0.035 }, { upTo: 7_638, rate: 0.04 },
        { upTo: 8_911, rate: 0.045 }, { upTo: null, rate: 0.047 },
      ],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
    localNote: "Kansas City and St. Louis levy 1% earnings tax on residents and non-resident commuters.",
  },
  MT: {
    name: "Montana", code: "MT",
    brackets: {
      single: [{ upTo: 21_100, rate: 0.047 }, { upTo: null, rate: 0.059 }],
      mfj:    [{ upTo: 42_200, rate: 0.047 }, { upTo: null, rate: 0.059 }],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  NE: {
    name: "Nebraska", code: "NE",
    brackets: {
      single: [
        { upTo: 3_990, rate: 0.0246 }, { upTo: 23_910, rate: 0.0351 },
        { upTo: 38_540, rate: 0.0501 }, { upTo: null, rate: 0.052 },
      ],
      mfj: [
        { upTo: 7_980, rate: 0.0246 }, { upTo: 47_820, rate: 0.0351 },
        { upTo: 77_080, rate: 0.0501 }, { upTo: null, rate: 0.052 },
      ],
    },
    stdDeduction: { single: 8_100, mfj: 16_200 },
  },
  NV: { name: "Nevada", code: "NV", noWageTax: true },
  NH: { name: "New Hampshire", code: "NH", noWageTax: true },
  NJ: {
    name: "New Jersey", code: "NJ",
    brackets: {
      single: [
        { upTo: 20_000, rate: 0.014 }, { upTo: 35_000, rate: 0.0175 },
        { upTo: 40_000, rate: 0.035 }, { upTo: 75_000, rate: 0.05525 },
        { upTo: 500_000, rate: 0.0637 }, { upTo: 1_000_000, rate: 0.0897 },
        { upTo: null, rate: 0.1075 },
      ],
      mfj: [
        { upTo: 20_000, rate: 0.014 }, { upTo: 50_000, rate: 0.0175 },
        { upTo: 70_000, rate: 0.0245 }, { upTo: 80_000, rate: 0.035 },
        { upTo: 150_000, rate: 0.05525 }, { upTo: 500_000, rate: 0.0637 },
        { upTo: 1_000_000, rate: 0.0897 }, { upTo: null, rate: 0.1075 },
      ],
    },
    personalExemption: 1_000,
  },
  NM: {
    name: "New Mexico", code: "NM",
    brackets: {
      single: [
        { upTo: 5_500, rate: 0.017 }, { upTo: 16_500, rate: 0.032 },
        { upTo: 33_500, rate: 0.047 }, { upTo: 66_500, rate: 0.049 },
        { upTo: 210_000, rate: 0.049 }, { upTo: null, rate: 0.059 },
      ],
      mfj: [
        { upTo: 8_000, rate: 0.017 }, { upTo: 25_000, rate: 0.032 },
        { upTo: 50_000, rate: 0.047 }, { upTo: 100_000, rate: 0.049 },
        { upTo: 315_000, rate: 0.049 }, { upTo: null, rate: 0.059 },
      ],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  NY: {
    name: "New York", code: "NY",
    brackets: {
      single: [
        { upTo: 8_500, rate: 0.04 }, { upTo: 11_700, rate: 0.045 },
        { upTo: 13_900, rate: 0.0525 }, { upTo: 80_650, rate: 0.0585 },
        { upTo: 215_400, rate: 0.0625 }, { upTo: 1_077_550, rate: 0.0685 },
        { upTo: 5_000_000, rate: 0.0965 }, { upTo: 25_000_000, rate: 0.103 },
        { upTo: null, rate: 0.109 },
      ],
      mfj: [
        { upTo: 17_150, rate: 0.04 }, { upTo: 23_600, rate: 0.045 },
        { upTo: 27_900, rate: 0.0525 }, { upTo: 161_550, rate: 0.0585 },
        { upTo: 323_200, rate: 0.0625 }, { upTo: 2_155_350, rate: 0.0685 },
        { upTo: 5_000_000, rate: 0.0965 }, { upTo: 25_000_000, rate: 0.103 },
        { upTo: null, rate: 0.109 },
      ],
    },
    stdDeduction: { single: 8_000, mfj: 16_050 },
    localNote: "NYC residents owe an additional ~3.078–3.876% city income tax; Yonkers ~1.5%.",
  },
  NC: { name: "North Carolina", code: "NC", brackets: { single: flat(0.0425), mfj: flat(0.0425) }, stdDeduction: { single: 12_750, mfj: 25_500 } },
  ND: {
    name: "North Dakota", code: "ND",
    brackets: {
      single: [
        { upTo: 47_150, rate: 0 }, { upTo: 238_200, rate: 0.0195 }, { upTo: null, rate: 0.025 },
      ],
      mfj: [
        { upTo: 78_775, rate: 0 }, { upTo: 289_975, rate: 0.0195 }, { upTo: null, rate: 0.025 },
      ],
    },
  },
  OH: {
    name: "Ohio", code: "OH",
    brackets: {
      single: [
        { upTo: 26_050, rate: 0 }, { upTo: 100_000, rate: 0.0275 }, { upTo: null, rate: 0.035 },
      ],
      mfj: [
        { upTo: 26_050, rate: 0 }, { upTo: 100_000, rate: 0.0275 }, { upTo: null, rate: 0.035 },
      ],
    },
    localNote: "~600 Ohio cities + school districts levy 0.5–3% municipal income tax.",
  },
  OK: {
    name: "Oklahoma", code: "OK",
    brackets: {
      single: [
        { upTo: 1_000, rate: 0.0025 }, { upTo: 2_500, rate: 0.0075 },
        { upTo: 3_750, rate: 0.0175 }, { upTo: 4_900, rate: 0.0275 },
        { upTo: 7_200, rate: 0.0375 }, { upTo: null, rate: 0.0475 },
      ],
      mfj: [
        { upTo: 2_000, rate: 0.0025 }, { upTo: 5_000, rate: 0.0075 },
        { upTo: 7_500, rate: 0.0175 }, { upTo: 9_800, rate: 0.0275 },
        { upTo: 12_200, rate: 0.0375 }, { upTo: null, rate: 0.0475 },
      ],
    },
    stdDeduction: { single: 6_350, mfj: 12_700 },
  },
  OR: {
    name: "Oregon", code: "OR",
    brackets: {
      single: [
        { upTo: 4_400, rate: 0.0475 }, { upTo: 11_050, rate: 0.0675 },
        { upTo: 125_000, rate: 0.0875 }, { upTo: null, rate: 0.099 },
      ],
      mfj: [
        { upTo: 8_800, rate: 0.0475 }, { upTo: 22_100, rate: 0.0675 },
        { upTo: 250_000, rate: 0.0875 }, { upTo: null, rate: 0.099 },
      ],
    },
    stdDeduction: { single: 2_745, mfj: 5_495 },
    localNote: "Portland Metro residents add 1% Supportive Housing Services tax (over $125K single / $200K MFJ).",
  },
  PA: {
    name: "Pennsylvania", code: "PA",
    brackets: { single: flat(0.0307), mfj: flat(0.0307) },
    localNote: "Almost all PA municipalities + school districts levy 0.5–4% local Earned Income Tax (EIT); Philadelphia ~3.75%.",
  },
  RI: {
    name: "Rhode Island", code: "RI",
    brackets: {
      single: [
        { upTo: 79_900, rate: 0.0375 }, { upTo: 181_650, rate: 0.0475 }, { upTo: null, rate: 0.0599 },
      ],
      mfj: [
        { upTo: 79_900, rate: 0.0375 }, { upTo: 181_650, rate: 0.0475 }, { upTo: null, rate: 0.0599 },
      ],
    },
    stdDeduction: { single: 10_550, mfj: 21_150 },
    personalExemption: 4_950,
  },
  SC: {
    name: "South Carolina", code: "SC",
    brackets: {
      single: [{ upTo: 3_460, rate: 0 }, { upTo: 17_330, rate: 0.03 }, { upTo: null, rate: 0.062 }],
      mfj:    [{ upTo: 3_460, rate: 0 }, { upTo: 17_330, rate: 0.03 }, { upTo: null, rate: 0.062 }],
    },
    stdDeduction: { single: 15_700, mfj: 31_400 },
  },
  SD: { name: "South Dakota", code: "SD", noWageTax: true },
  TN: { name: "Tennessee", code: "TN", noWageTax: true },
  TX: { name: "Texas", code: "TX", noWageTax: true },
  UT: {
    name: "Utah", code: "UT",
    brackets: { single: flat(0.0455), mfj: flat(0.0455) },
    stdDeduction: { single: 0, mfj: 0 },
  },
  VT: {
    name: "Vermont", code: "VT",
    brackets: {
      single: [
        { upTo: 47_900, rate: 0.0335 }, { upTo: 116_000, rate: 0.066 },
        { upTo: 242_000, rate: 0.076 }, { upTo: null, rate: 0.0875 },
      ],
      mfj: [
        { upTo: 80_200, rate: 0.0335 }, { upTo: 194_000, rate: 0.066 },
        { upTo: 295_650, rate: 0.076 }, { upTo: null, rate: 0.0875 },
      ],
    },
    stdDeduction: { single: 7_400, mfj: 14_800 },
  },
  VA: {
    name: "Virginia", code: "VA",
    brackets: {
      single: [
        { upTo: 3_000, rate: 0.02 }, { upTo: 5_000, rate: 0.03 },
        { upTo: 17_000, rate: 0.05 }, { upTo: null, rate: 0.0575 },
      ],
      mfj: [
        { upTo: 3_000, rate: 0.02 }, { upTo: 5_000, rate: 0.03 },
        { upTo: 17_000, rate: 0.05 }, { upTo: null, rate: 0.0575 },
      ],
    },
    stdDeduction: { single: 8_500, mfj: 17_000 },
    personalExemption: 930,
  },
  WA: { name: "Washington", code: "WA", noWageTax: true, localNote: "No wage income tax. 7% capital-gains tax on long-term gains over $270K applies separately." },
  WV: {
    name: "West Virginia", code: "WV",
    brackets: {
      single: [
        { upTo: 10_000, rate: 0.022 }, { upTo: 25_000, rate: 0.029 },
        { upTo: 40_000, rate: 0.0335 }, { upTo: 60_000, rate: 0.039 }, { upTo: null, rate: 0.045 },
      ],
      mfj: [
        { upTo: 10_000, rate: 0.022 }, { upTo: 25_000, rate: 0.029 },
        { upTo: 40_000, rate: 0.0335 }, { upTo: 60_000, rate: 0.039 }, { upTo: null, rate: 0.045 },
      ],
    },
  },
  WI: {
    name: "Wisconsin", code: "WI",
    brackets: {
      single: [
        { upTo: 14_680, rate: 0.035 }, { upTo: 29_370, rate: 0.044 },
        { upTo: 323_290, rate: 0.053 }, { upTo: null, rate: 0.0765 },
      ],
      mfj: [
        { upTo: 19_580, rate: 0.035 }, { upTo: 39_150, rate: 0.044 },
        { upTo: 431_060, rate: 0.053 }, { upTo: null, rate: 0.0765 },
      ],
    },
    stdDeduction: { single: 13_230, mfj: 24_490 },
  },
  WY: { name: "Wyoming", code: "WY", noWageTax: true },
};

export const STATE_CODES: ReadonlyArray<StateCode> =
  (Object.keys(STATE_RULES_2026) as StateCode[]).sort((a, b) =>
    STATE_RULES_2026[a].name.localeCompare(STATE_RULES_2026[b].name)
  );

/** Compute state income tax on taxable income, by bracket. */
export function computeStateTax(
  taxableIncome: number,
  state: StateCode,
  filing: "single" | "mfj",
): number {
  const rules = STATE_RULES_2026[state];
  if (rules.noWageTax || !rules.brackets) return 0;
  const brackets = rules.brackets[filing];
  let prev = 0;
  let total = 0;
  for (const { upTo, rate } of brackets) {
    const upper = upTo === null ? Infinity : upTo;
    if (taxableIncome <= prev) break;
    const capped = Math.min(taxableIncome, upper);
    total += Math.max(0, capped - prev) * rate;
    prev = upper;
    if (taxableIncome <= upper) break;
  }
  return total;
}
