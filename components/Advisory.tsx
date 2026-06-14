"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function Advisory() {
  const { t } = useLanguage();

  return (
    <section id="advisory" className="scroll-mt-20 border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
            {t.advisory.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-paper md:text-[2.7rem]">
            {t.advisory.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/70">
            {t.advisory.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {t.advisory.roles.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 100}
              className="bg-ink px-7 py-9 md:px-8 md:py-10"
            >
              <h3 className="font-display text-2xl font-medium text-paper">
                {role.title}
              </h3>
              <p className="mt-4 leading-relaxed text-paper/70">{role.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
