import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "木玩陪玩指南｜CJ House Lifestyle",
  description: "用 30 款木玩陪孩子一起玩，查看分齡陪玩示範與自然口語接話建議。",
};

export default function ToysLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
