import React from 'react';

import { ButtonColorThemes } from '@app/enums';
import { auth } from '@app/store/authStore';
import { Button } from '@components';
import { InformationItem } from '@components/elements';
import { useReverseTimer } from '@hooks/useReverseTimer';
import { observer } from 'mobx-react-lite';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import styles from './CodeLogin.module.scss';

const CodeLogin = () => {
  const { phone, setPhone, isLoading, code, sms } = auth;

  const { seconds, startTimer, clearTimer } = useReverseTimer(60);

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<{ userCode: number }>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<{ userCode: number }> = async ({ userCode }) => {
    phone && (await auth.login(userCode, phone));
    clearTimer();
  };

  const onRenterPhoneClick = () => {
    setPhone(null);
  };

  const onRequestAgainCodeClick = async () => {
    phone && (await sms(phone));
    startTimer();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapContent}>
      <p className={styles.tempCode}>sms code:{code}</p>
      <p>Ваш телефон</p>
      <h2>
        <InformationItem value={phone || 'Ошибка'} id="1" variant="phone" displayType="text" />
      </h2>
      <p className={styles.description} onClick={onRenterPhoneClick}>
        Изменить номер телефона
      </p>
      <p>Временный код</p>

      <Controller
        control={control}
        name="userCode"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur } }) => (
          <InformationItem
            onChangeNumber={onChange}
            onBlur={onBlur}
            id="2"
            variant="pin"
            className={styles.inputNumberBlock}
            placeholder="_ _ _ _"
          />
        )}
      />

      <Button
        type="submit"
        className={styles.button}
        disabled={!isValid || isLoading}
        colorTheme={ButtonColorThemes.red}
      >
        Подтвердить
      </Button>
      <div>
        {seconds ? (
          <p className={styles.timer}>
            Сообщение отправлено. Повторно вы сможете запросить код через {seconds} секунд.
          </p>
        ) : (
          <p className={styles.code} onClick={onRequestAgainCodeClick}>
            Выслать код повторно
          </p>
        )}
      </div>
    </form>
  );
};

export default observer(CodeLogin);
