export const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const formatDate = (date: Date): string =>
  [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('.');
