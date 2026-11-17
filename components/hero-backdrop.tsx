"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero backdrop cycle: the flat green, then a portrait under a dark overlay,
 * then green again, then the next portrait. `null` is a green beat.
 */
type Slide = {
  src: string;
  alt: string;
  position: string;
  /** "light" photos get a heavier scrim so the cream type still reads */
  tone?: "dark" | "light";
};

const slides: (Slide | null)[] = [
  null,
  {
    src: "/images/connect-leader.jpg",
    alt: "Dr. Michael Aladejana in profile",
    position: "object-[center_28%]",
  },
  null,
  {
    src: "/images/metcon.jpg",
    alt: "Dr. Michael Aladejana speaking at a conference",
    position: "object-[center_30%]",
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
    tone: "light",
  },
  null,
  {
    src: "/images/couple.jpg",
    alt: "Dr. Michael and Christabel Aladejana",
    position: "object-[center_18%]",
    tone: "light",
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
        const light = slide.tone === "light";
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
              className={`object-cover ${light ? "brightness-90" : "brightness-[1.12]"} ${slide.position} transition-transform duration-[9000ms] ease-out ${
                active ? "scale-110" : "scale-100"
              }`}
            />
            {/* centred scrim for type legibility — edges stay clear */}
            <div
              className="absolute inset-0"
              style={{
                background: light
                  ? "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(12,41,34,0.84) 0%, rgba(12,41,34,0.66) 45%, rgba(12,41,34,0.42) 100%)"
                  : "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(12,41,34,0.74) 0%, rgba(12,41,34,0.52) 45%, rgba(12,41,34,0.28) 100%)",
              }}
            />
            {/* slim vignette so the header and lower edge stay readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-forest-950/55 via-transparent to-forest-950/60" />
          </div>
        );
      })}
    </div>
  );
}
