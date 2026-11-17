"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero backdrop cycle: the flat green, then a portrait under a dark overlay,
 * then green again, then the next portrait. `null` is a green beat.
 */
const slides: ({ src: string; alt: string; position: string } | null)[] = [
  null,
  {
    src: "/images/connect-leader.jpg",
    alt: "Dr. Michael Aladejana in profile",
    position: "object-[center_28%]",
  },
  null,
  {
    src: "/images/leader.jpg",
    alt: "Dr. Michael Aladejana ministering",
    position: "object-[center_18%]",
  },
  null,
  {
    src: "/images/pastor.jpg",
    alt: "Dr. Michael Aladejana",
    position: "object-[center_22%]",
  },
];

const HOLD_MS = 7000;

export default function HeroBackdrop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      HOLD_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-forest-900" aria-hidden="true">
      {slides.map((slide, i) => {
        if (!slide) return null;
        const active = i === index;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 1}
              sizes="100vw"
              className={`object-cover ${slide.position} transition-transform duration-[9000ms] ease-out ${
                active ? "scale-110" : "scale-100"
              }`}
            />
            {/* keeps the cream type readable over any photo */}
            <div className="absolute inset-0 bg-forest-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/80" />
          </div>
        );
      })}
    </div>
  );
}
