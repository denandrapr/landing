import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denandra & Bella",
  description: "The Wedding of Bella & Denandra,\nSabtu, 20 September 2025",
  openGraph: {
    title: "Denandra & Bella",
    description: "The Wedding of Bella & Denandra,\nSabtu, 20 September 2025",
    url: "https://nikah.andbella.site",
    siteName: "Denandra & Bella",
    images: [
      {
        url: "https://nikah.andbella.site/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Bella & ..."
      }
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
