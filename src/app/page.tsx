"use client";

import { useState, useMemo, useEffect } from "react";
import { PICTURE_BOOKS, BUNDLE_GROUPS } from "@/data/picture-books";
import { Book, FilterState } from "@/types";
import { BookCard } from "@/components/book-card";
import { BookModal } from "@/components/book-modal";
import { BookFilters } from "@/components/book-filters";
import { OllieSection } from "@/components/ollie-section";
import { MyListDrawer } from "@/components/my-list-drawer";

export default function ReadingListPage() {
  // 篩選條件狀態
  const [filters, setFilters] = useState<FilterState>({
    series: "全部書籍",
    topic: "全部",
    selectedInterests: [],
    bundleGroup: null,
    awardOnly: false,
  });

  // 使用者選取的書單 (IDs) 與每本書選擇的年齡 (1, 2, 3)
  const [selectedBookIds, setSelectedBookIds] = useState<number[]>([]);
  const [bookAges, setBookAges] = useState<Record<number, number>>({});

  // 正在查看詳細彈窗的書籍
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  // 初始化：從 LocalStorage 讀取已存的選書紀錄
  useEffect(() => {
    try {
      const savedIds = localStorage.getItem("cj_selected_books");
      const savedAges = localStorage.getItem("cj_book_ages");
      if (savedIds) setSelectedBookIds(JSON.parse(savedIds));
      if (savedAges) setBookAges(JSON.parse(savedAges));
    } catch {}
  }, []);

  // 狀態變更時自動同步至 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem("cj_selected_books", JSON.stringify(selectedBookIds));
      localStorage.setItem("cj_book_ages", JSON.stringify(bookAges));
    } catch {}
  }, [selectedBookIds, bookAges]);

  // 切換選取某本書
  const handleToggleSelect = (bookId: number) => {
    // 如果是「誰吃掉了？＋藏在誰那兒呢？」組合 (id: 2 & 3)
    if (bookId === 2 || bookId === 3) {
      const isBothSelected =
        selectedBookIds.includes(2) && selectedBookIds.includes(3);
      if (isBothSelected) {
        setSelectedBookIds((prev) => prev.filter((id) => id !== 2 && id !== 3));
      } else {
        setSelectedBookIds((prev) => Array.from(new Set([...prev, 2, 3])));
      }
      return;
    }

    setSelectedBookIds((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  };

  // 批次加入書本（例如加入套組）
  const handleAddMultiple = (ids: number[]) => {
    setSelectedBookIds((prev) => Array.from(new Set([...prev, ...ids])));
  };

  // 年齡切換
  const handleAgeChange = (bookId: number, age: number) => {
    setBookAges((prev) => ({ ...prev, [bookId]: age }));
  };

  // 依據篩選條件計算顯示的書籍列表
  const filteredBooks = useMemo(() => {
    return PICTURE_BOOKS.filter((book) => {
      // 1. 系列分類
      if (filters.series !== "全部書籍" && book.series !== filters.series) {
        return false;
      }

      // 2. 主題分類
      if (filters.topic !== "全部" && !book.cats.includes(filters.topic)) {
        return false;
      }

      // 3. 孩子興趣 (選取任一即符合交集)
      if (
        filters.selectedInterests.length > 0 &&
        !filters.selectedInterests.some((interest) =>
          book.interests?.includes(interest)
        )
      ) {
        return false;
      }

      // 4. 團購套組過濾
      if (filters.bundleGroup) {
        const bundleNames = BUNDLE_GROUPS[filters.bundleGroup] || [];
        if (!bundleNames.includes(book.name)) {
          return false;
        }
      }

      // 5. 得獎書籍過濾
      if (filters.awardOnly && book.award !== "中小學生優良課外讀物") {
        return false;
      }

      return true;
    });
  }, [filters]);

  // 處理書本展示：合購組第 3 本（藏在誰那兒呢？）不重複佔一格，而是與第 2 本合併
  const displayBooks = useMemo(() => {
    return filteredBooks.filter((b) => b.id !== 3);
  }, [filteredBooks]);

  const selectedBooks = useMemo(() => {
    return PICTURE_BOOKS.filter((b) => selectedBookIds.includes(b.id));
  }, [selectedBookIds]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-32">
      {/* 標題區域 */}
      <header className="text-center mb-8">
        <small className="text-[11px] font-bold tracking-[3px] text-[#77716b] uppercase block mb-1">
          Read · Play · Grow
        </small>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#37332f] tracking-tight mb-2">
          經典繪本
          <span className="block sm:inline sm:ml-3">分齡讀出不同樂趣</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#77716b]">
          從觀察指認、重複語句，到想像與表達
        </p>
        <div className="text-xs text-[#aaa6a0] mt-2 font-medium tracking-wide">
          ＠cjhouse.lifestyle
        </div>
      </header>

      {/* 篩選工具箱 */}
      <BookFilters
        filters={filters}
        onFilterChange={setFilters}
        totalFound={filteredBooks.length}
        totalBooks={PICTURE_BOOKS.length}
      />

      {/* 歐里的愛書專區 */}
      <OllieSection />

      {/* 書架標題列 */}
      <div className="flex items-center justify-between mb-4 px-1">
        <strong className="text-sm sm:text-base font-bold text-[#37332f]">
          ④ 點選一本書，看看怎麼共讀
        </strong>
        <span className="text-xs text-[#77716b] font-medium">
          {filteredBooks.length} / {PICTURE_BOOKS.length} 本
        </span>
      </div>

      {/* 書籍網格清單 */}
      {displayBooks.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-[#e5e1db] rounded-3xl p-8">
          <p className="text-sm text-[#77716b]">沒有符合當前篩選條件的書籍</p>
          <button
            type="button"
            onClick={() =>
              setFilters({
                series: "全部書籍",
                topic: "全部",
                selectedInterests: [],
                bundleGroup: null,
                awardOnly: false,
              })
            }
            className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold bg-[#655f57] text-white"
          >
            重設篩選條件
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {displayBooks.map((book) => {
            const isSelected =
              book.id === 2
                ? selectedBookIds.includes(2) && selectedBookIds.includes(3)
                : selectedBookIds.includes(book.id);

            return (
              <BookCard
                key={book.id}
                book={book}
                isSelected={isSelected}
                isBundlePair={book.id === 2}
                onClick={() => setActiveBook(book)}
              />
            );
          })}
        </div>
      )}

      {/* 詳細彈窗 */}
      <BookModal
        book={activeBook}
        isOpen={activeBook !== null}
        onClose={() => setActiveBook(null)}
        isSelected={
          activeBook
            ? activeBook.id === 2 || activeBook.id === 3
              ? selectedBookIds.includes(2) && selectedBookIds.includes(3)
              : selectedBookIds.includes(activeBook.id)
            : false
        }
        selectedAge={activeBook ? bookAges[activeBook.id] || 1 : 1}
        onAgeChange={handleAgeChange}
        onToggleSelect={handleToggleSelect}
      />

      {/* 底部浮動列與我的書單檢視 */}
      <MyListDrawer
        selectedBooks={selectedBooks}
        ages={bookAges}
        onRemoveBook={handleToggleSelect}
        onAddBooks={handleAddMultiple}
        allBooks={PICTURE_BOOKS}
      />
    </div>
  );
}
