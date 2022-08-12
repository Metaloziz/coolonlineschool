import { appStore, Roles } from '@app/store';
import { Payment } from '@components/modules';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Admin:
    case Roles.Teacher:
    case Roles.Student:
      return <Payment />;
    default:
      push(NotFount);
  }
  return <div />;
};

export default IndexPage;
