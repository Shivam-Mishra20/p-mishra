import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { q, source = "en", target = "hi" } = await req.json()
    if (!q || typeof q !== "string") {
      return NextResponse.json({ error: "Missing text" }, { status: 400 })
    }

    const resp = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, source, target, format: "text" }),
      cache: "no-store",
    })

    if (!resp.ok) {
      // Fallback returns original text so UI remains usable
      return NextResponse.json({ translatedText: q }, { status: 200 })
    }

    const data = await resp.json()
    return NextResponse.json({ translatedText: data.translatedText ?? q })
  } catch {
    return NextResponse.json({ translatedText: "" }, { status: 200 })
  }
}
