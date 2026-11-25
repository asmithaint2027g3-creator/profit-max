# Website CTA Audit Report Generator

An automated, non-invasive Python & Playwright CLI tool that audits conversion rates, CTA visibility, form friction, trust signals, and funnel continuity on public websites, generating an executive-ready Landscape A4 infographic PDF, PNG preview, structured JSON, and CSV findings.

---

## 1. Installation & Prerequisites

- **Python**: 3.10+ (tested with Python 3.13)
- **Chromium Browser**: Playwright managed Chromium or Google Chrome

### Install Dependencies
```bash
pip install -r requirements.txt
playwright install chromium
```

---

## 2. Usage & Execution

Run the audit tool from the command line against any target website:

```bash
# Basic run against target site
py tools/cta_audit/main.py --url https://profit-max-delta.vercel.app/

# Custom output directory and page limits
py tools/cta_audit/main.py --url https://profit-max-delta.vercel.app/ --output output/ --max-pages 10
```

---

## 3. Deliverables Generated in `output/`

1. **`cta_audit_report.pdf`**: Finished executive landscape A4 infographic report (Page 1: Executive Scorecard; Page 2: Technical Appendix & Evidence Log).
2. **`cta_audit_preview.png`**: High-resolution 300 DPI preview image of the executive page.
3. **`audit_data.json`**: Structured audit evidence, page metadata, score breakdowns, and recommendations.
4. **`cta_findings.csv`**: Page-level strengths, friction gaps, and priority action fixes.
5. **`page_inventory.csv`**: Discovered pages, HTTP response codes, and CTA counts.

---

## 4. Deterministic Scoring Rubric (0–100 Scale)

The overall score is calculated as a mathematically weighted composite across five foundational pillars:

| Category | Weight | Evaluated Evidence |
| :--- | :---: | :--- |
| **Lead Capture & Forms** | 25% | Multi-step progressive disclosure, field cognitive load (≤4 fields upfront), business email validation, honeypot protection, micro-trust badges adjacent to submit button. |
| **First Impression** | 20% | Above-the-fold CTA visibility on desktop & mobile viewports, high-contrast gradient/prominence, action-oriented copy ("Claim Your Revenue Audit"), dual-track hierarchy without cannibalization. |
| **Trust Building** | 20% | Proximity of enterprise compliance certifications (SOC-2 Type II, ISO 27001), explicit Mutual NDA commitments, 2-Hour Response SLA, and direct links to empirical case studies. |
| **Sales Funnel & Continuity** | 20% | Global header CTA consistency, multi-tier conversion options (Consultation + Free Calculator), persistent sticky conversion dock, zero broken links or dead `#` anchors. |
| **Mobile Usability & Ergonomics** | 15% | Touch target dimensions (≥40-44px), thumb-friendly bottom mobile dock (WhatsApp + Audit trigger), responsive navigation drawer with conversion button. |

$$\text{Overall Score} = \sum (\text{Category Score} \times \text{Weight})$$

---

## 5. Audit Mode & Ethical Safety Constraints

- **Read-Only / Safe Mode**: The tool never submits forms, never creates fake leads, never sends automated emails, and never bypasses authentication gates.
- **Respects Site Terms & Rate Limits**: Uses networkidle delays and configurable concurrency limits to avoid load spikes.

---

## 6. Troubleshooting

- **Browser Executable Not Found**: Ensure Chrome is installed on the machine, or run `py -m playwright install chromium`.
- **Target Timeout**: If target site is on a cold-start hosting platform, increase page navigation timeout in `crawler.py`.

