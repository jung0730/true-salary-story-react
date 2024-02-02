import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { setCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export const config = {
  matcher: ['/share/:path*', '/login/:path*'],
};

export async function middleware(request: NextRequest) {
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
      response.cookies.set('redirectUrl', redirectUrl);
      return response;
    }
    // const encodedTokens = searchParams.get('tokens');
    // // if (redirectUrl && token) {
    // //   return NextResponse.redirect(redirectUrl)
    // // }
    // if (encodedTokens) {
    //   const decodedTokensBuffer = Buffer.from(encodedTokens, 'base64');
    //   const decodedTokensString = decodedTokensBuffer.toString('utf-8');

    //   const tokens = JSON.parse(decodedTokensString);
    //   setCookie('token', tokens.token, { maxAge: 60 * 60 });
    //   console.log(tokens.token)
    //   // cookies().set('token', tokens.token, { maxAge: 60 * 60 })
    //   const url = request.nextUrl.clone();
    //   url.pathname = '/'
    //   return NextResponse.redirect(url)
    // }

    if (token) {
      return NextResponse.redirect('/');
    }
  }
  return NextResponse.next();
}
