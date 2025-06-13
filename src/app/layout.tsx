// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Funnel_Sans } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";

const funnel_sans = Funnel_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Dashboard | Real-time media monitoring",
  description: "Created by Riwaj Prasai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnel_sans.className} antialiased h-full`}>
      <body data-theme="light " className="h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
