import type { Metadata } from 'next';
import Link from 'next/link';
import {
	APP_URL,
	CONTACT_EMAIL,
	DEFAULT_OG_IMAGE,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	SITE_NAME,
	SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: `How ${SITE_NAME} handles account data, workspace content, feedback submissions, and self-hosted installations.`,
	alternates: { canonical: `${SITE_URL}/privacy` },
	openGraph: {
		title: `Privacy Policy | ${SITE_NAME}`,
		description: `How ${SITE_NAME} handles account data, workspace content, and feedback.`,
		url: `${SITE_URL}/privacy`,
		images: [DEFAULT_OG_IMAGE],
	},
};

const lastUpdated = 'September 4, 2026';

export default function PrivacyPage() {
	return (
		<main className="flex-1">
			<article className="container mx-auto max-w-3xl px-4 py-16">
				<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">Legal</p>
				<h1 className="mb-4 text-4xl font-bold text-white">Privacy Policy</h1>
				<p className="mb-10 text-sm text-gray-400">Last updated: {lastUpdated}</p>

				<div className="prose-invert space-y-8 text-gray-300">
					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Overview</h2>
						<p>
							This policy describes how the public marketing site at{' '}
							<a href={SITE_URL} className="text-blue-400 hover:underline">
								goalgenius.online
							</a>{' '}
							and the hosted application at{' '}
							<a href={APP_URL} className="text-blue-400 hover:underline">
								app.goalgenius.online
							</a>{' '}
							handle information. {SITE_NAME} is an open-source project. This is not legal advice.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">What this covers</h2>
						<ul className="list-disc space-y-2 pl-5">
							<li>The marketing and documentation website on goalgenius.online</li>
							<li>The hosted GoalGenius web application on app.goalgenius.online</li>
							<li>The optional feedback form on this website</li>
						</ul>
						<p className="mt-4">
							If you self-host GoalGenius, you operate your own instance. Your privacy practices then
							depend on how you deploy and configure it. The project source is available on{' '}
							<a href={GITHUB_REPO_URL} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>{' '}
							under {LICENSE_NAME}.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Account and authentication data</h2>
						<p>
							The hosted app uses Better Auth with email/password and optional Google or GitHub OAuth.
							Depending on how you sign in, the app may store:
						</p>
						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>Name and email address</li>
							<li>Account identifiers from Google or GitHub when you use those providers</li>
							<li>Session information needed to keep you signed in</li>
						</ul>
						<p className="mt-4">
							Session cookies are used to maintain authenticated access to the hosted application.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Workspace data</h2>
						<p>When you use the hosted application, content you create is stored for your account, including:</p>
						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>Goals and milestones</li>
							<li>Todos / tasks</li>
							<li>Notes</li>
							<li>Progress check-ins (including mood, energy, accomplishments, challenges, and notes)</li>
						</ul>
						<p className="mt-4">
							From Settings, hosted users can export workspace data as JSON and can delete tracked
							workspace items. Account deletion options depend on the current application settings and
							authentication provider flows.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Marketing website</h2>
						<p>
							The marketing site is primarily static content. It does not require an account. It does
							not intentionally set advertising or analytics cookies as part of this website codebase.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Feedback form</h2>
						<p>
							If you submit feedback at{' '}
							<Link href="/feedback" className="text-blue-400 hover:underline">
								/feedback
							</Link>
							, the form collects your name, email address, feedback category, rating, message, and the
							page URL you submitted from. That submission is sent to a Cloudflare Worker endpoint used
							to receive project feedback.
						</p>
						<p className="mt-4">
							Please do not include passwords, secrets, or unnecessary personal information in feedback.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Infrastructure providers</h2>
						<p>The hosted application and related services are built around:</p>
						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>Cloudflare (Workers / D1 and related hosting infrastructure)</li>
							<li>Better Auth for authentication sessions</li>
							<li>Google and GitHub only when you choose those sign-in options</li>
							<li>A Cloudflare Worker endpoint for website feedback submissions</li>
						</ul>
						<p className="mt-4">
							Those providers process data as needed to operate their services under their own terms and
							policies.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Third-party links</h2>
						<p>
							This website may link to GitHub, donation platforms, and other external sites.
							Those sites have their own privacy practices.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Children</h2>
						<p>
							GoalGenius is not directed at children, and we do not knowingly collect personal information
							from children for the hosted service.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Changes</h2>
						<p>
							This policy may be updated as the project evolves. The “Last updated” date at the top of
							this page will change when material revisions are published.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-white">Contact</h2>
						<p>
							Questions about this policy can be sent to{' '}
							<a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:underline">
								{CONTACT_EMAIL}
							</a>
							, or by opening an issue on{' '}
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
