import { get } from '@/utils/fetch';
import type { User } from '@/types/user';

type ResUserType = {
  data: {
    user: User;
  };
};

export const getProfile = async () => {
  const res = await get<ResUserType>('/api/user/profile');
  const { data } = res;
  return data.user;
};
