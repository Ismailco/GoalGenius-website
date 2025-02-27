 // Marketing/Public website routes
export const PUBLIC_ROUTES = {
  HOME: '/',
  DOCS: '/docs',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

// Protected app routes
export const APP_ROUTES = {
  DASHBOARD: '/dashboard',
  NOTES: '/notes',
  TODOS: '/todos',
  CHECKINS: '/checkins',
  SETTINGS: '/settings',
} as const;

// Authentication routes (handled by Clerk)
export const AUTH_ROUTES = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

// Helper function to check if a route is public
export const isPublicRoute = (path: string) => {
  return Object.values(PUBLIC_ROUTES).includes(path as any) ||
    Object.values(AUTH_ROUTES).includes(path as any) ||
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.includes('.');
};

// Helper function to check if a route is protected
export const isProtectedRoute = (path: string) => {
  return Object.values(APP_ROUTES).some(route =>
    path === route || path.startsWith(`${route}/`)
  );
};
