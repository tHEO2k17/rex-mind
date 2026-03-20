import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Protect Dashboard / internal routes
  if (request.nextUrl.pathname.startsWith('/dashboard') || 
      request.nextUrl.pathname.startsWith('/identity') || 
      request.nextUrl.pathname.startsWith('/insights') || 
      request.nextUrl.pathname.startsWith('/talents') || 
      request.nextUrl.pathname.startsWith('/mentor') || 
      request.nextUrl.pathname.startsWith('/challenges') || 
      request.nextUrl.pathname.startsWith('/community') || 
      request.nextUrl.pathname.startsWith('/settings')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Prevent logged-in users from seeing Auth screens
  if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register' || request.nextUrl.pathname === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*', 
    '/identity/:path*', 
    '/insights/:path*', 
    '/talents/:path*', 
    '/mentor/:path*', 
    '/challenges/:path*', 
    '/community/:path*', 
    '/settings/:path*', 
    '/login', 
    '/register',
    '/'
  ],
};
