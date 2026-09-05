import Link from 'next/link';
import {
	APP_URL,
	CONTACT_EMAIL,
	GITHUB_REPO_URL,
	LICENSE_NAME,
	LICENSE_URL,
	SITE_NAME,
	SITE_TAGLINE,
} from '@/lib/site';

const productLinks = [
	{ href: '/#features', label: 'Features' },
	{ href: '/#roadmap', label: 'Roadmap' },
	{ href: '/docs', label: 'Documentation' },
	{ href: APP_URL, label: 'Open App', external: true },
] as const;

const projectLinks = [
	{ href: GITHUB_REPO_URL, label: 'GitHub', external: true },
	{ href: LICENSE_URL, label: `${LICENSE_NAME} License`, external: true },
	{ href: `${GITHUB_REPO_URL}#contributing`, label: 'Contribute', external: true },
	{ href: '/donate', label: 'Support / Donate' },
] as const;

const legalLinks = [
	{ href: '/privacy', label: 'Privacy' },
	{ href: '/terms', label: 'Terms' },
] as const;

function FooterLink({
	href,
	label,
	external,
}: {
	href: string;
	label: string;
	external?: boolean;
}) {
	const className =
		'text-sm text-gray-400 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400';

	if (external) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className={className}>
				{label}
			</a>
		);
	}

	return (
		<Link href={href} className={className}>
			{label}
		</Link>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 bg-slate-950/80">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<p className="text-lg font-bold text-white">{SITE_NAME}</p>
						<p className="mt-2 max-w-sm text-sm text-gray-400">{SITE_TAGLINE}</p>
						<p className="mt-4 text-sm text-gray-500">
							Open source under {LICENSE_NAME}. Hosted beta is currently free.
						</p>
					</div>

					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Product</p>
						<ul className="space-y-2">
							{productLinks.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Project</p>
						<ul className="space-y-2">
							{projectLinks.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Legal</p>
						<ul className="space-y-2">
							{legalLinks.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
							<li>
								<FooterLink href="/feedback" label="Feedback" />
							</li>
							<li>
								<a
									href={`mailto:${CONTACT_EMAIL}`}
									className="text-sm text-gray-400 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
					<p>
						© {year} {SITE_NAME}. Source available on{' '}
						<a
							href={GITHUB_REPO_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	);
}
