import { FC, ReactNode } from 'react';
import cl from './BlankLayout.module.scss';

interface Props {
  children: ReactNode;
}

const BlankLayout: FC<Props> = ({ children }) => (
  <div className={cl.layout}>
    <div className={cl.content}>{children}</div>
  </div>
);

export default BlankLayout;
