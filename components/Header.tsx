"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Icon } from "./Icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/90 shadow-[0_8px_30px_-12px_rgb(6_58_50/0.18)] backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4 lg:h-20">
        <a href="#top" className="relative shrink-0" aria-label="Treeland Digital — home">
          <Image
            src="/logo-trim.png"
            alt="Treeland Digital"
            width={1622}
            height={534}
            preload
            sizes="200px"
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-brand-700"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-500 to-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contact.tel.href}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50 xl:inline-flex"
          >
            <Icon name="phone" className="size-4" />
            {site.contact.tel.label}
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
          >
            Start a Project
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-brand-100 bg-white text-brand-800 transition-colors hover:bg-brand-50 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-brand-100/70 bg-white transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[calc(100dvh-72px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x max-h-[calc(100dvh-72px)] overflow-y-auto py-6">
          <ul className="grid gap-1">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold text-brand-900 hover:bg-brand-50"
                >
                  {l.label}
                  <Icon name="arrowUpRight" className="size-5 text-brand-400" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 border-t border-brand-100 pt-6 sm:grid-cols-2">
            <a
              href={site.contact.tel.href}
              className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800"
            >
              <Icon name="phone" className="size-5" /> Tel: {site.contact.tel.label}
            </a>
            <a
              href={site.contact.cell.href}
              className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800"
            >
              <Icon name="mobile" className="size-5" /> Cell: {site.contact.cell.label}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-brand-800 px-4 py-3.5 text-sm font-semibold text-white sm:col-span-2"
            >
              Start a Project <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
