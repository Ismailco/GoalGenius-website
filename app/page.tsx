import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import {
	APP_URL,
	DEFAULT_OG_IMAGE,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	LICENSE_URL,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_TAGLINE,
	SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
	title: { absolute: `${SITE_NAME} - ${SITE_TAGLINE}` },
	description: SITE_DESCRIPTION,
	openGraph: {
		title: `${SITE_NAME} - ${SITE_TAGLINE}`,
		description: SITE_DESCRIPTION,
		type: 'website',
		url: SITE_URL,
		siteName: SITE_NAME,
		images: [DEFAULT_OG_IMAGE],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_NAME} - ${SITE_TAGLINE}`,
		description: SITE_DESCRIPTION,
		images: [DEFAULT_OG_IMAGE.url],
	},
	alternates: {
		canonical: SITE_URL,
	},
	keywords: [
		'open-source goal tracker',
		'goal tracking',
		'milestone tracking',
		'todo management',
		'progress check-ins',
		'self-hosting',
		'productivity',
	],
};

const availableFeatures = [
	{
		title: 'Goals & Milestones',
		description:
			'Create goals with categories and status, then break them into dated milestones you can track over time.',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
	},
	{
		title: 'Todos & Tasks',
		description:
			'Capture day-to-day work with priorities, optional due dates, and completion tracking.',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
	},
	{
		title: 'Notes',
		description:
			'Write notes with Markdown support, pin important ones, and keep context next to your goals.',
		icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
	},
	{
		title: 'Progress Check-ins',
		description:
			'Record mood, energy, accomplishments, challenges, and reflections to stay accountable.',
		icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
	},
	{
		title: 'Dashboard Overview',
		description:
			'See your goals, milestones, and category progress in one workspace overview.',
		icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
	},
	{
		title: 'Data Export',
		description:
			'Export your workspace as JSON from Settings, or clear tracked data when you choose.',
		icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
	},
];

const reasons = [
	{
		title: 'Open source',
		description: `The application source is available under ${LICENSE_NAME}. Inspect it, contribute, or self-host.`,
	},
	{
		title: 'Your data, your control',
		description:
			'Goals, todos, notes, and check-ins stay in your account. Hosted users can export JSON; self-hosters keep the full stack.',
	},
	{
		title: 'Practical productivity tools',
		description:
			'No hype features required. Track goals, milestones, tasks, notes, and check-ins in one place.',
	},
];

const roadmapItems = [
	{
		title: 'Analytics',
		description: 'Richer progress reporting and trends beyond the current dashboard overview.',
	},
	{
		title: 'Calendar integrations',
		description: 'Sync milestones and deadlines with external calendars.',
	},
	{
		title: 'Native mobile apps',
		description: 'Dedicated iOS and Android apps. The web app already works on mobile browsers.',
	},
	{
		title: 'AI-assisted features',
		description: 'Optional assistance for planning and insights. Not available in the current app.',
	},
];

const techStack: Array<{
	name: string;
	url: string;
	logo?: string;
	width?: number;
	height?: number;
}> = [
	{ name: 'Next.js', logo: '/next.svg', url: 'https://nextjs.org/', width: 96, height: 20 },
	{ name: 'React', url: 'https://react.dev/' },
	{ name: 'Drizzle ORM', logo: '/drizzle-orm.svg', url: 'https://orm.drizzle.team/', width: 120, height: 24 },
	{ name: 'Better Auth', logo: '/better-auth.png', url: 'https://www.better-auth.com/', width: 40, height: 40 },
	{ name: 'Tailwind CSS', logo: '/tailwind-css.svg', url: 'https://tailwindcss.com/', width: 40, height: 40 },
	{ name: 'Cloudflare', logo: '/cloudflare.svg', url: 'https://www.cloudflare.com/', width: 120, height: 24 },
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'WebApplication',
	name: SITE_NAME,
	description: SITE_DESCRIPTION,
	applicationCategory: 'ProductivityApplication',
	operatingSystem: 'Web',
	browserRequirements: 'Requires a modern web browser',
	url: APP_URL,
	offers: {
		'@type': 'Offer',
		price: '0',
		priceCurrency: 'USD',
		availability: 'https://schema.org/InStock',
		description: `Hosted beta is currently free. Open source under ${LICENSE_NAME}.`,
	},
	featureList: [
		'Goal tracking',
		'Milestone tracking',
		'Todo and task management',
		'Markdown notes',
		'Progress check-ins',
		'Workspace JSON export',
		'Self-hosting under AGPLv3',
	],
	softwareVersion: '0.1.0',
	license: LICENSE_URL,
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<main className="flex-1">
				<div className="bg-blue-600 px-4 py-3 text-center text-white">
					<p className="text-sm font-medium sm:text-base">
						<span className="font-bold">Hosted beta is free.</span> Try GoalGenius at{' '}
						<a
							href={APP_URL}
							className="font-bold underline underline-offset-2 hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							app.goalgenius.online
						</a>
					</p>
				</div>

				<section className="relative" aria-labelledby="hero-heading">
					<div className="container mx-auto px-4 pb-20 pt-16 text-center md:pt-24">
						<AnimatedSection
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mx-auto max-w-3xl"
						>
							<p className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300">
								Open-Source Goal Tracking
							</p>
							<h1
								id="hero-heading"
								className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
							>
								Your Goals, Your Data, Your Control
							</h1>
							<p className="mb-4 text-lg text-gray-300 sm:text-xl">
								Plan your goals, track milestones, manage todos, keep notes, and record progress
								check-ins in one open-source workspace.
							</p>
							<p className="mb-10 text-sm text-gray-400 sm:text-base">
								Hosted beta is currently free. Self-host anytime under {LICENSE_NAME}.
							</p>

							<div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
								<a
									href={APP_URL}
									className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-lg font-medium text-white transition hover:from-indigo-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									Try GoalGenius
									<svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</a>
								<a
									href={GITHUB_REPO_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center rounded-full bg-white/10 px-8 py-3 text-lg font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									View Source
									<svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</a>
							</div>

						</AnimatedSection>
					</div>
				</section>

				<section className="relative py-16" aria-labelledby="preview-heading">
					<div className="container mx-auto px-4">
						<AnimatedSection
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="mx-auto mb-10 max-w-3xl text-center"
						>
							<h2 id="preview-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								See the workspace
							</h2>
							<p className="text-lg text-gray-300">
								A clean interface for goals, milestones, todos, notes, and check-ins.
							</p>
						</AnimatedSection>

						<AnimatedSection
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-lg md:p-4"
						>
							<Image
								src="/goalgenius.webp"
								alt="GoalGenius application dashboard showing goals and progress"
								width={1024}
								height={768}
								className="h-auto w-full rounded-2xl"
								sizes="(max-width: 1024px) 100vw, 1024px"
							/>
						</AnimatedSection>
					</div>
				</section>

				<section id="features" className="relative scroll-mt-24 bg-slate-900/50 py-20" aria-labelledby="features-heading">
					<div className="container mx-auto px-4">
						<div className="mb-12 text-center">
							<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">Available now</p>
							<h2 id="features-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								What GoalGenius does today
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-gray-300">
								Features that ship in the current web application—not a roadmap wishlist.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{availableFeatures.map((feature, index) => (
								<AnimatedSection
									key={feature.title}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.45, delay: index * 0.05 }}
									className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
								>
									<div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3">
										<svg className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
										</svg>
									</div>
									<h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
									<p className="text-gray-300">{feature.description}</p>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				<section className="relative py-20" aria-labelledby="why-heading">
					<div className="container mx-auto px-4">
						<div className="mb-12 text-center">
							<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">Why GoalGenius</p>
							<h2 id="why-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								Open source, private by design
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-gray-300">
								Built for people who want goal tracking without giving up visibility into how the product works.
							</p>
						</div>

						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
							{reasons.map((reason) => (
								<div key={reason.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
									<h3 className="mb-3 text-xl font-bold text-white">{reason.title}</h3>
									<p className="text-gray-300">{reason.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="roadmap" className="relative scroll-mt-24 bg-slate-900/50 py-20" aria-labelledby="roadmap-heading">
					<div className="container mx-auto px-4">
						<div className="mb-12 text-center">
							<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">Planned</p>
							<h2 id="roadmap-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								Short roadmap
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-gray-300">
								Areas staged in the app or discussed as future work. None of these are available yet.
							</p>
						</div>

						<div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
							{roadmapItems.map((item) => (
								<div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
									<div className="mb-2 flex items-center gap-3">
										<h3 className="text-lg font-semibold text-white">{item.title}</h3>
										<span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-300">
											Planned
										</span>
									</div>
									<p className="text-sm text-gray-300">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="open-source" className="relative scroll-mt-24 py-20" aria-labelledby="open-source-heading">
					<div className="container mx-auto px-4">
						<div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 md:p-12">
							<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">
								Free during beta & open source
							</p>
							<h2 id="open-source-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								Use the hosted beta, or run your own
							</h2>
							<p className="mb-6 max-w-2xl text-lg text-gray-300">
								Open source under {LICENSE_NAME}. The hosted GoalGenius service at{' '}
								<a href={APP_URL} className="text-blue-400 underline-offset-2 hover:underline">
									app.goalgenius.online
								</a>{' '}
								is currently free during beta. The{' '}
								<a href={GITHUB_REPO_URL} className="text-blue-400 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
								source repository
							</a>{' '}
							is available for self-hosting. Donations are optional project support, not payment for access.
							</p>
							<ul className="space-y-2 text-gray-300">
								<li className="flex items-start gap-2">
									<span className="mt-1 text-green-400" aria-hidden="true">
										✓
									</span>
									Hosted beta access to current features
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 text-green-400" aria-hidden="true">
										✓
									</span>
									Full source on GitHub under{' '}
									<a href={LICENSE_URL} className="text-blue-400 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
										{LICENSE_NAME}
									</a>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 text-green-400" aria-hidden="true">
										✓
									</span>
									Self-host on your own infrastructure
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="relative bg-slate-900/50 py-16" aria-labelledby="built-with-heading">
					<div className="container mx-auto px-4 text-center">
						<h2 id="built-with-heading" className="mb-8 text-sm font-medium uppercase tracking-wide text-gray-400">
							Built with
						</h2>
						<ul className="flex flex-wrap items-center justify-center gap-8">
							{techStack.map((tech) => (
								<li key={tech.name}>
									<a
										href={tech.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-gray-300 opacity-80 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
									>
										{tech.logo && tech.width && tech.height ? (
											<>
												<Image src={tech.logo} alt="" width={tech.width} height={tech.height} className="h-6 w-auto" />
												<span className="sr-only">{tech.name}</span>
											</>
										) : (
											<span className="text-sm font-semibold">{tech.name}</span>
										)}
									</a>
								</li>
							))}
						</ul>
						<p className="mt-6 text-xs text-gray-500">
							Technology names and logos belong to their respective owners. Listing them does not imply
							endorsement or partnership.
						</p>
					</div>
				</section>

				<section className="relative py-20" aria-labelledby="final-cta-heading">
					<div className="container mx-auto px-4">
						<div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-lg md:p-12">
							<h2 id="final-cta-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
								Start tracking with GoalGenius
							</h2>
							<p className="mb-8 text-lg text-gray-300">
								Use the hosted beta, read the docs, or clone the repository and self-host.
							</p>
							<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
								<a
									href={APP_URL}
									className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-lg font-medium text-white transition hover:from-indigo-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									Try GoalGenius
								</a>
								<a
									href={GITHUB_REPO_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center rounded-full bg-white/10 px-8 py-3 text-lg font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									View Source
								</a>
							</div>
							<p className="mt-6 text-sm text-gray-400">
								Have ideas or found a bug?{' '}
								<Link href="/feedback" className="text-blue-400 hover:text-blue-300">
									Send feedback
								</Link>
								.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
