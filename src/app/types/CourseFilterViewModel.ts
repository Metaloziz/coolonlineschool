import { Nullable } from '@app/types';

export interface CourseFilterViewModel {
  title: string;
  level: string;
  createdAt: Nullable<Date>;
}
