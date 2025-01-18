// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { bindD1Database } from '@/app/lib/db/config';

const middleware = async (request: NextRequest, context: any) => {
	// Bind D1 database before any other middleware
	// @ts-ignore - D1 is injected by Cloudflare
	if (context?.env?.DB) {
		console.log('D1 database found in context.env');
		// @ts-ignore
		bindD1Database(context.env.DB);
	} else {
		console.log('No D1 database found in context.env', {
			context: JSON.stringify(context, null, 2),
		});
	}

	return clerkMiddleware()(request, context);
};

export default middleware;

export const config = {
	matcher: [
		'/dashboard/:path*',
		'/api/goals/:path*',
		'/api/milestones/:path*',
	],
};

