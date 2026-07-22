import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// 1. PUBLIC ROUTES
// We include "/" and "/home(.*)" here so unauthenticated users can see the main feed.
const isPublicRoute = createRouteMatcher([
    '/',
    '/home(.*)', 
    '/social-share(.*)', // Adding this based on your earlier requirement
    '/sign-in(.*)',
    '/sign-up(.*)'
]);

// 2. PUBLIC API ROUTES
const isPublicApiRoute = createRouteMatcher([
    '/api/videos'
]);

// 3. AUTH-ONLY PAGES (Pages logged-in users shouldn't see)
const isAuthPage = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
    // Clerk v5 strictly requires await here
    const { userId } = await auth();
    const currentUrl = new URL(req.url);
    const isApiRequest = currentUrl.pathname.startsWith('/api');
    const isRoot = currentUrl.pathname === '/';

    // --- RULE 1: Redirect Logged-In Users ---
    // If logged in and they hit "/", or a sign-in/sign-up page, send them to "/home"
    if (userId && (isAuthPage(req) || isRoot)) {
        return NextResponse.redirect(new URL('/home', req.url));
    }

    // --- RULE 2: Implicit Deny (Secure by Default) ---
    // If the user is NOT logged in, and the route is NOT whitelisted as public...
    if (!userId && !isPublicRoute(req) && !isPublicApiRoute(req)) {
        
        // Return a proper 401 JSON for blocked API requests so Axios/fetch doesn't crash
        if (isApiRequest) {
            return new NextResponse(
                JSON.stringify({ error: 'Unauthorized access' }), 
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
        }
        
        // Redirect unauthorized page access to the sign-in screen
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};