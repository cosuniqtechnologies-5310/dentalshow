const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'app', 'globals.css');
let s = fs.readFileSync(cssPath, 'utf8');

function isBodyParagraphSelector(sel) {
  const lower = sel.trim().toLowerCase();
  if (lower === 'body') return true;
  if (lower === 'p') return true;
  if (lower.endsWith(' p') || lower.includes(' p ') || lower.includes(' p,') || lower.includes(' p.') || lower.includes('p.')) {
    // If it's a paragraph inside a container
    return true;
  }
  // Check common description / body text classes
  const isDesc = lower.includes('description') || lower.includes('-desc') || lower.includes('desc-') || lower.includes('statement') || lower.includes('copyright') || lower.includes('address') || lower.includes('bio') || lower.includes('schedule-intro-text');
  if (isDesc) {
    if (!lower.includes('title') && !lower.includes('heading') && !lower.includes('btn') && !lower.includes('badge')) {
      return true;
    }
  }
  return false;
}

const regex = /([^{}]+)\{([^}]*font-size:\s*([^;]+);[^}]*)\}/g;
let m;
const pRules = [];
const textRules = [];

while ((m = regex.exec(s)) !== null) {
  const sel = m[1].trim();
  const fsVal = m[3].trim();
  if (isBodyParagraphSelector(sel)) {
    pRules.push({ sel, fsVal });
  } else {
    textRules.push({ sel, fsVal });
  }
}

console.log('Paragraph selectors count (UNTOUCHED):', pRules.length);
pRules.forEach(r => console.log('  [P]', r.sel.replace(/\r?\n/g, ' '), '=>', r.fsVal));
console.log('\nTotal Title & Text selectors to ADD 10px:', textRules.length);
