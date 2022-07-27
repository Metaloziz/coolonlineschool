import { useEffect } from 'react';

import { AuthGuard } from '@app/common/AuthGuard';
import BlankLayout from '@components/modules/layout/blank/BlankLayout';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';
import { useRouter } from 'next/router';

const SignOut = () => {
  const router = useRouter();
  const { clearUserAuthenticated } = useAuthContext();

  useEffect(() => {
    clearUserAuthenticated();
    router.push(Routes.Index);
  });

  return <>Loading...</>;
};

export default SignOut;

SignOut.layout = BlankLayout;

SignOut.guard = {
  allowAuth: true,
  redirect: Routes.Index,
} as AuthGuard;
