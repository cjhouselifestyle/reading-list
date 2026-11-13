"use client";

import { TOPICS, INTEREST_LABELS, BUNDLE_GROUPS, GROUPBUY_URL } from "@/data/picture-books";
import { FilterState } from "@/types";
import { ExternalLink, RotateCcw } from "lucide-react";

interface BookFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  totalFound: number;
  totalBooks: number;
}

export function BookFilters({
  filters,
  onFilterChange,
  totalFound,
  totalBooks,
}: BookFiltersProps) {
  const isAnyFilterActive =
    filters.series !== "全部書籍" ||
    filters.topic !== "全部" ||
    filters.selectedInterests.length > 0 ||
    filters.bundleGroup !== null ||
    filters.awardOnly ||
    Boolean(filters.ollieFavoriteOnly);

  const resetFilters = () => {
    onFilterChange({
      series: "全部書籍",
      topic: "全部",
      selectedInterests: [],
      bundleGroup: null,
      awardOnly: false,
      ollieFavoriteOnly: false,
    });
  };

  const handleInterestToggle = (interest: string) => {
    const isSelected = filters.selectedInterests.includes(interest);
    const updated = isSelected
      ? filters.selectedInterests.filter((i) => i !== interest)
      : [...filters.selectedInterests, interest];

    onFilterChange({
      ...filters,
      selectedInterests: updated,
    });
  };

  return (
    <div className="bg-white border border-[#e5e1db] rounded-3xl p-5 sm:p-6 mb-6 shadow-xs space-y-6">
      {/* ① 想找什麼類別的書本？ */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <strong className="text-sm sm:text-base text-[#37332f] font-bold">
            ① 想找什麼類別的書本？
          </strong>
          {isAnyFilterActive && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-[#77716b] hover:text-[#37332f] flex items-center gap-1 font-medium cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>重設條件</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Ollie's Favorites 快速篩選 */}
          <button
            type="button"
            onClick={() =>
              onFilterChange({
                ...filters,
                ollieFavoriteOnly: !filters.ollieFavoriteOnly,
                series: "全部書籍",
                bundleGroup: null,
                awardOnly: false,
              })
            }
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filters.ollieFavoriteOnly
                ? "bg-[#b45309] text-white shadow-xs"
                : "bg-[#fffbeb] border border-[#fde68a] text-[#b45309] hover:border-[#b45309]"
            }`}
          >
            <span>⭐ Ollie&apos;s Favourites (24本)</span>
          </button>

          {/* 基本類別 */}
          {["全部書籍", "五味太郎精選"].map((name) => {
            const isActive =
              filters.series === name &&
              !filters.awardOnly &&
              filters.bundleGroup === null;
            return (
              <button
                key={name}
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    series: name,
                    awardOnly: false,
                    bundleGroup: null,
                  })
                }
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#655f57] text-white shadow-xs"
                    : "bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#b8a99b]"
                }`}
              >
                {name}
              </button>
            );
          })}

          {/* 團購套組過濾 */}
          {Object.keys(BUNDLE_GROUPS).map((groupName) => {
            const isActive = filters.bundleGroup === groupName;
            return (
              <button
                key={groupName}
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    bundleGroup: isActive ? null : groupName,
                    awardOnly: false,
                    series: "全部書籍",
                  })
                }
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#655f57] text-white shadow-xs"
                    : "bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#b8a99b]"
                }`}
              >
                {groupName}
              </button>
            );
          })}

          {/* 得獎書籍過濾 */}
          <button
            type="button"
            onClick={() =>
              onFilterChange({
                ...filters,
                awardOnly: !filters.awardOnly,
                bundleGroup: null,
                series: "全部書籍",
              })
            }
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              filters.awardOnly
                ? "bg-[#655f57] text-white shadow-xs"
                : "bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#b8a99b]"
            }`}
          >
            得獎：中小學生優良課外讀物
          </button>
        </div>
      </div>

      {/* ② 想找什麼主題的故事？ */}
      <div>
        <strong className="block text-sm sm:text-base text-[#37332f] font-bold mb-3">
          ② 想找什麼主題的故事？
        </strong>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topicName) => {
            const isActive = filters.topic === topicName;
            return (
              <button
                key={topicName}
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    topic: topicName,
                  })
                }
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#655f57] text-white shadow-xs"
                    : "bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#b8a99b]"
                }`}
              >
                {topicName}
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-[#77716b] mt-2">
          同一本書可以出現在不同的主題裡。
        </p>
      </div>

      {/* ③ 孩子最近喜歡什麼？ */}
      <div>
        <strong className="block text-sm sm:text-base text-[#37332f] font-bold mb-3">
          ③ 孩子最近喜歡什麼？
        </strong>
        <div className="flex flex-wrap gap-2">
          {INTEREST_LABELS.map((interest) => {
            const isChecked = filters.selectedInterests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isChecked
                    ? "bg-[#655f57] text-white shadow-xs"
                    : "bg-white border border-[#e5e1db] text-[#37332f] hover:border-[#b8a99b]"
                }`}
              >
                {interest}
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-[#77716b] mt-2">
          可複選；選到任一興趣即可，並會和前兩組條件交集篩選。
        </p>
      </div>

      {/* 團購直達入口 */}
      <div className="pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#faf7f2] border border-[#e8e0d6] rounded-2xl">
          <div>
            <strong className="text-sm font-bold text-[#37332f]">
              想直接逛團購書單？
            </strong>
            <p className="text-xs text-[#77716b] mt-0.5">
              從這裡前往目前的團購頁面，查看完整品項與優惠。
            </p>
          </div>
          <a
            href={GROUPBUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#655f57] hover:bg-[#524d46] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
          >
            <span>前往團購選書</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
