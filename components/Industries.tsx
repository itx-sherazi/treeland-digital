import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const industries: { icon: IconName; name: string }[] = [
  { icon: "health", name: "Healthcare" },
  { icon: "cart", name: "E-commerce" },
  { icon: "home", name: "Real Estate" },
  { icon: "book", name: "Education" },
  { icon: "cloud", name: "SaaS" },
  { icon: "cpu", name: "Technology" },
  { icon: "plane", name: "Travel & Hospitality" },
  { icon: "briefcase", name: "Finance & Professional Services" },
  { icon: "rocket", name: "Startups" },
  { icon: "store", name: "Small & Medium Businesses" },
];

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-100/60 to-gold-100/60 blur-3xl" aria-hidden="true" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Digital solutions for <span className="text-gradient">every industry.</span>
            </>
          }
          text="Whatever your sector, we understand that great digital products start with understanding your customers."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.name} delay={(i % 5) * 70} variant="zoom">
              <div className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-brand-100 bg-white/80 px-4 py-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-700 hover:bg-brand-800 hover:shadow-[0_24px_50px_-20px_rgb(6_58_50/0.5)]">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-gold-100 text-brand-700 transition-all duration-500 group-hover:scale-110 group-hover:from-white/10 group-hover:to-white/5 group-hover:text-gold-300">
                  <Icon name={ind.icon} className="size-7" />
                </span>
                <span className="font-display text-sm font-bold text-brand-900 transition-colors group-hover:text-white sm:text-base">
                  {ind.name}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
