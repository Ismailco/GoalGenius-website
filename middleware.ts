import { clerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { isProtectedRoute } from './app/constants/routes';

export default clerkMiddleware(async (_, req) => {
	const { userId } = getAuth(req);
	const url = new URL(req.url);
	const isAppSubdomain = url.hostname.startsWith('app.');

	if (isAppSubdomain) {
		// On app subdomain - require authentication for all routes
		if (!userId) {
			const signInUrl = new URL('/sign-in', url);
			signInUrl.hostname = url.hostname.replace('app.', '');
			return NextResponse.redirect(signInUrl);
		}
		// Continue with protection
		return NextResponse.next();
	} else {
		// On main domain - only protect specific routes
		if (isProtectedRoute(url.pathname)) {
			const appUrl = new URL(url);
			appUrl.hostname = `app.${url.hostname}`;
			return NextResponse.redirect(appUrl);
		}
		return NextResponse.next();
	}
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};
