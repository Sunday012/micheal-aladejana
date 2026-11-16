"use client";

import { useState } from "react";
import { inquiryTopics, site } from "@/lib/site";
import { Arrow, SectionLabel } from "./ui";

const field =
  "mt-2 w-full border border-forest-900/20 bg-cream-50 px-4 py-3.5 font-body text-base text-forest-900 outline-none transition focus:border-forest-900 focus:ring-1 focus:ring-forest-900/20";
const label = "font-body text-sm font-medium text-forest-900";

export default function Contact({ defaultTopic = "" }: { defaultTopic?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website inquiry — ${data.get("topic")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Topic: ${data.get("topic")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="connect" className="bg-cream-100 py-24 md:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl">
          <SectionLabel>Get in touch</SectionLabel>

          <h2 className="display mt-6 text-4xl text-forest-900 sm:text-5xl">
            Take your next step.
          </h2>
          <p className="mt-5 text-lg leading-[1.9] text-ink-600">
            Reach out about coaching, a speaking invitation, the tour, or
            another inquiry.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-7">
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
                  Choose a topic
                </option>
                {inquiryTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="name">
                Full name <span aria-hidden="true">*</span>
              </label>
              <input id="name" name="name" required className={field} />
            </div>

            <div>
              <label className={label} htmlFor="email">
                Email address <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={field}
              />
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
                placeholder="Tell us how we can help."
                className={`${field} resize-y`}
              />
            </div>

            <label className="flex items-start gap-3 text-sm leading-[1.7] text-ink-600">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 accent-rust-600"
              />
              <span>
                I agree that Michael Aladejana Ministries may use my details to
                respond to this request. Read the{" "}
                <a
                  href="/privacy"
                  className="underline decoration-1 underline-offset-4"
                >
                  privacy notice
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-rust-600 px-8 py-4 font-body text-sm font-semibold text-cream-50 transition-colors hover:bg-rust-500"
            >
              Send my inquiry <Arrow />
            </button>

            {sent ? (
              <p className="text-sm text-forest-900">
                Your email client should now be open with the inquiry ready to
                send. If nothing happened, write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-1 underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
