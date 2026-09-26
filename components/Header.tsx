'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { APP_SIGN_IN_URL, APP_URL, GITHUB_REPO_URL } from '@/lib/site';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/docs', label: 'Docs' },
  { href: GITHUB_REPO_URL, label: 'GitHub', external: true },
] as const;

const linkClassName =
  'rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#1556d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]';

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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="site-container flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f7df6]"
          aria-label="Rungset home"
        >
          <Image
            src="/brand/rungset-logo-full.png"
            alt="Rungset"
            width={190}
            height={45}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            'external' in link && link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            ),
          )}
          <a href={APP_SIGN_IN_URL} className={linkClassName}>Sign in</a>
          <a
            href={APP_URL}
            className="ml-2 inline-flex items-center rounded-full bg-[#102866] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(16,40,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]"
          >
            Open Rungset
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-[#102866] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6] md:hidden"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id={menuId} className={`border-t border-slate-200 bg-white md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="site-container flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) =>
            'external' in link && link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClassName} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={linkClassName} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ),
          )}
          <a href={APP_SIGN_IN_URL} className={linkClassName} onClick={() => setIsOpen(false)}>Sign in</a>
          <a href={APP_URL} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#102866] px-5 py-3 text-base font-bold text-white" onClick={() => setIsOpen(false)}>
            Open Rungset
          </a>
        </nav>
      </div>
    </header>
  );
}
