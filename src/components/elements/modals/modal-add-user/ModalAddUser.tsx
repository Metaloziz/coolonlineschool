import React from 'react';

import { ModalBasic } from '@components';
import CustomButton from '@components/elements/custom-button/CustomButton';

import FormAddUser from './form-user/FormAddUser';
import styles from './ModalAddUser.module.scss';

type ModalAddUserParentPropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean;
};

const ModalAddUser = ({ closeMode, setOpen, open }: ModalAddUserParentPropsType) => (
  <ModalBasic isVisibility={open} changeVisibility={setOpen}>
    <div className={styles.modal}>
      <FormAddUser onCloseModal={closeMode} />
    </div>
    <div className={styles.button}>
      <CustomButton title="Сохранить" />
    </div>
  </ModalBasic>
);

export default ModalAddUser;
