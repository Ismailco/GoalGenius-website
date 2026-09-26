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
	twitter: {
		card: 'summary_large_image',
		title: `Support / Donate | ${SITE_NAME}`,
		description: `Optional donations support continued development of ${SITE_NAME}.`,
		images: [DEFAULT_OG_IMAGE.url],
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
			<section className="border-b border-slate-200 bg-[#edf5ff] py-16 lg:py-20" aria-labelledby="donate-heading">
				<div className="site-container">
					<div className="max-w-3xl">
						<p className="eyebrow">Optional support</p>
						<h1 id="donate-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#102866] md:text-5xl">
							Support Rungset development
						</h1>
						<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
							Donations are optional. They are not payment for product access.
						</p>
						<p className="mt-4 max-w-2xl leading-7 text-slate-600">
							Open source under {LICENSE_NAME}. The hosted beta at{' '}
							<a href={APP_URL} className="text-[#1556d8] hover:underline">
								app.rungset.com
							</a>{' '}
							is currently free during beta. Self-hosting remains available from the source repository.
						</p>
					</div>
				</div>
			</section>

			<section className="relative pb-16" aria-labelledby="donation-options-heading">
				<div className="site-container">
					<h2 id="donation-options-heading" className="sr-only">
						Donation options
					</h2>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 pt-12 md:grid-cols-3">
						{donationOptions.map((option) => (
							<div key={option.name} className="site-card flex flex-col p-7">
								<h3 className="text-xl font-extrabold text-[#102866]">{option.name}</h3>
								<p className="mt-3 flex-1 leading-7 text-slate-600">{option.description}</p>
								<a
									href={option.url}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-7 inline-flex items-center justify-center rounded-full bg-[#102866] px-5 py-3 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
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
				<div className="site-container">
					<div className="page-callout mx-auto max-w-3xl p-8 md:p-10">
						<p className="page-kicker">Other ways to help</p>
						<h2 id="other-support-heading" className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#102866]">
							Other ways to help
						</h2>
						<p className="mt-4 text-lg leading-8 text-slate-600">
							Contributing code, reporting bugs, and sharing the project also help.
						</p>
						<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
							<a
								href={GITHUB_REPO_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
							>
								View Source on GitHub
							</a>
							<a
								href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out Rungset: an open-source goal tracker at https://rungset.com')}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
							>
								Share
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-16" aria-label="back home">
				<div className="site-container text-center">
					<Link
						href="/"
						className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Back to Home
					</Link>
				</div>
			</section>
		</main>
	);
}
