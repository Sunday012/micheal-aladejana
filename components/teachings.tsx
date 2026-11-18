import { site } from "@/lib/site";
import Reveal from "./reveal";
import VideoEmbed from "./video-embed";
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
            <h2 className="display text-3xl text-forest-900 sm:text-4xl lg:text-[3.1rem]">
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
          <VideoEmbed />
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="display text-2xl text-forest-900">
              {site.featuredVideo.title}
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

      </div>
    </section>
  );
}
