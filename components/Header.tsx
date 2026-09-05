'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { APP_SIGN_IN_URL, APP_URL, GITHUB_REPO_URL, SITE_NAME } from '@/lib/site';

const navLinks = [
	{ href: '/#features', label: 'Features' },
	{ href: '/#roadmap', label: 'Roadmap' },
	{ href: '/docs', label: 'Docs' },
	{ href: GITHUB_REPO_URL, label: 'GitHub', external: true },
] as const;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuId = useId();

	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('keydown', onKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/85 backdrop-blur-md">
			<div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
				<Link
					href="/"
					className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
				>
					{SITE_NAME}
				</Link>

				<nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
					{navLinks.map((link) =>
						'external' in link && link.external ? (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-gray-200 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-gray-200 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
							>
								{link.label}
							</Link>
						),
					)}
					<a
						href={APP_SIGN_IN_URL}
						className="text-sm font-medium text-gray-200 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Sign In
					</a>
					<a
						href={APP_URL}
						className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:from-indigo-600 hover:to-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Try GoalGenius
					</a>
				</nav>

				<button
					type="button"
					className="inline-flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 md:hidden"
					aria-expanded={isOpen}
					aria-controls={menuId}
					onClick={() => setIsOpen((open) => !open)}
				>
					<span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
					{isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
				</button>
			</div>

			<div
				id={menuId}
				className={`border-t border-white/10 bg-slate-900/95 md:hidden ${isOpen ? 'block' : 'hidden'}`}
			>
				<nav className="container mx-auto flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
					{navLinks.map((link) =>
						'external' in link && link.external ? (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.href}
								href={link.href}
								className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						),
					)}
					<a
						href={APP_SIGN_IN_URL}
						className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
						onClick={() => setIsOpen(false)}
					>
						Sign In
					</a>
					<a
						href={APP_URL}
						className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
						onClick={() => setIsOpen(false)}
					>
						Try GoalGenius
					</a>
				</nav>
			</div>
		</header>
	);
}
