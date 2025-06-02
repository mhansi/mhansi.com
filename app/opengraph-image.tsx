import { ImageResponse } from "next/og"
import { getData } from "@/lib/data"

export const runtime = "edge"

export const alt = "Sanduni Senanayake - Software Engineer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const data = await getData()

  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #fecdd3, #fff1f2)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#be123c",
        }}
      >
        {data.fullName}
      </div>
      <div
        style={{
          fontSize: 36,
          marginBottom: 40,
          color: "#334155",
        }}
      >
        Software Engineer
      </div>
      <div
        style={{
          fontSize: 24,
          maxWidth: 800,
          textAlign: "center",
          color: "#64748b",
        }}
      >
        {data.bio}
      </div>
    </div>,
    {
      ...size,
    },
  )
}
