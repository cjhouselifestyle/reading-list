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

          {/* 電腦版團購按鈕 */}
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

        {/* 手機版右側：僅保留極簡漢堡按鈕 (完全無多餘按鈕) */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-white border border-[#e5e1db] flex items-center justify-center text-[#37332f] hover:bg-[#e8e4dc] transition-colors focus:outline-none shadow-xs"
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

      {/* 手機版滿版遮罩選單 (Full Mask Drawer) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top))] bottom-0 z-50 flex flex-col">
          {/* 上半部：純淨導覽選單卡片 */}
          <div className="bg-[#f7f5f1] border-b border-[#e5e1db] p-5 shadow-2xl space-y-2 animate-in slide-in-from-top-3 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-bold transition-all ${
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

          {/* 下半部：深色半透明遮罩 (Mask)，點擊即可關閉 */}
          <div
            className="flex-1 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
