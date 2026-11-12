import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function PublishersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 bg-[#e8e2d8] text-[#716a61] rounded-3xl mx-auto flex items-center justify-center mb-6">
        <BookOpen className="w-8 h-8" />
      </div>
      <small className="text-[11px] font-bold tracking-[3px] text-[#77716b] uppercase block mb-1">
        Coming Soon
      </small>
      <h1 className="text-3xl font-extrabold text-[#37332f] mb-3">
        其他出版社選書
      </h1>
      <p className="text-sm text-[#77716b] max-w-md mx-auto mb-8 leading-relaxed">
        未來將持續擴充更多優質出版社的精選繪本、科普翻翻書與得獎圖畫書推薦。
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#655f57] text-white text-xs font-bold hover:bg-[#524d46] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回經典繪本書單</span>
      </Link>
    </div>
  );
}
