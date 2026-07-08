import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  base: '/WhatDoWeEat/',
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2
        }
      }
    }),
    tsconfigPaths()
  ]
});
