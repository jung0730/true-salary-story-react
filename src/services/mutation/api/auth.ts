import { post } from '@/utils/fetch';

export const postLogout = async () => {
  await post('/api/auth/logout');
};
