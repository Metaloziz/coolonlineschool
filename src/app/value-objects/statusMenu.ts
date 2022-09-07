import { Status } from '@app/enums/Status';
import { StatusItemMenuType } from '@app/types/StatusItemMenu';
import { statusObject } from '@app/value-objects/status';

export const STATUS_MENU: StatusItemMenuType[] = [
  { value: Status.draft, name: statusObject[Status.draft] },
  { value: Status.active, name: statusObject[Status.active] },
  { value: Status.removal, name: statusObject[Status.removal] },
  { value: Status.archive, name: statusObject[Status.archive] },
];
