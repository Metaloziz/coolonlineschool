import { ManagerStatus } from '@app/enums';
import { User } from './User';

export interface Manager extends User {
  email: string;
  status: ManagerStatus;
  archivedAt?: Date;
}
