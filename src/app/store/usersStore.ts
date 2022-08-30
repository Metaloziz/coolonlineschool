import { SexEnum } from '@app/enums';
import { RequestUser, ResponceUsersType, userService } from '@app/services/userService';
import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

import { appStore } from './appStore';

class UsersStore {
  constructor() {
    makeAutoObservable(this);
  }

  users = [] as ResponceUsersType[];

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
}

export const users = new UsersStore();
