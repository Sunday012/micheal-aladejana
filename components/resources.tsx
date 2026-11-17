import Image from "next/image";
import Reveal from "./reveal";
import { Button, SectionLabel } from "./ui";

export default function Resources() {
  return (
    <section id="resources" className="bg-cream-100 py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="scale">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/authorized-to-pray.jpg"
              alt="Authorized to Pray by Dr. Vessel Michael Aladejana — power in prayer, authority in declaration"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-contain"
              priority={false}
            />
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
