import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import {
  RequestLogin,
  RequestSMS,
  ResponseLogin,
  ResponseMe,
  ResponseSMS,
} from '@app/types/AuthType';
import { AxiosResponse } from 'axios';

export const AuthService = {
  login: async (data: RequestLogin) => {
    const res: AxiosResponse<ResponseLogin> = await instance.post(Paths.Login, data, {});
    return res.data;
  },

  sms: async (data: RequestSMS) => {
    const res: AxiosResponse<ResponseSMS> = await instance.post(Paths.SMS, data);
    return res.data;
  },

  me: async () => {
    const res: AxiosResponse<ResponseMe> = await instance.get(Paths.Me);
    return res.data;
  },
};
