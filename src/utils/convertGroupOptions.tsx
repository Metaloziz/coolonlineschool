import { Option } from '@app/types/Option';

export const convertGroupOptions = (groups: any[]): Option[] =>
  groups.map(item => ({ value: item.id, label: item.name }));
