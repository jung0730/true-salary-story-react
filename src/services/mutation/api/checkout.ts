import { post } from '@/utils/fetch';
import { Order } from '@/types/checkout';
import { TransactionID, Payment } from '@/types/api';

export const postOrder = async (params: Order) => {
  const { data } = await post<TransactionID>('/linepay/order', params);
  return data.transactionId;
};

export const postTransaction = async (transactionId: string) => {
  const { data } = await post<Payment>(`/linepay/${transactionId}`);
  return data.paymentUrl;
};
