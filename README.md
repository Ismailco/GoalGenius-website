# Rungset Website

**The official website and public documentation for [Rungset](https://rungset.com), an open-source goal-planning app.**

[Visit Rungset](https://rungset.com) · [Open the app](https://app.rungset.com) · [Android app](https://play.google.com/store/apps/details?id=com.rungset.app) · [Application repository](https://github.com/Ismailco/Rungset) · [AGPL-3.0](LICENSE)

This repository contains the public-facing Rungset experience: product context, documentation, legal pages, and the routes that introduce people to the app. The [Rungset application repository](https://github.com/Ismailco/Rungset) remains the source of truth for product behavior and supported capabilities.

## What belongs here

- Clear, factual product positioning and documentation.
- Public routes, legal pages, metadata, social previews, sitemap, and robots configuration.
- A responsive, accessible introduction to the Rungset goal-planning workflow.

Product claims must match the application. Rungset currently supports goals, milestones, tasks, check-ins, notes, recurrence, reminders, export, and an Android app that opens the hosted web experience. Calendar sync, analytics, team features, an iOS app, AI features, and external reminder delivery are not shipped capabilities.

## Local development

**Prerequisites:** a current Node.js LTS release and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and checks

```bash
pnpm lint
pnpm build
```

The site uses a static Next.js export. `pnpm build` writes the deployable site to `out/`; image optimization is intentionally disabled because the static export does not include Next.js's runtime image service.

## Technology

- Next.js App Router and React
- TypeScript and Tailwind CSS
- Framer Motion, used sparingly with reduced-motion support
- Static export for Cloudflare Pages delivery

## Contributing

Keep public copy concise, accessible, and evidence-based. Before changing product claims, verify them against the [application repository](https://github.com/Ismailco/Rungset). Run lint and a production build for any site change.

## License

Rungset Website is licensed under the [GNU Affero General Public License v3.0](LICENSE).
