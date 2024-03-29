import { post } from '@/utils/fetch';
import { SubmitPost } from '@/types/salary';
import { Salary } from '@/types/api';

export const postSalary = async (info: SubmitPost) => {
  const { data } = await post<Salary>('/api/salary', info);
  return data;
};
