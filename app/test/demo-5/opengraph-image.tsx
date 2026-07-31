import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "月上柳梢头，人约黄昏后";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const imageData = await readFile(
    join(process.cwd(), "public/images/og-evening.jpg"),
    "base64",
  );
  const imageSource = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#18181b",
          color: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <img
          src={imageSource}
          alt=""
          width={1200}
          height={1200}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 54%",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.38) 56%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "76px 92px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              color: "#fef3c7",
              fontFamily: "sans-serif",
              fontSize: 20,
              letterSpacing: "0.22em",
            }}
          >
            <span
              style={{
                display: "flex",
                width: 66,
                height: 2,
                backgroundColor: "rgba(253, 230, 138, 0.82)",
              }}
            />
            晚风集 · EVENING NOTES
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 720,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "0.1em",
                textShadow: "0 2px 16px rgba(0,0,0,0.28)",
              }}
            >
              <span>月上柳梢头</span>
              <span>人约黄昏后</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginTop: 30,
                color: "#e4e4e7",
                fontFamily: "sans-serif",
                fontSize: 22,
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 34,
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              />
              宋 · 欧阳修《生查子·元夕》
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
