# 經典繪本｜分齡讀出不同樂趣

這是一個提供家長挑選經典繪本的互動網站，透過年齡、故事主題與孩子最近喜歡的興趣，協助家長找到適合親子共讀的書籍。

## 線上網站

GitHub Pages：<https://cjhouselifestyle.github.io/reading-list/>

## 目前功能

- 保留經典繪本書籍資料與分齡共讀建議
- 依五味太郎精選、故事主題與孩子興趣篩選書籍
- 查看書本亮點、強力推薦對象與最推薦開始閱讀的年紀
- 建立自己的共讀選書清單
- 提供重複語句與 1–3 歲共讀方式
- 支援手機、平板與桌面瀏覽
- 提供「Ollie's Favourites｜歐里的愛書」獨立專區

## 專案結構

```text
.
├── index.html                         # GitHub Pages 使用的網站入口
├── assets/                            # GitHub Pages 使用的圖片素材
├── outputs/
│   ├── index.html                     # 本地較完整的工作版本
│   └── assets/                        # 本地工作版本的圖片素材
├── dist/
│   └── index.html                     # Sites hosting 使用的靜態輸出目錄
└── .openai/hosting.json               # Sites hosting 設定
```

## 本地檔案說明

GitHub Pages 直接使用 repository 根目錄的 `index.html` 與圖片素材。`outputs/` 是本地工作版本，`dist/` 則是 Sites hosting 的部署輸出目錄；兩者不會自動同步到 GitHub Pages。

更新網站時，請確認修改後的 HTML 與圖片已同步到 GitHub Pages 使用的根目錄，並保留圖片相對路徑一致。

## 本地預覽

可以直接用瀏覽器開啟 `outputs/index.html`，或啟動本地端伺服器後測試：

```bash
cd /Users/cassie/Documents/Codex/2026-11-10/referenced-chatgpt-conversation-this-is-an
python3 -m http.server 8000
```

開啟 <http://localhost:8000/outputs/index.html> 即可預覽本地工作版本。

## 更新網站

更新內容後，請確認以下項目：

1. 書籍篩選、彈出視窗與選書清單功能正常。
2. 手機版排版沒有水平溢出。
3. 圖片檔案已放到正確的 `assets/` 位置。
4. GitHub Pages 根目錄的 `index.html` 與素材已更新。
5. 推送後使用硬重新整理查看最新版本。

網站目前由 `cjhouselifestyle/reading-list` repository 的 GitHub Pages 發布。
