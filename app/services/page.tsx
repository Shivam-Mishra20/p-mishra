import type { Metadata } from "next";
import { getAllServices } from "@/data/services";
import { ServiceCard } from "@/components/service-card";
import { Trans } from "@/components/translator-provider";

export const metadata: Metadata = {
  title: "Pooja & Ritual Services | Pandit Ramnaryan Mishra",
  description:
    "Explore Hindu rituals and poojas including Griha Pravesh, Satyanarayan Katha, Vivah Pooja, Navgrah Shanti, Shradh, Mundan, Annaprashan, and more.",
};

export default function ServicesPage() {
  const services = getAllServices();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold md:text-4xl">
          <Trans>All Services</Trans>
        </h1>
        <p className="text-muted-foreground">
          <Trans>
            Each pooja is performed with devotion and authentic vidhi.
          </Trans>
        </p>
      </header>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((p) => (
          <ServiceCard key={p.slug} pooja={p} />
        ))}
      </div>
    </main>
  );
}
