import { GroupLevel } from '@app/enums/GroupLevel';
import { GroupLevelMenuType } from '@app/types/GroupLevelMenuType';
import { groupLevelObject } from '@app/value-objects/groupLevel';

export const GROUP_LEVEL_MENU: GroupLevelMenuType[] = [
  { value: GroupLevel.easy, name: groupLevelObject[GroupLevel.easy] },
  { value: GroupLevel.medium, name: groupLevelObject[GroupLevel.medium] },
  { value: GroupLevel.hard, name: groupLevelObject[GroupLevel.hard] },
];
