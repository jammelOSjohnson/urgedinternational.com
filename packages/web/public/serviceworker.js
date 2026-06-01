const CACHE_NAME = "version-2.0.5";
const urlsToCache = ["offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
  self.skipWaiting();
});

// Network-first for app shell (HTML/JS) so deploys serve fresh code; cache-only for offline.html
function isAppShellRequest(request) {
  const u = new URL(request.url);
  if (request.mode === "navigate") return true;
  return /\.(html|js|css)(\?|$)/i.test(u.pathname);
}

function isOfflinePageRequest(request) {
  try {
    const u = new URL(request.url);
    return /offline\.html(\?|$)/i.test(u.pathname);
  } catch (_) {
    return false;
  }
}

//Listen for requests
self.addEventListener("fetch", (event) => {
  if (!event.request.url.startsWith("http")) return;

  // offline.html: cache-first so it works when offline
  if (isOfflinePageRequest(event.request)) {
    event.respondWith(
      caches
        .match(event.request)
        .then((cached) => cached || fetch(event.request)),
    );
    return;
  }

  // App shell (navigate, HTML, JS, CSS): network-first, do not cache (fresh after deploy)
  if (isAppShellRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => response)
        .catch(() => {
          if (event.request.mode === "navigate")
            return caches.match("offline.html");
          return caches.match(event.request);
        }),
    );
    return;
  }

  // Other (e.g. images, fonts): cache-first then network, cache 200 responses
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() =>
          event.request.mode === "navigate"
            ? caches.match("offline.html")
            : undefined,
        );
    }),
  );
});

//Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
  // Take control of all clients
  self.clients.claim();
});
