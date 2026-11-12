"use client";

import { useState } from "react";
import { Book } from "@/types";
import { BUNDLE_RULES, GROUPBUY_URL } from "@/data/picture-books";
import { Printer, Copy, ArrowLeft, ExternalLink, X } from "lucide-react";

interface MyListDrawerProps {
  selectedBooks: Book[];
  ages: Record<number, number>;
  onRemoveBook: (id: number) => void;
  onAddBooks: (ids: number[]) => void;
  allBooks: Book[];
}

export function MyListDrawer({
  selectedBooks,
  ages,
  onRemoveBook,
  onAddBooks,
  allBooks,
}: MyListDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const totalCount = selectedBooks.length;

  // 格式化書單純文字，用於複製
  const generateListText = () => {
    const lines = [
      "我的經典繪本書單（＠cjhouse.lifestyle）",
      `共選了 ${totalCount} 本\n`,
    ];

    selectedBooks.forEach((book, idx) => {
      const age = ages[book.id] || 1;
      const tip = book.tips[age - 1] || book.tips[0] || "";
      lines.push(`${idx + 1}. 《${book.name}》｜${age} 歲共讀`);
      if (book.sentences && book.sentences.length > 0) {
        lines.push(`   重複語句：${book.sentences.map((s) => `「${s}」`).join(" ")}`);
      }
      if (tip) {
        lines.push(`   共讀建議：${tip}`);
      }
      lines.push("");
    });

    lines.push("團購頁面：" + GROUPBUY_URL);
    return lines.join("\n");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateListText());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      alert("此瀏覽器無法直接複製，請使用列印或截圖存檔。");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // 檢查符合的團購套組規則
  const selectedNames = selectedBooks.map((b) => b.name);
  const matchedRules = BUNDLE_RULES.filter((rule) =>
    rule.names.some((name) => selectedNames.includes(name))
  );

  return (
    <>
      {/* 底部常駐浮動條（有選書時顯示） */}
      {totalCount > 0 && !isOpen && (
        <aside
          aria-label="選書工具列"
          className="fixed bottom-0 left-0 right-0 bg-[#f7f5f1]/95 backdrop-blur-md border-t border-[#e5e1db] px-4 py-3 z-40 transition-all no-print"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div>
              <strong className="text-sm font-bold text-[#37332f]">
                已選 <span className="text-[#3d7464]">{totalCount}</span> 本
              </strong>
              <div className="text-xs text-[#77716b]">
                建立自己的分齡共讀清單
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#655f57] hover:bg-[#524d46] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              查看我的書單
            </button>
          </div>
        </aside>
      )}

      {/* 完整書單檢視彈窗 / 頁面 */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-[#e5e1db]">
            {/* Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-[#e5e1db] flex items-center justify-between no-print">
              <div>
                <small className="text-[10px] tracking-widest text-[#77716b] font-bold block uppercase">
                  My Reading List
                </small>
                <h2 className="text-lg sm:text-xl font-bold text-[#37332f]">
                  我的經典繪本書單
                </h2>
                <span className="text-xs text-[#77716b]">已選 {totalCount} 本</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-[#f1f1ef] hover:bg-[#e5e1db] flex items-center justify-center text-[#77716b] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 書單內容 */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
              {selectedBooks.map((book, idx) => {
                const age = ages[book.id] || 1;
                const tip = book.tips[age - 1] || book.tips[0];
                return (
                  <div
                    key={book.id}
                    className="p-4 rounded-2xl bg-[#faf9f6] border border-[#e8e0d6] relative space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <strong className="text-sm sm:text-base font-bold text-[#37332f]">
                        {idx + 1}. {book.name}
                        <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#e8e2d8] text-[#55504a]">
                          {age} 歲建議
                        </span>
                      </strong>
                      <button
                        type="button"
                        onClick={() => onRemoveBook(book.id)}
                        className="text-xs text-[#8b4f4f] hover:underline no-print"
                      >
                        移除
                      </button>
                    </div>

                    {book.sentences && book.sentences.length > 0 && (
                      <p className="text-xs text-[#55504a]">
                        <b>重複語句：</b>
                        {book.sentences.map((s) => `「${s}」`).join(" ")}
                      </p>
                    )}

                    {tip && (
                      <p className="text-xs text-[#666059] leading-relaxed">
                        <b>共讀建議：</b>
                        {tip}
                      </p>
                    )}
                  </div>
                );
              })}

              {/* 團購套組小提醒 */}
              {matchedRules.length > 0 && (
                <div className="bg-[#faf7f2] border border-[#e8e0d6] rounded-2xl p-4 mt-6 space-y-3 no-print">
                  <h3 className="text-sm font-bold text-[#37332f]">
                    團購套組小提醒
                  </h3>
                  {matchedRules.map((rule, idx) => {
                    const bundleBookNames = rule.bundleNames || rule.names;
                    const isAllAdded = bundleBookNames.every((name) =>
                      selectedNames.includes(name)
                    );

                    const handleAddBundle = () => {
                      const booksToAdd = allBooks
                        .filter((b) => bundleBookNames.includes(b.name))
                        .map((b) => b.id);
                      onAddBooks(booksToAdd);
                    };

                    return (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-[#e5e1db] rounded-xl space-y-2"
                      >
                        <strong className="text-xs font-bold text-[#37332f]">
                          {rule.title}
                        </strong>
                        <p className="text-[11px] text-[#77716b] leading-relaxed">
                          {rule.text}
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            disabled={isAllAdded}
                            onClick={handleAddBundle}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              isAllAdded
                                ? "bg-[#3d7464] text-white opacity-80"
                                : "bg-[#655f57] hover:bg-[#524d46] text-white"
                            }`}
                          >
                            {isAllAdded ? "✓ 已加入此套組" : "好！選套組"}
                          </button>
                          <a
                            href={GROUPBUY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#655f57] hover:underline"
                          >
                            查看團購頁面 ↗
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 操作按鈕 */}
            <div className="p-4 sm:p-5 border-t border-[#e5e1db] bg-[#faf9f7] flex flex-wrap gap-2.5 no-print">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold bg-[#655f57] hover:bg-[#524d46] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>列印／儲存 PDF</span>
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-bold bg-[#f2f0ec] hover:bg-[#e8e4dc] text-[#37332f] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copySuccess ? "✓ 已複製到剪貼簿" : "複製完整書單"}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-semibold bg-white border border-[#e5e1db] text-[#77716b] hover:text-[#37332f] flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>返回繼續選書</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
