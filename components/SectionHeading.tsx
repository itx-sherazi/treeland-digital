import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark
            ? "border-white/15 bg-white/5 text-gold-300"
            : "border-brand-200 bg-brand-50 text-brand-700"
        }`}
      >
        <span className={`size-1.5 rounded-full ${dark ? "bg-gold-400" : "bg-brand-500"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
