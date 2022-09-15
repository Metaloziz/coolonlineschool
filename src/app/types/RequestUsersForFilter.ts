export type RequestUsersForFilter = {
  role?: string | null;
  page?: number | null;
  perPage?: number | null;
  franchiseId?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  city?: string | null;
  birthdate_since?: string | null;
  birthdate_until?: string | null;
  is_payed?: boolean | null;
  phone?: number | null;
  email?: string | null;
  tariff_id?: string | null;
  is_active?: boolean | null;
};
