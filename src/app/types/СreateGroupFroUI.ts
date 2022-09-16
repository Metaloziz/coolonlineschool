import { CreateGroupType } from '@app/types/CreateGroupType';

export type CreateGroupFroUI = {
  dateSince: Date;
  dateUntil: Date;
} & CreateGroupType;
