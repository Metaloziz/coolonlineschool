import { GroupLevel } from '@app/enums/GroupLevel';
import { Status } from '@app/enums/Status';
import { Nullable } from '@app/types';

export interface CourseFilterViewModel {
  title: Nullable<string>;
  status: Nullable<Status>;
  level: Nullable<GroupLevel>;
  created_since: Nullable<Date>;
  created_until: Nullable<Date>;
  sort: Nullable<string>;
}
