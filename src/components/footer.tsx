import { navLinks, site } from "@/lib/site";
import { InstagramIcon, PinIcon } from "./icons";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();

  return (
    <footer className="bg-maroon-deep text-ivory">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-5xl leading-none tracking-tight sm:text-6xl">
              Makeup by <em className="text-gold-soft">Nida</em>
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-ivory/65">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-gold-soft">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/80 transition-colors hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-gold-soft">Find Nida</p>
            <ul className="mt-5 space-y-3 text-ivory/80">
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ivory"
                >
                  <InstagramIcon width={17} height={17} />@{site.instagram.handle}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <PinIcon width={17} height={17} />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/50 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Photography shared from @{site.instagram.handle}</p>
        </div>
      </div>
    </footer>
  );
}
