import { Roles } from '@app/store';
import { Nullable } from '@app/types/index';

export type TimeZoneType = {
  date: string;
  timezone_type: number;
  timezone: string;
};

export type ResponseAvatar = {
  id: string;
  path: string;
};

export type UserStatus = 'payed' | 'notPayed';

export type ResponsePersonalData = {
  id: string;
  firstName: string;
  middleName: null | string;
  lastName: string;
  email: string;
  phone: string;
  role: Roles;
  city: null | string;
  birthdate: TimeZoneType;
  sex: null | string;
  active: boolean;
  payed: UserStatus;
  avatar: Nullable<ResponseAvatar>;
};
