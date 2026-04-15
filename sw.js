self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
self.addEventListener('fetch', (e) => {
    // Network-only - Niemals den alten Code cachen!
    e.respondWith(fetch(e.request));
});
