import { CurrentUserType } from '@app/types/UserTypes';

export type UpdateUserPayloadType = Omit<Partial<CurrentUserType>, 'id'>;
