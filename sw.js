// Service worker do Kids TV Segura
// Guarda os arquivos no aparelho para o app abrir sem internet.
// Ao publicar uma nova versão, troque o número abaixo para o celular baixar a atualização.
const CACHE = 'kidstv-v5';

// Só estes endereços externos ficam guardados no aparelho.
// YouTube (player, vídeos, miniaturas) sempre vai direto para a internet.
const CACHEABLE_HOSTS = ['cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

const CORE = [
  './',
  './index.html',
  './styles.css',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png'
];

self.addEventListener('install', (event) => {
  // cache: 'reload' ignora o cache do navegador e baixa a versão publicada agora
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(CORE.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !CACHEABLE_HOSTS.includes(url.hostname)) return;

  if (sameOrigin) {
    // Arquivos do app: tenta a internet primeiro (sempre a versão mais nova);
    // sem internet, usa a cópia guardada.
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' })
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(event.request, { ignoreSearch: true })
            .then((cached) => cached || caches.match('./index.html'))
        )
    );
    return;
  }

  // Fontes do Google (versões fixas): usa a cópia guardada e atualiza em segundo plano
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(event.request);
      const network = fetch(event.request)
        .then((response) => {
          if (response && (response.ok || response.type === 'opaque')) {
            cache.put(event.request, response.clone());
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
