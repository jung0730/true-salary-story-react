import { post } from '@/utils/fetch';
import { SubmitPost } from '@/types/salary';
import { Salary, SalaryPermission } from '@/types/api';

export const postSalary = async (info: SubmitPost) => {
  const { data } = await post<Salary>('/api/salary', info);
  return data;
};

export const postSalaryPermission = async (id: string) => {
  const res = await post<SalaryPermission>(`/api/salary/${id}/permission`);
  const { result } = res;
  return result.postId;
};
