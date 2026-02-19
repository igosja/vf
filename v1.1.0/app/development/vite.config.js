// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync } from "fs";
import handlebars from "vite-plugin-handlebars";
import liveReload from "vite-plugin-live-reload";

const srcDir = resolve(__dirname, "src");

function getHtmlEntries(srcDir) {
  const entries = {};

  const walk = (currentDir) => {
    const files = readdirSync(currentDir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = `${currentDir}/${file.name}`;
      if (file.isDirectory()) {
        walk(fullPath);
      } else if (file.isFile() && file.name.endsWith(".html")) {
        const name = fullPath.replace(srcDir + "/", "").replace(/\.html$/, "");
        entries[name] = fullPath;
      }
    }
  };

  walk(srcDir);
  return entries;
}

export default defineConfig({
  base: "./",
  root: "src",
  build: {
    rollupOptions: {
      input: getHtmlEntries(srcDir),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    open: "/index.html",
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials/"),
      helpers: {
        eq: (a, b) => a === b,
      },
    }),
    liveReload(resolve(__dirname, "src/partials/**/*"), {
      alwaysReload: true,
    }),
  ],
});
