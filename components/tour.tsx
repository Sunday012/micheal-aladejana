import Link from "next/link";
import { tourCities } from "@/lib/site";
import { Arrow, SectionLabel } from "./ui";

export default function Tour() {
  return (
    <section id="tour" className="bg-forest-900 py-24 text-cream-100 md:py-32">
      <div className="shell">
        <SectionLabel index="04" tone="peach">
          The Gospel on the Road
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <h2 className="display text-5xl sm:text-6xl lg:text-[5.2rem]">
              <span className="block">Grace</span>
              <span className="block italic text-peach-200">Amplified.</span>
            </h2>
            <p className="eyebrow mt-6 text-cream-100/60">Texas Tour / 2027</p>
          </div>

          <div className="lg:pt-6">
            <p className="max-w-md text-lg leading-[1.9] text-cream-100/75">
              One message. Cities across Texas. Encounter Christ and the life
              found in His grace.
            </p>
            <Link
              href="/connect?topic=The%20Texas%20Tour"
              className="mt-8 inline-flex items-center gap-2 bg-cream-50 px-7 py-3.5 font-body text-sm font-semibold text-forest-900 transition-colors hover:bg-peach-200"
            >
              Keep me informed <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid border-y border-cream-100/15 sm:grid-cols-2 lg:grid-cols-5">
          {tourCities.map((stop) => (
            <div
              key={stop.city}
              className="border-cream-100/15 px-0 py-8 sm:px-7 sm:[&:not(:last-child)]:border-r sm:first:pl-0 lg:py-10"
            >
              <h3 className="display text-3xl">{stop.city}</h3>
              <p className="mt-3 text-sm text-cream-100/65">{stop.date}</p>
              <Link
                href={`/connect?topic=The%20Texas%20Tour&city=${encodeURIComponent(stop.city)}`}
                className="mt-5 inline-flex items-center gap-2 font-body text-sm text-peach-200 underline decoration-1 underline-offset-[6px] hover:decoration-2"
              >
                Get updates <Arrow />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-cream-100/60">
          Choose a city for updates and registration details.
        </p>
      </div>
    </section>
  );
}
