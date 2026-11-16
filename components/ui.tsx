import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`inline-block h-[0.7em] w-[0.7em] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
    </svg>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "solid" | "outline" | "ghost";
  arrow?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "solid",
  arrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-colors duration-200";
  const variants = {
    solid: "bg-rust-600 text-cream-50 hover:bg-rust-500",
    outline:
      "border border-current text-current hover:bg-current/10",
    ghost: "text-current underline underline-offset-[6px] decoration-1 hover:decoration-2 px-0 py-0",
  };
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
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

export function Monogram({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const box =
    tone === "dark"
      ? "border-forest-900 text-forest-900"
      : "border-cream-100/60 text-cream-100";
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center border ${box} font-display text-2xl leading-none`}
      aria-hidden="true"
    >
      M
    </span>
  );
}
