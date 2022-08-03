import React, { useState } from 'react';

import { Roles } from '@app/store/appStore';
import { auth } from '@app/store/authStore';
import CustomButton from '@components/elements/custom-button/CustomButton';
import style from '@pages/login/Login.module.scss';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';

export const PhoneLogin = () => {
  const roles = {
    student: '79608008080',
    teacher: '79606006060',
    admin: '79601001010',
  };

  const [iphone, setIphone] = useState('79601001010');

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ phone: string }>({
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<{ phone: string }> = ({ phone }) => {
    auth.postLoginPhone(iphone);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className={styles.wrapper}> */}
        {/*  <div>Авторизация</div> */}
        {/*  <div>Ваш номер телефона</div> */}
        {/*  <input type="text" {...register('phone')} /> */}
        {/*  <button>Войти</button> */}
        {/*  <div>Зарегистрироваться</div> */}
        {/* </div> */}

        <div>
          <div
            className={style.button}
            onClick={() => {
              setIphone(roles[Roles.Student]);
            }}
          >
            Ученик
          </div>
          <div
            className={style.button}
            onClick={() => {
              setIphone(roles[Roles.Teacher]);
            }}
          >
            Учитель
          </div>
          <div
            className={style.button}
            onClick={() => {
              setIphone(roles[Roles.Admin]);
            }}
          >
            Администратор
          </div>
          <button className={style.button}>login</button>
        </div>
      </form>
    </>
  );
};

export default observer(PhoneLogin);
