import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRUST — Платформа доверия Казахстана",
  description:
    "TRUST — единая платформа проверенных специалистов, компаний, магазинов, недвижимости, автомобилей, обучения и рекламных площадок.",
  keywords: [
    "trust",
    "казахстан",
    "услуги",
    "специалисты",
    "компании",
    "автомобили",
    "недвижимость",
    "мебель",
    "обучение",
    "реклама",
  ],
  authors: [{ name: "TRUST Team" }],
  creator: "TRUST",
  publisher: "TRUST",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TRUST",
    description: "Платформа проверенных специалистов и компаний.",
    type: "website",
    locale: "ru_RU",
    siteName: "TRUST",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
