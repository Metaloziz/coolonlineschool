import { userService } from '@app/services/userService';
import { PayloadUserType } from '@app/types/PayloadUserType';
import { RequestUsersForFilter } from '@app/types/RequestUsersForFilter';
import { CurrentUserType, ResponseUserType } from '@app/types/UserTypes';
import {
  checkErrorMessage,
  ErrorMessageType,
} from '@components/elements/search-users/addEditUserForm/utils/checkErrorMessage';
import { DeleteEmptyValue } from '@utils/deleteEmptyValue';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

export type UpdateUserPayloadType = Omit<Partial<CurrentUserType>, 'id'>;

class UsersStore {
  isLoading = false;

  page = 0;

  perPage = 5;

  userTotalCount = 1;

  users = [new ResponseUserType()];

  currentUser = new CurrentUserType();

  private searchDefaultUsersParams: RequestUsersForFilter = {
    perPage: null,
    page: null,
    city: '',
    franchiseId: '',
    lastName: '',
    middleName: '',
    firstName: '',
    is_payed: null,
    role: '',
    birthdate_since: '',
    birthdate_until: '',
    phone: null,
    email: '',
    tariff_id: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  createUser = async (
    data: PayloadUserType,
  ): Promise<ResponseUserType | undefined | ErrorMessageType> => {
    try {
      const res = await userService.createUser(data);
      const isError = checkErrorMessage(res);

      if (isError) {
        return isError;
      }

      await this.getUsers();
    } catch (e) {
      const { error } = e as { error: string };
      appStore.setErrorMessage(error);
      console.warn(error);
    }
    return undefined;
  };

  getUser = async (userId: string) => {
    try {
      const res = await userService.getOneUser(userId);

      runInAction(() => {
        this.currentUser = res;
      });
    } catch (e) {
      console.warn(e);
    }
  };

  editUser = async (
    data: UpdateUserPayloadType,
    id: string,
  ): Promise<ResponseUserType | undefined | ErrorMessageType> => {
    try {
      const res = await userService.editUser(data, id);
      const isError = checkErrorMessage(res);

      if (isError) {
        return isError;
      }
    } catch (e) {
      runInAction(() => {
        appStore.setErrorMessage(JSON.stringify(e));
      });
    }
    return undefined;
  };

  getUsers = async () => {
    this.isLoading = true;

    try {
      const filteredUserData = DeleteEmptyValue(this.searchDefaultUsersParams);
      const res = await userService.getUsers(filteredUserData);

      runInAction(() => {
        this.users = res.items;
        this.userTotalCount = res.total;
        this.perPage = res.perPage;
        this.page = Number(res.page);
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setSearchUsersParams = (params: RequestUsersForFilter) => {
    this.searchDefaultUsersParams = { ...this.searchDefaultUsersParams, ...params };
  };
}

export default new UsersStore();
