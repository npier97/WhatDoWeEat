/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@icons': path.resolve(__dirname, './src/icons'),
        '@utils': path.resolve(__dirname, './src/utils'),
        'components-library': path.resolve(__dirname, 'node_modules/components-library'),
      },
    },
});
