import { getCookie } from 'cookies-next';
import { useRouter} from 'next/navigation';

export const useGlobalAuth = () => {
  const router = useRouter();
  const token = getCookie('token');
  const redirectToLogin = () => {
    if (!token) {
      return router.push('/login');
    }
  };

  return {
    redirectToLogin,
  };
};

export default useGlobalAuth;
