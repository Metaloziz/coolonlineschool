import { FranchiseT } from '@app/types/FranchiseTypes';
import { GroupType } from '@app/types/GroupType';
import { LevelGroupType } from '@app/types/LevelGroupType';
import { ResponseOneGroupCourseType } from '@app/types/ResponseOneGroupCourseType';
import { ScheduleType } from '@app/types/ScheduleType';
import { StatusType } from '@app/types/StatusType';
import { TimeZoneType } from '@app/types/TimeZoneType';
import { UsersDataT } from '@app/types/UsersDataT';
import { CurrentUserType } from '@app/types/UserTypes';

export class ResponseOneGroupType {
  id: string = '';

  name: string = '';

  type: GroupType = 'blocks';

  status: StatusType = 'draft';

  level: LevelGroupType = 'easy';

  startedAt = new TimeZoneType();

  endedAt = new TimeZoneType();

  franchise = new FranchiseT();

  course = new ResponseOneGroupCourseType();

  users: UsersDataT[] = [{ id: '', user: new CurrentUserType(), stats: ['draft'] }];

  schedule: ScheduleType[] = [];

  teacherId: string = '';
}
