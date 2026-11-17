import Reveal from "./reveal";
import { Button, SectionLabel } from "./ui";

export default function Resources() {
  return (
    <section id="resources" className="bg-cream-100 py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal
          variant="scale"
          className="flex items-center justify-center bg-cream-200 p-10 sm:p-16"
        >
          <div className="float-slow relative w-full max-w-[280px] bg-forest-900 px-8 py-12 text-cream-100 shadow-[18px_18px_0_rgba(18,58,51,0.12)]">
            <span
              className="absolute inset-y-0 left-0 w-1.5 bg-rust-600"
              aria-hidden="true"
            />
            <p className="eyebrow text-center text-cream-100/70">
              Michael Aladejana
            </p>
            <p className="display mt-16 text-center text-[1.6rem] leading-tight">
              Authorized to Pray
            </p>
            <p className="eyebrow mt-16 text-center text-cream-100/60">
              Books &amp; Spiritual Growth
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
              Explore <em>Authorized to Pray</em> by Michael Aladejana, and
              connect with the ministry about book availability and resources
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
