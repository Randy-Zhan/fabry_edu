# 認識法布瑞氏症 — 衛教網站

給**病人與家屬**的法布瑞氏症（Fabry disease）衛教網站。內容主要整理自臺北榮民總醫院遺傳諮詢中心／兒童醫學部〈法布瑞氏症 Fabry Disease〉衛教資料（最後更新 2024/03/15），部分補充段落標示為「初稿・待醫師審閱」。

> 本網站僅供衛教參考，不能取代醫師的診斷與治療。本網站並非醫院官方網站。

## 頁面

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁、三個重點、各頁導覽 |
| `about.html` | 病因、疾病發展流程、典型與非典型、台灣心臟型（IVS4+919G>A） |
| `symptoms.html` | 各器官症狀、依年齡的表現、何時應懷疑、**症狀自我檢核表** |
| `genetics.html` | X 染色體性聯遺傳、**互動遺傳圖解**、女性帶因者、家族檢查 |
| `diagnosis-treatment.html` | 新生兒篩檢、初步與確認檢查、酵素替代療法、症狀治療、追蹤 |
| `daily-life.html` | 疼痛誘因、防中暑、飲食、上學、心理支持、回診準備 |
| `faq.html` | 常見問答（可摺疊） |
| `resources.html` | 北榮就診地點、聯絡電話、病友團體、免責聲明 |

## 技術

- 純 HTML / CSS / 原生 JavaScript，**不需要任何建置工具**
- `assets/css/style.css`：全站樣式（支援深色模式、手機版、列印）
- `assets/js/main.js`：手機選單、FAQ 全部展開
- `assets/js/checklist.js`：症狀自我檢核表（只在瀏覽器內計算，不儲存資料）
- `assets/js/genetics.js`：遺傳圖解

## 本機預覽

```bash
python3 -m http.server 8000
```

然後開啟 <http://localhost:8000>。

## 修改內容

- 直接編輯對應的 `.html` 檔即可。
- **導覽列與頁尾在每一頁都有一份**，修改時請同步更新全部 8 個頁面。
- 每個內容區塊都有來源標記：
  - `<section data-source="vghtpe">`：整理自北榮衛教資料
  - `<section class="needs-review" data-source="draft">`：補充初稿，會以淺紫底色與「初稿・待醫師審閱」標籤顯示
- 醫師審閱通過後：把 `class="needs-review"` 移除、`data-source` 改為 `reviewed`，並把區塊內的 `<p class="source-tag">…</p>` 改成適當文字或刪除；同時更新 `CONTENT_SOURCES.md`。

## 部署到 GitHub Pages

1. 把分支合併到 `main`。
2. 到 GitHub repo → **Settings → Pages**。
3. Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 約一分鐘後即可在 `https://<帳號>.github.io/fabry_edu/` 瀏覽。
