"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {t.timeline.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.7rem]">
            {t.timeline.title}
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {t.timeline.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="group grid gap-3 border-t border-line py-7 md:grid-cols-[140px_1fr] md:gap-10">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span className="font-display text-xl font-medium text-ink">
                    {item.year}
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
