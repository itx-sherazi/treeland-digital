import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars: { icon: IconName; title: string; text: string; tone: string }[] = [
  { icon: "cpu", title: "Technology", text: "Modern stacks that are fast, secure and built to scale.", tone: "from-brand-600 to-brand-400" },
  { icon: "pen", title: "Creativity", text: "Design that makes your brand memorable and easy to trust.", tone: "from-gold-500 to-gold-300" },
  { icon: "target", title: "Strategy", text: "Every decision tied to a clear business outcome.", tone: "from-brand-800 to-brand-600" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-y-0 right-0 -z-0 hidden w-1/2 bg-grid mask-fade lg:block" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Treeland Digital"
            title={
              <>
                Technology, Creativity &amp; Strategy — <span className="text-gradient">Working Together.</span>
              </>
            }
          />
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Treeland Digital combines technology, creativity, and strategic thinking to help businesses build
              meaningful digital experiences.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From websites and software applications to marketing, automation, and digital transformation, we help
              businesses turn ideas into scalable solutions.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
            {["Innovate", "Grow", "Connect"].map((w, i) => (
              <span
                key={w}
                className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 font-display text-sm font-bold text-brand-800"
              >
                <span className={`size-2 rounded-full ${i === 1 ? "bg-gold-400" : "bg-brand-500"}`} />
                {w}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Visual: three interlocking pillars */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-200 animate-spin-slow" aria-hidden="true" />
          <div className="relative grid gap-5">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                variant="right"
                delay={i * 140}
                className={i === 1 ? "sm:ml-16" : i === 2 ? "sm:ml-8" : ""}
              >
                <div className="group flex items-center gap-5 rounded-3xl border border-brand-100 bg-white/90 p-5 shadow-[0_20px_50px_-25px_rgb(6_58_50/0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgb(6_58_50/0.4)] sm:p-6">
                  <span
                    className={`grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${p.tone} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105`}
                  >
                    <Icon name={p.icon} className="size-8" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-900">{p.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
