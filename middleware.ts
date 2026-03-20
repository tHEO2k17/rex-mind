import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/dashboard",
  "/identity",
  "/insights",
  "/talents",
  "/mentor",
  "/challenges",
  "/community",
  "/settings",
];

const authRedirectPaths = ["/login", "/register", "/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authRedirectPaths.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/identity/:path*",
    "/insights/:path*",
    "/talents/:path*",
    "/mentor/:path*",
    "/challenges/:path*",
    "/community/:path*",
    "/settings/:path*",
    "/login",
    "/register",
    "/",
  ],
};
