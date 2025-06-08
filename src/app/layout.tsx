// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Oswald } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";

const oswald = Oswald({
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
    <html lang="en" className={oswald.className}>
      <body className="antialiased" data-theme="light">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
