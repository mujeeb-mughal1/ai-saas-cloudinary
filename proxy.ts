import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Added (.*) to handle sub-routes properly
const isPublicRoute = createRouteMatcher([
    "/signin(.*)",
    "/signup(.*)",
    "/",
    "/home(.*)",
]);

const isPublicApiRoute = createRouteMatcher([
    "/api(.*)" 
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();
    const currentUrl = new URL(req.url);
    const isAccessingDashboard = currentUrl.pathname === "/home";
    const isApiRequest = currentUrl.pathname.startsWith("/api");

    // 1. Redirect logged-in users away from public pages (like signin) to the dashboard
    if (userId && isPublicRoute(req) && !isAccessingDashboard) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // 2. Protect routes for unauthenticated users
    if (!userId) {
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
            // For API requests, return a standard 401 instead of a redirect
            if (isApiRequest) {
                return new NextResponse("Unauthorized", { status: 401 });
            }
            // For standard page requests, redirect to signin
            return NextResponse.redirect(new URL("/signin", req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};