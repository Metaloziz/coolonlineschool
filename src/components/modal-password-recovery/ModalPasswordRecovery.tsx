import { useState } from 'react';
import { ButtonColorThemes } from '@app/enums';
import BasicModal from '@components/basic-modal/BasicModal';
import styles from '@components/modal-password-recovery/ModalPasswordRecovery.module.scss';
import cl from '@components/teacher-comment/TeacherComment.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';

const ModalPasswordRecovery = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <BasicModal visibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Восстановление пароля</h2>
        <div className={styles.userData}>
          <Input placeholder={'ФИО ученика'} />
          <Input className={cl.input} placeholder={'Почта / телефон'} />
        </div>
        <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
          Отправить
        </Button>
        <div>
          <a>Регистрация</a>
        </div>
      </div>
    </BasicModal>
  );
};
export default ModalPasswordRecovery;
