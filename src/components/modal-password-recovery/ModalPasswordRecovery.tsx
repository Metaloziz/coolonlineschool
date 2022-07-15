import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import BasicModal from '@components/basic-modal/BasicModal';
import styles from '@components/modal-password-recovery/ModalPasswordRecovery.module.scss';
import { Routes } from '@constants/Routes';
import Link from 'next/link';

import Button from '../button/Button';
import Input from '../input/Input';

const ModalPasswordRecovery = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const { Signout } = Routes;
  return (
    <BasicModal visibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Восстановление пароля</h2>
        <div className={styles.userData}>
          <Input placeholder="ФИО ученика" className={styles.input} />
          <Input className={styles.input} placeholder="Почта / телефон" />
        </div>
        <Button className={styles.btnSend} colorTheme={ButtonColorThemes.red}>
          Отправить
        </Button>
        <div>
          <Link href={Signout}>Регистрация</Link>
        </div>
      </div>
    </BasicModal>
  );
};
export default ModalPasswordRecovery;
