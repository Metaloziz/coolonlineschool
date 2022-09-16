import { Nullable } from '@app/types/index';

export class SearchUsersParamsType {
  role?: Nullable<string> = '';

  page?: Nullable<number> = null;

  per_page?: Nullable<number> = null;

  franchise_id?: Nullable<string> = '';

  first_name?: Nullable<string> = '';

  middle_name?: Nullable<string> = '';

  last_name?: Nullable<string> = '';

  city?: Nullable<string> = '';

  birthdate_since?: Nullable<string> = '';

  birthdate_until?: Nullable<string> = '';

  is_payed?: Nullable<boolean> = null;

  phone?: Nullable<number> = null;

  email?: Nullable<string> = '';

  tariff_id?: Nullable<string> = '';

  is_active?: Nullable<boolean> = null;
}
