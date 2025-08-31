"use client";

import * as React from "react";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

export function Carousel({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  function goTo(i: number) {
    setIndex(i);
  }

  if (!count) return null;

  return (
    <div className="relative mx-auto max-w-6xl px-4">
      <div
        className="relative aspect-[16/9] overflow-hidden rounded border"
        role="region"
        aria-roledescription="carousel"
        aria-label="Pooja and Ritual Highlights"
      >
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src || "/placeholder.svg"}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-amber-600" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      {slides[index]?.caption ? (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {slides[index].caption}
        </p>
      ) : null}
    </div>
  );
}
