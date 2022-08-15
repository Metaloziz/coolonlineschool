import React, { useState } from 'react';

import { ModalBasic } from '@components';
import CustomButton from '@components/elements/custom-button/CustomButton';
import styles from '@components/elements/modals/modal-add_user-parent/ModalAddUserParent.module.scss';
import FormUser from 'src/components/elements/modals/modal-add_user-parent/form-user/FormUser';

import FormParent from './form-parent/FormParent';

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
        <FormUser onCloseModal={closeMode} />
        {person.map((m, index) => (
          <div key={index}>
            <div className={styles.line} />
            <FormParent onCloseModal={closeMode} />
          </div>
        ))}
        <div onClick={addParent} className={styles.button}>
          <span />
        </div>
        <CustomButton type="button" title="Сохранить" />
      </div>
    </ModalBasic>
  );
};

export default ModalAddUserParent;
