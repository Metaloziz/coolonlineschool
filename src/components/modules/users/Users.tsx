import React, { useEffect } from 'react';

import { users } from '@app/store/usersStore';
import SearchUsers from '@components/elements/search-users/SearchUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import { observer } from 'mobx-react-lite';

import cl from './Users.module.scss';

const Users = () => {
  const { usersList, requestUsers } = users;

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div className={cl.container}>
      <SearchUsers />
      <UsersList searchUsers={usersList} />
    </div>
  );
};

export default observer(Users);
