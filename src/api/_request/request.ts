import axios, { AxiosResponse } from 'axios';
import { IRequestConfig } from './types';
import { APIhost } from '../../config';

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async <T>({
  endpoint,
  method = 'get',
  data = {},
  headers = {
    'Content-Type': 'application/json',
  },
}: IRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    await delay(1000);
    const response = await axios(endpoint, {
      headers,
      method,
      data,
    });
    return response;
  } catch (error) {
    if (headers.Authorization) {
      const refreshToken = localStorage.getItem('refreshToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      if (refreshToken) {
        const response = await axios.post(`${APIhost}/auth/refresh-tokens`, {
          refreshToken,
        });
        if (response.status === 200) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
      }
      try {
        const secondResponse = await axios(endpoint, {
          headers,
          method,
          data,
        });
        return secondResponse;
      } catch (secondError) {
        return secondError.response;
      }
    }

    return error.response;
  }
};
