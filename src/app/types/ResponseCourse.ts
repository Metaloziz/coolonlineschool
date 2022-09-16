import { ResponseWork } from '@app/types/ResponseWork';
import { TimeZoneType } from '@app/types/TimeZoneType';

export type ResponseCourse = {
  id: string;
  title: string;
  level: string;
  works?: ResponseWork[];
  worksCount: number;
  createdAt: TimeZoneType;
};
