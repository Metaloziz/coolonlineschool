import { FC } from 'react';

import userStore from '@app/store/usersStore';
import CustomPagination from '@components/elements/custom-pagination/CustomPagination';
import UserCard from '@components/elements/users/user-card/UserCard';

import styles from './UsersList.module.scss';

const UsersList: FC = () => {
  const { userTotalCount, perPage, page, getUsers, users, setSearchUsersParams } = userStore;

  const paginate = (pageNumber: number) => {
    setSearchUsersParams({ page: pageNumber });
    getUsers();
  };
  const nextPage = () => {
    setSearchUsersParams({ page: page + 1 });
    getUsers();
  };
  const prevPage = () => {
    setSearchUsersParams({ page: page - 1 });
    getUsers();
  };

  return (
    <div>
      {users && users.map(user => <UserCard key={user.id} user={user} />)}

      <div className={styles.paginationList}>
        <CustomPagination
          currentPage={page}
          paginate={paginate}
          perPage={perPage}
          next={nextPage}
          prev={prevPage}
          total={userTotalCount}
        />
      </div>
    </div>
  );
};

export default UsersList;
