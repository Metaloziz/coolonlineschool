import franchiseService from '@app/services/franchiseService';
import { FranchisingViewModel } from '@app/types/FranchisingViewModel';
import { makeAutoObservable, runInAction } from 'mobx';

class FranchiseeStore {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  franchise: FranchisingViewModel[] = [
    {
      id: '',
      shortName: '',
      // fullName: '',
      inn: '',
      legalAddress: '',
      actualAddress: '',
      schoolName: '',
      ogrn: '',
      kpp: '',
      checkingAccount: '',
      phone: 0,
      email: '',
      city: '',
      bankBill: '',
      bankName: '',
      bankBik: '',
      bankInn: '',
      bankKpp: '',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getFranchisee = async () => {
    try {
      const res = await franchiseService.getAll();
      runInAction(() => {
        this.franchise = res;
      });
      return res;
    } catch (e) {
      console.warn(e);
    }
    return [] as FranchisingViewModel[];
  };
}
export default new FranchiseeStore();
