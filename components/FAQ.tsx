import { site } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "What services does Treeland Digital offer?",
    a: "We offer web development, WordPress development, custom software, CRM development, mobile apps, SEO, UI/UX design, e-commerce, digital marketing, AI & automation, SaaS development, and website maintenance & support.",
  },
  {
    q: "Can you develop custom software for my business?",
    a: "Yes. We build custom software around your workflows, from internal tools and dashboards to full CRM and SaaS platforms, so your team can work faster with fewer manual steps.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We help startups plan, design and launch MVPs quickly, then scale the product as they grow.",
  },
  {
    q: "Do you develop WordPress websites?",
    a: "Yes. We build custom WordPress websites, landing pages and WooCommerce stores that are fast, secure and easy for you to update.",
  },
  {
    q: "Can you help improve my website's SEO?",
    a: "Yes. We handle technical SEO, on-page optimisation, content strategy and performance improvements to grow your organic visibility over time.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. Our maintenance & support plans cover updates, backups, security, performance optimisation and technical help whenever you need it.",
  },
  {
    q: "How do I start a project?",
    a: `Fill in the contact form below, message us on WhatsApp at ${site.contact.whatsapp.label}, or call ${site.contact.tel.label}. We'll schedule a free discovery call to understand your goals.`,
  },
  {
    q: "How much does a digital project cost?",
    a: "Every project is different, so cost depends on scope, features and timeline. After a short discovery call we'll send a clear, itemised quote with no hidden charges.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions? <span className="text-gradient">We have answers.</span>
              </>
            }
            text="Can't find what you're looking for? Talk to our team directly."
          />
          <Reveal delay={150} className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </a>
            <a
              href={site.contact.tel.href}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-500"
            >
              <Icon name="phone" className="size-4" /> Call us
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details
                className="faq-item group rounded-2xl border border-brand-100 bg-white transition-all duration-300 open:border-brand-300 open:shadow-[0_20px_40px_-24px_rgb(6_58_50/0.35)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-display text-base font-bold text-brand-900 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:p-6 sm:text-lg">
                  {f.q}
                  <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 group-open:bg-brand-800 group-open:text-white">
                    <Icon name="plus" className="size-4" strokeWidth={2.4} />
                  </span>
                </summary>
                <div className="faq-body">
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{f.a}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
