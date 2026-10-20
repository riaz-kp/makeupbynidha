"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { categoryLabels, looks, type Category } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { ArrowUpRight, ChevronLeft, ChevronRight, CloseIcon, InstagramIcon } from "./icons";

type Filter = "all" | Category;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All looks" },
  ...(Object.keys(categoryLabels) as Category[]).map((c) => ({ value: c, label: categoryLabels[c] })),
];

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? looks : looks.filter((l) => l.categories.includes(filter));
  const current = active === null ? null : visible[active];

  const open = (index: number) => {
    setActive(index);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length));

  const onArrowKey = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  const isOpen = active !== null;
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => onArrowKey(e);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <div role="group" aria-label="Filter portfolio" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              filter === f.value
                ? "border-maroon bg-maroon text-ivory"
                : "border-line bg-white/60 text-ink/80 hover:border-maroon/50 hover:text-maroon"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-2 gap-3 sm:gap-5 md:columns-3 xl:columns-4">
        {visible.map((look, i) => (
          <li key={look.id} className="mb-3 break-inside-avoid sm:mb-5">
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-blush text-left sm:rounded-2xl"
              aria-label={`Open “${look.title}”`}
            >
              <Image
                src={look.image}
                alt={look.alt}
                placeholder="blur"
                sizes="(min-width: 1280px) 300px, (min-width: 768px) 32vw, 48vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/10 to-transparent opacity-90 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-ivory sm:translate-y-2 sm:p-5 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                <span className="block font-display text-lg leading-tight italic sm:text-2xl">
                  {look.title}
                </span>
                <span className="mt-1 hidden text-[0.8rem] text-ivory/80 sm:block">{look.note}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <a href={site.instagram.url} target="_blank" rel="noreferrer" className="btn-ghost">
          <InstagramIcon width={17} height={17} />
          More on @{site.instagram.handle}
        </a>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        aria-label={current ? current.title : "Look"}
        className="m-auto max-h-[100dvh] max-w-[100vw] bg-transparent p-0 text-ivory"
      >
        {current && (
          <div
            onClick={(e) => e.target === e.currentTarget && close()}
            className="flex h-[100dvh] w-[100vw] flex-col items-center justify-center gap-5 px-4 py-6 sm:px-20"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            <figure className="flex min-h-0 flex-col items-center">
              <Image
                key={current.id}
                src={current.image}
                alt={current.alt}
                placeholder="blur"
                sizes="(min-width: 640px) 480px, 92vw"
                // Size from the aspect ratio: the Instagram sources are small, so
                // w-auto would shrink them by the srcset density.
                style={{
                  width: `min(92vw, ${((current.image.width / current.image.height) * 70).toFixed(2)}dvh)`,
                }}
                className="h-auto rounded-xl"
              />
              <figcaption className="mt-5 text-center">
                <p className="font-display text-3xl italic">{current.title}</p>
                <p className="mt-1 text-sm text-ivory/70">
                  {current.note} · {current.categories.map((c) => categoryLabels[c]).join(", ")}
                </p>
                <a
                  href={current.post}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft hover:text-ivory"
                >
                  View on Instagram <ArrowUpRight width={15} height={15} />
                </a>
              </figcaption>
            </figure>

            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:left-6"
                  aria-label="Previous look"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:right-6"
                  aria-label="Next look"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
