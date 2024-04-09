import { useMutation } from 'react-query';
import { postSalary, postSalaryPermission } from './api/salary';
import { postOrder, postTransaction } from './api/checkout';
import { postLogout } from './api/auth';

export const usePostSalary = () => useMutation({ mutationFn: postSalary });
export const usePostOrder = () => useMutation({ mutationFn: postOrder });
export const usePostTransaction = () => useMutation({ mutationFn: postTransaction });
export const usePostLogout = () => useMutation({ mutationFn: postLogout });
export const usePostSalaryPermission = () => useMutation({ mutationFn: postSalaryPermission });
