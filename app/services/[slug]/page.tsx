import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Trans } from "@/components/translator-provider";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.seo?.title ?? `${service.name} | Pandit Ramnaryan Mishra`,
    description:
      service.seo?.description ??
      `${service.name} performed with authentic vidhi and devotion.`,
    keywords: service.seo?.keywords,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <nav className="mb-4 text-sm">
        <a
          href="/services"
          className="text-amber-700 underline underline-offset-4"
        >
          <Trans>← All Services</Trans>
        </a>
      </nav>
      <header className="space-y-4">
        <h1 className="text-pretty text-3xl font-semibold md:text-4xl">
          <Trans>{service.name}</Trans>
        </h1>
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.imageAlt}
          className="h-auto w-full rounded-xl border object-cover"
        />
        <p className="text-muted-foreground">
          <Trans>{service.shortDescription}</Trans>
        </p>
      </header>

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">
            <Trans>Pooja Vidhan (Steps)</Trans>
          </h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            {service.vidhan.map((step, i) => (
              <li key={i}>
                <Trans>{step}</Trans>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            <Trans>Requirements (Samagri)</Trans>
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {service.samagri.map((item, i) => (
              <li key={i}>
                <Trans>{item}</Trans>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            <Trans>Importance & Benefits</Trans>
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {service.benefits.map((b, i) => (
              <li key={i}>
                <Trans>{b}</Trans>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            <a
              href={`/api/pooja-pdf?slug=${service.slug}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Trans>Download Pooja PDF</Trans>
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/contact">
              <Trans>Book this Pooja</Trans>
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
