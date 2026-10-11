import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Ruan Rachid Advogado",
  title: "Ruan Rachid Advogado | Bancário e Previdenciário em Viçosa",
  description: "Defesa do consumidor em questões bancárias e orientação em Direito Previdenciário, Trabalhista e Cível. Ruan Coelho Rachid, advogado em Viçosa e região.",
  keywords: ["Ruan Rachid", "Ruan Coelho Rachid", "advogado em Viçosa", "direito bancário", "direito previdenciário", "direito trabalhista", "direito cível", "descontos indevidos"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Ruan Rachid Advogado | Viçosa e região",
    description: "Orientação em Direito Bancário, Previdenciário, Trabalhista e Cível, com atenção ao seu caso e comunicação clara.",
    siteName: "Ruan Rachid Advogado",
  },
  twitter: {
    card: "summary",
    title: "Ruan Rachid Advogado | Viçosa e região",
    description: "Direito Bancário, Previdenciário, Trabalhista e Cível. Atendimento em Viçosa, Minas Gerais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
