import React from 'react';

import { appStore, Roles } from '@app/store';
import AddUsers from '@components/elements/add-users/AddUsers';
import UsersList from '@components/elements/users/users-list/UsersList';
import { User } from '@components/modules';
import { Routes } from '@constants/Routes';
import { USERS } from '@mock/users';
import { useRouter } from 'next/router';

import cl from './UserList.module.scss';

const IndexPage = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Student:
      return <User />;
    case Roles.Admin:
    case Roles.Teacher:
    default:
      push(NotFount);
  }
  return (
    <div className={cl.container}>
      <AddUsers />
      <UsersList users={USERS} />
    </div>
  );
};

export default IndexPage;
