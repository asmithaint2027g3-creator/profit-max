"""
Website CTA Audit Crawler using Playwright
Non-invasive, read-only DOM inspection and evidence collector.
"""

import os
import time
from urllib.parse import urljoin, urlparse
from playwright.sync_api import sync_playwright

class CtaCrawler:
    def __init__(self, base_url="https://profit-max-delta.vercel.app/", max_pages=8, output_dir="output", headless=True):
        self.base_url = base_url.rstrip("/")
        self.max_pages = max_pages
        self.output_dir = output_dir
        self.screenshots_dir = os.path.join(output_dir, "screenshots")
        self.headless = headless
        os.makedirs(self.screenshots_dir, exist_ok=True)

    def launch_browser(self, p):
        # Try system chrome first (already validated on Windows), fallback to chromium
        try:
            return p.chromium.launch(channel="chrome", headless=self.headless)
        except Exception:
            return p.chromium.launch(headless=self.headless)

    def run_crawl(self):
        print(f"[CRAWLER] Starting CTA discovery on: {self.base_url} (limit: {self.max_pages} pages)")
        inventory = []
        cta_records = []
        visited_urls = set()

        priority_paths = [
            "/",
            "/book-consultation",
            "/offerings",
            "/industries",
            "/ai-native-sales",
            "/growth-science",
            "/sales-calculators",
            "/case-studies"
        ]

        with sync_playwright() as p:
            browser = self.launch_browser(p)
            context = browser.new_context(viewport={"width": 1440, "height": 900})
            page = context.new_page()

            # Mobile context for mobile screenshots and touch audits
            mobile_context = browser.new_context(
                viewport={"width": 375, "height": 812},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
            )
            mobile_page = mobile_context.new_page()

            urls_to_visit = [self.base_url + path for path in priority_paths]

            for url in urls_to_visit:
                if len(visited_urls) >= self.max_pages:
                    break
                if url in visited_urls:
                    continue

                visited_urls.add(url)
                path = urlparse(url).path or "/"
                safe_name = path.strip("/").replace("/", "_") or "homepage"
                print(f"[CRAWLER] Inspecting: {path}")

                page_status = {
                    "url": url,
                    "path": path,
                    "title": "",
                    "status_code": 200,
                    "desktop_cta_count": 0,
                    "mobile_cta_count": 0,
                    "forms_count": 0,
                    "trust_signals_found": [],
                    "desktop_screenshot": "",
                    "mobile_screenshot": ""
                }

                try:
                    response = page.goto(url, wait_until="networkidle", timeout=30000)
                    if response:
                        page_status["status_code"] = response.status
                    page_status["title"] = page.title()

                    # Save Desktop Screenshot
                    dt_shot_path = os.path.join(self.screenshots_dir, f"{safe_name}_desktop.png")
                    page.screenshot(path=dt_shot_path, full_page=False)
                    page_status["desktop_screenshot"] = dt_shot_path

                    # Capture Mobile Page
                    mobile_page.goto(url, wait_until="networkidle", timeout=30000)
                    mob_shot_path = os.path.join(self.screenshots_dir, f"{safe_name}_mobile.png")
                    mobile_page.screenshot(path=mob_shot_path, full_page=False)
                    page_status["mobile_screenshot"] = mob_shot_path

                    # Inspect rendered DOM for CTAs and Forms
                    extracted_ctas = page.evaluate("""() => {
                        const results = [];
                        const seen = new Set();

                        // Query buttons, CTA links, submit buttons
                        const selectors = [
                            'a[href]',
                            'button',
                            'input[type="submit"]',
                            'input[type="button"]',
                            '[role="button"]'
                        ];

                        const elements = document.querySelectorAll(selectors.join(','));

                        elements.forEach((el, index) => {
                            const rect = el.getBoundingClientRect();
                            const style = window.getComputedStyle(el);

                            // Only visible elements
                            if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden') {
                                return;
                            }

                            const text = (el.innerText || el.textContent || el.getAttribute('value') || el.getAttribute('aria-label') || '').trim();
                            if (!text || text.length > 80) return; // ignore massive paragraph links

                            const href = el.getAttribute('href') || '';
                            const isButton = el.tagName.toLowerCase() === 'button' || el.getAttribute('role') === 'button';
                            const hasGradient = style.backgroundImage.includes('gradient');
                            const bgColor = style.backgroundColor;
                            const isAboveFold = rect.top < 850;

                            // Classify location
                            let location = 'in-page';
                            if (el.closest('header') || el.closest('nav')) location = 'header/nav';
                            else if (el.closest('footer')) location = 'footer';
                            else if (el.closest('[class*="sticky"]') || el.closest('[class*="fixed"]')) location = 'sticky-dock';
                            else if (isAboveFold && (rect.top < 650)) location = 'hero';

                            // Classify prominence
                            let prominence = 'secondary';
                            if (hasGradient || bgColor.includes('rgb(37, 99, 235)') || bgColor.includes('rgb(59, 130, 246)')) {
                                prominence = 'primary';
                            } else if (style.borderWidth !== '0px' && style.borderStyle !== 'none') {
                                prominence = 'outline';
                            }

                            const uniqueKey = text + '|' + href + '|' + location;
                            if (seen.has(uniqueKey)) return;
                            seen.add(uniqueKey);

                            results.push({
                                text: text.replace(/\\s+/g, ' '),
                                tag: el.tagName.toLowerCase(),
                                href: href,
                                location: location,
                                prominence: prominence,
                                isAboveFold: isAboveFold,
                                width: Math.round(rect.width),
                                height: Math.round(rect.height),
                                top: Math.round(rect.top),
                                left: Math.round(rect.left),
                                bg: bgColor,
                                hasGradient: hasGradient
                            });
                        });

                        return results;
                    }""")

                    # Inspect Forms and Trust Signals
                    form_data = page.evaluate("""() => {
                        const forms = document.querySelectorAll('form');
                        const results = [];

                        forms.forEach(form => {
                            const inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
                            const fields = [];
                            inputs.forEach(i => fields.push(i.getAttribute('name') || i.getAttribute('placeholder') || i.tagName.toLowerCase()));
                            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], button');
                            const submitText = submitBtn ? submitBtn.innerText.trim() : '';

                            results.push({
                                fieldCount: inputs.length,
                                fields: fields,
                                submitText: submitText,
                                isMultiStep: document.body.innerText.includes('Step 1 of 2') || document.body.innerText.includes('Step 1')
                            });
                        });

                        // Check trust indicators on page
                        const bodyText = document.body.innerText;
                        const trustSignals = [];
                        if (bodyText.includes('SOC2') || bodyText.includes('SOC-2')) trustSignals.push('SOC-2 Certified');
                        if (bodyText.includes('NDA') || bodyText.includes('Mutual NDA')) trustSignals.push('Mutual NDA Protected');
                        if (bodyText.includes('2-Hour') || bodyText.includes('2 hours')) trustSignals.push('2-Hour SLA');
                        if (bodyText.includes('256-Bit') || bodyText.includes('Encrypted')) trustSignals.push('256-Bit SSL Encryption');
                        if (bodyText.includes('ISO 27001')) trustSignals.push('ISO 27001 Certified');
                        if (bodyText.includes('GDPR')) trustSignals.push('GDPR Compliant');

                        return {
                            forms: results,
                            trustSignals: trustSignals
                        };
                    }""")

                    page_status["desktop_cta_count"] = len(extracted_ctas)
                    page_status["forms_count"] = len(form_data.get("forms", []))
                    page_status["trust_signals_found"] = form_data.get("trustSignals", [])
                    page_status["formData"] = form_data.get("forms", [])

                    for c in extracted_ctas:
                        c["pageUrl"] = url
                        c["pagePath"] = path
                        cta_records.append(c)

                except Exception as ex:
                    print(f"[CRAWLER ERROR] Failed scanning {url}: {ex}")
                    page_status["status_code"] = 500

                inventory.append(page_status)

            browser.close()

        print(f"[CRAWLER] Crawl complete. Audited {len(inventory)} pages, extracted {len(cta_records)} unique CTAs.")
        return {
            "inventory": inventory,
            "ctas": cta_records
        }

