import { SexEnum } from '@app/enums';
import { ResponceUsersType, userService } from '@app/services/userService';
import { AddUserType } from '@components/elements/modals/modal-add-user/form-user/FormAddUser';
import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';

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

class usersStore {
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
    };
    try {
      const res = await userService.createUser(dataRequest);
      this.addUser(res.data);
    } catch (e) {
      const { message } = e as AxiosError;
      console.log(message);
    }
  }
}

// eslint-disable-next-line new-cap
export const users = new usersStore();
