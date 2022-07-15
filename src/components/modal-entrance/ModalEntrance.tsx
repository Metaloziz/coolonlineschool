import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import BasicModal from '@components/basic-modal/BasicModal';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import { Routes } from '@constants/Routes';
import Link from 'next/link';

import styles from './ModalEntrance.module.scss';

const ModalEntrance = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const { Signout } = Routes;
  return (
    <BasicModal visibility={showModal} changeVisibility={setShowModal}>
      <div className={styles.wrapContent}>
        <h2>Вход</h2>
        <div className={styles.userData}>
          <Input className={styles.input} placeholder="Почта / телефон" />
          <Input className={styles.input} placeholder="Пароль" />
        </div>
        <Button className={styles.btnEntries} colorTheme={ButtonColorThemes.red}>
          Вход
        </Button>
        <div>
          <Link href={Signout}>Забыли пароль?</Link>
          <Link href={Signout}>Регистрация</Link>
        </div>
      </div>
    </BasicModal>
  );
};
export default ModalEntrance;
