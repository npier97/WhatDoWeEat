import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, 'src/components'),
      'components-library': path.resolve(__dirname, 'node_modules/components-library/dist/components-library'),
    },
  },
  plugins: [react()],
})
