import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "search", title: "Discovery", text: "Understand the client's business, goals, audience, requirements, and challenges." },
  { icon: "compass", title: "Strategy", text: "Develop a strategy, project roadmap, technical approach, and solution architecture." },
  { icon: "pen", title: "Design", text: "Create modern UI/UX designs and visual concepts." },
  { icon: "terminal", title: "Development", text: "Build the project using modern technologies and development practices." },
  { icon: "rocket", title: "Testing & Launch", text: "Test, optimize, deploy, and launch the final solution." },
  { icon: "trending", title: "Growth & Support", text: "Continue improving, maintaining, and scaling the solution." },
];

export function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid-dark mask-fade" aria-hidden="true" />
      <div className="absolute -left-40 top-10 -z-10 size-[30rem] rounded-full bg-brand-500/25 blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 -z-10 size-[28rem] rounded-full bg-gold-500/15 blur-3xl animate-blob [animation-delay:-8s]" aria-hidden="true" />

      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="Our Process"
          title={
            <>
              From first call to <span className="text-gold-300">continuous growth.</span>
            </>
          }
          text="A clear, proven workflow that keeps every project on track, on budget and aligned with your goals."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 120} className="relative">
              <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/[0.08] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <Icon name={s.icon} className="size-7" />
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-gold-400/0 transition-all duration-500 group-hover:ring-gold-400/60" />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-white/10 transition-colors duration-500 group-hover:text-gold-400/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{s.text}</p>
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-400 to-gold-400 transition-transform duration-700 group-hover:scale-x-100"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
