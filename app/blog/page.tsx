import type { Metadata } from "next"
import { Trans } from "@/components/translator-provider"

export const metadata: Metadata = {
  title: "Blog | Hindu Rituals & Festivals",
  description: "Insights on Hindu rituals, festivals, and spiritual practices. Articles coming soon.",
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <h1 className="text-3xl font-semibold md:text-4xl">
        <Trans>Blog</Trans>
      </h1>
      <p className="mt-2 text-muted-foreground">
        <Trans>Articles on rituals, festivals, and dharmic wisdom are coming soon.</Trans>
      </p>
      <div className="mt-6 rounded-lg border p-4">
        <p className="text-sm">
          <Trans>No posts yet. Check back later!</Trans>
        </p>
      </div>
    </main>
  )
}
