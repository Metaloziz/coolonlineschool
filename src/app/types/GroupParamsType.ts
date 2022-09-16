import { ScheduleType } from '@app/types/ScheduleType';

export type GroupParamsType = Partial<{
  perPage: number;
  page: number;
  franchiseId: string;
  forGroupId: string;
  type: string;
  teacherId: string;
  name: string;
  level: string;
  schedule: ScheduleType[];
}>;
