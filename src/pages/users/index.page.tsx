import { appStore, Roles } from '@app/store';
import Users from '@components/modules/users/Users';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Admin:
    case Roles.Teacher:
      return <Users />;
    case Roles.Student:
    default:
      push(NotFount);
  }
  return <div />;
};

export default IndexPage;
