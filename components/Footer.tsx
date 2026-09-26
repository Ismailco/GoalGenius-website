import Image from 'next/image';
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
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/docs', label: 'Documentation' },
  { href: APP_URL, label: 'Open app', external: true },
] as const;

const projectLinks = [
  { href: GITHUB_REPO_URL, label: 'GitHub', external: true },
  { href: LICENSE_URL, label: `${LICENSE_NAME} license`, external: true },
  { href: `${GITHUB_REPO_URL}#contributing`, label: 'Contribute', external: true },
  { href: '/donate', label: 'Support the project' },
] as const;

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/feedback', label: 'Feedback' },
] as const;

const footerLinkClass =
  'text-sm text-slate-500 transition-colors hover:text-[#1556d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]';

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>{label}</a>;
  }
  return <Link href={href} className={footerLinkClass}>{label}</Link>;
}
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Image src="/brand/rungset-logo-full.png" alt="Rungset" width={190} height={45} className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">{SITE_TAGLINE}. A focused workspace for turning long-term goals into visible next steps.</p>
            <p className="mt-4 text-sm text-slate-400">Open source under {LICENSE_NAME}. Hosted beta access is currently free.</p>
          </div>

          <div>
            <p className="footer-heading">Product</p>
            <ul className="space-y-3">
              {productLinks.map((link) => <li key={link.href}><FooterLink {...link} /></li>)}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Project</p>
            <ul className="space-y-3">
              {projectLinks.map((link) => <li key={link.href}><FooterLink {...link} /></li>)}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((link) => <li key={link.href}><FooterLink {...link} /></li>)}
              <li><a href={`mailto:${CONTACT_EMAIL}`} className={footerLinkClass}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. Built in public.</p>
          <p>Small steps, reviewed consistently, compound.</p>
        </div>
      </div>
    </footer>
  );
}
