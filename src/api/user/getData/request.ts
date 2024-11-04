import { AxiosResponse } from 'axios';
import request from '../../_request';

import { APIhost } from '../../../config';

import { IResponseData } from './types';

export default async (
  accessToken: string
): Promise<AxiosResponse<IResponseData>> =>
  request({
    endpoint: `${APIhost}/user`,
    method: 'get',
    headers: {
      Authorization: `${accessToken}`,
    },
  });
