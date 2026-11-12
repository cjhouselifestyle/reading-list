"use client";

export function OllieSection() {
  return (
    <section className="bg-white border border-[#e5e1db] rounded-3xl p-5 sm:p-6 mb-6 shadow-xs">
      <div className="flex items-center justify-between gap-2 mb-3">
        <strong className="text-sm sm:text-base font-bold text-[#37332f]">
          Ollie&apos;s Favourites｜歐里的愛書
        </strong>
        <span className="text-xs text-[#77716b] bg-[#f2f2f0] px-2.5 py-0.5 rounded-full font-medium">
          獨立專區
        </span>
      </div>

      <div className="flex items-start sm:items-center gap-3.5 bg-[#faf9f6] border border-dashed border-[#d8d1c7] rounded-2xl p-4">
        <div className="w-9 h-9 rounded-full bg-[#e9e2d8] text-[#716a61] flex items-center justify-center font-extrabold text-sm shrink-0">
          O
        </div>
        <div>
          <strong className="text-xs sm:text-sm font-bold text-[#37332f]">
            等歐里親自確認後再公布
          </strong>
          <p className="text-xs text-[#77716b] mt-0.5">
            這裡會放上歐里真正喜歡的書，目前先保留位置，不把任何書預設成歐里的愛書。
          </p>
        </div>
      </div>
    </section>
  );
}
