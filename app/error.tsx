'use client';

import Link from 'next/link';

export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex min-h-[60vh] items-center justify-center px-4">
			<div className="text-center">
				<h2 className="mb-4 text-3xl font-bold text-white">Something went wrong</h2>
				<p className="mb-8 text-gray-300">Please try again, or return to the homepage.</p>
				<div className="flex flex-wrap justify-center gap-4">
					<button
						type="button"
						onClick={reset}
						className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Try again
					</button>
					<Link
						href="/"
						className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
