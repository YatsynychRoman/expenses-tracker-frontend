import { AxiosResponse } from 'axios';
import request from '../../_request';

import { APIhost } from '../../../config';

export default async (username: string): Promise<AxiosResponse<undefined>> =>
  request({
    endpoint: `${APIhost}/auth/check-username`,
    method: 'post',
    data: {
      username,
    },
  });
