import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import PlausibleProvider from 'next-plausible'
import "./globals.css";

import Footer from "@/components/Footer";

const inter = Inter({
  weight: ['400', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Full Stack Next.js Course",
  description: "Learn how to build a full stack Next.js 15 and React 19 course with authentication, database management, transactional emails, and payments.",
  openGraph: {
    images: ['/images/full-stack-nextjs-social-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="fullstacknext.dev" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen grid grid-rows-[1fr_auto]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
