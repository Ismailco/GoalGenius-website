import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
	DEFAULT_OG_IMAGE,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_TAGLINE,
	SITE_URL,
} from '@/lib/site';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${SITE_NAME} - ${SITE_TAGLINE}`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	authors: [{ name: 'Ismail Courr', url: 'https://github.com/Ismailco' }],
	creator: 'Ismail Courr',
	publisher: SITE_NAME,
	applicationName: SITE_NAME,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: `${SITE_NAME} - ${SITE_TAGLINE}`,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: 'en_US',
		type: 'website',
		images: [DEFAULT_OG_IMAGE],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_NAME} - ${SITE_TAGLINE}`,
		description: SITE_DESCRIPTION,
		images: [DEFAULT_OG_IMAGE.url],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: SITE_URL,
	},
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico' },
		],
	},
};

export const viewport: Viewport = {
	themeColor: '#0f172a',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body className="min-h-screen bg-slate-900 text-gray-100 antialiased">
				<div className="relative flex min-h-screen flex-col">
					<div
						className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-indigo-500/15 blur-3xl"
						aria-hidden="true"
					/>
					<Header />
					<div className="relative flex flex-1 flex-col">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
