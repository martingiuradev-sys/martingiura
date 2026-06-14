"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 grain-bg border-t border-line bg-paper-2/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {t.contact.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t.contact.text}
          </p>

          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
