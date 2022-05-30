import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Routes } from '@constants/Routes';
import avatar from '@svgs/user-mini.svg';
import cl from './Account.module.scss';

const Account: FC = () => {
  const { Signout } = Routes;
  const activeNotification = false;

  return (
    <div className={cl.container}>
      <button
        className={classNames(cl.avatar, {
          [cl.activeNotification]: activeNotification,
        })}
      >
        <Image src={avatar} width={30} height={30} alt="avatar" />
        <div className={cl.notification}></div>
      </button>

      <button className={cl.logout}>
        <Link href={Signout}>Выйти из аккаунта</Link>
      </button>
    </div>
  );
};

export default Account;
