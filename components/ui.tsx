import Link from "next/link";
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

export function Monogram({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const box =
    tone === "dark"
      ? "border-forest-900 text-forest-900"
      : "border-cream-100/60 text-cream-100";
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center border ${box} font-display text-2xl leading-none transition-transform duration-500 ease-out group-hover/logo:rotate-[-4deg] group-hover/logo:scale-105`}
      aria-hidden="true"
    >
      M
    </span>
  );
}
