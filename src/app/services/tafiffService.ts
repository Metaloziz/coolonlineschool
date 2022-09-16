import { TariffsEditOrCreateT, TariffsType } from '@app/types/TariffsType';

import { Paths } from '../enums/Paths';

import { instance } from './instance';

const tariffsService = {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  getAllTariffs: async (): Promise<TariffsType[]> => {
    const { data } = await instance.get(Paths.Tariffs);
    return data;
  },
  create: async (options: TariffsEditOrCreateT): Promise<TariffsType> => {
    const { data } = await instance.post(Paths.Tariffs, options);
    return data;
  },
  edit: async (id: string, options: TariffsEditOrCreateT): Promise<TariffsType> => {
    const { data } = await instance.post(`${Paths.Tariffs}/${id}`, options);
    return data;
  },
};

export default tariffsService;
