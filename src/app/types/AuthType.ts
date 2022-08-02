import { Roles } from '@app/store/appStore';

export type RequestSMS = { phone: string };
export type RequestLogin = { phone: string; smsCode: number };

export type ResponseMe = {
  id: string;
  email: string;
  phone: string;
  role: string;
};

export type ResponseLogin = {
  result: {
    response: string;
  };
  data: {
    token: string;
    id: string;
  };
};

export type ResponseLoadMe = {
  id: string;
  firstName: string;
  middleName: null | string;
  lastName: string;
  email: string;
  phone: string;
  role: Roles;
  franchise: null | string;
  city: null | string;
  birthdate: TimeZoneType;
  sex: null | string;
  status: string;
  avatar: {
    id: string;
    path: string;
  };
};

export type TimeZoneType = {
  date: string;
  timezone_type: number;
  timezone: string;
};

export type ResponseSMS = { code: number };
