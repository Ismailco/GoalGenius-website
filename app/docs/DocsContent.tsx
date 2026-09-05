'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import {
	APP_URL,
	CONTACT_EMAIL,
	GITHUB_ISSUES_URL,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	LICENSE_URL,
} from '@/lib/site';

interface TabContent {
	id: string;
	title: string;
	description: string;
	content: {
		title: string;
		description?: string;
		items?: string[];
		type?: 'list' | 'code' | 'text';
		code?: string;
	}[];
}

const tabs: TabContent[] = [
	{
		id: 'overview',
		title: 'Overview',
		description:
			'GoalGenius is an open-source goal and productivity tracker built with Next.js and Cloudflare.',
		content: [
			{
				title: 'What is GoalGenius?',
				description:
					'GoalGenius helps you plan goals, track milestones, manage todos, keep Markdown notes, and record progress check-ins. The hosted beta runs at app.goalgenius.online. You can also self-host from the source repository.',
				type: 'text',
			},
			{
				title: 'Available features',
				description: 'Features present in the current application:',
				type: 'list',
				items: [
					'Goals with category, status, progress, and optional due date',
					'Milestones linked to goals',
					'Todos with priority, optional due date, category, and completion state',
					'Notes with Markdown content, optional category, and pin support',
					'Check-ins with mood, energy, accomplishments, challenges, goals list, and notes',
					'Dashboard overview with goal and category progress',
					'Settings: workspace JSON export and workspace data reset',
					'Authentication via email/password, Google, or GitHub (Better Auth)',
					'Self-hosting under AGPLv3',
				],
			},
			{
				title: 'Not available yet',
				description: 'These appear as placeholders or roadmap ideas and should not be treated as shipping features:',
				type: 'list',
				items: [
					'Analytics dashboard (page exists as “Coming Soon”)',
					'External calendar integrations (Google/Outlook/Apple sync)',
					'Native iOS / Android apps',
					'AI recommendations or AI insights',
					'Note attachments, note sharing, or collaboration',
					'Push notifications / reminder system',
				],
			},
			{
				title: 'Technology stack',
				description: 'Current application stack from the local application repository:',
				type: 'list',
				items: [
					'Frontend: Next.js 16.2.12 (App Router), React 19.2.4, Tailwind CSS 4.2.2',
					'Database: Cloudflare D1 with Drizzle ORM 0.45.2',
					'Authentication: Better Auth 1.6.25 (email/password + optional Google/GitHub OAuth)',
					'Deployment: Cloudflare Workers via OpenNext 1.20.2',
					'Type safety: TypeScript 5.9.3',
					'Content safety helpers: DOMPurify / XSS utilities in the app',
				],
			},
		],
	},
	{
		id: 'getting-started',
		title: 'Getting Started',
		description: 'How to use the current GoalGenius web application.',
		content: [
			{
				title: 'Create an account',
				description: 'On the hosted beta:',
				type: 'list',
				items: [
					`1. Visit ${APP_URL.replace('https://', '')}`,
					'2. Sign up with email/password, Google, or GitHub',
					'3. Open the dashboard and create your first goal',
				],
			},
			{
				title: 'Goals',
				description: 'Create and manage goals:',
				type: 'list',
				items: [
					'Open Goals or use the dashboard create flow',
					'Set a title, optional description, category (health, career, learning, relationships), timeframe, and status',
					'Track progress as a percentage and optionally set a due date',
					'Attach milestones to break larger goals into dated steps',
				],
			},
			{
				title: 'Milestones',
				description: 'Break goals into steps:',
				type: 'list',
				items: [
					'Create a milestone with a title, optional description, and date',
					'Associate it with an existing goal',
					'Review milestones from the Milestones view or related dashboard sections',
				],
			},
			{
				title: 'Todos',
				description: 'Manage tasks:',
				type: 'list',
				items: [
					'Create todos with a title, optional description, priority (low/medium/high), optional due date, and optional category',
					'Mark todos complete when finished',
					'Note: the current app does not provide reminder notifications or project-based collaboration',
				],
			},
			{
				title: 'Check-ins',
				description: 'Record progress reflections:',
				type: 'list',
				items: [
					'Create a check-in for a date',
					'Record mood and energy',
					'List accomplishments, challenges, and related goals',
					'Add optional notes',
					'Check-ins are manual; there is no built-in scheduled reminder system yet',
				],
			},
			{
				title: 'Notes',
				description: 'Capture written context:',
				type: 'list',
				items: [
					'Create notes with a title and Markdown content',
					'Optionally set a category and pin important notes',
					'Preview rendered Markdown in the notes workspace',
					'Attachments and collaborative sharing are not available',
				],
			},
			{
				title: 'Settings & data control',
				description: 'From Settings you can:',
				type: 'list',
				items: [
					'Review account identity details',
					'Export workspace data as JSON',
					'Clear local caches used by the app',
					'Delete all goals, milestones, notes, todos, and check-ins for your account',
				],
			},
		],
	},
	{
		id: 'api',
		title: 'API Notes',
		description:
			'The application exposes session-authenticated JSON routes for its own UI. These are not a documented public third-party API.',
		content: [
			{
				title: 'Important limitations',
				description:
					'Do not treat these routes as a stable external API. Authentication is session-based via Better Auth cookies after sign-in. There is no separate public API key model, JWT bearer product API, or role-based access control beyond the signed-in user owning their data.',
				type: 'text',
			},
			{
				title: 'Authentication',
				type: 'list',
				items: [
					'Better Auth handles /api/auth/*',
					'Email/password, Google OAuth, and GitHub OAuth are supported when configured',
					'Data routes require an authenticated session; unauthenticated requests return 401',
				],
			},
			{
				title: 'Current data routes',
				description: 'Each resource route supports GET, POST, PUT, and DELETE on a single path (not nested /:id paths):',
				type: 'list',
				items: [
					'GET/POST/PUT/DELETE /api/goals — list, create, update (body includes id), delete (?id=)',
					'GET/POST/PUT/DELETE /api/milestones — same pattern; milestones require goalId on create',
					'GET/POST/PUT/DELETE /api/todos — same pattern; priority required on create',
					'GET/POST/PUT/DELETE /api/notes — same pattern; title and content required on create',
					'GET/POST/PUT/DELETE /api/checkins — same pattern; mood/energy/date fields required on create',
				],
			},
			{
				title: 'What is not exposed',
				type: 'list',
				items: [
					'No /api/analytics/* endpoints',
					'No attachment upload endpoints',
					'No nested REST paths like /api/goals/:id/milestones',
					'No public report-export API beyond the in-app Settings JSON export',
				],
			},
		],
	},
	{
		id: 'self-hosting',
		title: 'Self-hosting',
		description: 'Run GoalGenius yourself from the application repository.',
		content: [
			{
				title: 'Development setup',
				description: 'From the GoalGenius application repository:',
				type: 'code',
				code: `# Clone the application repository
git clone https://github.com/Ismailco/GoalGenius.git
cd GoalGenius

# Install dependencies
pnpm install

# Configure environment files
cp .dev.vars.example .dev.vars
cp .env.local.example .env.local

# Generate and apply local D1 migrations
pnpm db:generate
pnpm db:migrate:local

# Start the Next.js development server
pnpm dev`,
			},
			{
				title: 'Configuration notes',
				type: 'list',
				items: [
					'BETTER_AUTH_URL / BETTER_AUTH_SECRET must be set for authentication',
					'Google and GitHub OAuth need client IDs/secrets if those providers are enabled',
					'Cloudflare D1 credentials are required for database access in Workers deployments',
					`License: ${LICENSE_NAME} — ${LICENSE_URL}`,
				],
			},
			{
				title: 'Contributing',
				type: 'list',
				items: [
					'Fork the repository and create a feature branch',
					'Keep changes focused and follow existing TypeScript / React patterns',
					'Open a pull request with a clear description',
					`Report bugs via ${GITHUB_ISSUES_URL}`,
				],
			},
		],
	},
];

export default function DocsContent() {
	const [activeTab, setActiveTab] = useState('overview');
	const activeTabContent = tabs.find((tab) => tab.id === activeTab);

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: 'GoalGenius Documentation',
		description:
			'Documentation for GoalGenius covering current features, usage, session API notes, and self-hosting.',
		author: {
			'@type': 'Person',
			name: 'Ismail Courr',
		},
		publisher: {
			'@type': 'Organization',
			name: 'GoalGenius',
			logo: {
				'@type': 'ImageObject',
				url: 'https://goalgenius.online/logo.png',
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://goalgenius.online/docs',
		},
	};

	return (
		<main className="flex-1">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

			<section className="relative border-b border-white/10 py-16" aria-labelledby="docs-heading">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl text-center">
						<h1
							id="docs-heading"
							className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
						>
							Documentation
						</h1>
						<p className="text-xl text-gray-300">
							Guides aligned with the current GoalGenius application—not future features.
						</p>
					</div>
				</div>
			</section>

			<div className="sticky top-16 z-10 border-b border-white/10 bg-slate-900/90 backdrop-blur-lg">
				<div className="container mx-auto px-4">
					<nav className="flex flex-wrap justify-center gap-2 py-4" aria-label="Documentation sections">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								type="button"
								aria-pressed={activeTab === tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
									activeTab === tab.id
										? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
										: 'bg-white/5 text-white hover:bg-white/10'
								}`}
							>
								{tab.title}
							</button>
						))}
					</nav>
				</div>
			</div>

			{activeTabContent && (
				<div className="relative py-16">
					<div className="container mx-auto px-4">
						<AnimatedSection
							key={activeTabContent.id}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45 }}
							className="mx-auto max-w-4xl"
						>
							<h2 className="mb-4 text-3xl font-bold text-white">{activeTabContent.title}</h2>
							<p className="mb-12 text-xl text-gray-300">{activeTabContent.description}</p>

							<div className="space-y-8">
								{activeTabContent.content.map((section) => (
									<section
										key={section.title}
										className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
									>
										<h3 className="mb-4 text-2xl font-bold text-white">{section.title}</h3>
										{section.description && <p className="mb-6 text-gray-300">{section.description}</p>}
										{section.type === 'list' && section.items && (
											<ul className="space-y-3">
												{section.items.map((item) => (
													<li key={item} className="flex items-start gap-3 text-gray-300">
														<svg
															className="mt-1 h-5 w-5 shrink-0 text-blue-400"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															aria-hidden="true"
														>
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
														</svg>
														<span>{item}</span>
													</li>
												))}
											</ul>
										)}
										{section.type === 'code' && section.code && (
											<div className="overflow-x-auto rounded-lg bg-slate-950/80 p-4">
												<pre className="text-sm text-gray-300">
													<code>{section.code}</code>
												</pre>
											</div>
										)}
									</section>
								))}
							</div>
						</AnimatedSection>
					</div>
				</div>
			)}

			<section className="relative border-t border-white/10 py-16" aria-labelledby="docs-help-heading">
				<div className="container mx-auto px-4">
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-10 text-center md:p-12">
						<h2 id="docs-help-heading" className="mb-4 text-3xl font-bold text-white">
							Need help?
						</h2>
						<p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
							Ask a question, report a bug, or contribute improvements on GitHub.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								Email
							</a>
							<a
								href={GITHUB_ISSUES_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								Open an Issue
							</a>
							<a
								href={GITHUB_REPO_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								View Source
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
