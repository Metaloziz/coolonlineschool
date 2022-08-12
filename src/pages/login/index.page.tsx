import React, { useEffect } from 'react';

import { appStore, Roles } from '@app/store';
import { auth } from '@app/store/authStore';
import { CodeLogin, PhoneLogin, TempLogin } from '@components/elements';
import { Routes } from '@constants/Routes';
import { CircularProgress } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import style from './Login.module.scss';

const Login = () => {
  const { isInitialize } = appStore;
  const { phone, isLogin } = auth;
  const { role } = appStore;
  const { push } = useRouter();
  const { Index } = Routes;

  useEffect(() => {
    if (isLogin && role !== Roles.Unauthorized) {
      push(Index);
    }
  }, [isLogin, role]);

  if (!isInitialize || role !== Roles.Unauthorized) {
    return (
      <div className={style.wrapper}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <div>{!phone ? <PhoneLogin /> : <CodeLogin />}</div>
      <TempLogin />
    </div>
  );
};

export default observer(Login);
