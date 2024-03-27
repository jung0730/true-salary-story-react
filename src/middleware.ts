import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
  const requiresAuthentication =
    pathname.startsWith('/checkout') || pathname.startsWith('/share') || pathname.startsWith('/order');

  if (!currentUser && requiresAuthentication) {
    return Response.redirect(new URL(`/login/?redirect_to=${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
