'use client';
import { useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { useSearchParams, useRouter } from 'next/navigation';
import LoginAction from '@/components/Login/LoginAction';
import useAuthStore from '@/stores/auth';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { currentPath } = useAuthStore();
  useEffect(() => {
    const checkLoginStatus = () => {
      const encodedTokens = searchParams.get('tokens');
      if (encodedTokens) {
        const tokens = JSON.parse(window.atob(encodedTokens));
        setCookie('token', tokens.token, { maxAge: 60 * 60 });
        setCookie('refreshToken', tokens.refreshToken, { maxAge: 60 * 60 * 24 * 30 });
        router.push(currentPath || '/');
      }
    };
    checkLoginStatus();
  }, [searchParams, router, currentPath]);

  return (
    <div className="bg-gray h-screen w-screen flex justify-center items-center">
      <div className="login-box bg-white border-2 p-10 w-10/12 md:w-[400px]">
        <h2 className="text-blue mt-5 md:text-3xl text-2xl">有比較才有進步</h2>
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
