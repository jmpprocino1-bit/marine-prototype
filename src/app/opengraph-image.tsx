import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "East Coast Offshore Performance Marine — Ocean City, MD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "#0ea5e9",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#0ea5e9",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 500,
              display: "flex",
            }}
          >
            25+ Years of Marine Excellence
          </div>

          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#e8e8ed",
              textAlign: "center",
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            East Coast Offshore
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: "#6b7280",
              textAlign: "center",
              display: "flex",
            }}
          >
            Performance Marine Services
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "32px",
              color: "#6b7280",
              fontSize: "18px",
            }}
          >
            <span style={{ display: "flex" }}>Custom Painting</span>
            <span style={{ color: "#1e1e2a", display: "flex" }}>|</span>
            <span style={{ display: "flex" }}>Engine Rebuilds</span>
            <span style={{ color: "#1e1e2a", display: "flex" }}>|</span>
            <span style={{ display: "flex" }}>Fiberglass Repair</span>
            <span style={{ color: "#1e1e2a", display: "flex" }}>|</span>
            <span style={{ display: "flex" }}>Custom Graphics</span>
          </div>

          <div
            style={{
              marginTop: "16px",
              fontSize: "20px",
              color: "#0ea5e9",
              display: "flex",
            }}
          >
            Ocean City, MD
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
