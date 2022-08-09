import React, { useEffect } from 'react';

import { appStore } from '@app/store';
import { auth } from '@app/store/authStore';
import { CodeLogin, PhoneLogin, TempLogin } from '@components/elements';
import { Routes } from '@constants/Routes';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import style from './Login.module.scss';

const Login = () => {
  const { isInitialize } = appStore;
  const { phone, isLogin } = auth;
  const { push } = useRouter();
  const { Index } = Routes;

  useEffect(() => {
    if (isLogin) {
      push(Index);
    }
  }, [isLogin]);

  if (!isInitialize || isLogin) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.wrapper}>
      <div>{!phone ? <PhoneLogin /> : <CodeLogin />}</div>
      <TempLogin />
    </div>
  );
};

export default observer(Login);
