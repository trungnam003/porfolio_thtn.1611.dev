/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@page': path.resolve(__dirname, './src/page/'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
