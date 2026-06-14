"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function ProofBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-paper-2/50">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
          {t.proof.label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {t.proof.logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-xl font-medium tracking-tight text-ink-soft/80 transition-colors hover:text-ink md:text-2xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
