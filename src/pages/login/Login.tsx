import React, { useState } from 'react';

import { AuthService } from '@app/services/AuthService';
import { auth } from '@app/store/authStore';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Login.module.scss';

const Login = observer(() => (
  <>
    {!auth.code ? (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      <PhoneLogin />
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      <CodeLogin />
    )}
  </>
));

export default Login;

export type Inputs = {
  phone: string;
  code: number;
};

export const PhoneLogin = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ phone: string }>({
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<{ phone: string }> = async ({ phone }) => {
    const { code } = await AuthService.sms({ phone });
    auth.setPhone(phone);
    auth.setCode(code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div>Авторизация</div>
        <div>Ваш номер телефона</div>
        <input type="text" {...register('phone')} />
        <button>Войти</button>
        <div>Зарегистрироваться</div>
      </div>
    </form>
  );
});

export const CodeLogin = observer(() => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: number }>();

  const onSubmit: SubmitHandler<{ code: number }> = async ({ code }) => {
    if (Number(code) === auth.code) {
      const { phone } = auth;
      try {
        const res = await AuthService.login({ phone, smsCode: Number(auth.code) });
        await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res.data.token}`));
        setIsDisabled(true);
        const userData = await AuthService.loadme();
        auth.setLoadMe(userData);
        router.push('/');
      } catch (e) {
        console.warn(e);
      }
      setIsDisabled(false);
    }
  };

  console.log(auth.code);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div>Ваш телефон</div>
        <div>{auth.phone}</div>
        <input type="text" {...register('code')} />
        <button disabled={isDisabled}>Подтвердить</button>
        <div>Отправить повторно</div>
      </div>
    </form>
  );
});
