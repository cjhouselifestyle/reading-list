"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUPBUY_URL } from "@/data/picture-books";
import { ExternalLink } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "經典繪本", href: "/", active: pathname === "/" },
    { name: "玩具選物", href: "/toys", badge: "規劃中", active: pathname === "/toys" },
    { name: "其他出版社", href: "/publishers", badge: "規劃中", active: pathname === "/publishers" },
  ];

  return (
    <header className="border-b border-[#e5e1db] bg-[#f7f5f1]/90 backdrop-blur sticky top-0 z-30 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-bold tracking-wider text-base text-[#37332f]">
            CJ House
          </span>
          <span className="text-[10px] text-[#77716b] -mt-1 tracking-widest">
            LIFESTYLE & READING
          </span>
        </Link>

        {/* 頁面導航（三大主題） */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                item.active
                  ? "bg-[#655f57] text-white shadow-sm"
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

        {/* 團購入口快捷按鈕 */}
        <a
          href={GROUPBUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#655f57] transition-all shadow-sm"
        >
          <span>團購頁面</span>
          <ExternalLink className="w-3 h-3 text-[#77716b]" />
        </a>
      </div>
    </header>
  );
}
