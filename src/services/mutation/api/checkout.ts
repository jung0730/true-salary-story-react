import { post } from '@/utils/fetch';
import { Order } from '@/types/checkout';
import { TransactionID, Payment } from '@/types/api';

export const postOrder = async (params: Order) => {
  const res = await post<TransactionID>('/linepay/order', params);
  const { data } = res;
  return data.transactionId;
};

export const postTransaction = async (transactionId: string) => {
  const res = await post<Payment>(`/linepay/${transactionId}`);
  const { data } = res;
  return data.paymentUrl;
};
