import { useMutation } from 'react-query';
import { postSalary } from './api/salary';

export const usePostSalary = () => useMutation({ mutationFn: postSalary });
