import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Michael Aladejana Ministries handles the details you share through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="shell max-w-3xl">
        <p className="eyebrow text-rust-600">Legal</p>
        <h1 className="display mt-6 text-4xl text-forest-900 sm:text-5xl">
          Privacy notice
        </h1>
        <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.95] text-ink-600">
          <p>
            Details you submit through the inquiry form — your name, email
            address, chosen topic and message — are used only to respond to your
            request.
          </p>
          <p>
            We do not sell your information or share it with third parties for
            marketing. You can ask us to delete your details at any time by
            writing to{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-1 underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
          <p>
            This page is a placeholder for the ministry&apos;s final privacy
            policy and should be reviewed before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
