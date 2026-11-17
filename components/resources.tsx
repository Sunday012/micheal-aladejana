import Reveal from "./reveal";
import { Button, SectionLabel } from "./ui";

export default function Resources() {
  return (
    <section id="resources" className="bg-cream-100 py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal
          variant="scale"
          className="flex items-center justify-center bg-cream-200 p-6 sm:p-16"
        >
          {/* stand-in for the real cover art — deep red field, gold title */}
          <div className="float-slow relative w-full max-w-[220px] sm:max-w-[280px] bg-[#7a1420] px-7 py-10 text-cream-100 shadow-[18px_18px_0_rgba(18,58,51,0.12)]">
            <span
              className="absolute inset-y-0 left-0 w-2 bg-[#4e0c14]"
              aria-hidden="true"
            />
            <p className="text-center font-body text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-cream-100/85">
              Dr. Vessel Michael Aladejana
            </p>
            <span className="mx-auto mt-3 block h-px w-16 bg-[#e0a73c]" aria-hidden="true" />

            <p className="display mt-8 text-center text-[1.5rem] uppercase leading-none">
              Authorized
            </p>
            <p className="my-1 text-center font-body text-[0.6rem] uppercase tracking-[0.3em] text-cream-100/80">
              to
            </p>
            <p className="display text-center text-[2.6rem] uppercase leading-none text-[#e0a73c]">
              Pray
            </p>

            <p className="mt-10 text-center font-body text-[0.5rem] uppercase leading-[1.8] tracking-[0.14em] text-cream-100/70">
              Power to pray · Authority to declare
              <br />
              Transformation to live
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel index="05">Books &amp; Resources</SectionLabel>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="display mt-6 text-3xl text-forest-900 sm:text-4xl lg:text-[2.9rem]">
              Keep growing
              <br />
              beyond the message.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-lg text-[1.05rem] leading-[1.95] text-ink-600">
              Explore <em>Authorized to Pray</em> — power to pray, authority to
              declare, transformation to live — and connect with the ministry about book availability and resources
              for your walk with Christ.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Button href="/connect?topic=Books%20%26%20resources">
                Ask about the book
              </Button>
              <a
                href="/#teachings"
                className="link-sweep font-body text-sm font-semibold text-forest-900"
              >
                Explore teaching
              </a>
            </div>

            <p className="mt-7 text-sm text-ink-600">
              Ask our team about current formats, pricing, and ordering options.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
