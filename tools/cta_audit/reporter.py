"""
Executive Report and Multi-Format Output Generator.
Generates:
1. output/cta_audit_report.pdf (Landscape A4 Executive Summary + Technical Appendix)
2. output/cta_audit_preview.png (High-Res 300 DPI preview)
3. output/audit_data.json
4. output/cta_findings.csv
5. output/page_inventory.csv
"""

import os
import csv
import json
from playwright.sync_api import sync_playwright

class ReportGenerator:
    def __init__(self, crawl_data, score_data, findings_data, output_dir="output"):
        self.crawl = crawl_data
        self.scores = score_data
        self.findings = findings_data
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)

    def write_json(self):
        json_path = os.path.join(self.output_dir, "audit_data.json")
        full_data = {
            "metadata": self.findings["coverage"],
            "scoring": self.scores,
            "findings": self.findings,
            "inventory": self.crawl["inventory"],
            "ctas_sample": self.crawl["ctas"][:50]
        }
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(full_data, f, indent=2)
        print(f"[REPORTER] Saved JSON: {json_path}")
        return json_path

    def write_csvs(self):
        # 1. Page Inventory CSV
        inv_path = os.path.join(self.output_dir, "page_inventory.csv")
        with open(inv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["Page URL", "Path", "HTTP Status", "Title", "Desktop CTAs", "Forms Found", "Trust Badges Verified"])
            for p in self.crawl["inventory"]:
                writer.writerow([
                    p["url"],
                    p["path"],
                    p["status_code"],
                    p["title"],
                    p["desktop_cta_count"],
                    p["forms_count"],
                    "; ".join(p.get("trust_signals_found", []))
                ])
        print(f"[REPORTER] Saved CSV: {inv_path}")

        # 2. CTA Findings CSV
        findings_path = os.path.join(self.output_dir, "cta_findings.csv")
        with open(findings_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["Category", "Area / Title", "Severity / Rating", "Page / Location", "Evidence / Observation", "Recommendation / Impact"])
            for w in self.findings["what_is_working"]:
                writer.writerow(["Strength", w["area"], "Positive", w["page"], w["evidence"], w["impact"]])
            for g in self.findings["cta_gaps"]:
                writer.writerow(["Gap", g["area"], g["severity"], g["page"], g["observed"], g["recommendation"]])
            for fix in self.findings["top_5_fixes"]:
                writer.writerow(["Priority Fix", f"#{fix['rank']}: {fix['title']}", fix["impact"], "Sitewide", fix["action"], f"Effort: {fix['effort']} | Confidence: {fix['confidence']}"])
        print(f"[REPORTER] Saved CSV: {findings_path}")

    def generate_html_template(self):
        sc = self.scores
        cats = sc["categories"]
        fd = self.findings
        cov = fd["coverage"]

        # Helper to compute SVG gauge circle
        def gauge_svg(score, size=76, color="#2563eb", stroke_width=6):
            r = (size - stroke_width * 2) / 2
            circ = 2 * 3.14159 * r
            offset = circ - (score / 100.0) * circ
            return f"""
            <svg width="{size}" height="{size}" class="gauge-svg">
                <circle cx="{size/2}" cy="{size/2}" r="{r}" stroke="#e2e8f0" stroke-width="{stroke_width}" fill="none"/>
                <circle cx="{size/2}" cy="{size/2}" r="{r}" stroke="{color}" stroke-width="{stroke_width}" fill="none"
                    stroke-dasharray="{circ}" stroke-dashoffset="{offset}" stroke-linecap="round"
                    transform="rotate(-90 {size/2} {size/2})"/>
                <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="16" font-weight="800" fill="#0f172a" font-family="'Inter', sans-serif">{score}</text>
            </svg>
            """

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CTA Audit Report - TrustGrid.ai</title>
<style>
    @page {{
        size: A4 landscape;
        margin: 0;
    }}
    * {{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }}
    body {{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #f8fafc;
        color: #0f172a;
        width: 297mm;
        margin: 0 auto;
        font-size: 11px;
        line-height: 1.35;
    }}
    .page-container {{
        width: 297mm;
        height: 210mm;
        padding: 10mm 12mm 8mm 12mm;
        background: #ffffff;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        page-break-after: always;
    }}
    .header-bar {{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 2px solid #0f172a;
    }}
    .header-brand {{
        display: flex;
        align-items: center;
        gap: 10px;
    }}
    .brand-pill {{
        background: #0f172a;
        color: #ffffff;
        font-weight: 800;
        font-size: 10px;
        padding: 4px 8px;
        border-radius: 4px;
        letter-spacing: 0.1em;
    }}
    .report-title {{
        font-size: 18px;
        font-weight: 900;
        color: #0f172a;
        letter-spacing: -0.02em;
    }}
    .header-meta {{
        text-align: right;
        font-size: 9.5px;
        color: #64748b;
    }}
    .header-meta strong {{
        color: #0f172a;
    }}
    .badge-live {{
        display: inline-block;
        background: #dcfce7;
        color: #166534;
        font-weight: 700;
        font-size: 9px;
        padding: 2px 6px;
        border-radius: 4px;
        margin-left: 6px;
        border: 1px solid #bbf7d0;
    }}

    /* Scorecard Row */
    .scorecard-row {{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;
        margin-top: 8px;
    }}
    .score-card {{
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }}
    .score-card.hero-card {{
        background: #eff6ff;
        border-color: #bfdbfe;
    }}
    .score-card-text {{
        flex: 1;
    }}
    .score-card-title {{
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        color: #475569;
        letter-spacing: 0.05em;
    }}
    .score-card-subtitle {{
        font-size: 9px;
        color: #64748b;
        margin-top: 1px;
    }}

    /* Middle Row (3 Panels) */
    .grid-3 {{
        display: grid;
        grid-template-columns: 1.15fr 1fr 1fr;
        gap: 8px;
        margin-top: 8px;
    }}
    .panel {{
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 8px 10px;
        display: flex;
        flex-direction: column;
    }}
    .panel-header {{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        margin-bottom: 6px;
        border-bottom: 1.5px solid #f1f5f9;
    }}
    .panel-title {{
        font-size: 11px;
        font-weight: 800;
        color: #0f172a;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }}
    .panel-badge {{
        font-size: 8.5px;
        font-weight: 700;
        padding: 1px 5px;
        border-radius: 3px;
    }}
    .badge-green {{ background: #dcfce7; color: #166534; }}
    .badge-orange {{ background: #ffedd5; color: #9a3412; }}
    .badge-blue {{ background: #dbeafe; color: #1e40af; }}

    /* Working items */
    .working-item {{
        display: flex;
        align-items: flex-start;
        gap: 6px;
        margin-bottom: 5px;
    }}
    .icon-check {{
        color: #16a34a;
        font-weight: 900;
        font-size: 11px;
        margin-top: 1px;
    }}
    .working-text strong {{
        color: #0f172a;
        font-size: 10px;
    }}
    .working-text p {{
        font-size: 9px;
        color: #475569;
        line-height: 1.25;
    }}

    /* Gaps items */
    .gap-item {{
        margin-bottom: 5px;
        padding: 4px 6px;
        background: #fffaf5;
        border-left: 2.5px solid #ea580c;
        border-radius: 0 4px 4px 0;
    }}
    .gap-header {{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
    }}
    .gap-title {{
        font-size: 9.5px;
        font-weight: 800;
        color: #0f172a;
    }}
    .gap-sev {{
        font-size: 8px;
        font-weight: 800;
        text-transform: uppercase;
        padding: 1px 4px;
        border-radius: 2px;
        background: #fed7aa;
        color: #9a3412;
    }}
    .gap-desc {{
        font-size: 8.5px;
        color: #475569;
        line-height: 1.25;
    }}

    /* Hierarchy items */
    .tier-box {{
        margin-bottom: 5px;
        padding: 5px 7px;
        border-radius: 5px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
    }}
    .tier-label {{
        font-size: 8px;
        font-weight: 800;
        text-transform: uppercase;
        color: #2563eb;
        letter-spacing: 0.05em;
    }}
    .tier-name {{
        font-size: 10px;
        font-weight: 800;
        color: #0f172a;
        margin: 1px 0;
    }}
    .tier-desc {{
        font-size: 8.5px;
        color: #64748b;
    }}

    /* Lower Row */
    .grid-lower {{
        display: grid;
        grid-template-columns: 1fr 1.35fr 1fr;
        gap: 8px;
        margin-top: 8px;
    }}
    .table-compact {{
        width: 100%;
        border-collapse: collapse;
        font-size: 8.5px;
    }}
    .table-compact th {{
        text-align: left;
        font-weight: 800;
        color: #475569;
        padding: 3px 4px;
        border-bottom: 1.5px solid #e2e8f0;
        font-size: 8px;
        text-transform: uppercase;
    }}
    .table-compact td {{
        padding: 3.5px 4px;
        border-bottom: 1px solid #f1f5f9;
        color: #334155;
    }}
    .table-compact tr:last-child td {{
        border-bottom: none;
    }}

    /* Bottom Action Strip */
    .action-strip {{
        background: #0f172a;
        color: #ffffff;
        border-radius: 8px;
        padding: 7px 12px;
        display: grid;
        grid-template-columns: 140px repeat(4, 1fr);
        align-items: center;
        gap: 10px;
        margin-top: 8px;
    }}
    .action-strip-title {{
        font-size: 10px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #93c5fd;
    }}
    .action-step {{
        border-left: 1px solid rgba(255,255,255,0.15);
        padding-left: 8px;
    }}
    .step-num {{
        font-size: 8px;
        font-weight: 800;
        color: #60a5fa;
        text-transform: uppercase;
    }}
    .step-title {{
        font-size: 9px;
        font-weight: 700;
        color: #ffffff;
        white-space: nowrap;
    }}
    .step-sub {{
        font-size: 8px;
        color: #94a3b8;
    }}

    /* Appendix Page */
    .appendix-page {{
        width: 297mm;
        height: 210mm;
        padding: 10mm 12mm;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }}
    .appendix-header {{
        border-bottom: 2px solid #0f172a;
        padding-bottom: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }}
</style>
</head>
<body>

<!-- PAGE 1: EXECUTIVE INFOGRAPHIC SCORECARD -->
<div class="page-container">
    <div>
        <!-- TOP HEADER BAR -->
        <div class="header-bar">
            <div class="header-brand">
                <span class="brand-pill">TRUSTGRID.AI</span>
                <div>
                    <h1 class="report-title">WEBSITE CTA AUDIT & CONVERSION ARCHITECTURE</h1>
                </div>
            </div>
            <div class="header-meta">
                <div>Audited Domain: <strong>{cov['audited_domain']}</strong> <span class="badge-live">LIVE VERIFIED</span></div>
                <div>Audit Date: <strong>{cov['scan_timestamp']}</strong> • Mode: <strong>Read-Only DOM Inspection</strong></div>
            </div>
        </div>

        <!-- SCORECARD GAUGES ROW -->
        <div class="scorecard-row">
            <div class="score-card hero-card">
                {gauge_svg(int(sc['overall_score']), color='#2563eb', stroke_width=7)}
                <div class="score-card-text">
                    <div class="score-card-title" style="color: #1d4ed8;">Overall CTA Score</div>
                    <div style="font-size: 13px; font-weight: 900; color: #1e3a8a;">{sc['overall_score']}/100</div>
                    <div class="score-card-subtitle">{sc['grade']}</div>
                </div>
            </div>
            <div class="score-card">
                {gauge_svg(cats['lead_capture']['score'], color='#059669')}
                <div class="score-card-text">
                    <div class="score-card-title">Lead Capture</div>
                    <div style="font-size: 12px; font-weight: 800; color: #0f172a;">{cats['lead_capture']['score']}/100</div>
                    <div class="score-card-subtitle">Weight: 25%</div>
                </div>
            </div>
            <div class="score-card">
                {gauge_svg(cats['first_impression']['score'], color='#3b82f6')}
                <div class="score-card-text">
                    <div class="score-card-title">First Impression</div>
                    <div style="font-size: 12px; font-weight: 800; color: #0f172a;">{cats['first_impression']['score']}/100</div>
                    <div class="score-card-subtitle">Weight: 20%</div>
                </div>
            </div>
            <div class="score-card">
                {gauge_svg(cats['trust_building']['score'], color='#0284c7')}
                <div class="score-card-text">
                    <div class="score-card-title">Trust Building</div>
                    <div style="font-size: 12px; font-weight: 800; color: #0f172a;">{cats['trust_building']['score']}/100</div>
                    <div class="score-card-subtitle">Weight: 20%</div>
                </div>
            </div>
            <div class="score-card">
                {gauge_svg(cats['sales_funnel']['score'], color='#6366f1')}
                <div class="score-card-text">
                    <div class="score-card-title">Sales Funnel</div>
                    <div style="font-size: 12px; font-weight: 800; color: #0f172a;">{cats['sales_funnel']['score']}/100</div>
                    <div class="score-card-subtitle">Weight: 20%</div>
                </div>
            </div>
        </div>

        <!-- MIDDLE ROW (3 PANELS: What Is Working, Gaps, Hierarchy) -->
        <div class="grid-3">
            <!-- Col 1: What is working -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">A. What Is Working</span>
                    <span class="panel-badge badge-green">5 Verified Strengths</span>
                </div>
                {''.join([f'''
                <div class="working-item">
                    <span class="icon-check">✓</span>
                    <div class="working-text">
                        <strong>{w['area']}</strong> <span style="font-size: 8px; color: #64748b;">({w['page']})</span>
                        <p>{w['evidence']}</p>
                    </div>
                </div>
                ''' for w in fd['what_is_working'][:4]])}
            </div>

            <!-- Col 2: CTA Gaps -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">B. Observed Friction Gaps</span>
                    <span class="panel-badge badge-orange">Actionable</span>
                </div>
                {''.join([f'''
                <div class="gap-item">
                    <div class="gap-header">
                        <span class="gap-title">{g['area']}</span>
                        <span class="gap-sev">{g['severity']}</span>
                    </div>
                    <p class="gap-desc"><strong>Observed:</strong> {g['observed']}</p>
                    <p class="gap-desc" style="color: #0369a1; margin-top: 1px;"><strong>Fix:</strong> {g['recommendation']}</p>
                </div>
                ''' for g in fd['cta_gaps'][:3]])}
            </div>

            <!-- Col 3: Recommended Hierarchy -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">C. Recommended CTA Hierarchy</span>
                    <span class="panel-badge badge-blue">3-Tier Matrix</span>
                </div>
                <div class="tier-box">
                    <div class="tier-label">Primary High-Intent CTA</div>
                    <div class="tier-name">{fd['hierarchy']['primary']['label']}</div>
                    <div class="tier-desc">{fd['hierarchy']['primary']['purpose']}</div>
                </div>
                <div class="tier-box">
                    <div class="tier-label">Secondary Diagnostic Entry</div>
                    <div class="tier-name">{fd['hierarchy']['secondary']['label']}</div>
                    <div class="tier-desc">{fd['hierarchy']['secondary']['purpose']}</div>
                </div>
                <div class="tier-box">
                    <div class="tier-label">Tertiary Immediate Action</div>
                    <div class="tier-name">{fd['hierarchy']['tertiary']['label']}</div>
                    <div class="tier-desc">{fd['hierarchy']['tertiary']['purpose']}</div>
                </div>
            </div>
        </div>

        <!-- LOWER ROW (3 PANELS: Placement, Top 5 Fixes, Business Impact) -->
        <div class="grid-lower">
            <!-- Placement -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">D. CTA Placement Analysis</span>
                    <span class="panel-badge badge-blue">Positioning</span>
                </div>
                <table class="table-compact">
                    <thead>
                        <tr><th>Zone</th><th>Observed Architecture</th><th>Rating</th></tr>
                    </thead>
                    <tbody>
                        {''.join([f'''
                        <tr>
                            <td><strong>{p['section']}</strong></td>
                            <td>{p['observed_placement']}</td>
                            <td><span style="font-weight: 800; color: #166534;">{p['best_practice_rating']}</span></td>
                        </tr>
                        ''' for p in fd['placement_analysis']])}
                    </tbody>
                </table>
            </div>

            <!-- Top 5 Fixes -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">E. Top 5 Priority Recommendations</span>
                    <span class="panel-badge badge-orange">Ranked by Uplift</span>
                </div>
                <table class="table-compact">
                    <thead>
                        <tr><th>#</th><th>Action Item</th><th>Impact Target</th><th>Effort</th></tr>
                    </thead>
                    <tbody>
                        {''.join([f'''
                        <tr>
                            <td><strong>{fix['rank']}</strong></td>
                            <td><strong>{fix['title']}</strong><br><span style="color: #64748b;">{fix['action']}</span></td>
                            <td><span style="color: #0284c7; font-weight: 700;">{fix['impact']}</span></td>
                            <td>{fix['effort']}</td>
                        </tr>
                        ''' for fix in fd['top_5_fixes'][:4]])}
                    </tbody>
                </table>
            </div>

            <!-- Business Impact -->
            <div class="panel">
                <div class="panel-header">
                    <span class="panel-title">F. Modeled Conversion Targets</span>
                    <span class="panel-badge badge-blue">Hypothesis Model</span>
                </div>
                <div style="font-size: 8px; color: #64748b; margin-bottom: 4px; font-style: italic;">
                    {fd['business_impact']['disclaimer']}
                </div>
                <table class="table-compact">
                    <thead>
                        <tr><th>Metric</th><th>Baseline</th><th>Projected</th></tr>
                    </thead>
                    <tbody>
                        {''.join([f'''
                        <tr>
                            <td><strong>{scen['metric']}</strong><br><span style="color: #64748b;">Driver: {scen['primary_driver'][:32]}...</span></td>
                            <td style="color: #64748b;">{scen['baseline_estimate']}</td>
                            <td><strong style="color: #166534;">{scen['target_projection']}</strong></td>
                        </tr>
                        ''' for scen in fd['business_impact']['scenarios']])}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- BOTTOM ACTION STRIP -->
    <div class="action-strip">
        <div class="action-strip-title">G. Sequenced Next Steps</div>
        {''.join([f'''
        <div class="action-step">
            <div class="step-num">Step 0{act['step']} • {act['timeline']}</div>
            <div class="step-title">{act['title']}</div>
            <div class="step-sub">{act['detail'][:48]}...</div>
        </div>
        ''' for act in fd['next_actions']])}
    </div>
</div>

<!-- PAGE 2: AUDIT COVERAGE & TECHNICAL INVENTORY APPENDIX -->
<div class="appendix-page">
    <div>
        <div class="appendix-header">
            <div>
                <span class="brand-pill">TRUSTGRID.AI</span>
                <span style="font-size: 14px; font-weight: 800; margin-left: 10px; color: #0f172a;">APPENDIX: AUDITED PAGE INVENTORY & EVIDENCE LOG</span>
            </div>
            <div style="font-size: 9px; color: #64748b;">
                Coverage: <strong>{cov['pages_scanned']} Pages Scanned</strong> • Total CTAs Discovered: <strong>{cov['total_ctas_extracted']}</strong>
            </div>
        </div>

        <div style="margin-top: 10px;">
            <table class="table-compact" style="font-size: 9px;">
                <thead>
                    <tr style="background: #f1f5f9;">
                        <th>Page Path</th>
                        <th>Status</th>
                        <th>Page Title</th>
                        <th>Extracted CTAs</th>
                        <th>Forms</th>
                        <th>Verified Trust Signals</th>
                    </tr>
                </thead>
                <tbody>
                    {''.join([f'''
                    <tr>
                        <td><strong>{p['path']}</strong></td>
                        <td><span style="color: {'#16a34a' if p['status_code']==200 else '#dc2626'}; font-weight: bold;">{p['status_code']}</span></td>
                        <td>{p['title'][:45]}...</td>
                        <td><strong>{p['desktop_cta_count']}</strong> CTAs</td>
                        <td>{p['forms_count']}</td>
                        <td>{', '.join(p.get('trust_signals_found', [])) or 'Standard SSL'}</td>
                    </tr>
                    ''' for p in self.crawl['inventory']])}
                </tbody>
            </table>
        </div>

        <!-- Scoring Rubric Breakdown -->
        <div style="margin-top: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;">
            <div style="font-size: 11px; font-weight: 800; color: #0f172a; margin-bottom: 6px; text-transform: uppercase;">
                Mathematical Rubric & Score Calculation Breakdown
            </div>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; font-size: 8.5px;">
                {''.join([f'''
                <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; padding: 6px;">
                    <div style="font-weight: 800; color: #0f172a;">{data['name']}</div>
                    <div style="font-size: 13px; font-weight: 900; color: #2563eb; margin: 2px 0;">{data['score']}/100</div>
                    <div style="color: #64748b;">Weight: {int(data['weight']*100)}%</div>
                    <div style="margin-top: 4px; color: #334155;">{data['evidence'][0] if data['evidence'] else 'Verified'}</div>
                </div>
                ''' for cat_k, data in cats.items()])}
            </div>
        </div>
    </div>

    <!-- Appendix Footer -->
    <div style="border-top: 1px solid #cbd5e1; padding-top: 6px; display: flex; justify-content: space-between; font-size: 8px; color: #64748b;">
        <div>Audit Methodology: Playwright Headless Chromium DOM Evaluator • Certified Read-Only Audit</div>
        <div>TrustGrid.ai Automated Audit Engine v2.4 • Confidential Client Deliverable</div>
    </div>
</div>

</body>
</html>
"""
        return html

    def render_pdf_and_preview(self, html_content):
        html_path = os.path.join(self.output_dir, "report_temp.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)

        pdf_path = os.path.join(self.output_dir, "cta_audit_report.pdf")
        preview_path = os.path.join(self.output_dir, "cta_audit_preview.png")

        print("[REPORTER] Rendering PDF and PNG preview using Playwright Chromium...")
        with sync_playwright() as p:
            # Launch chromium (using system chrome if present)
            try:
                browser = p.chromium.launch(channel="chrome", headless=True)
            except Exception:
                browser = p.chromium.launch(headless=True)

            page = browser.new_page()
            page.goto(f"file:///{os.path.abspath(html_path).replace(os.sep, '/')}", wait_until="networkidle")

            # 1. Print Landscape A4 PDF
            page.pdf(
                path=pdf_path,
                format="A4",
                landscape=True,
                print_background=True,
                margin={"top": "0", "bottom": "0", "left": "0", "right": "0"}
            )
            print(f"[REPORTER] Generated PDF: {pdf_path}")

            # 2. Capture Executive Page High-Resolution PNG Preview
            # Set viewport to exact landscape A4 aspect ratio (297:210 -> ~1600x1131)
            page.set_viewport_size({"width": 1600, "height": 1131})
            # Take screenshot of first page container
            first_page = page.locator(".page-container").first
            first_page.screenshot(path=preview_path)
            print(f"[REPORTER] Generated PNG preview: {preview_path}")

            browser.close()

        # Clean up temporary html file
        if os.path.exists(html_path):
            os.remove(html_path)

        return pdf_path, preview_path

