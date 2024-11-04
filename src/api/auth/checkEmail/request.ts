import { AxiosResponse } from 'axios';
import request from '../../_request';

import { APIhost } from '../../../config';

export default async (email: string): Promise<AxiosResponse<undefined>> =>
  request({
    endpoint: `${APIhost}/auth/check-email`,
    method: 'post',
    data: {
      email,
    },
  });
