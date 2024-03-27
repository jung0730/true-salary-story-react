import { getCookie } from 'cookies-next';

export const useCookie = () => {
  const token = getCookie('token');
  return {
    token,
  };
};

export default useCookie;
