import { CreateGroupType } from '@app/types/CreateGroupType';

export type CreateGroupForServerType = {
  dateSince: string;
  dateUntil: string;
} & CreateGroupType;
