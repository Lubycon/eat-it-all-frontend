import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type DefaultRequestParams = 'headers' | 'params' | 'paramsSerializer' | 'timeout';
export type RequestBodyConfigWithoutData = Pick<AxiosRequestConfig, DefaultRequestParams>;
export type RequestBodyConfig = Pick<AxiosRequestConfig, DefaultRequestParams | 'data'>;

export const mockClient = axios.create({ baseURL: 'http://localhost:3005' });
export const client = axios.create({ baseURL: 'https://api.eat-all.io/api' });

interface EatAllResponse<T> {
  code: number;
  data: T;
  error: string | null;
  message: string;
  success: boolean;
  timestamp: string;
}

function axiosResponseHandler<T>(response: AxiosResponse<EatAllResponse<T>>) {
  return response.data.data;
}

async function get<ResponseBody>(path: string, config?: RequestBodyConfigWithoutData) {
  return axiosResponseHandler<ResponseBody>(await client.get(path, config));
}

async function post<ResponseBody, RequestBody>(
  path: string,
  data?: RequestBody,
  config?: RequestBodyConfigWithoutData,
) {
  return axiosResponseHandler<ResponseBody>(await client.post(path, data, config));
}

async function put<ResponseBody, RequestBody>(
  path: string,
  data?: RequestBody,
  config?: RequestBodyConfigWithoutData,
) {
  return axiosResponseHandler<ResponseBody>(await client.put(path, data, config));
}

async function remove<ResponseBody>(path: string, config?: RequestBodyConfigWithoutData) {
  return axiosResponseHandler<ResponseBody>(await client.delete(path, config));
}

export default { get, post, put, delete: remove };
