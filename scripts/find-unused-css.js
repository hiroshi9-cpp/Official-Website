const fs = require('fs');
const path = require('path');

function walk(dir, extRegex) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, extRegex));
    } else {
      if (!extRegex || extRegex.test(filePath)) results.push(filePath);
    }
  });
  return results;
}

function read(file) { return fs.readFileSync(file, 'utf8'); }

const workspace = path.resolve(__dirname, '..');
const src = path.join(workspace, 'src');

const cssFiles = walk(src, /\.css$/i);
const codeFiles = walk(src, /\.(js|ts|jsx|tsx|html)$/i);

function findClasses(cssText) {
  const classRegex = /\.([A-Za-z0-9_-]+)\b/g;
  const classes = new Set();
  let m;
  while ((m = classRegex.exec(cssText)) !== null) classes.add(m[1]);
  return Array.from(classes);
}

function searchUsage(name, files) {
  const re = new RegExp(`\\b${name}\\b`);
  for (const f of files) {
    const txt = read(f);
    if (re.test(txt)) return true;
  }
  return false;
}

const report = {};
for (const cssFile of cssFiles) {
  const text = read(cssFile);
  const classes = findClasses(text);
  const isModule = cssFile.endsWith('.module.css');
  const unused = [];
  for (const cls of classes) {
    let used = false;
    if (isModule) {
      // Look for styles.cls or [styles.cls]
      const re = new RegExp(`styles\\.${cls}\\b`);
      used = codeFiles.some(f => re.test(read(f)));
    } else {
      // global: search for className="...cls..." or class="...cls..." or usage in JS
      const re = new RegExp(`class(Name)?=\\{?\\"[^\\"]*${cls}[^\\"]*\\"`, 'i');
      used = codeFiles.some(f => re.test(read(f)));
      if (!used) used = codeFiles.some(f => new RegExp(`\\b${cls}\\b`).test(read(f)));
    }
    if (!used) unused.push(cls);
  }
  report[cssFile.replace(workspace + '/', '')] = { total: classes.length, unused };
}

fs.writeFileSync(path.join(workspace, 'unused-css-report.json'), JSON.stringify(report, null, 2));
console.log('Report written to unused-css-report.json');
