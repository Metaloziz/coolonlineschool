import { personalDataService } from '@app/services/personalDataService';
import { ResponsePersonalData } from '@app/types/personalDataType';
import { makeAutoObservable, runInAction } from 'mobx';

class PersonalDataStore {
  isLoading = false;

  personalData: null | ResponsePersonalData = null;

  constructor() {
    makeAutoObservable(this);
  }

  getPersonalData = async () => {
    this.isLoading = true;
    try {
      const res = await personalDataService.loadme();
      runInAction(() => {
        this.personalData = res.data;
      });
      console.log('getPersonalData16', res.data);
    } catch (error) {
      console.log('getPersonalData', error);
    } finally {
      this.isLoading = false;
    }
  };
}

export const personal = new PersonalDataStore();
