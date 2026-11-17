import { discipleshipPillars, site } from "@/lib/site";
import Reveal from "./reveal";
import { Button, SectionLabel } from "./ui";

export default function Discipleship() {
  return (
    <section id="discipleship" className="bg-cream-100 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionLabel index="01">Discipleship</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display text-3xl text-forest-900 sm:text-4xl lg:text-[3.1rem]">
              A deeper walk.
              <br />
              A transformed life.
            </h2>
          </Reveal>

          <Reveal delay={180} className="lg:pt-4">
            <p className="max-w-md text-lg leading-[1.9] text-ink-600">
              Grow in Christ through Scripture, prayer, and community. An
              intentional journey of faith, lived together.
            </p>
            <Button
              href={site.discipleshipForm}
              target="_blank"
              rel="noreferrer"
              className="mt-9"
            >
              Register for Discipleship
            </Button>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border-t border-ink-900/10 sm:grid-cols-3">
          {discipleshipPillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 120}
              className="group pt-8 sm:pr-10"
            >
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-rust-600">
                {pillar.n}
              </span>
              <h3 className="display mt-4 text-2xl text-forest-900 transition-transform duration-500 ease-out group-hover:translate-x-1">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-[1.85] text-ink-600">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
