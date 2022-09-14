import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import tokenService from '@app/services/tokenService';
import { ResponseSearchUser, ResponseSearchUserWithPagination } from '@app/types/UserTypes';
import { WithPagination } from '@app/types/WithPagination';

export type ResponseUsersType = {
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

export type PayloadUser = {
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
  token: tokenService.getLocalAccessToken(),

  async createUser(user: PayloadUser): Promise<ResponseUsersType> {
    const { data } = await instance.post(Paths.Users, user, this.token);
    return data;
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
    return instance.post(`${Paths.Users}/${id}`, data, this.token);
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
