import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
          color: "#FFFFFF",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    { ...size }
  );
}
