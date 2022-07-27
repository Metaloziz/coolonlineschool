import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://backschool.sitetopic.ru/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://backschool.sitetopic.ru/',
  },
});

// instance.interceptors.request.use(
//   (config: AxiosRequestConfig<{ headers: { 'Content-Type': string } }>) => {
//     const token = TokenService.getLocalAccessToken();
//     // console.log(token);
//     if (token) {
//       // @ts-ignore
//       // axios.defaults.headers.Authorization = token;
//       // config.headers.Authorization = token;
//     }
//     return config;
//   },
//   error => {
//     console.log(error, 'error');
//     return Promise.reject(error);
//   },
// );
//
// instance.interceptors.request.use(
//   config => {
//     const token = TokenService.getLocalAccessToken();
//     console.log(token);
//     if (token) {
//       axios.defaults.headers.common.Authorization = token;
//       // config.headers.Authorization = token;
//     }
//     return config;
//   },
//   error => {
//     console.log(error, 'error');
//     return Promise.reject(error);
//   },
// );
//
// instance.interceptors.request.use(
//   config => {
//     const localStorageToken = localStorage.getItem('user_secret');
//     const token = localStorageToken && JSON.parse(localStorageToken);
//
//     if (token) {
//       // @ts-ignore
//       // config.headers.common = token;
//       axios.defaults.headers.common.Authorization = token;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );
