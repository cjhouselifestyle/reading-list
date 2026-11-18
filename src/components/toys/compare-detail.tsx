"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FloatingGroupbuyBtn } from "@/components/floating-groupbuy-btn";
import { TOYS } from "@/data/toys";
import { CompareGroup } from "@/data/toy-comparisons";

export function CompareDetailView({ group }: { group: CompareGroup }) {
  const items = group.ids.map((id) => TOYS.find((toy) => toy.id === id)).filter((toy) => Boolean(toy));
  const features: [string, string, string][] = [
    ["適玩年齡", ...items.map((toy) => toy?.ageLabel ?? "")] as [string, string, string],
    ["很適合這樣的孩子", ...items.map((toy) => `${toy?.recommend.split("，")[0] ?? ""}。`)] as [string, string, string],
    ["玩什麼", ...items.map((toy) => toy?.scene ?? "")] as [string, string, string],
    ...group.rows,
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-32 pt-6 sm:px-6 sm:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#53655a]">
        <Link href="/toys" className="inline-flex cursor-pointer items-center gap-1 font-bold hover:text-[#244c3e]"><ArrowLeft className="h-4 w-4" />回到木玩陪玩</Link>
        <span>相似木玩比較</span>
      </div>
      <header className="mt-5">
        <div className="flex items-center gap-2 text-sm font-bold text-[#244c3e]"><img src="/toys-guide/compare-icon.png" alt="" className="h-8 w-8" />相似木玩比較</div>
        <h1 className="mt-3 text-4xl font-black text-[#243a32] sm:text-5xl">{group.title}</h1>
        <div className="mt-4 rounded-r-xl border-l-4 border-[#809f87] bg-[#edf2e9] p-4 text-sm leading-7"><strong>怎麼選？</strong><p className="m-0">{group.choice}</p></div>
      </header>

      <div className="sticky top-14 z-40 -mx-4 mt-6 border-y border-[#e5e1db] bg-[#fffdf8]/95 px-4 py-3 backdrop-blur-sm sm:top-16 sm:-mx-6 sm:px-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#77716b]">比較中</div>
        <div className="grid grid-cols-2 divide-x divide-[#e5e1db]">
          {items.map((toy) => toy && (
            <Link key={toy.id} href={`/toys/${toy.id}`} className="flex min-w-0 cursor-pointer items-center gap-2 px-2 first:pl-0 last:pr-0 sm:gap-3">
              <img src={toy.image} alt={`${toy.name} 商品縮圖`} className="h-11 w-11 shrink-0 rounded-lg bg-[#f3ead9] object-contain p-0.5 sm:h-14 sm:w-14" />
              <span className="min-w-0"><strong className="block line-clamp-2 text-xs leading-5 text-[#243a32] sm:text-base">{toy.name}</strong><small className="mt-0.5 block text-[11px] text-[#77716b]">{toy.ageLabel}</small></span>
            </Link>
          ))}
        </div>
      </div>

      <nav aria-label="比較特點導覽" className="mt-4 border-b border-[#e5e1db] pb-4">
        <div className="flex flex-wrap gap-2">{features.map(([label], index) => <button key={label} type="button" onClick={() => document.getElementById(`compare-feature-${index}`)?.scrollIntoView({ behavior: "smooth", block: "start" })} className="cursor-pointer rounded-full border border-[#d8d9ce] bg-white px-3 py-1.5 text-xs font-bold text-[#53655a] transition-colors hover:border-[#809f87] hover:bg-[#edf2e9]">{String(index + 1).padStart(2, "0")} {label}</button>)}</div>
      </nav>

      <div className="mt-5 space-y-4">
        {features.map(([label, first, second], index) => (
          <section key={label} id={`compare-feature-${index}`} className="scroll-mt-36 rounded-2xl border border-[#d8d9ce] bg-[#fffdf8] p-4 sm:p-5">
            <div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3e] text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span><h2 className="m-0 text-lg font-black text-[#243a32] sm:text-xl">{label}</h2></div>
            <div className="mt-4 grid grid-cols-2 divide-x divide-[#e5e1db]">
              <Link href={`/toys/${items[0]?.id ?? ""}`} className="min-w-0 cursor-pointer pr-3">
                <strong className="block line-clamp-2 text-xs font-black leading-5 text-[#244c3e] sm:text-sm">{items[0]?.name}</strong>
                <p className="m-0 mt-2 line-clamp-3 text-sm leading-6 text-[#37332f]">{first}</p>
              </Link>
              <Link href={`/toys/${items[1]?.id ?? ""}`} className="min-w-0 cursor-pointer pl-3">
                <strong className="block line-clamp-2 text-xs font-black leading-5 text-[#655447] sm:text-sm">{items[1]?.name}</strong>
                <p className="m-0 mt-2 line-clamp-3 text-sm leading-6 text-[#37332f]">{second}</p>
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">{items.map((toy) => toy && <Link key={toy.id} href={`/toys/${toy.id}`} className="inline-flex cursor-pointer items-center justify-between rounded-xl border border-[#b2926c] bg-[#fffdf8] px-4 py-3 text-sm font-bold text-[#244c3e] hover:bg-[#f5efdf]">查看 {toy.name} 詳情 <ArrowUpRight className="h-4 w-4" /></Link>)}</div>
      <FloatingGroupbuyBtn />
    </div>
  );
}
