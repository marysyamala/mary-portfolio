import { ImageResponse } from "next/og";

export const alt =
  "Mary Syamala — Data Engineer, Business Analyst & AI Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#080a0c",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(163,255,95,0.20), transparent 45%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 40, fontWeight: 800, letterSpacing: -2 }}>
          <span style={{ color: "#f5f5f3" }}>MS</span>
          <span style={{ color: "#a3ff5f" }}>.</span>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#a3ff5f",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 14,
                backgroundColor: "#a3ff5f",
                marginRight: 16,
              }}
            />
            DATA · ANALYTICS · AI
          </div>

          <div
            style={{
              display: "flex",
              color: "#f5f5f3",
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1,
              marginTop: 28,
            }}
          >
            Mary Syamala
          </div>

          <div
            style={{
              display: "flex",
              color: "#8b9298",
              fontSize: 34,
              marginTop: 26,
              maxWidth: 900,
            }}
          >
            I turn data into useful products.
          </div>
        </div>

        {/* Role line */}
        <div style={{ display: "flex", color: "#f5f5f3", fontSize: 27, fontWeight: 600 }}>
          Data Engineer&nbsp;
          <span style={{ color: "#a3ff5f" }}>·</span>&nbsp;Business Analyst&nbsp;
          <span style={{ color: "#a3ff5f" }}>·</span>&nbsp;AI Product Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
