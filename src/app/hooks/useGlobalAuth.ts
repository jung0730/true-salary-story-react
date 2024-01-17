import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export const useGlobalAuth = () => {
  const token = getCookie('token');
  const isLogin = Boolean(token);
  const redirectToLogin = () => {
    if (!isLogin) {
      return redirect('/login');
    }
  };

  return {
    isLogin,
    redirectToLogin,
  };
};

export default useGlobalAuth;
