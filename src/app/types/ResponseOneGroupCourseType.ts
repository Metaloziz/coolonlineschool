import { TimeZoneType } from '@app/types/TimeZoneType';

export class ResponseOneGroupCourseType {
  id = '';

  type = '';

  status = '';

  title = '';

  level = '';

  worksCount = 0;

  createdAt = new TimeZoneType();

  works: any[] = [];
}
