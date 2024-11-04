import { AxiosResponse } from 'axios';
import request from '../../_request';

import { APIhost } from '../../../config';

import { IRequestData, IResponseData } from './types';

export default async (
  data: IRequestData
): Promise<AxiosResponse<IResponseData>> =>
  request({
    endpoint: `${APIhost}/auth/register`,
    method: 'post',
    data,
  });
