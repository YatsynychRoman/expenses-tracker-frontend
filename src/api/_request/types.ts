import { Method } from 'axios';

export interface IRequestConfig {
  endpoint: string;
  method?: Method;
  data?: object;
  headers?: Record<string, string>;
}
