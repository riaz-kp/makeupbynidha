import type { StaticImageData } from "next/image";

import blushBrideSoftCurls from "@/assets/portfolio/blush-bride-soft-curls.jpg";
import redHijabBride from "@/assets/portfolio/red-hijab-bride.jpg";
import coupleRedGown from "@/assets/portfolio/couple-red-gown.jpg";
import redShararaBride from "@/assets/portfolio/red-sharara-bride.jpg";
import redLehengaBrideSeated from "@/assets/portfolio/red-lehenga-bride-seated.jpg";
import oliveGoldHijabBride from "@/assets/portfolio/olive-gold-hijab-bride.jpg";
import pinkBrideSleekBun from "@/assets/portfolio/pink-bride-sleek-bun.jpg";
import couplePinkSaree from "@/assets/portfolio/couple-pink-saree.jpg";
import whiteLaceBrideVeil from "@/assets/portfolio/white-lace-bride-veil.jpg";
import whiteLaceBrideOutdoor from "@/assets/portfolio/white-lace-bride-outdoor.jpg";
import beachCoupleLowBun from "@/assets/portfolio/beach-couple-low-bun.jpg";
import redLehengaHijabDraping from "@/assets/portfolio/red-lehenga-hijab-draping.jpg";

export type Category = "makeup" | "hair" | "outfit";

export const categoryLabels: Record<Category, string> = {
  makeup: "Makeup",
  hair: "Hair Styling",
  outfit: "Outfit Styling",
};

export type Look = {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  note: string;
  categories: Category[];
  post: string;
};

// Sourced from instagram.com/makeupbynidaa__ — newest first.
export const looks: Look[] = [
  {
    id: "blush-bride",
    image: blushBrideSoftCurls,
    alt: "Bride in a blush sequinned outfit with soft glam makeup, a maang tikka and long loose curls",
    title: "Blush & gold",
    note: "Soft glam with loose, brushed-out curls",
    categories: ["makeup", "hair"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DdisKgAPniH/",
  },
  {
    id: "red-hijab-bride",
    image: redHijabBride,
    alt: "Bride in a red embroidered gown with a matching hijab and net veil, minimal jewellery and henna",
    title: "Quiet red",
    note: "Hijab draping with a minimal, glowing base",
    categories: ["makeup", "outfit"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DdENfTrvJ_N/",
  },
  {
    id: "couple-red-gown",
    image: coupleRedGown,
    alt: "Bride in a red embroidered gown and hijab walking hand in hand with the groom in a black sequinned jacket",
    title: "Bride Shahna",
    note: "Reception look, styled head to toe",
    categories: ["makeup", "outfit"],
    post: "https://www.instagram.com/makeupbynidaa__/p/Dcu74nlFAbn/",
  },
  {
    id: "red-sharara-bride",
    image: redShararaBride,
    alt: "Smiling bride in a heavily embroidered red sharara with a scalloped dupatta framing her face and layered necklaces",
    title: "Classic red",
    note: "Dupatta set and layered jewellery styling",
    categories: ["makeup", "outfit"],
    post: "https://www.instagram.com/makeupbynidaa__/p/DZZ1cD0PYlQ/",
  },
  {
    id: "red-lehenga-seated",
    image: redLehengaBrideSeated,
    alt: "Bride in a red and gold lehenga seated on a wooden chair, wearing emerald and gold jewellery",
    title: "Getting-ready glow",
    note: "Long-wear bridal base that lasts the day",
    categories: ["makeup", "outfit"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DZZ0MKfRsam/",
  },
  {
    id: "olive-gold-bride",
    image: oliveGoldHijabBride,
    alt: "Bride in an olive and gold embellished outfit with a draped hijab, statement necklaces and henna",
    title: "Olive & antique gold",
    note: "Hijab styling with a jewelled tikka",
    categories: ["makeup", "outfit"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DTQCpusj42U/",
  },
  {
    id: "pink-bride",
    image: pinkBrideSleekBun,
    alt: "Bride in pink with a sleek centre-parted bun, maang tikka and green and gold layered necklaces",
    title: "Pink & emerald",
    note: "Sleek bun with tikka and headpiece setting",
    categories: ["makeup", "hair"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DTLIxokiSCR/",
  },
  {
    id: "couple-pink-saree",
    image: couplePinkSaree,
    alt: "Couple walking through a garden; the bride wears a pink sequinned saree with a draped head covering",
    title: "Garden reception",
    note: "Saree draping and soft, fresh makeup",
    categories: ["outfit", "makeup"],
    post: "https://www.instagram.com/makeupbynidaa__/p/DSZvDr4FCcg/",
  },
  {
    id: "white-lace-veil",
    image: whiteLaceBrideVeil,
    alt: "Bride in a high-neck white lace gown with a long veil, a sleek low bun and a deep red lip",
    title: "White lace",
    note: "Polished low bun with a cathedral veil",
    categories: ["hair", "makeup"],
    post: "https://www.instagram.com/makeupbynidaa__/reel/DSSBJyqCTPi/",
  },
  {
    id: "white-lace-outdoor",
    image: whiteLaceBrideOutdoor,
    alt: "Close portrait of a bride in a white lace gown outdoors with winged liner and a berry lip",
    title: "Editorial soft glam",
    note: "Defined eyes, sculpted skin, camera-ready",
    categories: ["makeup"],
    post: "https://www.instagram.com/makeupbynidaa__/p/DReyjkGiU7m/",
  },
  {
    id: "beach-couple",
    image: beachCoupleLowBun,
    alt: "Laughing bride in white embracing the groom on a beach at sunset, her hair in a low chignon",
    title: "Golden hour",
    note: "A low chignon built to survive the sea breeze",
    categories: ["hair"],
    post: "https://www.instagram.com/makeupbynidaa__/p/DRMnODUiRw9/",
  },
  {
    id: "red-lehenga-hijab",
    image: redLehengaHijabDraping,
    alt: "Full-length portrait of a bride in a red and gold lehenga with a hijab and a dupatta draped over both shoulders",
    title: "Regal drape",
    note: "Hijab and double-dupatta draping",
    categories: ["outfit", "makeup"],
    post: "https://www.instagram.com/makeupbynidaa__/p/DQbsoEhCYF4/",
  },
];

export function getLook(id: string): Look {
  const look = looks.find((l) => l.id === id);
  if (!look) throw new Error(`Unknown look: ${id}`);
  return look;
}
