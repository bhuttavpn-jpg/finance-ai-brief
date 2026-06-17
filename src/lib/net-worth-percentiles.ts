// 2022 Survey of Consumer Finances (Federal Reserve) — net worth by age cohort.
// Published medians come straight from the SCF Bulletin tables; the 25th / 75th /
// 90th / 95th / 99th breakpoints are interpolated from SCF percentile data and
// widely-cited derivations (DQYDJ, Visual Capitalist). Use this as an order-of-
// magnitude reference, not a tax-grade figure. Update when 2025 SCF lands (~Oct 2026).

export type AgeBracket = "u35" | "35-44" | "45-54" | "55-64" | "65-74" | "75plus";

export const ageBracketLabel: Record<AgeBracket, string> = {
  u35: "Under 35",
  "35-44": "35–44",
  "45-54": "45–54",
  "55-64": "55–64",
  "65-74": "65–74",
  "75plus": "75+",
};

export function ageToBracket(age: number): AgeBracket {
  if (age < 35) return "u35";
  if (age < 45) return "35-44";
  if (age < 55) return "45-54";
  if (age < 65) return "55-64";
  if (age < 75) return "65-74";
  return "75plus";
}

// Percentile → net worth ($USD), 2022 SCF.
type Breakpoints = Array<[number, number]>; // [percentile, netWorth]

export const breakpointsByBracket: Record<AgeBracket, Breakpoints> = {
  u35: [
    [10, -6_000],
    [25, 0],
    [50, 39_000],
    [75, 135_000],
    [90, 400_000],
    [95, 750_000],
    [99, 3_000_000],
  ],
  "35-44": [
    [10, 0],
    [25, 14_000],
    [50, 135_600],
    [75, 437_000],
    [90, 1_300_000],
    [95, 2_500_000],
    [99, 10_000_000],
  ],
  "45-54": [
    [10, 0],
    [25, 50_000],
    [50, 247_200],
    [75, 810_000],
    [90, 2_500_000],
    [95, 4_800_000],
    [99, 19_000_000],
  ],
  "55-64": [
    [10, 5_000],
    [25, 75_000],
    [50, 364_500],
    [75, 1_150_000],
    [90, 3_400_000],
    [95, 6_500_000],
    [99, 26_000_000],
  ],
  "65-74": [
    [10, 12_000],
    [25, 100_000],
    [50, 409_900],
    [75, 1_300_000],
    [90, 3_500_000],
    [95, 6_800_000],
    [99, 25_000_000],
  ],
  "75plus": [
    [10, 10_000],
    [25, 85_000],
    [50, 335_600],
    [75, 1_000_000],
    [90, 2_800_000],
    [95, 5_500_000],
    [99, 20_000_000],
  ],
};

export function percentileFor(age: number, netWorth: number): number {
  const bracket = ageToBracket(age);
  const bp = breakpointsByBracket[bracket];

  if (netWorth <= bp[0][1]) return bp[0][0];
  if (netWorth >= bp[bp.length - 1][1]) return bp[bp.length - 1][0];

  for (let i = 0; i < bp.length - 1; i++) {
    const [lowP, lowV] = bp[i];
    const [highP, highV] = bp[i + 1];
    if (netWorth >= lowV && netWorth <= highV) {
      const ratio = (netWorth - lowV) / (highV - lowV);
      return lowP + ratio * (highP - lowP);
    }
  }
  return 50;
}

export function medianFor(age: number): number {
  const bracket = ageToBracket(age);
  const bp = breakpointsByBracket[bracket];
  const median = bp.find(([p]) => p === 50);
  return median ? median[1] : 0;
}
