import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Bridal Makeup, Hair & Outfit Styling in Malappuram`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "bridal makeup Malappuram",
    "makeup artist Malappuram",
    "airbrush makeup Kerala",
    "hijab styling",
    "bridal hair styling",
    "saree draping",
    "outfit styling",
    "Makeup by Nida",
  ],
  openGraph: {
    type: "website",
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
