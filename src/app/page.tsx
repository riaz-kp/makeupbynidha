import { About } from "@/components/about";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { Process } from "@/components/process";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { Statement } from "@/components/statement";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: "Kerala",
  sameAs: [site.instagram.url],
  makesOffer: ["Bridal makeup", "Airbrush makeup", "Hair styling", "Hijab styling", "Outfit styling"].map(
    (name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }),
  ),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Statement />

        <section id="portfolio" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="eyebrow">Portfolio</p>
                <h2 className="mt-4 font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-6xl">
                  Recent <em className="font-normal text-maroon">brides & looks.</em>
                </h2>
              </div>
              <p className="max-w-md text-[1.02rem] leading-relaxed text-muted md:col-span-5 md:justify-self-end">
                Nikah mornings, reception evenings and golden-hour shoots. Tap any look to see it
                larger, or filter by what you’re booking.
              </p>
            </Reveal>
            <PortfolioGallery />
          </div>
        </section>

        <Process />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
