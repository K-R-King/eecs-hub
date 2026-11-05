import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import SuiteLinks from "@/components/SuiteLinks";
import { HOME_URL } from "@/lib/suite";
import "./globals.css";

const SITE_URL = HOME_URL;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "UC Berkeley EECS Hub",
  description: "Free tools for UC Berkeley EECS students: plan your degree, check prerequisites, find electives, and every important link.",
  openGraph: {
    title: "UC Berkeley EECS Hub",
    description: "Free tools for UC Berkeley EECS students: plan your degree, check prerequisites, find electives, and every important link.",
    url: "/",
    siteName: "EECS Hub",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SuiteLinks />
        <Analytics />
      </body>
    </html>
  );
}
