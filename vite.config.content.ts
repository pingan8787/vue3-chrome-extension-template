import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";
import WindiCSS from 'vite-plugin-windicss';
import { sharedConfig } from './vite.config'
import packageJson from './package.json'

const outDir = resolve(__dirname, "dist/src/content");
const contentScriptEntry = resolve(__dirname, "src/content/index.ts");

// TODO: 改成 .env 配置文件形式

const isDev = false;
// bundling the content script using Vite
export default defineConfig({
  ...sharedConfig,
  publicDir: false,
  build: {
    outDir,
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: isDev,
    minify: !isDev,
    lib: {
      entry: contentScriptEntry,
      name: packageJson.name,
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        extend: true,
      },
    },
  },
  plugins: [
    vue(), WindiCSS()
  ],
  define: { 'process.env.NODE_ENV': '"production"' }
})
