import { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';
import DefaultLayout from 'src/components/modules/layout/default/DefaultLayout';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const rout = useRouter();
  console.log(rout);
  const isLogin =
    rout.asPath === '/login' || rout.asPath === '/register' || rout.asPath === '/students';
  return (
    <>
      <DefaultLayout isLogin={isLogin}>{children}</DefaultLayout>
    </>
  );
};

export default Layout;
