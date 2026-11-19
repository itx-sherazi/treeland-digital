import { serviceGroups } from "@/lib/services";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Every digital service your business needs, <span className="text-gradient">under one roof.</span>
            </>
          }
          text="From your first website to custom software and AI automation, we design, build and grow digital products that move your business forward."
        />

        {/* Category quick-nav */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {serviceGroups.map((g) => (
            <a
              key={g.id}
              href={`#svc-${g.id}`}
              className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-800 hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </Reveal>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {serviceGroups.map((group, gi) => (
            <div
              key={group.id}
              id={`svc-${group.id}`}
              className="grid gap-8 lg:grid-cols-[0.8fr_2fr] lg:gap-12"
            >
              <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
                <p className="font-display text-sm font-bold tracking-widest text-gold-500">{group.label}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-900 sm:text-3xl">{group.title}</h3>
                <p className="mt-3 max-w-sm text-muted">{group.blurb}</p>
                <div className="mt-6 hidden h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-gold-400 lg:block" />
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {group.services.map((s, i) => (
                  <Reveal key={s.title} delay={i * 90} className="h-full">
                    <article
                      className={`group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-20px_rgb(6_58_50/0.3)] sm:p-7 ${
                        gi % 2 === 1 && i === 0 ? "sm:bg-gradient-to-br sm:from-white sm:to-brand-50" : ""
                      }`}
                    >
                      {/* Hover gradient wash */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute -right-16 -top-16 size-40 rounded-full bg-gold-400/0 blur-2xl transition-all duration-700 group-hover:bg-gold-400/30" />

                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white/10 group-hover:text-gold-300">
                            <Icon name={s.icon} className="size-7" />
                          </span>
                          <Icon
                            name="arrowUpRight"
                            className="size-5 text-brand-300 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300"
                          />
                        </div>
                        <h4 className="mt-6 font-display text-xl font-bold text-brand-900 transition-colors group-hover:text-white">
                          {s.title}
                        </h4>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white/75">
                          {s.description}
                        </p>
                        <p className="mt-5 flex items-start gap-2 border-t border-brand-100 pt-4 text-sm font-semibold text-brand-700 transition-colors group-hover:border-white/15 group-hover:text-gold-200">
                          <Icon name="check" className="mt-0.5 size-4 shrink-0" strokeWidth={2.4} />
                          {s.value}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
