import React, { FC, SyntheticEvent } from 'react';

import buttonClose from '@svgs/button-close.svg';
import cn from 'classnames';
import Image from 'next/image';

import styles from './ModalBasic.module.scss';

type ModalAddUserPropsType = {
  isVisibility: boolean;
  changeVisibility: (n: boolean) => void;
  children: React.ReactNode;
  className?: string;
};

const ModalBasic: FC<ModalAddUserPropsType> = ({
  isVisibility,
  className,
  changeVisibility,
  children,
}) => {
  if (!isVisibility) {
    return null;
  }

  const handlerStopPropagation = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    changeVisibility(false);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={cn(styles.content, className)} onClick={handlerStopPropagation}>
        <div className={styles.btnClose} onClick={closeModal}>
          <Image src={buttonClose} width="14" height="14" alt="close" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalBasic;
