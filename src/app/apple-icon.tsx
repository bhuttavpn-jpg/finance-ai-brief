import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F3A5F",
          borderRadius: 40,
          color: "#FFFFFF",
          fontSize: 86,
          fontWeight: 700,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
          letterSpacing: -2,
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    { ...size },
  );
}
