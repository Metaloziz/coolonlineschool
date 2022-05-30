import { FC, ReactNode } from 'react';
import SidebarNavigation from '@containers/sidebar-navigation/SidebarNavigation';
import cl from './DefaultLayout.module.scss';
import Header from '../../header/Header';

interface Props {
  children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => (
  <div id="default-layout" className={cl.layout}>
    <Header className={cl.header} />
    <SidebarNavigation />
    <div className={cl.content}>{children}</div>
  </div>
);

export default DefaultLayout;
