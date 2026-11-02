const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '04-manuscript');
const chapters = [
  'front-matter.md',
  'chapter-01.md',
  'chapter-02.md',
  'chapter-03.md',
  'chapter-04.md',
  'chapter-05.md',
  'chapter-06.md',
  'chapter-07.md',
  'chapter-08.md',
  'chapter-09.md',
  'chapter-10.md',
  'chapter-11.md',
  'chapter-12.md',
  'chapter-13.md',
  'chapter-14.md',
  'chapter-15.md',
  'chapter-16.md',
  'chapter-17.md',
  'back-matter.md'
];

let fullContent = '';
for (let i = 0; i < chapters.length; i++) {
  const chap = chapters[i];
  const filePath = path.join(dir, chap);
  const text = fs.readFileSync(filePath, 'utf8');
  fullContent += text.trim() + '\n\n';
}

const targetPath = path.join(dir, 'ebook-manuscript.md');
fs.writeFileSync(targetPath, fullContent, 'utf8');

console.log('Re-assembled ebook-manuscript.md safely with Node.js UTF-8.');
console.log('File size:', fs.statSync(targetPath).size, 'bytes');

const verifyText = fs.readFileSync(targetPath, 'utf8');
const badChars = ['â', 'Â', 'Ã', 'â€', 'â"'];
let foundBad = false;
for (const bad of badChars) {
  if (verifyText.includes(bad)) {
    console.log('WARNING: Found bad sequence:', bad);
    foundBad = true;
  }
}
if (!foundBad) {
  console.log('SUCCESS: No corrupted characters or mojibake found in ebook-manuscript.md!');
}

