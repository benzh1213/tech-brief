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

2026-11-02正式版已用具體新聞來源替換原示範內容；每篇分列事實、編輯分析及事件／發布日期。

目前採用Mac連線後每日一次的更新流程：App運行時約每5分鐘檢查，當日未完成才收集及核實新聞、提交main並驗證公開頁。只有網站發布成功後，才按需觸發既有ChatGPT雲端晨報任務。已取消固定07:30／08:00時程；雲端任務的自動排程保持暫停，使用「立即執行」交付。

每日以Asia/Shanghai日期計數，實際執行最多3次；單純讀取狀態不計次。第3次失敗後暫停當日嘗試並回報原因，隔日重設。網站已發布時僅恢復雲端交付，不重新生成；狀態不明先查紀錄，登入或授權問題等待使用者處理。

Mac必須開機、App運行且網路與GitHub登入有效。每日成功狀態存於執行工作目錄，不存入公開repository；當天已完成則不重複生成或交付。GitHub Pages僅負責提交後部署，不自行產生新聞。

## 閱讀方式

iPhone：Safari 開啟網址 → 分享 → 加入主畫面。Mac：Safari 或 Chrome 加入書籤。深淺色跟隨作業系統。

