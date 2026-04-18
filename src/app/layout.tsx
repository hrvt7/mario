import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stefri.vercel.app"),
  title: "Stefri — Minőségi húskészítmények Ausztriából | Házhozszállítás",
  description:
    "Prémium ausztriai felvágottak, virslik, szalámik, sajtok és gyorsfagyasztott termékek. Mozgó boltunk közel 100 településre szállít. +36 20 450 9387",
  keywords: [
    "osztrák felvágott",
    "minőségi húskészítmények",
    "mozgó bolt",
    "házhozszállítás",
    "prémium hús",
    "virsli",
    "szalámi",
    "stefri",
  ],
  openGraph: {
    title: "Stefri — Minőségi húskészítmények Ausztriából",
    description:
      "Heti két alkalommal közvetlenül a gyártótól. Mozgó boltunk házhoz viszi a legjobb felvágottakat.",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Stefri — Minőségi húskészítmények Ausztriából",
              description:
                "Prémium osztrák húskészítmények, mozgó bolt szolgáltatással közel 100 településen.",
              telephone: "+36 20 450 9387",
              email: "minosegifelvagottak@gmail.com",
              url: "https://stefri.vercel.app",
              sameAs: ["https://www.facebook.com/felvagott"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "HU",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
