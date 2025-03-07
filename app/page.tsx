import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from './components/AnimatedSection';
import Script from 'next/script';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'GoalGenius - Achieve Goals 2x Faster with Smart AI Tracking',
	description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your AI-powered growth companion.',
	openGraph: {
		title: 'GoalGenius - Achieve Goals 2x Faster with Smart AI Tracking',
		description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your AI-powered growth companion.',
		type: 'website',
		url: 'https://goalgenius.soultware.com',
		images: [
			{
				url: 'https://goalgenius.soultware.com/og-home.jpg',
				width: 1200,
				height: 630,
				alt: 'GoalGenius - AI-Powered Goal Tracking App',
			},
		],
		siteName: 'GoalGenius',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'GoalGenius - Achieve Goals 2x Faster with Smart AI Tracking',
		description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your AI-powered growth companion.',
		images: ['https://goalgenius.soultware.com/og-home.jpg'],
	},
	alternates: {
		canonical: 'https://goalgenius.soultware.com',
	},
	keywords: 'goal tracking, AI assistant, productivity, milestone tracking, daily check-ins, smart notes, calendar integration',
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
		description: 'Our AI assistant analyzes your progress patterns and suggests optimizations to achieve goals faster.',
		icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
	},
	{
		title: 'Smart Calendar Integration',
		description: 'Seamlessly sync with your existing calendars to automatically track time spent on your goals.',
		icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
	},
	{
		title: 'Intelligent To-Do Management',
		description: 'Prioritize tasks with our AI that understands which actions drive the most progress toward your goals.',
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
	},
];

const pricingPlans = [
	{
		name: 'Free',
		price: '$0',
		description: 'Perfect for getting started',
		features: ['Basic goal tracking', '3 active goals', 'Daily check-ins', 'Basic progress reports'],
		cta: 'Get Started Free',
		highlight: false,
	},
	{
		name: 'Pro',
		price: '$4',
		period: '/month',
		description: 'For serious goal achievers',
		features: ['Unlimited goals', 'Advanced tracking metrics', 'Calendar integration', 'Detailed analytics', 'Priority support'],
		cta: 'Start Pro Trial',
		highlight: true,
	},
	{
		name: 'Pro AI',
		price: '$9',
		period: '/month',
		description: 'The ultimate goal companion',
		features: ['Everything in Pro', 'AI-powered recommendations', 'Smart task prioritization', 'Personalized coaching', 'Advanced insights & patterns'],
		cta: 'Start Pro AI Trial',
		highlight: false,
	},
];

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'Entrepreneur',
		content: "The AI assistant in GoalGenius helped me identify inefficiencies in my workflow I never noticed. I've doubled my productivity.",
		avatar: '👩🏽‍💼',
	},
	{
		name: 'Michael Chen',
		role: 'Fitness Enthusiast',
		content: 'Calendar integration means my workouts are tracked automatically. The AI recommendations keep me from plateauing.',
		avatar: '👨🏻‍💪',
	},
	{
		name: 'Emily Rodriguez',
		role: 'Student',
		content: "I'm studying 40% more efficiently since I started using the AI prioritization features. It knows exactly what I should focus on.",
		avatar: '👩🏻‍🎓',
	},
];

const stats = [
	{ label: 'Time Saved', value: '6hrs/week' },
	{ label: 'Completion Rate', value: '2x Higher' },
	{ label: 'Goal Achievement', value: '89% Success' },
	{ label: 'Average Progress', value: '37% Faster' },
];

const partners = [
	{ name: 'Google', logo: '/api/placeholder/120/40' },
	{ name: 'OpenAI', logo: '/api/placeholder/120/40' },
];

export default function HomePage() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'GoalGenius',
		description: 'Track your progress, celebrate milestones, and achieve your dreams with GoalGenius - your AI-powered growth companion.',
		applicationCategory: 'ProductivityApplication',
		operatingSystem: 'All',
		offers: {
			'@type': 'AggregateOffer',
			offers: [
				{
					'@type': 'Offer',
					name: 'Free Plan',
					price: '0',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					name: 'Pro Plan',
					price: '4',
					priceCurrency: 'USD',
				},
				{
					'@type': 'Offer',
					name: 'Pro AI Plan',
					price: '9',
					priceCurrency: 'USD',
				},
			],
		},
		featureList: ['AI-Powered Goal Analysis', 'Smart Calendar Integration', 'Intelligent To-Do Management', 'Daily Check-ins', 'Progress Analytics'],
	};

	return (
		<>
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>

			<main className="min-h-screen bg-slate-900">
				{/* Hero Section */}
				<section className="relative" aria-label="hero">
					<div className="container mx-auto px-4 pt-20 pb-32 text-center">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
							<h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Achieve Goals 2x Faster with Smart AI Tracking</h1>
							<p className="text-xl text-gray-300 mb-8">Our AI assistant analyzes your patterns, integrates with your calendar, and suggests the most efficient path to success.</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
								<Link href="/signup" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200" aria-label="Sign Up for Early Access">
									Sign Up for Early Access
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</Link>
								<Link href="/pricing" className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
									View Pricing
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
									</svg>
								</Link>
							</div>

							{/* Trusted By Logos */}
							<div className="mt-12">
								<p className="text-sm text-gray-400 mb-4">BUILT WITH TECHNOLOGY FROM</p>
								<div className="flex justify-center items-center space-x-8">
									{partners.map((partner) => (
										<div key={partner.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
											<img src={partner.logo} alt={partner.name} className="h-10" />
										</div>
									))}
								</div>
							</div>
						</AnimatedSection>
					</div>
				</section>

				{/* Stats Section */}
				<section className="relative py-16" aria-label="statistics">
					<div className="container mx-auto px-4">
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
							<h2 className="text-4xl font-bold text-white mb-4">AI-Powered Features</h2>
							<p className="text-xl text-gray-300">Innovative tools that make goal achievement faster and more efficient</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<AnimatedSection key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-200">
									<div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl inline-block mb-4">
										<svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
									<p className="text-gray-300">{feature.description}</p>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="relative py-20" aria-label="how it works">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
							<p className="text-xl text-gray-300">The smarter way to achieve your goals</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									step: '01',
									title: 'Connect Your Calendar',
									description: 'Sync with Google Calendar, Apple Calendar, or Outlook to automatically track time spent on goals.',
								},
								{
									step: '02',
									title: 'AI Analyzes Your Patterns',
									description: 'Our AI learns your productivity cycles and identifies the optimal times for different goal activities.',
								},
								{
									step: '03',
									title: 'Get Smart Recommendations',
									description: 'Receive personalized suggestions that help you achieve goals in less time with greater focus.',
								},
							].map((item, index) => (
								<AnimatedSection key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
									<span className="text-6xl font-bold text-white/10 absolute top-4 right-4">{item.step}</span>
									<h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
									<p className="text-gray-300">{item.description}</p>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section id="pricing" className="relative py-20 bg-slate-900/50" aria-label="pricing">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
							<p className="text-xl text-gray-300">Choose the plan that fits your goals</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingPlans.map((plan, index) => (
								<AnimatedSection key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.highlight ? 'border-purple-400' : 'border-white/10'} ${plan.highlight ? 'relative' : ''}`}>
									{plan.highlight && <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-1 px-4 rounded-full">Most Popular</span>}
									<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
									<div className="mb-4">
										<span className="text-4xl font-bold text-white">{plan.price}</span>
										{plan.period && <span className="text-gray-400">{plan.period}</span>}
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
									<Link href={`/signup?plan=${plan.name.toLowerCase()}`} className={`w-full inline-flex justify-center items-center px-6 py-3 font-medium rounded-full text-white ${plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' : 'bg-white/10 hover:bg-white/20'} transform hover:scale-105 transition-all duration-200`}>
										{plan.cta}
									</Link>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="relative py-20" aria-label="testimonials">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
							<h2 className="text-4xl font-bold text-white mb-4">What Early Users Say</h2>
							<p className="text-xl text-gray-300">Join our growing community of efficient goal achievers</p>
						</AnimatedSection>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<AnimatedSection key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
									<div className="text-4xl mb-4">{testimonial.avatar}</div>
									<p className="text-gray-300 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
									<div>
										<p className="font-semibold text-white">{testimonial.name}</p>
										<p className="text-gray-400">{testimonial.role}</p>
									</div>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				{/* Early Access CTA Section */}
				<section className="relative py-20 bg-slate-900/50" aria-label="call to action">
					<div className="container mx-auto px-4">
						<AnimatedSection initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center">
							<h2 className="text-4xl font-bold text-white mb-6">Be Among the First to Experience GoalGenius</h2>
							<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">We're launching soon! Sign up now for early access and receive a 50% discount on your first 3 months.</p>
							<div className="max-w-md mx-auto">
								<form className="flex flex-col sm:flex-row gap-3">
									<input type="email" placeholder="Enter your email" className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
									<button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium transform hover:scale-105 transition-all duration-200">
										Join Waitlist
									</button>
								</form>
								<p className="text-gray-400 mt-4 text-sm">No credit card required. We'll notify you when we launch.</p>
							</div>
						</AnimatedSection>
					</div>
				</section>
			</main>
		</>
	);
}

