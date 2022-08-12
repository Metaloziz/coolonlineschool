import { useEffect } from 'react';

import { appStore, auth, Roles } from '@app/store';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

const Home = () => {
  const { isLoading } = auth;
  const { role } = appStore;
  const { push } = useRouter();
  const { Report, User, Schedule, Login } = Routes;

  const redirect = async (route: string) => {
    await push(route);
  };

  useEffect(() => {
    if (role === Roles.Admin) {
      redirect(Report);
    }

    if (role === Roles.Student) {
      redirect(User);
    }

    if (role === Roles.Teacher) {
      redirect(Schedule);
    }

    if (role === Roles.Unauthorized) {
      redirect(Login);
    }
  }, [isLoading, role]);

  return <div />;
};

export default Home;
