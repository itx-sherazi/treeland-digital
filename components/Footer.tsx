import Image from "next/image";
import { serviceGroups } from "@/lib/services";
import { navLinks, site } from "@/lib/site";
import { Icon, SocialIcon, WhatsAppIcon } from "./Icon";

export function Footer() {
  const { tel, cell, whatsapp, address } = site.contact;
  const services = serviceGroups.flatMap((g) => g.services).slice(0, 8);

  return (
    <footer className="relative overflow-hidden border-t border-brand-100 bg-white">
      <div className="h-1 w-full bg-gradient-to-r from-brand-700 via-brand-400 to-gold-400" aria-hidden="true" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
        {/* Brand */}
        <div>
          <a href="#top" aria-label="Treeland Digital — back to top" className="inline-block">
            <Image src="/logo-trim.png" alt="Treeland Digital" width={1622} height={534} sizes="240px" className="h-14 w-auto" />
          </a>
          <p className="mt-5 max-w-xs leading-relaxed text-muted">
            A full-service digital agency helping businesses build, grow, automate and scale their digital presence.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="grid size-10 place-items-center rounded-full border border-brand-100 text-brand-700 transition-all hover:-translate-y-0.5 hover:border-brand-800 hover:bg-brand-800 hover:text-white"
                >
                  <SocialIcon name={s.name} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-900">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-[15px] text-muted transition-colors hover:text-brand-700">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navigation */}
        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-900">Company</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[15px] text-muted transition-colors hover:text-brand-700">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#industries" className="text-[15px] text-muted transition-colors hover:text-brand-700">
                Industries
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-900">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li>
              <a href={tel.href} className="flex items-center gap-3 text-ink/80 hover:text-brand-700">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name="phone" className="size-4" />
                </span>
                <span>
                  <span className="block text-xs text-muted">Tel</span>
                  {tel.label}
                </span>
              </a>
            </li>
            <li>
              <a href={cell.href} className="flex items-center gap-3 text-ink/80 hover:text-brand-700">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name="mobile" className="size-4" />
                </span>
                <span>
                  <span className="block text-xs text-muted">Cell</span>
                  {cell.label}
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink/80 hover:text-brand-700"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white">
                  <WhatsAppIcon className="size-4" />
                </span>
                <span>
                  <span className="block text-xs text-muted">WhatsApp</span>
                  {whatsapp.label}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-ink/80">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name="mapPin" className="size-4" />
              </span>
              <address className="not-italic leading-relaxed">
                {address.line1}
                <br />
                {address.line2}, {address.city}, {address.country}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted sm:flex-row">
          <p>© 2026 Treeland Digital. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-brand-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-700">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
