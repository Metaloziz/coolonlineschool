import { Roles } from '@app/store';
import { TimeZoneType } from '@app/types/TimeZoneType';
import { WithPagination } from '@app/types/WithPagination';

import { Nullable } from './index';

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

// скопировано из TRIZUM project

export type ResponseUserT = {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  phone: string | null;
  email: string | null;
  roleCode: string;
  // franchise: FranchiseT | null;
  city: string | null;
  // groups: ResponseOneUserGroupT[];
  // status: UserStatusT;
  // avatar: Nullable<ResponseUserAvatarT>;
  // canSwitchTo: canSwitchToT[];
};

export type UserType = {
  birthdate: TimeZoneType;
  sex: boolean | null; // male - true
  createdAt: TimeZoneType;
  // groups: ResponseOneUserGroupT[];
  // parents: ParentT[];
  tariff: null | any;
  payedUntill: null | any;
  isSecondChild: null | boolean;
} & ResponseUserT;

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
