
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: fileURLToPath(new URL("src", import.meta.url)),
      },
    ],
  },
})
