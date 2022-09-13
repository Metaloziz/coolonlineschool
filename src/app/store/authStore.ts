import { StatusCode } from '@app/enums/statusCode';
import { AuthService } from '@app/services/AuthService';
import TokenService from '@app/services/tokenService';
import { appStore, Roles } from '@app/store/appStore';
import { Nullable } from '@app/types';
import { ResponseRegister, ResponseMe } from '@app/types/AuthType';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  isLogin = false;

  isLoading = false;

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
      const {
        data: { roleCode },
      } = await AuthService.me();
      runInAction(() => {
        this.isLogin = true;
        appStore.setSuccessMessage('Успешный вход.');
        appStore.setRole(roleCode);
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

  getMe = async () => {
    try {
      const { status, data } = await AuthService.me();
      if (status === StatusCode.Success) {
        this.setUser(data);
        runInAction(() => {
          appStore.setRole(data.roleCode);
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
          if (res.data.error === 'email is already in use') {
            appStore.setErrorMessage('Этот email уже используется');
          }
          if (res.data.error === 'phone number is already in use') {
            appStore.setErrorMessage('Этот номер телефона уже используется');
          }
        }
        if (res.data.result) {
          runInAction(() => {
            this.isRegister = true;
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  logout = async () => {
    const { setRole } = appStore;

    this.isLoading = true;
    try {
      await AuthService.logout();

      TokenService.removeUser();
      runInAction(() => {
        this.isLogin = false;
        setRole(Roles.Unauthorized);
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setUnauthorized = () => {
    TokenService.removeUser();
    this.isLogin = false;
    appStore.setRole(Roles.Unauthorized);
    appStore.setIsInitialize(true);
  };
}

export const auth = new AuthStore();
