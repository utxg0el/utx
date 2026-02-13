import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f131f",
          color: "#f4f2eb",
          padding: "58px",
          fontFamily: "serif"
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 2, opacity: 0.8 }}>Utkarsh Goel</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Applied AI/ML Engineer</div>
          <div style={{ fontSize: 34, opacity: 0.85 }}>
            LLM Agents • Efficient AI • Robotics Perception • Theory
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
