import { StatusType } from '@app/types/StatusType';
import { CurrentUserType } from '@app/types/UserTypes';

export type UsersDataT = {
  id: string;
  stats: StatusType[];
  user: CurrentUserType;
};
