const CACHE_NAME = 'goalgenius-v1';

// Assets to cache immediately on SW install
const PRECACHE_ASSETS = [
  '/',
  '/offline',
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
              return null;
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
    url.pathname.startsWith('/_next/static') ||
    url.pathname.startsWith('/_next/image') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico)$/)
  );
};

// Helper function to determine if request is for CSS
const isCSSRequest = (url) => {
  return url.pathname.includes('.css') || url.pathname.includes('/_next/static/css/');
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

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }


  // Skip cross-origin requests
  if (!isCacheableRequest(url)) {
    return;
  }

  // Handle CSS files with Cache First strategy
  if (isCSSRequest(url)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request)
            .then((response) => {
              if (!response.ok) throw new Error('Network response was not ok');
              const clonedResponse = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, clonedResponse));
              return response;
            })
            .catch(() => {
              console.error('Failed to fetch CSS:', url.pathname);
              return new Response(
                'body { background: #fff; }', // Basic fallback CSS
                {
                  headers: { 'Content-Type': 'text/css' },
                }
              );
            });
        })
    );
    return;
  }

  // Handle other static assets
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Update cache in background
            event.waitUntil(
              fetch(event.request)
                .then((response) => {
                  if (!response.ok) return;
                  return caches.open(CACHE_NAME)
                    .then((cache) => cache.put(event.request, response));
                })
                .catch(() => {/* Ignore errors */})
            );
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              if (!response.ok) return response;
              const clonedResponse = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, clonedResponse));
              return response;
            })
            .catch(() => {
              // Return a fallback image or asset if available
              return caches.match('/favicon.svg');
            });
        })
    );
    return;
  }

  // Handle API requests
  if (isApiRequest(url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
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

  // Handle navigation requests (HTML pages)
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        // Handle 404 responses
        if (response.status === 404) {
          const notFoundResponse = await caches.match('/not-found');
          if (notFoundResponse) return notFoundResponse;
          return response;
        }

        // Cache successful responses
        if (response.ok) {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clonedResponse));
        }
        return response;
      })
      .catch(async () => {
        // Try to get from cache first
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Try to get the offline page
        const offlineResponse = await caches.match('/offline');
        if (offlineResponse) {
          return offlineResponse;
        }

        // Fallback to a basic offline response
        return new Response(
          off,
          {
            status: 503,
            headers: { 'Content-Type': 'text/html' },
          }
        );
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
