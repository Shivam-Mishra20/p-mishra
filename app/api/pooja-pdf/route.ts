import type { NextRequest } from "next/server"
import { getServiceBySlug } from "@/data/services"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug") || ""
  const service = getServiceBySlug(slug)
  if (!service) {
    return new Response("Not found", { status: 404 })
  }

  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595.28, 841.89]) // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  const margin = 40
  let x = margin
  let y = page.getHeight() - margin

  function drawText(text: string, size = 12, bold = false, color = rgb(0, 0, 0)) {
    const lines = wrapText(text, 515, size, bold ? fontBold : font)
    for (const line of lines) {
      if (y < margin + size) {
        // new page
        const p = pdfDoc.addPage([595.28, 841.89])
        y = p.getHeight() - margin
        x = margin
        ;(p as any)._font = font // keep ref
      }
      page.drawText(line, { x, y, size, font: bold ? fontBold : font, color })
      y -= size + 4
    }
  }

  function drawHeading(text: string) {
    y -= 10
    drawText(text, 18, true, rgb(0.85, 0.51, 0.02)) // saffron-like
    y -= 6
  }

  function wrapText(text: string, maxWidth: number, size: number, f: any) {
    const words = text.split(" ")
    const lines: string[] = []
    let current = ""
    for (const w of words) {
      const test = current ? current + " " + w : w
      const width = f.widthOfTextAtSize(test, size)
      if (width > maxWidth) {
        if (current) lines.push(current)
        current = w
      } else {
        current = test
      }
    }
    if (current) lines.push(current)
    return lines
  }

  drawHeading(service.name)
  drawText(service.shortDescription)

  drawHeading("Pooja Vidhan (Steps)")
  service.vidhan.forEach((step, i) => drawText(`${i + 1}. ${step}`))

  drawHeading("Requirements (Samagri)")
  service.samagri.forEach((s) => drawText(`• ${s}`))

  drawHeading("Importance & Benefits")
  service.benefits.forEach((b) => drawText(`• ${b}`))

  const bytes = await pdfDoc.save()
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${service.slug}.pdf"`,
      "Cache-Control": "no-store",
    },
  })
}
