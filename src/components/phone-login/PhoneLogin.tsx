import React from 'react';

import { auth } from '@app/store/authStore';
import styles from '@pages/login/Login.module.scss';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';

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

  const onSubmit: SubmitHandler<{ phone: string }> = ({ phone }) => {
    auth.postLoginPhone(phone);
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

export default PhoneLogin;
