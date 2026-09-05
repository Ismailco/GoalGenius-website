import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: SITE_URL, priority: 1 },
		{ url: `${SITE_URL}/docs`, priority: 0.8 },
		{ url: `${SITE_URL}/privacy`, priority: 0.4 },
		{ url: `${SITE_URL}/terms`, priority: 0.4 },
		{ url: `${SITE_URL}/donate`, priority: 0.5 },
	];
}
