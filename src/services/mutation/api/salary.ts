import { post } from '@/utils/fetch';
import type { SubmitPost } from '@/types/salary';

type ResPostSalary = {
  message: string;
  result: {
    title: string;
    companyName: string;
    point: number;
  };
};

export const postSalary = async (data: SubmitPost) => {
  const { result } = await post<ResPostSalary>('/api/salary', data);
  return result;
};
