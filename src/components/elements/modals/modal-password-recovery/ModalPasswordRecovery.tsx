import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { ModalBasic } from '@components';
import Button from '@components/elements/button/Button';
import Input from '@components/elements/input/Input';
import { Routes } from '@constants/Routes';
import Link from 'next/link';

import styles from './ModalPasswordRecovery.module.scss';

const ModalPasswordRecovery = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const { Signout } = Routes;
  return (
    <ModalBasic isVisibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Восстановление пароля</h2>
        <div className={styles.userData}>
          <Input placeholder="ФИО ученика" />
          <Input placeholder="Почта / телефон" />
        </div>
        <Button className={styles.btnSend} colorTheme={ButtonColorThemes.red}>
          Отправить
        </Button>
        <div>
          <Link href={Signout}>Регистрация</Link>
        </div>
      </div>
    </ModalBasic>
  );
};
export default ModalPasswordRecovery;
