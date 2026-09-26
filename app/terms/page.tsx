import type { Metadata } from 'next';
import Link from 'next/link';
import {
	APP_URL,
	CONTACT_EMAIL,
	DEFAULT_OG_IMAGE,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	LICENSE_URL,
	SITE_NAME,
	SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
	title: 'Terms of Use',
	description: `Terms for using the ${SITE_NAME} marketing site and hosted beta service.`,
	alternates: { canonical: `${SITE_URL}/terms` },
	openGraph: {
		title: `Terms of Use | ${SITE_NAME}`,
		description: `Terms for using the ${SITE_NAME} marketing site and hosted beta service.`,
		url: `${SITE_URL}/terms`,
		images: [DEFAULT_OG_IMAGE],
	},
};

const lastUpdated = 'September 4, 2026';

export default function TermsPage() {
	return (
		<main className="flex-1">
			<article className="container mx-auto max-w-3xl px-4 py-16">
				<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">Legal</p>
				<h1 className="mb-4 text-4xl font-bold text-white">Terms of Use</h1>
				<p className="mb-10 text-sm text-gray-400">Last updated: {lastUpdated}</p>

				<div className="space-y-8 text-gray-300">
					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Agreement</h2>
						<p>
							These terms apply to the marketing website at{' '}
							<a href={SITE_URL} className="text-blue-400 hover:underline">
								rungset.com
							</a>{' '}
							and the hosted Rungset application at{' '}
							<a href={APP_URL} className="text-blue-400 hover:underline">
								app.rungset.com
							</a>
							. By using either, you agree to these terms. This is not legal advice, and no separate
							company entity is claimed beyond the open-source project maintained by its contributors.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Open-source code vs hosted service</h2>
						<p>
							The Rungset application source code is available under the{' '}
							<a href={LICENSE_URL} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
								GNU Affero General Public License v3.0 ({LICENSE_NAME})
							</a>
							. Using the source under {LICENSE_NAME} is governed by that license.
						</p>
						<p className="mt-4">
							The hosted service at app.rungset.com is a convenience beta deployment. Access to the
							hosted service does not transfer ownership of the software, and it does not replace the{' '}
							{LICENSE_NAME} terms for the source code.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Beta status and availability</h2>
						<p>
							The hosted service is provided as a beta. Features may change, break, or be unavailable
							without notice. There is no uptime guarantee and no promise that hosted pricing will remain
							unchanged after beta.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Service provided as-is</h2>
						<p>
							The website and hosted application are provided “as is” and “as available,” without
							warranties of any kind, express or implied, to the fullest extent permitted by law. This
							includes warranties of merchantability, fitness for a particular purpose, and
							non-infringement.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Your responsibilities</h2>
						<ul className="list-disc space-y-2 pl-5">
							<li>Keep your credentials secure and use accurate account information</li>
							<li>Back up important data if you rely on it; export tools may help, but backups are your responsibility</li>
							<li>Comply with applicable laws while using the service</li>
							<li>Do not attempt to disrupt, abuse, or unauthorizedly access the service or other users’ data</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Acceptable use</h2>
						<p>You may not use Rungset to:</p>
						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>Violate the law or others’ rights</li>
							<li>Distribute malware or attempt security attacks</li>
							<li>Probe or overload infrastructure beyond normal personal use</li>
							<li>Misrepresent affiliation with the project</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">User content</h2>
						<p>
							You retain rights to content you create in the app. You are responsible for that content.
							By using the hosted service, you grant the operators a limited permission to host, store,
							back up, and display that content as needed to provide the service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Intellectual property</h2>
						<p>
							Project branding, website copy, and application source are subject to applicable copyright
							and the {LICENSE_NAME} license for the software. Third-party marks (for example Next.js or
							Cloudflare) belong to their owners.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Third-party services</h2>
						<p>
							Authentication providers, hosting providers, donation platforms, and linked websites are
							governed by their own terms. Rungset is not responsible for third-party services.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Termination</h2>
						<p>
							Access to the hosted beta may be suspended or ended for abuse, security reasons, or project
							operational needs. You may stop using the service at any time. Self-hosting remains available
							under {LICENSE_NAME} according to that license.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Limitation of liability</h2>
						<p>
							To the fullest extent permitted by law, the project maintainers and contributors are not
							liable for indirect, incidental, special, consequential, or punitive damages, or for lost
							profits, data, or goodwill arising from use of the website or hosted service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Privacy</h2>
						<p>
							See the{' '}
							<Link href="/privacy" className="text-blue-400 hover:underline">
								Privacy Policy
							</Link>{' '}
							for information about data handling.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Contact</h2>
						<p>
							Questions about these terms:{' '}
							<a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:underline">
								{CONTACT_EMAIL}
							</a>{' '}
							or{' '}
							<a href={GITHUB_REPO_URL} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
							.
						</p>
					</section>
				</div>
			</article>
		</main>
	);
}
