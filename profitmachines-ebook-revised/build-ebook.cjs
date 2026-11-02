const fs = require('fs');
const path = require('path');

const ebookDir = __dirname;
const manuscriptPath = path.join(ebookDir, '02-source-content', 'ebook-manuscript.md');
const outputHtmlPath = path.join(ebookDir, '04-final-output', 'profitmachines-executive-ebook-revised.html');
const outputPdfPath = path.join(ebookDir, '04-final-output', 'profitmachines-executive-ebook-revised.pdf');

console.log('Reading revised manuscript from:', manuscriptPath);
const markdown = fs.readFileSync(manuscriptPath, 'utf8');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseMarkdown(md) {
  const lines = md.split('\n');
  let html = [];
  let inCode = false;
  let codeLang = '';
  let codeBuffer = [];
  let inTable = false;
  let tableHeader = [];
  let tableRows = [];
  let inList = false;
  let listType = 'ul';

  function closeList() {
    if (inList) {
      html.push(`</${listType}>`);
      inList = false;
    }
  }

  function closeTable() {
    if (inTable) {
      const isToc = tableHeader.some(h => h.toLowerCase().includes('chapter title'));
      let t = '';
      if (isToc) {
        t = '<div class="toc-container"><table class="toc-table"><thead><tr>';
      } else {
        t = '<div class="table-container"><table><thead><tr>';
      }
      tableHeader.forEach(h => {
        t += `<th>${formatInline(h.trim())}</th>`;
      });
      t += '</tr></thead><tbody>';
      tableRows.forEach(r => {
        t += '<tr>';
        r.forEach(c => {
          t += `<td>${formatInline(c.trim())}</td>`;
        });
        t += '</tr>';
      });
      t += '</tbody></table></div>';
      html.push(t);
      inTable = false;
      tableHeader = [];
      tableRows = [];
    }
  }

  function formatInline(text) {
    if (!text) return '';
    // Bold italic
    text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Math formulas (LaTeX inline)
    text = text.replace(/\$\$([^$]+)\$\$/g, '<span class="math-display">$1</span>');
    text = text.replace(/\$([^$]+)\$/g, '<span class="math-inline">$1</span>');
    // Links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trimEnd();

    // Code blocks
    if (line.startsWith('```')) {
      if (inCode) {
        html.push(`<pre><code class="lang-${codeLang}">${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
        inCode = false;
        codeBuffer = [];
      } else {
        closeList();
        closeTable();
        inCode = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    // Explicit HTML elements pass-through
    if (line.includes('<div class=\'page-break\'></div>') || line.includes('<div class="page-break"></div>')) {
      closeList();
      closeTable();
      html.push('<div class="page-break"></div>');
      continue;
    }

    // Blank lines
    if (line.trim() === '') {
      closeList();
      closeTable();
      continue;
    }

    // Tables
    if (line.startsWith('|') && line.endsWith('|')) {
      closeList();
      const cells = line.split('|').slice(1, -1);
      // Check if separator
      if (cells.every(c => /^[\s:-]+$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeader = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      closeTable();
    }

    // Headings
    if (line.toLowerCase().includes('master table of contents')) {
      closeList();
      html.push('<h1 class="toc-title">Master Table of Contents</h1>');
      continue;
    }
    if (line.startsWith('# ')) {
      closeList();
      const text = line.slice(2).trim();
      html.push(`<h1 class="chapter-title">${formatInline(text)}</h1>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      const text = line.slice(3).trim();
      html.push(`<h2>${formatInline(text)}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      closeList();
      const text = line.slice(4).trim();
      html.push(`<h3>${formatInline(text)}</h3>`);
      continue;
    }
    if (line.startsWith('#### ')) {
      closeList();
      const text = line.slice(5).trim();
      html.push(`<h4>${formatInline(text)}</h4>`);
      continue;
    }

    // Horizontal Rule
    if (/^---{3,}$/.test(line.trim())) {
      closeList();
      html.push('<hr class="section-divider" />');
      continue;
    }

    // Blockquotes / Callouts
    if (line.startsWith('> ')) {
      closeList();
      const text = line.slice(2).trim();
      html.push(`<blockquote class="executive-callout">${formatInline(text)}</blockquote>`);
      continue;
    }

    // Unordered lists
    if (/^[-*+]\s+/.test(line.trim())) {
      const text = line.trim().replace(/^[-*+]\s+/, '');
      if (!inList || listType !== 'ul') {
        closeList();
        inList = true;
        listType = 'ul';
        html.push('<ul class="content-list">');
      }
      html.push(`<li>${formatInline(text)}</li>`);
      continue;
    }

    // Ordered lists
    if (/^\d+\.\s+/.test(line.trim())) {
      const text = line.trim().replace(/^\d+\.\s+/, '');
      if (!inList || listType !== 'ol') {
        closeList();
        inList = true;
        listType = 'ol';
        html.push('<ol class="content-list">');
      }
      html.push(`<li>${formatInline(text)}</li>`);
      continue;
    }

    closeList();

    // Regular paragraphs
    html.push(`<p>${formatInline(line.trim())}</p>`);
  }

  closeList();
  closeTable();

  return html.join('\n');
}

const parsedBody = parseMarkdown(markdown);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>From Revenue Friction to Profitable Growth | ProfitMachines Executive Monograph</title>
<style>
  @page {
    size: letter;
    margin: 18mm 18mm 20mm 18mm;
    @top-center {
      content: "PROFITMACHINES EXECUTIVE ADVISORY | REVENUE TRANSFORMATION";
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: #64748B;
      border-bottom: 0.5pt solid #CBD5E1;
      padding-bottom: 4mm;
      margin-bottom: 5mm;
    }
    @bottom-left {
      content: "ProfitMachines Executive Publication";
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      color: #94A3B8;
    }
    @bottom-right {
      content: "Page " counter(page);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      font-weight: 600;
      color: #0F172A;
    }
  }

  @page:first {
    margin: 0;
    @top-center { content: ""; border: none; }
    @bottom-left { content: ""; }
    @bottom-right { content: ""; }
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.55;
    color: #1E293B;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
  }

  /* Cover Page */
  .cover-page {
    page-break-before: always;
    page-break-after: always;
    break-after: page;
    height: 100vh;
    padding: 60px 50px 40px 50px;
    background: linear-gradient(135deg, #090E17 0%, #0F172A 60%, #1E293B 100%);
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cover-badge {
    display: inline-block;
    background: rgba(37, 99, 235, 0.25);
    border: 1px solid rgba(59, 130, 246, 0.6);
    color: #60A5FA;
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 4px;
    margin-bottom: 30px;
  }

  .cover-title {
    font-size: 32pt;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 0 0 16px 0;
  }

  .cover-subtitle {
    font-size: 13.5pt;
    font-weight: 400;
    line-height: 1.5;
    color: #94A3B8;
    margin: 0 0 35px 0;
    max-width: 90%;
  }

  .cover-accent-bar {
    width: 80px;
    height: 4px;
    background: #3B82F6;
    margin-bottom: 35px;
    border-radius: 2px;
  }

  .cover-metadata-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 20px 24px;
    margin-top: 20px;
  }

  .meta-item {
    font-size: 8.5pt;
  }
  .meta-label {
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .meta-val {
    color: #F1F5F9;
    font-weight: 500;
    font-size: 9.5pt;
  }

  .cover-footer {
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.5pt;
    color: #64748B;
  }
  .cover-footer strong {
    color: #CBD5E1;
  }

  /* Document Content */
  .page-break {
    page-break-before: always;
    break-before: page;
  }

  h1.toc-title {
    page-break-before: always;
    break-before: page;
    page-break-after: avoid;
    break-after: avoid;
    font-size: 16.5pt;
    font-weight: 800;
    line-height: 1.25;
    color: #0F172A;
    letter-spacing: -0.015em;
    margin-top: 0;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 2.5px solid #2563EB;
  }

  h1.chapter-title {
    page-break-before: always;
    break-before: page;
    font-size: 16.5pt;
    font-weight: 800;
    line-height: 1.25;
    color: #0F172A;
    letter-spacing: -0.015em;
    margin-top: 0;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 2.5px solid #2563EB;
  }

  h2 {
    page-break-after: avoid;
    break-after: avoid;
    font-size: 12.5pt;
    font-weight: 700;
    color: #0F172A;
    margin-top: 18px;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  h3 {
    page-break-after: avoid;
    break-after: avoid;
    font-size: 11pt;
    font-weight: 700;
    color: #1E293B;
    margin-top: 14px;
    margin-bottom: 6px;
  }

  h4 {
    page-break-after: avoid;
    break-after: avoid;
    font-size: 10pt;
    font-weight: 700;
    color: #334155;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
    margin-bottom: 9px;
    text-align: left;
    line-height: 1.55;
    orphans: 3;
    widows: 3;
  }

  strong {
    font-weight: 600;
    color: #0F172A;
  }

  /* Executive Callout */
  blockquote.executive-callout {
    margin: 12px 0 16px 0;
    padding: 10px 16px;
    background: #F1F5F9;
    border-left: 4px solid #2563EB;
    border-radius: 0 6px 6px 0;
    font-size: 9pt;
    line-height: 1.5;
    font-style: normal;
    color: #1E293B;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Tables */
  .table-container {
    margin: 12px 0 16px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8pt;
    line-height: 1.4;
    border: 1px solid #CBD5E1;
  }

  thead {
    display: table-header-group;
  }

  tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  th {
    background: #0F172A;
    color: #FFFFFF;
    font-weight: 600;
    text-align: left;
    padding: 7px 10px;
    border: 1px solid #1E293B;
    letter-spacing: 0.03em;
    font-size: 7.5pt;
    text-transform: uppercase;
  }

  td {
    padding: 6px 10px;
    border: 1px solid #E2E8F0;
    vertical-align: top;
    color: #334155;
  }

  tr:nth-child(even) td {
    background: #F8FAFC;
  }

  /* Dedicated Single-Page Table of Contents */
  .toc-container {
    page-break-inside: avoid;
    break-inside: avoid;
    page-break-after: always;
    break-after: page;
    margin: 0;
    padding: 0;
  }

  .toc-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.2pt;
    line-height: 1.25;
    border: 1px solid #CBD5E1;
    margin-top: 6px;
    margin-bottom: 0;
  }

  .toc-table thead {
    display: table-header-group;
  }

  .toc-table th {
    background: #0F172A;
    color: #FFFFFF;
    font-weight: 700;
    text-align: left;
    padding: 4.5px 7.5px;
    font-size: 7pt;
    letter-spacing: 0.04em;
    border: 1px solid #1E293B;
    text-transform: uppercase;
  }

  .toc-table td {
    padding: 3.5px 7.5px;
    border: 1px solid #E2E8F0;
    vertical-align: middle;
    color: #334155;
  }

  .toc-table th:nth-child(1), .toc-table td:nth-child(1) {
    width: 13%;
    font-weight: 700;
    color: #2563EB;
  }

  .toc-table th:nth-child(2), .toc-table td:nth-child(2) {
    width: 32%;
    font-weight: 600;
    color: #0F172A;
  }

  .toc-table th:nth-child(3), .toc-table td:nth-child(3) {
    width: 37%;
    color: #334155;
  }

  .toc-table th:nth-child(4), .toc-table td:nth-child(4) {
    width: 18%;
    color: #64748B;
    font-size: 6.8pt;
  }

  .toc-table tr:nth-child(even) td {
    background: #F8FAFC;
  }

  /* Pre & Code blocks */
  pre {
    background: #090E17;
    color: #F1F5F9;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: "Cascadia Code", "SFMono-Regular", Consolas, "Courier New", monospace;
    font-size: 7.5pt;
    line-height: 1.35;
    overflow-x: auto;
    white-space: pre !important;
    word-break: normal;
    word-wrap: normal;
    margin: 14px 0;
    page-break-inside: avoid;
    break-inside: avoid;
    border: 1px solid #1E293B;
    border-left: 3.5px solid #3B82F6;
    letter-spacing: 0;
  }

  code {
    font-family: "Consolas", "Courier New", monospace;
    font-size: 8.5pt;
    background: #F1F5F9;
    color: #0F172A;
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid #E2E8F0;
  }

  pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    border: none;
    font-size: inherit;
  }

  /* Lists */
  ul.content-list, ol.content-list {
    margin: 8px 0 12px 20px;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    line-height: 1.5;
  }

  /* Math */
  .math-inline {
    font-family: "Cambria Math", "Georgia", serif;
    font-style: italic;
    font-weight: 600;
    color: #0F172A;
  }
  .math-display {
    display: block;
    margin: 12px 0;
    padding: 8px 16px;
    background: #F8FAFC;
    border-left: 3px solid #64748B;
    font-family: "Cambria Math", "Georgia", serif;
    font-size: 9.5pt;
    color: #0F172A;
  }

  hr.section-divider {
    border: none;
    border-top: 1px solid #E2E8F0;
    margin: 20px 0;
  }

  a {
    color: #2563EB;
    text-decoration: none;
  }
</style>
</head>
<body>

<!-- EXECUTIVE COVER PAGE -->
<div class="cover-page">
  <div>
    <div class="cover-badge">Executive Advisory Monograph &bull; Strategic Guide</div>
    <div class="cover-title">FROM REVENUE FRICTION<br>TO PROFITABLE GROWTH</div>
    <div class="cover-accent-bar"></div>
    <div class="cover-subtitle">
      An Executive Guide to AI-Native Revenue Transformation: Engineering Deterministic Demand, Compressing Sales Velocity, and Reconciling Enterprise RevOps
    </div>
  </div>

  <div class="cover-metadata-grid">
    <div class="meta-item">
      <div class="meta-label">Author & Research Group</div>
      <div class="meta-val">ProfitMachines Research &amp; Advisory Group</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Primary Executive Audience</div>
      <div class="meta-val">CEOs, CROs, CFOs, CMOs, Board Members</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Methodological Rigor</div>
      <div class="meta-val">SPICED, MEDDPICC, DCF Valuation Models</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Edition & Academic Standard</div>
      <div class="meta-val">Revised Edition (2026) &bull; 25 APA 7th References</div>
    </div>
  </div>

  <div class="cover-footer">
    <div><strong>PROFITMACHINES</strong> &bull; https://profit-max-delta.vercel.app/</div>
    <div>EXECUTIVE PUBLICATION &bull; ALL RIGHTS RESERVED</div>
  </div>
</div>

<!-- MANUSCRIPT BODY -->
<div class="document-body">
${parsedBody}
</div>

</body>
</html>
`;

console.log('Writing revised executive HTML to:', outputHtmlPath);
fs.writeFileSync(outputHtmlPath, fullHtml, 'utf8');
console.log('HTML generated successfully. Size:', fs.statSync(outputHtmlPath).size, 'bytes');

