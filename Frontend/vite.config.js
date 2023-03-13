import { fileURLToPath, URL } from 'url';
//Url für Pfad
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './src/manifest';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    VitePWA({
      manifest,
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.js',
      includeAssets: ['**/*.{js,css,html,jpg,ico,xml,svg,png,ttf,woff2}'],
      workbox: {
        manifest,
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'service-worker.js',
        mode: 'development',
        includeAssets: ['**/*.{js,css,html,jpg,ico,xml,svg,png,ttf,woff2}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //! DAS WIRD ERST GANZ ZUM SCHLUSS WENN WIR DEPLOYEN AUSKOMMENTIERT, NOCH BRUACHEN WIR DEN .dist-ORDNER (für Preview)
  build: {
    outDir: path.resolve(__dirname, '../Backend/public'),
  },
});
