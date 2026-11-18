import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Contact from "@/components/contact";
import Reveal from "@/components/reveal";
import { inquiryTopics, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Let's connect",
  description:
    "Reach out about discipleship, coaching, a speaking invitation, the Texas Tour, or another inquiry.",
};

async function ConnectForm({
  searchParams,
}: {
  searchParams: PageProps<"/connect">["searchParams"];
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.topic) ? params.topic[0] : params.topic;
  const topic = raw && inquiryTopics.includes(raw) ? raw : "";

  return <Contact defaultTopic={topic} />;
}

export default function ConnectPage({ searchParams }: PageProps<"/connect">) {
  return (
    <>
      <section className="bg-forest-900 py-24 text-center text-cream-100 md:py-28">
        <div className="shell">
          <p className="eyebrow text-peach-200">Get in touch</p>
          <h1 className="display mt-6 text-3xl sm:text-4xl lg:text-[3.1rem]">
            Let&apos;s build
            <span className="block italic text-peach-200">together.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.9] text-cream-100/75">
            Whether you are joining discipleship, inviting Michael to minister,
            asking about the book, or requesting a coaching conversation — it
            starts here.
          </p>
        </div>
      </section>

      {/* two routes in: write to us, or book time directly */}
      <section className="bg-forest-950 py-20 text-cream-100">
        <div className="shell grid gap-6 md:grid-cols-2">
          <Reveal className="group border border-cream-100/15 p-8 transition-colors duration-500 hover:border-peach-200/50 sm:p-10">
            <span className="text-2xl text-peach-200" aria-hidden="true">
              ✦
            </span>
            <h2 className="display mt-6 text-2xl">Ministry &amp; Speaking</h2>
            <p className="mt-4 text-[0.98rem] leading-[1.85] text-cream-100/70">
              Church services, conferences, retreats, discipleship, books,
              media &amp; general enquiries
            </p>
            <Link
              href="#connect"
              className="link-sweep mt-8 font-body text-sm font-semibold uppercase tracking-[0.12em] text-peach-200"
            >
              Fill out the form →
            </Link>
          </Reveal>

          <Reveal
            delay={120}
            className="group border border-cream-100/15 p-8 transition-colors duration-500 hover:border-peach-200/50 sm:p-10"
          >
            <span className="text-2xl text-peach-200" aria-hidden="true">
              ✦
            </span>
            <h2 className="display mt-6 text-2xl">Coaching &amp; Consultation</h2>
            <p className="mt-4 text-[0.98rem] leading-[1.85] text-cream-100/70">
              Pastoral guidance, premarital and relationship coaching,
              leadership, life &amp; purpose
            </p>
            <a
              href={site.booking}
              target="_blank"
              rel="noreferrer"
              className="link-sweep mt-8 font-body text-sm font-semibold uppercase tracking-[0.12em] text-peach-200"
            >
              Book a consultation →
            </a>
          </Reveal>
        </div>
      </section>

      <Suspense fallback={<Contact />}>
        <ConnectForm searchParams={searchParams} />
      </Suspense>
    </>
  );
}
