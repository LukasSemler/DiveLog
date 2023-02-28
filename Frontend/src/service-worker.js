'use strict';
console.debug('SW loaded');
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('install', (event) => {
  console.debug('SW install event');
});
self.addEventListener('activate', function (event) {
  console.debug('SW activate event, claiming control');
  return self.clients.claim();
});
// Caching Section
import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

import { registerRoute, Route } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// const employeesRoute = new Route(
//   ({ url }) => url.pathname === '/employees',
//   new NetworkFirst({
//     cacheName: 'lukas-employees',
//     plugins: [
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 1,
//       }),
//     ],
//     cacheableResponse: {
//       statuses: [0, 200],
//     },
//   }),
// );
// registerRoute(employeesRoute);

const imagesRoute = new Route(
  ({ url }) => /.*images\/portraits\/.*.jpg/.test(url.pathname),
  new CacheFirst({
    cacheName: 'lukas-images',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 1,
      }),
    ],
    cacheableResponse: {
      statuses: [0, 200],
    },
  }),
);
registerRoute(imagesRoute);

self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    caches.delete('lukas-employees');
    caches.delete('lukas-images');
  }
});
