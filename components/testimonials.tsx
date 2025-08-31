"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
        What Families Say
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-lg">
        Experiences from Delhi families who trusted our services
      </p>

      <div className="relative mt-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <article className="h-full rounded-2xl border bg-background p-6 shadow-md hover:shadow-lg transition">
                  <p className="text-base italic leading-relaxed text-foreground">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    {/* Initials */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      {t.location && (
                        <p className="text-xs text-muted-foreground">
                          {t.location}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons with gap */}
          <div className="absolute inset-y-0 left-0 flex items-center -translate-x-16">
            <CarouselPrevious className="relative left-4" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center translate-x-16">
            <CarouselNext className="relative right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
