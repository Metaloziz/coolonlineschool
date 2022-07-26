import { ChangeEvent, FormEvent, useState } from 'react';

import { AuthGuard } from '@app/common/AuthGuard';
import { AuthService } from '@app/services/AuthService';
import { Roles } from '@app/store/appStore';
import Button from '@components/custom-button/CustomButton';
import ModalEntrance from '@components/modal-entrance/ModalEntrance';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';
import { getProfile } from '@utils/Auth';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Signin.module.scss';

const func = (isTester: boolean, isAnalytic: boolean) => {
  if (isTester) return '7970';
  if (isAnalytic) return '7930';
  return '7960';
};

const SignIn = () => {
  // const router = useRouter();
  // const { setUserAuthenticated, clearUserAuthenticated } = useAuthContext();

  const [isReady, setIsReady] = useState(false);
  const [isTester, setIsTester] = useState(false);
  const [isAnalytic, setIsAnalytic] = useState(false);
  const resetRole = () => {
    setIsAnalytic(false);
    setIsTester(false);
  };

  const [phone, setPhone] = useState('79601001010');
  const qwe = (role: Roles) => {
    switch (role) {
      case Roles.Student:
        setPhone(`${func(isTester, isAnalytic)}8008080`);
        break;
      case Roles.Teacher:
        setPhone(`${func(isTester, isAnalytic)}6006060`);
        break;
      case Roles.Admin:
        setPhone(`${func(isTester, isAnalytic)}1001010`);
        break;
      default:
        setPhone('79601001010');
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: phone,
    },
  });

  // const onSubmit: SubmitHandler<Inputs> = async data => {
  //   try {
  //     const res2 = await AuthService.login({ phone, email: data.email });
  //     await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res2.data.token}`));
  //     // await appStore.setUser();
  //     // const userData = await AuthService.loadme();
  //     // appStore.setRole(userData.role as Roles);
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };

  const loginHandler = async () => {
    try {
      const res1 = await AuthService.sms({ phone });
      const res2 = await AuthService.login({ phone, smsCode: res1.code });
      await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res2.data.token}`));
      // await appStore.setUser();
      // const userData = await AuthService.loadme();
      // appStore.setRole(userData.role as Roles);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.button}
          onClick={() => {
            setIsAnalytic(true);
            qwe(Roles.Student);
          }}
        >
          Ученик
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setIsTester(true);
            qwe(Roles.Teacher);
          }}
        >
          Учитель
        </div>
        <div
          className={styles.button}
          onClick={() => {
            resetRole();
            qwe(Roles.Admin);
          }}
        >
          Администратор
        </div>
        <Button title="Login" onClick={loginHandler} />
      </div>
      <ModalEntrance changeVisibility={setIsReady} isVisibility={isReady} register={register} />
    </>
  );
};

export default SignIn;

SignIn.guard = {
  disallowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;

export type Inputs = {
  email: string;
  password: string;
};
