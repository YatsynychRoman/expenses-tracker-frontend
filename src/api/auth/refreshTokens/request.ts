import { AxiosResponse } from 'axios';
import request from '../../_request';

import { APIhost } from '../../../config';

import { IResponseData } from './types';

export default async (
  refreshToken: string
): Promise<AxiosResponse<IResponseData>> =>
  request({
    endpoint: `${APIhost}/auth/tokens`,
    method: 'post',
    headers: {
      Authorization: `${refreshToken}`,
    },
  });
