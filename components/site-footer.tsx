import Link from "next/link";
import { site } from "@/lib/site";
import { Monogram } from "./ui";

const footerNav = [
  { label: "Discipleship", href: "/#discipleship" },
  { label: "Teachings", href: "/#teachings" },
  { label: "The Tour", href: "/#tour" },
  { label: "Contact", href: "/connect" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest-950 py-14 text-cream-100">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Monogram tone="light" />
            <span className="leading-tight">
              <span className="block font-body text-[0.78rem] font-bold uppercase tracking-[0.13em]">
                {site.name}
              </span>
              <span className="block font-body text-[0.6rem] font-medium uppercase tracking-[0.3em] text-cream-100/60">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm text-cream-100/85 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-cream-100/15 pt-6">
          <div className="flex flex-col gap-4 text-sm text-cream-100/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Michael Aladejana Ministries</p>
            <p className="flex flex-wrap items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-1 underline-offset-4 hover:text-cream-100"
              >
                Instagram
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-1 underline-offset-4 hover:text-cream-100"
              >
                YouTube
              </a>
              <span aria-hidden="true">/</span>
              <Link
                href="/privacy"
                className="underline decoration-1 underline-offset-4 hover:text-cream-100"
              >
                Privacy notice
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
