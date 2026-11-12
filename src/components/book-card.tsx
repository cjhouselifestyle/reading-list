"use client";

import Image from "next/link";
import { Book } from "@/types";
import { Check } from "lucide-react";

interface BookCardProps {
  book: Book;
  isSelected: boolean;
  onClick: () => void;
  isBundlePair?: boolean;
}

export function BookCard({ book, isSelected, onClick, isBundlePair }: BookCardProps) {
  const isCombinedBundle = isBundlePair || book.id === 2;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left bg-white border border-[#e5e1db] hover:border-[#b8a99b] rounded-2xl p-3 flex flex-col transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#b8a99b] cursor-pointer ${
        isSelected ? "ring-2 ring-[#3d7464] border-transparent" : ""
      }`}
    >
      {/* 封面區域 */}
      <div className="relative w-full aspect-[4/5] bg-[#efeee9] rounded-xl overflow-hidden mb-3 flex items-center justify-center">
        {book.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={book.cover.startsWith("http") ? book.cover : `/${book.cover}`}
            alt={book.name}
            loading="lazy"
            className="w-full h-full object-contain p-1 transition-transform group-hover:scale-105 duration-200"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#9e988f] p-4 text-center">
            <svg
              className="w-10 h-10 mb-1 stroke-current fill-none stroke-[1.2]"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <path d="M32 18C23 13 15 13 8 16v32c8-3 16-2 24 3 8-5 16-6 24-3V16c-8-3-16-2-24 2Z" />
              <path d="M32 18v33M13 24c5-1 10 0 14 2m-14 7c5-1 10 0 14 2m10-9c5-2 9-3 14-2m-14 11c5-2 9-3 14-2" />
            </svg>
            <span className="text-[10px] text-[#817b72]">封面確認中</span>
          </div>
        )}

        {/* 得獎標籤 */}
        {book.award && (
          <div className="absolute top-2 left-2 bg-[#655f57]/90 backdrop-blur-xs text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-xs">
            🏆 得獎
          </div>
        )}

        {/* 已加入標記 */}
        {isSelected && (
          <div className="absolute top-2 right-2 bg-[#3d7464] text-white p-1 rounded-full shadow">
            <Check className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      {/* 書名 */}
      <strong className="text-sm font-bold text-[#37332f] line-clamp-2 min-h-[2.5rem] leading-snug">
        {isCombinedBundle ? "誰吃掉了？＋藏在誰那兒呢？" : book.name}
      </strong>

      {/* 分類與狀態標籤 */}
      <div className="mt-1 flex flex-col gap-0.5">
        <span className="text-xs text-[#77716b] truncate">
          {isCombinedBundle ? "動物故事 · 找找看｜兩本合購組" : book.cats.join(" · ")}
        </span>
        {isSelected && (
          <span className="text-[11px] font-bold text-[#3d7464] mt-0.5 flex items-center gap-1">
            ✓ 已加入書單
          </span>
        )}
      </div>
    </button>
  );
}
