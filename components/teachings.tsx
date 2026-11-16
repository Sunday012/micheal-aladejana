import Image from "next/image";
import { site, teachings } from "@/lib/site";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

export default function Teachings() {
  return (
    <section id="teachings" className="bg-sage-100 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionLabel index="02">Biblical Teaching</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display text-4xl text-forest-900 sm:text-5xl lg:text-[3.9rem]">
              Truth to receive.
              <br />
              Faith to live.
            </h2>
          </Reveal>
          <Reveal delay={180} className="lg:pt-4">
            <p className="max-w-md text-lg leading-[1.9] text-ink-600">
              Make room for the Word beyond a Sunday. Watch the featured teaching
              and take your next step in understanding Scripture.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} className="mt-16 block">
          <a href={site.youtube} target="_blank" rel="noreferrer" className="group block">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-950">
              <Image
                src="/images/leader.jpg"
                alt="Michael Aladejana teaching"
                fill
                sizes="(max-width: 1240px) 100vw, 1160px"
                className="object-cover object-[center_22%] opacity-75 grayscale transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-forest-950/40 transition-colors duration-700 group-hover:bg-forest-950/25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-cream-100">
                <span className="pulse-ring relative flex h-20 w-20 items-center justify-center rounded-full border border-cream-100/70 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:bg-cream-100/15">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="eyebrow">Play featured teaching</span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-col gap-6 border-b border-ink-900/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="display text-2xl text-forest-900">
              A moment in the Word
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              Michael Aladejana · Featured video
            </p>
          </div>
          <div className="max-w-md">
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              className="link-sweep font-body text-sm font-semibold text-forest-900"
            >
              Watch on YouTube
            </a>
            <p className="mt-3 text-sm leading-[1.8] text-ink-600">
              Prefer the YouTube app? Open the video directly — playback,
              captions and the full teaching library live there.
            </p>
          </div>
        </Reveal>

        <ul className="mt-4">
          {teachings.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 90}
              className="group flex items-start gap-6 border-b border-ink-900/10 py-7 transition-[padding,background-color] duration-500 ease-out hover:bg-cream-50/60 hover:pl-3 md:items-center md:gap-10"
            >
              <span className="font-display text-xl text-ink-600/50 transition-colors duration-500 group-hover:text-rust-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="eyebrow text-rust-600">{item.series}</p>
                <h4 className="mt-2 font-body text-lg font-medium text-forest-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-ink-600">{item.meta}</p>
              </div>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${item.title}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-900/15 text-forest-900 transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-rust-600 group-hover:bg-rust-600 group-hover:text-cream-50"
              >
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
