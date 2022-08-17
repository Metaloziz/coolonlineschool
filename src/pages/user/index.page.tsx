import React from 'react';

import AddUsers from '@components/elements/add-users/AddUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import { USERS } from '@mock/users';

import cl from './UserList.module.scss';

const IndexPage = () => (
  <div className={cl.container}>
    <AddUsers />
    <UsersList users={USERS} />
  </div>
);

export default IndexPage;
