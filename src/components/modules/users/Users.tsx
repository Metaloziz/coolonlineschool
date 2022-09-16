import React, { useEffect } from 'react';

import userStore from '@app/store/usersStore';
import AddEditUserForm from '@components/elements/search-users/addEditUserForm/AddEditUserForm';
import { ModalMUI } from '@components/elements/search-users/addEditUserForm/components/modalMUI/ModalMUI';
import { Filter } from '@components/elements/search-users/filter/Filter';
import UsersList from '@components/elements/users/users-list/UsersList';
import styles from '@components/elements/users/users-list/UsersList.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import rus from 'dayjs/locale/ru';
import { observer } from 'mobx-react-lite';

import cl from './Users.module.scss';

const Users = () => {
  const { users, getUsers, isLoading } = userStore;

  useEffect(() => {
    getUsers();
  }, []);

  const isUsersNotFound = users?.length === 0 && !isLoading;

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={rus}>
      <div className={cl.container}>
        {/* <SearchUsers /> */}
        <ModalMUI open={isOpenModal} onClose={handleClose}>
          <AddEditUserForm onCloseModal={handleClose} />
        </ModalMUI>
        <Filter setIsModalOpen={setIsOpenModal} />

        {isUsersNotFound && (
          <div className={styles.noBlocks}>
            <h3>Пользователь не найден</h3>
          </div>
        )}
        <UsersList />
      </div>
    </LocalizationProvider>
  );
};

export default observer(Users);
