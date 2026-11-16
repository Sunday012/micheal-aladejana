"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** ms to wait after the element enters view */
  delay?: number;
  /** motion flavour */
  variant?: "up" | "fade" | "left" | "right" | "scale";
  as?: ElementType;
  className?: string;
  /** forwarded to the rendered element (e.g. onSubmit, role) */
  [prop: string]: unknown;
};

/**
 * Fades content in as it scrolls into view.
 *
 * Deliberately fails open: if the scroll listener never gets a chance to run,
 * a safety timer reveals everything, so content is never left invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    let frame = 0;
    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(safety);
    };

    const check = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const trigger = window.innerHeight * 0.92;
      if (rect.top < trigger && rect.bottom > 0) reveal();
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(check);
    };

    // Safety net: never leave content hidden if something goes wrong.
    const safety = window.setTimeout(reveal, 2600);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
