import { ImageResponse } from "next/og";

/**
 * Social preview card, generated as a real PNG at build time.
 *
 * The previous og:image was an SVG, which Facebook, X, LinkedIn, WhatsApp and
 * Slack all refuse to render — every shared link showed no image at all.
 * File-based metadata outranks the `metadata` export, so this overrides any
 * openGraph.images value set in layout.tsx.
 */
export const alt =
  "DYN Pallets — industrial wooden pallets, chemical CP-series pallets, plastic pallets, boxes and crates";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const AMBER = "#DFA05C";
const INK = "#0C0E0C";

function Mark({ scale = 1 }: { scale?: number }) {
  return (
    <svg width={64 * scale} height={64 * scale} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="g" x1="12" y1="9" x2="54" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2BF85" />
          <stop offset="0.52" stopColor="#D98643" />
          <stop offset="1" stopColor="#8B4B25" />
        </linearGradient>
      </defs>
      <path d="M13 8H35.5C47.93 8 58 18.07 58 30.5V33.5C58 45.93 47.93 56 35.5 56H13V8Z" stroke="url(#g)" strokeWidth="4" />
      <path d="M17 18H39L47 23H17V18Z" fill="url(#g)" />
      <path d="M17 29H43.5L48 32L43.5 35H17V29Z" fill="url(#g)" />
      <path d="M17 41H39L47 46H17V41Z" fill="url(#g)" />
      <path d="M22 17V47M39 18V24M39 40V46" stroke="#0B0C0B" strokeWidth="2.5" opacity="0.78" />
    </svg>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: INK,
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(223,160,92,0.22), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Mark scale={1.1} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F4F1EA", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
              DYN PALLETS
            </span>
            <span style={{ color: AMBER, fontSize: 15, letterSpacing: 4, fontWeight: 700 }}>
              INDUSTRIAL PACKAGING
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#F4F1EA",
              fontSize: 74,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            Pallets, crates and export
          </span>
          <span
            style={{
              color: AMBER,
              fontSize: 74,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            packaging, built to the load.
          </span>
          <span style={{ marginTop: 26, color: "#9DA098", fontSize: 25, lineHeight: 1.45 }}>
            Wooden · Chemical CP-series · Plastic · Boxes &amp; crates
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 26,
            borderTop: "1px solid rgba(244,241,234,0.16)",
          }}
        >
          <span style={{ color: "#7E827A", fontSize: 19, letterSpacing: 2, fontWeight: 700 }}>
            MUMBAI, INDIA · MADE TO ORDER
          </span>
          <span style={{ color: "#F4F1EA", fontSize: 19, letterSpacing: 2, fontWeight: 800 }}>
            DYNPALLETS.COM
          </span>
        </div>
      </div>
    ),
    size,
  );
}
