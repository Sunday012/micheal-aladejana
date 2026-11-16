import Link from "next/link";
import { tourCities } from "@/lib/site";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

export default function Tour() {
  return (
    <section id="tour" className="bg-forest-900 py-24 text-cream-100 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionLabel index="04" tone="peach">
            The Gospel on the Road
          </SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <h2 className="display text-5xl sm:text-6xl lg:text-[5.2rem]">
              <Reveal as="span" delay={60} className="block">
                Grace
              </Reveal>
              <Reveal as="span" variant="left" delay={220} className="block italic text-peach-200">
                Amplified.
              </Reveal>
            </h2>
            <Reveal delay={360}>
              <p className="eyebrow mt-6 text-cream-100/60">Texas Tour / 2027</p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pt-6">
            <p className="max-w-md text-lg leading-[1.9] text-cream-100/75">
              One message. Cities across Texas. Encounter Christ and the life
              found in His grace.
            </p>
            <Link
              href="/connect?topic=The%20Texas%20Tour"
              className="mt-8 inline-flex items-center bg-cream-50 px-7 py-3.5 font-body text-sm font-semibold text-forest-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-peach-200 hover:shadow-[0_14px_30px_-14px_rgba(243,223,203,0.7)]"
            >
              Keep me informed
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 grid border-y border-cream-100/15 sm:grid-cols-2 lg:grid-cols-5">
          {tourCities.map((stop, i) => (
            <Reveal
              key={stop.city}
              delay={i * 110}
              className="group border-cream-100/15 px-0 py-8 transition-colors duration-500 hover:bg-cream-100/[0.04] sm:px-7 sm:[&:not(:last-child)]:border-r sm:first:pl-0 lg:py-10"
            >
              <h3 className="display text-3xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {stop.city}
              </h3>
              <p className="mt-3 text-sm text-cream-100/65">{stop.date}</p>
              <Link
                href={`/connect?topic=The%20Texas%20Tour&city=${encodeURIComponent(stop.city)}`}
                className="link-sweep mt-5 font-body text-sm text-peach-200"
              >
                Get updates
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-sm text-cream-100/60">
            Choose a city for updates and registration details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
