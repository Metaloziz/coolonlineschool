import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import tokenService from '@app/services/tokenService';
import { UpdateUserPayloadType } from '@app/store/usersStore';
import { PayloadUserType } from '@app/types/PayloadUserType';
import {
  CurrentUserType,
  ResponseSearchUserWithPagination,
  ResponseUserType,
} from '@app/types/UserTypes';
import { WithPagination } from '@app/types/WithPagination';

const token = tokenService.getLocalAccessToken();

export const userService = {
  createUser: async (user: PayloadUserType): Promise<ResponseUserType> => {
    const { data } = await instance.post(Paths.Users, user, token);
    return data;
  },

  editUser: async (data: UpdateUserPayloadType, id: string) =>
    instance.post(`${Paths.Users}/${id}`, data, token),

  getUsers: async (
    data?: ResponseSearchUserWithPagination,
  ): Promise<WithPagination<ResponseUserType[]>> => {
    const res = await instance.get(Paths.Users, {
      params: data || {},
    });
    return res.data;
  },

  getOneUser: async (id: string): Promise<CurrentUserType> => {
    const { data } = await instance.get(`${Paths.Users}/${id}`);
    return data;
  },
};
