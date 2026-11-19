"use client";

import { useState, type FormEvent } from "react";
import { allServices } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";

const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,000", "$7,000 – $15,000", "$15,000+", "Not sure yet"];

const field =
  "peer w-full rounded-2xl border border-brand-100 bg-cream px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-ink/40 hover:border-brand-200 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10";
const label = "mb-2 block text-sm font-semibold text-brand-900";

type Errors = Partial<Record<"name" | "email" | "service" | "details", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (v("name").length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = "Please enter a valid email address.";
    if (!v("service")) next.service = "Please choose a service.";
    if (v("details").length < 10) next.details = "Please tell us a little more about your project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = ["Hello Treeland Digital, I'd like to start a project.", "", `Name: ${v("name")}`, `Email: ${v("email")}`];
    if (v("company")) lines.push(`Company: ${v("company")}`);
    lines.push(`Service: ${v("service")}`);
    if (v("budget")) lines.push(`Budget: ${v("budget")}`);
    lines.push("", `Project details: ${v("details")}`);
    const message = lines.join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Full Name <span className="text-gold-500">*</span>
        </label>
        <input id="name" name="name" autoComplete="name" placeholder="Your full name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        {errors.name && <p id="name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email Address <span className="text-gold-500">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {errors.email && <p id="email-err" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className={label}>Company Name</label>
        <input id="company" name="company" autoComplete="organization" placeholder="Your company" className={field} />
      </div>

      <div>
        <label htmlFor="service" className={label}>
          Service Required <span className="text-gold-500">*</span>
        </label>
        <select id="service" name="service" defaultValue="" className={`${field} appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230b4a3f' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")" }} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined}>
          <option value="" disabled>
            Select a service
          </option>
          {allServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
          <option>Other / Not sure</option>
        </select>
        {errors.service && <p id="service-err" className="mt-1.5 text-sm text-red-600">{errors.service}</p>}
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={label}>Project Budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <label key={b} className="cursor-pointer">
              <input type="radio" name="budget" value={b} className="peer sr-only" />
              <span className="inline-block rounded-full border border-brand-100 bg-cream px-4 py-2 text-sm font-medium text-ink/75 transition-all hover:border-brand-300 peer-checked:border-brand-700 peer-checked:bg-brand-800 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/20">
                {b}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="details" className={label}>
          Project Details <span className="text-gold-500">*</span>
        </label>
        <textarea id="details" name="details" rows={5} placeholder="Tell us about your goals, timeline and anything else we should know…" className={`${field} resize-y`} aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-err" : undefined} />
        {errors.details && <p id="details-err" className="mt-1.5 text-sm text-red-600">{errors.details}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Your enquiry opens in WhatsApp, ready to send to our team.</p>
        <button
          type="submit"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-800 px-7 py-4 font-semibold text-white shadow-xl shadow-brand-900/25 transition-all hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-600 to-gold-500 transition-transform duration-500 group-hover:translate-x-0" />
          <span className="relative">Send Enquiry</span>
          <Icon name="send" className="relative size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {sent && (
        <p role="status" className="flex items-center gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800 sm:col-span-2">
          <Icon name="check" className="size-5" strokeWidth={2.4} />
          Thanks! WhatsApp has opened with your details. Just press send and we&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}
