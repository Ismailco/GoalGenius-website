import type { Metadata } from 'next';
import DocsContent from './DocsContent';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Documentation',
	description:
		'Learn how to use GoalGenius today: goals, milestones, todos, notes, check-ins, settings export, and self-hosting under AGPLv3.',
	openGraph: {
		title: `Documentation | ${SITE_NAME}`,
		description:
			'Guides for the current GoalGenius application features, session API notes, and self-hosting.',
		type: 'website',
		url: `${SITE_URL}/docs`,
		images: [DEFAULT_OG_IMAGE],
	},
	twitter: {
		card: 'summary_large_image',
		title: `Documentation | ${SITE_NAME}`,
		description:
			'Guides for the current GoalGenius application features, session API notes, and self-hosting.',
		images: [DEFAULT_OG_IMAGE.url],
	},
	alternates: {
		canonical: `${SITE_URL}/docs`,
	},
};

export default function DocsPage() {
	return <DocsContent />;
}
