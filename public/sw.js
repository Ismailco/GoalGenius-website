const CACHE_NAME = 'goalgenius-v1';

// Assets to cache immediately on SW install
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/favicon-64x64.png',
  '/favicon-128x128.png',
  '/favicon-256x256.png'
];

// Install event - precache critical assets with error handling
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache each asset individually to handle failures gracefully
        return Promise.allSettled(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(error => {
              console.warn(`Failed to cache ${url}:`, error);
              return null; // Continue with other assets even if one fails
            })
          )
        );
      })
      .then(() => {
        console.log('Precaching completed');
        return self.skipWaiting();
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Helper function to determine if a request is for an API call
const isApiRequest = (url) => {
  return url.pathname.startsWith('/api/');
};

// Helper function to determine if a request is for a static asset
const isStaticAsset = (url) => {
  return (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico)$/)
  );
};

// Helper function to determine if we should cache this request
const isCacheableRequest = (url) => {
  const urlsToCache = [
    self.location.origin,
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];
  return urlsToCache.some((urlToCache) => url.origin === urlToCache);
};

// Fetch event - handle all requests
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests
  if (!isCacheableRequest(url)) {
    return;
  }

  // Handle API requests
  if (isApiRequest(url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response before caching
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(async () => {
          // If offline, try to return cached response
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // If no cached response, return a custom offline response
          return new Response(
            JSON.stringify({ error: 'You are offline' }),
            {
              status: 503,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        })
    );
    return;
  }

  // Handle static assets with Cache First strategy
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached response immediately
          // Fetch and cache update in background
          event.waitUntil(
            fetch(event.request).then((response) => {
              return caches.open(CACHE_NAME).then((cache) => {
                return cache.put(event.request, response.clone()).then(() => {
                  return response;
                });
              });
            })
          );
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // Cache the fetched response
          const clonedResponse = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            })
          );
          return response;
        });
      })
    );
    return;
  }

  // Handle navigation requests with Network First strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache the fetched response
        const clonedResponse = response.clone();
        event.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          })
        );
        return response;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        // If no cached response, return offline page
        return caches.match('/offline');
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-goals') {
    event.waitUntil(
      // Implement your sync logic here
      // This could be retrying failed POST/PUT requests
      Promise.resolve()
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
    };

    event.waitUntil(
      self.registration.showNotification('GoalGenius', options)
    );
  }
});
