// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { bindD1Database } from '@/app/lib/db/config';

const middleware = async (request: NextRequest, event: any) => {
	// Bind D1 database before any other middleware
	// @ts-ignore - D1 is injected by Cloudflare
	if (request.platform?.env?.DB) {
		// @ts-ignore
		bindD1Database(request.platform.env.DB);
	}

	return clerkMiddleware()(request, event);
};

export default middleware;

export const config = {
	matcher: [
		'/dashboard/:path*',
		'/api/goals/:path*',
		'/api/milestones/:path*',
	],
};

