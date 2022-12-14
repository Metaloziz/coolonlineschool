import { Nullable } from '@app/types/index';

export type FranchiseShortT = {
  id: string;
  shortName: string;
};

export class FranchiseT {
  id: string = '';

  inn: Nullable<string> = '';

  legalAddress: Nullable<string> = '';

  actualAddress: Nullable<string> = '';

  schoolName: Nullable<string> = '';

  ogrn: Nullable<string> = '';

  kpp: Nullable<string> = '';

  checkingAccount: Nullable<string> = '';

  phone: Nullable<string> = '';

  email: Nullable<string> = '';

  city: Nullable<string> = '';

  shortName: string = '';

  bankBill: Nullable<string> = '';

  bankName: Nullable<string> = '';

  bankBik: Nullable<string> = '';

  bankInn: Nullable<string> = '';

  bankKpp: Nullable<string> = '';

  isActive: Nullable<boolean> = false;
}
