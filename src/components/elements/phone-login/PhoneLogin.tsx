import React from 'react';

import { ButtonColorThemes } from '@app/enums';
import { auth } from '@app/store/authStore';
import { Button } from '@components';
import { InformationItem, LinkTo } from '@components/elements';
import { Routes } from '@constants/Routes';
import { observer } from 'mobx-react-lite';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import styles from './PhoneLogin.module.scss';

export const PhoneLogin = () => {
  const { Registration } = Routes;

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<{ phone: string }>({
    mode: 'all',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<{ phone: string }> = ({ phone }) => {
    auth.sms(phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapContent}>
      <h2>Авторизация</h2>
      <p>Ваш номер телефона.</p>

      <Controller
        control={control}
        name="phone"
        rules={{
          required: true,
          minLength: 11,
        }}
        render={({ field: { onChange, onBlur } }) => (
          <InformationItem
            onChange={onChange}
            onBlur={onBlur}
            id="1"
            variant="phone"
            className={styles.inputNumberBlock}
          />
        )}
      />

      <Button
        type="submit"
        disabled={!isValid}
        className={styles.button}
        colorTheme={ButtonColorThemes.red}
      >
        Войти
      </Button>

      <div>
        <LinkTo href={Registration}>Регистрация</LinkTo>
      </div>
    </form>
  );
};

export default observer(PhoneLogin);
