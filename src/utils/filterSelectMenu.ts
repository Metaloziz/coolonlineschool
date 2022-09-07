import { Status } from '@app/enums/Status';
import { StatusItemMenuType } from '@app/types/StatusItemMenu';

export const filterSelectMenu = (status: Status, menu: StatusItemMenuType[]) => {
  const index = menu.findIndex(({ value }) => value === status);
  return menu.slice(index);
};
