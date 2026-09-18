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
          justifyContent: "flex-end",
          background: "#F9F7F3",
          color: "#1C1A17",
          padding: 64
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: -1 }}>Utkarsh Goel</div>
        <div style={{ fontSize: 26, color: "#6B655C", marginTop: 10 }}>
          Master&apos;s student, NYU Courant
        </div>
        <div style={{ fontSize: 30, marginTop: 28, lineHeight: 1.4 }}>
          Deep learning models of RNA, in the Regev lab.
        </div>
      </div>
    ),
    { ...size }
  );
}
