import { FC } from 'react';

import { UsersStatuses } from '@app/enums';
import UserCard from '@components/elements/users/user-card/UserCard';

export interface IUser {
  id: string;
  userName: string;
  status: UsersStatuses;
  city?: string;
  phone: string;
  teacher: string;
  group: string;
  isPaid?: boolean;
}

interface IUsersList {
  users: IUser[];
}

const UsersList: FC<IUsersList> = ({ users }) => (
  <div>
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UsersList;
