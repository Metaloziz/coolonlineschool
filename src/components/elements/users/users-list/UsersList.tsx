import { FC } from 'react';

import { users } from '@app/store/usersStore';
import CustomPagination from '@components/elements/custom-pagination/CustomPagination';
import UserCard from '@components/elements/users/user-card/UserCard';

import styles from './UsersList.module.scss';

const UsersList: FC = () => {
  const { userTotalCount, perPage, page, requestUsers, usersList } = users;

  const paginate = (pageNumber: number) => {
    requestUsers({ page: pageNumber });
  };
  const nextPage = () => {
    requestUsers({ page: page + 1 });
  };
  const prevPage = () => {
    requestUsers({ page: page - 1 });
  };

  return (
    <div>
      {usersList && usersList.map(user => <UserCard key={user.id} user={user} />)}

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