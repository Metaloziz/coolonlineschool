import classService from '@app/services/ClassService';
import { makeAutoObservable, runInAction } from 'mobx';

type ArrayTeacher = {
  label: string;
  value: string;
};

class ClassStore {
  listOfTeacher = [] as ArrayTeacher[];

  constructor() {
    makeAutoObservable(this);
  }

  async getTeacher() {
    const data = await classService.getTeacher();
    if (data.items) {
      runInAction(() => {
        this.listOfTeacher = data.items.map(m => ({
          value: m.id,
          label: `${m.firstName} ${m.lastName} ${m.middleName}`,
        }));
      });
    }
  }
}

export const classStore = new ClassStore();
