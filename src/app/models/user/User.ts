import { GenderType } from '@app/enums/Enums';
import { RoleId } from '@app/enums/Enums';
import { Model } from '../Base';

export interface User extends Model {
  roleId: RoleId;
  firstName: string;
  lastName?: string;
  avatar?: string;
  gender?: GenderType;
  birthday?: string;
}
