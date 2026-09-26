'use client';

import Link from 'next/link';

export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
			<div className="text-center">
				<p className="page-kicker">Something went wrong</p>
				<h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#102866]">Please try again.</h2>
				<p className="mt-4 text-lg leading-8 text-slate-600">If the problem continues, return to the homepage.</p>
				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<button
						type="button"
						onClick={reset}
						className="inline-flex items-center rounded-full bg-[#102866] px-6 py-3 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Try again
					</button>
					<Link
						href="/"
						className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
