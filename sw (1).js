// Service worker mínimo. Su único propósito es cumplir el requisito
// técnico que necesitan los navegadores (sobre todo Android/Chrome)
// para ofrecer el instalado automático de la app. No hace caché ni
// modifica nada de la app real — todo el contenido sigue viniendo
// en vivo de tu Web App de Apps Script dentro del iframe.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // No intercepta ni cachea nada; solo deja pasar la petición normal.
  event.respondWith(fetch(event.request));
});
