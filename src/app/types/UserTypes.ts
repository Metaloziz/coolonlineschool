// eslint-disable-next-line max-classes-per-file
import { Roles } from '@app/store';
import { TimeZoneType } from '@app/types/TimeZoneType';
import { WithPagination } from '@app/types/WithPagination';

import { Nullable } from './index';

export type UserStatus = 'payed' | 'notPayed';

export type ResponseAvatar = {
  id: string;
  path: string;
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

// скопировано из TRIZUM project

// типы юзеров в массиве
export class ResponseUserType {
  id: string = '';

  firstName: Nullable<string> = '';

  middleName: Nullable<string> = '';

  lastName: Nullable<string> = '';

  phone: Nullable<string> = '';

  email: Nullable<string> = '';

  roleCode: Nullable<string> = '';

  city: Nullable<string> = '';

  groups: Nullable<any> = null;

  active: Nullable<any> = null;

  payed: Nullable<any> = null;

  avatar: Nullable<any> = null;

  createdAt: TimeZoneType = new TimeZoneType();
}

// эти поля добавляются к типу при запросе за конкретным юзером
export class CurrentUserType extends ResponseUserType {
  birthdate: TimeZoneType = new TimeZoneType();

  sex: Nullable<boolean> = false; // male - true

  parents: Nullable<any> = null;

  tariff: Nullable<string> = '';

  payedUntill: Nullable<any> = null;

  isSecondChild: Nullable<boolean> = null;
}

export type RequestRegisterUserType = {
  phone?: string;
  email?: string;
  role: Roles;
  franchiseId?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  city: string;
  birthdate: string;
  sex: boolean;
  groupId?: string;
  tariffId?: string;
  isSecondChild?: boolean;
};
