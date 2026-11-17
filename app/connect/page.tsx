import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "@/components/contact";
import { inquiryTopics } from "@/lib/site";

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

      <Suspense fallback={<Contact />}>
        <ConnectForm searchParams={searchParams} />
      </Suspense>
    </>
  );
}
