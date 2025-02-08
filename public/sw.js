const CACHE_VERSION = '1';
const CACHE_NAMES = {
  static: `static-v${CACHE_VERSION}`,
  dynamic: `dynamic-v${CACHE_VERSION}`,
  offline: `offline-v${CACHE_VERSION}`
};

// Modified offline modal with online check
const OFFLINE_MODAL_HTML = `
<div id="offline-modal" style="display: none;">
  <style>
    #offline-modal {
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.95);
      border-radius: 8px;
      padding: 8px 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      backdrop-filter: blur(10px);
      z-index: 9999;
      border: 1px solid rgba(255, 255, 255, 0.1);
      animation: slideDown 0.3s ease-out;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    @keyframes slideDown {
      from {
        transform: translate(-50%, -100%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  </style>
  <div style="font-size: 16px;">📡</div>
  <div style="font-size: 14px; font-weight: 500;">You're offline</div>
  <button onclick="this.closest('#offline-modal').remove()" style="
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    padding: 4px;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    margin-left: 8px;
  ">×</button>
</div>
<script>
(function checkConnectivity() {
    function updateOfflineStatus() {
        const modal = document.getElementById('offline-modal');
        if (!navigator.onLine && modal) {
            modal.style.display = 'block';
        } else if (modal) {
            modal.style.display = 'none';
        }
    }

    window.addEventListener('online', updateOfflineStatus);
    window.addEventListener('offline', updateOfflineStatus);

    // Initial check
    updateOfflineStatus();
})();
</script>
`;

// Full offline page for uncached routes
const OFFLINE_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offline - GoalGenius</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom, #1a1a1a, #000000);
            color: white;
            text-align: center;
            padding: 20px;
        }

        .offline-container {
            max-width: 500px;
            padding: 40px 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: #cccccc;
            line-height: 1.5;
        }

        .retry-button {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
            font-weight: 500;
        }

        .retry-button:hover {
            background: #2563eb;
        }

        .icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="offline-container">
        <div class="icon">📡</div>
        <h1>You're Offline</h1>
        <p>This page isn't available offline. Please check your connection and try again.</p>
        <button class="retry-button" onclick="window.location.reload()">Try Again</button>
    </div>
</body>
</html>`;

// Assets that should be cached immediately (app shell)
const APP_SHELL = [
  '/',
  '/dashboard',
  '/checkins',
  '/notes',
  '/todos',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/favicon-64x64.png',
  '/favicon-128x128.png',
  '/favicon-256x256.png',
  '/_next/static/**/*'
];

// Helper functions
const isNavigationRequest = (request) => {
  // Check if it's a navigation AND if it's a GET request (refreshes are GET)
  return request.mode === 'navigate' && request.method === 'GET';
};
const isStaticAsset = (url) => {
  const parsedUrl = new URL(url);
  return parsedUrl.pathname.startsWith('/_next/static') ||
         parsedUrl.pathname.startsWith('/_next/data') ||
         parsedUrl.pathname.startsWith('/_next/image') ||
         parsedUrl.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico)$/);
};
const isAPIRequest = (request) => {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
};
const isAuthRequest = (request) => {
  const url = new URL(request.url);
  return url.pathname.includes('/auth/') || // For Clerk
         url.hostname.includes('clerk.dev'); // For Clerk's domain
};

// Cache strategies
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (navigator.onLine) {
    const networkResponsePromise = fetch(request)
      .then(async (networkResponse) => {
        if (networkResponse.ok) {
          await cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails, return cached response
        if (cachedResponse) {
          return cachedResponse;
        }
        throw new Error('No cached response available');
      });

    // Return cached response immediately if available, otherwise wait for network
    return cachedResponse || networkResponsePromise;
  }

  // If offline and we have a cached response, return it
  if (cachedResponse) {
    return cachedResponse;
  }
  throw new Error('No cached response available and offline');
}

async function networkFirst(request, cacheName) {
  if (navigator.onLine) {
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(cacheName);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      throw error;
    }
  } else {
    // If offline, try cache first
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw new Error('Offline and no cached response available');
  }
}

// Background sync queue
const syncQueue = new Set();

// Install event - cache app shell and handle Next.js static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static).then(async (cache) => {
        // Cache the basic app shell first
        await cache.addAll(APP_SHELL.filter(url => !url.includes('**')));

        // Then try to cache any existing Next.js static files
        try {
          const existingStaticFiles = await fetch('/_next/static/chunks/manifest.json')
            .then(res => res.json())
            .then(manifest => Object.values(manifest).flat())
            .catch(() => []);

          await cache.addAll(existingStaticFiles);
        } catch (error) {
          console.warn('Could not cache all Next.js static files:', error);
        }
      }),
      caches.open(CACHE_NAMES.offline).then((cache) => {
        return cache.put('/offline', new Response(OFFLINE_PAGE_HTML, {
          headers: { 'Content-Type': 'text/html' }
        }));
      })
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            const [type, version] = key.split('-v');
            if (version !== CACHE_VERSION) {
              return caches.delete(key);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event - handle different types of requests
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Don't cache auth requests
  if (isAuthRequest(request)) {
    event.respondWith(
      navigator.onLine ?
        fetch(request) :
        new Response(JSON.stringify({ error: 'Authentication not available offline' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        })
    );
    return;
  }

  // API requests - network first
  if (isAPIRequest(request)) {
    event.respondWith(
      networkFirst(request, CACHE_NAMES.dynamic).catch(() => {
        // If offline, queue for sync and return offline response
        if (request.method !== 'GET') {
          syncQueue.add({
            request: request.clone(),
            timestamp: Date.now()
          });
        }
        return new Response(
          JSON.stringify({ error: 'You are offline' }),
          {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      })
    );
    return;
  }

  // Static assets - stale while revalidate with better offline handling
  if (isStaticAsset(request.url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAMES.static);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
          // If we have it cached, return it immediately
          if (navigator.onLine) {
            // Update cache in background if online
            fetch(request)
              .then(async (networkResponse) => {
                if (networkResponse.ok) {
                  await cache.put(request, networkResponse.clone());
                }
              })
              .catch(() => {/* ignore network errors */});
          }
          return cachedResponse;
        }

        // If not cached and online, try network and cache
        if (navigator.onLine) {
          try {
            const networkResponse = await fetch(request);
            if (networkResponse.ok) {
              await cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          } catch (error) {
            // Network error, try to return any cached version
            const cachedVersion = await cache.match(request);
            if (cachedVersion) return cachedVersion;

            // If it's a JS chunk, return an empty JS file to prevent errors
            if (request.url.endsWith('.js')) {
              return new Response(
                `(self.webpackChunk = self.webpackChunk || []).push([[0], {}, function(){}]);`,
                {
                  headers: {
                    'Content-Type': 'application/javascript',
                    'Cache-Control': 'no-store'
                  }
                }
              );
            }
            throw error;
          }
        }

        // If offline and not cached, handle gracefully
        if (request.url.endsWith('.js')) {
          return new Response(
            `(self.webpackChunk = self.webpackChunk || []).push([[0], {}, function(){}]);`,
            {
              headers: {
                'Content-Type': 'application/javascript',
                'Cache-Control': 'no-store'
              }
            }
          );
        }

        throw new Error('Static asset not available offline');
      })()
    );
    return;
  }

  // Navigation requests - check both caches, then network with offline fallback
  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        // Try to get from both caches
        const staticCache = await caches.open(CACHE_NAMES.static);
        const dynamicCache = await caches.open(CACHE_NAMES.dynamic);

        // Check static cache first (pre-cached routes)
        let cachedResponse = await staticCache.match(request);

        // If not in static cache, check dynamic cache
        if (!cachedResponse) {
          cachedResponse = await dynamicCache.match(request);
        }

        if (cachedResponse) {
          // If we have it cached, return it and update cache in background only if online
          if (navigator.onLine) {
            fetch(request).then(async (networkResponse) => {
              if (networkResponse.ok) {
                await dynamicCache.put(request, networkResponse.clone());
              }
            }).catch(() => {/* ignore network errors */});
          }
          return cachedResponse;
        }

        // If not in either cache, try network if online
        if (navigator.onLine) {
          try {
            const networkResponse = await fetch(request);
            if (networkResponse.ok) {
              await dynamicCache.put(request, networkResponse.clone());
            }
            return networkResponse;
          } catch (error) {
            // Network error, fall through to offline page
          }
        }

        // If offline or network failed, show offline page from cache
        const offlineCache = await caches.open(CACHE_NAMES.offline);
        const offlinePage = await offlineCache.match('/offline');
        return offlinePage || new Response(OFFLINE_PAGE_HTML, {
          headers: { 'Content-Type': 'text/html' }
        });
      })()
    );
    return;
  }

  // Default - stale while revalidate
  event.respondWith(staleWhileRevalidate(request, CACHE_NAMES.dynamic));
});

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pending-changes' && navigator.onLine) {
    event.waitUntil(
      Promise.all(
        Array.from(syncQueue).map(async ({ request }) => {
          try {
            await fetch(request);
            syncQueue.delete(request);
          } catch (error) {
            console.error('Background sync failed:', error);
          }
        })
      )
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.message,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      data: data.data,
      actions: data.actions,
      vibrate: [100, 50, 100],
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'GoalGenius', options)
    );
  }
});
