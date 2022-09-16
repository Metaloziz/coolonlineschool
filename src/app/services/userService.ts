import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import { PayloadUserType } from '@app/types/PayloadUserType';
import { SearchUsersParamsType } from '@app/types/SearchUsersParamsType';
import { UpdateUserPayloadType } from '@app/types/UpdateUserPayloadType';
import { CurrentUserType, ResponseUserType } from '@app/types/UserTypes';
import { WithPagination } from '@app/types/WithPagination';

export const userService = {
  createUser: async (user: PayloadUserType): Promise<ResponseUserType> => {
    const { data } = await instance.post(Paths.Users, user);
    return data;
  },

  editUser: async (data: UpdateUserPayloadType, id: string) =>
    instance.post(`${Paths.Users}/${id}`, data),

  getUsers: async (params?: SearchUsersParamsType): Promise<WithPagination<ResponseUserType[]>> => {
    const { data } = await instance.get(Paths.Users, { params });
    return data;
  },

  getOneUser: async (id: string): Promise<CurrentUserType> => {
    const { data } = await instance.get(`${Paths.Users}/${id}`);
    return data;
  },
};
