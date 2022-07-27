import { useState } from 'react';

import { AuthGuard } from '@app/common/AuthGuard';
import { AuthService } from '@app/services/AuthService';
import { Roles } from '@app/store/appStore';
import Button from '@components/custom-button/CustomButton';
import ModalEntrance from '@components/modal-entrance/ModalEntrance';
import { Routes } from '@constants/Routes';
import { useForm } from 'react-hook-form';

import styles from './Signin.module.scss';

const SignIn = () => {
  // const router = useRouter();
  // const { setUserAuthenticated, clearUserAuthenticated } = useAuthContext();

  const [isReady, setIsReady] = useState(false);

  const roles = {
    student: '79601001010',
    teacher: '79606006060',
    admin: '79601001010',
  };

  const [phone, setPhone] = useState('79601001010');

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
      const { code } = await AuthService.sms({ phone });
      const res = await AuthService.login({ phone, smsCode: code });
      await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${res.data.token}`));
      // await localStorage.setItem('user_secret', JSON.stringify(`Bearer ${token}`));
      // await appStore.setUser();
      const userData = await AuthService.loadme();
      console.log(userData);
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
            setPhone(roles[Roles.Student]);
          }}
        >
          Ученик
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setPhone(roles[Roles.Teacher]);
          }}
        >
          Учитель
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setPhone(roles[Roles.Admin]);
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
