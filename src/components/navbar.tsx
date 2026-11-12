"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUPBUY_URL } from "@/data/picture-books";
import { ShoppingBag, ExternalLink, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 切換頁面時自動關閉漢堡選單
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 選單開啟時鎖定背景捲動
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "經典繪本", href: "/", active: pathname === "/" },
    { name: "玩具選物", href: "/toys", badge: "規劃中", active: pathname === "/toys" },
  ];

  return (
    <header className="border-b border-[#e5e1db] bg-[#f7f5f1]/95 backdrop-blur-md sticky top-0 z-50 transition-all shadow-xs pt-[env(safe-area-inset-top)]">
      <div className="max-w-4xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* 左側 Logo 品牌 */}
        <Link href="/" className="flex flex-col">
          <span className="font-bold tracking-wider text-base sm:text-lg text-[#37332f] whitespace-nowrap leading-tight">
            CJ House
          </span>
          <span className="text-[10px] text-[#77716b] tracking-widest font-medium">
            LIFESTYLE & READING
          </span>
        </Link>

        {/* 電腦版導覽列 (sm 以上顯示) */}
        <div className="hidden sm:flex items-center gap-4">
          <nav className="flex items-center gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  item.active
                    ? "bg-[#655f57] text-white shadow-xs"
                    : "text-[#77716b] hover:bg-[#e8e4dc] hover:text-[#37332f]"
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] opacity-75 px-1.5 py-0.5 rounded bg-black/10">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* 團購按鈕 */}
          <a
            href={GROUPBUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#37332f] hover:bg-[#1f1d1a] text-white transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
            <span>團購頁面</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* 手機版右側按鈕區 (sm 以下顯示：快速團購 + 漢堡按鈕) */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={GROUPBUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-[#37332f] text-white shadow-xs whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
            <span>團購</span>
          </a>

          {/* 漢堡按鈕 */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-xl bg-white border border-[#e5e1db] flex items-center justify-center text-[#37332f] hover:bg-[#e8e4dc] transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "關閉選單" : "打開選單"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* 手機版展開抽屜式選單 (Mobile Drawer Overlay) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top))] bottom-0 bg-black/50 backdrop-blur-xs z-50 animate-in fade-in duration-200">
          <div className="bg-[#f7f5f1] border-b border-[#e5e1db] p-5 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* 導覽連結 */}
            <div className="space-y-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                    item.active
                      ? "bg-[#655f57] text-white shadow-sm"
                      : "bg-white text-[#37332f] border border-[#e5e1db] hover:border-[#b8a99b]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/10">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* 團購頁面大按鈕 */}
            <a
              href={GROUPBUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full p-3.5 rounded-2xl bg-[#37332f] text-white font-bold text-sm shadow-md hover:bg-[#1f1d1a] transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span>前往官方團購頁面</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* 底部社群標記 */}
            <div className="pt-2 border-t border-[#e5e1db] flex items-center justify-between text-xs text-[#77716b]">
              <span className="font-medium">CJ House Lifestyle</span>
              <a
                href="https://www.instagram.com/cjhouse.lifestyle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#37332f] font-semibold hover:underline"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>＠cjhouse.lifestyle</span>
              </a>
            </div>
          </div>

          {/* 點擊半透明背景關閉 */}
          <div
            className="h-full w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
