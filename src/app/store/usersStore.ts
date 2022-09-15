import { userService } from '@app/services/userService';
import { Nullable } from '@app/types';
import { PayloadUserType } from '@app/types/PayloadUserType';
import {
  CurrentUserType,
  ResponseSearchUser,
  ResponseSearchUserWithPagination,
  ResponseUserType,
} from '@app/types/UserTypes';
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

  users = [] as ResponseUserType[];

  usersList: Nullable<ResponseSearchUser[]> = null;

  currentUser = new CurrentUserType();

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

  getUsers = async (data?: ResponseSearchUserWithPagination) => {
    this.isLoading = true;

    try {
      const filteredUserData = DeleteEmptyValue(data);
      const res = await userService.getUsers(filteredUserData);

      runInAction(() => {
        this.usersList = res.items;
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
}

export default new UsersStore();
