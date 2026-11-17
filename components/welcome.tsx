import Image from "next/image";
import { welcome } from "@/lib/site";
import Reveal from "./reveal";

function Pin() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

/** One run of the ticker: solid, outline, solid, outline… */
function MarqueeRun() {
  return (
    <div className="marquee__track" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className={`display shrink-0 whitespace-nowrap text-[2.6rem] uppercase leading-none text-rust-600 sm:text-[3.6rem] lg:text-[4.4rem] ${
            i % 2 ? "text-outline" : ""
          }`}
        >
          {welcome.marquee}
        </span>
      ))}
    </div>
  );
}

/**
 * Photo inside a tilted mask. The mask rotates; the picture counter-rotates
 * and scales up so it stays upright and still fills the shape.
 */
function MaskedPhoto({
  src,
  alt,
  shape = "pill",
  tilt = 20,
  className = "",
}: {
  src: string;
  alt: string;
  shape?: "pill" | "drop";
  tilt?: number;
  className?: string;
}) {
  return (
    <div
      className={`group/shape relative overflow-hidden bg-cream-200 ${
        shape === "pill" ? "mask-pill" : "mask-drop"
      } ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover/shape:scale-[1.52]"
        style={{ transform: `rotate(${-tilt}deg) scale(1.45)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 50vw, 420px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Welcome() {
  return (
    <section id="visit" className="overflow-hidden bg-cream-50 pb-24 pt-10 md:pb-32">
      {/* scrolling ticker */}
      <div className="marquee py-6">
        <MarqueeRun />
        <MarqueeRun />
      </div>
      <span className="sr-only">{welcome.marquee}</span>

      <div className="shell mt-10 grid items-center gap-16 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div>
          <Reveal>
            <h2 className="display text-[2.4rem] uppercase text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {welcome.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="eyebrow mt-10 text-ink-900">Time &amp; Location</p>
            <p className="mt-4 text-lg leading-[1.8] text-ink-600">
              {welcome.times}
              <br />
              {welcome.address}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href={welcome.appleMap}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rust-600 px-7 py-3.5 font-body text-sm font-semibold text-cream-50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rust-500 hover:shadow-[0_14px_30px_-14px_rgba(168,85,44,0.85)]"
              >
                <Pin />
                Apple Map
              </a>
              <a
                href={welcome.googleMap}
                target="_blank"
                rel="noreferrer"
                className="link-sweep link-sweep-on inline-flex items-center gap-2 font-body text-sm font-semibold text-ink-900"
              >
                <Pin />
                Google Map
              </a>
            </div>
          </Reveal>
        </div>

        {/* droplet collage */}
        <Reveal variant="scale" delay={120}>
          <div className="relative flex items-start justify-center gap-4 sm:gap-6 lg:justify-end">
            <MaskedPhoto
              src="/images/hug.jpg"
              alt="A warm welcome at a gathering"
              tilt={20}
              className="h-[300px] w-[120px] translate-y-6 sm:h-[460px] sm:w-[185px] lg:h-[520px] lg:w-[210px]"
            />
            <MaskedPhoto
              src="/images/hospitable.jpg"
              alt="Members sharing at a gathering"
              tilt={20}
              className="h-[300px] w-[120px] -translate-y-4 sm:h-[460px] sm:w-[185px] lg:h-[520px] lg:w-[210px]"
            />
            <MaskedPhoto
              src="/images/baby.jpg"
              alt="A family in the service"
              shape="drop"
              tilt={-25}
              className="h-[150px] w-[110px] translate-y-32 sm:h-[220px] sm:w-[160px] sm:translate-y-56 lg:h-[250px] lg:w-[180px] lg:translate-y-64"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
