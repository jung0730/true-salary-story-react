import { getCookie } from 'cookies-next';

const handleResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const handleError = (error: any) => {
  if (error.response && error.response.status && (error.response.status === 504 || error.response.status === 404)) {
    console.log('Gateway Time-out 或查無此頁');
  } else if (error.response && error.response.status && error.response.status === 403) {
    console.log('無權限');
  }
  console.log(error);
  throw error;
};

export function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then((response: Response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      return handleError(error);
    });
    // .finally(() => {
    //   hideLoading();
    // });
}

const BASE_API_URL = 'http://localhost:3000';

export function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');
  args.method = 'get';
  args.credentials = 'include';
  args.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`,
  };
  const checkPathParameter = path.indexOf('?') > 0 ? '&' : '?';
  const request = new Request(`${BASE_API_URL}${path}${checkPathParameter}`, args);
  return http<T>(request);
}

export function post<T>(path: string, body: object, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');
  args.method = 'post';
  args.body = JSON.stringify(body);
  args.credentials = 'include';
  args.headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const request = new Request(`${BASE_API_URL}${path}`, args);
  return http<T>(request);
}
