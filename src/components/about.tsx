import Image from "next/image";
import profile from "@/assets/nida-profile.jpg";
import { getLook } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

const facts = [
  { label: "Based in", value: "Malappuram, Kerala" },
  { label: "Brides since", value: "2023" },
  { label: "Signature", value: "Airbrush & soft glam" },
  { label: "Styling", value: "Hijab-friendly, head to hem" },
] as const;

export function About() {
  const portrait = getLook("olive-gold-bride");
  const detail = getLook("pink-bride");

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="grid grid-cols-2 items-start gap-4">
            <div className="overflow-hidden rounded-2xl bg-blush">
              <Image
                src={portrait.image}
                alt={portrait.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="aspect-[3/5] h-auto w-full object-cover"
              />
            </div>
            <div className="mt-16 overflow-hidden rounded-2xl bg-blush">
              <Image
                src={detail.image}
                alt={detail.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="aspect-[3/5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2 lg:col-span-6 lg:pl-10">
          <div className="flex items-center gap-4">
            <Image
              src={profile}
              alt="Nida, makeup and hair artist"
              placeholder="blur"
              className="size-16 rounded-full border-2 border-gold/60 object-cover"
            />
            <div>
              <p className="eyebrow">Meet the artist</p>
              <p className="mt-1 font-display text-2xl italic">@{site.instagram.handle}</p>
            </div>
          </div>

          <h2 className="mt-8 font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-6xl">
            Hi, I’m <em className="font-normal text-maroon">Nida.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I’m a makeup and hair artist based in Malappuram, and I’ve been getting brides ready
              for their big days since 2023. I bring makeup, hair and outfit styling together under
              one set of hands, so every part of your look is planned as a whole.
            </p>
            <p>
              Whether you want a minimal, glowing nikah look or full regal red with every jewel, the
              goal is the same: skin that looks like skin, styling that stays put, and photos you’ll
              still love years from now.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">{fact.label}</dt>
                <dd className="mt-1.5 font-display text-xl leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
