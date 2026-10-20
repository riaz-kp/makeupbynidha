import { Reveal } from "./reveal";

const steps = [
  {
    title: "Say hello",
    body: "Send a DM with your date, venue and the events you're planning — nikah, reception, engagement or all of them.",
  },
  {
    title: "Plan the look",
    body: "Share your outfits, jewellery and a few inspiration photos. Together we shape makeup, hair and draping around you.",
  },
  {
    title: "Your day",
    body: "Sit back while your makeup, hair and outfit come together — finished, secure and ready for the camera.",
  },
] as const;

export function Process() {
  return (
    <section className="border-y border-line bg-cream/60 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How booking works</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-6xl">
            Three easy steps <em className="font-normal text-maroon">to your date.</em>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative border-t border-ink/15 pt-8">
              <span className="font-display text-6xl leading-none text-gold/70 italic">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-3xl font-medium">{step.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
