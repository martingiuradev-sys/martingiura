"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {t.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="bg-card px-6 py-8 md:px-8 md:py-10"
          >
            <div className="font-display text-4xl font-medium tracking-tight text-accent md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 text-sm leading-snug text-ink-soft">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
