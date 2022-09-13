import React, { useEffect } from 'react';

import { users } from '@app/store/usersStore';
import SearchUsers from '@components/elements/search-users/SearchUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import styles from '@components/elements/users/users-list/UsersList.module.scss';
import { observer } from 'mobx-react-lite';

import cl from './Users.module.scss';

const Users = () => {
  const { usersList, requestUsers, isLoading } = users;

  useEffect(() => {
    requestUsers();
  }, []);

  const isUsersNotFound = usersList?.length === 0 && !isLoading;

  return (
    <div className={cl.container}>
      <SearchUsers />

      {isUsersNotFound && (
        <div className={styles.noBlocks}>
          <h3>Пользователь не найден</h3>
        </div>
      )}
      <UsersList />
    </div>
  );
};

export default observer(Users);
