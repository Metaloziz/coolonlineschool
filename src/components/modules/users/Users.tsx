import React, { useEffect } from 'react';

import userStore from '@app/store/usersStore';
import { SearchUsers } from '@components/elements/search-users/SearchUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import styles from '@components/elements/users/users-list/UsersList.module.scss';
import { observer } from 'mobx-react-lite';

import cl from './Users.module.scss';

const Users = () => {
  const { users, getUsers, isLoading } = userStore;

  useEffect(() => {
    getUsers();
  }, []);

  const isUsersNotFound = users?.length === 0 && !isLoading;

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
