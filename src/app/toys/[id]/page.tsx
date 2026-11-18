import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToyDetailView } from "@/components/toys/toy-detail";
import { TOYS } from "@/data/toys";

type ToyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return TOYS.map((toy) => ({ id: toy.id }));
}

export async function generateMetadata({ params }: ToyPageProps): Promise<Metadata> {
  const { id } = await params;
  const toy = TOYS.find((item) => item.id === id);
  return toy ? { title: `${toy.name}｜木玩陪玩指南`, description: `${toy.name} 的適玩年齡、陪玩示範與寶寶接話建議。` } : { title: "找不到木玩｜木玩陪玩指南" };
}

export default async function ToyPage({ params }: ToyPageProps) {
  const { id } = await params;
  const toy = TOYS.find((item) => item.id === id);
  if (!toy) notFound();
  return <ToyDetailView toy={toy} />;
}
