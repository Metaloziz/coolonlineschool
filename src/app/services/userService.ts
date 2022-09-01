import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import TokenService from '@app/services/tokenService';
import { RequestUsersType } from '@app/store/usersStore';
import {
  ResponseSearchUser,
  ResponseSearchUserNewUsers,
  ResponseSearchUserWithPagination,
} from '@app/types/UserTypes';
import { WithPagination } from '@app/types/WithPagination';

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

  getUsers: async (
    data?: ResponseSearchUserWithPagination,
  ): Promise<WithPagination<ResponseSearchUser[]>> => {
    const res = await instance.get(Paths.Users, {
      params: data || {},
    });
    return res.data;
  },
};
