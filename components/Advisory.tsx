"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Advisory() {
  const { t } = useLanguage();

  return (
    <section
      id="advisory"
      className="relative scroll-mt-20 overflow-hidden border-t border-line bg-paper-2"
    >
      {/* cyan spotlight to set this band apart in the all-dark page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(700px_300px_at_50%_-40%,rgba(34,211,238,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {t.advisory.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-[2.7rem]">
            {t.advisory.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {t.advisory.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {t.advisory.roles.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 100}
              className="bg-card px-7 py-9 md:px-8 md:py-10"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                {role.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{role.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
