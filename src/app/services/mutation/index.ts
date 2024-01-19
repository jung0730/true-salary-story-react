import { useMutation } from 'react-query';
import { loginWithGoogle } from './login';
import { postSalary } from './api/salary';

export const useLogin = () => loginWithGoogle();
export const usePostSalary = () => useMutation({ mutationFn: postSalary });
