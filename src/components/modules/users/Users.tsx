import React from 'react';

import SearchUsers from '@components/elements/search-users/SearchUsersUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import { USERS } from '@mock/users';

import cl from './Users.module.scss';

const Users = () => (
  <div className={cl.container}>
    <SearchUsers />
    <UsersList users={USERS} />
  </div>
);

export default Users;
