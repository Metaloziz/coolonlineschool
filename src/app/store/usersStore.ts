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

export type RequestUsersType = {
  phone: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  city: string;
  birthdate: string;
  sex: boolean;
};

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
    };
    try {
      const res = await userService.createUser(dataRequest);
      this.addUser(res.data);
    } catch (e) {
      const { message } = e as AxiosError;
      console.log(message);
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
