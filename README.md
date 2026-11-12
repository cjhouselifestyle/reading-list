# 經典繪本｜分齡讀出不同樂趣（CJ House Lifestyle）

這是一個提供家長挑選經典繪本的互動式親子共讀指南網站。家長可透過年齡（1–3 歲）、故事主題與孩子最近的興趣，快速篩選出最適合親子共讀的書籍，查看重複語句延伸建議，並一鍵建立個人專屬選書清單。

- **線上網址**：[https://cjhouse.vercel.app](https://cjhouse.vercel.app)
- **Instagram**：`@cjhouse.lifestyle`

---

## 專案特色與架構

本專案採用現代化前端架構 **Next.js (App Router) + React + TypeScript + Tailwind CSS**，並依主題進行模組化規劃：

- 📖 **經典繪本書單 (`/`)**：收錄經典繪本、五味太郎精選與團購熱門書單，提供分齡共讀重點與重複句型。
- 🧸 **玩具選物專區 (`/toys`)**：為未來規劃中的 0–6 歲分齡玩具、益智教具與開放式遊玩選物。
- 📚 **其他出版社專區 (`/publishers`)**：為未來擴充其他出版社精選書單保留的獨立空間。

### 專案結構

```text
reading-list/
├── src/
│   ├── app/                         # App Router 頁面路由
│   │   ├── layout.tsx               # 全站共同外框 (Navbar, Footer, Meta)
│   │   ├── page.tsx                 # 首頁：經典繪本書單
│   │   ├── toys/page.tsx            # 玩具選物專區（即將推出）
│   │   ├── publishers/page.tsx      # 其他出版社選書（即將推出）
│   │   └── globals.css              # 全域樣式與色系定義
│   │
│   ├── components/                  # 核心介面元件
│   │   ├── navbar.tsx               # 頂部導覽列（切換繪本、玩具、出版社）
│   │   ├── book-card.tsx            # 書本書卡（封面、書名、合購標記）
│   │   ├── book-modal.tsx           # 書本詳細彈窗（分齡共讀 1-3 歲、重複語句）
│   │   ├── book-filters.tsx         # 篩選工具列（系列、故事主題、孩子興趣、團購入口）
│   │   ├── ollie-section.tsx        # 歐里的愛書專區
│   │   └── my-list-drawer.tsx       # 底部常駐列、我的書單檢視、匯出 PDF 與複製
│   │
│   ├── data/                        # 業務資料層（未來擴充只需編輯此處）
│   │   ├── picture-books.ts         # 繪本書籍資料庫、團購套組、分齡建議
│   │   ├── toys.ts                  # 玩具資料結構（未來填入商品即可）
│   │   └── other-publishers.ts      # 其他出版社書籍資料（未來填入即可）
│   │
│   ├── types/                       # TypeScript 型別定義
│   │   └── index.ts                 # Book, FilterState, BundleRule 等型別
│   │
│   └── lib/                         # 工具函式庫 (cn 等)
│       └── utils.ts
│
├── public/                          # 靜態圖檔與 Icons
└── package.json
```

---

## 本地開發

### 1. 安裝套件
```bash
npm install
```

### 2. 啟動本機開發伺服器
```bash
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000) 即可即時預覽與熱更新開發。

### 3. 編譯打包測試
```bash
npm run build
```

---

## 部署說明（推薦使用 Vercel）

本專案已完全相容 Vercel 自動化部署：
1. 將程式碼推送到 GitHub：
   ```bash
   git add .
   git commit -m "feat: 重構為 Next.js + React 模組化架構"
   git push origin main
   ```
2. 在 Vercel 匯入該 GitHub Repository，Vercel 將自動辨識 Next.js 並進行編譯上線。
3. 可至 Vercel 專案設定將 Domain 設為 `cjhouse.vercel.app`。

---

## 未來擴充指引

- **新增/修改繪本**：直接編輯 `src/data/picture-books.ts` 中的 `PICTURE_BOOKS` 陣列。
- **上架玩具選物**：直接在 `src/data/toys.ts` 填入玩具商品資料，並在 `src/app/toys/page.tsx` 渲染。
- **上架其他出版社**：直接在 `src/data/other-publishers.ts` 填入新出版社選書資料。
