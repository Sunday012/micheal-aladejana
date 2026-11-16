import { Arrow, Button } from "./ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{ backgroundImage: "url(/images/pattern.png)", backgroundSize: "520px" }}
        aria-hidden="true"
      />
      <div className="shell relative flex min-h-[78vh] flex-col items-center justify-center py-28 text-center md:py-36">
        <p className="eyebrow text-cream-100/70">Michael Aladejana Ministries</p>

        <h1 className="display mt-8 text-[2.6rem] sm:text-6xl lg:text-[4.6rem]">
          <span className="block">The Word for your life.</span>
          <span className="mt-2 block italic text-peach-200">
            A life for His purpose.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-[1.9] text-cream-100/75 md:text-lg">
          Know Christ. Grow in His Word. Live out your calling through biblical
          teaching, intentional discipleship, and a community of faith.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <Button href="/connect?topic=Discipleship" arrow>
            Register for Discipleship
          </Button>
          <Button href="/#teachings" variant="ghost" arrow className="font-semibold">
            Watch a teaching
          </Button>
        </div>

        <p className="mt-16 flex items-center gap-4 text-xs tracking-[0.04em] text-cream-100/55">
          <span className="h-px w-10 bg-cream-100/40" aria-hidden="true" />
          Rooted in Christ. Reaching beyond borders.
        </p>
      </div>
      <span className="sr-only">
        <Arrow />
      </span>
    </section>
  );
}
