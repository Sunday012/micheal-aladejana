import { numbers } from "@/lib/site";
import Reveal from "./reveal";
import Wave from "./wave";
import { SectionLabel } from "./ui";

export default function Numbers() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-cream-100">
      {/* the section above spilling in */}
      <Wave position="top" fill="fill-sage-100" />
      {/* …and the section below */}
      <Wave position="bottom" fill="fill-cream-100" />

      <div
        className="drift pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "url(/logo/ma-pattern.svg)", backgroundSize: "260px" }}
        aria-hidden="true"
      />

      <div className="shell relative pb-32 pt-32 sm:pb-40 sm:pt-40 lg:pb-48 lg:pt-48">
        <Reveal>
          <SectionLabel tone="peach">{numbers.kicker}</SectionLabel>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display mt-6 max-w-xl text-3xl sm:text-4xl lg:text-[3.1rem]">
            {numbers.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-y-12 border-t border-cream-100/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 110} className="group">
              <p className="display text-5xl text-peach-200 transition-transform duration-500 ease-out group-hover:-translate-y-1 lg:text-6xl">
                {stat.value}
              </p>
              <p className="eyebrow mt-4 text-cream-100/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-16 max-w-2xl border-l-2 border-rust-500 pl-6 text-lg leading-[1.9] text-cream-100/80">
            {numbers.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
