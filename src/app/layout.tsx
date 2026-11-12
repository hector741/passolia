import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import { Shell } from "@/components/shell";
import { StoreProvider } from "@/modules/organizer/store";
import "./globals.css";

const manrope = localFont({
  src: "../fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Passólia",
  description: "Organização para a vida cotidiana.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <StoreProvider>
          <Shell>{children}</Shell>
        </StoreProvider>
      </body>
    </html>
  );
}
