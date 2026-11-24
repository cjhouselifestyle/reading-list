"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { FloatingGroupbuyBtn } from "@/components/floating-groupbuy-btn";
import { COMPARE_GROUPS } from "@/data/toy-comparisons";
import { TOY_GROUPS, TOYS, ToyItem } from "@/data/toys";

const ACCENTS: Record<string, string> = {
  小廚房: "#c18b61",
  開店請客: "#b6767c",
  車輛出發: "#7b95ac",
  小手探索: "#83a486",
  音樂與走動: "#a28cae",
};

const TOY_LIST_STATE_KEY = "cj_toys_list_state";
const FEATURED_TOY_IDS = ["5011", "50657", "3634", "50615"] as const;
const AGE_FILTERS = [
  { label: "全部", value: "all" },
  { label: "12m+", value: 12 },
  { label: "18m+", value: 18 },
  { label: "24m+", value: 24 },
  { label: "36m+", value: 36 },
] as const;
type AgeFilter = (typeof AGE_FILTERS)[number]["value"];
type EarlyPlayGroup = {
  age: number;
  label: string;
  ids: readonly string[];
  advice: Record<string, string>;
  reason: string;
  why: Record<string, string>;
};
const EARLY_PLAY_GROUPS: readonly EarlyPlayGroup[] = [
  {
    age: 12,
    label: "12m+",
    ids: ["20192", "40597", "10551", "20259"],
    advice: {
      "20192": "小手已經很有力，可以練習轉、拉、推，給予多感官探索。",
      "40597": "大概一歲前後的寶寶，已經可以敲敲打打了。",
      "10551": "剛會走路的寶寶，可以拉著這個到處走來走去。",
      "20259": "像推車方向盤一樣，可以在上面敲打、轉動，給予多感官探索。",
    },
    reason: "孩子已經可以用手部力量轉、拉、推、敲打，先從自由探索開始，就能玩得很投入。",
    why: {},
  },
  {
    age: 18,
    label: "18m+",
    ids: ["50673", "50666", "50678", "50577", "50576", "50657", "50636", "50665", "50615", "50617", "50646", "50647", "20164", "20211", "20220"],
    advice: {
      "20220": "練習抓握和疊高，享受一推就全部倒下的聲音刺激，也開始觀察自己的動作帶來的因果關係。",
    },
    reason: "這階段的孩子還在感覺動作期，但已經開始能在腦中想像，不一定要看到真實物品才知道怎麼玩，因此很適合玩扮家家酒。",
    why: {
      "20164": "開始理解空間貫穿概念：線從洞的一端進去，會從另一端出來；也能練習雙手分工，一手固定珠子、一手穿線。",
      "20211": "開始理解因果關係：把球放進去就會滾出來，也會慢慢建立物體恆存概念——球鑽進隧道不見了，等一下還是會從出口跑出來。",
    },
  },
  {
    age: 24,
    label: "24m+",
    ids: ["20180", "54556"],
    advice: {},
    reason: "孩子逐漸能把手部操作和簡單的順序、數量或結果連在一起，可以開始加入一點小挑戰。",
    why: {
      "54556": "孩子開始對一對一對應有概念，會嘗試手指著物品、嘴巴同時唸數字，慢慢建立「一個物品配一個數字」。",
      "20180": "發展雙手協調：一手固定底座、一手轉動，也能練習形狀、顏色配對，慢慢理解順時針鎖緊、逆時針轉開的方向感。",
    },
  },
] as const;

function getAgeFilterLabel(toy: ToyItem) {
  return AGE_FILTERS.find((filter) => filter.value === toy.minMonths)?.label ?? toy.ageLabel;
}

function getEarlyPlayItems(ids: readonly string[]) {
  return ids.map((id) => TOYS.find((toy) => toy.id === id)).filter((toy): toy is ToyItem => Boolean(toy));
}

function getCompareItems(ids: string[]) {
  return ids.map((id) => TOYS.find((toy) => toy.id === id)).filter((toy): toy is ToyItem => Boolean(toy));
}

export default function ToysPage() {
  const [category, setCategory] = useState<(typeof TOY_GROUPS)[number]>("全部");
  const [ageFilter, setAgeFilter] = useState<AgeFilter>("all");
  const [query, setQuery] = useState("");
  const [showAllToys, setShowAllToys] = useState(false);

  const saveListState = (target: { toyId?: string; compareKey?: string }) => {
    try {
        sessionStorage.setItem(TOY_LIST_STATE_KEY, JSON.stringify({ category, ageFilter, query, showAllToys, scrollY: window.scrollY, ...target }));
    } catch {}
  };

  useEffect(() => {
    const restoreListState = () => {
      try {
        const saved = sessionStorage.getItem(TOY_LIST_STATE_KEY);
        if (!saved) return;
        sessionStorage.removeItem(TOY_LIST_STATE_KEY);
        const state = JSON.parse(saved) as { category?: string; ageFilter?: AgeFilter; query?: string; showAllToys?: boolean; scrollY?: number; toyId?: string; compareKey?: string };
        const savedCategory = TOY_GROUPS.find((group) => group === state.category);
        const savedAgeFilter = AGE_FILTERS.find((filter) => filter.value === state.ageFilter)?.value;
        window.setTimeout(() => {
          if (savedCategory) setCategory(savedCategory);
          if (savedAgeFilter) setAgeFilter(savedAgeFilter);
          if (typeof state.query === "string") setQuery(state.query);
          if (typeof state.showAllToys === "boolean") setShowAllToys(state.showAllToys);
          const restoreScroll = () => {
            const targetHref = state.toyId ? `/toys/${state.toyId}` : state.compareKey ? `/toys/compare/${state.compareKey}` : null;
            const target = targetHref ? document.querySelector(`a[href="${targetHref}"]`) : null;
            if (target instanceof HTMLElement) {
              target.scrollIntoView({ block: "center", behavior: "auto" });
            } else {
              window.scrollTo({ top: typeof state.scrollY === "number" ? state.scrollY : 0, behavior: "auto" });
            }
          };
          window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.requestAnimationFrame(restoreScroll)));
        }, 0);
      } catch {}
    };

    const restoreTimer = window.setTimeout(restoreListState, 0);
    window.addEventListener("pageshow", restoreListState);
    return () => {
      window.clearTimeout(restoreTimer);
      window.removeEventListener("pageshow", restoreListState);
    };
  }, []);

  const isDefaultAllList = category === "全部" && ageFilter === "all" && !query.trim();

  const shownToys = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = TOYS.filter((toy) => {
      const inCategory = category === "全部" || toy.group === category;
      const inAge = ageFilter === "all" || toy.minMonths === ageFilter;
      const inQuery = !normalized || [toy.id, toy.name, toy.recommend].some((value) => value.toLowerCase().includes(normalized));
      return inCategory && inAge && inQuery;
    });

    if (!isDefaultAllList) return filtered;

    const featured = FEATURED_TOY_IDS.map((id) => filtered.find((toy) => toy.id === id)).filter((toy): toy is ToyItem => Boolean(toy));
    const featuredIds = new Set(featured.map((toy) => toy.id));
    return [...featured, ...filtered.filter((toy) => !featuredIds.has(toy.id))];
  }, [ageFilter, category, isDefaultAllList, query]);

  const initialToys = isDefaultAllList ? shownToys.filter((toy) => FEATURED_TOY_IDS.includes(toy.id as (typeof FEATURED_TOY_IDS)[number])) : shownToys.slice(0, 8);
  const toysToRender = showAllToys ? shownToys : initialToys;
  const toggleVisibility = showAllToys ? "" : shownToys.length <= 6 ? "sm:hidden" : shownToys.length <= 8 ? "lg:hidden" : "";
  const earlyPlayGroup = EARLY_PLAY_GROUPS.find((group) => group.age === ageFilter);
  const earlyPlayItems = earlyPlayGroup ? getEarlyPlayItems(earlyPlayGroup.ids) : [];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-32 pt-6 sm:px-6 sm:pt-10">
      <section className="grid gap-7 overflow-hidden rounded-[1.6rem] bg-[#244c3e] px-6 py-8 text-[#fffaf0] shadow-sm lg:grid-cols-[1.6fr_1fr] lg:px-12 lg:py-12">
        <div><p className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#c9d6cc]">Read · Play · Grow</p><h1 className="m-0 max-w-xl font-serif text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">木玩陪玩指南</h1><p className="mt-5 max-w-xl text-sm leading-7 text-[#f4e8d8] sm:text-base">寶寶把杯子遞過來、把車推到你腳邊，常常不是要你做得多厲害，而是在邀請你走進他正在發生的小故事。</p><p className="mt-3 max-w-xl text-sm leading-7 text-[#fffaf0] sm:text-base">我們想把這些日常裡的小小邀請，整理成一份溫柔、好懂、能馬上一起玩的指南。</p></div>
        <aside className="flex items-center border-t border-[#92a396] pt-5 text-lg font-bold leading-8 text-[#f5e4c8] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">每一次遞過來，都是孩子的「陪我一下」。</aside>
      </section>

      <section className="mt-10" aria-labelledby="toy-choose">
        <div className="flex flex-wrap items-end justify-between gap-4"><h2 id="toy-choose" className="m-0 text-2xl font-black text-[#37332f] sm:text-3xl">寶寶最近愛玩什麼？</h2><label className="flex items-center gap-2 rounded-xl border border-[#e5e1db] bg-white px-3 py-2 text-sm text-[#77716b] shadow-xs"><Search className="h-4 w-4" /><input value={query} onChange={(event) => { setQuery(event.target.value); setShowAllToys(false); }} placeholder="搜尋玩具名稱或貨號" aria-label="搜尋玩具名稱或貨號" className="w-52 bg-transparent outline-none placeholder:text-[#aaa6a0]" /></label></div>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="依玩法篩選">{TOY_GROUPS.map((group) => <button key={group} type="button" onClick={() => { setCategory(group); setShowAllToys(false); }} aria-pressed={category === group} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-colors ${category === group ? "border-[#655f57] bg-[#655f57] text-white" : "border-[#e5e1db] bg-white text-[#37332f] hover:bg-[#e8e4dc]"}`}>{group}</button>)}</div>
        <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="依適玩年齡篩選"><span className="px-1 text-sm font-bold text-[#77716b]">適玩年齡</span>{AGE_FILTERS.map((filter) => <button key={filter.label} type="button" onClick={() => { setAgeFilter(filter.value); setShowAllToys(false); }} aria-pressed={ageFilter === filter.value} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-colors ${ageFilter === filter.value ? "border-[#655f57] bg-[#655f57] text-white" : "border-[#e5e1db] bg-white text-[#37332f] hover:bg-[#e8e4dc]"}`}>{filter.label}</button>)}</div>
        <p className="my-4 text-xs font-medium text-[#77716b]">{shownToys.length} 款木玩</p>
        {shownToys.length === 0 ? <div className="rounded-3xl border border-dashed border-[#e5e1db] bg-white p-10 text-center text-sm text-[#77716b]">沒有找到相符玩具，試試其他名稱或貨號。</div> : <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">{toysToRender.map((toy, index) => { const visibility = showAllToys || isDefaultAllList ? "" : index >= 6 ? "hidden lg:flex" : index >= 4 ? "hidden sm:flex" : ""; return <Link key={toy.id} href={`/toys/${toy.id}`} onClick={() => saveListState({ toyId: toy.id })} className={`group flex min-h-[270px] cursor-pointer flex-col rounded-xl border border-t-4 bg-white p-3 text-left shadow-xs transition hover:-translate-y-0.5 hover:bg-[#fbf8f0] hover:shadow-md sm:min-h-[300px] ${visibility}`} style={{ borderTopColor: ACCENTS[toy.group] }}><div className="relative"><img src={toy.image} alt={`${toy.name} 商品圖`} className="h-28 w-full rounded-lg bg-[#f3ead9] object-contain p-2 sm:h-36" /></div><span className="mt-3 flex flex-1 flex-col"><span className="text-[11px] font-medium text-[#77716b] sm:text-xs">{toy.group}</span><span className="mt-1 text-base font-black leading-snug text-[#37332f] sm:text-lg">{toy.name}</span><span className="mt-1 text-xs font-bold text-[#53655a] sm:text-sm">適玩年齡 {getAgeFilterLabel(toy)}</span><span className="mt-1 line-clamp-2 text-xs leading-5 text-[#77716b] sm:text-sm sm:leading-6">{toy.recommend}</span><span className="mt-auto pt-3 text-xs font-bold text-[#244c3e] sm:text-sm">看陪玩示範 →</span></span></Link>; })}</div>}
        {shownToys.length > 4 && <button type="button" onClick={() => setShowAllToys((current) => !current)} aria-expanded={showAllToys} className={`mx-auto mt-5 flex cursor-pointer items-center gap-2 rounded-full border border-[#b2926c] bg-[#fffdf8] px-5 py-2.5 text-sm font-bold text-[#244c3e] transition-colors hover:bg-[#f5efdf] ${toggleVisibility}`}>{showAllToys ? "收合商品" : `查看全部 ${shownToys.length} 款木玩`}{showAllToys ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button>}

        {earlyPlayGroup && <section className="mt-10 border-t-2 border-dashed border-[#d8d9ce] pt-8" aria-labelledby={`early-play-${earlyPlayGroup.age}`}>
          <div className="rounded-3xl bg-[#edf2e9] p-5 sm:p-7">
            <h3 id={`early-play-${earlyPlayGroup.age}`} className="m-0 text-xl font-black text-[#244c3e] sm:text-2xl">其實，{earlyPlayGroup.label} 開始就可以玩的</h3>
            <p className="mt-2 text-sm leading-6 text-[#53655a]"><strong className="text-[#244c3e]">為什麼：</strong>{earlyPlayGroup.reason}</p>
            <p className="mt-1 text-sm leading-6 text-[#53655a]">安全小提醒：注意可能有的小零件，家長全程陪同會更安心喔！</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {earlyPlayItems.map((toy) => <Link key={toy.id} href={`/toys/${toy.id}`} onClick={() => saveListState({ toyId: toy.id })} className="group cursor-pointer rounded-2xl border border-[#d5e0d4] bg-white p-3 transition hover:-translate-y-0.5 hover:bg-[#fbf8f0] hover:shadow-md"><img src={toy.image} alt={`${toy.name} 商品縮圖`} className="h-24 w-full rounded-xl bg-[#f3ead9] object-contain p-2" /><span className="mt-2 block text-sm font-black leading-5 text-[#243a32]">{toy.name}</span><span className="mt-1 block text-xs leading-5 text-[#77716b]">目前標示 {getAgeFilterLabel(toy)}</span>{earlyPlayGroup.why[toy.id] && <span className="mt-2 block text-xs leading-5 text-[#53655a]"><strong className="text-[#244c3e]">為什麼：</strong>{earlyPlayGroup.why[toy.id]}</span>}{earlyPlayGroup.advice[toy.id] && <span className="mt-2 block text-xs leading-5 text-[#53655a]"><strong className="text-[#244c3e]">可以這樣玩：</strong>{earlyPlayGroup.advice[toy.id]}</span>}</Link>)}
            </div>
          </div>
        </section>}
      </section>

      <section className="mt-16" aria-labelledby="similar-toys">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#77716b]">一起找到適合的玩法</p><h2 id="similar-toys" className="m-0 flex items-center gap-2 text-2xl font-black text-[#37332f] sm:text-3xl"><img src="/toys-guide/compare-icon.png" alt="" className="h-8 w-8" />相似木玩怎麼選？</h2></div><p className="m-0 max-w-md text-sm leading-6 text-[#77716b]">如果正在兩款木玩之間猶豫，可以先看玩法、配件與內容物的差異，再決定哪一款更適合孩子。</p></div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">{Object.entries(COMPARE_GROUPS).map(([key, group]) => { const items = getCompareItems(group.ids); return <Link key={key} href={`/toys/compare/${key}`} onClick={() => saveListState({ compareKey: key })} className="group cursor-pointer rounded-2xl border border-[#e5e1db] bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:bg-[#fbf8f0] hover:shadow-md"><div className="grid grid-cols-2 gap-3">{items.map((toy) => <div key={toy.id} className="min-w-0"><img src={toy.image} alt={`${toy.name} 商品縮圖`} className="h-24 w-full rounded-xl bg-[#f3ead9] object-contain p-2 sm:h-32" /><p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-[#243a32]">{toy.name}</p></div>)}</div><h3 className="mt-4 text-base font-black text-[#244c3e]">{group.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-[#77716b]">{group.choice}</p><span className="mt-3 inline-flex items-center text-sm font-bold text-[#244c3e]">查看比較詳情 →</span></Link>; })}</div>
      </section>

      <FloatingGroupbuyBtn />
    </div>
  );
}
