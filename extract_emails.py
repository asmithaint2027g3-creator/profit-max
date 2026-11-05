import json
import re
import os
import requests
from collections import defaultdict

def main():
    html_path = r"D:\profit-vector--main\profitmachines-email-templates\index.html"
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r"const emails = (\[.*?\]);", content, re.DOTALL)
    if not match:
        print("ERROR: could not find emails array")
        return

    emails = json.loads(match.group(1))
    print(f"Total logical email templates found in index.html: {len(emails)}")

    # Check live website
    base_url = "https://email-templatespm.vercel.app/"
    print(f"\nChecking live website at {base_url} ...")
    try:
        r = requests.get(base_url, timeout=10)
        print(f"Live site homepage status: {r.status_code}")
        # Check if live site index.html has the same count
        live_match = re.search(r"const emails = (\[.*?\]);", r.text, re.DOTALL)
        if live_match:
            live_emails = json.loads(live_match.group(1))
            print(f"Total templates in live website index.html: {len(live_emails)}")
        else:
            print("Could not find emails in live site text")
    except Exception as e:
        print(f"Error fetching live site: {e}")

    # Inspect inventory breakdown
    categories = defaultdict(list)
    segments = defaultdict(list)
    for idx, e in enumerate(emails):
        categories[e.get("category")].append(e)
        segments[e.get("segmentName")].append(e)

    print(f"\nCategories ({len(categories)}):")
    for cat, items in categories.items():
        print(f"  - {cat}: {len(items)} templates")

    print(f"\nSegments ({len(segments)}):")
    for seg, items in segments.items():
        print(f"  - {seg}: {len(items)} templates")

    # Check sample URLs
    print("\nSample URLs check:")
    for i in [0, 1, 10, 20]:
        e = emails[i]
        html_url = base_url + e["htmlPath"]
        txt_url = base_url + e["txtPath"]
        print(f"  Template: {e['id']} | {e['subject']}")
        print(f"    HTML: {html_url}")
        print(f"    TXT:  {txt_url}")

if __name__ == "__main__":
    main()

