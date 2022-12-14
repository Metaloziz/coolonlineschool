import { GenderType, RoleId } from '@app/enums';

import { Model } from '../Base';

export interface User extends Model {
  roleId: RoleId;
  firstName: string;
  lastName?: string;
  avatar?: string;
  gender?: GenderType;
  birthday?: string;
}
