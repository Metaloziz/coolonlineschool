import { userService } from '@app/services/userService';
import { PayloadUserType } from '@app/types/PayloadUserType';
import { SearchUsersParamsType } from '@app/types/SearchUsersParamsType';
import { UpdateUserPayloadType } from '@app/types/UpdateUserPayloadType';
import { CurrentUserType, ResponseUserType } from '@app/types/UserTypes';
import {
  checkErrorMessage,
  ErrorMessageType,
} from '@components/elements/search-users/addEditUserForm/utils/checkErrorMessage';
import { removeEmptyFields } from '@utils/removeEmptyFields';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

class UsersStore {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  isLoading = false;

  page = 0;

  perPage = 5;

  userTotalCount = 1;

  users = [new ResponseUserType()];

  currentUser = new CurrentUserType();

  private searchUsersParams: SearchUsersParamsType = {
    per_page: 5,
    page: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setSearchUsersParams = (params: SearchUsersParamsType) => {
    this.searchUsersParams = {
      ...this.searchUsersParams,
      ...params,
    };
  };

  cleanSearchUsersParams = () => {
    this.searchUsersParams = {};
    this.getUsers();
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

  getUsers = async () => {
    this.isLoading = true;

    try {
      const filteredUserData = removeEmptyFields(this.searchUsersParams);
      const res = await userService.getUsers(filteredUserData);

      runInAction(() => {
        this.users = res.items;
        this.userTotalCount = res.total;
        this.perPage = res.perPage;
        this.page = Number(res.page);
      });
    } catch (error) {
      console.warn(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

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
}

export default new UsersStore();
