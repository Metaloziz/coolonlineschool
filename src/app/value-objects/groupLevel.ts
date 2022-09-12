import { GroupLevel } from '@app/enums/GroupLevel';

export const groupLevelObject: { [key in GroupLevel]: string } = {
  [GroupLevel.easy]: 'Младшая группа',
  [GroupLevel.medium]: 'Средняя группа',
  [GroupLevel.hard]: 'Старшая группа',
};
