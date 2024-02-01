import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export const useGlobalAuth = () => {
  const token = getCookie('token');
  const checkAuthToken = () => {
    if (!!token) {
      return redirect('/login');
    }
  };

  return {
    token,
    checkAuthToken,
  };
};

export default useGlobalAuth;
