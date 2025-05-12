import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'GoalGenius - AI-Powered Goal Tracking App',
	description: 'Track and achieve your goals faster with GoalGenius. Now available in Beta V1.0 for Web and Mobile.',
	openGraph: {
		title: 'GoalGenius - AI-Powered Goal Tracking App',
		description: 'Track and achieve your goals faster with GoalGenius. Now available in Beta V1.0 for Web and Mobile.',
		type: 'website',
		url: 'https://goalgenius.online',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'GoalGenius - AI-Powered Goal Tracking App',
			},
		],
		siteName: 'GoalGenius - AI-Powered Goal Tracking App',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'GoalGenius - AI-Powered Goal Tracking App',
		description: 'Track and achieve your goals faster with GoalGenius. Now available in Beta V1.0 for Web and Mobile.',
		images: ['https://goalgenius.online/og-image.png'],
		creator: '@ismailco',
		site: '@goalgenius_app'
	},
	alternates: {
		canonical: 'https://goalgenius.online',
	},
	keywords: 'goal tracking, AI assistant, productivity, goal setting, milestone tracking, todo management, daily check-ins, note taking, goal achievement, personal development, task management, progress tracking, goal planning, habit tracking, goal organization, productivity tools, goal setting software, achievement tracker',
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
	category: 'Productivity',
	applicationName: 'GoalGenius',
	referrer: 'origin-when-cross-origin',
	authors: [{ name: 'Ismail Courr', url: 'https://github.com/Ismailco' }],
};

const features = [
	{
		title: 'Goal & Milestone Tracking',
		description: 'Break down your goals into achievable milestones, track progress, and celebrate your achievements.',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
		status: 'Available Now'
	},
	{
		title: 'Daily Management Tools',
		description: 'Stay organized with integrated todos, daily check-ins, and note-taking features to support your journey.',
		icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
		status: 'Available Now'
	},
	{
		title: 'Advanced Progress Analytics',
		description: 'Coming soon: Visualize your progress with intuitive charts and track your goal completion rates over time.',
		icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
		status: 'Coming Soon'
	},
	{
		title: 'Calendar Integration',
		description: 'Coming soon: Seamlessly sync your goals and tasks with your favorite calendar apps.',
		icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
		status: 'Coming Soon'
	},
	{
		title: 'Mobile App',
		description: 'Coming soon: Access your goals on the go with our native mobile app for iOS and Android.',
		icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
		status: 'Coming Soon'
	},
	{
		title: 'AI-Powered Insights',
		description: 'Coming soon: Smart recommendations and insights to help optimize your goal achievement strategy.',
		icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
		status: 'Coming Soon'
	},
];

const pricingPlans = [
	{
		name: 'Beta Access',
		price: 'Free',
		description: 'Full access to all features during beta',
		features: [
			'All current features',
			'Early access to new features',
			'Shape product development',
			'Community support'
		],
		cta: 'Try Beta V1.0',
		highlight: true,
	},
	{
		name: 'Open Source',
		price: 'GitHub',
		description: 'Self-host your own instance',
		features: [
			'Access to source code',
			'GPLv3 License',
			'Full customization freedom',
			'Community contributions'
		],
		cta: 'View on GitHub',
		highlight: false,
	},
	{
		name: 'Support Us',
		price: 'Donate',
		description: 'Help us keep the project alive',
		features: [
			'Buy me a coffee',
			'Support development',
			'Join our sponsors list',
			'Help shape the future'
		],
		cta: 'Make a Donation',
		highlight: false,
	},
];

const conceptFeedback = [
	{
		name: 'User Experience',
		icon: '💡',
		question: 'How can we improve your goal tracking experience?',
	},
	{
		name: 'Feature Priority',
		icon: '🎯',
		question: 'Which upcoming feature would you like to see first: Mobile App, Analytics, or Calendar Integration?',
	},
	{
		name: 'Beta Feedback',
		icon: '🚀',
		question: 'What features or improvements would make you recommend GoalGenius to others?',
	},
];

// const stats = [
// 	{ label: 'Active Beta Users', value: '500+' },
// 	{ label: 'Goals Created', value: '2,000+' },
// 	{ label: 'Daily Check-ins', value: '85%' },
// 	{ label: 'User Satisfaction', value: '4.8/5' },
// ];

// const partners = [
// 	{ name: 'Google', logo: '/api/placeholder/120/40' },
// 	{ name: 'OpenAI', logo: '/api/placeholder/120/40' },
// ];

export default function HomePage() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'GoalGenius',
		description: 'Track and achieve your goals faster with GoalGenius. Now available in Beta V1.0 for Web and Mobile.',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'All',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			description: 'Free during Beta. Open-source under GPLv3 License'
		},
		featureList: [
			'Goal & Milestone Tracking',
			'Daily Management Tools with Todos and Check-ins',
			'Note Taking for Goals',
			'Coming Soon: Advanced Progress Analytics',
			'Coming Soon: Calendar Integration',
			'Coming Soon: Mobile Apps',
			'Coming Soon: AI-Powered Insights'
		],
		softwareVersion: 'Beta V1.0',
		url: 'https://app.goalgenius.online',
		license: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
	};

	return (
		<>
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>

			<main className="min-h-screen bg-slate-900">
				{/* Product Banner */}
				<div className="bg-blue-600 text-white px-4 py-3 text-center relative">
					<div className="container mx-auto">
						<p className="font-medium">
							<span className="font-bold">OPEN SOURCE & FREE:</span> Try GoalGenius Beta V1.0 at <a href="https://app.goalgenius.online" className="underline font-bold hover:text-blue-200 transition-colors">app.goalgenius.online</a>
						</p>
					</div>
				</div>

				{/* Hero Section */}
				<section className="relative" aria-label="hero">
					<div className="container mx-auto px-4 pt-20 pb-32 text-center">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-6">
								Open Source Goal Tracking
							</div>
							<h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Your Goals, Your Data, Your Control</h1>
							<p className="text-xl text-gray-300 mb-4">Track goals, manage todos, take notes, and maintain daily check-ins - all in one open-source platform that respects your privacy.</p>
							<p className="text-lg text-blue-400 border border-blue-400/30 bg-blue-400/10 rounded-lg p-4 mb-8">
								Free to use, forever. Advanced features like Analytics, Mobile Apps, and AI insights coming soon!
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
								<Link href="https://app.goalgenius.online" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200" aria-label="Try Beta">
									Start Tracking Goals
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</Link>
								<Link href="https://github.com/Ismailco/GoalGenius" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
									View on GitHub
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</Link>
							</div>
						</AnimatedSection>
					</div>
				</section>

				{/* Stats Section */}
				{/* <section className="relative py-16" aria-label="statistics">
					<div className="container mx-auto px-4">
						<div className="text-center mb-8">
							<span className="text-blue-400 font-medium">BETA PERFORMANCE METRICS</span>
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
				</section> */}

				{/* Features Section */}
				<section id="features" className="relative py-20 bg-slate-900/50" aria-label="features">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">
								Features
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Current & Upcoming Features</h2>
							<p className="text-xl text-gray-300">Experience our powerful features now, with AI enhancements coming soon</p>
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
									<span className={`inline-block ${feature.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'} text-xs font-semibold px-2.5 py-0.5 rounded w-fit mt-auto`}>
										{feature.status}
									</span>
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
							<p className="text-xl text-gray-300">Your all-in-one goal achievement platform</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									step: '01',
									title: 'Set Goals & Milestones',
									description: 'Create goals and break them into achievable milestones. Set clear targets and deadlines for success.',
									status: 'Available Now',
								},
								{
									step: '02',
									title: 'Daily Check-ins',
									description: 'Track your daily progress, maintain streaks, and stay accountable with regular check-ins.',
									status: 'Available Now',
								},
								{
									step: '03',
									title: 'Track Progress',
									description: 'Monitor your advancement through intuitive dashboards with visual progress indicators.',
									status: 'Available Now',
								},
								{
									step: '04',
									title: 'Take Notes',
									description: 'Capture ideas, reflections, and insights related to your goals with the built-in notes feature.',
									status: 'Available Now',
								},
								{
									step: '05',
									title: 'Manage Todos',
									description: 'Create and organize daily tasks to keep you focused and moving toward your goals.',
									status: 'Available Now',
								},
								{
									step: '06',
									title: 'Get Insights',
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
								Free During Beta
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Open Source & Community Driven</h2>
							<p className="text-xl text-gray-300 mb-2">Free access to all features during beta period</p>
							<p className="text-md text-blue-400">Support us through donations to help maintain and improve the platform</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingPlans.map((plan, index) => (
								<AnimatedSection key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`flex flex-col bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.highlight ? 'border-purple-400' : 'border-white/10'} ${plan.highlight ? 'relative' : ''}`}>
									{plan.highlight && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-1 px-4 rounded-full">Available Now</span>}
									<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
									<div className="mb-2">
										<span className="text-4xl font-bold text-white">{plan.price}</span>
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
									<Link
										href={plan.name === 'Open Source'
											? 'https://github.com/Ismailco/GoalGenius'
											: plan.name === 'Support Us'
												? '/donate'
												: 'https://app.goalgenius.online'}
										className={`w-full inline-flex justify-center items-center px-6 py-3 font-medium rounded-full text-white ${plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' : 'bg-white/10 hover:bg-white/20'} transform hover:scale-105 transition-all duration-200 mt-auto`}
									>
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
							<h3 className="text-2xl font-bold text-white mb-6">Current Beta V1.0 Features</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div>
									<h4 className="font-bold text-white mb-3 flex items-center">
										<svg className="w-5 h-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
										Available Features
									</h4>
									<ul className="space-y-2 text-gray-300">
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Web and mobile app access
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
											Goal tracking and organization
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
											Cross-platform synchronization
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-bold text-white mb-3 flex items-center">
										<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
										</svg>
										Coming in Next Update
									</h4>
									<ul className="space-y-2 text-gray-300">
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
											Advanced analytics
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											Smart task prioritization
										</li>
										<li className="flex items-start">
											<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											Calendar integration
										</li>
									</ul>
								</div>
							</div>
							<Link href="https://app.goalgenius.online" className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 font-medium rounded-full transform hover:scale-105 transition-all duration-200">
								Try Beta V1.0
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
								Help Us Improve
							</div>
							<h2 className="text-4xl font-bold text-white mb-4">Shape the Future of GoalGenius</h2>
							<p className="text-xl text-gray-300">Your feedback drives our development roadmap</p>
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
								Start Today
							</div>
							<h2 className="text-4xl font-bold text-white mb-6">Take Control of Your Goals</h2>
							<p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto">Join our growing community of goal achievers. Free, open-source, and built with your privacy in mind.</p>
							<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Help shape the future of GoalGenius by <span className="text-blue-400 font-semibold">contributing on GitHub</span> or providing feedback.</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
								<Link href="https://app.goalgenius.online" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
									Start Using GoalGenius
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</Link>
								<Link href="https://github.com/Ismailco/GoalGenius" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
									Star on GitHub
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
									</svg>
								</Link>
							</div>
						</AnimatedSection>
					</div>
				</section>

				{/* Footer */}
				<section className="bg-slate-900/80 border-t border-white/10 py-8">
					<div className="container mx-auto px-4 text-center">
						<p className="text-gray-400 text-sm">GoalGenius • © {new Date().getFullYear()}</p>
						<p className="text-blue-400 mt-2 text-xs">Free & Open Source • <a href="https://app.goalgenius.online" className="underline hover:text-blue-300">app.goalgenius.online</a></p>
					</div>
				</section>
			</main>
		</>
	);
}

