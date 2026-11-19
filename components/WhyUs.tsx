import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const reasons: { icon: IconName; title: string; text: string; span?: string; featured?: boolean }[] = [
  {
    icon: "layers",
    title: "Custom Solutions",
    text: "No cookie-cutter templates. Every project is planned and built around your goals, your users and your workflow.",
    span: "sm:col-span-2 lg:row-span-2",
    featured: true,
  },
  { icon: "cpu", title: "Modern Technology", text: "Proven, current tools that keep your product fast and future-ready." },
  { icon: "briefcase", title: "Business-Focused Development", text: "We measure success in leads, sales and time saved." },
  { icon: "trending", title: "Scalable Solutions", text: "Architecture that grows with your users and your team." },
  { icon: "design", title: "Creative Design", text: "Distinctive visuals that make your brand stand out." },
  { icon: "chat", title: "Transparent Communication", text: "Clear timelines, regular updates and one point of contact.", span: "lg:col-span-2" },
  { icon: "gauge", title: "Performance-Focused", text: "Optimised for speed, Core Web Vitals and SEO from day one." },
  { icon: "shield", title: "Long-Term Support", text: "We stay with you after launch to maintain, improve and scale." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              A partner invested in <span className="text-gradient">your growth.</span>
            </>
          }
          text="We combine the craft of a creative studio with the discipline of an engineering team, so you get work that looks great and performs."
        />

        <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 80} variant="zoom" className={`h-full ${r.span ?? ""}`}>
              {r.featured ? (
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 p-7 text-white sm:p-9">
                  <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
                  <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-gold-400/25 blur-3xl transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
                  <div className="relative">
                    <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-gold-300 ring-1 ring-white/15">
                      <Icon name={r.icon} className="size-7" />
                    </span>
                    <h3 className="mt-8 font-display text-3xl font-extrabold sm:text-4xl">{r.title}</h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">{r.text}</p>
                  </div>
                  <a
                    href="#contact"
                    className="relative mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition-all hover:gap-3 hover:bg-gold-200"
                  >
                    Discuss your idea <Icon name="arrow" className="size-4" />
                  </a>
                </div>
              ) : (
                <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-24px_rgb(6_58_50/0.35)]">
                  <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-brand-50 transition-colors group-hover:text-gold-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name={r.icon} className="size-6" />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-brand-900">{r.title}</h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{r.text}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
