const CACHE_NAME = 'goalgenius-v1';

// Modified offline modal with online check
const OFFLINE_MODAL_HTML = `
<div id="offline-modal" style="display: none;">
    <style>
        #offline-modal {
            position: fixed;
            top: 16px;
            right: 16px;
            max-width: 400px;
            background: rgba(0, 0, 0, 0.95);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            backdrop-filter: blur(10px);
            z-index: 9999;
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    </style>
    <div style="display: flex; align-items: start; gap: 12px;">
        <div style="font-size: 20px;">📡</div>
        <div>
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">You're offline</h3>
            <p style="margin: 0 0 12px 0; font-size: 14px; color: #cccccc; line-height: 1.5;">
                Some content may be unavailable. We'll keep you updated when you're back online.
            </p>
            <button onclick="this.closest('#offline-modal').remove()" style="
                background: #3b82f6;
                border: none;
                color: white;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 13px;
                cursor: pointer;
                transition: background-color 0.2s;
            ">Dismiss</button>
        </div>
    </div>
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

// Initial assets to cache
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

// Helper to detect RSC requests
const isRSCRequest = (request) => {
  return request.url.includes('_rsc') ||
         request.headers.get('RSC') ||
         request.headers.get('Next-Router-State-Tree');
};

// Helper to detect static files
const isStaticAsset = (url) => {
  return url.pathname.startsWith('/_next/static') ||
         url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico)$/);
};

// Install event - cache initial assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip RSC requests
  if (isRSCRequest(event.request)) {
    return;
  }

  // Handle API requests
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || new Response(
                JSON.stringify({ error: 'You are offline' }),
                {
                  status: 503,
                  headers: { 'Content-Type': 'application/json' },
                }
              );
            });
        })
    );
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // If we have a cached version, return it with the offline modal
            return cachedResponse.text().then(text => {
              // Insert the offline modal and its script before the closing body tag
              const modifiedText = text.replace(
                '</body>',
                `${OFFLINE_MODAL_HTML}</body>`
              );
              return new Response(modifiedText, {
                headers: cachedResponse.headers
              });
            });
          }

          // If no cached version, try network
          return fetch(event.request)
            .then(response => {
              if (response.ok) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  });
              }
              return response;
            })
            .catch(() => {
              // If network fails and no cache, show full offline page
              return new Response(OFFLINE_PAGE_HTML, {
                headers: {
                  'Content-Type': 'text/html; charset=utf-8'
                }
              });
            });
        })
    );
    return;
  }

  // Handle static assets
  if (isStaticAsset(new URL(event.request.url))) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request)
            .then(response => {
              if (response.ok) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  });
              }
              return response;
            });
        })
    );
    return;
  }

  // Default fetch behavior for other requests
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            return response || new Response('', { status: 408 });
          });
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
