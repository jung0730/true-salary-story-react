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
    })
    // .finally(() => {
    //   hideLoading();
    // });
}

const BASE_API_URL = 'https://client-api-dev.up.railway.app'

export function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  args.method = 'get';
  args.credentials = 'include';
  args.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const checkPathParameter = path.indexOf('?') > 0 ? '&' : '?';
  const request = new Request(`${BASE_API_URL}${path}${checkPathParameter}`, args);
  return http<T>(request);
}

export function post<T>(path: string, body: FormData, args: RequestInit = {}): Promise<T> {
  args.method = 'post';
  args.body = body;
  args.credentials = 'include';
  const request = new Request(`${BASE_API_URL}${path}`, args);
  return http<T>(request);
}
