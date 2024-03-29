import { get } from '@/utils/fetch';
import { UserType } from '@/types/api';

export const getProfile = async () => {
  const res = await get<UserType>('/api/user/profile');
  const { data } = res;
  return data.user;
};
