"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Awards() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {t.awards.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.7rem]">
            {t.awards.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.awards.items.map((item, i) => (
            <Reveal
              key={`${item.title}-${i}`}
              delay={i * 70}
              className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-line-strong"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-medium leading-snug text-ink">
                  {item.title}
                </h3>
                <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{item.org}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
