import { FC } from 'react';

import { appStore, Roles } from '@app/store';
import { ReportTeacher } from '@components/modules';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const IndexPage: FC = () => {
  const { role } = appStore;
  const { push } = useRouter();
  const { NotFount } = Routes;

  switch (role) {
    case Roles.Admin:
      return <ReportTeacher />;
    case Roles.Teacher:
    case Roles.Student:
    default:
      push(NotFount);
  }
  return <div />;
};

export default IndexPage;
