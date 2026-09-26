import type { Metadata } from 'next';
import { Suspense } from 'react';
import FeedbackForm from './FeedbackForm';
import { APP_URL, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Feedback',
	description: `Share feedback, bug reports, or feature ideas for ${SITE_NAME}.`,
	robots: {
		index: false,
		follow: true,
	},
	alternates: {
		canonical: `${SITE_URL}/feedback`,
	},
};

export default function FeedbackPage() {
	return (
		<main className="flex-1">
			<div className="bg-blue-600 px-4 py-3 text-center text-white">
				<p className="text-sm font-medium sm:text-base">
					<span className="font-bold">Hosted beta:</span> try the app at{' '}
					<a
						href={APP_URL}
						className="font-bold underline underline-offset-2 hover:text-blue-100"
					>
						app.rungset.com
					</a>
				</p>
			</div>

			<div className="container mx-auto px-4 py-16">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300">
						Feedback
					</p>
					<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Help improve Rungset</h1>
					<p className="text-lg text-gray-300">
						Share bugs, usability notes, or ideas for planned features. Your message is read by the
						project maintainer.
					</p>
				</div>

				<Suspense
					fallback={
						<div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-300">
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
