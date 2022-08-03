import React from 'react';

import { auth } from '@app/store/authStore';
import CodeLogin from '@components/code-login/CodeLogin';
import PhoneLogin from '@components/phone-login/PhoneLogin';
import { observer } from 'mobx-react-lite';

import style from './Login.module.scss';

const Login = () => (
  <div className={style.wrapper}>
    <div>{!auth.code ? <PhoneLogin /> : <CodeLogin />}</div>
  </div>
);

export default observer(Login);

export type Inputs = {
  phone: string;
  code: number;
};
