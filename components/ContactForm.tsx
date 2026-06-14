"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const { t, lang } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = f.required;
    if (!email) nextErrors.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = f.invalidEmail;
    if (!message) nextErrors.message = f.required;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!WEB3FORMS_KEY) {
      // No key configured yet — surface a clear error instead of failing silently.
      console.warn("NEXT_PUBLIC_WEB3FORMS_KEY is not set. See .env.example.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Nuevo contacto desde martingiura.com — ${name}`);
    data.append("from_name", "martingiura.com");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-2xl border border-line bg-card p-8 text-center shadow-soft">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-5 text-lg text-ink">{f.success}</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto mt-10 max-w-xl space-y-4 text-left"
    >
      {/* Honeypot for spam bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            {f.name}
          </label>
          <input id="name" name="name" type="text" placeholder={f.name} className={fieldClass} />
          {errors.name && <p className="mt-1.5 text-sm text-accent">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            {f.email}
          </label>
          <input id="email" name="email" type="email" placeholder={f.email} className={fieldClass} />
          {errors.email && <p className="mt-1.5 text-sm text-accent">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="sr-only">
          {f.company}
        </label>
        <input id="company" name="company" type="text" placeholder={f.company} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={f.message}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-sm text-accent">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-accent">{f.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? f.sending : f.submit}
        {status !== "sending" && <span aria-hidden>→</span>}
      </button>

      <p className="pt-2 text-sm text-muted">
        {t.contact.linkedinText}{" "}
        <a
          href={t.contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
          hrefLang={lang}
        >
          {t.contact.linkedinCta}
        </a>
      </p>
    </form>
  );
}
