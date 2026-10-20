// Central place for business details. Update these and the whole site follows.
export const site = {
  name: "Makeup by Nida",
  shortName: "Nida",
  tagline: "Makeup · Hair · Outfit Styling",
  description:
    "Bridal makeup, hair styling and outfit styling by Nida — a Malappuram-based artist creating soft, glowing looks for nikah, reception, engagement and every celebration in between.",
  location: "Malappuram, Kerala",
  instagram: {
    handle: "makeupbynidaa__",
    url: "https://www.instagram.com/makeupbynidaa__/",
    dm: "https://ig.me/m/makeupbynidaa__",
  },
  // Optional: add a WhatsApp number in international format (e.g. "919876543210")
  // to show a WhatsApp booking button alongside Instagram.
  whatsapp: "",
  // Placeholder — replace with the real domain once it's live (used for SEO tags).
  url: "https://makeupbynidha.com",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book" },
] as const;
