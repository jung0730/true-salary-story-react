import { post } from '@/utils/fetch';

export const postSalary = async (data) => {
  const { result } = await post('/api/salary', data);
  return result;
};
