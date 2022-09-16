import { GroupType } from '@app/types/GroupType';
import { LevelGroupType } from '@app/types/LevelGroupType';
import { ScheduleType } from '@app/types/ScheduleType';
import { StatusType } from '@app/types/StatusType';

export type CreateGroupType = {
  name: string;
  franchiseId: string;
  type: GroupType;
  teacherId: string;
  level: LevelGroupType;
  courseId: string;
  status: StatusType;
  schedule?: ScheduleType[];
};
