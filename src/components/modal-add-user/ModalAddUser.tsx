import React from 'react';
import FormAddUser from "@components/modal-add-user/form-user/FormAddUser";
import ModalBasic from "@components/modal-basic/ModalBasic";
import styles from "@components/modal-add-user/ModalAddUser.module.scss";
import CustomButton from "@components/custom-button/CustomButton";

type ModalAddUserParentPropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean
}


const ModalAddUserParent = ({closeMode, setOpen, open}: ModalAddUserParentPropsType) => {

  return (
    <ModalBasic visibility={open} changeVisibility={setOpen}>
      <div className={styles.modal}>
        <FormAddUser onCloseModal={closeMode}/>
      </div>
      <div className={styles.button}><CustomButton title={"Сохранить"}/></div>
    </ModalBasic>
  );
};

export default ModalAddUserParent;



