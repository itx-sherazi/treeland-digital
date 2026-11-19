import { Icon, type IconName } from "./Icon";

const chips: { icon: IconName; label: string; pos: string; delay: string }[] = [
  { icon: "code", label: "Web Apps", pos: "left-[-6%] top-[8%]", delay: "0s" },
  { icon: "ai", label: "AI Automation", pos: "right-[-4%] top-[30%]", delay: "1.2s" },
  { icon: "seo", label: "SEO Growth", pos: "left-[-2%] bottom-[14%]", delay: "2.1s" },
  { icon: "mobile", label: "Mobile Apps", pos: "right-[2%] bottom-[-4%]", delay: "0.6s" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade" aria-hidden="true" />
      <div
        className="absolute -top-32 -left-32 -z-10 size-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-[-10rem] -z-10 size-[30rem] rounded-full bg-gold-200/60 blur-3xl animate-blob [animation-delay:-6s]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12rem] left-1/3 -z-10 size-[26rem] rounded-full bg-brand-200/50 blur-3xl animate-blob [animation-delay:-11s]"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div
            className="enter inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur sm:text-sm"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand-400 animate-pulse-ring" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
            </span>
            Full-Service Digital Agency · Lahore, Pakistan
          </div>

          <h1
            className="enter mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-brand-900 text-balance sm:text-6xl lg:text-[4.4rem]"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            We Build Digital Experiences That <span className="text-gradient">Grow Businesses.</span>
          </h1>

          <p
            className="enter mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            Treeland Digital helps businesses turn ideas into powerful digital solutions through web
            development, software, marketing, automation, and creative technology.
          </p>

          <div
            className="enter mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            style={{ "--delay": "360ms" } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-800 px-7 py-4 font-semibold text-white shadow-xl shadow-brand-900/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-900/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-600 via-brand-500 to-gold-500 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Let&apos;s Build Your Project</span>
              <Icon name="arrow" className="relative size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white/80 px-7 py-4 font-semibold text-brand-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white"
            >
              Explore Our Services
            </a>
          </div>

          <ul
            className="enter mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-ink/70 lg:justify-start"
            style={{ "--delay": "480ms" } as React.CSSProperties}
          >
            {["12 Digital Services", "Custom-Built Solutions", "Long-Term Support"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="size-3.5" strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div
          className="enter relative mx-auto w-full max-w-[560px]"
          style={{ "--delay": "300ms" } as React.CSSProperties}
          aria-hidden="true"
        >
          {/* rotating ring */}
          <div className="absolute inset-[-6%] rounded-full border border-dashed border-brand-300/60 animate-spin-slow" />
          <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-brand-100/70 via-white/40 to-gold-100/70 blur-sm" />

          {/* Dashboard card */}
          <div className="relative mx-auto w-[88%] rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_30px_80px_-20px_rgb(6_58_50/0.35)] backdrop-blur-xl animate-float-slow sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-300" />
                <span className="size-2.5 rounded-full bg-gold-300" />
                <span className="size-2.5 rounded-full bg-brand-300" />
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold text-brand-700">
                Live Dashboard
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "Traffic", v: "+148%" },
                { k: "Leads", v: "+92%" },
                { k: "Speed", v: "98/100" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-cream p-3">
                  <p className="text-[10px] font-medium text-muted sm:text-xs">{s.k}</p>
                  <p className="mt-1 font-display text-sm font-bold text-brand-800 sm:text-lg">{s.v}</p>
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="mt-4 rounded-2xl bg-gradient-to-b from-brand-50 to-white p-4">
              <div className="flex items-center justify-between text-[11px] text-muted">
                <span className="font-semibold text-brand-800">Growth Overview</span>
                <span>Sample data</span>
              </div>
              <svg viewBox="0 0 300 110" className="mt-3 h-24 w-full sm:h-28">
                <defs>
                  <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#1f8a45" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#1f8a45" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hero-line" x1="0" x2="1">
                    <stop offset="0" stopColor="#157238" />
                    <stop offset="1" stopColor="#e0b43a" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 95 C30 90 45 70 75 72 S120 50 150 55 S200 30 225 32 S270 10 300 8 L300 110 L0 110Z"
                  fill="url(#hero-area)"
                />
                <path
                  d="M0 95 C30 90 45 70 75 72 S120 50 150 55 S200 30 225 32 S270 10 300 8"
                  fill="none"
                  stroke="url(#hero-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="420"
                  strokeDashoffset="420"
                >
                  <animate attributeName="stroke-dashoffset" from="420" to="0" dur="2.2s" begin="0.6s" fill="freeze" />
                </path>
                <circle cx="300" cy="8" r="4" fill="#e0b43a">
                  <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <div className="mt-4 flex items-end gap-1.5">
              {[40, 65, 50, 80, 60, 92, 75, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-300"
                  style={{ height: `${h * 0.42}px`, opacity: 0.5 + i * 0.06 }}
                />
              ))}
            </div>
          </div>

          {/* Floating chips */}
          {chips.map((c) => (
            <div
              key={c.label}
              className={`absolute ${c.pos} hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-xl shadow-brand-900/10 backdrop-blur animate-float min-[420px]:flex`}
              style={{ animationDelay: c.delay }}
            >
              <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                <Icon name={c.icon} className="size-4" />
              </span>
              <span className="text-xs font-semibold text-brand-900 sm:text-sm">{c.label}</span>
            </div>
          ))}

          {/* Gold sparkle */}
          <div className="absolute -top-4 right-[18%] grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-white shadow-lg shadow-gold-500/30 animate-float [animation-delay:-3s]">
            <Icon name="sparkle" className="size-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
