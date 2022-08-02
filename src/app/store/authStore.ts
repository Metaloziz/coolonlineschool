import { StatusCode } from '@app/enums/statusCode';
import { AuthService } from '@app/services/AuthService';
import { appStore, Roles } from '@app/store/appStore';
import { ResponseLoadMe } from '@app/types/AuthType';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  isLogin = false;

  loadMe = { role: Roles.Unauthorized } as ResponseLoadMe;

  code: number = 0;

  phone: string = '';

  error = ' ';

  constructor() {
    makeAutoObservable(this);
  }

  setLoadMe(data: ResponseLoadMe) {
    this.loadMe = data;
  }

  async postLoginCode(code: number, phone: string) {
    try {
      const res = await AuthService.login({ phone, smsCode: Number(code) });
      await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res.data.data.token}`));
      const { data } = await AuthService.loadme();
      runInAction(() => {
        this.loadMe = data;
        this.isLogin = true;
      });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  async postLoginPhone(phone: string) {
    try {
      const {
        data: { code },
      } = await AuthService.sms({ phone });
      runInAction(() => {
        this.phone = phone;
        this.code = code;
      });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  setError(error: string) {
    this.error = error;
  }

  me = async () => {
    try {
      const { status, data } = await AuthService.loadme();
      if (status === StatusCode.Success) {
        this.setLoadMe(data);
        runInAction(() => {
          appStore.setIsInitialize(true);
          this.isLogin = true;
        });
      }
    } catch (error) {
      const { response } = error as AxiosError;
      const status = response?.status;

      if (status === StatusCode.Unauthorized) {
        runInAction(() => {
          appStore.setIsInitialize(true);
        });
      }
    }
  };
}

export const auth = new AuthStore();
