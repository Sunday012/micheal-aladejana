"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./ui";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream-100/95 backdrop-blur transition-[border-color,box-shadow,background-color] duration-500 ${
        scrolled
          ? "border-ink-900/10 shadow-[0_10px_30px_-24px_rgba(22,33,29,0.9)]"
          : "border-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between gap-6 transition-[height] duration-500 ease-out ${
          scrolled ? "h-[4.75rem]" : "h-24"
        }`}
      >
        <Link
          href="/"
          className="group/logo flex items-center"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-sweep font-body text-sm text-forest-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="inline-flex items-center bg-rust-600 px-6 py-3 font-body text-sm font-semibold text-cream-50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rust-500 hover:shadow-[0_12px_26px_-14px_rgba(168,85,44,0.9)]"
          >
            Let&apos;s connect
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
        <div className="panel-swap border-t border-ink-900/10 bg-cream-100 lg:hidden">
          <nav className="shell flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-900/10 py-4 font-display text-xl text-forest-900 transition-[padding] duration-300 hover:pl-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/connect"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-rust-600 px-6 py-4 font-body text-sm font-semibold text-cream-50 transition-colors hover:bg-rust-500"
            >
              Let&apos;s connect
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
