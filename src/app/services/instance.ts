import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://backschool.sitetopic.ru/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://backschool.sitetopic.ru/',
  },
});

instance.interceptors.request.use(
  config => {
    const localStorageToken = localStorage.getItem('user_secret');
    const token = localStorageToken && JSON.parse(localStorageToken);

    if (token) {
      axios.defaults.headers.common.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);
