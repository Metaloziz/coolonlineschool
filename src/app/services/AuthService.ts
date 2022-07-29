import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import TokenService from '@app/services/tokenService';
import {
  RequestLogin,
  RequestSMS,
  ResponseLoadMe,
  ResponseLogin,
  ResponseMe,
  ResponseSMS,
} from '@app/types/AuthType';

export const AuthService = {
  login: async (data: RequestLogin) => {
    const res = await instance.post<ResponseLogin>(Paths.Login, data, {});
    return res;
  },

  sms: async (data: RequestSMS) => {
    const res = await instance.post<ResponseSMS>(Paths.SMS, data);
    return res;
  },

  me: async () => {
    const res = await instance.get<ResponseMe>(Paths.Me);
    return res;
  },

  loadme: async () => {
    const res = await instance.get<ResponseLoadMe>(
      Paths.LoadMe,
      TokenService.getConfigHeadersWithToken(),
    );
    return res;
  },
};
