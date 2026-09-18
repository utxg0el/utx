import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

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
          background: "#F9F7F3",
          color: "#1C1A17",
          fontSize: 30,
          fontWeight: 500,
          letterSpacing: -1
        }}
      >
        UG
      </div>
    ),
    { ...size }
  );
}
