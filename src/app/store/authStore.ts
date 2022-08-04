import { StatusCode } from '@app/enums/statusCode';
import { AuthService } from '@app/services/AuthService';
import { ResponseLoadMe, ResponseRegister } from '@app/types/AuthType';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isRegister = false;

  isLoading = false;

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
      this.loadMe = userResponse.data;
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  async postLoginPhone(phone: string) {
    try {
      const res = await AuthService.sms({ phone });
      this.phone = phone;
      this.code = res.data.code;
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  setError(error: string) {
    this.error = error;
  }

  register = async (formData: ResponseRegister) => {
    this.isLoading = true;
    try {
      const res = await AuthService.register(formData);
      if (res.status === StatusCode.Success) {
        runInAction(() => {
          appStore.setIsInitialize(true);
          this.isRegister = true;
        });
        console.log(res);
      }
    } catch (error) {
      const { response } = error as AxiosError;
      const status = response?.status;

      if (status === StatusCode.Unauthorized) {
        runInAction(() => {
          appStore.setIsInitialize(true);
        });
      }
    } finally {
      this.isLoading = false;
    }
  };
}

export const auth = new AuthStore();
