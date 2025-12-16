const CACHE_NAME = "flashcards-v1";

// Use RELATIVE paths (GitHub Pages safe)
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./manifest.json",

  // SVG icons
  "./icons/add.svg",
  "./icons/ai.svg",
  "./icons/import.svg",
  "./icons/flashcard.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
