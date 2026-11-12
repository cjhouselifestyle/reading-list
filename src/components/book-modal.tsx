"use client";

import { useEffect } from "react";
import { Book } from "@/types";
import { GROUPBUY_URL } from "@/data/picture-books";
import { X, ExternalLink, ShoppingBag } from "lucide-react";

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  isSelected: boolean;
  selectedAge: number;
  onAgeChange: (bookId: number, age: number) => void;
  onToggleSelect: (bookId: number) => void;
}

export function BookModal({
  book,
  isOpen,
  onClose,
  isSelected,
  selectedAge,
  onAgeChange,
  onToggleSelect,
}: BookModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  const isVisualBundle = book.id === 2 || book.id === 3;
  const displayTitle = isVisualBundle ? "誰吃掉了？＋藏在誰那兒呢？" : book.name;
  const displayCats = isVisualBundle ? "動物故事 · 找找看｜兩本合購組" : book.cats.join(" · ");
  const currentTip = book.tips[selectedAge - 1] || book.tips[0] || "暫無建議";

  // 使用瀏覽器原生文字定位語法 (#:~:text=)，平滑滾動至視野中央，完整展示封面且不被頂部選單遮擋
  const searchKeyword = isVisualBundle
    ? "誰吃掉了"
    : book.name.replace(/[（(].*?[）)]|[-－].*$/g, "").replace(/[？?！!]/g, "").trim() || book.name;
  const groupBuyAnchorUrl = `${GROUPBUY_URL}#:~:text=${encodeURIComponent(searchKeyword)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-2xl max-h-[90dvh] flex flex-col shadow-2xl overflow-hidden border border-[#e5e1db] animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 duration-200">
        {/* 頂部 Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-[#e5e1db] flex items-start justify-between gap-3 shrink-0">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-[#37332f] leading-snug break-words">
              {displayTitle}
            </h2>
            <div className="text-xs text-[#77716b] mt-1 font-medium">{displayCats}</div>
            {book.award && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3d7464] bg-[#eef5f2] border border-[#d2e5dd] px-2 py-0.5 rounded-md mt-1.5">
                🏆 榮獲文化部中小學生優良課外讀物推介
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f1f1ef] hover:bg-[#e5e1db] flex items-center justify-center text-[#77716b] transition-colors shrink-0 cursor-pointer"
            aria-label="關閉"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* 捲動主要內容區 */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* 書本簡介與封面 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
            <div className="w-28 sm:w-28 aspect-[3/4] bg-[#efeee9] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center border border-[#e5e1db] shadow-xs">
              {book.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={book.cover.startsWith("http") ? book.cover : `/${book.cover}`}
                  alt={book.name}
                  className="w-full h-full object-contain p-1.5"
                />
              ) : (
                <span className="text-xs text-[#817b72] text-center p-2">封面確認中</span>
              )}
            </div>

            <div className="flex-1 w-full space-y-2.5 text-left">
              <div>
                <h3 className="font-bold text-sm text-[#37332f] mb-1">書本亮點</h3>
                <p className="text-xs sm:text-sm text-[#55504a] leading-relaxed">
                  {book.intro}
                </p>
              </div>

              {book.highlight && (
                <div className="text-xs sm:text-sm text-[#655f57] font-medium bg-[#faf7f2] border border-[#e8e0d6] rounded-xl p-3 leading-relaxed">
                  {book.highlight}
                </div>
              )}

              {/* 團購直達與官方介紹按鈕 */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2">
                <a
                  href={groupBuyAnchorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#37332f] hover:bg-[#1f1d1a] text-white transition-all shadow-xs w-full sm:w-auto cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                  <span>前往團購頁面（直達本書）</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {book.official && (
                  <a
                    href={book.official}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-xs text-[#77716b] hover:text-[#37332f] hover:underline px-3 py-1.5 w-full sm:w-auto"
                  >
                    <span>官方詳細簡介</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 推薦資訊卡片 */}
          <div className="grid sm:grid-cols-2 gap-3">
            {book.startAge && (
              <div className="bg-[#faf7f2] border border-[#e8e0d6] rounded-2xl p-3.5">
                <h4 className="text-xs font-bold text-[#655f57] mb-1">
                  最推薦開始讀的年紀：{book.startAge}
                </h4>
                <p className="text-xs text-[#77716b] leading-relaxed">
                  {book.startReason}
                </p>
              </div>
            )}
            {book.recommendation && (
              <div className="bg-[#faf7f2] border border-[#e8e0d6] rounded-2xl p-3.5">
                <h4 className="text-xs font-bold text-[#655f57] mb-1">強力推薦給⋯</h4>
                <p className="text-xs text-[#77716b] leading-relaxed">
                  {book.recommendation}
                </p>
              </div>
            )}
          </div>

          {/* 重複語句與分齡共讀 */}
          <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
            {/* 重複語句 */}
            <div className="bg-[#f2f2f0] rounded-2xl p-3.5 sm:p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-[#e5e1db] text-[#37332f]">
                  重複語句
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon-repeat-v1.png"
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full bg-white p-1"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 justify-center">
                {book.sentences && book.sentences.length > 0 ? (
                  book.sentences.map((sentence, idx) => (
                    <span key={idx} className="text-xs text-[#443f3a] font-medium leading-relaxed">
                      「{sentence}」
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-[#77716b]">無特定重複句型</span>
                )}
              </div>
            </div>

            {/* 分齡共讀 */}
            <div className="bg-[#f2f2f0] rounded-2xl p-3.5 sm:p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-[#e5e1db] text-[#37332f]">
                  分齡共讀
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon-shared-reading-v1.png"
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full bg-white p-1"
                />
              </div>

              {/* 年齡切換 Radio */}
              <div className="flex items-center gap-2 mb-3 bg-white/70 p-1.5 rounded-xl border border-[#e5e1db]">
                {[1, 2, 3].map((age) => (
                  <label
                    key={age}
                    className={`flex-1 text-center py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                      selectedAge === age
                        ? "bg-[#655f57] text-white shadow-xs"
                        : "text-[#77716b] hover:bg-black/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name="book-age"
                      value={age}
                      checked={selectedAge === age}
                      onChange={() => onAgeChange(book.id, age)}
                      className="sr-only"
                    />
                    {age} 歲
                  </label>
                ))}
              </div>

              {/* 共讀建議文字 */}
              <div className="text-xs text-[#55504a] leading-relaxed border-t border-[#dcdad6] pt-2 flex-1">
                {currentTip}
              </div>
            </div>
          </div>
        </div>

        {/* 底部按鈕區（RWD 優化防擠壓，並支援 iOS 底部安全區域） */}
        <div className="p-3.5 sm:p-5 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-[#e5e1db] bg-[#faf9f7] flex gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#f2f0ec] text-[#37332f] hover:bg-[#e8e4dc] transition-colors cursor-pointer text-center"
          >
            返回選書
          </button>
          <button
            type="button"
            onClick={() => {
              onToggleSelect(book.id);
              onClose();
            }}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-sm cursor-pointer text-center whitespace-nowrap ${
              isSelected
                ? "bg-[#8b4f4f] hover:bg-[#773f3f]"
                : "bg-[#655f57] hover:bg-[#524d46]"
            }`}
          >
            <span className="sm:hidden">{isSelected ? "✓ 取消選擇" : "加入書單"}</span>
            <span className="hidden sm:inline">{isSelected ? "✓ 已選擇｜取消選擇" : "選擇這本，加入書單"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
