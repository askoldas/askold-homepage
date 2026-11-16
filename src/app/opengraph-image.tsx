import { ImageResponse } from "next/og";
export const alt = "Askold Makrikov — independent web design and development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: "#000", color: "#f2efe7", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "serif" }}><div style={{ fontSize: 36 }}>Askold Makrikov</div><div style={{ display: "flex", flexDirection: "column", fontSize: 94, lineHeight: 1.05 }}><span>Make your ideas visible.</span><span>Make them work.</span></div><div style={{ fontSize: 27, color: "#f0c332" }}>Independent web design &amp; development</div></div>, size);
}
