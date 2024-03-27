import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
  const requiresAuthentication =
    pathname.startsWith('/checkout') || pathname.startsWith('/share') || pathname.startsWith('/order');
  if (!currentUser && requiresAuthentication) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set('redirectUrl', pathname, { maxAge: 60 * 60 });
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
