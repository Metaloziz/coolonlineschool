import { Roles } from '@app/store/appStore';
import { Nullable } from '@app/types/index';

export type RequestSMS = { phone: string };
export type RequestLogin = { phone: string; smsCode: number };

export type ResponseMe = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: Nullable<string>;
  email: Nullable<string>;
  roleCode: Roles;
  city: Nullable<string>;
  active: string;
  payed: Nullable<string>;
  groups: [];
  avatar: null;
};

export type ResponseLogin = {
  result: {
    response: string;
  };
  data: {
    token: string;
    id: string;
    refreshToken: Nullable<string>;
  };
};

export type ResponseSMS = { code: number };

export type RequestRegister = {
  result?: {
    success: string;
  };
  error?: string;
};

export type ResponseRegister = {
  phone: string;
  email: string;
  parentFirstName: string;
  parentMiddleName: string;
  parentLastName: string;
  parentSex: boolean;
  studentFirstName: string;
  studentMiddleName: string;
  studentLastName: string;
  city: string;
  birthdate: string;
  studentSex: boolean;
  smsCode: number;
};

export type RequestLogout = string[];
