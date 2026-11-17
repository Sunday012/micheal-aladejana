import Link from "next/link";
import { site } from "@/lib/site";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "solid" | "outline" | "ghost";
  children: ReactNode;
};

export function Button({
  variant = "solid",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "group/btn relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold transition-[transform,background-color,color,box-shadow] duration-300 ease-out will-change-transform";
  const variants = {
    solid:
      "bg-rust-600 text-cream-50 hover:bg-rust-500 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(168,85,44,0.85)] active:translate-y-0",
    outline:
      "border border-current text-current hover:bg-current/10 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "link-sweep px-0 py-0 text-current",
  };
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function SectionLabel({
  index,
  children,
  tone = "rust",
}: {
  index?: string;
  children: ReactNode;
  tone?: "rust" | "peach";
}) {
  const color = tone === "rust" ? "text-rust-600" : "text-peach-200";
  return (
    <p className={`eyebrow ${color}`}>
      {index ? <span className="opacity-70">{index} / </span> : null}
      {children}
    </p>
  );
}

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const nameColor = tone === "dark" ? "text-forest-900" : "text-cream-100";
  const roleColor = tone === "dark" ? "text-rust-600" : "text-peach-200";

  return (
    <span className="block leading-tight">
      <span
        className={`block font-display text-[1.02rem] font-bold uppercase tracking-[0.02em] transition-opacity duration-300 group-hover/logo:opacity-80 sm:text-[1.12rem] ${nameColor}`}
      >
        {site.wordmark.name}
      </span>
      <span
        className={`mt-1 block font-body text-[0.58rem] font-semibold uppercase tracking-[0.28em] sm:text-[0.62rem] ${roleColor}`}
      >
        {site.wordmark.roles.join(" · ")}
      </span>
    </span>
  );
}
