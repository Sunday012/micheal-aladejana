import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Michael Aladejana Ministries handles the information you share through this website.",
};

const sections = [
  {
    heading: "What we collect",
    body: [
      "When you submit the inquiry form we collect the details you enter: your first and last name, email address, organisation or church if you provide one, the topic you select, and your message.",
      "We do not run advertising or analytics tracking on this site, and we do not set cookies of our own.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Your details are used for one purpose: to read and respond to your enquiry. We may keep the correspondence so we have context if you contact us again.",
      "We do not sell your information, and we do not share it with third parties for marketing.",
    ],
  },
  {
    heading: "Services we rely on",
    body: [
      "Form submissions are delivered to our inbox by Web3Forms, which processes the message on our behalf. Discipleship registration is handled by Jotform, and consultations are booked through Cal.com — when you use those, their own privacy terms apply to the information you give them.",
      "The site is hosted on Vercel, whose servers keep standard request logs. Teaching videos are embedded from YouTube in privacy-enhanced mode and only load once you press play, so YouTube receives nothing until you choose to watch.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiries only as long as we need them to respond and to maintain a record of our correspondence, and we delete them when they are no longer needed.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to us and we will act on the request.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="shell max-w-3xl">
        <p className="eyebrow text-rust-600">Legal</p>
        <h1 className="display mt-6 text-3xl text-forest-900 sm:text-4xl lg:text-5xl">
          Privacy notice
        </h1>
        <p className="mt-8 text-[1.05rem] leading-[1.95] text-ink-600">
          This notice explains what Michael Aladejana Ministries does with the
          information you share through this website.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="display text-xl text-forest-900 sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[1.05rem] leading-[1.95] text-ink-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="display text-xl text-forest-900 sm:text-2xl">
              Contact
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.95] text-ink-600">
              For anything in this notice, including a request to delete your
              details, write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-1 underline-offset-4 hover:text-forest-900"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
