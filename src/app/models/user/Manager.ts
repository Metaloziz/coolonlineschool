import { ManagerStatus } from '@app/enums/Enums';
import { User } from './User';

export interface Manager extends User {
  email: string;
  status: ManagerStatus;
  archivedAt?: Date;
}
