import { defineConfig, type UserConfig } from "vite";
import windiCSS from 'vite-plugin-windicss'
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import makeManifest from "./scripts/make-manifest";

const src = resolve(__dirname, "src");
const assetsDir = resolve(src, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const isDev = false;

export const sharedConfig: UserConfig = {
  resolve: {
    alias: {
      "@src": src,
      "@assets": assetsDir,
    },
  },
  css: {
    // Global SCSS Imports 使用 scss.additionalData 来编译所有应用 scss 变量的组件
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@src/styles/mixin.scss" as *;
        `,
      },
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  ...sharedConfig,
  publicDir,
  plugins: [vue(), makeManifest(), windiCSS()],
  build: {
    outDir,
    sourcemap: isDev,
    minify: !isDev,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        // background: resolve(src, "background", "index.ts"),
        popup: resolve(src, "popup", "index.html"),
        options: resolve(src, "options", "index.html"),
      },
      output: {
        entryFileNames: (chunk) => `src/${chunk.name}/index.js`,
      },
    },
  },
});
