import type { Metadata } from 'next';
import { Suspense } from 'react';
import FeedbackForm from './FeedbackForm';
import { APP_URL, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Feedback',
	description: `Share feedback, bug reports, or feature ideas for ${SITE_NAME}.`,
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		title: `Feedback | ${SITE_NAME}`,
		description: `Share feedback, bug reports, or feature ideas for ${SITE_NAME}.`,
		url: `${SITE_URL}/feedback`,
		images: [DEFAULT_OG_IMAGE],
	},
	twitter: {
		card: 'summary_large_image',
		title: `Feedback | ${SITE_NAME}`,
		description: `Share feedback, bug reports, or feature ideas for ${SITE_NAME}.`,
		images: [DEFAULT_OG_IMAGE.url],
	},
	alternates: {
		canonical: `${SITE_URL}/feedback`,
	},
};

export default function FeedbackPage() {
	return (
		<main className="flex-1">
			<div className="border-b border-blue-200 bg-[#edf5ff] px-4 py-3 text-center text-[#102866]">
				<p className="text-sm font-medium sm:text-base">
					<span className="font-bold">Hosted beta:</span> try the app at{' '}
					<a
						href={APP_URL}
						className="font-bold text-[#1556d8] underline underline-offset-2 hover:text-[#102866]"
					>
						app.rungset.com
					</a>
				</p>
			</div>

			<div className="site-container py-16 lg:py-20">
				<div className="mx-auto mb-12 max-w-3xl">
					<p className="eyebrow">Feedback</p>
					<h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#102866] md:text-5xl">Help improve Rungset</h1>
					<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
						Share bugs, usability notes, or ideas for planned features. Your message is read by the
						project maintainer.
					</p>
				</div>

				<Suspense
					fallback={
						<div className="site-card mx-auto max-w-2xl p-8 text-center text-slate-600">
							Loading form…
						</div>
					}
				>
					<FeedbackForm />
				</Suspense>
			</div>
		</main>
	);
}
