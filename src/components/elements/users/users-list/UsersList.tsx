import { FC } from 'react';

import { users } from '@app/store/usersStore';
import { ResponseSearchUser } from '@app/types/UserTypes';
import CustomPagination from '@components/elements/custom-pagination/CustomPagination';
import UserCard from '@components/elements/users/user-card/UserCard';

import styles from './UsersList.module.scss';

interface IUsersList {
  searchUsers: ResponseSearchUser[];
}

const UsersList: FC<IUsersList> = ({ searchUsers }) => {
  const { userTotalCount, perPage, page, requestUsers, isLoading } = users;

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
      {searchUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}

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
