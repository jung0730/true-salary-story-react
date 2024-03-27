import { useMutation } from 'react-query';
import { postSalary } from './api/salary';
import { postOrder, postTransaction } from './api/checkout';

export const usePostSalary = () => useMutation({ mutationFn: postSalary });
export const usePostOrder = () => useMutation({ mutationFn: postOrder });
export const usePostTransaction = () => useMutation({ mutationFn: postTransaction });
