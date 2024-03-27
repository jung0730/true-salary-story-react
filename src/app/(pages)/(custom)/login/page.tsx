'use client';
import { useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { useSearchParams, useRouter } from 'next/navigation';
import LoginAction from '@/components/Login/LoginAction';
import { useCookie } from '@/hooks/useCookie';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { redirectUrl } = useCookie();
  const encodedTokens = searchParams.get('tokens');
  useEffect(() => {
    const checkLoginStatus = () => {
      if (encodedTokens) {
        const tokens = JSON.parse(window.atob(encodedTokens));
        setCookie('token', tokens.token, { maxAge: 60 * 60 });
        router.push(redirectUrl || '/');
      }
    };
    checkLoginStatus();
  }, [encodedTokens, redirectUrl, router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray">
      <div className="w-10/12 border-2 bg-white p-10 md:w-[400px]">
        <h2 className="mt-5 text-2xl text-blue md:text-3xl">有比較才有進步</h2>
        <div className="mt-10">
          <LoginAction />
        </div>
        <div className="mt-10 text-sm text-black-5">
          繼續代表你同意真薪話「服務條款」與「隱私權政策」。真薪話不會將您的個人資訊用於任何商業用途,或公開顯示在畫面中。
        </div>
      </div>
    </div>
  );
}
