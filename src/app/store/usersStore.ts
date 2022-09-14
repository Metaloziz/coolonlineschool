import { SexEnum } from '@app/enums';
import { PayloadUser, ResponseUsersType, userService } from '@app/services/userService';
import { Nullable } from '@app/types';
import {
  ResponseSearchUser,
  ResponseSearchUserWithPagination,
  ResponseUserT,
} from '@app/types/UserTypes';
import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import {
  checkErrorMessage,
  ErrorMessageType,
} from '@components/elements/search-users/addEditUserForm/utils/checkErrorMessage';
import { DeleteEmptyValue } from '@utils/deleteEmptyValue';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

class UsersStore {
  isLoading = false;

  page = 0;

  perPage = 5;

  userTotalCount = 1;

  users = [] as ResponseUsersType[];

  usersList: Nullable<ResponseSearchUser[]> = null;

  constructor() {
    makeAutoObservable(this);
  }

  addUser(data: ResponseUsersType) {
    this.users.push(data);
  }

  async createUser(data: PayloadUser): Promise<ResponseUserT | undefined | ErrorMessageType> {
    try {
      const res = await userService.createUser(data);
      const isError = checkErrorMessage(res);

      if (isError) {
        return isError;
      }

      await this.requestUsers();
    } catch (e) {
      const { error } = e as { error: string };
      appStore.setErrorMessage(error);
      console.warn(error);
    }
    return undefined;
  }

  async editUser(data: AddUserType, id: string) {
    const dataRequest = {
      phone: !data.phone ? null : data.phone,
      email: !data.email ? null : data.email,
      role: data.role.label === '0' ? null : data.role.value,
      firstName: !data.firstName ? null : data.firstName,
      lastName: !data.lastName ? null : data.lastName,
      city: !data.lastName ? null : data.city,
      birthdate: !data.birthdate ? null : data.birthdate,
      sex: data.sex.label === 'None' ? null : data.sex.value === SexEnum.Male,
      middleName: !data.middleName ? null : data.middleName,
      groups: data.group.label === '0' ? null : [data.group.label],
    };
    try {
      const res = await userService.editUser(dataRequest, id);
    } catch (e) {
      runInAction(() => {
        appStore.setErrorMessage(JSON.stringify(e));
      });
    }
  }

  requestUsers = async (data?: ResponseSearchUserWithPagination) => {
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
