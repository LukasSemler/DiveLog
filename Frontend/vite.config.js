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
        mode: 'development',
        runtimeCaching: [
          {
            urlPattern: '/dives',
            handler: 'Dives',
            options: {
              cacheName: 'roberts-employees',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 1, // <== 1 day
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // {
          //   urlPattern: /.*images\/portraits\/*.*.jpg/,
          //   handler: 'CacheFirst',
          //   options: {
          //     cacheName: 'roberts-images',
          //     expiration: {
          //       maxEntries: 50,
          //       maxAgeSeconds: 60 * 60 * 24 * 1, // <== 1 day
          //     },
          //     cacheableResponse: {
          //       statuses: [0, 200],
          //     },
          //   },
          // },
        ],
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
