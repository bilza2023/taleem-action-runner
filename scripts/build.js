import { build } from "esbuild";
import { cpSync, mkdirSync } from "fs";
import { resolve } from "path";

// paths
const root = process.cwd();
const srcCss = resolve(root, "src/css/action-runner.css");
const distCssDir = resolve(root, "dist/css");
const distCss = resolve(distCssDir, "action-runner.css");

// 🔹 build JS
await build({
  entryPoints: ["src/index.js"], // adjust if needed
  bundle: true,
  format: "esm",
  outfile: "dist/taleem-action-runner.js",
  sourcemap: true,
  minify: false,
});

// 🔹 ensure css dir
mkdirSync(distCssDir, { recursive: true });

// 🔹 copy css
cpSync(srcCss, distCss);

console.log("✅ build complete (JS + CSS)");