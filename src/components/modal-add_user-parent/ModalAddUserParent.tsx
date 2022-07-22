import React, { useState } from 'react';

import CustomButton from '@components/custom-button/CustomButton';
import FormAddUser from '@components/modal-add-user/form-user/FormAddUser';
import FormParent from '@components/modal-add_user-parent/form-parent/FormParent';
import ModalBasic from '@components/modal-basic/ModalBasic';

import styles from './ModalAddUserParent.module.scss';

type ModalAddUserParentPropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean;
};

const ModalAddUserParent = ({ closeMode, setOpen, open }: ModalAddUserParentPropsType) => {
  const [person, setPerson] = useState([1]);

  const addParent = () => {
    setPerson([...person, 1]);
  };

  return (
    <ModalBasic isVisibility={open} changeVisibility={setOpen}>
      <div className={styles.modal}>
        <FormAddUser onCloseModal={closeMode} />
        {person.map((m, index) => (
          <div key={index}>
            <div className={styles.line} />
            <FormParent onCloseModal={closeMode} />
          </div>
        ))}
        <div onClick={addParent} className={styles.button}>
          <span />
        </div>
        <CustomButton title="Сохранить" />
      </div>
    </ModalBasic>
  );
};

export default ModalAddUserParent;
