import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/share/:path*', '/login/:path*'],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  const token = request.cookies.get('token')?.value;
  if (pathname === '/share') {
    if (!token) {
      request.cookies.delete('token');
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.search = `?redirect_to=${pathname}`;
      return NextResponse.redirect(url);
    }
  }
  if (pathname === '/login') {
    const redirectUrl = searchParams.get('redirect_to');
    if (redirectUrl) {
      const response = NextResponse.next();
      response.cookies.set('redirectUrl', redirectUrl, { maxAge: 60 * 60 });
      return response;
    }
    if (token) {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
