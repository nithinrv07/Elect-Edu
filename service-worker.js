/**
 * ElectEdu Service Worker
 * Provides offline support, advanced caching strategy, and performance optimization
 * Version: 1.0
 */

const CACHE_NAME = 'electedu-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './firebase-config.js',
    './stateElectionData.js',
    './transparent_logo.png'
];

const API_CACHE = 'electedu-api-v1';
const IMAGE_CACHE = 'electedu-images-v1';
const FONT_CACHE = 'electedu-fonts-v1';

// URLs to never cache (dynamic/personal content)
const DO_NOT_CACHE = [
    '/admin',
    '/api/personal',
    '/api/analytics'
];

/**
 * Service Worker Install Event - Pre-cache essential assets
 */
self.addEventListener('install', event => {
    console.log('[ServiceWorker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(STATIC_ASSETS)
                    .catch(error => {
                        console.warn('[ServiceWorker] Cache.addAll error:', error);
                        // Continue even if some assets fail to cache
                        return Promise.resolve();
                    });
            })
            .then(() => self.skipWaiting())
    );
});

/**
 * Service Worker Activate Event - Clean up old caches
 */
self.addEventListener('activate', event => {
    console.log('[ServiceWorker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // Delete old cache versions
                        if (cacheName !== CACHE_NAME && 
                            cacheName !== API_CACHE && 
                            cacheName !== IMAGE_CACHE && 
                            cacheName !== FONT_CACHE) {
                            console.log('[ServiceWorker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

/**
 * Service Worker Fetch Event - Intercept and cache requests
 */
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Only handle HTTP/HTTPS requests (ignores chrome-extension://, etc.)
    if (!event.request.url.startsWith('http')) {
        return;
    }

    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip monitoring and admin paths
    if (DO_NOT_CACHE.some(path => url.pathname.includes(path))) {
        return;
    }
    
    // Handle different resource types with appropriate strategies
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
        // Static assets - Cache First
        event.respondWith(handleStaticAsset(event.request));
    } else if (url.pathname.includes('googleapis') || url.pathname.includes('fonts')) {
        // Google Fonts - Cache First
        event.respondWith(handleFontAsset(event.request));
    } else if (url.pathname.includes('google-analytics')) {
        // Analytics - Network Only
        event.respondWith(fetch(event.request).catch(() => null));
    } else {
        // HTML documents and other requests - Network First
        event.respondWith(handleNetworkFirst(event.request));
    }
});

/**
 * Cache-First Strategy for static assets
 * Returns cached version, falls back to network, then offline page
 */
function handleStaticAsset(request) {
    return caches.match(request)
        .then(cached => {
            if (cached) {
                return cached;
            }
            
            return fetch(request)
                .then(response => {
                    // Cache successful responses
                    if (response && response.status === 200) {
                        const clonedResponse = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(request, clonedResponse))
                            .catch(error => console.warn('[ServiceWorker] Cache put error:', error));
                    }
                    return response;
                })
                .catch(() => {
                    return createOfflineResponse();
                });
        });
}

/**
 * Cache-First Strategy for font assets
 */
function handleFontAsset(request) {
    return caches.match(request)
        .then(cached => {
            if (cached) {
                return cached;
            }
            
            return fetch(request)
                .then(response => {
                    if (response && response.status === 200) {
                        const clonedResponse = response.clone();
                        caches.open(FONT_CACHE)
                            .then(cache => cache.put(request, clonedResponse))
                            .catch(error => console.warn('[ServiceWorker] Font cache error:', error));
                    }
                    return response;
                })
                .catch(() => {
                    // Return empty response for font errors
                    return new Response('', { status: 404 });
                });
        });
}

/**
 * Network-First Strategy for HTML and API requests
 * Try network first, fall back to cache, then offline page
 */
function handleNetworkFirst(request) {
    return fetch(request)
        .then(response => {
            // Cache successful responses
            if (response && response.status === 200) {
                const clonedResponse = response.clone();
                const cache = request.destination === 'document' ? CACHE_NAME : API_CACHE;
                caches.open(cache)
                    .then(c => c.put(request, clonedResponse))
                    .catch(error => console.warn('[ServiceWorker] Network cache error:', error));
            }
            return response;
        })
        .catch(() => {
            
            // Try cache as fallback
            return caches.match(request)
                .then(cached => {
                    if (cached) {
                        return cached;
                    }
                    // Return offline page if available
                    return createOfflineResponse();
                });
        });
}

/**
 * Create offline response
 */
function createOfflineResponse() {
    return new Response(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>ElectEdu - Offline</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    }
                    .offline-message {
                        background: white;
                        padding: 40px;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                        text-align: center;
                        max-width: 400px;
                    }
                    h1 { color: #333; margin: 0 0 10px 0; }
                    p { color: #666; margin: 0; }
                </style>
            </head>
            <body>
                <div class="offline-message">
                    <h1>You are Offline</h1>
                    <p>ElectEdu requires an internet connection. Please check your connection and try again.</p>
                </div>
            </body>
        </html>
        `,
        {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/html; charset=utf-8' })
        }
    );
}

/**
 * Handle push notifications (if implemented)
 */
self.addEventListener('push', event => {
    console.log('[ServiceWorker] Push notification received');
    // Implementation for push notifications can be added here
});

console.log('[ServiceWorker] Service Worker script loaded');
