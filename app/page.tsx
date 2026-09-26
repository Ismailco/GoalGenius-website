import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  ListTodo,
  Milestone,
  NotebookPen,
  ShieldCheck,
  Target,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  APP_URL,
  DEFAULT_OG_IMAGE,
  GITHUB_REPO_URL,
  LICENSE_NAME,
  LICENSE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} - ${SITE_TAGLINE}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: { canonical: SITE_URL },
  keywords: [
    'open-source goal tracker',
    'goal planning',
    'milestone tracking',
    'task management',
    'progress check-ins',
    'personal productivity',
  ],
};

const workflow = [
  {
    title: 'Name the outcome',
    description: 'Start with a goal that gives the work a clear direction and a useful definition of progress.',
    icon: Target,
  },
  {
    title: 'Add the rungs',
    description: 'Break the outcome into milestones and tasks that make the next step obvious.',
    icon: Milestone,
  },
  {
    title: 'Review the climb',
    description: 'Use check-ins and notes to see what moved, what blocked you, and what to adjust next.',
    icon: CircleCheckBig,
  },
];

const features = [
  { title: 'Goals & milestones', description: 'Keep the outcome visible, then map the checkpoints that move it forward.', icon: Target },
  { title: 'Tasks with context', description: 'Turn milestones into practical work with priorities, due dates, and completion history.', icon: ListTodo },
  { title: 'Progress check-ins', description: 'Capture wins, blockers, energy, and the next focus while the detail is still fresh.', icon: CircleCheckBig },
  { title: 'Notes beside the work', description: 'Keep Markdown notes and important context close to the goals they support.', icon: NotebookPen },
  { title: 'Offline-ready workspace', description: 'Continue reviewing and capturing work with the existing offline cache and sync flow.', icon: Milestone },
  { title: 'Your data stays yours', description: 'Export workspace data as JSON, inspect the source, or self-host under AGPLv3.', icon: ShieldCheck },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires a modern web browser',
  url: APP_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: `Hosted beta access is currently free. Open source under ${LICENSE_NAME}.`,
  },
  featureList: [
    'Goal tracking',
    'Milestone tracking',
    'Todo and task management',
    'Markdown notes',
    'Progress check-ins',
    'Workspace JSON export',
    'Self-hosting under AGPLv3',
  ],
  softwareVersion: '0.1.0',
  license: LICENSE_URL,
};

export default function HomePage() {
  return (
    <main className="rungset-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-slate-200 bg-white" aria-labelledby="hero-heading">
        <div className="site-container grid gap-12 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20 lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">Goal execution, with momentum</p>
            <h1 id="hero-heading" className="mt-6 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#102866] sm:text-6xl">
              Turn intentions into <span className="bg-gradient-to-r from-[#1267ed] via-[#10bde4] to-[#7345ef] bg-clip-text text-transparent">steady progress.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Rungset gives goals a structure: milestones, tasks, notes, and weekly check-ins that keep the next step visible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={APP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102866] px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_rgba(16,40,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">
                Start your climb <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">
                See how it works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#1556d8]" aria-hidden="true" /> Open source</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#1556d8]" aria-hidden="true" /> Hosted beta is free</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#1556d8]" aria-hidden="true" /> Export anytime</span>
            </div>
          </div>

          <div className="site-card overflow-hidden p-2 sm:p-3">
            <Image
              src="/brand/rungset-banner.png"
              alt="Rungset brand artwork showing a path of glowing rungs leading upward"
              width={1731}
              height={909}
              className="h-auto w-full rounded-[1.15rem]"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 py-20" aria-labelledby="workflow-heading">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">A clear loop</p>
            <h2 id="workflow-heading" className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#102866] sm:text-4xl">Every rung makes the next one easier to see.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Rungset keeps planning and follow-through in the same place, so progress is something you can review—not just hope for.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workflow.map(({ title, description, icon: Icon }, index) => (
              <AnimatedSection key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="site-card p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1556d8]"><Icon className="h-6 w-6" aria-hidden="true" /></div>
                  <span className="text-sm font-black text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold text-[#102866]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 border-y border-slate-200 bg-[#f0f5ff] py-20" aria-labelledby="features-heading">
        <div className="site-container">
          <div className="text-center">
            <p className="eyebrow">Built for the current climb</p>
            <h2 id="features-heading" className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] text-[#102866] sm:text-4xl">Practical tools for meaningful progress.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">The current app focuses on the goal → milestone → task → check-in loop. No speculative feature claims—just the work that ships today.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }, index) => (
              <AnimatedSection key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(24,58,145,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-[#1556d8]"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mt-6 text-lg font-extrabold text-[#102866]">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="open-source-heading">
        <div className="site-container">
          <div className="grid gap-10 rounded-[2rem] bg-[#102866] p-8 text-white shadow-[0_24px_60px_rgba(16,40,102,0.2)] md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-12">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#74dfff]">Open source by default</p>
              <h2 id="open-source-heading" className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">Keep the product close to the work—and the code close to you.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">Use the hosted beta, export your workspace, inspect the implementation, or self-host under {LICENSE_NAME}. Rungset is built to stay understandable.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={APP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#102866] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Open the beta <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">View source</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-100">The product truth</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-blue-50">
                <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-[#74dfff]" aria-hidden="true" />Goals, milestones, tasks, notes, and check-ins ship today.</li>
                <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-[#74dfff]" aria-hidden="true" />Hosted users can export workspace data as JSON.</li>
                <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-[#74dfff]" aria-hidden="true" />Analytics, calendar sync, native apps, and AI remain future work.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20" aria-labelledby="final-cta-heading">
        <div className="site-container text-center">
          <p className="eyebrow">Set goals. Keep climbing.</p>
          <h2 id="final-cta-heading" className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#102866] sm:text-5xl">Make the next rung visible.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Start with one outcome, add the next milestone, and let a consistent review turn effort into momentum.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102866] px-7 py-3.5 font-bold text-white transition hover:bg-[#183c91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">Start with Rungset <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <Link href="/docs" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3.5 font-bold text-[#102866] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7df6]">Read the docs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
