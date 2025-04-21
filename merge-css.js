// merge-css.js
import fs from "fs";
import path from "path";

const cssDir  = path.resolve("src/styles");
const cssFiles = [
  "App.css",
  "Dashboard.css",
  "Header.css",
  "PerformanceGraph.css",
  "Sidebar.css",
];
const outFile = path.join(cssDir, "Global.module.css");

// banner para rastreabilidade
const banner =
  `/* Auto‑generated on ${new Date().toISOString()} */\n` +
  `/* Do not edit directly — edit source files instead. */\n\n`;

fs.writeFileSync(outFile, banner);

cssFiles.forEach((file) => {
  const src = path.join(cssDir, file);
  const content = fs.readFileSync(src, "utf8");
  fs.appendFileSync(
    outFile,
    `/* ===== START ${file} ===== */\n${content.trim()}\n/* ===== END ${file} ===== */\n\n`
  );
});

console.log(`✅  Merged ${cssFiles.length} files → ${outFile}`);
