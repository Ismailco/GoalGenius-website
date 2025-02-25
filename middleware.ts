import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
	matcher: [
		// Protect all routes except public ones
		'/((?!.+\\.[\\w]+$|_next).*)',
		'/(api|trpc)(.*)',
		'/((?!^$|^docs$|^sign-in$|^sign-up$).*)'
	],
};
