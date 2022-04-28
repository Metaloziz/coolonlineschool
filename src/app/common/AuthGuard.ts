import { RoleId } from '@app/enums/Enums';

export interface AuthGuard {
  allowAuth?: boolean;
  disallowAuth?: boolean;
  roleIds?: RoleId[];
  excludeRoleIds?: RoleId[];
  redirect?: string;
}
