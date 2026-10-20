import Image from "next/image";
import { getLook } from "@/lib/portfolio";
import { Reveal } from "./reveal";

const services = [
  {
    number: "01",
    title: "Makeup",
    look: "blush-bride",
    blurb:
      "Skin-first bridal and occasion makeup that photographs beautifully and stays fresh from the nikah to the last reception photo.",
    includes: [
      "Bridal makeup — nikah, wedding & reception",
      "Airbrush makeup",
      "Engagement & mehendi looks",
      "Party, guest & bridesmaid makeup",
    ],
  },
  {
    number: "02",
    title: "Hair Styling",
    look: "white-lace-veil",
    blurb:
      "Sleek buns, soft curls and secure hijab styling — finished with veil, tikka and accessory setting so everything stays put.",
    includes: [
      "Bridal buns & low chignons",
      "Curls & open hairstyles",
      "Hijab styling",
      "Veil, tikka & headpiece setting",
    ],
  },
  {
    number: "03",
    title: "Outfit Styling",
    look: "red-lehenga-hijab",
    blurb:
      "From dupatta drapes to saree pleats and jewellery layering, every piece is placed so the whole look comes together on camera.",
    includes: [
      "Dupatta & veil draping",
      "Saree draping",
      "Jewellery styling & layering",
      "Complete look coordination",
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">What Nida does</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-6xl">
              One artist, <em className="font-normal text-maroon">every detail.</em>
            </h2>
          </div>
          <p className="max-w-md text-[1.02rem] leading-relaxed text-muted md:col-span-5 md:justify-self-end">
            Makeup, hair and outfit styling planned together, so your skin, your hair and your
            drape all tell the same story.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {services.map((service, i) => {
            const look = getLook(service.look);
            return (
              <Reveal
                key={service.title}
                delay={i * 120}
                as="article"
                className="group mx-auto w-full max-w-md md:max-w-none"
              >
                <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl bg-blush">
                  <Image
                    src={look.image}
                    alt={look.alt}
                    placeholder="blur"
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-7 flex items-baseline gap-4 border-b border-line pb-4">
                  <span className="font-display text-lg text-gold italic">{service.number}</span>
                  <h3 className="font-display text-[2.1rem] leading-none font-medium">{service.title}</h3>
                </div>
                <p className="mt-5 leading-relaxed text-muted">{service.blurb}</p>
                <ul className="mt-5 space-y-2.5 text-[0.93rem] text-ink/85">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-[0.6rem] h-px w-4 shrink-0 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
