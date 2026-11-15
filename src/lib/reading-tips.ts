import { Book } from "@/types";

const AGE_ACTIONS: Record<number, string> = {
  1: "大人可以先示範一次，讓孩子用指一指、摸一摸或發出聲音來參與。",
  2: "也可以請孩子自己做一次、找一次，或說出一個剛剛發現的線索。",
  3: "讀完後請孩子說說自己的想法，或用玩具把故事情境演一遍。",
};

/**
 * 每本書的 tips 依序對應 1、2、3 歲；顯示時補足一個符合該年齡的可執行做法。
 */
export function getReadingTip(book: Book, age: number): string {
  const tip = book.tips[age - 1] || book.tips[0] || "暫無建議";
  const sentenceCount = tip.split(/[。！？!?]/).filter(Boolean).length;

  return sentenceCount >= 2 ? tip : `${tip} ${AGE_ACTIONS[age] || AGE_ACTIONS[1]}`;
}
