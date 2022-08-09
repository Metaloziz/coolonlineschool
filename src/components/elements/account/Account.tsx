import { FC, useState } from 'react';

import { auth } from '@app/store/authStore';
import { Routes } from '@constants/Routes';
import avatar from '@svgs/user-mini.svg';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cl from 'src/components/elements/account/Account.module.scss';

import Button from '../button/Button';
import ModalBasic from '../modals/modal-basic/ModalBasic';

const Account: FC = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { Index, Signin } = Routes;
  const activeNotification = false;

  const { push } = useRouter();

  const handlerShow = async () => {
    setShowModal(false);
    await auth.logout();
    await push(Signin);
  };

  const noOutAccount = () => {
    setShowModal(false);
  };

  const outAccount = () => {
    setShowModal(true);
  };

  return (
    <div className={cl.container}>
      <button
        type="button"
        className={classNames(cl.avatar, {
          [cl.activeNotification]: activeNotification,
        })}
      >
        <Image src={avatar} width={30} height={30} alt="avatar" />
        <div className={cl.notification} />
      </button>

      <button type="button" className={cl.logout} onClick={outAccount}>
        Выйти из аккаунта
      </button>
      <ModalBasic isVisibility={showModal} changeVisibility={setShowModal}>
        <div className={cl.modalBlock}>
          <h2>Действительно ли Вы хотите выйти?</h2>
          <div className={cl.btnBlock}>
            <Button onClick={handlerShow}>Да</Button>
            <Button onClick={noOutAccount}>Нет</Button>
          </div>
        </div>
      </ModalBasic>
    </div>
  );
});

export default Account;
