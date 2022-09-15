import { Paths } from '@app/enums/Paths';
import { instance } from '@app/services/instance';

type listOfTeacherType = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  roleCode: string;
  city: null;
  groups: [];
  active: boolean;
  payed: null;
  avatar: null;
  createdAt: createdAtType;
};

type createdAtType = {
  date: string;
  timezone_type: number;
  timezone: string;
};

type ItemType = { items: listOfTeacherType[] };

const classService = {
  getTeacher: async () => {
    const { data } = await instance.get<ItemType>(Paths.Users, { params: { role: 'teacher' } });
    return data;
  },
};

export default classService;
