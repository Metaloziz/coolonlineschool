import { GroupParamsType } from '@app/types/GroupParamsType';

export type GroupParamsForUI = Partial<{
  dateSince: Date | string;
  dateUntil: Date | string;
}> &
  GroupParamsType;
