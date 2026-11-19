import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const rowA = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS"];
const rowB = ["WordPress", "PHP", "React Native", "Flutter", "Python", "AI Integrations", "APIs", "Cloud Technologies"];

const dot = ["bg-brand-500", "bg-gold-400", "bg-brand-300", "bg-brand-700"];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee mask-fade-x overflow-hidden py-2">
      <ul
        className={`marquee-track flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loop.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-brand-100 bg-white px-6 py-4 font-display text-base font-semibold text-brand-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md sm:text-lg"
          >
            <span className={`size-2.5 rounded-full ${dot[i % dot.length]}`} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technologies"
          title={
            <>
              Built with tools trusted by <span className="text-gradient">modern teams.</span>
            </>
          }
          text="We choose the right stack for each project: proven, maintainable and ready to scale."
        />
      </div>
      <Reveal className="mt-14 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </Reveal>
    </section>
  );
}
