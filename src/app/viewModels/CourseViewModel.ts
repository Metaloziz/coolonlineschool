import { GroupLevel } from '@app/enums/GroupLevel';
import { Status } from '@app/enums/Status';
import { TimeZoneType } from '@app/types/AuthType';

export interface CourseViewModel {
  id?: string;
  title: string;
  level: GroupLevel;
  works?: { index: number; workId: string }[];
  status: Status;
  worksCount?: number;
  createdAt: TimeZoneType;
}
