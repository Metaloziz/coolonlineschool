import { RoleId } from '@app/enums';
import authService from '@app/services/AuthService';
import clientService from '@app/services/ClientService';
import managerService from '@app/services/ManagerService';
import { AuthKey } from '@constants/Common';
import { NextPageContext } from 'next';

import { getCookie } from './Cookie';

export async function getProfile(token: string, roleId: string, locale?: string) {
  if (roleId === RoleId.Client) {
    // eslint-disable-next-line no-return-await
    return await clientService.getProfile({ token, locale });
  }
  // eslint-disable-next-line no-return-await
  return await managerService.getProfile({ token, locale });
}

export async function checkUserAuthenticated(ctx: NextPageContext) {
  let auth;
  let profile;
  const token = getCookie(AuthKey, ctx.req?.headers?.cookie || '');
  if (token) {
    try {
      auth = await authService.authenticate({ token });
      auth.token = token;
      profile = await getProfile(token, auth.roleId);
    } catch (error) {
      ctx.res?.setHeader('set-cookie', 'token=; max-age=0');
    }
  }
  return { auth, profile };
}
