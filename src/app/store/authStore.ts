import { StatusCode } from '@app/enums/statusCode';
import { AuthService } from '@app/services/AuthService';
import TokenService from '@app/services/tokenService';
import { appStore, Roles } from '@app/store/appStore';
import { Nullable } from '@app/types';
import { ResponseLoadMe, ResponseRegister, ResponseMe } from '@app/types/AuthType';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  isLogin = false;

  isLoading = false;

  loadMe = { role: Roles.Unauthorized } as ResponseLoadMe;

  me = { roleCode: Roles.Unauthorized } as ResponseMe;

  code: Nullable<number> = null;

  phone: Nullable<string> = null;

  error = ' ';

  isRegister = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: ResponseMe) {
    this.me = data;
  }

  setLoadMe(data: ResponseLoadMe) {
    this.loadMe = data;
  }

  setCode = (code: number) => {
    this.code = code;
  };

  setPhone = (phone: Nullable<string>) => {
    this.phone = phone;
  };

  async login(code: number, phone: string) {
    this.isLoading = true;
    try {
      const { data } = await AuthService.login({ phone, smsCode: code });
      await TokenService.setUser(data.data.token);
      runInAction(() => {
        this.isLogin = true;
        appStore.setSuccessMessage('Успешный вход.');
      });
    } catch (error) {
      const { response } = error as AxiosError;
      const status = response?.status;

      if (status === StatusCode.Unauthorized) {
        runInAction(() => {
          appStore.setErrorMessage('Неправильный код');
        });
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  sms = async (phone: string) => {
    this.isLoading = true;
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
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setError(error: string) {
    this.error = error;
  }

  setRole(role: Roles) {
    this.me.roleCode = role;
  }

  setIni(role: Roles) {
    this.me.roleCode = role;
  }

  getMe = async () => {
    try {
      const { status, data } = await AuthService.me();
      if (status === StatusCode.Success) {
        this.setUser(data);
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

  register = async (formData: ResponseRegister) => {
    this.isLoading = true;
    try {
      const res = await AuthService.register(formData);
      if (res.status === StatusCode.Success) {
        if (res.data.error) {
          console.log(res.data.error);
        }
        if (res.data.result) {
          console.log(res.data.result);
        }

        runInAction(() => {
          this.isRegister = true;
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };

  logout = async () => {
    this.isLoading = true;
    try {
      await AuthService.logout();
      TokenService.removeUser();
      const { setRole } = appStore;
      setRole(Roles.Unauthorized);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}

export const auth = new AuthStore();
