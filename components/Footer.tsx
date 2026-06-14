"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-medium text-ink">Martín Giura</p>
          <p className="text-sm text-muted">{t.footer.tagline}</p>
        </div>
        <p className="text-xs text-muted">
          © {year} Martín Giura. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
