import { SexEnum } from '@app/enums';
import { ResponceUsersType, userService } from '@app/services/userService';
import { Roles } from '@app/store/appStore';
import {
  ResponseSearchUser,
  ResponseSearchUserNewUsers,
  ResponseSearchUserWithPagination,
} from '@app/types/UserTypes';
import { WithPagination } from '@app/types/WithPagination';
import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

class UsersStore {
  isLoading = false;

  page = 0;

  perPage = 5;

  userTotalCount = 1;

  constructor() {
    makeAutoObservable(this);
  }

  users = [] as ResponceUsersType[];

  usersList = [] as ResponseSearchUser[];

  addUser(data: ResponceUsersType) {
    this.users.push(data);
  }

  async createUser(data: AddUserType) {
    const dataRequest = {
      phone: data.phone,
      email: data.email,
      role: data.role.value,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      birthdate: data.birthdate,
      sex: data.sex.value === SexEnum.Male,
      middleName: data.middleName,
      groups: [data.group.label],
    };
    try {
      const res = await userService.createUser(dataRequest);
      this.addUser(res.data);
    } catch (e) {
      const { error } = e as { error: string };
      if (error === 'insufficient rights') {
        appStore.setErrorMessage('Этот номер телефона уже используется');
      }
      console.log(error);
      // runInAction(() => {
      //   appStore.setErrorMessage(JSON.stringify(e));
      // });
    }
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
      const res = await userService.getUsers(data);
      runInAction(() => {
        this.usersList = res.items;
        this.userTotalCount = res.total;
        this.perPage = res.perPage;
        this.page = Number(res.page);
      });
      console.log('res', res);
    } catch (error) {
      this.usersList = [];
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}

export const users = new UsersStore();
