"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Arrow, Monogram } from "./ui";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-cream-100/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Monogram />
          <span className="leading-tight">
            <span className="block font-body text-[0.78rem] font-bold uppercase tracking-[0.13em] text-forest-900">
              {site.name}
            </span>
            <span className="block font-body text-[0.6rem] font-medium uppercase tracking-[0.3em] text-ink-600">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-forest-900 transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 bg-rust-600 px-6 py-3 font-body text-sm font-semibold text-cream-50 transition-colors hover:bg-rust-500"
          >
            Let&apos;s connect <Arrow />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-forest-900 transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-forest-900 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-forest-900 transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink-900/10 bg-cream-100 lg:hidden">
          <nav className="shell flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-900/10 py-4 font-display text-xl text-forest-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/connect"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-rust-600 px-6 py-4 font-body text-sm font-semibold text-cream-50"
            >
              Let&apos;s connect <Arrow />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
