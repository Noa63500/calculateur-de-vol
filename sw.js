
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('volcalc-cache').then(cache => {
      return cache.addAll([
        './',
        './calculateur_vol_final_presente.html',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
