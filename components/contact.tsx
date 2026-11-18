"use client";

import { useState } from "react";
import { inquiryTopics, site } from "@/lib/site";
import Reveal from "./reveal";
import { SectionLabel } from "./ui";

const field =
  "mt-2 w-full border border-forest-900/20 bg-cream-50 px-4 py-3.5 font-body text-base text-forest-900 outline-none transition focus:border-forest-900 focus:ring-1 focus:ring-forest-900/20";
const label = "font-body text-sm font-medium text-forest-900";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ defaultTopic = "" }: { defaultTopic?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(payload.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="connect" className="bg-cream-100 py-24 md:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <SectionLabel>Get in touch</SectionLabel>

            <h2 className="display mt-6 text-3xl text-forest-900 sm:text-4xl">
              Take your next step.
            </h2>
            <p className="mt-5 text-lg leading-[1.9] text-ink-600">
              Reach out about coaching, a speaking invitation, the tour, or
              another inquiry.
            </p>
          </Reveal>

          {status === "sent" ? (
            <div className="mt-12 border border-forest-900/15 bg-cream-50 p-8">
              <h3 className="display text-2xl text-forest-900">
                Thank you — that&apos;s with us.
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.9] text-ink-600">
                Your message has been received. We respond within 2 business
                days.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="link-sweep link-sweep-on mt-6 font-body text-sm font-semibold text-forest-900"
              >
                Send another message
              </button>
            </div>
          ) : (
            <Reveal delay={140} as="form" onSubmit={handleSubmit} className="mt-12 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="firstName">
                    First name <span aria-hidden="true">*</span>
                  </label>
                  <input id="firstName" name="firstName" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="lastName">
                    Last name <span aria-hidden="true">*</span>
                  </label>
                  <input id="lastName" name="lastName" required className={field} />
                </div>
              </div>

              <div>
                <label className={label} htmlFor="email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" required className={field} />
              </div>

              <div>
                <label className={label} htmlFor="organisation">
                  Organisation or church
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  placeholder="Your organisation, church or company"
                  className={field}
                />
              </div>

              <div>
                <label className={label} htmlFor="topic">
                  I&apos;m reaching out about <span aria-hidden="true">*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  defaultValue={defaultTopic}
                  className={field}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {inquiryTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={label} htmlFor="message">
                  Your message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your need, opportunity or invitation…"
                  className={`${field} resize-y`}
                />
              </div>

              <p className="text-sm leading-[1.8] text-ink-600">
                All enquiries are treated with complete confidentiality. We
                respond within 2 business days. Read the{" "}
                <a
                  href="/privacy"
                  className="underline decoration-1 underline-offset-4"
                >
                  privacy notice
                </a>
                .
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center bg-rust-600 px-8 py-4 font-body text-sm font-semibold text-cream-50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-rust-500 hover:shadow-[0_14px_30px_-14px_rgba(168,85,44,0.85)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "error" ? (
                <p className="text-sm leading-[1.8] text-rust-600">
                  {error} You can also email{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="underline decoration-1 underline-offset-4"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
