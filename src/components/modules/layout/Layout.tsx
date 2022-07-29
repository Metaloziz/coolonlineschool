import { ReactNode } from 'react';

import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';
import DefaultLayout from 'src/components/modules/layout/default/DefaultLayout';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const { Registration, Login } = Routes;

  const isLoginPage = asPath === Registration || asPath === Login;

  return <DefaultLayout isLoginPage={isLoginPage}>{children}</DefaultLayout>;
};

export default Layout;
