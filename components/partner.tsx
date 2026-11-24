import { site } from "@/lib/site";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

export default function Partner() {
  return (
    <section id="partner" className="relative isolate overflow-hidden bg-forest-900 py-24 text-cream-100 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "url(/logo/ma-pattern.svg)", backgroundSize: "120px" }}
        aria-hidden="true"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel index="07" tone="peach">
              Build with us
            </SectionLabel>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="display mt-6 text-4xl uppercase sm:text-5xl lg:text-[3.6rem]">
              <span className="block">Partner with</span>
              <span className="block normal-case italic text-peach-200">
                the vision.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:pt-6">
          <Reveal delay={140}>
            <p className="text-xl leading-[1.6] text-cream-100 sm:text-2xl">
              Help create space for discipleship, teaching and outreach.
            </p>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.9] text-cream-100/70">
              Your generosity carries this work further than one voice can
              reach — resourcing teaching, the tour, and the people being built
              through it. Give today and help carry this vision into more
              lives.
            </p>

            <a
              href={site.giving}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center bg-cream-50 px-8 py-4 font-body text-sm font-semibold text-forest-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-peach-200 hover:shadow-[0_14px_30px_-14px_rgba(243,223,203,0.7)]"
            >
              Give now
            </a>

            <p className="mt-5 text-sm text-cream-100/55">
              Secure giving through Tithe.ly. One-time or recurring.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
