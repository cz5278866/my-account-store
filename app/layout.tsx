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
  title: "账号商店 | Telegram老号_推特蓝标号_ChatGPT Plus成品号自动发货",
  description: "全网最稳的数字资产交易平台。提供Telegram(TG)直登号、Twitter(X)蓝标认证号、ChatGPT Plus独享号。支持USDT/支付宝付款，24小时自动发货，售后无忧。",
  keywords: "购买TG号, Telegram老号, 推特账号购买, ChatGPT Plus代充, 谷歌账号购买, 发卡网",
  openGraph: {
    title: "账号商店 | Telegram老号_推特蓝标号_ChatGPT Plus成品号自动发货",
    description: "全网最稳的数字资产交易平台。提供Telegram(TG)直登号、Twitter(X)蓝标认证号、ChatGPT Plus独享号。支持USDT/支付宝付款，24小时自动发货，售后无忧。",
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
