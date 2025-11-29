import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "LUXOR9 Orchestration Layer",
  description:
    "Interactive blueprint for the Luxor9 autonomous orchestration stack."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plexSans.className}>
      <body>{children}</body>
    </html>
  );
}
