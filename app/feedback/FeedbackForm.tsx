'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { APP_URL } from '@/lib/site';

const FEEDBACK_ENDPOINT = 'https://feedback.rungset.com';

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
	{ id: 'mobile', label: 'Android app / mobile experience' },
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
			<div className="site-card mx-auto max-w-2xl p-8 text-center">
				<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
					<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h2 className="text-3xl font-black tracking-[-0.04em] text-[#102866]">Thank you</h2>
				<p className="mt-4 text-slate-600">Your feedback was submitted and will help improve Rungset.</p>
				<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Return Home
					</Link>
					<a
						href={APP_URL}
						className="inline-flex items-center justify-center rounded-full bg-[#102866] px-6 py-3 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Open App
					</a>
				</div>
			</div>
		);
	}

	return (
		<div className="site-card mx-auto max-w-2xl p-6 sm:p-8">
			{formState.error && (
				<div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700" role="alert" aria-live="polite">
					{formState.errorMessage}
				</div>
			)}

			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label htmlFor="name" className="mb-2 block text-sm font-bold text-[#102866]">
							Your name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formState.name}
							onChange={handleChange}
							autoComplete="name"
							className="field-control"
							aria-invalid={formState.error && !formState.name.trim()}
							placeholder="Jane Doe"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="mb-2 block text-sm font-bold text-[#102866]">
							Email address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
							autoComplete="email"
							className="field-control"
							aria-invalid={formState.error && (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email))}
							placeholder="you@example.com"
							required
						/>
					</div>
				</div>

				<div className="mb-6">
					<label htmlFor="feedbackType" className="mb-2 block text-sm font-bold text-[#102866]">
						Feedback type
					</label>
					<select
						id="feedbackType"
						name="feedbackType"
						value={formState.feedbackType}
						onChange={handleChange}
						className="field-control"
						required
					>
						{feedbackTypes.map((type) => (
							<option key={type.id} value={type.id}>
								{type.label}
							</option>
						))}
					</select>
				</div>

				{formState.feedbackType === 'feature' && (
					<div className="mb-6">
						<label htmlFor="feature" className="mb-2 block text-sm font-bold text-[#102866]">
							Feature area
						</label>
						<select
							id="feature"
							name="feature"
							value={formState.feature}
							onChange={handleChange}
							className="field-control"
							aria-invalid={formState.error && formState.feedbackType === 'feature' && !formState.feature}
							required
						>
							<option value="">
								Select a feature area
							</option>
							{featureOptions.map((option) => (
								<option key={option.id} value={option.id}>
									{option.label}
								</option>
							))}
						</select>
					</div>
				)}

				<div className="mb-6">
					<fieldset>
						<legend className="mb-2 block text-sm font-bold text-[#102866]">Your experience so far</legend>
						<div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
							<span className="text-sm text-slate-500">Poor</span>
							<div className="flex gap-2">
								{[1, 2, 3, 4, 5].map((num) => (
									<label key={num} className="flex cursor-pointer flex-col items-center">
										<input
											type="radio"
											name="rating"
											value={num}
											checked={formState.rating === num.toString()}
											onChange={handleChange}
											className="peer sr-only"
											aria-label={`Rate ${num} out of 5`}
										/>
										<span
											className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2f7df6] ${
												formState.rating === num.toString()
													? 'bg-[#2f7df6] text-white'
													: 'bg-white text-slate-600 hover:bg-blue-50'
												}`}
										>
											{num}
										</span>
									</label>
								))}
							</div>
							<span className="text-sm text-slate-500">Excellent</span>
						</div>
					</fieldset>
				</div>

				<div className="mb-6">
					<label htmlFor="message" className="mb-2 block text-sm font-bold text-[#102866]">
						Your feedback
					</label>
					<textarea
						id="message"
						name="message"
						value={formState.message}
						onChange={handleChange}
						rows={6}
						className="field-control"
						aria-invalid={formState.error && !formState.message.trim()}
						placeholder="Share details, reproduction steps, or ideas…"
						required
					/>
				</div>

				<p className="mb-8 text-sm leading-6 text-slate-500">
					By submitting, you agree that your name, email, and message may be processed to follow up on
					feedback. See the{' '}
					<Link href="/privacy" className="font-semibold text-[#1556d8] underline underline-offset-2 hover:text-[#102866]">
						Privacy Policy
					</Link>
					. Do not include passwords or secrets.
				</p>

				<div className="text-center">
					<button
						type="submit"
						disabled={formState.submitting}
						aria-busy={formState.submitting}
						className="inline-flex items-center rounded-full bg-[#102866] px-8 py-3 text-base font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6] disabled:transform-none disabled:opacity-70"
					>
						{formState.submitting ? 'Submitting…' : 'Submit Feedback'}
					</button>
				</div>
			</form>
		</div>
	);
}
