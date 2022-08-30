import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import TokenService from '@app/services/tokenService';
import {
  AddUserType,
  SexType,
} from '@components/elements/modals/modal-add-user/form-user/FormAddUser';

export type ResponceUsersType = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: null | string;
  email: null | string;
  roleCode: string;
  city: string;
  active: true;
  payed: boolean;
  groups: [];
  avatar: null | string;
};

export type RequestUser = {
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
  sex: boolean;
  city: string;
  phone: string;
  birthdate: string;
  email: string;
  groups: string[];
};

type RequestUserEdit = {
  id: null | string;
  firstName: null | string;
  middleName: null | string;
  lastName: null | string;
  phone: null | string;
  email: null | string;
  roleCode: null | string;
  city: null | string;
  active: null | true;
  payed: null | boolean;
  groups: null | [];
  avatar: null | string;
};

export const userService = {
  createUser(data: RequestUser) {
    const res = instance.post<ResponceUsersType>(
      Paths.Users,
      data,
      TokenService.getConfigHeadersWithToken(),
    );
    return res;
  },
  editUser(
    data: {
      firstName: null | string;
      lastName: null | string;
      role: null | string;
      birthdate: null | string;
      phone: null | string;
      city: null | string;
      sex: null | boolean;
      groups: null | string[];
      middleName: null | string;
      email: null | string;
    },
    id: string,
  ) {
    return instance.post(`${Paths.Users}/${id}`, data, TokenService.getConfigHeadersWithToken());
  },
};
