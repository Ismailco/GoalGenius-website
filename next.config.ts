// next.config.js
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	disable: process.env.NODE_ENV === 'development',
	fallbacks: {
		document: '/offline', // fallback for document/html requests
	},
	runtimeCaching: [
		// {
		// 	urlPattern: /^https:\/\/your-api\.com\/.*/, // Adjust to match your API endpoint
		// 	handler: 'NetworkFirst',
		// 	options: {
		// 		cacheName: 'api-cache',
		// 		networkTimeoutSeconds: 10,
		// 		expiration: {
		// 			maxEntries: 50,
		// 			maxAgeSeconds: 5 * 60, // Cache for 5 minutes
		// 		},
		// 		cacheableResponse: {
		// 			statuses: [0, 200],
		// 		},
		// 	},
		// },
		{
			urlPattern: /^https:\/\/*.goalgenius.pages\.dev\/.*/, // Adjust to match your domain
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'pages-cache',
				expiration: {
					maxEntries: 50,
					maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
				},
				cacheableResponse: {
					statuses: [0, 200],
				},
			},
		},
		{
			urlPattern: /\.(png|jpg|jpeg|svg|gif|webp|ico)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'image-cache',
				expiration: {
					maxEntries: 50,
					maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
				},
			},
		},
		{
			urlPattern: /\.(js|css)$/,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'static-resources',
			},
		},
	],
});

module.exports = withPWA({
	// Other Next.js configurations
});
