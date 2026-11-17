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
 * IntersectionObserver drives it, with a scroll/rect fallback for browsers
 * that lack it. There is deliberately no reveal-everything timer: that hides
 * the effect entirely, because elements far below the fold get revealed
 * before you ever scroll to them.
 *
 * Fails open without a timer: the hidden state is scoped to `.js [data-reveal]`
 * and the `js` class is set by the inline script in the layout, so with
 * JavaScript off nothing is hidden in the first place.
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

    const hasObserver = typeof IntersectionObserver !== "undefined";

    if (hasObserver) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        },
        // start a little before the element is fully on screen
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(node);
      return () => observer.disconnect();
    }

    // fallback: rect check on scroll
    let frame = 0;
    const check = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        setShown(true);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
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
