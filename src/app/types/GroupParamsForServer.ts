import { GroupParamsType } from '@app/types/GroupParamsType';

export type GroupParamsForServer = Partial<{
  dateSince: string;
  dateUntil: string;
}> &
  GroupParamsType;
