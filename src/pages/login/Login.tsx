import React from 'react';

import { auth } from '@app/store/authStore';
import CodeLogin from '@components/code-login/CodeLogin';
import PhoneLogin from '@components/phone-login/PhoneLogin';
import { observer } from 'mobx-react-lite';

const Login = observer(() => <>{!auth.code ? <PhoneLogin /> : <CodeLogin />}</>);

export default Login;

export type Inputs = {
  phone: string;
  code: number;
};
