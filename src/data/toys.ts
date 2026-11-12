// 未來玩具選物專區資料結構
export interface ToyItem {
  id: number;
  name: string;
  category: string;
  ageRange: string;
  description: string;
  cover?: string;
  link?: string;
}

export const TOYS: ToyItem[] = [
  // 未來新增玩具時直接加在這邊
];
