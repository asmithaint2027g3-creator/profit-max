"""
Website CTA Audit Report Generator CLI.
Usage:
    py tools/cta_audit/main.py --url https://profit-max-delta.vercel.app/ --output output/
"""

import os
import sys
import argparse
from crawler import CtaCrawler
from scorer import CtaScorer
from findings import FindingsGenerator
from reporter import ReportGenerator

def main():
    parser = argparse.ArgumentParser(description="Website CTA Audit Report Generator")
    parser.add_argument("--url", default="https://profit-max-delta.vercel.app/", help="Target website URL to audit")
    parser.add_argument("--output", default="output", help="Directory where reports and artifacts are saved")
    parser.add_argument("--max-pages", type=int, default=8, help="Maximum number of priority pages to crawl")
    parser.add_argument("--headless", action="store_true", default=True, help="Run browser in headless mode")

    args = parser.parse_args()

    print("=" * 70)
    print(" TRUSTGRID.AI — WEBSITE CTA AUDIT REPORT GENERATOR")
    print(f" Target URL: {args.url}")
    print(f" Output Folder: {args.output}")
    print(f" Audit Mode: Read-Only Live DOM Inspection")
    print("=" * 70)

    # Phase 1: Discovery & DOM Crawling
    crawler = CtaCrawler(
        base_url=args.url,
        max_pages=args.max_pages,
        output_dir=args.output,
        headless=args.headless
    )
    crawl_data = crawler.run_crawl()

    # Phase 2: Deterministic Scoring
    scorer = CtaScorer(crawl_data)
    score_data = scorer.evaluate()

    # Phase 3: Findings & Recommendations
    findings_gen = FindingsGenerator(crawl_data, score_data)
    findings_data = findings_gen.generate_findings()

    # Phase 4 & 5: Visual Report & Deliverable Generation
    reporter = ReportGenerator(
        crawl_data=crawl_data,
        score_data=score_data,
        findings_data=findings_data,
        output_dir=args.output
    )

    reporter.write_json()
    reporter.write_csvs()
    html_content = reporter.generate_html_template()
    pdf_path, preview_path = reporter.render_pdf_and_preview(html_content)

    print("\n" + "=" * 70)
    print(" AUDIT EXECUTION COMPLETE — EXECUTIVE SCORECARD")
    print("=" * 70)
    print(f" OVERALL CTA SCORE : {score_data['overall_score']} / 100 ({score_data['grade']})")
    print("-" * 70)
    for cat_key, cat in score_data["categories"].items():
        print(f" • {cat['name']:<30}: {cat['score']}/100 (Weight: {int(cat['weight']*100)}%)")
    print("-" * 70)
    print(f" Deliverables created:")
    print(f"  1. PDF Report   : {pdf_path}")
    print(f"  2. PNG Preview  : {preview_path}")
    print(f"  3. Audit JSON   : {os.path.join(args.output, 'audit_data.json')}")
    print(f"  4. Findings CSV : {os.path.join(args.output, 'cta_findings.csv')}")
    print(f"  5. Inventory CSV: {os.path.join(args.output, 'page_inventory.csv')}")
    print("=" * 70)

if __name__ == "__main__":
    main()

