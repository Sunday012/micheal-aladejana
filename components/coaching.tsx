"use client";

import Link from "next/link";
import { useState } from "react";
import { coachingTracks } from "@/lib/site";
import { Arrow, SectionLabel } from "./ui";

export default function Coaching() {
  const [active, setActive] = useState(coachingTracks[0].id);
  const track = coachingTracks.find((t) => t.id === active) ?? coachingTracks[0];

  return (
    <section id="coaching" className="bg-sage-100 py-24 md:py-32">
      <div className="shell">
        <SectionLabel index="06">Pastoral Guidance &amp; Coaching</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <h2 className="display text-4xl text-forest-900 sm:text-5xl lg:text-[3.9rem]">
            Clarity for
            <br />
            your next chapter.
          </h2>
          <p className="max-w-sm text-lg leading-[1.9] text-ink-600 lg:pt-6">
            Biblical perspective for life, relationships, and leadership.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3" role="tablist">
          {coachingTracks.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-3 border px-5 py-3.5 font-body text-sm font-medium transition-colors ${
                  isActive
                    ? "border-forest-900 bg-forest-900 text-cream-100"
                    : "border-forest-900/20 text-forest-900 hover:border-forest-900/50"
                }`}
              >
                {t.tab} <Arrow className="opacity-70" />
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
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
              href={`/connect?topic=Pastoral%20guidance%20or%20coaching&track=${encodeURIComponent(track.tab)}`}
              className="inline-flex items-center gap-2 bg-rust-600 px-7 py-3.5 font-body text-sm font-semibold text-cream-50 transition-colors hover:bg-rust-500"
            >
              Request a conversation <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-forest-900/15 pt-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="display text-3xl text-forest-900">
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
              className="inline-flex items-center gap-2 border border-forest-900/25 px-7 py-3.5 font-body text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream-100 lg:justify-self-end"
            >
              Invite Michael to speak <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
