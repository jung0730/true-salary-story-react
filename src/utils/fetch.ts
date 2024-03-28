import { getCookie } from 'cookies-next';
import { handleResponse, handleError } from './handleSuccessErrorResponse';

export function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      return handleError(error);
    });
}

const BASE_API_URL = 'http://localhost:3000';

export function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');

  const requestOptions: RequestInit = {
    ...args,
    method: 'get',
    credentials: 'include',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
  const request = new Request(`${BASE_API_URL}${path}`, requestOptions);
  return http<T>(request);
}

export function post<T>(path: string, body?: object, args: RequestInit = {}): Promise<T> {
  const token = getCookie('token');

  const requestOptions: RequestInit = {
    ...args,
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
  const request = new Request(`${BASE_API_URL}${path}`, requestOptions);
  return http<T>(request);
}
