'use client';

import { useState, type KeyboardEvent } from 'react';
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
		title: 'Using Rungset',
		description:
			'Rungset is an open-source goal and productivity tracker built around goals, milestones, tasks, notes, and check-ins.',
		content: [
			{
				title: 'What is Rungset?',
				description:
					'Rungset helps you plan goals, track milestones, manage tasks, keep Markdown notes, and record progress check-ins. The hosted beta runs at app.rungset.com. You can also self-host from the source repository.',
				type: 'text',
			},
			{
				title: 'Available features',
				description: 'Features present in the current application:',
				type: 'list',
				items: [
					'Goals with category, status, progress, and optional due date',
					'Milestones linked to goals',
					'Todos with priority, optional due date, category, recurrence, reminder settings, and completion history',
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
					'External reminder delivery or a scheduled notification service',
				],
			},
		],
	},
	{
		id: 'getting-started',
		title: 'Getting Started',
		description: 'How to use the current Rungset web application.',
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
					'Use daily, weekly, or monthly recurrence when a task repeats',
					'Set a reminder for a task with a due date; external reminder delivery is not part of the beta',
					'Project-based collaboration is not available',
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
		title: 'Developer notes',
		description:
			'Notes for contributors about the routes and stack behind the hosted application. These are not a stable third-party API reference.',
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
				description: 'The app uses authenticated collection routes for its own UI. Item routes also exist under /api/<resource>/<id>; methods and payloads may change with the beta:',
				type: 'list',
				items: [
					'GET/POST/PUT/DELETE /api/goals: list, create, update (body includes id), delete (?id=)',
					'GET/POST/PUT/DELETE /api/milestones: same pattern; milestones require goalId on create',
					'GET/POST/PUT/DELETE /api/todos: same pattern; priority required on create',
					'GET/POST/PUT/DELETE /api/notes: same pattern; title and content required on create',
					'GET/POST/PUT/DELETE /api/checkins: same pattern; mood/energy/date fields required on create',
				],
			},
			{
				title: 'Application stack',
				description: 'Current implementation details from the application repository:',
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
		description: 'Run Rungset yourself from the application repository.',
		content: [
			{
				title: 'Development setup',
				description: 'From the Rungset application repository:',
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
					`License: ${LICENSE_NAME}, ${LICENSE_URL}`,
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

	const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
		const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
		if (event.key !== 'Home' && event.key !== 'End' && direction === 0) return;

		event.preventDefault();
		const nextIndex = event.key === 'Home'
			? 0
			: event.key === 'End'
				? tabs.length - 1
				: (index + direction + tabs.length) % tabs.length;
		const nextTab = tabs[nextIndex];
		setActiveTab(nextTab.id);
		document.getElementById(`docs-tab-${nextTab.id}`)?.focus();
	};

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: 'Rungset Documentation',
		description:
			'Documentation for Rungset covering current features, usage, developer notes, and self-hosting.',
		author: {
			'@type': 'Person',
			name: 'Ismail Courr',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Rungset',
			logo: {
				'@type': 'ImageObject',
				url: 'https://rungset.com/brand/rungset-app-icon.png',
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://rungset.com/docs',
		},
	};

	return (
		<main className="flex-1">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

			<section className="border-b border-slate-200 bg-[#edf5ff] py-16 lg:py-20" aria-labelledby="docs-heading">
				<div className="site-container">
					<div className="max-w-3xl">
						<p className="eyebrow">Product documentation</p>
						<h1 id="docs-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#102866] md:text-5xl">Documentation</h1>
						<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Guides for the current Rungset application. The examples describe what the product supports today.</p>
					</div>
				</div>
			</section>

			<div className="sticky top-16 z-10 border-b border-slate-200 bg-white/95" role="presentation">
				<div className="site-container">
					<nav className="flex gap-2 overflow-x-auto py-3" aria-label="Documentation sections" role="tablist">
						{tabs.map((tab, index) => (
							<button
								key={tab.id}
								id={`docs-tab-${tab.id}`}
								type="button"
								role="tab"
								aria-selected={activeTab === tab.id}
								aria-controls="docs-panel"
								tabIndex={activeTab === tab.id ? 0 : -1}
								onClick={() => setActiveTab(tab.id)}
								onKeyDown={(event) => handleTabKeyDown(event, index)}
								className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6] ${
									activeTab === tab.id
										? 'border-[#102866] bg-[#102866] text-white'
										: 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1556d8]'
								}`}
							>
								{tab.title}
							</button>
						))}
					</nav>
				</div>
			</div>

			{activeTabContent && (
				<div className="py-16 lg:py-20">
					<div className="site-container">
						<div id="docs-panel" key={activeTabContent.id} className="mx-auto max-w-4xl" role="tabpanel" tabIndex={0} aria-labelledby={`docs-tab-${activeTabContent.id}`}>
							<p className="page-kicker">Section</p>
							<h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#102866]">{activeTabContent.title}</h2>
							<p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{activeTabContent.description}</p>

							<div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
								{activeTabContent.content.map((section) => (
									<section key={section.title} className="py-8 first:pt-0 last:pb-0">
										<h3 className="text-xl font-extrabold text-[#102866]">{section.title}</h3>
										{section.description && <p className="mt-3 leading-7 text-slate-600">{section.description}</p>}
										{section.type === 'list' && section.items && (
											<ul className="mt-4 space-y-3">
												{section.items.map((item) => (
													<li key={item} className="flex items-start gap-3 leading-7 text-slate-600">
														<svg className="mt-1.5 h-4 w-4 shrink-0 text-[#1556d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
														</svg>
														<span>{item}</span>
													</li>
												))}
											</ul>
										)}
										{section.type === 'code' && section.code && (
											<pre className="site-code mt-4"><code>{section.code}</code></pre>
										)}
									</section>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			<section className="border-t border-slate-200 py-16 lg:py-20" aria-labelledby="docs-help-heading">
				<div className="site-container">
					<div className="page-callout mx-auto max-w-4xl px-7 py-9 md:px-10 md:py-11">
						<p className="page-kicker">Need a hand?</p>
						<h2 id="docs-help-heading" className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#102866]">Questions or contributions?</h2>
						<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Ask a question, report a bug, or contribute an improvement through the project channels.</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center rounded-full bg-[#102866] px-6 py-3 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">Email</a>
							<a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">Open an issue</a>
							<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">View source</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
