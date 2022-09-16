import { Option } from '@app/types/Option';

export const convertEnumOptions = (enumObject: { [key: string]: string }): Option[] => {
  const keys: string[] = Object.keys(enumObject);

  return Object.values(enumObject).map((el, index) => ({ label: el, value: keys[index] }));
};
