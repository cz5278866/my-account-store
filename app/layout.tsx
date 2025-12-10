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
  title: "Premium Digital Accounts Store | Telegram, X, AI Accounts Instant Delivery",
  description: "The #1 marketplace for aged Telegram accounts, verified X/Twitter badges, and SMM services. Anonymous crypto payment, instant email delivery, 24/7 support.",
  keywords: "buy telegram accounts, aged twitter accounts, buy chatgpt plus, smm panel, crypto payment",
  openGraph: {
    title: "Premium Digital Accounts Store | Telegram, X, AI Accounts Instant Delivery",
    description: "The #1 marketplace for aged Telegram accounts, verified X/Twitter badges, and SMM services. Anonymous crypto payment, instant email delivery, 24/7 support.",
    type: 'website',
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
