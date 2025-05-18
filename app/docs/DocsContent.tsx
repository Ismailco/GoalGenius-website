'use client';

import AnimatedSection from '../../components/AnimatedSection';
import Script from 'next/script';
import { useState } from 'react';

interface TabContent {
	id: string;
	title: string;
	description: string;
	content: {
		title: string;
		description?: string;
		items?: string[];
		type?: 'list' | 'code' | 'text';
		codeLanguage?: string;
		code?: string;
	}[];
}

const tabs: TabContent[] = [
	{
		id: 'overview',
		title: 'Overview',
		description: 'GoalGenius is a modern, open-source goal tracking and productivity platform built with Next.js and Cloudflare.',
		content: [
			{
				title: 'What is GoalGenius?',
				description: 'GoalGenius is your all-in-one solution for goal tracking and productivity enhancement. Built with modern technologies and designed for optimal user experience.',
				type: 'text',
			},
			{
				title: 'Key Features',
				description: 'Powerful features to help you achieve your goals:',
				type: 'list',
				items: ['🎯 Goal Tracking - Set, track, and achieve your personal and professional goals', '✅ Todo Management - Organize tasks with priorities and deadlines', '📝 Note Taking - Capture ideas and important information', '📊 Analytics Dashboard - Visualize your progress and productivity trends', '📅 Calendar Integration - Schedule and manage your time effectively', '🏆 Milestones - Break down goals into achievable milestones', '📈 Check-ins - Regular progress tracking and reflection', '🔒 Secure Authentication - Protected user data and privacy', '🌐 Cloud Infrastructure - Powered by Cloudflare for global scalability'],
			},
			{
				title: 'Technology Stack',
				description: 'Built with cutting-edge technologies:',
				type: 'list',
				items: ['Frontend: Next.js 15.2.5, React 19, TailwindCSS', 'Database: Cloudflare D1 with Drizzle ORM', 'Authentication: Custom auth with better-auth', 'Deployment: Cloudflare Workers with OpenNext.js', 'Type Safety: TypeScript', 'UI Components: Custom components with Framer Motion', 'Security: DOMPurify, XSS protection'],
			},
		],
	},
	{
		id: 'getting-started',
		title: 'Getting Started',
		description: 'Learn how to use GoalGenius effectively with our comprehensive guides.',
		content: [
			{
				title: 'Setting Up Your Account',
				description: 'Get started with GoalGenius in minutes:',
				type: 'list',
				items: ['1. Visit app.goalgenius.online and click "Sign Up"', '2. Choose your authentication method (Google, GitHub, or Email)', '3. Complete your profile setup', '4. Set your first goal'],
			},
			{
				title: 'Goals Management',
				description: 'Create and manage your goals effectively:',
				type: 'list',
				items: ['1. Navigate to the Goals dashboard', '2. Click "Create Goal" to start a new goal', '3. Set goal title, description, and deadline', '4. Add milestones and success criteria', '5. Set up regular check-ins', '6. Track progress and update status'],
			},
			{
				title: 'Todo Management',
				description: 'Organize your tasks effectively:',
				type: 'list',
				items: ['1. Access the Todo section', '2. Create todos with priorities and deadlines', '3. Group todos by projects or goals', '4. Set reminders and notifications', '5. Track completion status', '6. View todo analytics'],
			},
			{
				title: 'Milestones',
				description: 'Break down goals into achievable milestones:',
				type: 'list',
				items: ['1. Open a goal and click "Add Milestone"', '2. Set milestone title and target date', '3. Define success criteria', '4. Add subtasks if needed', '5. Track milestone progress', '6. Celebrate milestone completion'],
			},
			{
				title: 'Check-ins',
				description: 'Regular progress tracking and reflection:',
				type: 'list',
				items: ['1. Schedule regular check-ins', '2. Record progress updates', '3. Add reflection notes', '4. Update goal status', '5. Identify blockers or challenges', '6. Plan next actions'],
			},
			{
				title: 'Notes',
				description: 'Capture and organize your thoughts:',
				type: 'list',
				items: ['1. Create new notes with rich text formatting', '2. Organize notes with tags and categories', '3. Link notes to goals or milestones', '4. Add attachments and references', '5. Use search and filters', '6. Share notes with collaborators'],
			},
			{
				title: 'Analytics Dashboard',
				description: 'Monitor your progress:',
				type: 'list',
				items: ['1. View goal completion rates', '2. Track milestone progress', '3. Analyze check-in patterns', '4. Monitor todo completion', '5. Generate progress reports', '6. Export analytics data'],
			},
		],
	},
	{
		id: 'api',
		title: 'API Documentation',
		description: 'Comprehensive guide to the GoalGenius API endpoints and integration.',
		content: [
			{
				title: 'Authentication',
				description: 'Secure your API requests:',
				type: 'list',
				items: ['OAuth 2.0 support for Google and GitHub', 'JWT-based authentication', 'Secure session management', 'Role-based access control'],
			},
			{
				title: 'Goals API',
				description: 'Manage goals programmatically:',
				type: 'list',
				items: ['GET /api/goals - List all goals', 'GET /api/goals/:id - Get goal details', 'POST /api/goals - Create new goal', 'PUT /api/goals/:id - Update goal', 'DELETE /api/goals/:id - Delete goal', 'GET /api/goals/:id/progress - Get goal progress'],
			},
			{
				title: 'Todos API',
				description: 'Todo management endpoints:',
				type: 'list',
				items: ['GET /api/todos - List all todos', 'GET /api/todos/:id - Get todo details', 'POST /api/todos - Create new todo', 'PUT /api/todos/:id - Update todo', 'DELETE /api/todos/:id - Delete todo', 'PUT /api/todos/:id/complete - Mark todo as complete'],
			},
			{
				title: 'Milestones API',
				description: 'Manage goal milestones:',
				type: 'list',
				items: ['GET /api/goals/:id/milestones - List goal milestones', 'GET /api/milestones/:id - Get milestone details', 'POST /api/goals/:id/milestones - Create milestone', 'PUT /api/milestones/:id - Update milestone', 'DELETE /api/milestones/:id - Delete milestone', 'PUT /api/milestones/:id/complete - Complete milestone'],
			},
			{
				title: 'Check-ins API',
				description: 'Track progress with check-ins:',
				type: 'list',
				items: ['GET /api/goals/:id/checkins - List goal check-ins', 'GET /api/checkins/:id - Get check-in details', 'POST /api/goals/:id/checkins - Create check-in', 'PUT /api/checkins/:id - Update check-in', 'DELETE /api/checkins/:id - Delete check-in'],
			},
			{
				title: 'Notes API',
				description: 'Manage notes and documentation:',
				type: 'list',
				items: ['GET /api/notes - List all notes', 'GET /api/notes/:id - Get note details', 'POST /api/notes - Create new note', 'PUT /api/notes/:id - Update note', 'DELETE /api/notes/:id - Delete note', 'POST /api/notes/:id/attachments - Add attachment'],
			},
			{
				title: 'Analytics API',
				description: 'Access analytics data:',
				type: 'list',
				items: ['GET /api/analytics/goals - Goal completion statistics', 'GET /api/analytics/milestones - Milestone progress', 'GET /api/analytics/todos - Todo completion rates', 'GET /api/analytics/checkins - Check-in patterns', 'GET /api/analytics/reports - Generate custom reports', 'GET /api/analytics/export - Export analytics data'],
			},
		],
	},
	{
		id: 'contributing',
		title: 'Contributing',
		description: 'Join our community and help make GoalGenius better.',
		content: [
			{
				title: 'Development Setup',
				description: 'Set up your development environment:',
				type: 'code',
				codeLanguage: 'bash',
				code: `# Clone the repository
git clone https://github.com/ismailco/goalgenius.git
cd goalgenius

# Install dependencies
pnpm install

# Set up environment variables
cp .dev.vars.example .dev.vars
cp .env.local.example .env.local

# Set up the database
pnpm db:generate
pnpm db:migrate:local

# Start the development server
pnpm dev`,
			},
			{
				title: 'Code of Conduct',
				description: 'Our community guidelines:',
				type: 'list',
				items: ['Use welcoming and inclusive language', 'Be respectful of differing viewpoints and experiences', 'Gracefully accept constructive criticism', 'Focus on what is best for the community', 'Show empathy towards other community members'],
			},
			{
				title: 'Pull Request Process',
				description: 'Steps to contribute code:',
				type: 'list',
				items: ['1. Fork the repository', '2. Create a feature branch', '3. Make your changes following our coding guidelines', '4. Ensure tests pass and add new ones if needed', '5. Update documentation as necessary', '6. Submit a pull request with a clear description'],
			},
			{
				title: 'Coding Guidelines',
				description: 'Follow our coding standards:',
				type: 'list',
				items: ['Use TypeScript for type safety', 'Follow the existing code style', 'Write meaningful variable and function names', 'Comment your code when necessary', 'Keep functions small and focused', 'Follow React hooks rules', 'Implement proper error handling'],
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
		description: 'Comprehensive documentation for GoalGenius - Learn how to use and contribute to our goal tracking platform.',
		author: {
			'@type': 'Organization',
			name: 'GoalGenius',
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
		articleSection: tabs.map((tab) => tab.title).join(', '),
	};

	return (
		<main className="min-h-screen bg-slate-900">
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<div className="absolute left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl"></div>

			{/* Header */}
			<section className="relative py-16 border-b border-white/10" aria-label="documentation header">
				<div className="container mx-auto px-4">
					<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Documentation</h1>
						<p className="text-xl text-gray-300 mb-8">Everything you need to know about GoalGenius - from getting started to advanced features.</p>
					</AnimatedSection>
				</div>
			</section>

			{/* Tabs Navigation */}
			<div className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
				<div className="container mx-auto px-4">
					<nav className="flex flex-wrap gap-2 justify-center py-4" role="tablist">
						{tabs.map((tab) => (
							<button key={tab.id} role="tab" aria-selected={activeTab === tab.id} aria-controls={`${tab.id}-panel`} onClick={() => setActiveTab(tab.id)} className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === tab.id ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500' : 'text-white bg-white/5 hover:bg-white/10'}`}>
								{tab.title}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* Tab Content */}
			{activeTabContent && (
				<div className="relative py-16">
					<div className="container mx-auto px-4">
						<AnimatedSection key={activeTabContent.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold text-white mb-4">{activeTabContent.title}</h2>
							<p className="text-xl text-gray-300 mb-12">{activeTabContent.description}</p>

							<div className="space-y-12">
								{activeTabContent.content.map((section, index) => (
									<AnimatedSection key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
										<h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
										{section.description && <p className="text-gray-300 mb-6">{section.description}</p>}
										{section.type === 'list' && section.items && (
											<ul className="space-y-3">
												{section.items.map((item, i) => (
													<li key={i} className="flex items-start gap-3 text-gray-300">
														<svg className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
														</svg>
														<span>{item}</span>
													</li>
												))}
											</ul>
										)}
										{section.type === 'code' && (
											<div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
												<pre className="text-gray-300">
													<code>{section.code}</code>
												</pre>
											</div>
										)}
									</AnimatedSection>
								))}
							</div>
						</AnimatedSection>
					</div>
				</div>
			)}

			{/* Help CTA */}
			<section className="relative py-16 border-t border-white/10" aria-label="help">
				<div className="container mx-auto px-4">
					<AnimatedSection
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center"
					>
						<h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Have questions or found a bug? Reach out directly or contribute to the project.
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<a
								href="mailto:contact@ismailcourr.dev"
								className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
							>
								Send Email
								<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/ismailco/goalgenius/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
							>
								Open an Issue
								<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/ismailco/goalgenius"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
							>
								Star on GitHub
								<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</a>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</main>
	);
}

