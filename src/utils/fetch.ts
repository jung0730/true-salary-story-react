import { getCookie } from 'cookies-next';
import { toast } from 'react-hot-toast';

const handleResponse = (response: Response) => {
  const { ok } = response;
  if (ok) return response.json();
  return response.json().then((error) => {
    throw error;
  });
};

export function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then((response: Response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      const { statusCode, message } = error;
      switch (statusCode) {
        case 400:
          toast.error(message || '輸入有誤');
          break;
        case 404:
          toast.error('頁面不存在!');
          // TODO: redirect 404 page
          break;
        case 500:
          toast.error('系統內部錯誤');
          break;
        case 401:
          toast.error('登入狀態已過期');
          // TODO: redirect login page
          break;
        case 403:
          toast.error('沒有權限訪問');
          break;
        default:
          toast.error('系統內部錯誤');
      }
    });
}

const BASE_API_URL = 'http://localhost:3000';

export function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');
  args.method = 'get';
  args.credentials = 'include';
  args.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`,
  };
  const request = new Request(`${BASE_API_URL}${path}`, args);
  return http<T>(request);
}

export function post<T>(path: string, body: object, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');
  args.method = 'post';
  args.body = JSON.stringify(body);
  args.credentials = 'include';
  args.headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const request = new Request(`${BASE_API_URL}${path}`, args);
  return http<T>(request);
}
