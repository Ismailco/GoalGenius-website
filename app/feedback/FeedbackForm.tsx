'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { APP_URL } from '@/lib/site';

const FEEDBACK_ENDPOINT = 'https://goalgenius-feedback-form.soultware.workers.dev';

const feedbackTypes = [
	{ id: 'general', label: 'General Feedback' },
	{ id: 'feature', label: 'Feature Request' },
	{ id: 'bug', label: 'Bug Report' },
	{ id: 'ui', label: 'UI/UX Feedback' },
	{ id: 'hosting', label: 'Hosted Beta / Self-hosting' },
] as const;

const featureOptions = [
	{ id: 'goals', label: 'Goal Tracking' },
	{ id: 'milestones', label: 'Milestones' },
	{ id: 'todos', label: 'Todos' },
	{ id: 'notes', label: 'Notes' },
	{ id: 'checkins', label: 'Check-ins' },
	{ id: 'dashboard', label: 'Dashboard' },
	{ id: 'analytics', label: 'Analytics (planned)' },
	{ id: 'calendar', label: 'Calendar integrations (planned)' },
	{ id: 'mobile', label: 'Native mobile apps (planned)' },
	{ id: 'ai', label: 'AI features (planned)' },
	{ id: 'other', label: 'Other' },
] as const;

type FeedbackType = (typeof feedbackTypes)[number]['id'];

function isFeedbackType(value: string | null): value is FeedbackType {
	return feedbackTypes.some((type) => type.id === value);
}

export default function FeedbackForm() {
	const searchParams = useSearchParams();
	const topicParam = searchParams.get('topic');
	const initialFeedbackType = isFeedbackType(topicParam) ? topicParam : 'general';

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		feedbackType: initialFeedbackType,
		feature: '',
		rating: '5',
		message: '',
		submitted: false,
		submitting: false,
		error: false,
		errorMessage: '',
	});

	const validateForm = () => {
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
		setFormState((prev) => ({ ...prev, error: false, errorMessage: '' }));

		if (!validateForm()) return;

		try {
			setFormState((prev) => ({ ...prev, submitting: true }));

			const response = await fetch(FEEDBACK_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formState.name,
					email: formState.email,
					feedbackType: formState.feedbackType,
					feature: formState.feature,
					rating: formState.rating,
					message: formState.message,
					source: window.location.href,
				}),
			});

			const data = (await response.json().catch(() => ({}))) as { message?: string };

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
		} catch {
			setFormState((prev) => ({
				...prev,
				error: true,
				submitting: false,
				errorMessage: 'Network error: Could not submit form. Please try again later.',
			}));
		}
	};

	if (formState.submitted) {
		return (
			<div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
					<svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h2 className="mb-4 text-3xl font-bold text-white">Thank you</h2>
				<p className="mb-6 text-gray-300">Your feedback was submitted and will help improve Rungset.</p>
				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Return Home
					</Link>
					<a
						href={APP_URL}
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Open App
					</a>
				</div>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
			{formState.error && (
				<div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-3 text-red-300" role="alert" aria-live="polite">
					{formState.errorMessage}
				</div>
			)}

			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label htmlFor="name" className="mb-2 block font-medium text-white">
							Your name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formState.name}
							onChange={handleChange}
							autoComplete="name"
							className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-invalid={formState.error && !formState.name.trim()}
							placeholder="Jane Doe"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="mb-2 block font-medium text-white">
							Email address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
							autoComplete="email"
							className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-invalid={formState.error && (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email))}
							placeholder="you@example.com"
							required
						/>
					</div>
				</div>

				<div className="mb-6">
					<label htmlFor="feedbackType" className="mb-2 block font-medium text-white">
						Feedback type
					</label>
					<select
						id="feedbackType"
						name="feedbackType"
						value={formState.feedbackType}
						onChange={handleChange}
						className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					>
						{feedbackTypes.map((type) => (
							<option key={type.id} value={type.id} className="bg-slate-800">
								{type.label}
							</option>
						))}
					</select>
				</div>

				{formState.feedbackType === 'feature' && (
					<div className="mb-6">
						<label htmlFor="feature" className="mb-2 block font-medium text-white">
							Feature area
						</label>
						<select
							id="feature"
							name="feature"
							value={formState.feature}
							onChange={handleChange}
							className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-invalid={formState.error && formState.feedbackType === 'feature' && !formState.feature}
							required
						>
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

				<div className="mb-6">
					<fieldset>
						<legend className="mb-2 block font-medium text-white">Your experience so far</legend>
						<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
							<span className="text-gray-400">Poor</span>
							<div className="flex gap-2">
								{[1, 2, 3, 4, 5].map((num) => (
									<label key={num} className="flex cursor-pointer flex-col items-center">
										<input
											type="radio"
											name="rating"
											value={num}
											checked={formState.rating === num.toString()}
											onChange={handleChange}
											className="sr-only"
											aria-label={`Rate ${num} out of 5`}
										/>
										<span
											className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-colors ${
												formState.rating === num.toString()
													? 'bg-blue-500 text-white'
													: 'bg-white/10 text-gray-300 hover:bg-white/20'
											}`}
										>
											{num}
										</span>
									</label>
								))}
							</div>
							<span className="text-gray-400">Excellent</span>
						</div>
					</fieldset>
				</div>

				<div className="mb-6">
					<label htmlFor="message" className="mb-2 block font-medium text-white">
						Your feedback
					</label>
					<textarea
						id="message"
						name="message"
						value={formState.message}
						onChange={handleChange}
						rows={6}
						className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-invalid={formState.error && !formState.message.trim()}
						placeholder="Share details, reproduction steps, or ideas…"
						required
					/>
				</div>

				<p className="mb-8 text-sm text-gray-400">
					By submitting, you agree that your name, email, and message may be processed to follow up on
					feedback. See the{' '}
					<Link href="/privacy" className="text-blue-400 hover:text-blue-300">
						Privacy Policy
					</Link>
					. Do not include passwords or secrets.
				</p>

				<div className="text-center">
					<button
						type="submit"
						disabled={formState.submitting}
						aria-busy={formState.submitting}
						className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-lg font-medium text-white transition hover:from-indigo-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 disabled:transform-none disabled:opacity-70"
					>
						{formState.submitting ? 'Submitting…' : 'Submit Feedback'}
					</button>
				</div>
			</form>
		</div>
	);
}
