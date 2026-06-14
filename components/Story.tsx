"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";

export function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-28">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <Portrait className="mb-8 max-w-xs" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.7rem]">
              {t.story.title}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-6">
          {t.story.paragraphs.map((paragraph, i) => (
            <Reveal as="div" key={i} delay={i * 80}>
              <p
                className={`leading-relaxed text-ink-soft ${
                  i === 0 ? "text-xl text-ink md:text-2xl md:leading-relaxed" : "text-lg"
                }`}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
