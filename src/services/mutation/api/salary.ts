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

export const postOrder = async (params) => {
  const { data } = await post('/api/linepay/order', param);
  return data.transactionId;
};

export const postTransaction = async (transactionId: string) => {
  const { data } = await post(`/linepay/${transactionId}`, transactionId);
  return data.paymentUrl;
};
