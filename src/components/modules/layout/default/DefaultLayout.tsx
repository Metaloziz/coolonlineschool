import { FC, ReactNode } from 'react';

import { SidebarNav } from '@components';
import Header from 'src/components/modules/header/Header';

import cl from './DefaultLayout.module.scss';

interface Props {
  children?: ReactNode;
  isLogin: boolean;
}

const DefaultLayout: FC<Props> = ({ isLogin, children }) => {
  if (isLogin) {
    return (
      <div id="default-layout" className={cl.layout}>
        <Header className={cl.header} />
        <div className={cl.content}>{children}</div>
      </div>
    );
  }
  return (
    <div id="default-layout" className={cl.layout}>
      <Header className={cl.header} />
      <SidebarNav />
      <div className={cl.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
