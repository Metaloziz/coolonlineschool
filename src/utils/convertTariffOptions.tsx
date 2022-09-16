import { Option } from '@app/types/Option';
import { TariffsType } from '@app/types/TariffsType';

export const convertTariffOptions = (tariffs: TariffsType[]): Option[] =>
  tariffs.map(item => ({ value: item.id, label: item.name }));
