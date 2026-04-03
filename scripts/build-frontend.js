import fs from 'fs';
import path from 'path';

const SRC_DIR = 'frontend';
const DIST_DIR = 'dist/frontend';

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function processIncludes(html) {
  const includeRegex = /<!--\s*include\s+([^\s]+)\s*-->/g;
  return html.replace(includeRegex, (match, includePath) => {
    const fullPath = path.join(SRC_DIR, includePath);
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf8');
    }
    console.warn(`Include not found: ${fullPath}`);
    return match;
  });
}

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SRC_DIR);

  files.forEach(file => {
    const srcPath = path.join(SRC_DIR, file);
    const distPath = path.join(DIST_DIR, file);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // For this project, we don't have subdirectories in frontend yet,
      // but let's handle it just in case.
      return;
    }

    if (file.endsWith('.html') && file !== 'header.html' && file !== 'footer.html') {
      console.log(`Processing ${file}...`);
      let html = fs.readFileSync(srcPath, 'utf8');
      html = processIncludes(html);
      fs.writeFileSync(distPath, html);
    } else {
      // Copy other files (js, css, etc.)
      fs.copyFileSync(srcPath, distPath);
    }
  });

  console.log('Build complete!');
}

main();
