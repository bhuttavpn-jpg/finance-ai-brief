// Server-only affiliate partner registry.
// Real tracked URLs live in env vars and never leak to the client.
// The /go/[partner] route is the single redirect surface.
//
// Partners without a configured env var fall back to `defaultUrl` (homepage).
// Once a real tracked URL is set on Vercel, the env var takes precedence
// automatically — no code change needed.

export type PartnerKey =
  | "marcus"
  | "ally"
  | "sofi-money"
  | "sofi-invest"
  | "sofi-loans"
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
  | "credit-karma"
  | "capital-one-venture"
  | "chase-sapphire-reserve"
  | "capital-one-savor"
  | "healthequity"
  | "lightstream"
  | "geico"
  | "progressive"
  | "better-mortgage"
  | "rocket-mortgage"
  | "monarch"
  | "copilot";

interface Partner {
  /** Display name shown to users. */
  name: string;
  /** Plain-English category (used in disclosures). */
  category: string;
  /** Env var name that holds the real tracked affiliate URL. */
  envVar: string;
  /** Homepage URL — used when env var is not configured. */
  defaultUrl: string;
}

export const PARTNERS: Record<PartnerKey, Partner> = {
  marcus: { name: "Marcus by Goldman Sachs", category: "High-yield savings", envVar: "AFFILIATE_MARCUS", defaultUrl: "https://www.marcus.com/" },
  ally: { name: "Ally Bank", category: "High-yield savings", envVar: "AFFILIATE_ALLY", defaultUrl: "https://www.ally.com/" },
  "sofi-money": { name: "SoFi Money", category: "High-yield savings", envVar: "AFFILIATE_SOFI_MONEY", defaultUrl: "https://www.sofi.com/money-market-account/" },
  "sofi-invest": { name: "SoFi Invest", category: "Brokerage", envVar: "AFFILIATE_SOFI_INVEST", defaultUrl: "https://www.sofi.com/invest/" },
  "sofi-loans": { name: "SoFi Personal Loans", category: "Personal loan", envVar: "AFFILIATE_SOFI_LOANS", defaultUrl: "https://www.sofi.com/personal-loans/" },
  cit: { name: "CIT Bank", category: "High-yield savings", envVar: "AFFILIATE_CIT", defaultUrl: "https://www.citbank.com/" },
  fidelity: { name: "Fidelity", category: "Brokerage", envVar: "AFFILIATE_FIDELITY", defaultUrl: "https://www.fidelity.com/" },
  schwab: { name: "Charles Schwab", category: "Brokerage", envVar: "AFFILIATE_SCHWAB", defaultUrl: "https://www.schwab.com/" },
  vanguard: { name: "Vanguard", category: "Brokerage", envVar: "AFFILIATE_VANGUARD", defaultUrl: "https://www.vanguard.com/" },
  robinhood: { name: "Robinhood", category: "Brokerage", envVar: "AFFILIATE_ROBINHOOD", defaultUrl: "https://www.robinhood.com/" },
  webull: { name: "Webull", category: "Brokerage", envVar: "AFFILIATE_WEBULL", defaultUrl: "https://app.webull.com/" },
  m1: { name: "M1 Finance", category: "Brokerage", envVar: "AFFILIATE_M1", defaultUrl: "https://www.m1finance.com/" },
  betterment: { name: "Betterment", category: "Robo-advisor", envVar: "AFFILIATE_BETTERMENT", defaultUrl: "https://www.betterment.com/" },
  wealthfront: { name: "Wealthfront", category: "Robo-advisor", envVar: "AFFILIATE_WEALTHFRONT", defaultUrl: "https://www.wealthfront.com/" },
  turbotax: { name: "TurboTax", category: "Tax software", envVar: "AFFILIATE_TURBOTAX", defaultUrl: "https://www.turbotax.intuit.com/" },
  taxact: { name: "TaxAct", category: "Tax software", envVar: "AFFILIATE_TAXACT", defaultUrl: "https://www.taxact.com/" },
  freetaxusa: { name: "FreeTaxUSA", category: "Tax software", envVar: "AFFILIATE_FREETAXUSA", defaultUrl: "https://www.freetaxusa.com/" },
  bestow: { name: "Bestow", category: "Term life insurance", envVar: "AFFILIATE_BESTOW", defaultUrl: "https://www.bestow.com/" },
  ethos: { name: "Ethos", category: "Term life insurance", envVar: "AFFILIATE_ETHOS", defaultUrl: "https://www.ethoslife.com/" },
  haven: { name: "Haven Life", category: "Term life insurance", envVar: "AFFILIATE_HAVEN", defaultUrl: "https://www.havenlife.com/" },
  ladder: { name: "Ladder", category: "Term life insurance", envVar: "AFFILIATE_LADDER", defaultUrl: "https://www.ladderlife.com/" },
  policygenius: { name: "Policygenius", category: "Insurance marketplace", envVar: "AFFILIATE_POLICYGENIUS", defaultUrl: "https://www.policygenius.com/" },
  csp: { name: "Chase Sapphire Preferred", category: "Travel credit card", envVar: "AFFILIATE_CHASE_SAPPHIRE_PREFERRED", defaultUrl: "https://www.creditcards.com/credit-cards/chase-sapphire-preferred/" },
  "amex-gold": { name: "Amex Gold Card", category: "Travel credit card", envVar: "AFFILIATE_AMEX_GOLD", defaultUrl: "https://www.americanexpress.com/" },
  "citi-double-cash": { name: "Citi Double Cash", category: "Cashback credit card", envVar: "AFFILIATE_CITI_DOUBLE_CASH", defaultUrl: "https://www.citi.com/credit-cards/credit-card-details/citi-double-cash-card.html" },
  lively: { name: "Lively HSA", category: "HSA provider", envVar: "AFFILIATE_LIVELY", defaultUrl: "https://www.livelyhq.com/" },
  "fidelity-hsa": { name: "Fidelity HSA", category: "HSA provider", envVar: "AFFILIATE_FIDELITY_HSA", defaultUrl: "https://www.fidelity.com/go/hsa" },
  ynab: { name: "YNAB", category: "Budgeting app", envVar: "AFFILIATE_YNAB", defaultUrl: "https://www.youneedabudget.com/" },
  wise: { name: "Wise", category: "Multi-currency account", envVar: "AFFILIATE_WISE", defaultUrl: "https://wise.com/" },
  "capital-one": { name: "Capital One Platinum Secured", category: "Secured credit card", envVar: "AFFILIATE_CAPITAL_ONE", defaultUrl: "https://www.capitalone.com/" },
  "discover-it": { name: "Discover it Secured", category: "Secured credit card", envVar: "AFFILIATE_DISCOVER_IT", defaultUrl: "https://www.discover.com/" },
  "credit-karma": { name: "Credit Karma", category: "Free credit monitoring", envVar: "AFFILIATE_CREDIT_KARMA", defaultUrl: "https://www.creditkarma.com/" },
  "capital-one-venture": { name: "Capital One Venture Rewards", category: "Travel credit card", envVar: "AFFILIATE_CAPITAL_ONE_VENTURE", defaultUrl: "https://www.capitalone.com/credit-cards/venture/" },
  "chase-sapphire-reserve": { name: "Chase Sapphire Reserve", category: "Travel credit card", envVar: "AFFILIATE_CHASE_SAPPHIRE_RESERVE", defaultUrl: "https://www.chase.com/personal/credit-cards/sapphire/reserve" },
  "capital-one-savor": { name: "Capital One Savor", category: "Cashback credit card", envVar: "AFFILIATE_CAPITAL_ONE_SAVOR", defaultUrl: "https://www.capitalone.com/credit-cards/savor-cash/" },
  healthequity: { name: "HealthEquity", category: "HSA provider", envVar: "AFFILIATE_HEALTHEQUITY", defaultUrl: "https://www.healthequity.com/" },
  lightstream: { name: "LightStream", category: "Personal loan", envVar: "AFFILIATE_LIGHTSTREAM", defaultUrl: "https://www.lightstream.com/" },
  geico: { name: "GEICO", category: "Auto insurance", envVar: "AFFILIATE_GEICO", defaultUrl: "https://www.geico.com/" },
  progressive: { name: "Progressive", category: "Auto insurance", envVar: "AFFILIATE_PROGRESSIVE", defaultUrl: "https://www.progressive.com/" },
  "better-mortgage": { name: "Better Mortgage", category: "Mortgage lender", envVar: "AFFILIATE_BETTER_MORTGAGE", defaultUrl: "https://better.com/" },
  "rocket-mortgage": { name: "Rocket Mortgage", category: "Mortgage lender", envVar: "AFFILIATE_ROCKET_MORTGAGE", defaultUrl: "https://www.rocketmortgage.com/" },
  monarch: { name: "Monarch Money", category: "Budgeting app", envVar: "AFFILIATE_MONARCH", defaultUrl: "https://www.monarchmoney.com/" },
  copilot: { name: "Copilot Money", category: "Budgeting app", envVar: "AFFILIATE_COPILOT", defaultUrl: "https://copilot.money/" },
};

/** Resolve a partner key to its current tracked URL, falling back to the partner's homepage. */
export function getPartnerUrl(key: string): string | null {
  if (!(key in PARTNERS)) return null;
  const partner = PARTNERS[key as PartnerKey];
  const url = process.env[partner.envVar];
  if (url && url.length > 0) return url;
  return partner.defaultUrl;
}

export function getPartnerMeta(key: string): Partner | null {
  if (!(key in PARTNERS)) return null;
  return PARTNERS[key as PartnerKey];
}
