import type { Metadata } from "next";
// import { ClerkProvider } from '@clerk/nextjs'; // 如果您之前加了 Clerk，请取消注释
import { LanguageProvider } from "@/components/LanguageProvider"; // 引入我们刚写的文件
import "./globals.css";

export const metadata: Metadata = {
  title: "出海账号购买 | 全球优质账号交易平台",
  description: "提供 Telegram, Twitter, TikTok, Instagram 优质老号、粉丝号。自动发货，售后无忧。",
  icons: {
    icon: '/', // 后面您可以换成自己的 logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider> // 如果有 Clerk，保留这个
    <html lang="zh">
      <body className="antialiased">
        {/* 👇 关键：在这里包裹 LanguageProvider */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}