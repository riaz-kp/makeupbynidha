"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ChevronDown, InstagramIcon, WhatsAppIcon } from "./icons";

const occasions = [
  "Nikah / Wedding",
  "Reception",
  "Engagement",
  "Mehendi / Haldi",
  "Party / Guest",
  "Photoshoot",
  "Other",
];

const serviceOptions = ["Makeup", "Hair styling", "Outfit styling"];

type Status = "idle" | "copied" | "manual";

function formatDate(value: FormDataEntryValue | null) {
  if (!value) return "TBC";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function buildMessage(data: FormData) {
  const services = data.getAll("services").join(", ") || "Not sure yet";
  const lines = [
    `Hi Nida! I'd like to book a look 💄`,
    ``,
    `Name: ${data.get("name")}`,
    `Occasion: ${data.get("occasion")}`,
    `Date: ${formatDate(data.get("date"))}`,
    `Location: ${data.get("location") || "TBC"}`,
    `Services: ${services}`,
  ];
  const notes = String(data.get("notes") ?? "").trim();
  if (notes) lines.push(``, notes);
  return lines.join("\n");
}

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = buildMessage(new FormData(e.currentTarget));
    setMessage(text);
    // Copy before opening the new tab: clipboard writes need this page to keep focus.
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
    window.open(site.instagram.dm, "_blank", "noopener,noreferrer");
  }

  function sendWhatsApp(form: HTMLFormElement | null) {
    if (!form || !form.reportValidity()) return;
    const text = buildMessage(new FormData(form));
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="book" className="relative overflow-hidden bg-blush/50 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-ivory/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">Bookings open</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-6xl">
            Let’s plan <em className="font-normal text-maroon">your look.</em>
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
            Bookings are taken over Instagram DM. Fill in the details and we’ll copy a ready-made
            message for you. Just paste it into the chat that opens.
          </p>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Wedding season fills up fast, so reach out as early as you can to hold your date.
          </p>

          <a
            href={site.instagram.dm}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-line bg-ivory/80 p-4 pr-6 transition-colors hover:border-maroon/40"
          >
            <span className="grid size-12 place-items-center rounded-full bg-maroon text-ivory">
              <InstagramIcon width={20} height={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                Prefer to just chat?
              </span>
              <span className="mt-0.5 block font-display text-xl">DM @{site.instagram.handle}</span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-ivory/90 p-6 shadow-[0_30px_60px_-40px_rgb(63_13_23/0.35)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">Your name</span>
                <input name="name" required autoComplete="name" className="field" placeholder="e.g. Fathima" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Occasion</span>
                <span className="relative block">
                  <select name="occasion" required defaultValue="" className="field appearance-none pr-10">
                    <option value="" disabled>
                      Choose one
                    </option>
                    {occasions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown
                    width={16}
                    height={16}
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Event date</span>
                <input name="date" type="date" className="field" />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">Venue / location</span>
                <input name="location" className="field" placeholder="e.g. Manjeri, Malappuram" />
              </label>

              <fieldset className="sm:col-span-2">
                <legend className="mb-3 text-sm font-medium">Services you need</legend>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((s) => (
                    <label key={s} className="cursor-pointer">
                      <input type="checkbox" name="services" value={s} className="peer sr-only" />
                      <span className="inline-block rounded-full border border-line bg-white/70 px-4 py-2 text-sm transition-colors peer-checked:border-maroon peer-checked:bg-maroon peer-checked:text-ivory peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-maroon">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">
                  Anything else? <span className="font-normal text-muted">(optional)</span>
                </span>
                <textarea
                  name="notes"
                  rows={3}
                  className="field resize-y"
                  placeholder="Outfit colours, hijab or open hair, number of people to get ready…"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn-primary flex-1">
                <InstagramIcon width={17} height={17} />
                Copy message & open Instagram
              </button>
              {site.whatsapp && (
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={(e) => sendWhatsApp(e.currentTarget.form)}
                >
                  <WhatsAppIcon width={17} height={17} />
                  WhatsApp
                </button>
              )}
            </div>

            <div aria-live="polite" className="mt-5 text-sm">
              {status !== "idle" && (
                <div className="rounded-xl bg-cream px-4 py-3 text-ink">
                  {status === "copied" ? (
                    <p>Message copied! Paste it into the Instagram chat that just opened.</p>
                  ) : (
                    <>
                      <p>Copy this message and paste it into the Instagram chat:</p>
                      <pre className="mt-2 font-sans text-[0.85rem] whitespace-pre-wrap text-muted">
                        {message}
                      </pre>
                    </>
                  )}
                  <a
                    href={site.instagram.dm}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block font-semibold text-maroon underline underline-offset-4"
                  >
                    Chat didn’t open? Tap here
                  </a>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
