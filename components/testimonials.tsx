"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  content: string;
  location?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    content:
      "Pandit ji performed our Griha Pravesh with complete vidhi. We felt positive energy at home. Highly recommended!",
    location: "Delhi",
  },
  {
    name: "Rohit & Ananya",
    content:
      "Our Satyanarayan Katha was beautifully conducted. Clear guidance and peaceful experience.",
    location: "Noida",
  },
  {
    name: "Kumar Family",
    content:
      "Navgrah Shanti brought visible changes. Pandit ji is punctual and very knowledgeable.",
    location: "Delhi",
  },
  {
    name: "Sneha Verma",
    content:
      "The Puja was done with so much devotion; our family felt deeply connected.",
    location: "Ghaziabad",
  },
  {
    name: "Mehta Family",
    content:
      "Marriage rituals were performed smoothly. Very professional and spiritual experience.",
    location: "East Delhi",
  },
];

export function Testimonials() {
  const carouselRef = React.useRef<any>(null);

  // Auto-slide on small screens
  React.useEffect(() => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    if (!isMobile || !carouselRef.current) return;

    const interval = setInterval(() => {
      carouselRef.current?.scrollNext();
    }, 3000); // slide every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        What Families Say
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-base sm:text-lg">
        Experiences from Delhi families who trusted our services
      </p>

      {/* Carousel */}
      <div className="relative mt-8 md:mt-12">
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="h-full rounded-2xl border bg-background p-6 shadow-md transition hover:shadow-lg">
                  <p className="text-sm sm:text-base italic leading-relaxed text-foreground">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-sm sm:text-base font-bold text-primary">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        {t.name}
                      </p>
                      {t.location && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {t.location}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows (hidden on phone) */}
          <div className="absolute inset-y-0 left-0 hidden sm:flex items-center -translate-x-10 sm:-translate-x-14">
            <CarouselPrevious className="relative left-2 sm:left-4" />
          </div>
          <div className="absolute inset-y-0 right-0 hidden sm:flex items-center translate-x-10 sm:translate-x-14">
            <CarouselNext className="relative right-2 sm:right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
