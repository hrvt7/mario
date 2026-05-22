import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mario.vercel.app"),
  title: "MÁRIÓ — Kerítésépítés & Csúszókapuk | Profi kivitelezés",
  description:
    "Kerítésépítés, csúszókapuk és nyílókapuk profi kivitelezésben. Táblás, drótfonatos és kovácsoltvas kerítések. Online árkalkulátor — kérjen azonnali árajánlatot!",
  keywords: [
    "kerítésépítés",
    "csúszókapu",
    "nyílókapu",
    "táblás kerítés",
    "drótfonatos kerítés",
    "kovácsoltvas kerítés",
    "kapuautomatika",
  ],
  openGraph: {
    title: "MÁRIÓ — Kerítésépítés & Csúszókapuk",
    description:
      "Profi kerítés- és kapukivitelezés. Számolja ki online a várható árat néhány kattintással.",
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
              "@type": "GeneralContractor",
              name: "MÁRIÓ Kerítésépítés",
              description:
                "Kerítésépítés, csúszókapuk és nyílókapuk profi kivitelezésben.",
              telephone: "+36 30 000 0000",
              areaServed: "Magyarország",
              url: "https://mario.vercel.app",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
