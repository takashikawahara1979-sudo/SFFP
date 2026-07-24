/* SEEDS for FUTURE Patients — Service Worker
   ページを一度開くと内容をキャッシュし、次回以降やオフラインでも表示できます。
   ファイルを更新したら、下の CACHE の数字（v1 → v2 …）を上げてください。 */
const CACHE = 'seeds-v63';
const ASSETS = [
  'index.html',
  'research/index.html',
  'case-reports/index.html',
  'clinical-trials/index.html',
  'videos/index.html',
  'assets/css/style.css',
  'assets/js/main.js',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('index.html'));
    })
  );
});
