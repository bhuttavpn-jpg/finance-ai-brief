import { getPartnerMeta, type PartnerKey } from "@/lib/affiliates";

interface Props {
  partner: PartnerKey;
  source: string;            // article or tool slug — for attribution
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

/** Renders an affiliate CTA that routes through /go/[partner].
 *  The real tracked URL stays server-side. */
export function AffiliateButton({ partner, source, children, variant = "primary", className = "" }: Props) {
  const meta = getPartnerMeta(partner);
  if (!meta) return null;
  const href = `/go/${partner}?s=${encodeURIComponent(source)}`;
  return (
    <a
      href={href}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      rel="sponsored noopener"
      target="_blank"
      data-partner={partner}
      data-source={source}
    >
      {children}
    </a>
  );
}
