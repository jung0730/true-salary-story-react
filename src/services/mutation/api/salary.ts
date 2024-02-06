import { post } from '@/utils/fetch';
import type { SubmitPost } from '@/types/salary';

type ResPostSalary = {
  message: string;
  data: {
    title: string;
    companyName: string;
    point: number;
  };
};

export const postSalary = async (info: SubmitPost) => {
  const { data } = await post<ResPostSalary>('/api/salary', info);
  return data;
};
