import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import { CreateGroupForServerType } from '@app/types/CreateGroupForServerType';
import { GroupParamsForServerType } from '@app/types/GroupParamsForServerType';
import { ResponseGroupsType } from '@app/types/ResponseGroupsType';
import { ResponseOneGroupType } from '@app/types/ResponseOneGroupType';
import { WithPagination } from '@app/types/WithPagination';

const groupsService = {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  getGroups: async (
    paramsData?: GroupParamsForServerType,
  ): Promise<WithPagination<ResponseGroupsType[]>> => {
    const paramsCreator = (data?: GroupParamsForServerType) => {
      if (data) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in data) {
          // @ts-ignore
          if (data[key] === '') data[key] = undefined;
        }
      }
      return data;
    };

    const params = paramsCreator(paramsData);
    const actualParams = {
      per_page: params?.perPage || undefined,
      page: params?.page || undefined,
      for_group_id: params?.forGroupId || undefined,
      date_since: params?.dateSince || undefined,
      date_until: params?.dateUntil || undefined,
      franchise_id: params?.franchiseId || undefined,
      level: params?.level || undefined,
      name: params?.name || undefined,
      teacher_id: params?.teacherId || undefined,
      type: params?.type || undefined,
    };
    const res = await instance.get(Paths.Groups, {
      params: actualParams,
    });
    return res.data;
  },

  getOneGroup: async (id: string): Promise<ResponseOneGroupType> => {
    const { data } = await instance.get(`${Paths.Groups}/${id}`);
    return data;
  },

  addGroup: async (group: CreateGroupForServerType) => {
    const { data } = await instance.post(`${Paths.Groups}`, group);
    return data;
  },

  editGroup: async (data: any, id: string) => {
    const res = await instance.post(`${Paths.Groups}/${id}`, data);
    return res.data;
  },
};
export default groupsService;
