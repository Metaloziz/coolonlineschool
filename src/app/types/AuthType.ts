import { Roles } from '@app/store/appStore';
import { Nullable } from '@app/types/index';

import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';

export type RequestSMS = { phone: string };
export type RequestLogin = { phone: string; smsCode: number };

export type ResponseMe = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: Nullable<string>;
  email: Nullable<string>;
  roleCode: string;
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

export type RequestRegister = {
  result: {
    success: string;
  };
};

export type ResponseRegister = {
  phone: string;
  email: string;
  parentFirstName: string;
  parentMiddleName: string;
  parentLastName: string;
  studentFirstName: string;
  studentMiddleName: string;
  studentLastName: string;
  city: string;
  birthdate: Date;
  parentSex: boolean;
  studentSex: boolean;
};
