import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * SAMPLE CONTENT — replace with real client testimonials (name, role, company, quote).
 */
const testimonials = [
  {
    quote: "This is a sample testimonial. Replace it with a real quote from a client about their project and results.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Sample testimonial placeholder. A short, specific quote about communication, quality or outcomes works best.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Sample testimonial placeholder. Add a real client's words here once you have their permission to publish.",
    name: "Client Name",
    role: "Role, Company",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What our clients <span className="text-gradient">say.</span>
            </>
          }
          text="Sample layout. Real client testimonials will appear here."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120} className="h-full">
              <figure
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8 ${
                  i === 1
                    ? "border-transparent bg-brand-800 text-white md:-translate-y-4 md:hover:-translate-y-6"
                    : "border-brand-100 bg-cream hover:shadow-[0_24px_50px_-24px_rgb(6_58_50/0.35)]"
                }`}
              >
                <span className="absolute right-5 top-5 rounded-full border border-current/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider opacity-60">
                  Sample
                </span>
                <Icon name="quote" className={`size-10 ${i === 1 ? "text-gold-300" : "text-brand-300"}`} />
                <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="size-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className={`mt-5 flex-1 text-lg leading-relaxed ${i === 1 ? "text-white/85" : "text-ink/80"}`}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className={`grid size-12 place-items-center rounded-full font-display font-bold ${
                      i === 1 ? "bg-white/10 text-gold-300" : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    CN
                  </span>
                  <span>
                    <span className={`block font-semibold ${i === 1 ? "text-white" : "text-brand-900"}`}>{t.name}</span>
                    <span className={`block text-sm ${i === 1 ? "text-white/60" : "text-muted"}`}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
