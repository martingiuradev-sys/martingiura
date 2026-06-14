"use client";

import { useEffect, useState } from "react";

const SRC = "/images/martin-giura.jpg";

/**
 * Renders Martín's portrait from /public/images/martin-giura.jpg.
 * Until that file is added, it shows an elegant monogram placeholder,
 * so the layout never breaks. We probe the image after mount (rather than
 * relying on <img onError>) because the error event fires before React
 * hydrates and would otherwise be missed.
 */
export function Portrait({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.src = SRC;
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-paper-2 shadow-soft ${className}`}
    >
      {loaded ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={SRC} alt="Martín Giura" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-paper-2 to-paper">
          <span className="font-display text-6xl font-medium text-accent/70">MG</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Martín Giura</span>
        </div>
      )}
    </div>
  );
}
