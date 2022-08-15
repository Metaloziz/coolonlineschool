import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import TokenService from '@app/services/tokenService';
import { RequestUsersType } from '@app/store/usersStore';

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

export const userService = {
  createUser(data: RequestUsersType) {
    const res = instance.post<ResponceUsersType>(
      Paths.Users,
      data,
      TokenService.getConfigHeadersWithToken(),
    );
    return res;
  },
};
