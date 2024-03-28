import { toast } from 'react-hot-toast';
import { CustomError } from '../types/error';

export const handleResponse = (response: Response) => {
  const { ok } = response;
  if (ok) return response.json();
  return response.json().then((error) => {
    throw error;
  });
};

export const handleError = (error: CustomError) => {
  const { statusCode, message } = error;
  switch (statusCode) {
    case 400:
      toast.error(message || '輸入有誤');
      break;
    case 404:
      toast.error('頁面不存在!');
    case 500:
      toast.error('系統內部錯誤');
      break;
    case 401:
      toast.error('登入狀態已過期');
      window.location.reload();
      break;
    case 403:
      toast.error('沒有權限訪問');
      break;
    default:
      toast.error('系統內部錯誤');
  }
};
