"use client";

import Link from "next/link";
import { useState } from "react";
import { coachingTracks, site } from "@/lib/site";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

export default function Coaching() {
  const [active, setActive] = useState(coachingTracks[0].id);
  const track = coachingTracks.find((t) => t.id === active) ?? coachingTracks[0];

  return (
    <section id="coaching" className="bg-sage-100 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionLabel index="06">Pastoral Guidance &amp; Coaching</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="display text-3xl text-forest-900 sm:text-4xl lg:text-[3.1rem]">
              Clarity for
              <br />
              your next chapter.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-sm text-lg leading-[1.9] text-ink-600 lg:pt-6">
              Biblical perspective for life, relationships, and leadership.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 flex flex-wrap gap-3" as="div">
          <div className="flex flex-wrap gap-3" role="tablist">
          {coachingTracks.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-3 border px-5 py-3.5 font-body text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                  isActive
                    ? "border-forest-900 bg-forest-900 text-cream-100"
                    : "border-forest-900/20 text-forest-900 hover:border-forest-900/50"
                }`}
              >
                {t.tab}
              </button>
            );
          })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div key={track.id} className="panel-swap">
            <h3 className="display text-3xl text-forest-900">{track.title}</h3>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.9] text-ink-600">
              {track.body}
            </p>
            <p className="mt-7 max-w-2xl text-sm leading-[1.8] text-ink-600/80">
              Sessions are pastoral guidance and coaching, not psychotherapy or
              clinical treatment. Format, availability, and any fees are
              confirmed before booking.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href={site.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-rust-600 px-7 py-3.5 font-body text-sm font-semibold text-cream-50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rust-500 hover:shadow-[0_14px_30px_-14px_rgba(168,85,44,0.85)]"
            >
              Book a consultation
            </Link>
          </div>
        </div>

        <Reveal className="mt-16 border-t border-forest-900/15 pt-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="display text-2xl text-forest-900 sm:text-[1.75rem]">
                Bring the conversation to your community.
              </h3>
              <p className="mt-4 max-w-xl text-[1.05rem] leading-[1.9] text-ink-600">
                Invite Michael to teach at a church gathering, conference, or
                leadership event. Share your event&apos;s vision, location, and
                proposed date.
              </p>
            </div>
            <Link
              href="/connect?topic=Speaking%20invitation"
              className="inline-flex items-center border border-forest-900/25 px-7 py-3.5 font-body text-sm font-semibold text-forest-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-forest-900 hover:text-cream-100 lg:justify-self-end"
            >
              Invite Michael to speak
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
