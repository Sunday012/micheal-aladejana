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

/**
 * Photo inside a tilted mask. The mask rotates; the picture counter-rotates
 * and scales up so faces stay upright and still fill the shape.
 *
 * Tilting a tall shape widens its real footprint (height × sin(tilt)), which
 * is why the row below carries far wider gaps than the boxes suggest.
 */
function MaskedPhoto({
  src,
  alt,
  shape = "pill",
  tilt = 12,
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
      className={`group/shape relative shrink-0 overflow-hidden bg-cream-200 ${
        shape === "pill" ? "mask-pill" : "mask-drop"
      } ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover/shape:scale-[1.58]"
        style={{ transform: `rotate(${-tilt}deg) scale(1.5)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 45vw, 380px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Welcome() {
  return (
    <section id="visit" className="overflow-hidden bg-cream-50 py-24 md:py-32">
      <div className="shell grid items-center gap-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <h2 className="display text-[2rem] uppercase text-ink-900 sm:text-[2.7rem] lg:text-[3.05rem]">
              {welcome.heading.map((line) => (
                <span key={line} className="block whitespace-nowrap">
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

        {/* two tilted lozenges + a teardrop */}
        <Reveal variant="scale" delay={120}>
          <div className="relative flex items-start justify-center gap-3 sm:gap-5 lg:justify-end lg:gap-6">
            <MaskedPhoto
              src="/images/hug.jpg"
              alt="A warm welcome at a gathering"
              className="h-[260px] w-[100px] translate-y-6 sm:h-[400px] sm:w-[150px] lg:h-[480px] lg:w-[185px]"
            />
            <MaskedPhoto
              src="/images/hospitable.jpg"
              alt="Members sharing at a gathering"
              className="h-[260px] w-[100px] -translate-y-5 sm:h-[400px] sm:w-[150px] lg:h-[480px] lg:w-[185px]"
            />
            <MaskedPhoto
              src="/images/baby.jpg"
              alt="A family in the service"
              shape="drop"
              tilt={45}
              className="-ml-8 h-[96px] w-[96px] translate-y-36 sm:-ml-10 sm:h-[150px] sm:w-[150px] sm:translate-y-56 lg:-ml-14 lg:h-[180px] lg:w-[180px] lg:translate-y-[16rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
