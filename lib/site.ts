export const site = {
  name: "Treeland Digital",
  tagline: "Innovate | Grow | Connect",
  url: "https://treelanddigital.com",
  description:
    "Treeland Digital helps businesses grow with web development, custom software, WordPress, SEO, mobile apps, CRM systems, AI automation, and digital marketing.",
  contact: {
    tel: { label: "+92-42-36287878", href: "tel:+924236287878" },
    cell: { label: "+92 328 0200656", href: "tel:+923280200656" },
    whatsapp: {
      label: "+92 304 4169069",
      number: "923044169069",
      href: "https://wa.me/923044169069",
    },
    address: {
      line1: "Treeland House, Ground Floor",
      line2: "25A/1, Davis Road",
      city: "Lahore",
      country: "Pakistan",
      full: "Treeland House, Ground Floor, 25A/1, Davis Road, Lahore, Pakistan",
      mapHref:
        "https://www.google.com/maps/search/?api=1&query=25A%2F1+Davis+Road+Lahore+Pakistan",
    },
  },
  // Replace "#" with real profile URLs when available.
  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "X", href: "#" },
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = site.contact.whatsapp.href;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
