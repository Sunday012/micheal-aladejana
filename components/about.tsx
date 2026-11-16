import Image from "next/image";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

export default function About() {
  return (
    <section id="about" className="bg-cream-100 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left" className="group relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream-200">
            <Image
              src="/images/couple.jpg"
              alt="Michael and Christabel Aladejana"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="relative -mt-20 ml-0 w-[86%] bg-rust-600 px-7 py-6 text-cream-50 transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:w-[70%]">
            <p className="font-display text-xl leading-snug">
              A shared life. A shared calling.
            </p>
            <p className="mt-1 text-sm text-cream-50/85">
              Michael &amp; Christabel Aladejana
            </p>
          </div>
        </Reveal>

        <div className="lg:pt-10">
          <Reveal>
            <SectionLabel index="03">Meet Michael</SectionLabel>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="display mt-6 text-4xl text-forest-900 sm:text-5xl lg:text-[3.5rem]">
              Perspective for life.
              <br />
              Purpose for what&apos;s next.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6 text-[1.05rem] leading-[1.95] text-ink-600">
            {[
              "Dr. Michael Aladejana is a pastor, teacher, mentor, and medical doctor with a heart for helping people grow. His work connects faith with everyday questions about identity, relationships, leadership, and purpose.",
              "Whether you are confident in your faith, exploring what you believe, or simply looking for direction, there is room for you here. Through teaching and thoughtful conversations, Michael encourages people to understand themselves, make intentional choices, and build meaningful lives.",
              "Michael is married to Christabel Aladejana. Together, they share a commitment to helping people and building community.",
            ].map((para, i) => (
              <Reveal as="p" key={i} delay={140 + i * 110}>
                {para}
              </Reveal>
            ))}
          </div>

          <Reveal delay={460}>
            <a
              href="/connect"
              className="link-sweep mt-9 font-body text-sm font-semibold text-forest-900"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
