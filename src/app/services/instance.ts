import { StatusCode } from '@app/enums/statusCode';
import TokenService from '@app/services/tokenService';
import { auth } from '@app/store';
import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: 'https://coolbackschool.sitetopic.ru/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://coolbackschool.sitetopic.ru/',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig<{ headers: { 'Content-Type': string } }>) => {
    const token = TokenService.getLocalAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  res => {
    const token = res.headers.Authorization;
    if (token) {
      TokenService.updateLocalAccessToken(token);
    }
    return res;
  },
  rej => {
    if (rej.response.status === StatusCode.Unauthorized) {
      auth.setUnauthorized();
    }
    return Promise.reject(rej);
  },
);
