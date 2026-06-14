import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://martingiura.com"),
  title: "Martín Giura — Founder, Advisor & Fractional CRO",
  description:
    "Tecnología y ventas para reescribir el sistema operativo de las empresas de América Latina. Infraestructura de revenue, prospección B2B y advisory.",
  keywords: [
    "Martín Giura",
    "Fractional CRO",
    "Advisor",
    "Prospecta",
    "woOw!",
    "Piio",
    "revenue infrastructure",
    "prospección B2B",
    "go-to-market",
    "Silicon Valley",
  ],
  authors: [{ name: "Martín Giura" }],
  openGraph: {
    title: "Martín Giura — Founder, Advisor & Fractional CRO",
    description:
      "Tecnología y ventas para reescribir el sistema operativo de las empresas de América Latina.",
    type: "website",
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Giura — Founder, Advisor & Fractional CRO",
    description:
      "Tecnología y ventas para reescribir el sistema operativo de las empresas de América Latina.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
