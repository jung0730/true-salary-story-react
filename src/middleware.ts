import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/share/:path*',
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    request.cookies.delete('token');
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
