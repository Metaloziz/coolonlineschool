import { Nullable } from '@app/types/index';
import { LevelGroupType } from '@app/types/LevelGroupType';
import { ScheduleType } from '@app/types/ScheduleType';
import { TimeZoneType } from '@app/types/TimeZoneType';

export type ResponseGroupsType = {
  id: string;
  name: string;
  type: Nullable<string>;
  status: Nullable<string>;
  level: LevelGroupType;
  startedAt: TimeZoneType;
  endedAt: TimeZoneType;
  createdAt: TimeZoneType;
  franchise: string;
  course: string;
  teacherId: string;
  schedule: ScheduleType[];
};
