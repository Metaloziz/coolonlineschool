import { FC, ReactNode } from 'react';

import { SidebarNav } from '@components';

import Header from '../../header/Header';

import cl from './DefaultLayout.module.scss';

interface Props {
  children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => (
  <div id="default-layout" className={cl.layout}>
    <Header className={cl.header} />
    <SidebarNav />
    <div className={cl.content}>{children}</div>
  </div>
);

export default DefaultLayout;
