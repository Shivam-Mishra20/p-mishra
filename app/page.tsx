import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Carousel } from "@/components/carousel";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { getAllServices } from "@/data/services";
import { Trans } from "@/components/translator-provider";
// Removed: import { SiteFooter } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pandit Ramnaryan Mishra | Hindu Pooja & Ritual Services",
  description:
    "Book trusted Hindu priest services by Pandit Ramnaryan Mishra: Griha Pravesh, Satyanarayan Katha, Vivah Pooja, Navgrah Shanti and more.",
  keywords: [
    "Pandit for Pooja",
    "Book Pandit",
    "Griha Pravesh",
    "Satyanarayan Katha",
    "Hindu rituals",
  ],
  openGraph: {
    title: "Pandit Ramnaryan Mishra",
    description:
      "Vedic Pooja & Ritual Services: authentic vidhi, devotion, and guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit Ramnaryan Mishra",
    description: "Hindu Pooja & Ritual Services for all auspicious occasions.",
  },
};

export default function HomePage() {
  const slides = [
    {
      src: "/hindu-pooja-ritual-ceremony.png",
      alt: "Auspicious Vedic pooja ceremony",
      caption: "Authentic Vedic Rituals",
    },
    {
      src: "/griha-pravesh-housewarming-pooja.png",
      alt: "Griha Pravesh housewarming pooja",
      caption: "Griha Pravesh & Vastu Shanti",
    },
    {
      src: "/satyanarayan-katha-pooja.png",
      alt: "Satyanarayan Katha with family",
      caption: "Satyanarayan Katha",
    },
  ];
  const services = getAllServices().slice(0, 6);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pandit Ramnaryan Mishra",
    description:
      "Hindu Pooja & Ritual Services: Griha Pravesh, Satyanarayan Katha, Vivah Pooja, Navgrah Shanti and more.",
    telephone: "+91 9999999999",
    areaServed: "India",
    url:
      typeof window !== "undefined"
        ? window.location.origin
        : "https://example.com",
    sameAs: ["https://facebook.com/", "https://instagram.com/"],
  };

  return (
    <main>
      <Hero />
      <div className="py-6">
        <Carousel slides={slides} />
      </div>
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <header className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              <Trans>Explore Popular Services</Trans>
            </h2>
            <p className="text-sm text-muted-foreground">
              <Trans>Browse commonly booked poojas and rituals.</Trans>
            </p>
          </div>
          <a
            href="/services"
            className="text-sm font-medium text-amber-700 underline underline-offset-4"
          >
            <Trans>View all</Trans>
          </a>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((p) => (
            <ServiceCard key={p.slug} pooja={p} />
          ))}
        </div>
      </section>
      <Testimonials />
      {/* Removed duplicate footer */}
      {/* <SiteFooter /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </main>
  );
}
