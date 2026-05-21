import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1F3A5F",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #2C4F7C 0%, transparent 45%)",
          color: "#FFFFFF",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFFFFF",
              color: "#1F3A5F",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {siteConfig.shortName}
          </div>
          <div style={{ marginLeft: 20, fontSize: 34, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#CBD5E1", maxWidth: 900, lineHeight: 1.35 }}>
            {siteConfig.description}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9FB3CC" }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
