const CACHE = "tjap-kemiri-cafepos-v40";
const ASSETS = [
  "/login",
  "/pos",
  "/admin",
  "/app/index.html",
  "/app/styles.css?v=21",
  "/app/app.js?v=40",
  "/app/templates/Tjap_Kemiri_Template_Stok_Masuk.xlsx",
  "/app/manifest.webmanifest",
  "/Logo/Logo%20tjap%20kemiri.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate")
          return caches.match("/app/index.html");
        return new Response("Offline resource unavailable", {
          status: 503,
          statusText: "Offline",
        });
      }),
  );
});
