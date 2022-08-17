import { UsersStatuses } from '@app/enums';
import { IUser } from '@components/elements/users/users-list/UsersList';

export const USERS: IUser[] = [
  {
    id: '1',
    userName: 'Днепровский Александр Алексеевич',
    status: UsersStatuses.student,
    city: 'Москва',
    phone: '+7(950)55 33 570',
    teacher: 'Евсеев Виктор Петрович',
    group: '1Б',
    isPaid: true,
  },
  {
    id: '2',
    userName: 'Камышев Виталий Алексеевич',
    status: UsersStatuses.student,
    city: 'Москва',
    phone: '+7(950)55 33 570',
    teacher: 'Евсеев Виктор Петрович',
    group: '1Б',
    isPaid: false,
  },
  {
    id: '1',
    userName: 'Днепровский Александр Алексеевич',
    status: UsersStatuses.student,
    city: 'Москва',
    phone: '+7(950)55 33 570',
    teacher: 'Евсеев Виктор Петрович',
    group: '1Б',
    isPaid: true,
  },
];
