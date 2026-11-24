# 認識法布瑞氏症 — 三軍總醫院心臟內科衛教網站

給**病人與家屬**的法布瑞氏症（Fabry disease）衛教網站，特別著重台灣最常見的**心臟型**（IVS4+919G>A）。

> 本網站內容僅供衛教參考，不能取代醫師的診斷與治療。

Copyright © 2026｜本網站由 BKZ 製作，三軍總醫院心臟內科版權所有

## 頁面

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁、三個重點、關鍵數據、各頁導覽 |
| `about.html` | 病因、疾病發展流程、典型與非典型 |
| `cardiac.html` | **心臟型法布瑞氏症**：盛行率與心肌病變數據圖表、心臟變化時間軸、警訊、誰該檢查、心臟檢查、治療追蹤、資料來源 |
| `symptoms.html` | 各器官症狀、成人與兒童表現、何時應懷疑、**症狀自我檢核表** |
| `genetics.html` | X 染色體性聯遺傳、**互動遺傳圖解**、女性檢查、家族檢查 |
| `diagnosis-treatment.html` | 如何發現、器官評估、確認檢查、酵素替代療法、口服藥物、追蹤 |
| `daily-life.html` | 保護心臟、疼痛誘因、防中暑、飲食、上學、心理支持、回診準備 |
| `faq.html` | 常見問答（可摺疊） |
| `resources.html` | 三軍總醫院心臟內科聯絡方式、國內資源、免責聲明 |

## 技術

- 純 HTML / CSS / 原生 JavaScript，**不需要任何建置工具**
- `assets/css/style.css`：全站樣式（支援深色模式、手機版、列印）
- `assets/js/main.js`：手機選單、FAQ 全部展開、圖表提示框
- `assets/js/checklist.js`：症狀自我檢核表（只在瀏覽器內計算，不儲存資料）
- `assets/js/genetics.js`：遺傳圖解
- `assets/img/`：三軍總醫院與心臟內科標誌、網站圖示

## 本機預覽

```bash
python3 -m http.server 8000
```

然後開啟 <http://localhost:8000>。

## 修改內容

- 直接編輯對應的 `.html` 檔即可。
- **頁首、導覽列與頁尾在每一頁都有一份**，修改時請同步更新全部 9 個頁面。
- 心臟型頁面的數據都有標註資料來源（頁面最下方），更新數據時請一併更新來源。

## 部署到 GitHub Pages

1. 到 GitHub repo → **Settings → Pages**。
2. Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
3. 約一分鐘後即可在 `https://<帳號>.github.io/fabry_edu/` 瀏覽。
