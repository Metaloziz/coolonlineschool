import { appStore, Roles } from '@app/store';
import { Settings } from '@components/modules';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Admin:
      return <Settings />;
    case Roles.Teacher:
    case Roles.Student:
    default:
      push(NotFount);
  }
  return <div />;
};

export default IndexPage;
