"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, InstagramIcon, MenuIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-line/80 bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 md:h-20">
        <a href="#top" className="font-display text-2xl leading-none tracking-tight text-ink md:text-[1.7rem]">
          Makeup by <em className="text-maroon">Nida</em>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium tracking-wide text-ink/80 transition-colors hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
          <a href={site.instagram.dm} target="_blank" rel="noreferrer" className="btn-primary py-2.5">
            <InstagramIcon width={16} height={16} />
            Book a date
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ivory px-4 pt-6 pb-10 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-3xl text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.instagram.dm}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          <InstagramIcon width={16} height={16} />
          DM to book on Instagram
        </a>
        <p className="mt-6 text-center text-sm text-muted">{site.location}</p>
      </div>
    </header>
  );
}
