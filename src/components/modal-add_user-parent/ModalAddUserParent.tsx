import React, {useState} from 'react';

import styles from './ModalAddUserParent.module.scss';
import FormAddUser from "@components/modal-add-user/form-user/FormAddUser";
import ModalBasic from "@components/modal-basic/ModalBasic";
import FormParent from "@components/modal-add_user-parent/form-parent/FormParent";
import CustomButton from "@components/custom-button/CustomButton";

type ModalAddUserParentPropsType = {
  closeMode: () => void;
  setOpen: (n: boolean) => void;
  open: boolean
}


const ModalAddUserParent = ({closeMode, setOpen, open}: ModalAddUserParentPropsType) => {
  const [person,setPerson] = useState([1])

  const addParent = () => {
    setPerson([...person,1])
  }

  return (
    <ModalBasic visibility={open} changeVisibility={setOpen}>
      <div className={styles.modal}>
        <FormAddUser onCloseModal={closeMode}/>
        {person.map(m => <div>
          <div className={styles.line}></div>
          <FormParent onCloseModal={closeMode}/>
        </div>)}
        <div onClick={addParent} className={styles.button}>
          <span></span>
        </div>
        <CustomButton title={"Сохранить"}/>
      </div>
    </ModalBasic>
  );
};

export default ModalAddUserParent;



