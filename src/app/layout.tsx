import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "經典繪本｜分齡讀出不同樂趣 - CJ House Lifestyle",
  description: "從觀察指認、分齡共讀，到想像與表達。挑選適合親子共讀的經典繪本書單。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased min-h-screen flex flex-col bg-[#f7f5f1] text-[#37332f]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#e5e1db] py-8 text-center text-xs text-[#77716b] no-print">
          <p>© 2026 CJ House Lifestyle. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
