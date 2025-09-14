self.addEventListener('install', e => {
  e.waitUntil(caches.open('focus-pwa-v1').then(cache => cache.addAll([
    './', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png'
  ])));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
