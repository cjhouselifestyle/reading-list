"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, ShoppingBag, X } from "lucide-react";
import { FloatingGroupbuyBtn } from "@/components/floating-groupbuy-btn";
import { TOY_GROUPS, TOYS, ToyItem, ToyDialogue } from "@/data/toys";
import { getToyGroupbuyUrl } from "@/lib/groupbuy";

type CompareGroup = {
  title: string;
  ids: string[];
  choice: string;
  rows: [string, string, string][];
};

const COMPARE_GROUPS: Record<string, CompareGroup> = {
  coffee: {
    title: "咖啡扮演怎麼選？",
    ids: ["50657", "50560"],
    choice: "想要薄荷綠、兩個笑臉杯與牛奶盒，選摩登咖啡機；想要更多杯具、咖啡小配件與較低團購價，選義式咖啡機。",
    rows: [
      ["顏色／風格", "薄荷綠機身，搭配白、黃兩個笑臉杯", "米白機身，搭配橘、粉、灰色杯具"],
      ["主要配件", "兩個杯子、牛奶盒、粉餅／沖煮配件、操作把手", "三個杯子、杯盤、濾煮把手、咖啡粉餅、湯匙"],
      ["團購價", "NT$840", "NT$665"],
      ["內容物", "咖啡機主體＋兩杯、牛奶盒與咖啡操作配件", "咖啡機主體＋三杯杯具、杯盤與咖啡操作配件"],
    ],
  },
  tea: {
    title: "午茶點心怎麼選？",
    ids: ["50576", "50577"],
    choice: "想要綠黃自然花草風、茶具與分享情境，選經典英式午茶；想要粉彩甜點主題、更多甜點配件與送點心情境，選夢幻甜點午茶。",
    rows: [
      ["顏色／風格", "薄荷綠、檸檬黃與白色，花草自然風", "粉紫、奶油黃與磚紅，甜點粉彩風"],
      ["主要配件", "茶壺、白色杯具、黃色杯盤、小杯、湯匙、托盤", "茶壺、兩組杯盤、甜甜圈、餅乾／蛋糕、湯匙、托盤"],
      ["團購價", "NT$780", "NT$815"],
      ["內容物", "午茶托盤主體＋茶壺、杯具與茶點配件", "午茶托盤主體＋茶壺、杯盤與甜點配件"],
    ],
  },
  walkers: {
    title: "學步車怎麼選？",
    ids: ["10521", "10527"],
    choice: "想要廚房、鍋具與食物配件，選行動廚台學步車；想要森林活動板、串珠與探索配件，選森林探險學步車。",
    rows: [
      ["顏色／風格", "淺綠色廚房車，水果與食物插圖", "米白、森林綠與木色，森林探險風"],
      ["主要配件", "鍋具、餐盤、食物造型配件、廚房操作面板", "森林活動板、串珠、齒輪、造型配件"],
      ["團購價", "NT$2,480", "NT$1,760"],
      ["內容物", "廚房學步車主體＋鍋具、餐盤與食物配件", "森林學步車主體＋活動板、串珠與探索配件"],
    ],
  },
  beads: {
    title: "串珠玩具怎麼選？",
    ids: ["3634", "20164"],
    choice: "想要動物木珠與簡單穿線，選森林造型串珠；想要更多顏色、形狀與人物配件，選童趣造型串珠。",
    rows: [
      ["顏色／風格", "原木色搭配森林動物彩繪，風格自然", "粉、黃、藍、綠等繽紛色彩，造型變化多"],
      ["主要配件", "森林動物造型木珠、穿線繩、穿線棒", "花朵、葉子、人物與幾何造型珠、彩色繩"],
      ["團購價", "NT$285", "NT$565"],
      ["內容物", "動物串珠組＋穿線繩與穿線工具", "繽紛造型串珠組＋多條彩色繩與穿線工具"],
    ],
  },
  vehicles: {
    title: "車輛遊戲怎麼選？",
    ids: ["50615", "50617"],
    choice: "想要體積較集中的停車場、坡道與停車配件，選綠能立體停車場；想要鋪設大範圍軌道、橋樑與鄉村場景，選鄉村火車軌道組。",
    rows: [
      ["顏色／風格", "橘、綠、藍與木色，現代綠能停車場", "自然木色搭配綠地、藍水面與鄉村場景"],
      ["主要配件", "多層停車場、坡道、風力／太陽能造型、巴士與小車", "木製軌道、火車與車廂、橋樑、房屋、樹木與動物"],
      ["團購價", "NT$1,640", "NT$2,160"],
      ["內容物", "立體停車場主體＋坡道、車輛與綠能主題配件", "軌道組主體＋軌道、列車、場景與造型配件"],
    ],
  },
};

const ACCENTS: Record<string, string> = {
  小廚房: "#c18b61",
  開店請客: "#b6767c",
  車輛出發: "#7b95ac",
  小手探索: "#83a486",
  音樂與走動: "#a28cae",
};

function getCompareKey(toyId: string) {
  return Object.keys(COMPARE_GROUPS).find((key) => COMPARE_GROUPS[key].ids.includes(toyId));
}

function SpeechRow({ role, text }: { role: "baby" | "parent"; text: string }) {
  return (
    <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-2 items-start my-3">
      <img src={`/toys-guide/${role === "baby" ? "baby-avatar" : "parent-avatar"}.png`} alt="" className="w-9 h-9 object-contain" />
      <div className="min-w-0">
        <span className="block text-[11px] font-bold text-[#77716b] mb-0.5">{role === "baby" ? "寶寶" : "家長"}</span>
        <p className={`m-0 leading-7 ${role === "parent" ? "text-[#655447]" : "text-[#37332f]"}`}>{text}</p>
      </div>
    </div>
  );
}

function DialogueCard({ title, item, isPlay, playText }: { title: string; item: ToyDialogue; isPlay?: boolean; playText?: string }) {
  return (
    <article className={`rounded-r-2xl border-l-4 p-4 ${isPlay ? "bg-[#edf2e9] border-[#809f87]" : "bg-[#f5efdf] border-[#b2926c]"}`}>
      <h4 className="m-0 mb-3 text-sm font-extrabold text-[#53655a]">{title}</h4>
      <SpeechRow role="baby" text={isPlay ? `（${playText ?? item.parent}）` : `「${item.child}」`} />
      <SpeechRow role="parent" text={`「${isPlay ? item.parent : item.reply}」`} />
    </article>
  );
}

function ToyModal({ toy, age, onAgeChange, onClose, onCompare }: { toy: ToyItem; age: number; onAgeChange: (age: number) => void; onClose: () => void; onCompare: () => void }) {
  const item = toy.dialogue[age - 1];
  const altItem = toy.dialogueAlt[age - 1];
  const compareKey = getCompareKey(toy.id);

  return (
    <div className="fixed inset-0 z-[70] cursor-pointer overflow-y-auto bg-[#14271e]/75 p-3 sm:p-8" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section role="dialog" aria-modal="true" aria-labelledby="toy-title" className="mx-auto max-w-3xl cursor-default rounded-[1.4rem] bg-[#fffdf8] p-5 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between gap-4 text-sm text-[#53655a]">
          <span>{toy.group} · {toy.id}</span>
          <button type="button" onClick={onClose} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#d8d9ce] text-xl hover:bg-[#f3ead9]" aria-label="關閉陪玩示範"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
          <div className="min-w-0 flex-1">
            <h2 id="toy-title" className="m-0 text-3xl font-black leading-tight text-[#243a32] sm:text-5xl">{toy.name}</h2>
            <p className="mt-2 text-sm text-[#53655a]">適玩年齡 {toy.ageLabel}</p>
            <div className="mt-4 hidden grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-xl bg-[#f5efdf] p-3 text-sm leading-7 sm:grid"><strong className="leading-6">很適合<br />這樣的孩子</strong><p className="m-0">{toy.recommend}。</p></div>
          </div>
          <img src={toy.image} alt={`${toy.name} 商品縮圖`} className="mx-auto h-40 w-full max-w-[220px] object-contain sm:mx-0 sm:h-48 sm:w-48 sm:max-w-none" />
          <div className="grid grid-cols-1 gap-2 rounded-xl bg-[#f5efdf] p-4 text-sm leading-7 sm:hidden"><strong className="leading-6">很適合這樣的孩子</strong><p className="m-0">{toy.recommend}。</p></div>
        </div>
        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#d8d9ce] bg-[#edf2e9] p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="m-0 text-sm font-extrabold text-[#244c3e]">想直接看這款木玩？</p><p className="m-0 mt-1 text-xs text-[#53655a]">團購頁可用貨號 {toy.id} 找到商品。</p></div><a href={getToyGroupbuyUrl(toy.id)} target="_blank" rel="noopener noreferrer" className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#244c3e] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#316352]"><ShoppingBag className="h-4 w-4 text-amber-300" />去團購頁看這款 <ArrowUpRight className="h-4 w-4" /></a></div>
        {compareKey && <button type="button" onClick={onCompare} className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#53655a] hover:text-[#244c3e]"><img src="/toys-guide/compare-icon.png" alt="" className="h-7 w-7 object-contain" />比較相似木玩：{COMPARE_GROUPS[compareKey].title} <ArrowUpRight className="h-4 w-4" /></button>}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#e5e1db] pt-5">
          <h3 className="m-0 flex items-center gap-2 text-lg font-extrabold text-[#244c3e]"><img src="/toys-guide/play-demo-icon.png" alt="" className="h-7 w-7" />一起玩，怎麼接話？</h3>
          <div className="flex gap-2" aria-label="選擇陪玩對話年齡">{[1, 2, 3].map((value) => <button key={value} type="button" onClick={() => onAgeChange(value)} aria-pressed={age === value} className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-bold transition-colors ${age === value ? "border-[#244c3e] bg-[#244c3e] text-white" : "border-[#d8d9ce] bg-white text-[#243a32] hover:bg-[#f3ead9]"}`}>{value} 歲</button>)}</div>
        </div>
        <div className="mt-4 space-y-5" aria-live="polite">
          <section><h3 className="mb-2 text-base font-extrabold text-[#243a32]">寶寶這樣玩</h3><div className="grid gap-3 sm:grid-cols-2"><DialogueCard title="情境一｜跟著孩子接住動作" item={item} isPlay playText={toy.scene} /><DialogueCard title={`情境二｜${toy.scene2}`} item={altItem} isPlay playText={toy.scene2} /></div></section>
          <section><h3 className="mb-2 text-base font-extrabold text-[#243a32]">寶寶這樣說</h3><div className="grid gap-3 sm:grid-cols-2"><DialogueCard title="情境一｜把孩子的話接長一點" item={item} /><DialogueCard title={`情境二｜${toy.scene2}`} item={altItem} /></div></section>
        </div>
        {toy.source && <p className="mt-3 text-xs text-[#77716b]">品牌商品介紹：<a href={toy.source} target="_blank" rel="noopener noreferrer" className="ml-1 cursor-pointer font-bold text-[#53655a] underline underline-offset-2">查看官方商品 ↗</a></p>}
      </section>
    </div>
  );
}

function CompareModal({ group, onClose, onOpenToy }: { group: CompareGroup; onClose: () => void; onOpenToy: (toy: ToyItem) => void }) {
  const items = group.ids.map((id) => TOYS.find((toy) => toy.id === id)).filter((toy): toy is ToyItem => Boolean(toy));
  const features: [string, string, string][] = [
    ["適玩年齡", ...items.map((toy) => toy.ageLabel)] as [string, string, string],
    ["很適合這樣的孩子", ...items.map((toy) => `${toy.recommend.split("，")[0]}。`)] as [string, string, string],
    ["玩什麼", ...items.map((toy) => toy.scene)] as [string, string, string],
    ...group.rows,
  ];
  return (
    <div className="fixed inset-0 z-[80] cursor-pointer overflow-y-auto bg-[#14271e]/75 p-3 sm:p-8" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section role="dialog" aria-modal="true" aria-labelledby="compare-title" className="mx-auto max-w-5xl cursor-default rounded-[1.4rem] bg-[#fffdf8] p-5 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-2 text-sm font-bold text-[#244c3e]"><img src="/toys-guide/compare-icon.png" alt="" className="h-8 w-8" />相似木玩比較</span><button type="button" onClick={onClose} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#d8d9ce] text-xl hover:bg-[#f3ead9]" aria-label="關閉比較"><X className="h-5 w-5" /></button></div>
        <h2 id="compare-title" className="mt-4 text-3xl font-black text-[#243a32] sm:text-5xl">{group.title}</h2>
        <div className="mt-4 rounded-r-xl border-l-4 border-[#809f87] bg-[#edf2e9] p-4 text-sm leading-7"><strong>怎麼選？</strong><p className="m-0">{group.choice}</p></div>
        <div className="sticky top-0 z-20 -mx-5 mt-5 border-y border-[#e5e1db] bg-[#fffdf8]/95 px-5 py-2 backdrop-blur-sm sm:-mx-8 sm:px-8">
          <div className="flex items-center justify-between gap-3 pb-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#77716b]">比較中</span>
            <button type="button" onClick={onClose} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#d8d9ce] text-[#53655a] hover:bg-[#f3ead9]" aria-label="關閉比較"><X className="h-4 w-4" /></button>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#e5e1db]">
            {items.map((toy) => (
              <div key={toy.id} className="flex min-w-0 items-center gap-2 px-2 first:pl-0 last:pr-0 sm:gap-3">
                <img src={toy.image} alt={`${toy.name} 商品縮圖`} className="h-11 w-11 shrink-0 rounded-lg bg-[#f3ead9] object-contain p-0.5 sm:h-14 sm:w-14" />
                <div className="min-w-0"><h3 className="m-0 line-clamp-2 text-xs font-black leading-5 text-[#243a32] sm:text-base">{toy.name}</h3><p className="m-0 mt-0.5 text-[11px] text-[#77716b]">{toy.ageLabel}</p></div>
              </div>
            ))}
          </div>
        </div>
        <nav aria-label="比較特點導覽" className="mt-4 border-b border-[#e5e1db] pb-4">
          <div className="flex flex-wrap gap-2">{features.map(([label], index) => <button key={label} type="button" onClick={() => document.getElementById(`compare-feature-${index}`)?.scrollIntoView({ behavior: "smooth", block: "start" })} className="cursor-pointer rounded-full border border-[#d8d9ce] bg-white px-3 py-1.5 text-xs font-bold text-[#53655a] transition-colors hover:border-[#809f87] hover:bg-[#edf2e9]">{String(index + 1).padStart(2, "0")} {label}</button>)}</div>
        </nav>
        <div className="mt-5 space-y-4">
          {features.map(([label, first, second], index) => (
            <section key={label} id={`compare-feature-${index}`} className="scroll-mt-20 rounded-2xl border border-[#d8d9ce] bg-[#fffdf8] p-4 sm:p-5">
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3e] text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span><h3 className="m-0 text-lg font-black text-[#243a32] sm:text-xl">{label}</h3></div>
              <div className="mt-4 grid grid-cols-2 divide-x divide-[#e5e1db]">
                <article className="min-w-0 pr-3"><h4 className="m-0 line-clamp-2 text-xs font-black leading-5 text-[#244c3e] sm:text-sm">{items[0]?.name}</h4><p className="m-0 mt-2 line-clamp-3 text-sm leading-6 text-[#37332f]">{first}</p></article>
                <article className="min-w-0 pl-3"><h4 className="m-0 line-clamp-2 text-xs font-black leading-5 text-[#655447] sm:text-sm">{items[1]?.name}</h4><p className="m-0 mt-2 line-clamp-3 text-sm leading-6 text-[#37332f]">{second}</p></article>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">{items.map((toy) => <button key={toy.id} type="button" onClick={() => onOpenToy(toy)} className="cursor-pointer rounded-xl border border-[#b2926c] bg-[#fffdf8] px-4 py-3 text-left text-sm font-bold text-[#244c3e] transition-colors hover:bg-[#f5efdf]">看 {toy.name} 的陪玩示範 →</button>)}</div>
      </section>
    </div>
  );
}

export default function ToysPage() {
  const [category, setCategory] = useState<(typeof TOY_GROUPS)[number]>("全部");
  const [query, setQuery] = useState("");
  const [activeToy, setActiveToy] = useState<ToyItem | null>(null);
  const [compareKey, setCompareKey] = useState<string | null>(null);
  const [age, setAge] = useState(2);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setActiveToy(null); setCompareKey(null); } };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const shownToys = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return TOYS.filter((toy) => {
      const inCategory = category === "全部" || toy.group === category;
      const inQuery = !normalized || [toy.id, toy.name, toy.recommend].some((value) => value.toLowerCase().includes(normalized));
      return inCategory && inQuery;
    });
  }, [category, query]);

  const openToy = (toy: ToyItem) => { setAge(2); setCompareKey(null); setActiveToy(toy); };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-32 pt-6 sm:px-6 sm:pt-10">
      <section className="grid gap-7 overflow-hidden rounded-[1.6rem] bg-[#244c3e] px-6 py-8 text-[#fffaf0] shadow-sm lg:grid-cols-[1.6fr_1fr] lg:px-12 lg:py-12">
        <div><p className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#c9d6cc]">Read · Play · Grow</p><h1 className="m-0 max-w-xl font-serif text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">木玩陪玩指南</h1><p className="mt-5 max-w-xl text-sm leading-7 text-[#f4e8d8] sm:text-base">寶寶把杯子遞過來、把車推到你腳邊，常常不是要你做得多厲害，而是在邀請你走進他正在發生的小故事。</p><p className="mt-3 max-w-xl text-sm leading-7 text-[#fffaf0] sm:text-base">我們想把這些日常裡的小小邀請，整理成一份溫柔、好懂、能馬上一起玩的指南。</p></div>
        <aside className="flex items-center border-t border-[#92a396] pt-5 text-lg font-bold leading-8 text-[#f5e4c8] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">每一次遞過來，都是孩子的「陪我一下」。</aside>
      </section>
      <section className="mt-10" aria-labelledby="toy-choose">
        <div className="flex flex-wrap items-end justify-between gap-4"><h2 id="toy-choose" className="m-0 text-2xl font-black text-[#37332f] sm:text-3xl">寶寶最近最愛玩什麼？</h2><label className="flex items-center gap-2 rounded-xl border border-[#e5e1db] bg-white px-3 py-2 text-sm text-[#77716b] shadow-xs"><Search className="h-4 w-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋玩具名稱或貨號" aria-label="搜尋玩具名稱或貨號" className="w-52 bg-transparent outline-none placeholder:text-[#aaa6a0]" /></label></div>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="依玩法篩選">{TOY_GROUPS.map((group) => <button key={group} type="button" onClick={() => setCategory(group)} aria-pressed={category === group} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-colors ${category === group ? "border-[#655f57] bg-[#655f57] text-white" : "border-[#e5e1db] bg-white text-[#37332f] hover:bg-[#e8e4dc]"}`}>{group}</button>)}</div>
        <p className="my-4 text-xs font-medium text-[#77716b]">{shownToys.length} 款木玩</p>
        {shownToys.length === 0 ? <div className="rounded-3xl border border-dashed border-[#e5e1db] bg-white p-10 text-center text-sm text-[#77716b]">沒有找到相符玩具，試試其他名稱或貨號。</div> : <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">{shownToys.map((toy) => <button key={toy.id} type="button" onClick={() => openToy(toy)} className="group flex min-h-[300px] cursor-pointer flex-col rounded-xl border border-[#e5e1db] border-t-4 bg-white p-3 text-left shadow-xs transition hover:-translate-y-0.5 hover:bg-[#fbf8f0] hover:shadow-md" style={{ borderTopColor: ACCENTS[toy.group] }}><img src={toy.image} alt="" className="h-36 w-full rounded-lg bg-[#f3ead9] object-contain p-2" /><span className="mt-3 flex flex-1 flex-col"><span className="text-xs font-medium text-[#77716b]">{toy.group}</span><span className="mt-1 text-lg font-black leading-snug text-[#37332f]">{toy.name}</span><span className="mt-1 text-sm leading-6 text-[#77716b]">{toy.recommend}</span><span className="mt-auto flex items-center gap-2 pt-3 text-sm font-bold text-[#244c3e]"><img src="/toys-guide/play-demo-icon.png" alt="" className="h-7 w-7 object-contain" />陪玩示範</span></span></button>)}</div>}
      </section>
      <FloatingGroupbuyBtn />
      {activeToy && <ToyModal toy={activeToy} age={age} onAgeChange={setAge} onClose={() => setActiveToy(null)} onCompare={() => { setActiveToy(null); setCompareKey(getCompareKey(activeToy.id) ?? null); }} />}
      {compareKey && <CompareModal group={COMPARE_GROUPS[compareKey]} onClose={() => setCompareKey(null)} onOpenToy={openToy} />}
    </div>
  );
}
