import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from './components/AnimatedSection';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'GoalGenius [VALIDATION] - Validate Our AI Goal Tracking Concept',
	description: 'Help us validate our AI-powered goal tracking concept before we build it. Your feedback will shape GoalGenius.',
	openGraph: {
		title: 'GoalGenius [VALIDATION] - Validate Our AI Goal Tracking Concept',
		description: 'Help us validate our AI-powered goal tracking concept before we build it. Your feedback will shape GoalGenius.',
		type: 'website',
		url: 'https://goalgenius.soultware.com',
		images: [
			{
				url: 'https://goalgenius.soultware.com/og-home.jpg',
				width: 1200,
				height: 630,
				alt: 'GoalGenius - AI-Powered Goal Tracking App Concept',
			},
		],
		siteName: 'GoalGenius [VALIDATION]',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'GoalGenius [VALIDATION] - Validate Our AI Goal Tracking Concept',
		description: 'Help us validate our AI-powered goal tracking concept before we build it. Your feedback will shape GoalGenius.',
		images: ['https://goalgenius.soultware.com/og-home.jpg'],
	},
	alternates: {
		canonical: 'https://goalgenius.soultware.com',
	},
	keywords: 'concept validation, goal tracking, AI assistant, productivity, feedback, product validation',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const features = [
	{
		title: 'AI-Powered Goal Analysis',
		description: 'Our AI assistant would analyze your progress patterns and suggest optimizations to achieve goals faster.',
		icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
	},
	{
		title: 'Smart Calendar Integration',
		description: 'We plan to seamlessly sync with your existing calendars to automatically track time spent on your goals.',
		icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
	},
	{
		title: 'Intelligent To-Do Management',
		description: 'We\'re considering AI that would understand which actions drive the most progress toward your goals.',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
	},
];

const pricingPlans = [
	{
		name: 'Free',
		price: '$0',
		description: 'Potential features for the free tier',
		features: ['Basic goal tracking', '3 active goals', 'Daily check-ins', 'Basic progress reports'],
		cta: 'Express Interest',
		highlight: false,
	},
	{
		name: 'Pro',
		price: '$4',
		period: '/month',
		description: 'Proposed features for serious goal achievers',
		features: ['Unlimited goals', 'Advanced tracking metrics', 'Calendar integration', 'Detailed analytics', 'Priority support'],
		cta: 'Vote For This Plan',
		highlight: true,
	},
	{
		name: 'Pro AI',
		price: '$9',
		period: '/month',
		description: 'The ultimate goal companion (in development)',
		features: ['Everything in Pro', 'AI-powered recommendations', 'Smart task prioritization', 'Personalized coaching', 'Advanced insights & patterns'],
		cta: 'Vote For This Plan',
		highlight: false,
	},
];

const conceptFeedback = [
	{
		name: 'Feature Interest',
		icon: '👍',
		question: 'Would AI goal tracking help you achieve your goals faster?',
	},
	{
		name: 'Pain Points',
		icon: '🤔',
		question: 'What\'s your biggest challenge with current goal tracking apps?',
	},
	{
		name: 'Usage Patterns',
		icon: '📊',
		question: 'How often would you use an AI-powered goal tracking app?',
	},
];

const stats = [
	{ label: 'Potential Time Saved', value: '6hrs/week' },
	{ label: 'Anticipated Completion Rate', value: '2x Higher' },
	{ label: 'Target Goal Achievement', value: '89% Success' },
	{ label: 'Expected Progress Speed', value: '37% Faster' },
];

// const partners = [
// 	{ name: 'Google', logo: '/api/placeholder/120/40' },
// 	{ name: 'OpenAI', logo: '/api/placeholder/120/40' },
// ];

export default function HomePage() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'GoalGenius (Concept Validation)',
		description: 'Help us validate our AI-powered goal tracking concept before we build it. Your feedback will shape GoalGenius.',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'All',
		offers: {
			'@type': 'AggregateOffer',
			offers: [
				{
					'@type': 'Offer',
					name: 'Free Plan (Proposed)',
					price: '0',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					name: 'Pro Plan (Proposed)',
					price: '4',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					name: 'Pro AI Plan (Proposed)',
					price: '9',
					priceCurrency: 'USD',
				},
			],
		},
		featureList: ['AI-Powered Goal Analysis (Proposed)', 'Smart Calendar Integration (Proposed)', 'Intelligent To-Do Management (Proposed)'],
	};

	return (
		<>
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>

			<main className="min-h-screen bg-slate-900">
				{/* Product Validation Banner */}
				<div className="bg-blue-600 text-white px-4 py-3 text-center relative">
					<div className="container mx-auto">
						<p className="font-medium">
							<span className="font-bold">BETA ACCESS:</span> Try our functional demo at <a href="https://demo.goalgenius.soultware.com" className="underline font-bold hover:text-blue-200 transition-colors">demo.goalgenius.soultware.com</a> and help us prioritize upcoming features!
						</p>
					</div>
				</div>

				{/* Hero Section */}
				<section className="relative" aria-label="hero">
					<div className="container mx-auto px-4 pt-20 pb-32 text-center">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-6">
								Beta Version Available
							</div>
							<h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Achieve Goals 2x Faster with Smart AI Tracking</h1>
							<p className="text-xl text-gray-300 mb-4">Our platform helps you track goals, monitor progress, and stay focused. Advanced AI features for enhanced productivity are currently in development.</p>
							<p className="text-lg text-blue-400 border border-blue-400/30 bg-blue-400/10 rounded-lg p-4 mb-8">
								Try our cross-platform demo with basic features! We&apos;re working on AI integration, user authentication, and cloud syncing for our full release.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
								<Link href="https://demo.goalgenius.soultware.com" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200" aria-label="Try Demo">
									Try Demo
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</Link>
								<Link href="/feedback" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
									Provide Feedback
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
									</svg>
								</Link>
							</div>

							{/* Technology Stack */}
							{/* <div className="mt-12">
								<p className="text-sm text-gray-400 mb-4">BUILT WITH TECHNOLOGIES FROM</p>
								<div className="flex justify-center items-center space-x-8">
									{partners.map((partner) => (
										<div key={partner.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
											<img src={partner.logo} alt={partner.name} className="h-10" />
										</div>
									))}
								</div>
							</div> */}
						</AnimatedSection>
					</div>
				</section>

				{/* Stats Section */}
				<section className="relative py-16" aria-label="statistics">
					<div className="container mx-auto px-4">
						<div className="text-center mb-8">
							<span className="text-blue-400 font-medium">ANTICIPATED BENEFITS WITH FULL FEATURE SET</span>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{stats.map((stat, index) => (
								<AnimatedSection key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/10">
									<p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</p>
									<p className="text-gray-400 mt-2">{stat.label}</p>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="relative py-20 bg-slate-900/50" aria-label="features">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Feature Roadmap
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Current & Upcoming Features</h2>
							<p className="text-xl text-gray-300">Experience our core features now, with AI-powered enhancements coming soon</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<AnimatedSection key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="flex flex-col bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-200">
									<div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl inline-block mb-4 w-fit">
										<svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
									<p className="text-gray-300 mb-4">{feature.description}</p>
									{index === 0 && (
										<span className="inline-block bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded w-fit mt-auto">Coming Soon</span>
									)}
									{index === 1 && (
										<span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-2.5 py-0.5 rounded w-fit mt-auto">In Development</span>
									)}
									{index === 2 && (
										<span className="inline-block bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-0.5 rounded w-fit mt-auto">Available in Demo</span>
									)}
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="relative py-20" aria-label="how it works">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Product Workflow
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">How GoalGenius Works</h2>
							<p className="text-xl text-gray-300">Our streamlined approach to goal achievement</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									step: '01',
									title: 'Set & Organize Goals',
									description: 'Create goals, break them into manageable tasks, and establish timelines for completion.',
									status: 'Available Now',
								},
								{
									step: '02',
									title: 'Track Your Progress',
									description: 'Monitor your advancement through intuitive dashboards with visual progress indicators.',
									status: 'Available Now',
								},
								{
									step: '03',
									title: 'Get Smart Recommendations',
									description: 'Receive personalized suggestions to help you achieve goals in less time with greater focus.',
									status: 'Coming Soon',
								},
							].map((item, index) => (
								<AnimatedSection key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
									<span className="text-6xl font-bold text-white/10 absolute top-4 right-4">{item.step}</span>
									<h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
									<p className="text-gray-300 mb-4">{item.description}</p>
									<span className={`inline-block ${item.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'} text-xs font-semibold px-2.5 py-0.5 rounded`}>
										{item.status}
									</span>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section id="pricing" className="relative py-20 bg-slate-900/50" aria-label="pricing">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Pricing Plans
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
							<p className="text-xl text-gray-300 mb-2">Choose the plan that fits your goals</p>
							<p className="text-md text-blue-400">Help us validate our pricing structure - your feedback matters!</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingPlans.map((plan, index) => (
								<AnimatedSection key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`flex flex-col bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.highlight ? 'border-purple-400' : 'border-white/10'} ${plan.highlight ? 'relative' : ''}`}>
									{plan.highlight && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-1 px-4 rounded-full">Recommended</span>}
									<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
									<div className="mb-2">
										<span className="text-4xl font-bold text-white">{plan.price}</span>
										{plan.period && <span className="text-gray-400">{plan.period}</span>}
									</div>
									<div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 w-fit rounded mb-4">
										Planned Pricing
									</div>
									<p className="text-gray-300 mb-6">{plan.description}</p>
									<ul className="space-y-3 mb-8">
										{plan.features.map((feature, i) => (
											<li key={i} className="flex items-center text-gray-300">
												<svg className="w-5 h-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
												{feature}
											</li>
										))}
									</ul>
									<Link href={`/feedback?plan=${plan.name.toLowerCase()}`} className={`w-full inline-flex justify-center items-center px-6 py-3 font-medium rounded-full text-white ${plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' : 'bg-white/10 hover:bg-white/20'} transform hover:scale-105 transition-all duration-200 mt-auto`}>
										{plan.cta}
									</Link>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Current Status Section */}
				<section className="relative py-20" aria-label="current status">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Development Status
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Where We Are Now</h2>
							<p className="text-xl text-gray-300">Our current development status and roadmap</p>
						</AnimatedSection>

						<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
							<h3 className="text-2xl font-bold text-white mb-6">Current Demo Features</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div>
									<h4 className="font-bold text-white mb-3 flex items-center">
										<svg className="w-5 h-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
										Working Features
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Basic goal tracking and organization
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Progress visualization dashboard
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Local storage for offline functionality
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Cross-platform compatibility
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-bold text-white mb-3 flex items-center">
										<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
										</svg>
										Coming Next
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											User authentication system
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											Cloud database integration
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											AI-powered goal recommendations
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											Multi-device synchronization
										</li>
									</ul>
								</div>
							</div>
							<Link href="https://demo.goalgenius.soultware.com" className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 font-medium rounded-full transform hover:scale-105 transition-all duration-200">
								Try the Demo
								<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</Link>
						</div>
					</div>
				</section>

				{/* Feedback Questions Section */}
				<section className="relative py-20 bg-slate-900/50" aria-label="feedback questions">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Your Opinion Matters
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Help Us Improve GoalGenius</h2>
							<p className="text-xl text-gray-300">Your feedback will shape our upcoming features</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{conceptFeedback.map((item, index) => (
								<AnimatedSection key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
									<div className="text-4xl mb-4">{item.icon}</div>
									<h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
									<p className="text-gray-300 mb-6">{item.question}</p>
									<Link href={`/feedback?topic=${encodeURIComponent(item.name)}`} className="inline-flex items-center text-blue-400 hover:text-blue-300">
										Share your thoughts
										<svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</Link>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="relative py-20" aria-label="call to action">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-6">
								Beta Access
							</div>
							<h2 className="text-4xl font-bold text-white mb-6">Experience GoalGenius Today</h2>
							<p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto">Try our functional demo with basic features while we work on the full version with AI integration and cloud sync.</p>
							<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Early testers who provide valuable feedback will receive <span className="text-blue-400 font-semibold">50% off for 6 months</span> when we launch the premium version.</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
								<Link href="https://demo.goalgenius.soultware.com" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
									Try Demo Now
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</Link>
								<Link href="/feedback" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
									Provide Feedback
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
									</svg>
								</Link>
							</div>
							{/* <div className="max-w-md mx-auto mt-8">
								<form className="flex flex-col sm:flex-row gap-3">
									<input type="email" placeholder="Enter your email" className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
									<button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium transform hover:scale-105 transition-all duration-200">
										Join Beta Program
									</button>
								</form>
								<p className="text-gray-400 mt-4 text-sm">No credit card required. We'll notify you about major updates.</p>
							</div> */}
						</AnimatedSection>
					</div>
				</section>

				{/* Footer */}
				<section className="bg-slate-900/80 border-t border-white/10 py-8">
					<div className="container mx-auto px-4 text-center">
						<p className="text-gray-400 text-sm">GoalGenius • © {new Date().getFullYear()}</p>
						<p className="text-blue-400 mt-2 text-xs">Currently in beta. Try our demo at <a href="https://demo.goalgenius.soultware.com" className="underline hover:text-blue-300">demo.goalgenius.soultware.com</a></p>
					</div>
				</section>
			</main>
		</>
	);
}

