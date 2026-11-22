"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, ShoppingBag } from "lucide-react";
import { FloatingGroupbuyBtn } from "@/components/floating-groupbuy-btn";
import type { ToyItem, ToyDialogue } from "@/data/toys";
import { getCompareKey, COMPARE_GROUPS } from "@/data/toy-comparisons";
import { TOY_AGE_STAGES, type ToyAgeStageIndex } from "@/data/toy-development";
import { getToyGroupbuyUrl } from "@/lib/groupbuy";

function SpeechRow({ role, text }: { role: "baby" | "parent"; text: string }) {
  return (
    <div className="my-3 grid grid-cols-[36px_minmax(0,1fr)] items-start gap-2">
      <img src={`/toys-guide/${role === "baby" ? "baby-avatar" : "parent-avatar"}.png`} alt="" className="h-9 w-9 object-contain" />
      <div className="min-w-0">
        <span className="mb-0.5 block text-[11px] font-bold text-[#77716b]">{role === "baby" ? "寶寶" : "家長"}</span>
        <p className={`m-0 leading-7 ${role === "parent" ? "text-[#655447]" : "text-[#37332f]"}`}>{text}</p>
      </div>
    </div>
  );
}

function DialogueCard({ title, item, isPlay, playText }: { title: string; item: ToyDialogue; isPlay?: boolean; playText?: string }) {
  return (
    <article className={`rounded-r-2xl border-l-4 p-4 ${isPlay ? "border-[#809f87] bg-[#edf2e9]" : "border-[#b2926c] bg-[#f5efdf]"}`}>
      <h3 className="m-0 mb-3 text-sm font-extrabold text-[#53655a]">{title}</h3>
      <SpeechRow role="baby" text={isPlay ? `（${playText ?? item.parent}）` : `「${item.child}」`} />
      <SpeechRow role="parent" text={`「${isPlay ? item.parent : item.reply}」`} />
    </article>
  );
}

export function ToyDetailView({ toy }: { toy: ToyItem }) {
  const [stageIndex, setStageIndex] = useState<ToyAgeStageIndex>(1);
  const item = toy.dialogue[stageIndex];
  const altItem = toy.dialogueAlt[stageIndex];
  const primaryScene = toy.scene;
  const secondaryScene = toy.scene2;
  const compareKey = getCompareKey(toy.id);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-32 pt-6 sm:px-6 sm:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#53655a]">
        <Link href="/toys" className="inline-flex cursor-pointer items-center gap-1 font-bold hover:text-[#244c3e]"><ArrowLeft className="h-4 w-4" />回到木玩陪玩</Link>
        <span>{toy.group} · {toy.id}</span>
      </div>

      <section className="mt-4 overflow-hidden rounded-[1.6rem] bg-[#fffdf8] shadow-sm">
        <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-12">
          <div className="min-w-0">
            <p className="m-0 text-xs font-bold tracking-[0.16em] text-[#77716b]">木玩陪玩指南 · {toy.id}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[#243a32] sm:text-5xl">{toy.name}</h1>
            <p className="mt-3 text-base font-bold text-[#53655a]">適玩年齡 {toy.ageLabel}</p>
            <div className="mt-5 grid gap-3 rounded-2xl bg-[#f5efdf] p-4 text-sm leading-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-5">
              <strong className="leading-6 text-[#37332f]">很適合<br />這樣的孩子</strong>
              <p className="m-0">{toy.recommend}。</p>
            </div>
            {toy.minMonths > 18 && <div className="mt-3 rounded-2xl border border-[#d8d9ce] bg-white p-4 text-sm leading-7">
              <strong className="text-[#244c3e]">低齡也可以這樣玩</strong>
              <p className="m-0 mt-1">{toy.alternative}。</p>
              <p className="m-0 mt-2 text-xs leading-5 text-[#77716b]">{toy.minMonths >= 36 ? "標示 3 歲以上可能和配件較小有關，不代表低齡不能陪玩；若孩子仍會把東西放入口中，先只用大型外觀件或由大人握著操作，避開小零件並全程陪同。" : "若孩子仍會把東西放入口中，先避開小零件；依孩子當下的動作能力調整玩法，並全程由大人陪同。"}</p>
            </div>}
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#d8d9ce] bg-[#edf2e9] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="m-0 text-sm font-extrabold text-[#244c3e]">想直接看這款木玩？</p><p className="m-0 mt-1 text-xs text-[#53655a]">團購頁可用貨號 {toy.id} 找到商品。</p></div>
              <a href={getToyGroupbuyUrl(toy.id)} target="_blank" rel="noopener noreferrer" className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#244c3e] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#316352]"><ShoppingBag className="h-4 w-4 text-amber-300" />去團購頁看這款 <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            {compareKey && <Link href={`/toys/compare/${compareKey}`} className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#53655a] hover:text-[#244c3e]"><img src="/toys-guide/compare-icon.png" alt="" className="h-7 w-7 object-contain" />比較相似木玩：{COMPARE_GROUPS[compareKey].title} <ArrowUpRight className="h-4 w-4" /></Link>}
          </div>
          <div className="flex min-h-56 items-center justify-center rounded-2xl bg-[#f3ead9] p-5 sm:min-h-72 lg:min-h-80">
            <img src={toy.image} alt={`${toy.name} 商品圖`} className="h-56 w-full object-contain sm:h-72 lg:h-80" />
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[1.6rem] border border-[#d8d9ce] bg-[#f7f5ee] px-5 py-4 sm:px-8" aria-label="陪玩四階段原則">
        <p className="m-0 text-sm leading-7 text-[#53655a]">每一次陪玩，都從孩子當下做得到的地方開始。1～1.5 歲時，孩子會先用眼神、動作或一兩個詞參與，我們陪著描述，不急著要他說完整。1.5～2 歲時，孩子開始把詞接在一起，家長可以把他的話多接一點。2～2.5 歲時，加入顏色、數量和位置，陪孩子說出看到的細節。2.5～3 歲時，再把動作、先後順序和結果串成短句，留一點時間等他自己接話。</p>
      </section>

      <section className="mt-6 rounded-[1.6rem] bg-[#fffdf8] px-5 py-6 shadow-sm sm:px-8 sm:py-8" aria-labelledby="play-demo-title">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e1db] pb-5">
          <h2 id="play-demo-title" className="m-0 flex items-center gap-2 text-xl font-extrabold text-[#244c3e] sm:text-2xl"><img src="/toys-guide/play-demo-icon.png" alt="" className="h-8 w-8" />一起玩，怎麼接話？</h2>
          <div className="flex flex-wrap gap-2" aria-label="選擇陪玩對話年齡">
            {TOY_AGE_STAGES.map((stage, index) => <button key={stage.label} type="button" onClick={() => setStageIndex(index as ToyAgeStageIndex)} aria-pressed={stageIndex === index} className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-bold transition-colors sm:px-4 sm:text-sm ${stageIndex === index ? "border-[#244c3e] bg-[#244c3e] text-white" : "border-[#d8d9ce] bg-white text-[#243a32] hover:bg-[#f3ead9]"}`}>{stage.shortLabel}</button>)}
          </div>
        </div>
        <div className="mt-6 space-y-6" aria-live="polite">
          <section><h3 className="mb-2 text-base font-extrabold text-[#243a32]">寶寶這樣玩</h3><div className="grid gap-3 sm:grid-cols-2"><DialogueCard title={`情境一｜${primaryScene}`} item={item} isPlay playText={primaryScene} /><DialogueCard title={`情境二｜${secondaryScene}`} item={altItem} isPlay playText={secondaryScene} /></div></section>
          <section><h3 className="mb-2 text-base font-extrabold text-[#243a32]">寶寶這樣說</h3><div className="grid gap-3 sm:grid-cols-2"><DialogueCard title={`情境一｜${primaryScene}`} item={item} /><DialogueCard title={`情境二｜${secondaryScene}`} item={altItem} /></div></section>
        </div>
        {toy.source && <p className="mt-5 text-xs text-[#77716b]">品牌商品介紹：<a href={toy.source} target="_blank" rel="noopener noreferrer" className="ml-1 cursor-pointer font-bold text-[#53655a] underline underline-offset-2">查看官方商品 ↗</a></p>}
      </section>
      <FloatingGroupbuyBtn />
    </div>
  );
}
