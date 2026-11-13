"use client";

import { Sparkles, Check, ChevronRight } from "lucide-react";

interface OllieSectionProps {
  isActive: boolean;
  onToggleFilter: () => void;
  onSelectCategory?: (category: string) => void;
  onAddAllToCart?: () => void;
}

export function OllieSection({
  isActive,
  onToggleFilter,
}: OllieSectionProps) {
  const collections = [
    {
      name: "五味太郎系列",
      badge: "10 本",
      desc: "小金魚逃走了、鱷魚怕怕、窗外送來的禮物⋯",
      color: "bg-[#fff7ed] border-[#fed7aa] text-[#c2410c]",
    },
    {
      name: "Eric Carle 系列",
      badge: "10 本",
      desc: "好餓的毛毛蟲、棕色的熊、從頭動到腳⋯",
      color: "bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]",
    },
    {
      name: "《小老鼠找新家》",
      badge: "單本精選",
      desc: "大蘋果與大小洞洞的空間冒險",
      color: "bg-[#faf5ff] border-[#e9d5ff] text-[#7e22ce]",
    },
    {
      name: "《親愛的動物園》",
      badge: "單本精選",
      desc: "經典翻頁互動、認識動物朋友",
      color: "bg-[#eff6ff] border-[#bfdbfe] text-[#1d4ed8]",
    },
    {
      name: "《好高、好高！》",
      badge: "單本精選",
      desc: "空間高度認知與滿滿愛的抱抱",
      color: "bg-[#fff1f2] border-[#fecdd3] text-[#be123c]",
    },
    {
      name: "《晚安，猩猩》",
      badge: "單本精選",
      desc: "睡前儀式感與偷偷開鎖的幽默感",
      color: "bg-[#fefce8] border-[#fef08a] text-[#a16207]",
    },
  ];

  return (
    <section className="bg-white border border-[#e5e1db] rounded-3xl p-5 sm:p-6 mb-6 shadow-xs transition-all hover:border-[#d5cfc5]">
      {/* 標題列 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#fef3c7] border border-[#fde68a] text-[#b45309] flex items-center justify-center font-extrabold text-base shrink-0 shadow-2xs">
            ⭐
          </div>
          <div>
            <div className="flex items-center gap-2">
              <strong className="text-base sm:text-lg font-bold text-[#37332f]">
                Ollie&apos;s Favourites｜歐里的愛書
              </strong>
              <span className="text-[11px] font-bold text-[#b45309] bg-[#fef3c7] px-2 py-0.5 rounded-full">
                共 24 本
              </span>
            </div>
            <p className="text-xs text-[#77716b] mt-0.5">
              歐里親自認證、反覆點名共讀的私房最愛繪本書單！
            </p>
          </div>
        </div>

        {/* 快速切換篩選按鈕 */}
        <button
          type="button"
          onClick={onToggleFilter}
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
            isActive
              ? "bg-[#b45309] text-white hover:bg-[#92400e]"
              : "bg-[#faf7f2] border border-[#e8e0d6] text-[#78350f] hover:bg-[#f3ece0]"
          }`}
        >
          {isActive ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>已篩選歐里愛書（點此查看全部）</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>在書架只顯示歐里愛書 (24本)</span>
            </>
          )}
        </button>
      </div>

      {/* 6 大愛書類別卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-3 flex flex-col justify-between transition-all ${item.color}`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <strong className="text-xs font-bold leading-tight">
                {item.name}
              </strong>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/80 border border-current/20">
                {item.badge}
              </span>
            </div>
            <p className="text-[11px] opacity-80 leading-relaxed truncate">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
