import { getCookie } from 'cookies-next';

export const useCookie = () => {
  const token = getCookie('token');
  const redirectUrl = getCookie('redirectUrl');
  return {
    token,
    redirectUrl,
  };
};

export default useCookie;
