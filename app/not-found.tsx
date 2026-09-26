import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex flex-1 items-center justify-center px-4 py-24">
			<div className="max-w-lg text-center">
				<p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-400">404</p>
				<h1 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent">
					Page not found
				</h1>
				<p className="mb-8 text-gray-300">
					That URL does not exist on the Rungset website. Try the homepage or documentation instead.
				</p>
				<div className="flex flex-col justify-center gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Return Home
					</Link>
					<Link
						href="/docs"
						className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Documentation
					</Link>
				</div>
			</div>
		</main>
	);
}
