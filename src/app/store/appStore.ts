import { Nullable } from '@app/types';
import { makeAutoObservable } from 'mobx';

export enum Roles {
  /* Ученик */
  Student = 'student',
  /* Учитель */
  Teacher = 'teacher',
  /* Центр */
  Admin = 'admin',
  /* Неавторизованный */
  Unauthorized = 'unauthorized',
}

class AppStore {
  isInitialize = false;

  error: Nullable<string> = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsInitialize(isInitialize: boolean) {
    this.isInitialize = isInitialize;
  }

  setError(error: Nullable<string>) {
    this.error = error;
  }
}

export const appStore = new AppStore();
