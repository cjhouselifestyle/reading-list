"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUPBUY_URL } from "@/data/picture-books";
import { ShoppingBag, ExternalLink } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "經典繪本", href: "/", active: pathname === "/" },
    { name: "玩具選物", href: "/toys", badge: "規劃中", active: pathname === "/toys" },
  ];

  return (
    <header className="border-b border-[#e5e1db] bg-[#f7f5f1]/95 backdrop-blur-md sticky top-0 z-40 transition-all shadow-xs">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex flex-col shrink-0">
          <span className="font-bold tracking-wider text-base text-[#37332f]">
            CJ House
          </span>
          <span className="text-[10px] text-[#77716b] -mt-1 tracking-widest">
            LIFESTYLE & READING
          </span>
        </Link>

        {/* 頁面導航 */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                item.active
                  ? "bg-[#655f57] text-white shadow-xs"
                  : "text-[#77716b] hover:bg-[#e8e4dc] hover:text-[#37332f]"
              }`}
            >
              {item.name}
              {item.badge && (
                <span className="text-[10px] opacity-75 px-1 py-0.2 rounded bg-black/10">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* 團購入口快捷按鈕（凸顯樣式） */}
        <a
          href={GROUPBUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#37332f] hover:bg-[#1f1d1a] text-white transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden xs:inline">團購頁面</span>
          <span className="xs:hidden">團購</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>
    </header>
  );
}
