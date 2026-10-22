# 🚀 Profit Machines — Google Apps Script Backend Architecture

This directory contains the production Google Apps Script backends powering the **Profit Machines** data infrastructure.

> [!IMPORTANT]
> **Sheet 1** and **Sheet 2** are two distinct Google Spreadsheets with separate Apps Script projects. **Do NOT combine or concatenate them into a single script.**

---

## 📁 File Structure & Mapping

| File | Target Spreadsheet | Spreadsheet ID | Live Web App Endpoint |
| :--- | :--- | :--- | :--- |
| [`SHEET1_DATA_COLLECTION_WEBHOOK.js`](file:///d:/profit-vector--main/google-apps-script/SHEET1_DATA_COLLECTION_WEBHOOK.js) <br> *(alias: [`Code.gs`](file:///d:/profit-vector--main/google-apps-script/Code.gs), [`SHEET1_DATA_COLLECTION_WEBHOOK.gs`](file:///d:/profit-vector--main/google-apps-script/SHEET1_DATA_COLLECTION_WEBHOOK.gs))* | **Sheet 1**<br>(Data Collection & Webhooks) | `1fdZl2it4O86OUB92DvBaeeEM75fXue1yqjcvLq51gVs` | `https://script.google.com/macros/s/AKfycbxnpkQyIM_BYBc9mdR8SskAbzb74v8idiwUMbzLuqKlCGRExzNkwRLloL63KQ-uhRqCYA/exec` |
| [`SHEET2_ANALYTICS_PROCESSING.js`](file:///d:/profit-vector--main/google-apps-script/SHEET2_ANALYTICS_PROCESSING.js) <br> *(alias: [`SHEET2_ANALYTICS_PROCESSING.gs`](file:///d:/profit-vector--main/google-apps-script/SHEET2_ANALYTICS_PROCESSING.gs))* | **Sheet 2**<br>(Executive Analytics Hub) | `1NSnGji4KqVuWaM1jGEjX87mkjFsoVN9u5SG6TJ0qZoU` | `https://script.google.com/macros/s/AKfycbz1gK24YtOmFpuTspRub3iQ5YGEhyvW_S3SqEmIwUg-OmFRbu4WRstiLEaQtOB32U5y/exec` |

---

## 🏗️ 1. Sheet 1: Data Collection Webhook Engine

### Responsibilities:
- **`doPost(e)`**: Ingests live telemetry beacons (95-column schema) and all website form submissions.
- **Drive Resume Archiving**: Base64 decodes uploaded PDF/DOCX resumes and saves them to the Google Drive folder `ProfitMachines_Career_Resumes`.
- **Zero-Delay Notification Emails**: Dispatches high-end branded HTML emails to `poojasri.aram@gmail.com` and `bv@trustflow.in`.
- **Automated Reporting Triggers**:
  - `dailyReport`: 08:30 AM IST daily brief.
  - `weeklyReport`: Friday 08:30 AM IST executive summary.
  - `monthlyReport`: 1st of each month at 08:30 AM IST.
  - `forwardMonthlyCareerApplications`: 1st of each month at 09:00 AM IST candidate digest with Drive attachments.

### Deployment Steps (Sheet 1):
1. Open Spreadsheet `1fdZl2it4O86OUB92DvBaeeEM75fXue1yqjcvLq51gVs`.
2. Go to **Extensions > Apps Script**.
3. Paste the contents of [`SHEET1_DATA_COLLECTION_WEBHOOK.js`](file:///d:/profit-vector--main/google-apps-script/SHEET1_DATA_COLLECTION_WEBHOOK.js) into `Code.gs`.
4. In the function dropdown, run:
   - `initializeMasterTelemetrySheet` (builds the 95-column `Live_Traffic_Events` table).
   - `initializeAllDatabaseTables` (pre-creates all dedicated form tables).
   - `setupAllProfitMachinesTriggers` (registers daily, weekly, and monthly automated cron triggers).
5. Click **Deploy > Manage deployments > Edit > New version > Deploy**.
6. Ensure **Execute as: Me** and **Who has access: Anyone**.

---

## 📊 2. Sheet 2: Executive Analytics Dashboard Engine

### Responsibilities:
- **`PULL_DATA_AND_BUILD_ALL_DASHBOARDS()`**: Reads raw data from Sheet 1 (`DATA_SHEET_ID`), sanitizes localhost/dev test traffic, and builds 16 automated executive intelligence tabs:
  1. `🛰️ Mission Control`
  2. `🚦 Executive KPIs`
  3. `🗺️ Geo Map`
  4. `📏 Pareto (80-20)`
  5. `🕒 Daily Heatmap`
  6. `📈 Growth & Momentum`
  7. `👥 Visitor Ratio`
  8. `📱 Tech Profile`
  9. `🔗 Identity Linker`
  10. `📊 Std Deviation`
  11. `🌊 Sankey Flow`
  12. `🤖 Broken Link QA`
  13. `🔀 Co-Occurrence`
  14. `🔻 Funnel Drops`
  15. `🎯 Lead Scoring`
  16. `📋 Leads & Conversions`
- **`doGet(e)`**: Serves the 16 processed tabs as JSON to the frontend web app (`/analytics` page).
- **Custom UI Menu**: Adds `🚀 PROFIT MACHINES ANALYTICS` to the top menu bar with `🔄 Refresh All 16 Dashboards`.

### Deployment Steps (Sheet 2):
1. Open Spreadsheet `1NSnGji4KqVuWaM1jGEjX87mkjFsoVN9u5SG6TJ0qZoU`.
2. Go to **Extensions > Apps Script**.
3. Paste the contents of [`SHEET2_ANALYTICS_PROCESSING.js`](file:///d:/profit-vector--main/google-apps-script/SHEET2_ANALYTICS_PROCESSING.js) into `Code.gs`.
4. Verify `DATA_SHEET_ID = "1fdZl2it4O86OUB92DvBaeeEM75fXue1yqjcvLq51gVs"`.
5. Run `PULL_DATA_AND_BUILD_ALL_DASHBOARDS` once to generate all 16 tabs.
6. Click **Deploy > Manage deployments > Edit > New version > Deploy** (Who has access: Anyone) to serve the analytics JSON API.

---

## 🔒 Security & Environment Variables

Configure these in `.env` / Vercel:

```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxnpkQyIM_BYBc9mdR8SskAbzb74v8idiwUMbzLuqKlCGRExzNkwRLloL63KQ-uhRqCYA/exec
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxnpkQyIM_BYBc9mdR8SskAbzb74v8idiwUMbzLuqKlCGRExzNkwRLloL63KQ-uhRqCYA/exec
GOOGLE_ANALYTICS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbz1gK24YtOmFpuTspRub3iQ5YGEhyvW_S3SqEmIwUg-OmFRbu4WRstiLEaQtOB32U5y/exec
ANALYTICS_API_KEY=your-secure-shared-key
```
