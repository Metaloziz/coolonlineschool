import { useState } from 'react';
import { ButtonColorThemes } from '@app/enums';
import BasicModal from '@components/basic-modal/BasicModal';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import cl from '@components/teacher-comment/TeacherComment.module.scss';
import styles from './ModalEntrance.module.scss';

const ModalEntrance = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <BasicModal visibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Вход</h2>
        <div className={styles.userData}>
          <Input placeholder={'Почта / телефон'} />
          <Input className={cl.input} placeholder={'Пароль'} />
        </div>
        <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
          Вход
        </Button>
        <div>
          <a>Забыли пароль?</a>
          <a>Регистрация</a>
        </div>
      </div>
    </BasicModal>
  );
};
export default ModalEntrance;
