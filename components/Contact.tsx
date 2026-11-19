import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Icon, WhatsAppIcon } from "./Icon";
import { Reveal } from "./Reveal";

export function Contact() {
  const { tel, cell, whatsapp, address } = site.contact;

  const cards = [
    { icon: <Icon name="phone" className="size-5" />, label: "Tel", value: tel.label, href: tel.href },
    { icon: <Icon name="mobile" className="size-5" />, label: "Cell", value: cell.label, href: cell.href },
    {
      icon: <WhatsAppIcon className="size-5" />,
      label: "WhatsApp",
      value: whatsapp.label,
      href: whatsapp.href,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-brand-900 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid-dark mask-fade" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 -z-10 size-[32rem] rounded-full bg-gold-500/20 blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 -z-10 size-[34rem] rounded-full bg-brand-500/25 blur-3xl animate-blob [animation-delay:-7s]" aria-hidden="true" />

      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        {/* Left: pitch + contact details */}
        <div className="text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span className="size-1.5 rounded-full bg-gold-400" /> Contact Us
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Let&apos;s Turn Your Idea Into Something <span className="text-gold-300">Powerful.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Whether you&apos;re building a new website, developing custom software, growing your business online, or
              automating your operations, Treeland Digital is ready to help.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-brand-950 shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Start Your Project <Icon name="arrow" className="size-4" />
            </a>
            <a
              href={tel.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Our Team
            </a>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={200 + i * 80}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/[0.09]"
                >
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-110 ${
                      c.label === "WhatsApp" ? "bg-[#25D366] text-white" : "bg-white/10 text-gold-300"
                    }`}
                  >
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">{c.label}</span>
                    <span className="block font-semibold text-white">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={440} className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <a
                href={address.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/[0.09]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-300 transition-transform group-hover:scale-110">
                  <Icon name="mapPin" className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">Office</span>
                  <address className="not-italic font-semibold leading-relaxed text-white">
                    {address.line1}, {address.line2},<br />
                    {address.city}, {address.country}
                  </address>
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Right: form */}
        <Reveal variant="zoom" delay={150}>
          <div id="contact-form" className="scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.5)] sm:p-9">
            <h3 className="font-display text-2xl font-extrabold text-brand-900">Tell us about your project</h3>
            <p className="mt-2 text-muted">Fill in the details and our team will get back to you shortly.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
