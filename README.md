# Tech Brief 全球科技晨報

GitHub Pages 固定網址：https://benzh1213.github.io/tech-brief/

## 檔案結構

- `index.html`：本期日期、主題、趨勢、新聞卡片與來源。純 HTML，關閉 JavaScript 仍可閱讀全文及展開詳情。
- `styles.css`：手機／Mac 版型、系統深淺色、列印與減少動態效果設定。
- `app.js`：公司及分類篩選、AI Radar 本期篇數、全部展開、分享、閱讀進度。
- `.nojekyll`：直接以靜態檔案發布，無需安裝或建置。

## 更新晨報

1. 在 GitHub 開啟 `index.html`，點編輯。修改標題、日期、導讀與三大趨勢。
2. 每篇 `<article>` 保留一致結構，修改分類、標題、摘要、分析與原文連結。
3. `data-category` 使用 `AI`、`Robot`、`Security` 或 `Infra`。`data-companies` 使用 `app.js` 既有公司名稱，多家公司以 `|` 分隔，例如 `OpenAI|Microsoft`。沒有明確對應則留空。
4. 公司篇數與 Radar 會依文章自動計算。0 篇只表示本期未收錄，不能解讀為沒有重大新聞。
5. 發布前核對來源、事件日期與金額，區分事實和解讀。完成核實後再更新首頁的「原始示範版」及頁尾狀態。
6. 提交至 `main` 後，GitHub Pages 自動部署。至 Actions 查看結果，再開啟固定網址確認。若未更新，重新整理或等待部署完成。

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)` → Save。
網站與 repository 為公開，請勿放入密碼、API key 或私人資料。新聞僅保留摘要和原文連結。

## 現階段內容狀態

沿用 2026-11-02 原始 HTML 示範內容；本次僅建立網站，未重新核實其中新聞敘述。
自動抓取新聞、每日內容更新與 ChatGPT 通知尚未串接。GitHub Pages 的自動部署只會在檔案提交後執行，並不會自行產生新聞。
先前對話提到的通知時間是 America/Los_Angeles 08:00；本次未檢查或修改該排程，不能視為已確認的亞洲 08:00 推送。

## 閱讀方式

iPhone：Safari 開啟網址 → 分享 → 加入主畫面。Mac：Safari 或 Chrome 加入書籤。深淺色跟隨作業系統。
