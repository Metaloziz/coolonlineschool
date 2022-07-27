import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, Input, ModalBasic } from '@components';
import { Routes } from '@constants/Routes';
import Link from 'next/link';

import styles from './ModalEntrance.module.scss';

const ModalEntrance = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const { Signout } = Routes;
  return (
    <ModalBasic isVisibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Вход</h2>
        <div className={styles.userData}>
          <Input placeholder="Почта / телефон" />
          <Input placeholder="Пароль" />
        </div>
        <Button className={styles.btnEntries} colorTheme={ButtonColorThemes.red}>
          Вход
        </Button>
        <div>
          <Link href={Signout}>Забыли пароль?</Link>
          <Link href={Signout}>Регистрация</Link>
        </div>
      </div>
    </ModalBasic>
  );
};
export default ModalEntrance;
