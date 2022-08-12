import { appStore, Roles } from '@app/store';
import { Schedule } from '@components/modules';
import { Routes } from '@constants/Routes';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Admin:
    case Roles.Student:
    case Roles.Teacher:
      return <Schedule />;
    default:
      push(NotFount);
  }
  return <div />;
};
export default observer(IndexPage);
