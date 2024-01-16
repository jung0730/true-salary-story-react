import { useMutation } from 'react-query';
import { loginWithGoogle } from './login';

export const useLogin = () => loginWithGoogle();
