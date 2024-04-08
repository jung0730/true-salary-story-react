import { getCookie, deleteCookie } from 'cookies-next';

export const useCookie = () => {
  const token = getCookie('token');
  const redirectUrl = getCookie('redirectUrl');
  const removeCookie = (name: string) => {
    deleteCookie(name);
  };
  return {
    token,
    redirectUrl,
    removeCookie,
  };
};

export default useCookie;
