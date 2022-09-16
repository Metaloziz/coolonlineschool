import { FranchisingViewModel } from '@app/types/FranchisingViewModel';
import { Option } from '@app/types/Option';

export const convertFranchiseeOptions = (franchisees: FranchisingViewModel[]): Option[] =>
  franchisees.map(item => ({ value: item.id!, label: item.shortName }));
