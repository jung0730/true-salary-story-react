import { post } from '@/utils/fetch';
import { Order } from '@/types/checkout';

type ResOrder = {
  message: string;
  data: {
    transactionId: string;
  };
};

type ResTransaction = {
  message: string;
  data: {
    paymentUrl: string;
  };
};

export const postOrder = async (params: Order) => {
  const { data } = await post<ResOrder>('/linepay/order', params);
  return data.transactionId;
};

export const postTransaction = async (transactionId: string) => {
  const { data } = await post<ResTransaction>(`/linepay/${transactionId}`);
  return data.paymentUrl;
};
