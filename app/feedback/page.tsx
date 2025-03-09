'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import AnimatedSection from '../components/AnimatedSection';

export default function FeedbackPage() {
	const searchParams = useSearchParams();
	const planParam = searchParams.get('plan');
	const topicParam = searchParams.get('topic');

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		feedbackType: topicParam || 'general',
		plan: planParam || '',
		feature: '',
		rating: '5',
		message: '',
		submitted: false,
		submitting: false,
		error: false,
		errorMessage: '',
	});

	const validateForm = () => {
		// Basic validation
		if (!formState.name.trim()) {
			setFormState((prev) => ({
				...prev,
				error: true,
				errorMessage: 'Please enter your name',
			}));
			return false;
		}

		if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) {
			setFormState((prev) => ({
				...prev,
				error: true,
				errorMessage: 'Please enter a valid email address',
			}));
			return false;
		}

		if (formState.feedbackType === 'feature' && !formState.feature) {
			setFormState((prev) => ({
				...prev,
				error: true,
				errorMessage: 'Please select a feature area',
			}));
			return false;
		}

		if (formState.feedbackType === 'pricing' && !formState.plan) {
			setFormState((prev) => ({
				...prev,
				error: true,
				errorMessage: 'Please select a pricing plan',
			}));
			return false;
		}

		if (!formState.message.trim()) {
			setFormState((prev) => ({
				...prev,
				error: true,
				errorMessage: 'Please enter your feedback message',
			}));
			return false;
		}

		return true;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value, error: false, errorMessage: '' }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Reset error state
		setFormState((prev) => ({ ...prev, error: false, errorMessage: '' }));

		if (validateForm()) {
			try {
				setFormState((prev) => ({ ...prev, submitting: true }));

				const response = await fetch('https://goalgenius-feedback-form.soultware.workers.dev', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: formState.name,
						email: formState.email,
						feedbackType: formState.feedbackType,
						plan: formState.plan,
						feature: formState.feature,
						rating: formState.rating,
						message: formState.message,
						source: window.location.href,
					}),
				});

				const data = await response.json();

				if (response.ok) {
					setFormState((prev) => ({
						...prev,
						submitted: true,
						submitting: false,
					}));
				} else {
					setFormState((prev) => ({
						...prev,
						error: true,
						submitting: false,
						errorMessage: data.message || 'An error occurred while submitting your feedback',
					}));
				}
			} catch (error) {
        console.log(error);
				setFormState((prev) => ({
					...prev,
					error: true,
					submitting: false,
					errorMessage: 'Network error: Could not submit form. Please try again later.',
				}));
			}
		}
	};

	const feedbackTypes = [
		{ id: 'general', label: 'General Feedback' },
		{ id: 'feature', label: 'Feature Request' },
		{ id: 'bug', label: 'Bug Report' },
		{ id: 'ui', label: 'UI/UX Feedback' },
		{ id: 'pricing', label: 'Pricing Feedback' },
	];

	const featureOptions = [
		{ id: 'goals', label: 'Goal Tracking' },
		{ id: 'ai', label: 'AI Recommendations' },
		{ id: 'calendar', label: 'Calendar Integration' },
		{ id: 'dashboard', label: 'Dashboard & Analytics' },
		{ id: 'mobile', label: 'Mobile Experience' },
		{ id: 'other', label: 'Other Feature' },
	];

	return (
		<main className="relative">
			{/* Blue Banner */}
			<div className="bg-blue-600 text-white px-4 py-3 text-center relative">
				<div className="container mx-auto">
					<p className="font-medium">
						<span className="font-bold">BETA ACCESS:</span> Try our functional demo at{' '}
						<a href="https://demo.goalgenius.soultware.com" className="underline font-bold hover:text-blue-200 transition-colors">
							demo.goalgenius.soultware.com
						</a>
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16">
				<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12">
					<div className="flex flex-col justify-center items-center">
						<Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
							<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Back to Home
						</Link>
						<div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium px-4 py-1 rounded-full mb-4">Beta Feedback</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Shape GoalGenius</h1>
					<p className="text-xl text-gray-300 mb-4">Your feedback is invaluable as we develop our product.</p>
					<p className="text-gray-400">Share your thoughts, report issues, or suggest features to help us build the best goal tracking app possible.</p>
				</AnimatedSection>

				{formState.submitted ? (
					<AnimatedSection initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
							<svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
						<p className="text-gray-300 mb-6">We appreciate your feedback and will use it to improve GoalGenius.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/" className="inline-flex items-center px-6 py-3 font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
								Return Home
							</Link>
							<Link href="https://demo.goalgenius.soultware.com" className="inline-flex items-center px-6 py-3 font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
								Try the Demo
								<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</Link>
						</div>
					</AnimatedSection>
				) : (
					<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
						{formState.error && (
							<div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
								<div className="flex items-center">
									<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span>{formState.errorMessage}</span>
								</div>
							</div>
						)}

						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label htmlFor="name" className="block text-white font-medium mb-2">
										Your Name
									</label>
									<input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required />
								</div>
								<div>
									<label htmlFor="email" className="block text-white font-medium mb-2">
										Email Address
									</label>
									<input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
								</div>
							</div>

							<div className="mb-6">
								<label htmlFor="feedbackType" className="block text-white font-medium mb-2">
									Feedback Type
								</label>
								<select id="feedbackType" name="feedbackType" value={formState.feedbackType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
									{feedbackTypes.map((type) => (
										<option key={type.id} value={type.id} className="bg-slate-800">
											{type.label}
										</option>
									))}
								</select>
							</div>

							{formState.feedbackType === 'feature' && (
								<div className="mb-6">
									<label htmlFor="feature" className="block text-white font-medium mb-2">
										Feature Area
									</label>
									<select id="feature" name="feature" value={formState.feature} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
										<option value="" className="bg-slate-800">
											Select a feature area
										</option>
										{featureOptions.map((option) => (
											<option key={option.id} value={option.id} className="bg-slate-800">
												{option.label}
											</option>
										))}
									</select>
								</div>
							)}

							{formState.feedbackType === 'pricing' && (
								<div className="mb-6">
									<label htmlFor="plan" className="block text-white font-medium mb-2">
										Price Plan
									</label>
									<select id="plan" name="plan" value={formState.plan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
										<option value="" className="bg-slate-800">
											Select a pricing plan
										</option>
										<option value="free" className="bg-slate-800">
											Free Plan
										</option>
										<option value="pro" className="bg-slate-800">
											Pro Plan
										</option>
										<option value="proai" className="bg-slate-800">
											Pro AI Plan
										</option>
									</select>
								</div>
							)}

							<div className="mb-6">
								<fieldset>
									<legend className="block text-white font-medium mb-2">Your Experience with GoalGenius</legend>
									<div className="flex items-center justify-between bg-white/5 rounded-lg p-4 border border-white/10">
										<span className="text-gray-400">Poor</span>
										<div className="flex gap-2">
											{[1, 2, 3, 4, 5].map((num) => (
												<label key={num} className="flex flex-col items-center cursor-pointer">
													<input type="radio" name="rating" value={num} checked={formState.rating === num.toString()} onChange={handleChange} className="sr-only" />
													<span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-colors ${formState.rating === num.toString() ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>{num}</span>
												</label>
											))}
										</div>
										<span className="text-gray-400">Excellent</span>
									</div>
								</fieldset>
							</div>

							<div className="mb-8">
								<label htmlFor="message" className="block text-white font-medium mb-2">
									Your Feedback
								</label>
								<textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Please share your detailed thoughts, suggestions, or report an issue..." required></textarea>
							</div>

							<div className="text-center">
								<button type="submit" disabled={formState.submitting} className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:transform-none">
									{formState.submitting ? (
										<>
											<svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
											Submitting...
										</>
									) : (
										'Submit Feedback'
									)}
								</button>
							</div>
						</form>
					</AnimatedSection>
				)}

				<AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="max-w-2xl mx-auto mt-12 p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
					<div className="flex items-start">
						<div className="bg-blue-500/20 p-3 rounded-full mr-4">
							<svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 className="text-xl font-bold text-white mb-2">Other Ways to Provide Feedback</h3>
							<p className="text-gray-300 mb-4">You can also reach us through these channels:</p>
							<ul className="space-y-2 text-gray-400">
								<li className="flex items-center">
									<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span>
										Email us at{' '}
										<a href="mailto:feedback@goalgenius.soultware.com" className="text-blue-400 hover:text-blue-300">
											feedback@goalgenius.soultware.com
										</a>
									</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
									<span>
										Join our{' '}
										<a href="#" className="text-blue-400 hover:text-blue-300">
											Discord community
										</a>{' '}
										for discussions
									</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<span>
										Take our{' '}
										<a href="#" className="text-blue-400 hover:text-blue-300">
											detailed survey
										</a>{' '}
										to help us prioritize features
									</span>
								</li>
							</ul>
						</div>
					</div>
				</AnimatedSection>
			</div>

			{/* Footer */}
			<section className="bg-slate-900/80 border-t border-white/10 py-8 mt-12">
				<div className="container mx-auto px-4 text-center">
					<p className="text-gray-400 text-sm">GoalGenius • © {new Date().getFullYear()}</p>
					<p className="text-blue-400 mt-2 text-xs">
						Currently in beta. Try our demo at{' '}
						<a href="https://demo.goalgenius.soultware.com" className="underline hover:text-blue-300">
							demo.goalgenius.soultware.com
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}

