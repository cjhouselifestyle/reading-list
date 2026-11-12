"use client";

import { useEffect, useState } from "react";
import { GROUPBUY_URL } from "@/data/picture-books";
import { ShoppingBag, ExternalLink } from "lucide-react";

interface FloatingGroupbuyBtnProps {
  hasSelectedBooks?: boolean;
}

export function FloatingGroupbuyBtn({ hasSelectedBooks }: FloatingGroupbuyBtnProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 往下滾動超過 160px 時顯示懸浮按鈕
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="快速前往團購頁面"
      className={`fixed right-4 sm:right-6 z-40 transition-all duration-300 ease-out no-print ${
        hasSelectedBooks ? "bottom-20 sm:bottom-22" : "bottom-6 sm:bottom-8"
      }`}
    >
      <a
        href={GROUPBUY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#37332f] hover:bg-[#1f1d1a] text-white text-xs sm:text-sm font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 border border-white/20 cursor-pointer animate-subtle-float"
      >
        {/* 動態呼吸發光光暈 */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
        </span>

        <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
        <span className="tracking-wide">團購頁面</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
      </a>
    </aside>
  );
}
