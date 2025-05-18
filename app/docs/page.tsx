import { Metadata } from 'next';
import DocsContent from './DocsContent';

export const metadata: Metadata = {
	title: 'Documentation - GoalGenius',
	description: 'Comprehensive documentation for GoalGenius - Learn how to use and contribute to our goal tracking platform.',
	openGraph: {
		title: 'Documentation - GoalGenius',
		description: 'Comprehensive documentation for GoalGenius - Learn how to use and contribute to our goal tracking platform.',
		type: 'website',
		url: 'https://goalgenius.online/docs',
		images: [
			{
				url: 'https://goalgenius.online/og-docs.jpg',
				width: 1200,
				height: 630,
				alt: 'GoalGenius Documentation',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Documentation - GoalGenius',
		description: 'Comprehensive documentation for GoalGenius - Learn how to use and contribute to our goal tracking platform.',
		images: ['https://goalgenius.online/og-docs.jpg'],
	},
	alternates: {
		canonical: 'https://goalgenius.online/docs',
	},
};

export default function DocsPage() {
	return <DocsContent />;
}
