import React from 'react';

import styles from './ModalBasic.module.scss';

import ButtonClose from 'public/svgs/modal/index';


type ModalAddUserPropsType = {
  visibility: boolean
  changeVisibility: (n: boolean) => void
  children: React.ReactNode
}

const ModalBasic = ({visibility, changeVisibility, children}: ModalAddUserPropsType) => {
  if (!visibility) {
    return null
  }
  return (
    <div className={styles.modal} onClick={() => changeVisibility(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div onClick={
          () => changeVisibility(false)
        } className={styles.image}><ButtonClose/></div>
        {children}
      </div>
    </div>
  );
};

export default ModalBasic;



