import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#1F3A5F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: "20px" }}>
          {siteConfig.shortName}
        </div>
        <div style={{ fontSize: 40, marginBottom: "30px", maxWidth: "800px" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 24, color: "#CBD5E1" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
