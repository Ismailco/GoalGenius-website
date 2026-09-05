import type { Metadata } from 'next';
import Link from 'next/link';
import {
	APP_URL,
	DEFAULT_OG_IMAGE,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	SITE_NAME,
	SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
	title: 'Support / Donate',
	description: `Optional donations support continued development of ${SITE_NAME}. The hosted beta remains free during beta; the source stays open under ${LICENSE_NAME}.`,
	openGraph: {
		title: `Support / Donate | ${SITE_NAME}`,
		description: `Optional donations support continued development of ${SITE_NAME}.`,
		type: 'website',
		url: `${SITE_URL}/donate`,
		images: [DEFAULT_OG_IMAGE],
	},
	alternates: {
		canonical: `${SITE_URL}/donate`,
	},
};

const donationOptions = [
	{
		name: 'Buy Me a Coffee',
		description: 'One-time support via Buy Me a Coffee',
		url: 'https://www.buymeacoffee.com/ismailco',
		buttonText: 'Buy Me a Coffee',
	},
	{
		name: 'GitHub Sponsors',
		description: 'Sponsor through GitHub Sponsors',
		url: 'https://github.com/sponsors/Ismailco',
		buttonText: 'Sponsor on GitHub',
	},
	{
		name: 'Ko-fi',
		description: 'One-time or monthly support on Ko-fi',
		url: 'https://ko-fi.com/ismailcourr',
		buttonText: 'Support on Ko-fi',
	},
];

export default function DonatePage() {
	return (
		<main className="flex-1">
			<section className="relative py-20" aria-labelledby="donate-heading">
				<div className="container mx-auto px-4 text-center">
					<div className="mx-auto max-w-3xl">
						<p className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300">
							Optional support
						</p>
						<h1 id="donate-heading" className="mb-6 text-4xl font-bold text-white md:text-5xl">
							Support GoalGenius development
						</h1>
						<p className="mb-4 text-xl text-gray-300">
							Donations are optional. They are not payment for product access.
						</p>
						<p className="text-gray-400">
							Open source under {LICENSE_NAME}. The hosted beta at{' '}
							<a href={APP_URL} className="text-blue-400 hover:underline">
								app.goalgenius.online
							</a>{' '}
							is currently free during beta. Self-hosting remains available from the source repository.
						</p>
					</div>
				</div>
			</section>

			<section className="relative pb-16" aria-labelledby="donation-options-heading">
				<div className="container mx-auto px-4">
					<h2 id="donation-options-heading" className="sr-only">
						Donation options
					</h2>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
						{donationOptions.map((option) => (
							<div key={option.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
								<h3 className="mb-3 text-2xl font-bold text-white">{option.name}</h3>
								<p className="mb-6 text-gray-300">{option.description}</p>
								<a
									href={option.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white transition hover:from-indigo-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									{option.buttonText}
									<svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="relative py-16" aria-labelledby="other-support-heading">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
						<h2 id="other-support-heading" className="mb-4 text-3xl font-bold text-white">
							Other ways to help
						</h2>
						<p className="mb-6 text-gray-300">
							Contributing code, reporting bugs, and sharing the project also help.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<a
								href={GITHUB_REPO_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								View Source on GitHub
							</a>
							<a
								href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out GoalGenius — an open-source goal tracker: https://goalgenius.online')}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								Share
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-16" aria-label="back home">
				<div className="container mx-auto px-4 text-center">
					<Link
						href="/"
						className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Back to Home
					</Link>
				</div>
			</section>
		</main>
	);
}
