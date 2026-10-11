import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#00112d", padding: "16px" }}>
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #efb020", borderRadius: "12px", color: "#f6d47c", fontFamily: "serif", fontSize: "86px", letterSpacing: "-10px", paddingRight: "10px" }}>RR</div>
    </div>,
    size,
  );
}
