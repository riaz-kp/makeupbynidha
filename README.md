# Makeup by Nida

Portfolio site for **Makeup by Nida** ([@makeupbynidaa\_\_](https://www.instagram.com/makeupbynidaa__/)), a makeup, hair and outfit stylist based in Malappuram, Kerala.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4. It's a single, fully static page.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

| What | Where |
| --- | --- |
| Name, location, Instagram links, WhatsApp number, domain | `src/lib/site.ts` |
| Portfolio photos, titles, captions, categories | `src/lib/portfolio.ts` + `src/assets/portfolio/` |
| Services and what each includes | `src/components/services.tsx` |
| About text and quick facts | `src/components/about.tsx` |
| Booking steps | `src/components/process.tsx` |
| Colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |

**Adding a look:** drop the photo into `src/assets/portfolio/`, import it at the top of `src/lib/portfolio.ts`, and add an entry to `looks` with its categories (`makeup`, `hair`, `outfit`) and the Instagram post link.

**WhatsApp bookings:** set `whatsapp` in `src/lib/site.ts` (e.g. `"919876543210"`) and a WhatsApp button appears next to the Instagram one in the booking form.

## Booking flow

There's no backend. The booking form builds a message from the visitor's details, copies it to the clipboard and opens Nida's Instagram DM so they can paste and send it.

## Photos

The current photos come from the public Instagram grid, which only serves 640px images. For sharper results on large screens, swap them for the original high-resolution files and keep the same file names.
