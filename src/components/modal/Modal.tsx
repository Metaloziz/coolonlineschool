import { FC, ReactNode } from 'react';
import cl from './Modal.module.scss';

const Modal: FC<{
  children: ReactNode;
  isOpen: boolean;
}> = ({ children, isOpen }) => {
  return isOpen ? <div className={cl.container}>{children}</div> : null;
};

export default Modal;
