import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Placeholder projects — replace with real case studies (add an `image` and `href`).
 */
const projects: {
  name: string;
  industry: string;
  category: string;
  description: string;
  tech: string[];
  icon: IconName;
  gradient: string;
  wide?: boolean;
}[] = [
  {
    name: "Your Project Here",
    industry: "E-commerce",
    category: "Online Store",
    description: "Space for a featured e-commerce build: catalogue, checkout and payment integrations.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    icon: "cart",
    gradient: "from-brand-700 via-brand-600 to-brand-400",
    wide: true,
  },
  {
    name: "Your Project Here",
    industry: "Real Estate",
    category: "CRM System",
    description: "Space for a CRM case study: lead pipeline, agent dashboards and reporting.",
    tech: ["React", "Express", "MongoDB"],
    icon: "crm",
    gradient: "from-gold-500 via-gold-400 to-gold-200",
  },
  {
    name: "Your Project Here",
    industry: "Healthcare",
    category: "Mobile App",
    description: "Space for a mobile app project: booking, reminders and patient profiles.",
    tech: ["React Native", "Firebase"],
    icon: "mobile",
    gradient: "from-brand-900 via-brand-800 to-brand-600",
  },
  {
    name: "Your Project Here",
    industry: "SaaS",
    category: "Web Platform",
    description: "Space for a SaaS product: subscriptions, team accounts and analytics.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    icon: "cloud",
    gradient: "from-brand-600 via-brand-500 to-gold-300",
    wide: true,
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Work"
            title={
              <>
                Projects built to <span className="text-gradient">perform.</span>
              </>
            }
            text="A selection of the kinds of products we design and build. Case studies coming soon."
          />
          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 font-semibold text-brand-800 transition-all hover:border-brand-800 hover:bg-brand-800 hover:text-white"
            >
              Start yours <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {projects.map((p, i) => (
            <Reveal key={i} delay={(i % 2) * 120} className={p.wide ? "md:col-span-3" : "md:col-span-2"}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-cream">
                {/* Preview (placeholder) */}
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient} sm:h-64`}>
                  <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-800">
                    Sample · Placeholder
                  </span>
                  {/* mock browser window */}
                  <div className="absolute inset-x-8 -bottom-6 top-14 rounded-t-2xl bg-white/95 p-4 shadow-2xl transition-transform duration-700 group-hover:-translate-y-3 sm:inset-x-12">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-red-300" />
                      <span className="size-2 rounded-full bg-gold-300" />
                      <span className="size-2 rounded-full bg-brand-300" />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                        <Icon name={p.icon} className="size-5" />
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="h-2.5 w-2/3 rounded-full bg-brand-100" />
                        <div className="h-2 w-1/3 rounded-full bg-brand-50" />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg bg-brand-50" />
                      <div className="h-12 rounded-lg bg-gold-100" />
                      <div className="h-12 rounded-lg bg-brand-50" />
                    </div>
                  </div>
                </div>

                <div className="relative bg-white p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700">{p.industry}</span>
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-gold-600">{p.category}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-900">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li key={t} className="rounded-md border border-brand-100 px-2 py-0.5 text-xs text-ink/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Details coming soon
                      <Icon name="arrowUpRight" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
