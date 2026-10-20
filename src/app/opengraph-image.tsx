import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "src/assets/portfolio/red-sharara-bride.jpg"), "base64");
const photoSrc = `data:image/jpeg;base64,${photo}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#3f0d17" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: 728,
            color: "#fbf7f2",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#d9bf8f", textTransform: "uppercase" }}>
            {site.location}
          </div>
          <div style={{ fontSize: 92, lineHeight: 1, marginTop: 28 }}>Makeup by Nida</div>
          <div style={{ fontSize: 34, marginTop: 28, color: "rgba(251,247,242,0.75)" }}>{site.tagline}</div>
          <div style={{ fontSize: 26, marginTop: 48, color: "#d9bf8f" }}>{`@${site.instagram.handle}`}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} width={472} height={630} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    size,
  );
}
