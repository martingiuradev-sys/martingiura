"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.7rem]">
            {t.services.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {t.services.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.services.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 100}
              className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 md:p-8"
            >
              <span className="font-display text-2xl font-medium text-accent/40">
                {card.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{card.description}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-ink-soft">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
