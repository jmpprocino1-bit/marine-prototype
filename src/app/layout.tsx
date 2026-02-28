import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://marine-prototype.vercel.app"),
  title:
    "East Coast Offshore Performance Marine | Custom Painting, Engine Repair & More — Ocean City, MD",
  description:
    "25+ years of marine excellence. Custom painting, graphics, engine rebuilds, fiberglass repair, and detailing for high performance boats. Serving the mid-Atlantic from Ocean City, MD.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "East Coast Offshore Performance Marine",
    description:
      "Custom painting, engine rebuilds, fiberglass repair, and more. 25+ years serving high performance boats across the mid-Atlantic.",
    url: "https://marine-prototype.vercel.app",
    siteName: "East Coast Offshore Performance Marine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East Coast Offshore Performance Marine",
    description:
      "Custom painting, engine rebuilds, fiberglass repair, and more. 25+ years serving high performance boats across the mid-Atlantic.",
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
        <Analytics />
      </body>
    </html>
  );
}
