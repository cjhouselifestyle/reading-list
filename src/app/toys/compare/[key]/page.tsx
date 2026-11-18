import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompareDetailView } from "@/components/toys/compare-detail";
import { COMPARE_GROUPS } from "@/data/toy-comparisons";

type ComparePageProps = {
  params: Promise<{ key: string }>;
};

export function generateStaticParams() {
  return Object.keys(COMPARE_GROUPS).map((key) => ({ key }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { key } = await params;
  const group = COMPARE_GROUPS[key];
  return group ? { title: `${group.title}｜木玩陪玩指南`, description: group.choice } : { title: "找不到相似木玩比較｜木玩陪玩指南" };
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { key } = await params;
  const group = COMPARE_GROUPS[key];
  if (!group) notFound();
  return <CompareDetailView group={group} />;
}
