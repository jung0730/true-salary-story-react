import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
  const requiresAuthentication = ['/checkout', '/share', '/plan', '/order', '/salary'].some((path) =>
    pathname.startsWith(path)
  );
  const isLoggedIn = !!currentUser;
  if (!isLoggedIn && (pathname === '/' || requiresAuthentication)) {
    const response =
      pathname === '/' || pathname.startsWith('/salary')
        ? NextResponse.next()
        : NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set('redirectUrl', pathname);
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
