import { getCookie } from 'cookies-next';
import { useRouter} from 'next/navigation';

export const useGlobalAuth = () => {
  const router = useRouter();
  const token = getCookie('token');
  const isLogin = Boolean(token);
  const redirectToLogin = () => {
    if (!isLogin) {
      return router.push('/login');
    }
  };

  return {
    isLogin,
    redirectToLogin,
  };
};

export default useGlobalAuth;
