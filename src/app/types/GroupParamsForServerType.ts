import { GroupParamsType } from '@app/types/GroupParamsType';

export type GroupParamsForServerType = Partial<{
  dateSince: string;
  dateUntil: string;
}> &
  GroupParamsType;
