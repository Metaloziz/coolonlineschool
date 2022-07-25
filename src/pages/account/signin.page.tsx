import { ChangeEvent, FormEvent, useState } from 'react';

import { AuthGuard } from '@app/common/AuthGuard';
import { AuthService } from '@app/services/AuthService';
import { Roles } from '@app/store/appStore';
import Button from '@components/button/Button';
import ModalEntrance from '@components/modal-entrance/ModalEntrance';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';
import { getProfile } from '@utils/Auth';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

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
      case Roles.TeacherEducation:
        setPhone(`${func(isTester, isAnalytic)}7007070`);
        break;
      case Roles.Teacher:
        setPhone(`${func(isTester, isAnalytic)}6006060`);
        break;
      case Roles.FranchiseeAdmin:
        setPhone(`${func(isTester, isAnalytic)}5005050`);
        break;
      case Roles.Franchisee:
        setPhone(`${func(isTester, isAnalytic)}4004040`);
        break;
      case Roles.Methodist:
        setPhone(`${func(isTester, isAnalytic)}3003030`);
        break;
      case Roles.Tutor:
        setPhone(`${func(isTester, isAnalytic)}2002020`);
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

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const res2 = await AuthService.login({ phone, email: data.email });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{}}>
          <Button onClick={() => setIsAnalytic(true)}>Кнопка для аналитика</Button>
          <Button onClick={() => setIsTester(true)}>Кнопка для тестировщика</Button>
          <Button onClick={resetRole}>Сброс номера на основной</Button>
          <Button
            onClick={() => {
              setIsReady(true);
            }}
          >
            login
          </Button>
        </div>
        <ModalEntrance changeVisibility={setIsReady} isVisibility={isReady} register={register} />
      </form>
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
