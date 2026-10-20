import { Sparkle } from "./icons";

const items = [
  "Bridal Makeup",
  "Airbrush",
  "Hair Styling",
  "Hijab Styling",
  "Dupatta Draping",
  "Saree Draping",
  "Nikah",
  "Reception",
  "Engagement",
  "Party Looks",
];

export function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-maroon-deep bg-maroon py-5 text-ivory">
      <ul className="flex w-max animate-marquee items-center" aria-label="Services offered">
        {row.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 pr-8 font-display text-2xl whitespace-nowrap italic md:text-3xl"
          >
            {item}
            <Sparkle width={12} height={12} className="text-gold-soft" />
          </li>
        ))}
      </ul>
    </div>
  );
}
