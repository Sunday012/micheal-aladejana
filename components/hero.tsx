import HeroBackdrop from "./hero-backdrop";
import { Button } from "./ui";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-cream-100">
      <HeroBackdrop />
      <div className="shell relative flex min-h-[78vh] flex-col items-center justify-center py-28 text-center md:py-36">
        <p className="eyebrow enter enter-1 text-cream-100/70">
          Michael Aladejana Ministries
        </p>

        <h1 className="display mt-8 text-balance text-[clamp(1.4rem,7.4vw,1.75rem)] sm:text-[2.6rem] md:text-5xl lg:text-[3.8rem]">
          <span className="enter enter-2 block">The Word for your life.</span>
          <span className="enter enter-3 mt-2 block italic text-peach-200">
            A life for His purpose.
          </span>
        </h1>

        <p className="enter enter-4 mt-8 max-w-2xl text-pretty text-[0.95rem] leading-[1.9] text-cream-100/75 sm:text-base md:text-lg">
          Know Christ. Grow in His Word. Live out your calling through biblical
          teaching, intentional discipleship, and a community of faith.
        </p>

        <div className="enter enter-5 mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <Button href="/connect?topic=Discipleship">
            Register for Discipleship
          </Button>
          <Button href="/#teachings" variant="ghost" className="font-semibold">
            Watch a teaching
          </Button>
        </div>

        <p className="enter enter-5 mt-16 flex items-center gap-4 text-xs tracking-[0.04em] text-cream-100/55">
          <span className="h-px w-10 bg-cream-100/40" aria-hidden="true" />
          Rooted in Christ. Reaching beyond borders.
        </p>
      </div>
    </section>
  );
}
