import json
import re
import os
import requests
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_URL = "https://email-templatespm.vercel.app/"
EXCEL_OUTPUT = r"D:\profit-vector--main\ProfitMachines_Email_Templates_10_Batches.xlsx"
CSV_DIR = r"D:\profit-vector--main\epm_batches"

HEADERS = [
    "Batch ID",
    "Template Number",
    "Template Name",
    "Category",
    "Format",
    "Individual Template URL",
    "Verification Status",
    "Verification Notes"
]

BATCH_CONFIG = [
    ("EPM01", 9),
    ("EPM02", 9),
    ("EPM03", 9),
    ("EPM04", 9),
    ("EPM05", 9),
    ("EPM06", 8),
    ("EPM07", 8),
    ("EPM08", 8),
    ("EPM09", 8),
    ("EPM10", 8)
]

def load_and_verify_emails():
    html_path = r"D:\profit-vector--main\profitmachines-email-templates\index.html"
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r"const emails = (\[.*?\]);", content, re.DOTALL)
    emails = json.loads(match.group(1))
    print(f"Loaded {len(emails)} templates from local inventory.")

    session = requests.Session()
    session.headers.update({"User-Agent": "ProfitMachines-Verification-Bot/1.0"})

    verified_records = []
    print("Verifying live HTTP endpoints on Vercel...")
    for idx, e in enumerate(emails, 1):
        html_url = BASE_URL + e["htmlPath"]
        txt_url = BASE_URL + e["txtPath"]

        try:
            r_html = session.get(html_url, timeout=10)
            html_ok = (r_html.status_code == 200 and len(r_html.content) > 500)
            html_size = len(r_html.content)
        except Exception:
            html_ok = False
            html_size = 0

        try:
            r_txt = session.get(txt_url, timeout=10)
            txt_ok = (r_txt.status_code == 200 and len(r_txt.content) > 100)
            txt_size = len(r_txt.content)
        except Exception:
            txt_ok = False
            txt_size = 0

        if html_ok and txt_ok:
            status = "Verified"
            notes = f"Verified: HTML ({html_size:,} bytes) and TXT ({txt_size:,} bytes) live. Matching TXT: {txt_url}"
        elif html_ok:
            status = "Verified"
            notes = f"Verified: HTML live ({html_size:,} bytes). Matching TXT asset missing."
        else:
            status = "Not Verified"
            notes = "Verification failed: Live HTTP status code not 200 or payload empty."

        verified_records.append({
            "subject": e["subject"],
            "category": f"{e['category']} — {e['segmentName']}",
            "segment": e["segmentName"],
            "typeLabel": e["typeLabel"],
            "format": "Both",
            "htmlUrl": html_url,
            "txtUrl": txt_url,
            "status": status,
            "notes": notes,
            "spiced": e.get("spiced", {})
        })

    return verified_records

def build_workbook(records):
    wb = openpyxl.Workbook()
    # Remove default sheet
    default_sheet = wb.active

    # Styles
    navy_header_fill = PatternFill(start_color="0F172A", end_color="0F172A", fill_type="solid")
    header_font = Font(name="Segoe UI", size=11, bold=True, color="FFFFFF")
    data_font = Font(name="Segoe UI", size=10)
    bold_data_font = Font(name="Segoe UI", size=10, bold=True)
    link_font = Font(name="Segoe UI", size=10, color="2563EB", underline="single")

    zebra_fill_even = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
    zebra_fill_odd = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")

    green_fill = PatternFill(start_color="D1FAE5", end_color="D1FAE5", fill_type="solid")
    green_font = Font(name="Segoe UI", size=10, bold=True, color="065F46")

    thin_border_side = Side(border_style="thin", color="E2E8F0")
    thin_border = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)

    header_border_side = Side(border_style="thin", color="334155")
    header_border = Border(left=header_border_side, right=header_border_side, top=header_border_side, bottom=header_border_side)

    current_idx = 0
    os.makedirs(CSV_DIR, exist_ok=True)

    for batch_id, count in BATCH_CONFIG:
        ws = wb.create_sheet(title=batch_id)
        batch_records = records[current_idx : current_idx + count]
        current_idx += count

        # Write CSV as well for easy import
        csv_path = os.path.join(CSV_DIR, f"{batch_id}.csv")
        with open(csv_path, "w", encoding="utf-8", newline="") as cf:
            import csv
            writer = csv.writer(cf)
            writer.writerow(HEADERS)

            # Header row in sheet
            ws.append(HEADERS)
            for col_idx in range(1, 9):
                cell = ws.cell(row=1, column=col_idx)
                cell.fill = navy_header_fill
                cell.font = header_font
                cell.border = header_border
                cell.alignment = Alignment(horizontal="center" if col_idx in [1, 2, 5, 7] else "left", vertical="center")
            ws.row_dimensions[1].height = 28

            # Data rows
            for row_sub_idx, rec in enumerate(batch_records, 1):
                tpl_num = f"{batch_id}-{str(row_sub_idx).padStart(3, '0')}" if hasattr(str, 'padStart') else f"{batch_id}-{row_sub_idx:03d}"
                row_data = [
                    batch_id,
                    tpl_num,
                    rec["subject"],
                    rec["category"],
                    rec["format"],
                    rec["htmlUrl"],
                    rec["status"],
                    rec["notes"]
                ]
                writer.writerow(row_data)
                ws.append(row_data)
                row_num = row_sub_idx + 1

                fill = zebra_fill_even if row_sub_idx % 2 == 0 else zebra_fill_odd

                for col_idx in range(1, 9):
                    cell = ws.cell(row=row_num, column=col_idx)
                    cell.fill = fill
                    cell.border = thin_border
                    cell.font = data_font

                    if col_idx == 1:
                        cell.alignment = Alignment(horizontal="center", vertical="center")
                        cell.font = bold_data_font
                    elif col_idx == 2:
                        cell.alignment = Alignment(horizontal="center", vertical="center")
                        cell.font = bold_data_font
                    elif col_idx == 3:
                        cell.alignment = Alignment(horizontal="left", vertical="center")
                    elif col_idx == 4:
                        cell.alignment = Alignment(horizontal="left", vertical="center")
                    elif col_idx == 5:
                        cell.alignment = Alignment(horizontal="center", vertical="center")
                    elif col_idx == 6:
                        cell.alignment = Alignment(horizontal="left", vertical="center")
                        cell.font = link_font
                        cell.hyperlink = rec["htmlUrl"]
                    elif col_idx == 7:
                        cell.alignment = Alignment(horizontal="center", vertical="center")
                        if rec["status"] == "Verified":
                            cell.fill = green_fill
                            cell.font = green_font
                    elif col_idx == 8:
                        cell.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)

                ws.row_dimensions[row_num].height = 24

        # Freeze panes & filter
        ws.freeze_panes = "A2"
        ws.auto_filter.ref = f"A1:H{len(batch_records) + 1}"

        # Adjust column widths
        col_widths = {
            "A": 12,   # Batch ID
            "B": 18,   # Template Number
            "C": 48,   # Template Name
            "D": 38,   # Category
            "E": 12,   # Format
            "F": 65,   # URL
            "G": 20,   # Status
            "H": 75    # Notes
        }
        for col_letter, width in col_widths.items():
            ws.column_dimensions[col_letter].width = width

    # Remove the default sheet that was created with the workbook
    wb.remove(default_sheet)

    wb.save(EXCEL_OUTPUT)
    print(f"\nSaved master Excel workbook with 10 tabs to: {EXCEL_OUTPUT}")

def main():
    records = load_and_verify_emails()
    build_workbook(records)
    print(f"Successfully processed {len(records)} templates across 10 batches.")

if __name__ == "__main__":
    main()

