import { FC } from 'react';

import { Routes } from '@constants/Routes';
import avatar from '@svgs/user-mini.svg';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import cl from 'src/components/elements/account/Account.module.scss';

const Account: FC = () => {
  const { Index } = Routes;
  const activeNotification = false;

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

      <button type="button" className={cl.logout}>
        <Link href={Index}>Выйти из аккаунта</Link>
      </button>
    </div>
  );
};

export default Account;