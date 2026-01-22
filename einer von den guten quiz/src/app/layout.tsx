import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Einer von den Guten - Quiz Arena",
  description: "Das ultimative Quiz zum Podcast Einer von den Guten. Teste dein Wissen über die besten Memes, Zitate und Geschichten!",
  keywords: "Quiz, Podcast, Einer von den Guten, Huebi, Zeo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
