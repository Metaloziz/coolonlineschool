import { Roles } from '@app/store';
import { WithPagination } from '@app/types/WithPagination';

import { Nullable } from './index';

export type TimeZoneType = {
  date: string;
  timezone_type: number;
  timezone: string;
};

export type UserStatus = 'payed' | 'notPayed';

export type ResponseAvatar = {
  id: string;
  path: string;
};

export type ResponseSearchUser = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  roleCode: string;
  city: Nullable<string>;
  groups: [];
  active: boolean;
  payed: UserStatus;
  avatar: Nullable<ResponseAvatar>;
  createAt: TimeZoneType;
};

export type ResponseSearchUserNewUsers = {
  birthdate_since: string;
  birthdate_until: string;
  first_name: string;
  is_active: boolean;
  is_payed: boolean;
  last_name: string;
  middle_name: string;
  roleCode: Roles;
};

export type ResponseSearchUserWithPagination = Partial<WithPagination<ResponseSearchUserNewUsers>>;
