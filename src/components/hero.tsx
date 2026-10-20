import Image from "next/image";
import { getLook } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { ArrowRight, InstagramIcon, PinIcon, Sparkle } from "./icons";

export function Hero() {
  const main = getLook("red-sharara-bride");
  const inset = getLook("white-lace-outdoor");

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-32">
      {/* soft wash behind the collage */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_80%_20%,var(--color-blush),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-6 lg:pr-6">
          <p className="eyebrow flex items-center gap-2">
            <PinIcon width={14} height={14} className="text-gold" />
            {site.location}
          </p>

          <h1 className="mt-6 font-display text-[3.2rem] leading-[0.95] font-medium tracking-tight text-ink sm:text-7xl lg:text-[5.6rem]">
            Your look,
            <br />
            <em className="font-normal text-maroon">head to hem.</em>
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-muted">
            Makeup, hair and outfit styling by Nida — soft, luminous bridal looks for nikah,
            reception and every celebration in between.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={site.instagram.dm} target="_blank" rel="noreferrer" className="btn-primary">
              <InstagramIcon width={17} height={17} />
              DM to book
            </a>
            <a href="#portfolio" className="btn-ghost">
              See the portfolio
              <ArrowRight width={17} height={17} />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-xl text-ink/80 italic">
            <li>Makeup</li>
            <li aria-hidden className="text-gold">
              <Sparkle width={10} height={10} />
            </li>
            <li>Hair Styling</li>
            <li aria-hidden className="text-gold">
              <Sparkle width={10} height={10} />
            </li>
            <li>Outfit Styling</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none">
          <div className="relative ml-auto w-[78%] lg:w-[74%]">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-2xl bg-blush shadow-[0_40px_80px_-40px_rgb(63_13_23/0.45)]">
              <Image
                src={main.image}
                alt={main.alt}
                placeholder="blur"
                preload
                sizes="(min-width: 1024px) 34vw, 70vw"
                className="aspect-[3/4] h-auto w-full object-cover"
              />
            </div>
            {/* thin gold arch outline, offset for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 -z-10 rounded-t-[999px] rounded-b-3xl border border-gold/50"
            />
          </div>

          <div className="absolute bottom-[-6%] left-0 w-[42%] overflow-hidden rounded-2xl border-[6px] border-ivory shadow-xl lg:w-[38%]">
            <Image
              src={inset.image}
              alt={inset.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 18vw, 40vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>

          <div className="absolute top-[8%] left-[4%] grid size-24 place-items-center rounded-full bg-maroon text-center text-ivory shadow-lg sm:size-28">
            <p className="font-display leading-tight">
              <span className="block text-[0.65rem] font-sans font-semibold tracking-[0.2em] text-gold-soft uppercase">
                Brides
              </span>
              <span className="block text-xl italic sm:text-2xl">since</span>
              <span className="block text-xl sm:text-2xl">2023</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
