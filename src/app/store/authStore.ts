import { AuthService } from '@app/services/AuthService';
import { ResponseLoadMe } from '@app/types/AuthType';
import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  loadMe = {} as ResponseLoadMe;

  code: number = 0;

  phone: string = '';

  error = ' ';

  setLoadMe(data: ResponseLoadMe) {
    this.loadMe = data;
  }

  async postLoginCode(code: number, phone: string) {
    try {
      const res = await AuthService.login({ phone, smsCode: Number(code) });
      await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res.data.data.token}`));
      const userResponse = await AuthService.loadme();
      runInAction(() => {
        this.loadMe = userResponse.data;
      });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  async postLoginPhone(phone: string) {
    try {
      const res = await AuthService.sms({ phone });
      runInAction(() => {
        this.phone = phone;
        this.code = res.data.code;
      });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  setError(error: string) {
    this.error = error;
  }
}

export const auth = new AuthStore();
