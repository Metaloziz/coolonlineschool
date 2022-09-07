import { Status } from '@app/enums/Status';

export interface HomeworkViewModel {
  id?: string;
  title: string;
  text: string;
  gamePresets: string[];
  status: Status;
}
