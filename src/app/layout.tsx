import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "Campeek | Moderní platforma pro dětské tábory",
  description:
    "Campeek pomáhá organizátorům táborů a kroužků s registracemi, platbami i komunikací. Přehledně. Chytře. Pro všechny organizátory táborů."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="bg-white">
      <body className={`${outfit.variable} font-outfit antialiased`}>{children}</body>
    </html>
  );
}
