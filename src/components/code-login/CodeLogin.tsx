import React, { useState } from 'react';

import { auth } from '@app/store/authStore';
import styles from '@pages/login/Login.module.scss';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

const CodeLogin = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: number }>();

  const onSubmit: SubmitHandler<{ code: number }> = ({ code }) => {
    const { phone } = auth;
    auth.postLoginCode(code, phone);
    setIsDisabled(true);
    router.push('/');
    setIsDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div>Ваш телефон</div>
        <div>{auth.phone}</div>
        <input value={auth.code} type="text" {...register('code')} />
        <button disabled={isDisabled}>Подтвердить</button>
        <div>Отправить повторно</div>
      </div>
    </form>
  );
};

export default observer(CodeLogin);
