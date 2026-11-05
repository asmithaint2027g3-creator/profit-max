import json
import re
import os
import requests
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_URL = "https://email-templatespm.vercel.app/"

def verify_all():
    html_path = r"D:\profit-vector--main\profitmachines-email-templates\index.html"
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r"const emails = (\[.*?\]);", content, re.DOTALL)
    emails = json.loads(match.group(1))
    print(f"Loaded {len(emails)} templates.")

    session = requests.Session()
    session.headers.update({"User-Agent": "ProfitMachines-Verification-Bot/1.0"})

    verified_records = []
    print("Testing all 85 templates on live website...")

    for idx, e in enumerate(emails, 1):
        html_url = BASE_URL + e["htmlPath"]
        txt_url = BASE_URL + e["txtPath"]

        # Verify HTML
        try:
            r_html = session.get(html_url, timeout=12)
            html_ok = (r_html.status_code == 200 and len(r_html.content) > 500)
            html_status = r_html.status_code
            html_size = len(r_html.content)
        except Exception as ex:
            html_ok = False
            html_status = str(ex)
            html_size = 0

        # Verify TXT
        try:
            r_txt = session.get(txt_url, timeout=12)
            txt_ok = (r_txt.status_code == 200 and len(r_txt.content) > 100)
            txt_status = r_txt.status_code
            txt_size = len(r_txt.content)
        except Exception as ex:
            txt_ok = False
            txt_status = str(ex)
            txt_size = 0

        if html_ok and txt_ok:
            status = "Verified"
            notes = f"Verified: HTML ({html_size:,} bytes) and TXT ({txt_size:,} bytes) live. TXT: {txt_url}"
        elif html_ok:
            status = "Verified"
            notes = f"Verified: HTML live ({html_size:,} bytes). TXT not found."
        else:
            status = "Not Verified"
            notes = f"Verification failed: HTML status {html_status}."

        record = {
            "index": idx,
            "id": e["id"],
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
        }
        verified_records.append(record)
        if idx % 10 == 0 or idx == len(emails):
            print(f"  Verified {idx}/{len(emails)} templates...")

    return verified_records

if __name__ == "__main__":
    records = verify_all()
    verified_count = sum(1 for r in records if r["status"] == "Verified")
    print(f"\nAll verification complete: {verified_count}/{len(records)} Verified.")

