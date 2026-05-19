// Server-only affiliate partner registry.
// Real tracked URLs live in env vars and never leak to the client.
// The /go/[partner] route is the single redirect surface.

export type PartnerKey =
  | "marcus"
  | "ally"
  | "sofi-money"
  | "sofi-invest"
  | "cit"
  | "fidelity"
  | "schwab"
  | "vanguard"
  | "robinhood"
  | "webull"
  | "m1"
  | "betterment"
  | "wealthfront"
  | "turbotax"
  | "taxact"
  | "freetaxusa"
  | "bestow"
  | "ethos"
  | "haven"
  | "ladder"
  | "policygenius"
  | "csp"
  | "amex-gold"
  | "citi-double-cash"
  | "lively"
  | "fidelity-hsa"
  | "ynab"
  | "wise"
  | "capital-one"
  | "discover-it"
  | "credit-karma";

interface Partner {
  /** Display name shown to users. */
  name: string;
  /** Plain-English category (used in disclosures). */
  category: string;
  /** Env var name that holds the real tracked affiliate URL. */
  envVar: string;
}

export const PARTNERS: Record<PartnerKey, Partner> = {
  marcus: { name: "Marcus by Goldman Sachs", category: "High-yield savings", envVar: "AFFILIATE_MARCUS" },
  ally: { name: "Ally Bank", category: "High-yield savings", envVar: "AFFILIATE_ALLY" },
  "sofi-money": { name: "SoFi Money", category: "High-yield savings", envVar: "AFFILIATE_SOFI_MONEY" },
  "sofi-invest": { name: "SoFi Invest", category: "Brokerage", envVar: "AFFILIATE_SOFI_INVEST" },
  cit: { name: "CIT Bank", category: "High-yield savings", envVar: "AFFILIATE_CIT" },
  fidelity: { name: "Fidelity", category: "Brokerage", envVar: "AFFILIATE_FIDELITY" },
  schwab: { name: "Charles Schwab", category: "Brokerage", envVar: "AFFILIATE_SCHWAB" },
  vanguard: { name: "Vanguard", category: "Brokerage", envVar: "AFFILIATE_VANGUARD" },
  robinhood: { name: "Robinhood", category: "Brokerage", envVar: "AFFILIATE_ROBINHOOD" },
  webull: { name: "Webull", category: "Brokerage", envVar: "AFFILIATE_WEBULL" },
  m1: { name: "M1 Finance", category: "Brokerage", envVar: "AFFILIATE_M1" },
  betterment: { name: "Betterment", category: "Robo-advisor", envVar: "AFFILIATE_BETTERMENT" },
  wealthfront: { name: "Wealthfront", category: "Robo-advisor", envVar: "AFFILIATE_WEALTHFRONT" },
  turbotax: { name: "TurboTax", category: "Tax software", envVar: "AFFILIATE_TURBOTAX" },
  taxact: { name: "TaxAct", category: "Tax software", envVar: "AFFILIATE_TAXACT" },
  freetaxusa: { name: "FreeTaxUSA", category: "Tax software", envVar: "AFFILIATE_FREETAXUSA" },
  bestow: { name: "Bestow", category: "Term life insurance", envVar: "AFFILIATE_BESTOW" },
  ethos: { name: "Ethos", category: "Term life insurance", envVar: "AFFILIATE_ETHOS" },
  haven: { name: "Haven Life", category: "Term life insurance", envVar: "AFFILIATE_HAVEN" },
  ladder: { name: "Ladder", category: "Term life insurance", envVar: "AFFILIATE_LADDER" },
  policygenius: { name: "Policygenius", category: "Insurance marketplace", envVar: "AFFILIATE_POLICYGENIUS" },
  csp: { name: "Chase Sapphire Preferred", category: "Travel credit card", envVar: "AFFILIATE_CHASE_SAPPHIRE_PREFERRED" },
  "amex-gold": { name: "Amex Gold Card", category: "Travel credit card", envVar: "AFFILIATE_AMEX_GOLD" },
  "citi-double-cash": { name: "Citi Double Cash", category: "Cashback credit card", envVar: "AFFILIATE_CITI_DOUBLE_CASH" },
  lively: { name: "Lively HSA", category: "HSA provider", envVar: "AFFILIATE_LIVELY" },
  "fidelity-hsa": { name: "Fidelity HSA", category: "HSA provider", envVar: "AFFILIATE_FIDELITY_HSA" },
  ynab: { name: "YNAB", category: "Budgeting app", envVar: "AFFILIATE_YNAB" },
  wise: { name: "Wise", category: "Multi-currency account", envVar: "AFFILIATE_WISE" },
  "capital-one": { name: "Capital One Platinum Secured", category: "Secured credit card", envVar: "AFFILIATE_CAPITAL_ONE" },
  "discover-it": { name: "Discover it Secured", category: "Secured credit card", envVar: "AFFILIATE_DISCOVER_IT" },
  "credit-karma": { name: "Credit Karma", category: "Free credit monitoring", envVar: "AFFILIATE_CREDIT_KARMA" },
};

/** Resolve a partner key to its current tracked URL, or null if not configured. */
export function getPartnerUrl(key: string): string | null {
  if (!(key in PARTNERS)) return null;
  const partner = PARTNERS[key as PartnerKey];
  const url = process.env[partner.envVar];
  return url && url.length > 0 ? url : null;
}

export function getPartnerMeta(key: string): Partner | null {
  if (!(key in PARTNERS)) return null;
  return PARTNERS[key as PartnerKey];
}
