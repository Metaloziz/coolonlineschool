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

  errorMessage: Nullable<string> = null;

  successMessage: Nullable<string> = null;

  role: Roles = Roles.Unauthorized;

  constructor() {
    makeAutoObservable(this);
  }

  setIsInitialize = (isInitialize: boolean) => {
    this.isInitialize = isInitialize;
  };

  setErrorMessage = (message: Nullable<string>) => {
    this.errorMessage = message;
  };

  setSuccessMessage = (message: Nullable<string>) => {
    this.successMessage = message;
  };

  setRole = (role: Roles): void => {
    this.role = role;
  };
}

export const appStore = new AppStore();
