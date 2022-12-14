import { FC, ReactNode, useEffect } from 'react';

import { AuthGuard } from '@app/common/AuthGuard';
import { RoleId } from '@app/enums';
import { UserAuth } from '@app/models/auth/UserAuth';
import { Routes } from '@constants/Routes';
import { useAuthContext } from '@contexts/AuthContext';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
  guard?: AuthGuard;
}

function checkGuardAccess(guard?: AuthGuard, auth?: UserAuth) {
  if (
    guard &&
    ((guard.allowAuth && !auth) ||
      (guard.disallowAuth && auth) ||
      (guard.allowAuth &&
        auth &&
        ((guard.roleIds?.length && !guard.roleIds.includes(auth.roleId as RoleId)) ||
          (guard.excludeRoleIds?.length && guard.excludeRoleIds.includes(auth.roleId as RoleId)))))
  ) {
    return false;
  }
  return true;
}

const Guard: FC<Props> = ({ children, guard }) => {
  const router = useRouter();
  const { auth } = useAuthContext();

  useEffect(() => {
    const allowAccess = checkGuardAccess(guard, auth);
    if (!allowAccess) {
      const redirect = guard?.redirect ?? `${Routes.Signin}?redirect=${router.asPath}`;
      router.push(redirect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  const allowAccess = checkGuardAccess(guard, auth);
  return <>{allowAccess ? children : 'Loading...'}</>;
};

export default Guard;
