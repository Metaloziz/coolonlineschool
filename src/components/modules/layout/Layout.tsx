import { ReactNode } from 'react';

import { SidebarNav, Header } from '@components/modules';
import { Routes } from '@constants/Routes';
import { useRouter } from 'next/router';

import styles from './Layout.module.scss';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const { Registration, Login } = Routes;

  const isLoginPage = asPath === Registration || asPath === Login;

  if (isLoginPage) {
    return (
      <div id="default-layout" className={styles.layout}>
        <Header isActiveMenuBurger={false} className={styles.header} />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  return (
    <div id="default-layout" className={styles.layout}>
      <Header isActiveMenuBurger className={styles.header} />
      <SidebarNav />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
