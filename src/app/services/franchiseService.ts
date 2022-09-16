import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';
import { FranchiseT } from '@app/types/FranchiseTypes';
import { FranchisingViewModel } from '@app/types/FranchisingViewModel';

const franchiseService = {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  getAll: async (): Promise<FranchisingViewModel[]> => {
    const { data } = await instance.get(Paths.Franchises);
    return data;
  },
  getOne: async (id: string): Promise<FranchiseT> => {
    const { data } = await instance.get(`${Paths.Franchises}/${id}`);
    return data;
  },
  create: async (options: FranchiseT): Promise<FranchiseT> => {
    const { data } = await instance.post(Paths.Franchises, options);
    return data;
  },
};

export default franchiseService;
