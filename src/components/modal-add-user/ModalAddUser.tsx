import React from 'react';

import CustomButton from '@components/custom-button/CustomButton';
import FormAddUser from '@components/modal-add-user/form-user/FormAddUser';
import styles from '@components/modal-add-user/ModalAddUser.module.scss';
import ModalBasic from '@components/modal-basic/ModalBasic';

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
