import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import ModalBasic from '@components/modal-basic/ModalBasic';
import { Routes } from '@constants/Routes';
import { Inputs } from '@pages/account/signin.page';
import Link from 'next/link';
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';

import styles from './ModalEntrance.module.scss';

const ModalEntrance: FC<ModalEntrancePropsType> = ({
  register,
  isVisibility,
  changeVisibility,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { Signout } = Routes;
  return (
    <ModalBasic isVisibility={isVisibility} changeVisibility={changeVisibility}>
      <div className={styles.wrapContent}>
        <h2>Вход</h2>
        <div className={styles.userData}>
          <Input {...register('email', { required: true })} placeholder="Почта / телефон" />
          <Input {...register('password', { required: true })} placeholder="Пароль" />
        </div>
        <Button type="submit" className={styles.btnEntries} colorTheme={ButtonColorThemes.red}>
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

type ModalEntrancePropsType = {
  register: UseFormRegister<Inputs>;
  isVisibility: boolean;
  changeVisibility: (n: boolean) => void;
};
