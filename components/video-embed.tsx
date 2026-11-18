"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Click-to-load YouTube facade: shows the poster frame until the visitor
 * asks for the video, so the page never loads YouTube's player (or its
 * cookies) on arrival.
 */
export default function VideoEmbed() {
  const [playing, setPlaying] = useState(false);
  const { id, title } = site.featuredVideo;

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-forest-950">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-forest-950"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube poster frame */}
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-95"
      />
      <span className="absolute inset-0 bg-forest-950/35 transition-colors duration-700 group-hover:bg-forest-950/20" />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-cream-100">
        <span className="pulse-ring relative flex h-20 w-20 items-center justify-center rounded-full border border-cream-100/70 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:bg-cream-100/15">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="eyebrow">Play featured teaching</span>
      </span>
    </button>
  );
}
