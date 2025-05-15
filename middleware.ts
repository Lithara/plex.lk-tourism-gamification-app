import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const { pathname } = request.nextUrl;

  // Define protected routes that require authentication
  const protectedRoutes = [
    "/feed",
    "/leaderboard",
    "/visa-process",
    "/account",
  ];

  // Define auth routes (login/register pages)
  const authRoutes = ["/authentication/sign-in", "/authentication/sign-up"];

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  // Get the authentication token from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Case 1: Protected route but user is not authenticated
  if (isProtectedRoute && !token) {
    // Create the callback URL to redirect back after login
    const callbackUrl = encodeURIComponent(pathname);
    const redirectUrl = new URL(
      `/authentication/sign-in?callbackUrl=${callbackUrl}`,
      request.url
    );

    return NextResponse.redirect(redirectUrl);
  }

  // Case 2: Auth route but user is already authenticated
  if (isAuthRoute && token) {
    // Redirect to dashboard if user is already logged in
    return NextResponse.redirect(new URL("/", request.url));
  }

  // For all other cases, continue with the request
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (/api/*)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
