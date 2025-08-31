import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trans } from "@/components/translator-provider"
import type { Pooja } from "@/data/services"

export function ServiceCard({ pooja }: { pooja: Pooja }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">
          <Trans>{pooja.name}</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <img
          src={pooja.image || "/placeholder.svg"}
          alt={pooja.imageAlt}
          className="h-40 w-full rounded-lg border object-cover"
        />
        <p className="text-sm text-muted-foreground">
          <Trans>{pooja.shortDescription}</Trans>
        </p>
        <Link
          href={`/services/${pooja.slug}`}
          className="inline-flex text-sm font-medium text-amber-700 underline underline-offset-4 hover:text-amber-800"
        >
          <Trans>See details</Trans>
        </Link>
      </CardContent>
    </Card>
  )
}
