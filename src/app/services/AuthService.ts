import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import {
  RequestLogin,
  RequestSMS,
  ResponseLoadMe,
  ResponseLogin,
  ResponseMe,
  ResponseSMS,
  RequestRegister,
  ResponseRegister,
  RequestLogout,
} from '@app/types/AuthType';

export const AuthService = {
  login: (data: RequestLogin) => instance.post<ResponseLogin>(Paths.Login, data),

  sms: (data: RequestSMS) => instance.post<ResponseSMS>(Paths.SMS, data),

  me: () => instance.get<ResponseMe>(Paths.Me),

  loadme: () => instance.get<ResponseLoadMe>(Paths.LoadMe),

  register: (data: ResponseRegister) => instance.post<RequestRegister>(Paths.Register, data),

  logout: () => instance.get<RequestLogout>(Paths.Logout),
};
