import type { ToyItem } from "@/data/toys";

export const TOY_AGE_STAGES = [
  { label: "1～1 歲半", shortLabel: "1～1.5 歲" },
  { label: "1 歲半～2 歲", shortLabel: "1.5～2 歲" },
  { label: "2～2 歲半", shortLabel: "2～2.5 歲" },
  { label: "2 歲半～3 歲", shortLabel: "2.5～3 歲" },
] as const;

export type ToyAgeStageIndex = 0 | 1 | 2 | 3;

export function getToyDevelopmentPrompt(toy: ToyItem, stageIndex: ToyAgeStageIndex) {
  const first = toy.dialogue[0];
  const second = toy.dialogue[1];
  const third = toy.dialogue[2];
  const fourth = toy.dialogue[3];

  switch (stageIndex) {
    case 0:
      return {
        listen: `看到孩子${toy.scene}時，用一兩個詞平行描述：「${first.parent}」說完停幾秒，等孩子用眼神、動作或聲音回應。`,
        speak: `孩子說「${first.child}」或用動作表示時，先接住他的意思：「${first.reply}」不用要求孩子跟著說。`,
      };
    case 1:
      return {
        listen: `孩子重複玩${toy.scene}時，用兩個詞說出動作：「${second.parent}」再留一拍，讓孩子有機會接手。`,
        speak: `孩子說「${second.child}」時，家長只多加一點點意思：「${second.reply}」以回應為主，不急著考孩子。`,
      };
    case 2:
      return {
        listen: `在${toy.scene2}裡，先跟著孩子的興趣說出顏色、大小或位置，給他一個可以模仿的短句：「${third.parent}」`,
        speak: `孩子說「${third.child}」時，順著他的話加上動作或位置：「${third.reply}」說完等他再來一回。`,
      };
    case 3:
      return {
        listen: `玩熟後，陪孩子把動作、位置和結果串成一句：「${fourth.parent}」也留一個回合讓孩子主動接話。`,
        speak: `孩子說「${fourth.child}」時，接長成自然的完整句：「${fourth.reply}」把對話接下去，不要求孩子重複。`,
      };
  }
}
