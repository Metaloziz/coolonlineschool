import { FC, ReactNode } from 'react';

import { SidebarNav } from '@components';
import cn from 'classnames';
import Header from 'src/components/modules/header/Header';

import cl from './DefaultLayout.module.scss';

interface Props {
  children?: ReactNode;
  isLoginPage: boolean;
}

const DefaultLayout: FC<Props> = ({ isLoginPage, children }) => {
  if (isLoginPage) {
    return (
      <div id="default-layout" className={cn(cl.layout, cl.myLayout)}>
        <Header isActiveMenuBurger={false} className={cl.header} />
        <div className={cl.content}>{children}</div>
      </div>
    );
  }

  return (
    <div id="default-layout" className={cl.layout}>
      <Header isActiveMenuBurger className={cl.header} />
      <SidebarNav />
      <div className={cl.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
