import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex flex-1 items-center px-4 py-24">
			<div className="mx-auto max-w-lg text-center">
				<p className="page-kicker">404</p>
				<h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#102866]">
					Page not found
				</h1>
				<p className="mt-5 text-lg leading-8 text-slate-600">
					That URL does not exist on the Rungset website. Try the homepage or documentation instead.
				</p>
				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-full bg-[#102866] px-6 py-3 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Return Home
					</Link>
					<Link
						href="/docs"
						className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
					>
						Documentation
					</Link>
				</div>
			</div>
		</main>
	);
}
