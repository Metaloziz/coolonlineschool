import tokenService from '@app/services/tokenService';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://coolbackschool.sitetopic.ru/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://coolbackschool.sitetopic.ru/',
  },
});

instance.interceptors.request.use(config => {
  const token = tokenService.getLocalAccessToken();

  config.headers = {
    Authorization: token,
  };

  return config;
});
