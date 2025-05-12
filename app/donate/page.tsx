import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
	title: 'Support GoalGenius - Help Us Keep Building',
	description: 'Support the development of GoalGenius through donations. Your contribution helps keep the project free and open-source for everyone.',
	openGraph: {
		title: 'Support GoalGenius - Help Us Keep Building',
		description: 'Support the development of GoalGenius through donations. Your contribution helps keep the project free and open-source for everyone.',
		type: 'website',
		url: 'https://goalgenius.online/donate',
	},
};

const donationOptions = [
	{
		name: 'Buy Me a Coffee',
		description: 'Support with a one-time donation',
		icon: '☕',
		url: 'https://www.buymeacoffee.com/ismailco',
		buttonText: 'Buy Me a Coffee',
	},
	{
		name: 'GitHub Sponsors',
		description: 'Support through GitHub Sponsors',
		icon: '💖',
		url: 'https://github.com/sponsors/Ismailco',
		buttonText: 'Sponsor on GitHub',
	},
	{
		name: 'Ko-fi',
		description: 'Support with a one-time or monthly donation',
		icon: '🎨',
		url: 'https://ko-fi.com/ismailcourr',
		buttonText: 'Support on Ko-fi',
	},
];

export default function DonatePage() {
	return (
		<main className="min-h-screen bg-slate-900">
			{/* Header */}
			<section className="relative py-20" aria-label="header">
				<div className="container mx-auto px-4 text-center">
					<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
						<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-6">
							Support GoalGenius
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Keep GoalGenius Free & Open Source</h1>
						<p className="text-xl text-gray-300 mb-8">Your support helps us maintain and improve GoalGenius, keeping it free and accessible for everyone.</p>
					</AnimatedSection>
				</div>
			</section>

			{/* Donation Options */}
			<section className="relative py-12" aria-label="donation options">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{donationOptions.map((option) => (
							<AnimatedSection
								key={option.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
							>
								<div className="text-4xl mb-4">{option.icon}</div>
								<h3 className="text-2xl font-bold text-white mb-3">{option.name}</h3>
								<p className="text-gray-300 mb-6">{option.description}</p>
								<a
									href={option.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 font-medium rounded-full transform hover:scale-105 transition-all duration-200"
								>
									{option.buttonText}
									<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Other Ways to Support */}
			<section className="relative py-20" aria-label="other support">
				<div className="container mx-auto px-4">
					<AnimatedSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-white mb-6">Other Ways to Support</h2>
						<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="text-left">
									<h3 className="text-xl font-bold text-white mb-3">Contribute Code</h3>
									<p className="text-gray-300 mb-4">Help improve GoalGenius by contributing to the codebase.</p>
									<a href="https://github.com/Ismailco/GoalGenius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300">
										View GitHub Repository
										<svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</a>
								</div>
								<div className="text-left">
									<h3 className="text-xl font-bold text-white mb-3">Spread the Word</h3>
									<p className="text-gray-300 mb-4">Share GoalGenius with others who might find it useful.</p>
									<a href="https://twitter.com/intent/tweet?text=Check%20out%20GoalGenius%20-%20An%20open-source%20goal%20tracking%20app!%20https%3A%2F%2Fgoalgenius.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300">
										Share on Twitter
										<svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Thank You Message */}
			<section className="relative py-20 bg-slate-900/50" aria-label="thank you">
				<div className="container mx-auto px-4">
					<AnimatedSection initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-white mb-6">Thank You for Your Support! 🙏</h2>
						<p className="text-xl text-gray-300 mb-8">Your contribution helps keep GoalGenius free and accessible for everyone. We appreciate your support in making goal achievement easier for all.</p>
						<Link href="/" className="inline-flex items-center px-6 py-3 text-white bg-white/10 hover:bg-white/20 font-medium rounded-full transform hover:scale-105 transition-all duration-200">
							<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Back to Home
						</Link>
					</AnimatedSection>
				</div>
			</section>
		</main>
	);
}
