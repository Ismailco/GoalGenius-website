import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return {
			beforeFiles: [
				// Rewrite everything on app subdomain to /app/ path
				{
					source: '/:path*',
					has: [
						{
							type: 'host',
							value: 'app.goalgenius.soultware.com',
						},
					],
					destination: '/app/:path*',
				},
			],
			afterFiles: [],
			fallback: [],
		};
	},
	images: {
		domains: ['goalgenius.soultware.com', 'app.goalgenius.soultware.com'],
	},
};

export default nextConfig;
