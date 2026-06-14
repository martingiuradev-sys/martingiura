"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="grain-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="max-w-4xl">
          <p className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong/70 bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-[4.4rem]">
            {t.hero.titleLead}{" "}
            <span className="text-accent">{t.hero.titleEmphasis}</span>{" "}
            {t.hero.titleTail}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-paper shadow-[0_12px_34px_-10px_rgba(245,158,11,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-cta-soft"
            >
              {t.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-card"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-10 text-sm text-muted">{t.hero.location}</p>
        </div>
      </div>
    </section>
  );
}
