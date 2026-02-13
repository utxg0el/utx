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
          background: "#0f131f",
          color: "#6be5ed",
          fontSize: 34,
          fontWeight: 700
        }}
      >
        UG
      </div>
    ),
    { ...size }
  );
}
