import { get } from '../../../utils/fetch';

export const getProfile = async () => {
  const res = await get('/api/user/profile');
  const { data } = res;
  return data.user;
};
