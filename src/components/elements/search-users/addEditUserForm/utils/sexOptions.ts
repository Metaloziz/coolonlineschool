import { SexEnum } from '@app/enums';

export const sexOptions = Object.values(SexEnum).map(el => ({ label: el, value: el }));
