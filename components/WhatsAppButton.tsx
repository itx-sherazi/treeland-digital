import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Treeland Digital, I'd like to discuss a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${site.contact.whatsapp.label}`}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110 sm:size-16">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7 sm:size-8" />
      </span>
    </a>
  );
}
