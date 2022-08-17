import React, { FC } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { auth } from '@app/store/authStore';
import { Button } from '@components';
import { InformationItem } from '@components/elements';
import { useReverseTimer } from '@hooks/useReverseTimer';
import { observer } from 'mobx-react-lite';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import styles from './ModalSmsCode.module.scss';

interface Props {
  onClose?: () => void;
  getCode?: (userCode: number) => void;
}

const ModalSmsCode: FC<Props> = ({ getCode, onClose }) => {
  const { phone, isLoading, code, sms } = auth;
  const { seconds, startTimer, clearTimer } = useReverseTimer(60);

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<{ userCode: number }>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<{ userCode: number }> = async ({ userCode }) => {
    try {
      if (getCode) {
        phone && getCode(userCode);
      }
      onClose && onClose();
    } finally {
      clearTimer();
    }
  };

  const onRequestAgainCodeClick = async () => {
    phone && (await sms(phone));
    startTimer();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.innerContainer}>
      <p className={styles.getSmsCode}>sms code:{code}</p>
      <p>Ваш телефон</p>
      <h2>
        <InformationItem
          value={phone?.substring(1) || 'Ошибка'}
          id="1"
          variant="phone"
          displayType="text"
        />
      </h2>
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
            className={styles.codeBlock}
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
          <p className={styles.sendCode} onClick={onRequestAgainCodeClick}>
            Выслать код повторно
          </p>
        )}
      </div>
    </form>
  );
};

export default observer(ModalSmsCode);
