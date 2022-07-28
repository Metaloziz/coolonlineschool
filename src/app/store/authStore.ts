import { ResponseLoadMe } from '@app/types/AuthType';
import { makeAutoObservable } from 'mobx';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  loadMe = {} as ResponseLoadMe;

  code: number = 0;

  phone: string = '';

  setLoadMe(data: ResponseLoadMe) {
    this.loadMe = data;
  }

  setCode(code: number) {
    this.code = code;
  }

  setPhone(phone: string) {
    this.phone = phone;
  }
}

export const auth = new AuthStore();
