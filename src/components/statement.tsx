import Image from "next/image";
import { getLook } from "@/lib/portfolio";
import { Reveal } from "./reveal";

// A pull-quote taken from one of Nida's own reels.
export function Statement() {
  const look = getLook("red-hijab-bride");

  return (
    <section className="bg-maroon-deep text-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-8 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-2xl">
              <Image
                src={look.image}
                alt={look.alt}
                placeholder="blur"
                sizes="(min-width: 768px) 32vw, 85vw"
                className="aspect-[3/4] h-auto w-full object-cover object-top"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-t-[999px] rounded-b-3xl border border-gold/40"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7 md:pl-8">
          <p className="eyebrow text-gold-soft">The philosophy</p>
          <blockquote className="mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            “Beauty needs <em className="font-normal text-gold-soft">no ornaments.</em>”
          </blockquote>
          <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-ivory/75">
            Some brides want every jewel, others almost none. Either way the work starts in the
            same place — skin that glows on its own, features that still look like you, and
            styling that holds from the first photo to the last.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
